# <a id="OceanApocalypseStudios_RSML_Diagnostics_Diagnostic_ToString"></a> Method ToString

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Diagnostics_Diagnostic_ToString"></a> ToString\(\)

Returns a generic string representation of the current instance.

```csharp
public override String ToString()
```

### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

## <a id="OceanApocalypseStudios_RSML_Diagnostics_Diagnostic_ToString_System_String_System_IFormatProvider_"></a> ToString\(String?, IFormatProvider?\)

Given a format, tries to return a string that uses said format as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Diagnostics.Diagnostic.ToString" data-throw-if-not-resolved="false"></xref>.

```csharp
public String ToString(String? format, IFormatProvider? formatProvider)
```

### Parameters

`format` [String](https://learn.microsoft.com/dotnet/api/system.string)?

The format. Available formats are: CTOR (constructor-like string), LOG (output-ready format) and JSON (struct as JSON).

`formatProvider` [IFormatProvider](https://learn.microsoft.com/dotnet/api/system.iformatprovider)?

Unused. Don't bother assigning it anything.

### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

