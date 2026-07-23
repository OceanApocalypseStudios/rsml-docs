---
id: oceanapocalypsestudios-rsml-diagnostics-errorcategory
title: ErrorCategory
sidebar_label: ErrorCategory
---

# ErrorCategory

Namespace: OceanApocalypseStudios.RSML.Diagnostics

The category of an error, which changes its error code.

```csharp
public enum ErrorCategory
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://learn.microsoft.com/en-us/dotnet/api/system.enum) → [ErrorCategory](./oceanapocalypsestudios/rsml/diagnostics/errorcategory.md)<br>
Implements [IComparable](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://learn.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| General | 0 | Any general error code that is not restricted to any specific category. |
| Internal | 1 | An internal error code. |
| Lexer | 2 | A lexer error code. |
| Parser | 3 | A parser error code. |
| Style | 4 | A style error code. |
