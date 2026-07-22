# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_TryGetLineFromIndex_System_Int32_System_Span_System_Char__"></a> Method TryGetLineFromIndex

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_TryGetLineFromIndex_System_Int32_System_Span_System_Char__"></a> TryGetLineFromIndex\(Int32, Span<Char\>\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
Boolean TryGetLineFromIndex(Int32 index, Span<Char> destination)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

`destination` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The destination span that will contain the line.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if successful.

