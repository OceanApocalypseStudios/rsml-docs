# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetSourceSpan_System_Int32_System_Int32_"></a> Method GetSourceSpan

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetSourceSpan_System_Int32_System_Int32_"></a> GetSourceSpan\(Int32, Int32\)

Converts the buffer region into a span.

```csharp
public Result<SourceSpan> GetSourceSpan(Int32 startIndex, Int32 endIndex)
```

### Parameters

`startIndex` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The starting index.

`endIndex` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The end index, which is included in the span.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)\>

The span.

