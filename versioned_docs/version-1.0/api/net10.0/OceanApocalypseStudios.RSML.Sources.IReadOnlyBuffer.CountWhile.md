# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_CountWhile_System_Func_System_Int32_System_Char_System_Boolean__System_Int32_"></a> Method CountWhile

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_CountWhile_System_Func_System_Int32_System_Char_System_Boolean__System_Int32_"></a> CountWhile\(Func<Int32, Char, Boolean\>, Int32\)

Counts the amount of items, starting from a given <code class="paramref">index</code>,
while a <code class="paramref">predicate</code> returns <code>true</code>.

```csharp
Result<Int32> CountWhile(Func<Int32, Char, Boolean> predicate, Int32 index)
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

