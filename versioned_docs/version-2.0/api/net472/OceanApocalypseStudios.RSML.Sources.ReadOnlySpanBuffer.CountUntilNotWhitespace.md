# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_CountUntilNotWhitespace_System_Int32_"></a> Method CountUntilNotWhitespace

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_CountUntilNotWhitespace_System_Int32_"></a> CountUntilNotWhitespace\(Int32\)

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

```csharp
public readonly Result<Int32> CountUntilNotWhitespace(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next non-whitespace item, relative to a <code class="paramref">index</code>.

### Remarks

> [!NOTE]
> This method allows the EOF index as in-range.
> If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0.
> [!NOTE]
> The return value, when summed with <code class="paramref">index</code>, becomes the index of the first character that
> is not whitespace, counting from <code class="paramref">index</code>.
> The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that are
> not whitespace), meaning the return value, when summed with <code class="paramref">index</code> is the value of
> <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length" data-throw-if-not-resolved="false"></xref>, which is also the EOF index.

