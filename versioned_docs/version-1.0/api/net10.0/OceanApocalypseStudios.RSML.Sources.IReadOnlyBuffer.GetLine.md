# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLine_System_Int32_"></a> Method GetLine

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_GetLine_System_Int32_"></a> GetLine\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
Result<String> GetLine(Int32 lineNumber)
```

### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

The line as an array of items.

