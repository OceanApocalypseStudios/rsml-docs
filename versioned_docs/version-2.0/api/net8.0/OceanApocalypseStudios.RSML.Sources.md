# <a id="OceanApocalypseStudios_RSML_Sources"></a> Namespace OceanApocalypseStudios.RSML.Sources

### Classes

 [ReadOnlyStringBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.md)

A read-only buffer backed by a string. All operations opt for performance
primarily via the internal use of <xref href="System.ReadOnlySpan%601" data-throw-if-not-resolved="false"></xref> over string allocations
and also via caching.

### Structs

 [ReadOnlySpanBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.md)

A read-only buffer backed by a span of characters. All operations opt for performance
primarily via the internal use of <xref href="System.ReadOnlySpan%601" data-throw-if-not-resolved="false"></xref> over string allocations
and also via caching.

 [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

Specifies the location of an item in a <xref href="OceanApocalypseStudios.RSML.Sources.ISource" data-throw-if-not-resolved="false"></xref>.

 [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

Represents a span taken from a source.

### Interfaces

 [IBuffer](OceanApocalypseStudios.RSML.Sources.IBuffer.md)

Represents a read and write buffer of characters.

 [IReadOnlyBuffer](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.md)

Represents a read-only buffer of characters.

 [IReadOnlyStream](OceanApocalypseStudios.RSML.Sources.IReadOnlyStream.md)

Represents a read-only sequential stream.

 [ISource](OceanApocalypseStudios.RSML.Sources.ISource.md)

A data source for RSML's toolchain members.

 [IStream](OceanApocalypseStudios.RSML.Sources.IStream.md)

Represents a read and write sequential stream.

