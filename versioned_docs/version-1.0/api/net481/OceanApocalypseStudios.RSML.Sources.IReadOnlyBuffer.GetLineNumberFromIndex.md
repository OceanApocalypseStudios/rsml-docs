# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLineNumberFromIndex_System_Int32_"></a> Method GetLineNumberFromIndex

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLineNumberFromIndex_System_Int32_"></a> GetLineNumberFromIndex\(Int32\)

Determines the 0-based line number of the line that contains the item located at <code class="paramref">index</code>.

```csharp
Result<Int32> GetLineNumberFromIndex(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index whose parent line's number is to be returned.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The 0-based number of the line that contains item located at <code class="paramref">index</code>.

