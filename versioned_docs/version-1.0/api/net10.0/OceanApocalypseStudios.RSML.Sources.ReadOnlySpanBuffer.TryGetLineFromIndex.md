# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_TryGetLineFromIndex_System_Int32_System_Span_System_Char__"></a> Method TryGetLineFromIndex

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_TryGetLineFromIndex_System_Int32_System_Span_System_Char__"></a> TryGetLineFromIndex\(Int32, scoped Span<Char\>\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
public Boolean TryGetLineFromIndex(Int32 index, scoped Span<Char> destination)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

`destination` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The destination span that will contain the line.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if successful.

### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1). If <code class="paramref">index</code> is EOF, the
> line will also be EOF.

