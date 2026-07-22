# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetLengthOfLine_System_Int32_"></a> Method GetLengthOfLine

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetLengthOfLine_System_Int32_"></a> GetLengthOfLine\(Int32\)

Returns the length of a line given its 0-based line number.
Line separators do not count towards the length.

```csharp
public Result<Int32> GetLengthOfLine(Int32 lineNumber)
```

### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The length of the line.

### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

