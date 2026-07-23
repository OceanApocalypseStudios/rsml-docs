---
id: "OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.md"
managed-by: python-postprocessor
---

# Interface IReadOnlyBuffer

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

### LineCount

The total amount of lines in the buffer.

```csharp
Int32 LineCount { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

Keep in mind lines might be empty.

### this\[Int32\]

Gets a single item out of the buffer.

```csharp
Char? this[Int32 index] { get; }
```

#### Property Value

 [Char](https://learn.microsoft.com/dotnet/api/system.char)?

### this\[SourceLocation\]

Gets a single item out of the buffer.

```csharp
Char? this[SourceLocation location] { get; }
```

#### Property Value

 [Char](https://learn.microsoft.com/dotnet/api/system.char)?

### this\[SourceSpan\]

Gets a range of items out of the buffer.

```csharp
Result<String> this[SourceSpan span] { get; }
```

#### Property Value

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### CountUntilEndOfLine\(Int32, out Boolean\)

Counts the amount of items until the next line separator in the buffer, relative to a given <code class="paramref">index</code>.
Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

```csharp
Result<Int32> CountUntilEndOfLine(Int32 index, out Boolean isCrLf)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

`isCrLf` [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the line separator at which the method stopped is the CR in a CRLF sequence. If true, the next item in the buffer is LF.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next line separator, relative to an <code class="paramref">index</code>.

### CountUntilNotWhitespace\(Int32\)

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

```csharp
Result<Int32> CountUntilNotWhitespace(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next non-whitespace item, relative to a <code class="paramref">index</code>.

### CountUntilWhitespace\(Int32\)

Counts the amount of items until the next whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

```csharp
Result<Int32> CountUntilWhitespace(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next whitespace item, relative to a <code class="paramref">index</code>.

### CountWhile\(Func<Int32, Char, Boolean\>, Int32\)

Counts the amount of items, starting from a given <code class="paramref">index</code>,
while a <code class="paramref">predicate</code> returns <code>true</code>.

```csharp
Result<Int32> CountWhile(Func<Int32, Char, Boolean> predicate, Int32 index)
```

#### Parameters

`predicate` [Func](https://learn.microsoft.com/dotnet/api/system.func\-3)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32), [Char](https://learn.microsoft.com/dotnet/api/system.char), [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)\>

A function that takes the current index (relative to <code class="paramref">index</code>),
which is incremented every item, and the item associated with it. Execution stops when
the predicate returns <code>false</code> or the index is out of bounds.

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting; all indexes will also be given to the
<code class="paramref">predicate</code> as an offset that when added to the index of the position
equal the actual index.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The amount of items counted.

### GetLengthOfLine\(Int32\)

Returns the length of a line given its 0-based line number.
Line separators do not count towards the length.

```csharp
Result<Int32> GetLengthOfLine(Int32 lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The length of the line.

### GetLengthOfLineFromIndex\(Int32\)

Returns the length of a line given a 0-based index of one
of its items.
Line separators do not count towards the length.

```csharp
Result<Int32> GetLengthOfLineFromIndex(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based index whose line is considered.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The length of the line.

### GetLine\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
Result<String> GetLine(Int32 lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

The line as an array of items.

### GetLineAsSpan\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
ReadOnlySpan<Char> GetLineAsSpan(Int32 lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

#### Returns

 [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The line as a span.

### GetLineAsSpanFromIndex\(Int32\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
ReadOnlySpan<Char> GetLineAsSpanFromIndex(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

#### Returns

 [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The line, as a span.

### GetLineFromIndex\(Int32\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
Result<String> GetLineFromIndex(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

The line, as an array of items.

### GetLineNumberFromIndex\(Int32\)

Determines the 0-based line number of the line that contains the item located at <code class="paramref">index</code>.

```csharp
Result<Int32> GetLineNumberFromIndex(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index whose parent line's number is to be returned.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The 0-based number of the line that contains item located at <code class="paramref">index</code>.

### GetSourceLocation\(Int32\)

Converts an index into a location.

```csharp
Result<SourceLocation> GetSourceLocation(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)\>

The location.

### GetSourceSpan\(Int32, Int32\)

Converts the buffer region into a span.

```csharp
Result<SourceSpan> GetSourceSpan(Int32 startIndex, Int32 endIndex)
```

#### Parameters

`startIndex` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The starting index.

`endIndex` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The end index, which is included in the span.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)\>

The span.

### Slice\(Int32, Int32\)

Slices a region of the buffer.

```csharp
Result<String> Slice(Int32 start, Int32 length)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the first item in the slice.

`length` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The amount of items to slice starting at <code class="paramref">start</code>.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

A slice, as an array of items.

### TryGetChar\(Int32, out Char\)

Tries to return the item at <code class="paramref">index</code>.

```csharp
Boolean TryGetChar(Int32 index, out Char item)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the character.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

### TryGetChar\(SourceLocation, out Char\)

Tries to return the item at the specified <code class="paramref">location</code>.

```csharp
Boolean TryGetChar(SourceLocation location, out Char item)
```

#### Parameters

`location` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The item's location.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

### TryGetLine\(Int32, Span<Char\>\)

Given a 0-based line number, assigns the exact line to a result buffer (<code class="paramref">destination</code>).
No end of line characters are added.

```csharp
Boolean TryGetLine(Int32 lineNumber, Span<Char> destination)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

`destination` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The destination buffer for the line.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if successful.

### TryGetLineFromIndex\(Int32, Span<Char\>\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
Boolean TryGetLineFromIndex(Int32 index, Span<Char> destination)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

`destination` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The destination span that will contain the line.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if successful.

### TrySlice\(Int32, Span<Char\>\)

Slices a region of the buffer into a performant span.

```csharp
Boolean TrySlice(Int32 start, Span<Char> slice)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the first item in the slice.

`slice` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span serving as the destination for the slice.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### TrySlice\(SourceSpan, Span<Char\>\)

Slices a region of the buffer into a performant span.

```csharp
Boolean TrySlice(SourceSpan sourceSpan, Span<Char> slice)
```

#### Parameters

`sourceSpan` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

The span indicating what the slice is.

`slice` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span serving as the destination for the slice.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

