---
id: "OceanApocalypseStudios.RSML.Sources.SourceSpan.md"
managed-by: python-postprocessor
---

# Struct SourceSpan

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

Represents a span taken from a source.

```csharp
public readonly struct SourceSpan : IFormattable
```

#### Implements

[IFormattable](https://learn.microsoft.com/dotnet/api/system.iformattable)

#### Inherited Members

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### SourceSpan\(SourceLocation, SourceLocation\)

Initializes a new span given a starting and an end indexes.

```csharp
public SourceSpan(SourceLocation start, SourceLocation end)
```

#### Parameters

`start` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The start index.

`end` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The end index.

#### Exceptions

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

The starting index is greater or equal to the end index.

## Fields

### Empty

An empty span.

```csharp
public static readonly SourceSpan Empty
```

#### Field Value

 [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

## Properties

### End

The end of the span.

```csharp
public SourceLocation End { get; }
```

#### Property Value

 [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

### IsSingleLine

The span is located in a single line.

```csharp
public Boolean IsSingleLine { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### Length

The length of the span.

```csharp
public Int32 Length { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

### Start

The start of the span.

```csharp
public SourceLocation Start { get; }
```

#### Property Value

 [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

## Methods

### Equals\(Object\)

Indicates whether this instance and a specified object are equal.

```csharp
public override Boolean Equals(Object obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current instance.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals\(SourceSpan?\)

Checks whether two <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan" data-throw-if-not-resolved="false"></xref>s are equals.

```csharp
public Boolean Equals(SourceSpan? other)
```

#### Parameters

`other` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)?

The span to check against

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals

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

### ToString\(ISource\)

Given a source, tries to return a string that uses said source as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString" data-throw-if-not-resolved="false"></xref>.

```csharp
public String ToString(ISource source)
```

#### Parameters

`source` [ISource](OceanApocalypseStudios.RSML.Sources.ISource.md)

The source.

#### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

### ToString\(String?, IFormatProvider?\)

Given a format, tries to return a string that uses said format as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString" data-throw-if-not-resolved="false"></xref>.

```csharp
public String ToString(String? format, IFormatProvider? formatProvider = null)
```

#### Parameters

`format` [String](https://learn.microsoft.com/dotnet/api/system.string)?

The format. Available formats are: CTOR (constructor-like string) and JSON (struct as JSON).

`formatProvider` [IFormatProvider](https://learn.microsoft.com/dotnet/api/system.iformatprovider)?

Unused. Don't bother assigning it anything.

#### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

## Operators

### operator ==\(SourceSpan, SourceSpan\)

Checks whether two <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan" data-throw-if-not-resolved="false"></xref>s are equals.

```csharp
public static Boolean operator ==(SourceSpan left, SourceSpan right)
```

#### Parameters

`left` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

`right` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals

### operator \!=\(SourceSpan, SourceSpan\)

Checks whether two <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan" data-throw-if-not-resolved="false"></xref>s are different from each other.

```csharp
public static Boolean operator !=(SourceSpan left, SourceSpan right)
```

#### Parameters

`left` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

`right` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if different

