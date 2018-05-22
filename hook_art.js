
var ishook_libart = false;

function hook_libart() {
    if (ishook_libart === true) {
        return;
    }
    var symbols = Module.enumerateSymbolsSync("libart.so");
    var addrGetStringUTFChars = undefined;
    var addrNewStringUTF = undefined;
    var addrFindClass = undefined;
    var addrGetMethodID = undefined;
    var addrGetStaticMethodID = undefined;
    var addrGetFieldID = undefined;
    var addrGetStaticFieldID = undefined;
    for (i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        if (symbol.name == "_ZN3art3JNI17GetStringUTFCharsEP7_JNIEnvP8_jstringPh") {
            addrGetStringUTFChars = symbol.address;
            console.log("GetStringUTFChars is at " + addrGetStringUTFChars);
        } else if (symbol.name == "_ZN3art3JNI12NewStringUTFEP7_JNIEnvPKc") {
            addrNewStringUTF = symbol.address;
            console.log("NewStringUTF is at " + addrNewStringUTF);
        } else if (symbol.name == "_ZN3art3JNI9FindClassEP7_JNIEnvPKc") {
            addrFindClass = symbol.address;
            console.log("FindClass is at " + addrFindClass);
        } else if (symbol.name == "_ZN3art3JNI11GetMethodIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetMethodID = symbol.address;
            console.log("GetMethodID is at " + addrGetMethodID);
        } else if (symbol.name == "_ZN3art3JNI17GetStaticMethodIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetStaticMethodID = symbol.address;
            console.log("GetStaticMethodID is at " + addrGetStaticMethodID);
        } else if (symbol.name == "_ZN3art3JNI10GetFieldIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetFieldID = symbol.address;
            console.log("GetFieldID is at " + addrGetFieldID);
        } else if (symbol.name == "_ZN3art3JNI16GetStaticFieldIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetStaticFieldID = symbol.address;
            console.log("GetStaticFieldID is at " + addrGetStaticFieldID);
        }
    }

    if (addrGetStringUTFChars != undefined) {
        Interceptor.attach(addrGetStringUTFChars, {
            onEnter: function(args) {},
            onLeave: function(retval) {
                if (retval != null) {
                    var bytes = Memory.readCString(retval);
                    console.log("[GetStringUTFChars] result:" + bytes);
                }
            }
        });
    }
    if (addrNewStringUTF != undefined) {
        Interceptor.attach(addrNewStringUTF, {
            onEnter: function(args) {
                if (args[1] != null) {
                    var string = Memory.readCString(args[1]);
                    console.log("[NewStringUTF] bytes:" + string);
                }
            },
            onLeave: function(retval) {}
        });
    }
    if (addrFindClass != undefined) {
        Interceptor.attach(addrFindClass, {
            onEnter: function(args) {
                if (args[1] != null) {
                    var name = Memory.readCString(args[1]);
                    console.log("[FindClass] name:" + name);
                }
            },
            onLeave: function(retval) {}
        });
    }
    if (addrGetMethodID != undefined) {
        Interceptor.attach(addrGetMethodID, {
            onEnter: function(args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetMethodID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetMethodID] name:" + name);
                    }

                }
            },
            onLeave: function(retval) {}
        });
    }
    if (addrGetStaticMethodID != undefined) {
        Interceptor.attach(addrGetStaticMethodID, {
            onEnter: function(args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetStaticMethodID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetStaticMethodID] name:" + name);
                    }

                }
            },
            onLeave: function(retval) {}
        });
    }
    if (addrGetFieldID != undefined) {
        Interceptor.attach(addrGetFieldID, {
            onEnter: function(args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetFieldID] name:" + name);
                    }

                }
            },
            onLeave: function(retval) {}
        });
    }
    if (addrGetStaticFieldID != undefined) {
        Interceptor.attach(addrGetStaticFieldID, {
            onEnter: function(args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetStaticFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetStaticFieldID] name:" + name);
                    }

                }
            },
            onLeave: function(retval) {}
        });
    }
    
    ishook_libart = true;
}

hook_libart();

/*

.text:00297024 ; art::JNI::GetStringUTFChars(_JNIEnv *, _jstring *, unsigned char *)
.text:00297024 _ZN3art3JNI17GetStringUTFCharsEP7_JNIEnvP8_jstringPh

.text:0027D960 ; art::JNI::NewStringUTF(_JNIEnv *, char const*)
.text:0027D960 _ZN3art3JNI12NewStringUTFEP7_JNIEnvPKc

.text:0029D238 ; art::JNI::FindClass(_JNIEnv *, char const*)
.text:0029D238 _ZN3art3JNI9FindClassEP7_JNIEnvPKc

.text:00286B14 ; art::JNI::GetMethodID(_JNIEnv *, _jclass *, char const*, char const*)
.text:00286B14 _ZN3art3JNI11GetMethodIDEP7_JNIEnvP7_jclassPKcS6_

.text:0028EC20 ; art::JNI::GetStaticMethodID(_JNIEnv *, _jclass *, char const*, char const*)
.text:0028EC20 _ZN3art3JNI17GetStaticMethodIDEP7_JNIEnvP7_jclassPKcS6_

.text:0028A7CC ; art::JNI::GetFieldID(_JNIEnv *, _jclass *, char const*, char const*)
.text:0028A7CC _ZN3art3JNI10GetFieldIDEP7_JNIEnvP7_jclassPKcS6_

.text:002889B0 ; art::JNI::GetStaticFieldID(_JNIEnv *, _jclass *, char const*, char const*)
.text:002889B0 _ZN3art3JNI16GetStaticFieldIDEP7_JNIEnvP7_jclassPKcS6_
*/