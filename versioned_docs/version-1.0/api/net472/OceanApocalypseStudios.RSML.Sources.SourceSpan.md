# <a id="OceanApocalypseStudios_RSML_Sources_SourceSpan"></a> Struct SourceSpan

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

 [SourceSpan\(SourceLocation, SourceLocation\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_\_ctor\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Initializes a new span given a starting and an end indexes.

## Fields

 [Empty](OceanApocalypseStudios.RSML.Sources.SourceSpan.Empty.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_Empty)

An empty span.

## Properties

 [End](OceanApocalypseStudios.RSML.Sources.SourceSpan.End.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_End)

The end of the span.

 [IsSingleLine](OceanApocalypseStudios.RSML.Sources.SourceSpan.IsSingleLine.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_IsSingleLine)

The span is located in a single line.

 [Length](OceanApocalypseStudios.RSML.Sources.SourceSpan.Length.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_Length)

The length of the span.

 [Start](OceanApocalypseStudios.RSML.Sources.SourceSpan.Start.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_Start)

The start of the span.

## Methods

 [Equals\(Object\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_Equals\_System\_Object\_)

Indicates whether this instance and a specified object are equal.

 [Equals\(SourceSpan?\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_Equals\_System\_Nullable\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_\_)

Checks whether two <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan" data-throw-if-not-resolved="false"></xref>s are equals.

 [GetHashCode\(\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.GetHashCode.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_GetHashCode)

Returns the hash code for this instance.

 [ToString\(\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_ToString)

Returns a generic string representation of the current instance.

 [ToString\(ISource\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_ToString\_OceanApocalypseStudios\_RSML\_Sources\_ISource\_)

Given a source, tries to return a string that uses said source as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString" data-throw-if-not-resolved="false"></xref>.

 [ToString\(String?, IFormatProvider?\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_ToString\_System\_String\_System\_IFormatProvider\_)

Given a format, tries to return a string that uses said format as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString" data-throw-if-not-resolved="false"></xref>.

## Operators

 [operator ==\(SourceSpan, SourceSpan\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.op\_Equality.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_op\_Equality\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_)

Checks whether two <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan" data-throw-if-not-resolved="false"></xref>s are equals.

 [operator \!=\(SourceSpan, SourceSpan\)](OceanApocalypseStudios.RSML.Sources.SourceSpan.op\_Inequality.md\#OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_op\_Inequality\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_)

Checks whether two <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan" data-throw-if-not-resolved="false"></xref>s are different from each other.

