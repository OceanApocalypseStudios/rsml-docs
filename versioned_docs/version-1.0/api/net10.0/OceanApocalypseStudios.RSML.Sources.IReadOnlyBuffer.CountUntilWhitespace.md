# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_CountUntilWhitespace_System_Int32_"></a> Method CountUntilWhitespace

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_CountUntilWhitespace_System_Int32_"></a> CountUntilWhitespace\(Int32\)

Counts the amount of items until the next whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

```csharp
Result<Int32> CountUntilWhitespace(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next whitespace item, relative to a <code class="paramref">index</code>.

