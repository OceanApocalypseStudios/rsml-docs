# <a id="OceanApocalypseStudios_RSML_Diagnostics_Diagnostic"></a> Struct Diagnostic

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

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

 [Diagnostic\(ErrorCode, SourceSpan, String, Severity\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.\-ctor.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_\_ctor\_OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCode\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_System\_String\_OceanApocalypseStudios\_RSML\_Diagnostics\_Severity\_)

A diagnostic reported by RSML's API.

## Properties

 [Category](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.Category.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_Category)

The error's category.

 [Code](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.Code.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_Code)

The error's code. Contains information about the category of the error.

 [IsInternal](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.IsInternal.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_IsInternal)

Checks whether the error is internal (API error results, for example).

 [Message](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.Message.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_Message)

A brief error message detailing why it has happened.

 [Severity](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.Severity.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_Severity)

The error's severity.

 [Span](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.Span.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_Span)

The span the error relates to.

## Methods

 [Equals\(Object\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.Equals.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_Equals\_System\_Object\_)

Indicates whether this instance and a specified object are equal.

 [Equals\(Diagnostic\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.Equals.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_Equals\_OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_)

Indicates whether the current object is equal to another object of the same type.

 [GetHashCode\(\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.GetHashCode.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_GetHashCode)

Returns the hash code for this instance.

 [ToString\(\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.ToString.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_ToString)

Returns a generic string representation of the current instance.

 [ToString\(String?, IFormatProvider?\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.ToString.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_ToString\_System\_String\_System\_IFormatProvider\_)

Given a format, tries to return a string that uses said format as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.ToString" data-throw-if-not-resolved="false"></xref>.

## Operators

 [operator ==\(Diagnostic, Diagnostic\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.op\_Equality.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_op\_Equality\_OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_)

Checks if two <xref href="OceanApocalypseStudios.RSML.Diagnostics.Diagnostic" data-throw-if-not-resolved="false"></xref>s are equal to each other.

 [operator \!=\(Diagnostic, Diagnostic\)](OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.op\_Inequality.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_op\_Inequality\_OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_OceanApocalypseStudios\_RSML\_Diagnostics\_Diagnostic\_)

Checks if two <xref href="OceanApocalypseStudios.RSML.Diagnostics.Diagnostic" data-throw-if-not-resolved="false"></xref>s are different from each other.

