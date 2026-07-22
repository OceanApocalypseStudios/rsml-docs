# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_Slice_System_Int32_System_Int32_"></a> Method Slice

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_Slice_System_Int32_System_Int32_"></a> Slice\(Int32, Int32\)

Slices a region of the buffer.

```csharp
Result<String> Slice(Int32 start, Int32 length)
```

### Parameters

`start` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the first item in the slice.

`length` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The amount of items to slice starting at <code class="paramref">start</code>.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

A slice, as an array of items.

