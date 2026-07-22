# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_CountUntilEndOfLine_System_Int32_System_Boolean__"></a> Method CountUntilEndOfLine

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_CountUntilEndOfLine_System_Int32_System_Boolean__"></a> CountUntilEndOfLine\(Int32, out Boolean\)

Counts the amount of items until the next line separator in the buffer, relative to a given <code class="paramref">index</code>.
Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

```csharp
Result<Int32> CountUntilEndOfLine(Int32 index, out Boolean isCrLf)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

`isCrLf` [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the line separator at which the method stopped is the CR in a CRLF sequence. If true, the next item in the buffer is LF.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next line separator, relative to an <code class="paramref">index</code>.

