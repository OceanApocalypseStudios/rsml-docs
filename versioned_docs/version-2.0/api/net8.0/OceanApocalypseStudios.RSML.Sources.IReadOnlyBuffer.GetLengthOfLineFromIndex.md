# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLengthOfLineFromIndex_System_Int32_"></a> Method GetLengthOfLineFromIndex

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLengthOfLineFromIndex_System_Int32_"></a> GetLengthOfLineFromIndex\(Int32\)

Returns the length of a line given a 0-based index of one
of its items.
Line separators do not count towards the length.

```csharp
Result<Int32> GetLengthOfLineFromIndex(Int32 index)
```

### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based index whose line is considered.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The length of the line.

