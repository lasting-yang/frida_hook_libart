
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

setImmediate(find_RegisterNatives);
