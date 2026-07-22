# <a id="OceanApocalypseStudios_RSML_Sources_SourceSpan_ToString"></a> Method ToString

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_SourceSpan_ToString"></a> ToString\(\)

Returns a generic string representation of the current instance.

```csharp
public override String ToString()
```

### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

## <a id="OceanApocalypseStudios_RSML_Sources_SourceSpan_ToString_OceanApocalypseStudios_RSML_Sources_ISource_"></a> ToString\(ISource\)

Given a source, tries to return a string that uses said source as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString" data-throw-if-not-resolved="false"></xref>.

```csharp
public String ToString(ISource source)
```

### Parameters

`source` [ISource](OceanApocalypseStudios.RSML.Sources.ISource.md)

The source.

### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

## <a id="OceanApocalypseStudios_RSML_Sources_SourceSpan_ToString_System_String_System_IFormatProvider_"></a> ToString\(String?, IFormatProvider?\)

Given a format, tries to return a string that uses said format as a basis for the representation.
If it fails, it defaults to <xref href="OceanApocalypseStudios.RSML.Sources.SourceSpan.ToString" data-throw-if-not-resolved="false"></xref>.

```csharp
public String ToString(String? format, IFormatProvider? formatProvider = null)
```

### Parameters

`format` [String](https://learn.microsoft.com/dotnet/api/system.string)?

The format. Available formats are: CTOR (constructor-like string) and JSON (struct as JSON).

`formatProvider` [IFormatProvider](https://learn.microsoft.com/dotnet/api/system.iformatprovider)?

Unused. Don't bother assigning it anything.

### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The string representation.

