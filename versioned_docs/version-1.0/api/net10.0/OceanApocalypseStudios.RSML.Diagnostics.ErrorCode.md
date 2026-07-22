# <a id="OceanApocalypseStudios_RSML_Diagnostics_ErrorCode"></a> Struct ErrorCode

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

Represents a code specific to an error.

```csharp
public record struct ErrorCode : IEquatable<ErrorCode>
```

#### Implements

[IEquatable<ErrorCode\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

 [ErrorCode\(ErrorCategory, Int32\)](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.\-ctor.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCode\_\_ctor\_OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCategory\_System\_Int32\_)

Represents a code specific to an error.

## Fields

 [LanguagePrefix](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.LanguagePrefix.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCode\_LanguagePrefix)

The prefix for all error codes related to RSML.

## Properties

 [Category](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.Category.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCode\_Category)

The category of the error.

 [CategoryPrefix](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.CategoryPrefix.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCode\_CategoryPrefix)

The specific prefix for each error category.

 [Code](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.Code.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCode\_Code)

The error code.

## Methods

 [ToString\(\)](OceanApocalypseStudios.RSML.Diagnostics.ErrorCode.ToString.md\#OceanApocalypseStudios\_RSML\_Diagnostics\_ErrorCode\_ToString)

Returns the formatted error code.

