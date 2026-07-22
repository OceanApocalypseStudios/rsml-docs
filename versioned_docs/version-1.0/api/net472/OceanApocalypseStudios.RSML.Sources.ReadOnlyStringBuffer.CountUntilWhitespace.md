# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_CountUntilWhitespace_System_Int32_"></a> Method CountUntilWhitespace

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_CountUntilWhitespace_System_Int32_"></a> CountUntilWhitespace\(Int32\)

Counts the amount of items until the next whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

```csharp
public Result<Int32> CountUntilWhitespace(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next whitespace item, relative to a <code class="paramref">index</code>.

### Remarks

> [!NOTE]
> This method allows the EOF index as in-range.
> If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0.
> [!NOTE]
> The return value, when summed with <code class="paramref">index</code>, becomes the index of the first character that
> is whitespace, counting from <code class="paramref">index</code>.
> The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that are
> whitespace), meaning the return value, when summed with <code class="paramref">index</code> is the value of
> <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>, which is also the EOF index.

