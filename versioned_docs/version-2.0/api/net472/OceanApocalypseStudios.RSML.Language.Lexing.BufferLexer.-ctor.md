# <a id="OceanApocalypseStudios_RSML_Language_Lexing_BufferLexer__ctor_OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> Constructor BufferLexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

## <a id="OceanApocalypseStudios_RSML_Language_Lexing_BufferLexer__ctor_OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer_OceanApocalypseStudios_RSML_Diagnostics_DiagnosticCollector_"></a> BufferLexer\(IReadOnlyBuffer, DiagnosticCollector\)

An implementation of a RSML lexer backed by a read-only or read-and-write buffer.

```csharp
public BufferLexer(IReadOnlyBuffer buffer, DiagnosticCollector diagnostics)
```

### Parameters

`buffer` [IReadOnlyBuffer](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.md)

A buffer. Can be read-only (<xref href="OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer" data-throw-if-not-resolved="false"></xref>) or read and write (<xref href="OceanApocalypseStudios.RSML.Sources.IBuffer" data-throw-if-not-resolved="false"></xref>).

`diagnostics` [DiagnosticCollector](OceanApocalypseStudios.RSML.Diagnostics.DiagnosticCollector.md)

A collector for all emitted diagnostics.

