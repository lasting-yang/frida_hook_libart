
function hook_native() {
    var module_libart = Process.findModuleByName("libart.so");
    var symbols = module_libart.enumerateSymbols();
    var ArtMethod_Invoke = null;
    var ArtMethod_PrettyMethod = null;
    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        var address = symbol.address;
        var name = symbol.name;
        var indexArtMethod = name.indexOf("ArtMethod");
        var indexInvoke = name.indexOf("Invoke");
        var indexThread = name.indexOf("Thread");
        if (indexArtMethod >= 0
            && indexInvoke >= 0
            && indexThread >= 0
            && indexArtMethod < indexInvoke
            && indexInvoke < indexThread) {
            console.log(name);
            ArtMethod_Invoke = address;
        }

        if (indexArtMethod >= 0 && name.indexOf("PrettyMethod") >= 0 && name.indexOf("Eb") >= 0) {
            console.log(name);
            ArtMethod_PrettyMethod = address;
        }
    }

    var module_libext = null;
    if (Process.arch === "arm64") {
        module_libext = Module.load("/data/app/libext64.so");
    } else if (Process.arch === "arm") {
        module_libext = Module.load("/data/app/libext.so");
    }
    if (module_libext != null) {
        var addr_PrettyMethod = module_libext.findExportByName("PrettyMethod");
        var PrettyMethod = new NativeFunction(addr_PrettyMethod, "void", ["pointer", "pointer", "pointer", "int"]);

        if (ArtMethod_Invoke) {
            var foo_ArtMethod_PrettyMethod = new NativeFunction(ArtMethod_PrettyMethod, "pointer", ["pointer", "int"]);
            console.log(foo_ArtMethod_PrettyMethod);
            Interceptor.attach(ArtMethod_Invoke, {
                onEnter: function (args) {
                    try {
                        var result = Memory.alloc(0x100);
                        PrettyMethod(ArtMethod_PrettyMethod, args[0], result, 0x100);
                        console.log(result.readCString());

                    } catch (error) {
                        console.log(error);
                    }

                }, onLeave: function (retval) {

                }
            });
        }
    }
}

function main() {
    hook_native();
}

setImmediate(main);