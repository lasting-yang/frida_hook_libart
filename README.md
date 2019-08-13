# hook_art

```text
frida -U --no-pause -f package_name -l hook_art.js
```

## hook_RegisterNatives

```text
frida -U --no-pause -f package_name -l hook_RegisterNatives.js
```

### show RegisterNatives

```text
only test android8.1.0(arm64), android9(arm64)
```

```text
[RegisterNatives] method_count: 0x6
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeInit sig: ([Ljava/lang/String;)V fnPtr: 0xd44c4349 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130349
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeHasSwitch sig: (Ljava/lang/String;)Z fnPtr: 0xd44c4369 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130369
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeGetSwitchValue sig: (Ljava/lang/String;)Ljava/lang/String; fnPtr: 0xd44c43bd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1303bd
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeAppendSwitch sig: (Ljava/lang/String;)V fnPtr: 0xd44c4461 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130461
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeAppendSwitchWithValue sig: (Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd44c4499 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130499
[RegisterNatives] java_class: org.chromium.base.CommandLine name: nativeAppendSwitchesAndArguments sig: ([Ljava/lang/String;)V fnPtr: 0xd44c44f1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1304f1
[RegisterNatives] method_count: 0x3
[RegisterNatives] java_class: org.chromium.base.EarlyTraceEvent name: nativeRecordEarlyEvent sig: (Ljava/lang/String;JJIJ)V fnPtr: 0xd44c494d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x13094d
[RegisterNatives] java_class: org.chromium.base.EarlyTraceEvent name: nativeRecordEarlyStartAsyncEvent sig: (Ljava/lang/String;JJ)V fnPtr: 0xd44c4a3d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130a3d
[RegisterNatives] java_class: org.chromium.base.EarlyTraceEvent name: nativeRecordEarlyFinishAsyncEvent sig: (Ljava/lang/String;JJ)V fnPtr: 0xd44c4ae5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130ae5
[RegisterNatives] method_count: 0x4
[RegisterNatives] java_class: org.chromium.base.FieldTrialList name: nativeFindFullName sig: (Ljava/lang/String;)Ljava/lang/String; fnPtr: 0xd44c4b8d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130b8d
[RegisterNatives] java_class: org.chromium.base.FieldTrialList name: nativeTrialExists sig: (Ljava/lang/String;)Z fnPtr: 0xd44c4bff module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130bff
[RegisterNatives] java_class: org.chromium.base.FieldTrialList name: nativeGetVariationParameter sig: (Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String; fnPtr: 0xd44c4c2f module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130c2f
[RegisterNatives] java_class: org.chromium.base.FieldTrialList name: nativeLogActiveTrials sig: ()V fnPtr: 0xd44c4d1d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130d1d
[RegisterNatives] method_count: 0x2
[RegisterNatives] java_class: org.chromium.base.JavaExceptionReporter name: nativeReportJavaException sig: (ZLjava/lang/Throwable;)V fnPtr: 0xd44c4f27 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130f27
[RegisterNatives] java_class: org.chromium.base.JavaExceptionReporter name: nativeReportJavaStackTrace sig: (Ljava/lang/String;)V fnPtr: 0xd44c4f33 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130f33
[RegisterNatives] method_count: 0x2
[RegisterNatives] java_class: org.chromium.base.JavaHandlerThread name: nativeInitializeThread sig: (JJ)V fnPtr: 0xd44c4f3f module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130f3f
[RegisterNatives] java_class: org.chromium.base.JavaHandlerThread name: nativeOnLooperStopped sig: (J)V fnPtr: 0xd44c5003 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x131003
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.MemoryPressureListener name: nativeOnMemoryPressure sig: (I)V fnPtr: 0xd44c61a5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1321a5
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.TimeUtils name: nativeGetTimeTicksNowUs sig: ()J fnPtr: 0xd44c70e9 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1330e9
[RegisterNatives] method_count: 0xa
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeRegisterEnabledObserver sig: ()V fnPtr: 0xd44c7101 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x133101
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeStartATrace sig: ()V fnPtr: 0xd44c71ad module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1331ad
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeStopATrace sig: ()V fnPtr: 0xd44c71bb module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1331bb
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeInstant sig: (Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd44c71c9 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1331c9
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeBegin sig: (Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd44c7369 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x133369
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeEnd sig: (Ljava/lang/String;Ljava/lang/String;)V fnPtr: 0xd44c7509 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x133509
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeBeginToplevel sig: (Ljava/lang/String;)V fnPtr: 0xd44c76a9 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1336a9
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeEndToplevel sig: (Ljava/lang/String;)V fnPtr: 0xd44c7729 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x133729
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeStartAsync sig: (Ljava/lang/String;J)V fnPtr: 0xd44c77a9 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1337a9
[RegisterNatives] java_class: org.chromium.base.TraceEvent name: nativeFinishAsync sig: (Ljava/lang/String;J)V fnPtr: 0xd44c7851 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x133851
[RegisterNatives] method_count: 0x8
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeRecordCustomTimesHistogramMilliseconds sig: (Ljava/lang/String;JIIII)J fnPtr: 0xd44c64bd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1324bd
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeRecordBooleanHistogram sig: (Ljava/lang/String;JZ)J fnPtr: 0xd44c6595 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132595
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeRecordEnumeratedHistogram sig: (Ljava/lang/String;JII)J fnPtr: 0xd44c661d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x13261d
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeRecordCustomCountHistogram sig: (Ljava/lang/String;JIIII)J fnPtr: 0xd44c66ed module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1326ed
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeRecordLinearCountHistogram sig: (Ljava/lang/String;JIIII)J fnPtr: 0xd44c67bd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1327bd
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeRecordSparseHistogram sig: (Ljava/lang/String;JI)J fnPtr: 0xd44c688d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x13288d
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeGetHistogramValueCountForTesting sig: (Ljava/lang/String;I)I fnPtr: 0xd44c6911 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132911
[RegisterNatives] java_class: org.chromium.base.metrics.RecordHistogram name: nativeGetHistogramTotalCountForTesting sig: (Ljava/lang/String;)I fnPtr: 0xd44c697d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x13297d
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.net.X509Util name: nativeNotifyKeyChainChanged sig: ()V fnPtr: 0xd44ec499 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x158499
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: J.N name: M7xB0tc0 sig: (Ljava/lang/String;[JI)V fnPtr: 0xd44c35bd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x12f5bd
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.ApplicationStatus name: nativeOnApplicationStateChange sig: (I)V fnPtr: 0xd44c36cd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x12f6cd
[RegisterNatives] method_count: 0x2
[RegisterNatives] java_class: org.chromium.base.CpuFeatures name: nativeGetCoreCount sig: ()I fnPtr: 0xd44c4905 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130905
[RegisterNatives] java_class: org.chromium.base.CpuFeatures name: nativeGetCpuFeatures sig: ()J fnPtr: 0xd44c4929 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130929
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.ImportantFileWriterAndroid name: nativeWriteFileAtomically sig: (Ljava/lang/String;[B)Z fnPtr: 0xd44c4e99 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x130e99
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.PathService name: nativeOverride sig: (ILjava/lang/String;)V fnPtr: 0xd44c61ab module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1321ab
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.PowerMonitor name: nativeOnBatteryChargingChanged sig: ()V fnPtr: 0xd44c7ad5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x133ad5
[RegisterNatives] method_count: 0x3
[RegisterNatives] java_class: org.chromium.base.metrics.RecordUserAction name: nativeRecordUserAction sig: (Ljava/lang/String;)V fnPtr: 0xd44c69e5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1329e5
[RegisterNatives] java_class: org.chromium.base.metrics.RecordUserAction name: nativeAddActionCallbackForTesting sig: (Lorg/chromium/base/metrics/RecordUserAction$UserActionCallback;)J fnPtr: 0xd44c6a11 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132a11
[RegisterNatives] java_class: org.chromium.base.metrics.RecordUserAction name: nativeRemoveActionCallbackForTesting sig: (J)V fnPtr: 0xd44c6a7d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132a7d
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.metrics.StatisticsRecorderAndroid name: nativeToJson sig: (I)Ljava/lang/String; fnPtr: 0xd44c6bfd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132bfd
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.base.task.PostTask name: nativePostDelayedTask sig: (ZIZZB[BLjava/lang/Runnable;J)V fnPtr: 0xd44c6c51 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132c51
[RegisterNatives] method_count: 0x4
[RegisterNatives] java_class: org.chromium.base.task.TaskRunnerImpl name: nativeInit sig: (IZIZZB[B)J fnPtr: 0xd44c6efd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132efd
[RegisterNatives] java_class: org.chromium.base.task.TaskRunnerImpl name: nativeDestroy sig: (J)V fnPtr: 0xd44c6fd1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x132fd1
[RegisterNatives] java_class: org.chromium.base.task.TaskRunnerImpl name: nativePostDelayedTask sig: (JLjava/lang/Runnable;J)V fnPtr: 0xd44c700d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x13300d
[RegisterNatives] java_class: org.chromium.base.task.TaskRunnerImpl name: nativeBelongsToCurrentThread sig: (J)Z fnPtr: 0xd44c70dd module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x1330dd
[RegisterNatives] method_count: 0x2
[RegisterNatives] java_class: org.chromium.net.GURLUtils name: nativeGetOrigin sig: (Ljava/lang/String;)Ljava/lang/String; fnPtr: 0xd44e0bc9 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14cbc9
[RegisterNatives] java_class: org.chromium.net.GURLUtils name: nativeGetScheme sig: (Ljava/lang/String;)Ljava/lang/String; fnPtr: 0xd44e0c4b module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14cc4b
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.net.HttpNegotiateAuthenticator name: nativeSetResult sig: (JILjava/lang/String;)V fnPtr: 0xd44e0cd1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14ccd1
[RegisterNatives] method_count: 0x1
[RegisterNatives] java_class: org.chromium.net.HttpUtil name: nativeIsAllowedHeader sig: (Ljava/lang/String;Ljava/lang/String;)Z fnPtr: 0xd44e0969 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14c969
[RegisterNatives] method_count: 0x6
[RegisterNatives] java_class: org.chromium.net.NetworkChangeNotifier name: nativeNotifyConnectionTypeChanged sig: (JIJ)V fnPtr: 0xd44e14a1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14d4a1
[RegisterNatives] java_class: org.chromium.net.NetworkChangeNotifier name: nativeNotifyMaxBandwidthChanged sig: (JI)V fnPtr: 0xd44e1609 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14d609
[RegisterNatives] java_class: org.chromium.net.NetworkChangeNotifier name: nativeNotifyOfNetworkConnect sig: (JJI)V fnPtr: 0xd44e1721 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14d721
[RegisterNatives] java_class: org.chromium.net.NetworkChangeNotifier name: nativeNotifyOfNetworkSoonToDisconnect sig: (JJ)V fnPtr: 0xd44e17d9 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14d7d9
[RegisterNatives] java_class: org.chromium.net.NetworkChangeNotifier name: nativeNotifyOfNetworkDisconnect sig: (JJ)V fnPtr: 0xd44e183d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14d83d
[RegisterNatives] java_class: org.chromium.net.NetworkChangeNotifier name: nativeNotifyPurgeActiveNetworkList sig: (J[J)V fnPtr: 0xd44e18f5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x14d8f5
[RegisterNatives] method_count: 0x2
[RegisterNatives] java_class: org.chromium.net.ProxyChangeListener name: nativeProxySettingsChangedTo sig: (JLjava/lang/String;ILjava/lang/String;[Ljava/lang/String;)V fnPtr: 0xd4532a6d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x19ea6d
[RegisterNatives] java_class: org.chromium.net.ProxyChangeListener name: nativeProxySettingsChanged sig: (J)V fnPtr: 0xd4532aa1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0x19eaa1
[RegisterNatives] method_count: 0x6
[RegisterNatives] java_class: org.chromium.net.impl.CronetBidirectionalStream name: nativeCreateBidirectionalStream sig: (JZZZIZI)J fnPtr: 0xd4449341 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb5341
[RegisterNatives] java_class: org.chromium.net.impl.CronetBidirectionalStream name: nativeStart sig: (JLjava/lang/String;ILjava/lang/String;[Ljava/lang/String;Z)I fnPtr: 0xd44493b1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb53b1
[RegisterNatives] java_class: org.chromium.net.impl.CronetBidirectionalStream name: nativeSendRequestHeaders sig: (J)V fnPtr: 0xd44495e1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb55e1
[RegisterNatives] java_class: org.chromium.net.impl.CronetBidirectionalStream name: nativeReadData sig: (JLjava/nio/ByteBuffer;II)Z fnPtr: 0xd4449645 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb5645
[RegisterNatives] java_class: org.chromium.net.impl.CronetBidirectionalStream name: nativeWritevData sig: (J[Ljava/nio/ByteBuffer;[I[IZ)Z fnPtr: 0xd4449711 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb5711
[RegisterNatives] java_class: org.chromium.net.impl.CronetBidirectionalStream name: nativeDestroy sig: (JZ)V fnPtr: 0xd44498f5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb58f5
[RegisterNatives] method_count: 0x2
[RegisterNatives] java_class: org.chromium.net.impl.CronetLibraryLoader name: nativeCronetInitOnInitThread sig: ()V fnPtr: 0xd444a9e5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb69e5
[RegisterNatives] java_class: org.chromium.net.impl.CronetLibraryLoader name: nativeGetCronetVersion sig: ()Ljava/lang/String; fnPtr: 0xd444aa29 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb6a29
[RegisterNatives] method_count: 0x6
[RegisterNatives] java_class: org.chromium.net.impl.CronetUploadDataStream name: nativeAttachUploadDataToRequest sig: (JJ)J fnPtr: 0xd444b725 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7725
[RegisterNatives] java_class: org.chromium.net.impl.CronetUploadDataStream name: nativeCreateAdapterForTesting sig: ()J fnPtr: 0xd444b76d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb776d
[RegisterNatives] java_class: org.chromium.net.impl.CronetUploadDataStream name: nativeCreateUploadDataStreamForTesting sig: (JJ)J fnPtr: 0xd444b785 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7785
[RegisterNatives] java_class: org.chromium.net.impl.CronetUploadDataStream name: nativeOnReadSucceeded sig: (JIZ)V fnPtr: 0xd444b7a1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb77a1
[RegisterNatives] java_class: org.chromium.net.impl.CronetUploadDataStream name: nativeOnRewindSucceeded sig: (J)V fnPtr: 0xd444b829 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7829
[RegisterNatives] java_class: org.chromium.net.impl.CronetUploadDataStream name: nativeDestroy sig: (J)V fnPtr: 0xd444b885 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7885
[RegisterNatives] method_count: 0x8
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeCreateRequestAdapter sig: (JLjava/lang/String;IZZZZIZI)J fnPtr: 0xd444bc59 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7c59
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeSetHttpMethod sig: (JLjava/lang/String;)Z fnPtr: 0xd444bd75 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7d75
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeAddRequestHeader sig: (JLjava/lang/String;Ljava/lang/String;)Z fnPtr: 0xd444bd9f module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7d9f
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeStart sig: (J)V fnPtr: 0xd444bde5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7de5
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeFollowDeferredRedirect sig: (J)V fnPtr: 0xd444bdeb module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7deb
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeReadData sig: (JLjava/nio/ByteBuffer;II)Z fnPtr: 0xd444bdf1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7df1
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeDestroy sig: (JZ)V fnPtr: 0xd444be3d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7e3d
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequest name: nativeGetStatus sig: (JLorg/chromium/net/impl/VersionSafeCallbacks$UrlRequestStatusListener;)V fnPtr: 0xd444be4d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb7e4d
[RegisterNatives] method_count: 0xe
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeCreateRequestContextConfig sig: (Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;ZZZIJLjava/lang/String;JZZI)J fnPtr: 0xd444c679 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8679
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeAddQuicHint sig: (JLjava/lang/String;II)V fnPtr: 0xd444c791 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8791
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeAddPkp sig: (JLjava/lang/String;[[BZJ)V fnPtr: 0xd444c7d5 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb87d5
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeCreateRequestContextAdapter sig: (J)J fnPtr: 0xd444c985 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8985
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeSetMinLogLevel sig: (I)I fnPtr: 0xd444c9f1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb89f1
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeGetHistogramDeltas sig: ()[B fnPtr: 0xd444ca05 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8a05
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeDestroy sig: (J)V fnPtr: 0xd444ca4b module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8a4b
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeStartNetLogToFile sig: (JLjava/lang/String;Z)Z fnPtr: 0xd444ca57 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8a57
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeStartNetLogToDisk sig: (JLjava/lang/String;ZI)V fnPtr: 0xd444ca8b module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8a8b
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeStopNetLog sig: (J)V fnPtr: 0xd444cabb module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8abb
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeInitRequestContextOnInitThread sig: (J)V fnPtr: 0xd444cac1 module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8ac1
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeConfigureNetworkQualityEstimatorForTesting sig: (JZZZ)V fnPtr: 0xd444cadb module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8adb
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeProvideRTTObservations sig: (JZ)V fnPtr: 0xd444caff module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8aff
[RegisterNatives] java_class: org.chromium.net.impl.CronetUrlRequestContext name: nativeProvideThroughputObservations sig: (JZ)V fnPtr: 0xd444cb0d module_name: libcronet.76.0.3809.21.so module_base: 0xd4394000 offset: 0xb8b0d

```
