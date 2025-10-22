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
```

### 2.2 lookup RegisterNative method
Sometimes you don't want to use spawn to start the App, you just want to view the methods registered using RegisterNatives in a class,

at this time you can use the lookup_RegisterNative_method function

If you think there is a problem with fnPtr, please modify the entry_point_from_quick_compiled_code_name_array in fuzzy_search_data_offset

```text
frida -UF -l hook_RegisterNatives.js
```
```
RegisterNatives is at  0x754e71704c _ZN3art3JNIILb0EE15RegisterNativesEP7_JNIEnvP7_jclassPK15JNINativeMethodi
RegisterNatives is at  0x754e7200b0 _ZN3art3JNIILb1EE15RegisterNativesEP7_JNIEnvP7_jclassPK15JNINativeMethodi

[Pixel 6::App ] -> lookup_RegisterNative_method("com.tencent.mmkv.MMKV")

fnPtr='0x74a18223f0 libmmkv.so!0x193f0' method='private static native boolean com.tencent.mmkv.MMKV.checkProcessMode(long)'
fnPtr='0x74a18223f0 libmmkv.so!0x193f0' method='private static native boolean com.tencent.mmkv.MMKV.checkProcessMode(long)'
fnPtr='0x74a1821e9c libmmkv.so!0x18e9c' method='private native boolean com.tencent.mmkv.MMKV.containsKey(long,java.lang.String)'
fnPtr='0x74a181f21c libmmkv.so!0x1621c' method='private native boolean com.tencent.mmkv.MMKV.containsKey(long,java.lang.String)'
fnPtr='0x74a1821f9c libmmkv.so!0x18f9c' method='private native long com.tencent.mmkv.MMKV.count(long)'
fnPtr='0x74a181f21c libmmkv.so!0x1621c' method='private native long com.tencent.mmkv.MMKV.count(long)'
fnPtr='0x74a1822228 libmmkv.so!0x19228' method='private static native long com.tencent.mmkv.MMKV.createNB(int)'
fnPtr='0x74a182096c libmmkv.so!0x1796c' method='private native boolean com.tencent.mmkv.MMKV.decodeBool(long,java.lang.String,boolean)'
```

## 3 hook_artmethod

```text

frida -U --no-pause -f package_name -l hook_artmethod.js -o hook_artmethod.log
```

### 3.1 show PrettyMethod

```text
     ____
    / _  |   Frida 14.2.18 - A world-class dynamic instrumentation toolkit
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
```