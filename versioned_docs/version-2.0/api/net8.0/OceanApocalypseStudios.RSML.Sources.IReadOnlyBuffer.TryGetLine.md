# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_TryGetLine_System_Int32_System_Span_System_Char__"></a> Method TryGetLine

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_TryGetLine_System_Int32_System_Span_System_Char__"></a> TryGetLine\(Int32, Span<Char\>\)

Given a 0-based line number, assigns the exact line to a result buffer (<code class="paramref">destination</code>).
No end of line characters are added.

```csharp
Boolean TryGetLine(Int32 lineNumber, Span<Char> destination)
```

### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

`destination` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The destination buffer for the line.

### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if successful.

