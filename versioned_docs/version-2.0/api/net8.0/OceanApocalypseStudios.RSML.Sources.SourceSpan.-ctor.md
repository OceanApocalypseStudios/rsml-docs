# <a id="OceanApocalypseStudios_RSML_Sources_SourceSpan__ctor_OceanApocalypseStudios_RSML_Sources_SourceLocation_OceanApocalypseStudios_RSML_Sources_SourceLocation_"></a> Constructor SourceSpan

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_SourceSpan__ctor_OceanApocalypseStudios_RSML_Sources_SourceLocation_OceanApocalypseStudios_RSML_Sources_SourceLocation_"></a> SourceSpan\(SourceLocation, SourceLocation\)

Initializes a new span given a starting and an end indexes.

```csharp
public SourceSpan(SourceLocation start, SourceLocation end)
```

### Parameters

`start` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The start index.

`end` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The end index.

### Exceptions

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

The starting index is greater or equal to the end index.

