# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlyStringBuffer"></a> Class ReadOnlyStringBuffer

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

A read-only buffer backed by a string. All operations opt for performance
primarily via the internal use of <xref href="System.ReadOnlySpan%601" data-throw-if-not-resolved="false"></xref> over string allocations
and also via caching.

```csharp
public class ReadOnlyStringBuffer : IReadOnlyBuffer, ISource, IDisposable, IEquatable<IReadOnlyBuffer?>, IEquatable<Char[]?>, IEquatable<ReadOnlyMemory<Char>>, ISupportsCache, IEquatable<String?>
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReadOnlyStringBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.md)

#### Implements

[IReadOnlyBuffer](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.md), 
[ISource](OceanApocalypseStudios.RSML.Sources.ISource.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IEquatable<IReadOnlyBuffer?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<Char\[\]?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<ReadOnlyMemory<Char\>\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[ISupportsCache](OceanApocalypseStudios.RSML.Cache.ISupportsCache.md), 
[IEquatable<String?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

> [!TIP]
> If you wish to avoid allocating this buffer, it's recommended to take a look at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer" data-throw-if-not-resolved="false"></xref>.

## Constructors

 [ReadOnlyStringBuffer\(String\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_\_ctor\_System\_String\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with a string.

 [ReadOnlyStringBuffer\(ReadOnlySpan<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_\_ctor\_System\_ReadOnlySpan\_System\_Char\_\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
by allocating a string from a <xref href="System.ReadOnlySpan%601" data-throw-if-not-resolved="false"></xref>.

 [ReadOnlyStringBuffer\(Char\[\]\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_\_ctor\_System\_Char\_\_\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with an array of characters.

 [ReadOnlyStringBuffer\(Byte\[\], Encoding?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_\_ctor\_System\_Byte\_\_\_System\_Text\_Encoding\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with an array of bytes and the encoding to use when decoding them.

 [ReadOnlyStringBuffer\(Byte\*, Int32, Encoding?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_\_ctor\_System\_Byte\_\_System\_Int32\_System\_Text\_Encoding\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with a pointer referencing an array of bytes and the encoding
to use when decoding them.

## Properties

 [CacheExists](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.CacheExists.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_CacheExists)

Whether there's cached data.

 [IsEmpty](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.IsEmpty.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_IsEmpty)

Whether the source is completely empty.

 [IsReadOnly](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.IsReadOnly.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_IsReadOnly)

Whether the source can be mutated.

 [Length](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Length)

The length of the source.

 [LineCount](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_LineCount)

The total amount of lines in the buffer.

 [this\[Int32\]](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Item\_System\_Int32\_)

Gets a single item out of the buffer.

 [this\[SourceLocation\]](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Item\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Gets a single item out of the buffer.

 [this\[SourceSpan\]](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Item\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_)

Gets a range of items out of the buffer.

## Methods

 [BuildCache\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.BuildCache.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_BuildCache)

Builds the cache if it doesn't exist yet.

 [BuildCache\(Boolean\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.BuildCache.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_BuildCache\_System\_Boolean\_)

Builds the cache. If <code class="paramref">forceRebuild</code> is set to <code>true</code>,
the cache will be built even if it already exists.

 [CountUntilEndOfLine\(Int32, out Boolean\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.CountUntilEndOfLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_CountUntilEndOfLine\_System\_Int32\_System\_Boolean\_\_)

Counts the amount of items until the next line separator in the buffer, relative to a given <code class="paramref">index</code>.
Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

 [CountUntilNotWhitespace\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.CountUntilNotWhitespace.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_CountUntilNotWhitespace\_System\_Int32\_)

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

 [CountUntilWhitespace\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.CountUntilWhitespace.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_CountUntilWhitespace\_System\_Int32\_)

Counts the amount of items until the next whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

 [CountWhile\(Func<Int32, Char, Boolean\>, Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.CountWhile.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_CountWhile\_System\_Func\_System\_Int32\_System\_Char\_System\_Boolean\_\_System\_Int32\_)

Counts the amount of items, starting from a given <code class="paramref">index</code>,
while a <code class="paramref">predicate</code> returns <code>true</code>.

 [Dispose\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Dispose.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Dispose)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

 [Equals\(Object?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Equals\_System\_Object\_)

Determines whether the specified object is equal to the current object.

 [Equals\(Char\[\]?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Equals\_System\_Char\_\_\_)

Checks if an array of characters is equal to the current instance.

 [Equals\(IReadOnlyBuffer?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Equals\_OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_)

Checks if another read-only buffer is equal to the current instance.

 [Equals\(ReadOnlyMemory<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Equals\_System\_ReadOnlyMemory\_System\_Char\_\_)

Checks if a read-only contiguous region of memory is equal to the current instance.

 [Equals\(ReadOnlySpan<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Equals\_System\_ReadOnlySpan\_System\_Char\_\_)

Checks if a read-only contiguous region of memory is equal to the current instance.

 [Equals\(String?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Equals\_System\_String\_)

Checks if a string is equal to the current instance.

 [GetHashCode\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetHashCode.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetHashCode)

Serves as the default hash function.

 [GetLengthOfLine\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetLengthOfLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetLengthOfLine\_System\_Int32\_)

Returns the length of a line given its 0-based line number.
Line separators do not count towards the length.

 [GetLengthOfLineFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetLengthOfLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetLengthOfLineFromIndex\_System\_Int32\_)

Returns the length of a line given a 0-based index of one
of its items.
Line separators do not count towards the length.

 [GetLine\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetLine\_System\_Int32\_)

Given a 0-based line number, returns the matching line as an array of buffer items.

 [GetLineAsSpan\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetLineAsSpan.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetLineAsSpan\_System\_Int32\_)

Given a 0-based line number, returns the matching line as an array of buffer items.

 [GetLineAsSpanFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetLineAsSpanFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetLineAsSpanFromIndex\_System\_Int32\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [GetLineFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetLineFromIndex\_System\_Int32\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [GetLineNumberFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetLineNumberFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetLineNumberFromIndex\_System\_Int32\_)

Determines the 0-based line number of the line that contains the item located at <code class="paramref">index</code>.

 [GetSourceLocation\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetSourceLocation.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetSourceLocation\_System\_Int32\_)

Converts an index into a location.

 [GetSourceSpan\(Int32, Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.GetSourceSpan.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_GetSourceSpan\_System\_Int32\_System\_Int32\_)

Converts the buffer region into a span.

 [Slice\(Int32, Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Slice.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_Slice\_System\_Int32\_System\_Int32\_)

Slices a region of the buffer.

 [ToString\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.ToString.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_ToString)

Returns the buffer's content as a <xref href="System.String" data-throw-if-not-resolved="false"></xref>.

 [TryGetChar\(Int32, out Char\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.TryGetChar.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_TryGetChar\_System\_Int32\_System\_Char\_\_)

Tries to return the item at <code class="paramref">index</code>.

 [TryGetChar\(SourceLocation, out Char\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.TryGetChar.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_TryGetChar\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_System\_Char\_\_)

Tries to return the item at the specified <code class="paramref">location</code>.

 [TryGetLine\(Int32, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.TryGetLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_TryGetLine\_System\_Int32\_System\_Span\_System\_Char\_\_)

Given a 0-based line number, assigns the exact line to a result buffer (<code class="paramref">destination</code>).
No end of line characters are added.

 [TryGetLineFromIndex\(Int32, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.TryGetLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_TryGetLineFromIndex\_System\_Int32\_System\_Span\_System\_Char\_\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [TrySlice\(Int32, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.TrySlice.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_TrySlice\_System\_Int32\_System\_Span\_System\_Char\_\_)

Slices a region of the buffer into a performant span.

 [TrySlice\(SourceSpan, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.TrySlice.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_TrySlice\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_System\_Span\_System\_Char\_\_)

Slices a region of the buffer into a performant span.

## Operators

 [operator ==\(ReadOnlyStringBuffer, ReadOnlyStringBuffer\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.op\_Equality.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_op\_Equality\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_)

Checks if two read-only string buffers are equals.

 [operator \!=\(ReadOnlyStringBuffer, ReadOnlyStringBuffer\)](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.op\_Inequality.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_op\_Inequality\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlyStringBuffer\_)

Checks if two read-only string buffers are different.

