---
id: net10.0-severity
title: Severity
sidebar_label: Severity
---

# Severity

Namespace: OceanApocalypseStudios.RSML.Diagnostics

The severity of an error.

```csharp
public enum Severity : byte
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://learn.microsoft.com/en-us/dotnet/api/system.enum) → [Severity](./oceanapocalypsestudios/rsml/diagnostics/severity.md)<br>
Implements [IComparable](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://learn.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| None | 0 | No severity information. |
| Message | 1 | Messages and hints. |
| Warning | 2 | Non-critical warnings. |
| Error | 3 | Non-critical errors, such as style errors. |
| Critical | 4 | Fatal error that should abort the executing toolchain component. |
