# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLineAsSpan_System_Int32_"></a> Method GetLineAsSpan

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLineAsSpan_System_Int32_"></a> GetLineAsSpan\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
ReadOnlySpan<Char> GetLineAsSpan(Int32 lineNumber)
```

### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

### Returns

 [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The line as a span.

