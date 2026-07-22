# <a id="OceanApocalypseStudios_RSML_Sources_ReadOnlySpanBuffer"></a> Struct ReadOnlySpanBuffer

Namespace: [OceanApocalypseStudios.RSML.Sources](OceanApocalypseStudios.RSML.Sources.md)  
Assembly: RSML.dll  

A read-only buffer backed by a span of characters. All operations opt for performance
primarily via the internal use of <xref href="System.ReadOnlySpan%601" data-throw-if-not-resolved="false"></xref> over string allocations
and also via caching.

```csharp
public ref struct ReadOnlySpanBuffer : IReadOnlyBuffer, ISource, IDisposable, IEquatable<IReadOnlyBuffer?>, IEquatable<Char[]?>, IEquatable<String?>, IEquatable<ReadOnlyMemory<Char>>, ISupportsCache
```

#### Implements

[IReadOnlyBuffer](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.md), 
[ISource](OceanApocalypseStudios.RSML.Sources.ISource.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IEquatable<IReadOnlyBuffer?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<Char\[\]?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<String?\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[IEquatable<ReadOnlyMemory<Char\>\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1), 
[ISupportsCache](OceanApocalypseStudios.RSML.Cache.ISupportsCache.md)

#### Inherited Members

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Remarks

> [!TIP]
> The main advantage of this type over <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
> is that you don't need to allocate a class and, on initialization, you don't need to allocate
> a string.

## Constructors

 [ReadOnlySpanBuffer\(String\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_\_ctor\_System\_String\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer" data-throw-if-not-resolved="false"></xref>
with a string.

 [ReadOnlySpanBuffer\(ReadOnlySpan<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_\_ctor\_System\_ReadOnlySpan\_System\_Char\_\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer" data-throw-if-not-resolved="false"></xref> with a span.

 [ReadOnlySpanBuffer\(Char\[\]\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.\-ctor.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_\_ctor\_System\_Char\_\_\_)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer" data-throw-if-not-resolved="false"></xref>
with an array of characters.

## Properties

 [CacheExists](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.CacheExists.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_CacheExists)

Whether there's cached data.

 [IsEmpty](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.IsEmpty.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_IsEmpty)

Whether the source is completely empty.

 [IsReadOnly](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.IsReadOnly.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_IsReadOnly)

Whether the source can be mutated.

 [Length](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Length.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Length)

The length of the source.

 [LineCount](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.LineCount.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_LineCount)

The total amount of lines in the buffer.

 [this\[Int32\]](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Item\_System\_Int32\_)

Gets a single item out of the buffer.

 [this\[SourceLocation\]](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Item\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_)

Gets a single item out of the buffer.

 [this\[SourceSpan\]](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Item.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Item\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_)

Gets a range of items out of the buffer.

## Methods

 [BuildCache\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.BuildCache.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_BuildCache)

Builds the cache if it doesn't exist yet.

 [BuildCache\(Boolean\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.BuildCache.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_BuildCache\_System\_Boolean\_)

Builds the cache. If <code class="paramref">forceRebuild</code> is set to <code>true</code>,
the cache will be built even if it already exists.

 [CountUntilEndOfLine\(Int32, out Boolean\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.CountUntilEndOfLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_CountUntilEndOfLine\_System\_Int32\_System\_Boolean\_\_)

Counts the amount of items until the next line separator in the buffer, relative to a given <code class="paramref">index</code>.
Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

 [CountUntilNotWhitespace\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.CountUntilNotWhitespace.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_CountUntilNotWhitespace\_System\_Int32\_)

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

 [CountUntilWhitespace\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.CountUntilWhitespace.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_CountUntilWhitespace\_System\_Int32\_)

Counts the amount of items until the next whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

 [CountWhile\(Func<Int32, Char, Boolean\>, Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.CountWhile.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_CountWhile\_System\_Func\_System\_Int32\_System\_Char\_System\_Boolean\_\_System\_Int32\_)

Counts the amount of items, starting from a given <code class="paramref">index</code>,
while a <code class="paramref">predicate</code> returns <code>true</code>.

 [Dispose\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Dispose.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Dispose)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

 [Equals\(Object\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Equals\_System\_Object\_)

Indicates whether this instance and a specified object are equal.

 [Equals\(Char\[\]?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Equals\_System\_Char\_\_\_)

Checks if an array of characters is equal to the current instance.

 [Equals\(IReadOnlyBuffer?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Equals\_OceanApocalypseStudios\_RSML\_Sources\_IReadOnlyBuffer\_)

Checks if another read-only buffer is equal to the current instance.

 [Equals\(ReadOnlyMemory<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Equals\_System\_ReadOnlyMemory\_System\_Char\_\_)

Checks if a read-only contiguous region of memory is equal to the current instance.

 [Equals\(ReadOnlySpan<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Equals\_System\_ReadOnlySpan\_System\_Char\_\_)

Checks if a read-only contiguous region of memory is equal to the current instance.

 [Equals\(ReadOnlySpanBuffer\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Equals\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_)

Checks if another read-only span buffer is equal to the current instance.

 [Equals\(String?\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Equals.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Equals\_System\_String\_)

Checks if a string is equal to the current instance.

 [GetHashCode\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetHashCode.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetHashCode)

Returns the hash code for this instance.

 [GetLengthOfLine\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetLengthOfLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetLengthOfLine\_System\_Int32\_)

Returns the length of a line given its 0-based line number.
Line separators do not count towards the length.

 [GetLengthOfLineFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetLengthOfLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetLengthOfLineFromIndex\_System\_Int32\_)

Returns the length of a line given a 0-based index of one
of its items.
Line separators do not count towards the length.

 [GetLine\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetLine\_System\_Int32\_)

Given a 0-based line number, returns the matching line as an array of buffer items.

 [GetLineAsSpan\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetLineAsSpan.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetLineAsSpan\_System\_Int32\_)

Given a 0-based line number, returns the matching line as an array of buffer items.

 [GetLineAsSpanFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetLineAsSpanFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetLineAsSpanFromIndex\_System\_Int32\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [GetLineFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetLineFromIndex\_System\_Int32\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [GetLineNumberFromIndex\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetLineNumberFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetLineNumberFromIndex\_System\_Int32\_)

Determines the 0-based line number of the line that contains the item located at <code class="paramref">index</code>.

 [GetSourceLocation\(Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetSourceLocation.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetSourceLocation\_System\_Int32\_)

Converts an index into a location.

 [GetSourceSpan\(Int32, Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.GetSourceSpan.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_GetSourceSpan\_System\_Int32\_System\_Int32\_)

Converts the buffer region into a span.

 [Slice\(Int32, Int32\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.Slice.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_Slice\_System\_Int32\_System\_Int32\_)

Slices a region of the buffer.

 [ToString\(\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.ToString.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_ToString)

Returns the buffer's content as a <xref href="System.String" data-throw-if-not-resolved="false"></xref>.

 [TryGetChar\(Int32, out Char\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.TryGetChar.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_TryGetChar\_System\_Int32\_System\_Char\_\_)

Tries to return the item at <code class="paramref">index</code>.

 [TryGetChar\(SourceLocation, out Char\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.TryGetChar.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_TryGetChar\_OceanApocalypseStudios\_RSML\_Sources\_SourceLocation\_System\_Char\_\_)

Tries to return the item at the specified <code class="paramref">location</code>.

 [TryGetLine\(Int32, scoped Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.TryGetLine.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_TryGetLine\_System\_Int32\_System\_Span\_System\_Char\_\_)

Given a 0-based line number, assigns the exact line to a result buffer (<code class="paramref">destination</code>).
No end of line characters are added.

 [TryGetLineFromIndex\(Int32, scoped Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.TryGetLineFromIndex.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_TryGetLineFromIndex\_System\_Int32\_System\_Span\_System\_Char\_\_)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

 [TrySlice\(Int32, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.TrySlice.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_TrySlice\_System\_Int32\_System\_Span\_System\_Char\_\_)

Slices a region of the buffer into a performant span.

 [TrySlice\(SourceSpan, Span<Char\>\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.TrySlice.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_TrySlice\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_System\_Span\_System\_Char\_\_)

Slices a region of the buffer into a performant span.

## Operators

 [operator ==\(ReadOnlySpanBuffer, ReadOnlySpanBuffer\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.op\_Equality.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_op\_Equality\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_)

Checks if two read-only span buffers are equals.

 [operator \!=\(ReadOnlySpanBuffer, ReadOnlySpanBuffer\)](OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer.op\_Inequality.md\#OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_op\_Inequality\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_OceanApocalypseStudios\_RSML\_Sources\_ReadOnlySpanBuffer\_)

Checks if two read-only span buffers are different.

