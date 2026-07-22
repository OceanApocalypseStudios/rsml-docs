# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_GetSourceLocation_System_Int32_"></a> Method GetSourceLocation

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_GetSourceLocation_System_Int32_"></a> GetSourceLocation\(Int32\)

Converts an index into a location.

```csharp
public Result<SourceLocation> GetSourceLocation(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)\>

The location.

### Remarks

> [!IMPORTANT]
> Unlike with other <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer" data-throw-if-not-resolved="false"></xref> methods, this one
> does not follow EOF conventions and, because of that, does not accept the 
> EOF index (index at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length" data-throw-if-not-resolved="false"></xref>), because it is not
> considered a location.

