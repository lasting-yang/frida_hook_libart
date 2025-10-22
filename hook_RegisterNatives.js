
function find_RegisterNatives(params) {
    let addrRegisterNatives = null;
    if (Frida.version != undefined) {
        const major = parseInt(Frida.version.split('.')[0], 10);
        if (major >= 17) {
            Process.findModuleByName("libart.so").enumerateSymbols().map(symbol => {
                if (symbol.name.indexOf("art") >= 0 &&
                    symbol.name.indexOf("JNI") >= 0 &&
                    symbol.name.indexOf("RegisterNatives") >= 0 &&
                    symbol.name.indexOf("CheckJNI") < 0) {
                    addrRegisterNatives = symbol.address;
                    console.log("RegisterNatives is at ", symbol.address, symbol.name);
                    hook_RegisterNatives(addrRegisterNatives)
                }
            })

            return;
        }
    }
    let symbols = Module.enumerateSymbolsSync("libart.so");
    
    for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i];
        //_ZN3art3JNI15RegisterNativesEP7_JNIEnvP7_jclassPK15JNINativeMethodi
        if (symbol.name.indexOf("art") >= 0 &&
            symbol.name.indexOf("JNI") >= 0 &&
            symbol.name.indexOf("RegisterNatives") >= 0 &&
            symbol.name.indexOf("CheckJNI") < 0) {
            addrRegisterNatives = symbol.address;
            console.log("RegisterNatives is at ", symbol.address, symbol.name);
            hook_RegisterNatives(addrRegisterNatives)
        }
    }

}

function hook_RegisterNatives(addrRegisterNatives) {

    if (addrRegisterNatives != null) {
        Interceptor.attach(addrRegisterNatives, {
            onEnter: function (args) {
                console.log("[RegisterNatives] method_count:", args[3]);
                let java_class = args[1];
                let class_name = Java.vm.tryGetEnv().getClassName(java_class);
                //console.log(class_name);

                let methods_ptr = ptr(args[2]);

                let method_count = parseInt(args[3]);
                for (let i = 0; i < method_count; i++) {
                    
                    let name_ptr = ptr(methods_ptr.add(i * Process.pointerSize * 3)).readPointer();
                    let sig_ptr = ptr(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize)).readPointer();
                    let fnPtr_ptr = ptr(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2)).readPointer();

                    let name = ptr(name_ptr).readCString();
                    let sig = ptr(sig_ptr).readCString();
                    let symbol = DebugSymbol.fromAddress(fnPtr_ptr)
                    console.log("[RegisterNatives] java_class:", class_name, "name:", name, "sig:", sig, "fnPtr:", fnPtr_ptr, " fnOffset:", symbol, " callee:", DebugSymbol.fromAddress(this.returnAddress));
                }
            }
        });
    }
}

/**
 * 
 class EXPORT ArtMethod final {
  // Must be the last fields in the method.
  struct PtrSizedFields {
    // Depending on the method type, the data is
    //   - native method: pointer to the JNI function registered to this method
    //                    or a function to resolve the JNI function,
    //   - resolution method: pointer to a function to resolve the method and
    //                        the JNI function for @CriticalNative.
    //   - conflict method: ImtConflictTable,
    //   - abstract/interface method: the single-implementation if any,
    //   - proxy method: the original interface method or constructor,
    //   - default conflict method: null
    //   - other methods: during AOT the code item offset, at runtime a pointer
    //                    to the code item.
    void* data_;

    // Method dispatch from quick compiled code invokes this pointer which may cause bridging into
    // the interpreter.
    void* entry_point_from_quick_compiled_code_;
  } ptr_sized_fields_;
}
 */

function get_handle(object) {
    return object?.$handle ?? object?.$h ?? object?.handle;
}


function fuzzy_search_data_offset(ptr_art_method) {
    let entry_point_from_quick_compiled_code_name_array = ["art_quick_generic_jni_trampoline", "art_jni_trampoline", "QuickGenericJniTrampoline"];
    for (let i = 0; i < 0x200; i++) {
        let symbol = DebugSymbol.fromAddress(ptr_art_method.add(Process.pointerSize * i).readPointer())
        let symbol_name = symbol.name;
        // console.log(`Maybe different Android systems have different entry_point_from_quick_compiled_code_name: symbol=${symbol}`)
        if (entry_point_from_quick_compiled_code_name_array.includes(symbol_name)) {
            return Process.pointerSize * (i - 1);
        } else if (symbol_name == "art_jni_dlsym_lookup_stub") {
            return -1;
        }
    }
}

function lookup_RegisterNative_method(class_name) {
    Java.perform(() => {
        let class_wrapper = Java.use(class_name);
        let Modifier = Java.use("java.lang.reflect.Modifier");
    
        class_wrapper.class.getDeclaredMethods().map(method => {
            if (Modifier.isNative(method.getModifiers())) {
                let name = method.getName();
                class_wrapper[name].overloads.map(overload => {
                    let method_handle = get_handle(overload);
                    
                    let data_offset = fuzzy_search_data_offset(method_handle);
                    if (data_offset == -1) {
                        console.log(`not RegisterNative method='${method}'`)
                        return;
                    }
                    
                    if (data_offset != undefined && data_offset != 0) {
                        //If you think there is a problem with fnPtr, please modify the entry_point_from_quick_compiled_code_name_array in fuzzy_search_data_offset
                        console.log(`fnPtr='${DebugSymbol.fromAddress(ptr(method_handle).add(data_offset).readPointer())}' method='${method}'`)
                    } else {
                        console.log(method, data_offset)
                    }
                })
            }
        })
    })
}


setImmediate(find_RegisterNatives);
