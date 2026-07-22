# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_CountUntilEndOfLine_System_Int32_System_Boolean__"></a> Method CountUntilEndOfLine

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_CountUntilEndOfLine_System_Int32_System_Boolean__"></a> CountUntilEndOfLine\(Int32, out Boolean\)

Counts the amount of items until the next line separator in the buffer, relative to a given <code class="paramref">index</code>.
Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

```csharp
public Result<Int32> CountUntilEndOfLine(Int32 index, out Boolean isCrLf)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

`isCrLf` [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the line separator at which the method stopped is the CR in a CRLF sequence. If true, the next item in the buffer is LF.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next line separator, relative to an <code class="paramref">index</code>.

### Remarks

> [!NOTE]
> This method allows the EOF index as in-range. The convention is as follows:
> - If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0 and <code class="paramref">isCrLf</code> is always <code>false</code>.
> - If the index is the last (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length" data-throw-if-not-resolved="false"></xref> - 1), then the output is always 0.
> [!NOTE]
> <code class="paramref">isCrLf</code> is only <code>true</code> if all the following conditions are true:
> - The next line start counting from <code class="paramref">index</code> is preceded by a CRLF sequence.
> - <code class="paramref">index</code> does not point to the LF in the CRLF sequence.
> - <code class="paramref">index</code> does not point to EOF.

