---
id: oceanapocalypsestudios-rsml-sources-sourcespan
title: SourceSpan
sidebar_label: SourceSpan
---

# SourceSpan

Namespace: OceanApocalypseStudios.RSML.Sources

Represents a span taken from a source.

```csharp
public readonly struct SourceSpan
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>
Implements [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable)<br>
Attributes [IsReadOnlyAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.isreadonlyattribute)

## Fields

### **Empty**

An empty span.

```csharp
public static SourceSpan Empty;
```

## Properties

### **Start**

The start of the span.

```csharp
public SourceLocation Start { get; }
```

#### Property Value

[SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

### **End**

The end of the span.

```csharp
public SourceLocation End { get; }
```

#### Property Value

[SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

### **Length**

The length of the span.

```csharp
public int Length { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **IsSingleLine**

The span is located in a single line.

```csharp
public bool IsSingleLine { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

## Constructors

### **SourceSpan(SourceLocation, SourceLocation)**

Initializes a new span given a starting and an end indexes.

```csharp
public SourceSpan(SourceLocation start, SourceLocation end)
```

#### Parameters

`start` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>
The start index.

`end` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>
The end index.

#### Exceptions

[ArgumentException](https://learn.microsoft.com/en-us/dotnet/api/system.argumentexception)<br>
The starting index is greater or equal to the end index.

## Methods

### **Equals(Object)**

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)?<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Equals(SourceSpan?)**

Checks whether two [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)s are equals.

```csharp
public new bool Equals(SourceSpan? other)
```

#### Parameters

`other` [SourceSpan?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>
The span to check against

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals

### **ToString()**

Returns a generic string representation of the current instance.

```csharp
public override string ToString()
```

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The string representation.

### **ToString(ISource)**

Given a source, tries to return a string that uses said source as a basis for the representation.
 If it fails, it defaults to [SourceSpan.ToString()](./oceanapocalypsestudios/rsml/sources/sourcespan.md#tostring).

```csharp
public string ToString(ISource source)
```

#### Parameters

`source` [ISource](./oceanapocalypsestudios/rsml/sources/isource.md)<br>
The source.

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The string representation.

### **ToString(String, IFormatProvider)**

Given a format, tries to return a string that uses said format as a basis for the representation.
 If it fails, it defaults to [SourceSpan.ToString()](./oceanapocalypsestudios/rsml/sources/sourcespan.md#tostring).

```csharp
public string ToString(string? format, IFormatProvider? formatProvider = null)
```

#### Parameters

`format` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)?<br>
The format. Available formats are: CTOR (constructor-like string) and JSON (struct as JSON).

`formatProvider` [IFormatProvider](https://learn.microsoft.com/en-us/dotnet/api/system.iformatprovider)?<br>
Unused. Don't bother assigning it anything.

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The string representation.

### **GetHashCode()**

```csharp
public override int GetHashCode()
```

#### Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

## Operators

### **operator ==(SourceSpan, SourceSpan)**

Checks whether two [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)s are equals.

```csharp
public static bool operator ==(SourceSpan left, SourceSpan right)
```

#### Parameters

`left` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

`right` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals

### **operator !=(SourceSpan, SourceSpan)**

Checks whether two [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)s are different from each other.

```csharp
public static bool operator !=(SourceSpan left, SourceSpan right)
```

#### Parameters

`left` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

`right` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if different
