# hook art

## 1. hook_art

```text
frida -U --no-pause -f package_name -l hook_art.js
```

## 2. hook_RegisterNatives

```text
frida -U --no-pause -f package_name -l hook_RegisterNatives.js
```

### 2.1 show RegisterNatives

```text
only test android8.1.0(arm64), android9(arm64)
```

```text
[RegisterNatives] method_count: 0x6
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeInit sig: ([Ljava/lang/String;)V fnPtr: 0xd44c4349 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130349
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeHasSwitch sig: (Ljava/lang/String;)Z fnPtr: 0xd44c4369 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130369
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeGetSwitchValue sig: (Ljava/lang/String;)Ljava/lang/String; fnPtr: 0xd44c43bd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1303bd
```

## 3 hook_artmethod

### 3.1 init libext first time

```text
adb push lib/libext64.so /data/local/tmp/libext64.so
adb push lib/libext.so /data/local/tmp/libext.so
adb shell su -c "cp /data/local/tmp/libext64.so /data/app/libext64.so"
adb shell su -c "cp /data/local/tmp/libext.so /data/app/libext.so"
adb shell su -c "chown 1000.1000 /data/app/libext*.so"
adb shell su -c "chmod 777 /data/app/libext*.so"
adb shell su -c "ls -al /data/app/libext*"
```

### 3.2 use hook_artmethod.js

```text
frida -U --no-pause -f package_name -l hook_artmethod.js
or
frida -U --no-pause -f package_name -l hook_artmethod.js > hook_artmethod.log
```

### 3.3 show PrettyMethod

```text
     ____
    / _  |   Frida 12.8.0 - A world-class dynamic instrumentation toolkit
   | (_| |
    > _  |   Commands:
   /_/ |_|       help      -> Displays the help system
   . . . .       object?   -> Display information about 'object'
   . . . .       exit/quit -> Exit
   . . . .
   . . . .   More info at https://www.frida.re/docs/home/
Spawning `package_name`...
Spawned `package_name`. Resuming main thread!
[Google Pixel XL::package_name]-> void java.lang.Thread.<init>(java.lang.ThreadGroup, java.lang.String, int, boolean)
void java.lang.ThreadGroup.add(java.lang.Thread)
void java.lang.Thread.<init>(java.lang.ThreadGroup, java.lang.String, int, boolean)
void java.lang.ThreadGroup.add(java.lang.Thread)
void android.app.ActivityThread.main(java.lang.String[])
void java.lang.ref.FinalizerReference.add(java.lang.Object)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
void java.lang.ref.FinalizerReference.add(java.lang.Object)
void java.lang.ref.FinalizerReference.add(java.lang.Object)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
boolean android.os.Binder.execTransact(int, long, long, int)
void java.lang.ref.FinalizerReference.add(java.lang.Object)
void java.lang.ref.FinalizerReference.add(java.lang.Object)
void java.lang.ref.FinalizerReference.add(java.lang.Object)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
android.os.BinderProxy android.os.BinderProxy.getInstance(long, long)
```