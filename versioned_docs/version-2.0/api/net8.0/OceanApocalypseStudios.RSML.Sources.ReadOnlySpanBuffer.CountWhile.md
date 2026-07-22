# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_CountWhile_System_Func_System_Int32_System_Char_System_Boolean__System_Int32_"></a> Method CountWhile

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_CountWhile_System_Func_System_Int32_System_Char_System_Boolean__System_Int32_"></a> CountWhile\(Func<Int32, Char, Boolean\>, Int32\)

Counts the amount of items, starting from a given <code class="paramref">index</code>,
while a <code class="paramref">predicate</code> returns <code>true</code>.

```csharp
public readonly Result<Int32> CountWhile(Func<Int32, Char, Boolean> predicate, Int32 index)
```

### Parameters

`predicate` [Func](https://learn.microsoft.com/dotnet/api/system.func\-3)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32), [Char](https://learn.microsoft.com/dotnet/api/system.char), [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)\>

A function that takes the current index (relative to <code class="paramref">index</code>),
which is incremented every item, and the item associated with it. Execution stops when
the predicate returns <code>false</code> or the index is out of bounds.

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting; all indexes will also be given to the
<code class="paramref">predicate</code> as an offset that when added to the index of the position
equal the actual index.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The amount of items counted.

### Remarks

> [!NOTE]
> This method allows the EOF index as in-range.
> If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0.
> [!NOTE]
> The return value, when summed with <code class="paramref">index</code>, becomes the index of the first character that
> fails to verify the <code class="paramref">predicate</code>, counting from <code class="paramref">index</code>.
> The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that fail to verify
> the <code class="paramref">predicate</code>), meaning the return value, when summed with <code class="paramref">index</code> is the value of
> <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length" data-throw-if-not-resolved="false"></xref>, which is also the EOF index.

