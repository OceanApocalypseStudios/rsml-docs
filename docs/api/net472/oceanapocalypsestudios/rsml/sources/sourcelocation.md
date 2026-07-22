---
id: net472-sourcelocation
title: SourceLocation
sidebar_label: SourceLocation
---

# SourceLocation

Namespace: OceanApocalypseStudios.RSML.Sources

Specifies the location of an item in a [ISource](./oceanapocalypsestudios/rsml/sources/isource.md).

```csharp
public readonly struct SourceLocation
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>
Implements [IEquatable&lt;SourceLocation&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IEquatable&lt;Int32&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable), [IComparable&lt;SourceLocation&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable-1), [IComparable&lt;Int32&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable-1)<br>
Attributes [IsReadOnlyAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.isreadonlyattribute)

## Properties

### **Line**

The 0-based line number, counting from the start of the source.

```csharp
public int Line { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **Column**

The 0-based column number, which is the index of the item relative to the start of the line it is in.

```csharp
public int Column { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **Index**

The absolute 0-based index of the item in the source.

```csharp
public int Index { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

## Constructors

### **SourceLocation(Int32, Int32, Int32)**

Specifies the location of an item in a [ISource](./oceanapocalypsestudios/rsml/sources/isource.md).

```csharp
public SourceLocation(int index, int line, int column)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based index.

`line` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

`column` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based column number (the index relative to the start of the line).

## Methods

### **CompareTo(Int32)**

Compares the index of the location to another index.

```csharp
public int CompareTo(int other)
```

#### Parameters

`other` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index to compare against.

#### Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **CompareTo(SourceLocation)**

```csharp
public int CompareTo(SourceLocation other)
```

#### Parameters

`other` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **Equals(Object)**

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Equals(SourceLocation)**

Checks if two [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)s are equal to each other.

```csharp
public new bool Equals(SourceLocation other)
```

#### Parameters

`other` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>
The other [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md).

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **Equals(Int32)**

Checks if two indexes are equal to each other.

```csharp
public new bool Equals(int other)
```

#### Parameters

`other` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The other location's index.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

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
 If it fails, it defaults to [SourceLocation.ToString()](./oceanapocalypsestudios/rsml/sources/sourcelocation.md#tostring).

```csharp
public string ToString(string? format, IFormatProvider? formatProvider)
```

#### Parameters

`format` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)?<br>
The format. Available formats are: CTOR (constructor-like string) and JSON (struct as JSON).

`formatProvider` [IFormatProvider](https://learn.microsoft.com/en-us/dotnet/api/system.iformatprovider)?<br>
Unused. Don't bother assigning it anything.

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The string representation.

## Operators

### **operator ==(SourceLocation, SourceLocation)**

Checks if two [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)s are equal to each other.

```csharp
public static bool operator ==(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

`right` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **operator !=(SourceLocation, SourceLocation)**

Checks if two [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)s are different from each other.

```csharp
public static bool operator !=(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

`right` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if different.

### **operator &lt;(SourceLocation, SourceLocation)**

Checks if `left` is strictly less than `right`.

```csharp
public static bool operator <(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

`right` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **operator &gt;(SourceLocation, SourceLocation)**

Checks if `left` is strictly greater than `right`.

```csharp
public static bool operator >(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

`right` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **operator &gt;=(SourceLocation, SourceLocation)**

Checks if `left` is greather than or equal to `right`.

```csharp
public static bool operator >=(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

`right` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **operator &lt;=(SourceLocation, SourceLocation)**

Checks if `left` is less than or equal to `right`.

```csharp
public static bool operator <=(SourceLocation left, SourceLocation right)
```

#### Parameters

`left` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

`right` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
