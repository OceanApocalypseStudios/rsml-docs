# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_GetLineAsSpanFromIndex_System_Int32_"></a> Method GetLineAsSpanFromIndex

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_GetLineAsSpanFromIndex_System_Int32_"></a> GetLineAsSpanFromIndex\(Int32\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
public ReadOnlySpan<Char> GetLineAsSpanFromIndex(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

### Returns

 [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The line, as a span.

