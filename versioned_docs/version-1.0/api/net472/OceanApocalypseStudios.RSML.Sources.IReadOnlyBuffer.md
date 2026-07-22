# <a id="OceanApocalypseStudios_RSML_Sources_IReadOnlyBuffer"></a> Interface IReadOnlyBuffer

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

Represents a read-only buffer of characters.

```csharp
public interface IReadOnlyBuffer : ISource, IDisposable, IEquatable<IReadOnlyBuffer?>, IEquatable<Char[]?>, IEquatable<String?>, IEquatable<ReadOnlyMemory<Char>>
```

#### Implements

[ISource](OceanApocalypseStudios.RSML.Sources.ISource.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IEquatable<IReadOnlyBuffer?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<Char\[\]?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<String?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<ReadOnlyMemory<Char\>\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

## Properties

 [LineCount](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.LineCount.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_LineCount)

The total amount of lines in the buffer.

 [this\[Int32\]](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_Item\_System\_Int32\_)

Gets a single item out of the buffer.

 [this\[SourceLocation\]](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_Item\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Gets a single item out of the buffer.

 [this\[SourceSpan\]](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_Item\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_)

Gets a range of items out of the buffer.

## Methods

 [CountUntilEndOfLine\(Int32, out Boolean\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.CountUntilEndOfLine.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_CountUntilEndOfLine\_System\_Int32\_System\_Boolean\_\_)

Counts the amount of items until the next line separator in the buffer, relative to a given <code class="paramref">index</code>.
Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

 [CountUntilNotWhitespace\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.CountUntilNotWhitespace.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_CountUntilNotWhitespace\_System\_Int32\_)

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

 [CountUntilWhitespace\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.CountUntilWhitespace.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_CountUntilWhitespace\_System\_Int32\_)

Counts the amount of items until the next whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

 [CountWhile\(Func<Int32, Char, Boolean\>, Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.CountWhile.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_CountWhile\_System\_Func\_System\_Int32\_System\_Char\_System\_Boolean\_\_System\_Int32\_)

Counts the amount of items, starting from a given <code class="paramref">index</code>,
while a <code class="paramref">predicate</code> returns <code>true</code>.

 [GetLengthOfLine\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetLengthOfLine.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetLengthOfLine\_System\_Int32\_)

Returns the length of a line given its 0-based line number.
Line separators do not count towards the length.

 [GetLengthOfLineFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetLengthOfLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetLengthOfLineFromIndex\_System\_Int32\_)

Returns the length of a line given a 0-based index of one
of its items.
Line separators do not count towards the length.

 [GetLine\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetLine.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetLine\_System\_Int32\_)

Given a 0-based line number, returns the matching line as an array of buffer items.

 [GetLineAsSpan\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetLineAsSpan.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetLineAsSpan\_System\_Int32\_)

Given a 0-based line number, returns the matching line as an array of buffer items.

 [GetLineAsSpanFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetLineAsSpanFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetLineAsSpanFromIndex\_System\_Int32\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [GetLineFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetLineFromIndex\_System\_Int32\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [GetLineNumberFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetLineNumberFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetLineNumberFromIndex\_System\_Int32\_)

Determines the 0-based line number of the line that contains the item located at <code class="paramref">index</code>.

 [GetSourceLocation\(Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetSourceLocation.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetSourceLocation\_System\_Int32\_)

Converts an index into a location.

 [GetSourceSpan\(Int32, Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.GetSourceSpan.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_GetSourceSpan\_System\_Int32\_System\_Int32\_)

Converts the buffer region into a span.

 [Slice\(Int32, Int32\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.Slice.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_Slice\_System\_Int32\_System\_Int32\_)

Slices a region of the buffer.

 [TryGetChar\(Int32, out Char\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.TryGetChar.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_TryGetChar\_System\_Int32\_System\_Char\_\_)

Tries to return the item at <code class="paramref">index</code>.

 [TryGetChar\(SourceLocation, out Char\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.TryGetChar.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_TryGetChar\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_System\_Char\_\_)

Tries to return the item at the specified <code class="paramref">location</code>.

 [TryGetLine\(Int32, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.TryGetLine.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_TryGetLine\_System\_Int32\_System\_Span\_System\_Char\_\_)

Given a 0-based line number, assigns the exact line to a result buffer (<code class="paramref">destination</code>).
No end of line characters are added.

 [TryGetLineFromIndex\(Int32, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.TryGetLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_TryGetLineFromIndex\_System\_Int32\_System\_Span\_System\_Char\_\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [TrySlice\(Int32, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.TrySlice.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_TrySlice\_System\_Int32\_System\_Span\_System\_Char\_\_)

Slices a region of the buffer into a performant span.

 [TrySlice\(SourceSpan, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.TrySlice.md\#OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_TrySlice\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_System\_Span\_System\_Char\_\_)

Slices a region of the buffer into a performant span.

