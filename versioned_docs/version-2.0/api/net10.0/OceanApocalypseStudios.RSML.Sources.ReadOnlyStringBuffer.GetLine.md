# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetLine_System_Int32_"></a> Method GetLine

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer_GetLine_System_Int32_"></a> GetLine\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
public Result<String> GetLine(Int32 lineNumber)
```

### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

The line as an array of items.

### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

