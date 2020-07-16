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
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: com.facebook.react.bridge.ProxyJavaScriptExecutor name: initHybrid sig: (Lcom/facebook/react/bridge/JavaJSExecutor;)Lcom/facebook/jni/HybridData; fnPtr: 0x9ca00b61 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x6fb61
[RegisterNatives] method_count: 0xe
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: initHybrid sig: ()Lcom/facebook/jni/HybridData; fnPtr: 0x9c9e1c65 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x50c65
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: initializeBridge sig: (Lcom/facebook/react/bridge/ReactCallback;Lcom/facebook/react/bridge/JavaScriptExecutor;Lcom/facebook/react/bridge/queue/MessageQueueThread;Lcom/facebook/react/bridge/queue/MessageQueueThread;Ljava/util/Collection;Ljava/util/Collection;)V fnPtr: 0x9c9e2401 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x51401
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniExtendNativeModules sig: (Ljava/util/Collection;Ljava/util/Collection;)V fnPtr: 0x9c9e2f11 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x51f11
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniSetSourceURL sig: (Ljava/lang/String;)V fnPtr: 0x9c9e3171 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x52171
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniRegisterSegment sig: (ILjava/lang/String;)V fnPtr: 0x9c9e3445 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x52445
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniLoadScriptFromAssets sig: (Landroid/content/res/AssetManager;Ljava/lang/String;Z)V fnPtr: 0x9c9e3801 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x52801
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniLoadScriptFromFile sig: (Ljava/lang/String;Ljava/lang/String;Z)V fnPtr: 0x9c9e3b35 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x52b35
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniLoadScriptFromDeltaBundle sig: (Ljava/lang/String;Lcom/facebook/react/bridge/NativeDeltaClient;Z)V fnPtr: 0x9c9e3f61 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x52f61
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniCallJSFunction sig: (Ljava/lang/String;Ljava/lang/String;Lcom/facebook/react/bridge/NativeArray;)V fnPtr: 0x9c9e438d module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x5338d
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniCallJSCallback sig: (ILcom/facebook/react/bridge/NativeArray;)V fnPtr: 0x9c9e4c45 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x53c45
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: setGlobalVariable sig: (Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0x9c9e4f01 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x53f01
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: getJavaScriptContext sig: ()J fnPtr: 0x9c9e509d module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x5409d
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: getJSCallInvokerHolder sig: ()Lcom/facebook/react/turbomodule/core/JSCallInvokerHolderImpl; fnPtr: 0x9c9e519d module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x5419d
[RegisterNatives] java_class: com.facebook.react.bridge.CatalystInstanceImpl name: jniHandleMemoryPressure sig: (I)V fnPtr: 0x9c9e539d module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x5439d
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: com.facebook.react.bridge.queue.NativeRunnable name: run sig: ()V fnPtr: 0x9c9e0935 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x4f935
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: com.facebook.react.bridge.CxxModuleWrapperBase name: getName sig: ()Ljava/lang/String; fnPtr: 0x9ca00e49 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x6fe49
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: com.facebook.react.bridge.CxxModuleWrapper name: makeDsoNative sig: (Ljava/lang/String;Ljava/lang/String;)Lcom/facebook/react/bridge/CxxModuleWrapper; fnPtr: 0x9ca010f9 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x700f9
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: com.facebook.react.bridge.CxxCallbackImpl name: nativeInvoke sig: (Lcom/facebook/react/bridge/NativeArray;)V fnPtr: 0x9ca013bd module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x703bd
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: com.facebook.react.bridge.NativeArray name: toString sig: ()Ljava/lang/String; fnPtr: 0x9c9fec1d module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x6dc1d
[RegisterNatives] method_count: 0x3
[RegisterNatives] java_class: com.facebook.react.bridge.NativeDeltaClient name: initHybrid sig: ()Lcom/facebook/jni/HybridData; fnPtr: 0x9c9ffcfd module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x6ecfd
[RegisterNatives] java_class: com.facebook.react.bridge.NativeDeltaClient name: processDelta sig: (Ljava/nio/channels/ReadableByteChannel;)V fnPtr: 0x9c9ffeed module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x6eeed
[RegisterNatives] java_class: com.facebook.react.bridge.NativeDeltaClient name: reset sig: ()V fnPtr: 0x9c9fffc5 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x6efc5
[RegisterNatives] method_count: 0x2
[RegisterNatives] java_class: com.facebook.react.bridge.ReadableNativeArray name: importArray sig: ()[Ljava/lang/Object; fnPtr: 0x9ca03641 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x72641
[RegisterNatives] java_class: com.facebook.react.bridge.ReadableNativeArray name: importTypeArray sig: ()[Ljava/lang/Object; fnPtr: 0x9ca03b01 module_name: libreactnativejni.so module_base: 0x9c991000 offset: 0x72b01
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