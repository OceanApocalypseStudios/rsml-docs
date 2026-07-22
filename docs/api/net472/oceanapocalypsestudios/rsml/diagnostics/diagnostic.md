---
id: net472-diagnostic
title: Diagnostic
sidebar_label: Diagnostic
---

# Diagnostic

Namespace: OceanApocalypseStudios.RSML.Diagnostics

A diagnostic reported by RSML's API.

```csharp
public readonly struct Diagnostic
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>
Implements [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable), [IEquatable&lt;Diagnostic&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1)<br>
Attributes [NullableContextAttribute](./system/runtime/compilerservices/nullablecontextattribute.md), [NullableAttribute](./system/runtime/compilerservices/nullableattribute.md), [IsReadOnlyAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.isreadonlyattribute)

## Properties

### **Span**

The span the error relates to.

```csharp
public SourceSpan Span { get; }
```

#### Property Value

[SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

### **Code**

The error's code. Contains information about the category of the error.

```csharp
public ErrorCode Code { get; }
```

#### Property Value

[ErrorCode](./oceanapocalypsestudios/rsml/diagnostics/errorcode.md)<br>

### **Category**

The error's category.

```csharp
public ErrorCategory Category { get; }
```

#### Property Value

[ErrorCategory](./oceanapocalypsestudios/rsml/diagnostics/errorcategory.md)<br>

### **IsInternal**

Checks whether the error is internal (API error results, for example).

```csharp
public bool IsInternal { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Message**

A brief error message detailing why it has happened.

```csharp
public string Message { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Severity**

The error's severity.

```csharp
public Severity Severity { get; }
```

#### Property Value

[Severity](./oceanapocalypsestudios/rsml/diagnostics/severity.md)<br>

## Constructors

### **Diagnostic(ErrorCode, SourceSpan, String, Severity)**

A diagnostic reported by RSML's API.

```csharp
public Diagnostic(ErrorCode code, SourceSpan span, string message, Severity severity)
```

#### Parameters

`code` [ErrorCode](./oceanapocalypsestudios/rsml/diagnostics/errorcode.md)<br>
The error code.

`span` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>
The span the error relates to.

`message` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
A brief error message detailing why it has happened.

`severity` [Severity](./oceanapocalypsestudios/rsml/diagnostics/severity.md)<br>
The error's severity.

## Methods

### **Equals(Object)**

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Equals(Diagnostic)**

```csharp
public new bool Equals(Diagnostic other)
```

#### Parameters

`other` [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **GetHashCode()**

```csharp
public override int GetHashCode()
```

#### Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **ToString()**

Returns a generic string representation of the current instance.

```csharp
public override string ToString()
```

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The string representation.

### **ToString(String, IFormatProvider)**

Given a format, tries to return a string that uses said format as a basis for the representation.
 If it fails, it defaults to [Diagnostic.ToString()](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md#tostring).

```csharp
public string ToString(string? format, IFormatProvider? formatProvider)
```

#### Parameters

`format` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)?<br>
The format. Available formats are: CTOR (constructor-like string), LOG (output-ready format) and JSON (struct as JSON).

`formatProvider` [IFormatProvider](https://learn.microsoft.com/en-us/dotnet/api/system.iformatprovider)?<br>
Unused. Don't bother assigning it anything.

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The string representation.

## Operators

### **operator ==(Diagnostic, Diagnostic)**

Checks if two [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)s are equal to each other.

```csharp
public static bool operator ==(Diagnostic left, Diagnostic right)
```

#### Parameters

`left` [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>

`right` [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **operator !=(Diagnostic, Diagnostic)**

Checks if two [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)s are different from each other.

```csharp
public static bool operator !=(Diagnostic left, Diagnostic right)
```

#### Parameters

`left` [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>

`right` [Diagnostic](./oceanapocalypsestudios/rsml/diagnostics/diagnostic.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if different.
