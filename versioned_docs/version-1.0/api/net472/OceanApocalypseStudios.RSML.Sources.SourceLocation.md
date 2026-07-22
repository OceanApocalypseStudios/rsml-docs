# <a id="OceanApocalypseStudios_RSML_Sources_SourceLocation"></a> Struct SourceLocation

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

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

 [SourceLocation\(Int32, Int32, Int32\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_\_ctor\_System\_Int32\_System\_Int32\_System\_Int32\_)

Specifies the location of an item in a <xref href="OceanApocalypseStudios.RSML.Sources.ISource" data-throw-if-not-resolved="false"></xref>.

## Properties

 [Column](OceanApocalypseStudios.RSML.Sources.SourceLocation.Column.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_Column)

The 0-based column number, which is the index of the item relative to the start of the line it is in.

 [Index](OceanApocalypseStudios.RSML.Sources.SourceLocation.Index.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_Index)

The absolute 0-based index of the item in the source.

 [Line](OceanApocalypseStudios.RSML.Sources.SourceLocation.Line.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_Line)

The 0-based line number, counting from the start of the source.

## Methods

 [CompareTo\(Int32\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.CompareTo.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_CompareTo\_System\_Int32\_)

Compares the index of the location to another index.

 [CompareTo\(SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.CompareTo.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_CompareTo\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.

 [Equals\(Object\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_Equals\_System\_Object\_)

Indicates whether this instance and a specified object are equal.

 [Equals\(SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_Equals\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Checks if two <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation" data-throw-if-not-resolved="false"></xref>s are equal to each other.

 [Equals\(Int32\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_Equals\_System\_Int32\_)

Checks if two indexes are equal to each other.

 [GetHashCode\(\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.GetHashCode.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_GetHashCode)

Returns the hash code for this instance.

 [ToString\(\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.ToString.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_ToString)

Returns a generic string representation of the current instance.

 [ToString\(String?, IFormatProvider?\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.ToString.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_ToString\_System\_String\_System\_IFormatProvider\_)

Given a format, tries to return a string that uses said format as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation.ToString" data-throw-if-not-resolved="false"></xref>.

## Operators

 [operator ==\(SourceLocation, SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.op\_Equality.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_op\_Equality\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Checks if two <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation" data-throw-if-not-resolved="false"></xref>s are equal to each other.

 [operator \>\(SourceLocation, SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.op\_GreaterThan.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_op\_GreaterThan\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Checks if <code class="paramref">left</code> is strictly greater than <code class="paramref">right</code>.

 [operator \>=\(SourceLocation, SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.op\_GreaterThanOrEqual.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_op\_GreaterThanOrEqual\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Checks if <code class="paramref">left</code> is greather than or equal to <code class="paramref">right</code>.

 [operator \!=\(SourceLocation, SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.op\_Inequality.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_op\_Inequality\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Checks if two <xref href="OceanApocalypseStudios.RSML.Sources.SourceLocation" data-throw-if-not-resolved="false"></xref>s are different from each other.

 [operator <\(SourceLocation, SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.op\_LessThan.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_op\_LessThan\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Checks if <code class="paramref">left</code> is strictly less than <code class="paramref">right</code>.

 [operator <=\(SourceLocation, SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceLocation.op\_LessThanOrEqual.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_op\_LessThanOrEqual\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Checks if <code class="paramref">left</code> is less than or equal to <code class="paramref">right</code>.

