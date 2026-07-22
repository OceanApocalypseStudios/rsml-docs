# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLengthOfLine_System_Int32_"></a> Method GetLengthOfLine

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLengthOfLine_System_Int32_"></a> GetLengthOfLine\(Int32\)

Returns the length of a line given its 0-based line number.
Line separators do not count towards the length.

```csharp
Result<Int32> GetLengthOfLine(Int32 lineNumber)
```

### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The length of the line.

