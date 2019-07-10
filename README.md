# hook_art
```
frida -U --no-pause -f package_name -l hook_art.js
```

## show
```
RegisterNatives] method_count: 0x2c
[RegisterNatives] name: nativeSetCrashLogFilesUploaded sig: ()V fnPtr: 0xd494d568 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetForeground sig: (Z)V fnPtr: 0xd494d580 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetProcessType sig: (Z)V fnPtr: 0xd494d59c module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeChangeState sig: (Ljava/lang/String;Ljava/lang/String;Z)Z fnPtr: 0xd494da74 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetCrashCustoms sig: (ZZIIIIZZZIZ)V fnPtr: 0xd494d5b8 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeUpdateSignals sig: (III)V fnPtr: 0xd494d678 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetZip sig: (ZLjava/lang/String;I)V fnPtr: 0xd494dc68 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetCrashLogFileNames sig: (Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd494dcb4 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetFolderNames sig: (Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd494dd30 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetProcessNames sig: (Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd494ddd0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetVersionInfo sig: (Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd494de28 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetLogStrategy sig: (ZZJ)V fnPtr: 0xd494d6a0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeGetNativeBuildseq sig: ()Ljava/lang/String; fnPtr: 0xd494d8ac module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeUpdateCrashLogNames sig: ()V fnPtr: 0xd494d6dc module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeAddHeaderInfo sig: (Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd494deb8 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeAddDumpFile sig: (Ljava/lang/String;Ljava/lang/String;ZZZZZ)I fnPtr: 0xd494df0c module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeAddCallbackInfo sig: (Ljava/lang/String;ZZJI)I fnPtr: 0xd494dfb0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeGetCallbackInfo sig: (Ljava/lang/String;JIZ)Ljava/lang/String; fnPtr: 0xd494e020 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeCreateCachedInfo sig: (Ljava/lang/String;I)Z fnPtr: 0xd494e0ac module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeAddCachedInfo sig: (Ljava/lang/String;Ljava/lang/String;)Z fnPtr: 0xd494e0f0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetPackageInfo sig: (Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd494e14c module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSetMobileInfo sig: (Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd494e1c8 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeInitNative sig: ()V fnPtr: 0xd494d4a0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeInstallBreakpad sig: (II)V fnPtr: 0xd494d4b4 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeUninstallBreakpad sig: ()V fnPtr: 0xd494d4d0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeBreakpadInited sig: (Ljava/lang/String;)V fnPtr: 0xd494d9e0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativePrepareUnexpInfos sig: (Z)V fnPtr: 0xd494d4e4 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeGenerateUnexpLog sig: (JI)I fnPtr: 0xd494d500 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeReserveFileHandle sig: (II)V fnPtr: 0xd494d7a4 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeRegisterCurrentThread sig: (Ljava/lang/String;)V fnPtr: 0xd494dbd0 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeOpenFile sig: (Ljava/lang/String;)I fnPtr: 0xd494dc04 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeCloseFile sig: (I)V fnPtr: 0xd494d530 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeLockFile sig: (IZ)Z fnPtr: 0xd494d548 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeDumpThreads sig: (Ljava/lang/String;J)Ljava/lang/String; fnPtr: 0xd494f0fc module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeUpdateUnexpInfo sig: (I)V fnPtr: 0xd494d744 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSyncStatus sig: (Ljava/lang/String;Ljava/lang/String;I)Z fnPtr: 0xd494ea2c module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeSyncInfo sig: (Ljava/lang/String;Ljava/lang/String;JJ)Z fnPtr: 0xd494ec54 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeGetOrSetIsolatedHostFd sig: (II)I fnPtr: 0xd494d75c module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeIsolateCreateConnection sig: (Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)J fnPtr: 0xd494ee40 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeIsolateWriteData sig: (JLjava/lang/String;)I fnPtr: 0xd494e46c module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeIsolateCloseConnection sig: (J)V fnPtr: 0xd494d6f4 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeIsCrashing sig: ()Z fnPtr: 0xd494d51c module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeLog sig: (ILjava/lang/String;Ljava/lang/String;)I fnPtr: 0xd494e244 module_name: libcrashsdk.so module_base: 0xd4948000
[RegisterNatives] name: nativeCrash sig: (II)V fnPtr: 0xd494e864 module_name: libcrashsdk.so module_base: 0xd4948000
```