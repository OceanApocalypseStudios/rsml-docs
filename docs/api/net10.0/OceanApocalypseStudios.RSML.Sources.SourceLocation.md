---
id: "OceanApocalypseStudios.RSML.Sources.SourceLocation.md"
managed-by: python-postprocessor
---

# Struct SourceLocation

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

Specifies the location of an item in a <xref href="OceanApocalypseStudios.RSML.Sources.ISource" data-throw-if-not-resolved="false"></xref>.

```csharp
public readonly struct SourceLocation : IEquatable<SourceLocation>, IEquatable<Int32>, IFormattable, IComparable<SourceLocation>, IComparable<Int32>
```

#### Implements

[IEquatable<SourceLocation\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<Int32\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IFormattable](https://learn.microsoft.com/dotnet/api/system.iformattable), 
[IComparable<SourceLocation\>](https://learn.microsoft.com/dotnet/api/system.icomparable\-1), 
[IComparable<Int32\>](https://learn.microsoft.com/dotnet/api/system.icomparable\-1)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SourceLocation\(Int32, Int32, Int32\)

Specifies the location of an item in a <xref href="OceanApocalypseStudios.RSML.Sources.ISource" data-throw-if-not-resolved="false"></xref>.

```csharp
public SourceLocation(Int32 index, Int32 line, Int32 column)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based index.

`line` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

`column` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based column number (the index relative to the start of the line).

## Properties

### Column

The 0-based column number, which is the index of the item relative to the start of the line it is in.

```csharp
public Int32 Column { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

### Index

The absolute 0-based index of the item in the source.

```csharp
public Int32 Index { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

### Line

The 0-based line number, counting from the start of the source.

```csharp
public Int32 Line { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### CompareTo\(Int32\)

Compares the index of the location to another index.

```csharp
public Int32 CompareTo(Int32 other)
```

#### Parameters

`other` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index to compare against.

#### Returns

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

### CompareTo\(SourceLocation\)

Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.

```csharp
public Int32 CompareTo(SourceLocation other)
```

#### Parameters

`other` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

An object to compare with this instance.

#### Returns

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

A value that indicates the relative order of the objects being compared. The return value has these meanings:

 <table><thead><tr><th class="term"> Value</th><th class="description"> Meaning</th></tr></thead><tbody><tr><td class="term"> Less than zero</td><td class="description"> This instance precedes <code class="paramref">other</code> in the sort order.</td></tr><tr><td class="term"> Zero</td><td class="description"> This instance occurs in the same position in the sort order as <code class="paramref">other</code>.</td></tr><tr><td class="term"> Greater than zero</td><td class="description"> This instance follows <code class="paramref">other</code> in the sort order.</td></tr></tbody></table>

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

### Equals\(SourceLocation\)

Checks if two <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation" data-throw-if-not-resolved="false"></xref>s are equal to each other.

```csharp
public Boolean Equals(SourceLocation other)
```

#### Parameters

`other` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The other <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### Equals\(Int32\)

Checks if two indexes are equal to each other.

```csharp
public Boolean Equals(Int32 other)
```

#### Parameters

`other` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The other location's index.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

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
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation.ToString" data-throw-if-not-resolved="false"></xref>.

```csharp
public String ToString(String? format, IFormatProvider? formatProvider)
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

### operator ==\(SourceLocation, SourceLocation\)

Checks if two <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation" data-throw-if-not-resolved="false"></xref>s are equal to each other.

```csharp
public static Boolean operator ==(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

`right` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### operator \>\(SourceLocation, SourceLocation\)

Checks if <code class="paramref">left</code> is strictly greater than <code class="paramref">right</code>.

```csharp
public static Boolean operator >(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

`right` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \>=\(SourceLocation, SourceLocation\)

Checks if <code class="paramref">left</code> is greather than or equal to <code class="paramref">right</code>.

```csharp
public static Boolean operator >=(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

`right` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(SourceLocation, SourceLocation\)

Checks if two <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation" data-throw-if-not-resolved="false"></xref>s are different from each other.

```csharp
public static Boolean operator !=(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

`right` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if different.

### operator <\(SourceLocation, SourceLocation\)

Checks if <code class="paramref">left</code> is strictly less than <code class="paramref">right</code>.

```csharp
public static Boolean operator <(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

`right` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator <=\(SourceLocation, SourceLocation\)

Checks if <code class="paramref">left</code> is less than or equal to <code class="paramref">right</code>.

```csharp
public static Boolean operator <=(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

`right` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

