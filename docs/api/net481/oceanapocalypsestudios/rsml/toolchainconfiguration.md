---
id: net481-toolchainconfiguration
title: ToolchainConfiguration
sidebar_label: ToolchainConfiguration
---

# ToolchainConfiguration

Namespace: OceanApocalypseStudios.RSML

Configuration options for a [IToolchainComponent](./oceanapocalypsestudios/rsml/itoolchaincomponent.md).

```csharp
public enum ToolchainConfiguration
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://learn.microsoft.com/en-us/dotnet/api/system.enum) → [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>
Implements [IComparable](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://learn.microsoft.com/en-us/dotnet/api/system.iconvertible)<br>
Attributes [FlagsAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.flagsattribute)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| DisableExtensionProcessing | 1 | Optimizes the toolchain pipeline by disabling extension processing. |
| AllowOnlyOASExtensions | 2 | Only allows OceanApocalypseStudios extensions, leading to an error if any non-OAS extension is active. |
| IgnoreBrokenExtensions | 4 | Ignores all errors caused by broken or faulty extensions. |
| IgnoreDuplicatedExtensions | 8 | Ignores all errors caused by injecting already injected extensions. |
| IgnoreAllExtensibilityErrors | 12 | Ignores all errors thrown during pipeline creation and pipeline execution. |
