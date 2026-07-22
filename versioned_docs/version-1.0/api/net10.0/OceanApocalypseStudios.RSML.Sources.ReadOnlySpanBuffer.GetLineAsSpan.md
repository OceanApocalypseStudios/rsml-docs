# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_GetLineAsSpan_System_Int32_"></a> Method GetLineAsSpan

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer_GetLineAsSpan_System_Int32_"></a> GetLineAsSpan\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
public ReadOnlySpan<Char> GetLineAsSpan(Int32 lineNumber)
```

### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

### Returns

 [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The line as a span.

### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

