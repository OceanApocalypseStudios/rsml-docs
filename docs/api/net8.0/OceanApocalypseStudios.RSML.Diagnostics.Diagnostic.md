---
id: "OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md"
managed-by: python-postprocessor
---

# Struct Diagnostic

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

A diagnostic reported by RSML's API.

```csharp
public readonly struct Diagnostic : IFormattable, IEquatable<Diagnostic>
```

#### Implements

[IFormattable](https://learn.microsoft.com/dotnet/api/system.iformattable), 
[IEquatable<Diagnostic\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Diagnostic\(ErrorCode, SourceSpan, String, Severity\)

A diagnostic reported by RSML's API.

```csharp
public Diagnostic(ErrorCode code, SourceSpan span, String message, Severity severity)
```

#### Parameters

`code` [ErrorCode](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.md)

The error code.

`span` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

The span the error relates to.

`message` [String](https://learn.microsoft.com/dotnet/api/system.string)

A brief error message detailing why it has happened.

`severity` [Severity](OceanApocalypseStudios.RSML.Diagnostics.Severity.md)

The error's severity.

## Properties

### Category

The error's category.

```csharp
public ErrorCategory Category { get; }
```

#### Property Value

 [ErrorCategory](OceanApocalypseStudios.RSML.Diagnostics.ErrorCategory.md)

### Code

The error's code. Contains information about the category of the error.

```csharp
public ErrorCode Code { get; }
```

#### Property Value

 [ErrorCode](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.md)

### IsInternal

Checks whether the error is internal (API error results, for example).

```csharp
public Boolean IsInternal { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### Message

A brief error message detailing why it has happened.

```csharp
public String Message { get; }
```

#### Property Value

 [String](https://learn.microsoft.com/dotnet/api/system.string)

### Severity

The error's severity.

```csharp
public Severity Severity { get; }
```

#### Property Value

 [Severity](OceanApocalypseStudios.RSML.Diagnostics.Severity.md)

### Span

The span the error relates to.

```csharp
public SourceSpan Span { get; }
```

#### Property Value

 [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

## Methods

### Equals\(Object?\)

Indicates whether this instance and a specified object are equal.

```csharp
public override Boolean Equals(Object? obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/dotnet/api/system.object)?

The object to compare with the current instance.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals\(Diagnostic\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public Boolean Equals(Diagnostic other)
```

#### Parameters

`other` [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

An object to compare with this object.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode\(\)

Returns the hash code for this instance.

```csharp
public override Int32 GetHashCode()
```

#### Returns

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

A 32-bit signed integer that is the hash code for this instance.

### ToString\(\)

Returns a generic string representation of the current instance.

```csharp
public override String ToString()
```

#### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

### ToString\(String?, IFormatProvider?\)

Given a format, tries to return a string that uses said format as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.ToString" data-throw-if-not-resolved="false"></xref>.

```csharp
public String ToString(String? format, IFormatProvider? formatProvider)
```

#### Parameters

`format` [String](https://learn.microsoft.com/dotnet/api/system.string)?

The format. Available formats are: CTOR (constructor-like string), LOG (output-ready format) and JSON (struct as JSON).

`formatProvider` [IFormatProvider](https://learn.microsoft.com/dotnet/api/system.iformatprovider)?

Unused. Don't bother assigning it anything.

#### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

## Operators

### operator ==\(Diagnostic, Diagnostic\)

Checks if two <xref href="OceanApocalypseStudios.RSML.Diagnostics.Diagnostic" data-throw-if-not-resolved="false"></xref>s are equal to each other.

```csharp
public static Boolean operator ==(Diagnostic left, Diagnostic right)
```

#### Parameters

`left` [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

`right` [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### operator \!=\(Diagnostic, Diagnostic\)

Checks if two <xref href="OceanApocalypseStudios.RSML.Diagnostics.Diagnostic" data-throw-if-not-resolved="false"></xref>s are different from each other.

```csharp
public static Boolean operator !=(Diagnostic left, Diagnostic right)
```

#### Parameters

`left` [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

`right` [Diagnostic](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if different.

