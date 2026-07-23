---
id: "OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.md"
managed-by: python-postprocessor
---

# Class ReadOnlyStringBuffer

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

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Remarks

> [!TIP]
> If you wish to avoid allocating this buffer, it's recommended to take a look at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlySpanBuffer" data-throw-if-not-resolved="false"></xref>.

## Constructors

### ReadOnlyStringBuffer\(String\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with a string.

```csharp
public ReadOnlyStringBuffer(String content)
```

#### Parameters

`content` [String](https://learn.microsoft.com/dotnet/api/system.string)

The string that the buffer will wrap.

### ReadOnlyStringBuffer\(ReadOnlySpan<Char\>\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
by allocating a string from a <xref href="System.ReadOnlySpan%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public ReadOnlyStringBuffer(ReadOnlySpan<Char> content)
```

#### Parameters

`content` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span pointing to the string's data.

### ReadOnlyStringBuffer\(Char\[\]\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with an array of characters.

```csharp
public ReadOnlyStringBuffer(Char[] content)
```

#### Parameters

`content` [Char](https://learn.microsoft.com/dotnet/api/system.char)\[\]

The array of characters to use for the buffer.

### ReadOnlyStringBuffer\(Byte\[\], Encoding?\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with an array of bytes and the encoding to use when decoding them.

```csharp
public ReadOnlyStringBuffer(Byte[] content, Encoding? encoding = null)
```

#### Parameters

`content` [Byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

The array of bytes to use for the buffer.

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)?

The encoding to use when decoding <code class="paramref">content</code>.
Use <code>null</code> for the <xref href="System.Text.Encoding.Default" data-throw-if-not-resolved="false"></xref> encoding.

### ReadOnlyStringBuffer\(Byte\*, Int32, Encoding?\)

Initializes a new <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref>
with a pointer referencing an array of bytes and the encoding
to use when decoding them.

```csharp
[CLSCompliant(false)]
public ReadOnlyStringBuffer(Byte* contentPtr, Int32 byteCount, Encoding? encoding = null)
```

#### Parameters

`contentPtr` [Byte](https://learn.microsoft.com/dotnet/api/system.byte)\*

The pointer referecing the array of bytes to use for the buffer.

`byteCount` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The amount of bytes in the array referenced by <code class="paramref">contentPtr</code>.

`encoding` [Encoding](https://learn.microsoft.com/dotnet/api/system.text.encoding)?

The encoding to use when decoding <code class="paramref">contentPtr</code>.
Use <code>null</code> for the <xref href="System.Text.Encoding.Default" data-throw-if-not-resolved="false"></xref> encoding.

#### Remarks

This method is not CLS-compliant due to the unsafe context and the use of pointers.

## Properties

### CacheExists

Whether there's cached data.

```csharp
public Boolean CacheExists { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEmpty

Whether the source is completely empty.

```csharp
public Boolean IsEmpty { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

Whether the source can be mutated.

```csharp
public Boolean IsReadOnly { get; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Always returns <code>true</code>, as <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref> only
supports read-only content (hence the name).

### Length

The length of the source.

```csharp
public Int32 Length { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

### LineCount

The total amount of lines in the buffer.

```csharp
public Int32 LineCount { get; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref> automatically builds cache if
no cached data exists. No <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.BuildCache" data-throw-if-not-resolved="false"></xref> calls
are necessary.

### this\[Int32\]

Gets a single item out of the buffer.

```csharp
public Char? this[Int32 index] { get; }
```

#### Property Value

 [Char](https://learn.microsoft.com/dotnet/api/system.char)?

### this\[SourceLocation\]

Gets a single item out of the buffer.

```csharp
public Char? this[SourceLocation location] { get; }
```

#### Property Value

 [Char](https://learn.microsoft.com/dotnet/api/system.char)?

### this\[SourceSpan\]

Gets a range of items out of the buffer.

```csharp
public Result<String> this[SourceSpan span] { get; }
```

#### Property Value

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### BuildCache\(\)

Builds the cache if it doesn't exist yet.

```csharp
public void BuildCache()
```

### BuildCache\(Boolean\)

Builds the cache. If <code class="paramref">forceRebuild</code> is set to <code>true</code>,
the cache will be built even if it already exists.

```csharp
public void BuildCache(Boolean forceRebuild)
```

#### Parameters

`forceRebuild` [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether to force the cache to be built even if it exists.

### CountUntilEndOfLine\(Int32, out Boolean\)

Counts the amount of items until the next line separator in the buffer, relative to a given <code class="paramref">index</code>.
Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

```csharp
public Result<Int32> CountUntilEndOfLine(Int32 index, out Boolean isCrLf)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

`isCrLf` [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the line separator at which the method stopped is the CR in a CRLF sequence. If true, the next item in the buffer is LF.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next line separator, relative to an <code class="paramref">index</code>.

#### Remarks

> [!NOTE]
> This method allows the EOF index as in-range. The convention is as follows:
> - If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0 and <code class="paramref">isCrLf</code> is always <code>false</code>.
> - If the index is the last (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref> - 1), then the output is always 0.
> [!NOTE]
> <code class="paramref">isCrLf</code> is only <code>true</code> if all the following conditions are true:
> - The next line start counting from <code class="paramref">index</code> is preceded by a CRLF sequence.
> - <code class="paramref">index</code> does not point to the LF in the CRLF sequence.
> - <code class="paramref">index</code> does not point to EOF.

### CountUntilNotWhitespace\(Int32\)

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

```csharp
public Result<Int32> CountUntilNotWhitespace(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next non-whitespace item, relative to a <code class="paramref">index</code>.

#### Remarks

> [!NOTE]
> This method allows the EOF index as in-range.
> If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0.
> [!NOTE]
> The return value, when summed with <code class="paramref">index</code>, becomes the index of the first character that
> is not whitespace, counting from <code class="paramref">index</code>.
> The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that are
> not whitespace), meaning the return value, when summed with <code class="paramref">index</code> is the value of
> <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>, which is also the EOF index.

### CountUntilWhitespace\(Int32\)

Counts the amount of items until the next whitespace item in the buffer, relative to a given <code class="paramref">index</code>.
Line separators are included in the whitespace category.

```csharp
public Result<Int32> CountUntilWhitespace(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to start counting.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The index of the next whitespace item, relative to a <code class="paramref">index</code>.

#### Remarks

> [!NOTE]
> This method allows the EOF index as in-range.
> If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0.
> [!NOTE]
> The return value, when summed with <code class="paramref">index</code>, becomes the index of the first character that
> is whitespace, counting from <code class="paramref">index</code>.
> The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that are
> whitespace), meaning the return value, when summed with <code class="paramref">index</code> is the value of
> <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>, which is also the EOF index.

### CountWhile\(Func<Int32, Char, Boolean\>, Int32\)

Counts the amount of items, starting from a given <code class="paramref">index</code>,
while a <code class="paramref">predicate</code> returns <code>true</code>.

```csharp
public Result<Int32> CountWhile(Func<Int32, Char, Boolean> predicate, Int32 index)
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

#### Remarks

> [!NOTE]
> This method allows the EOF index as in-range.
> If the index is EOF (<xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), then the output is always 0.
> [!NOTE]
> The return value, when summed with <code class="paramref">index</code>, becomes the index of the first character that
> fails to verify the <code class="paramref">predicate</code>, counting from <code class="paramref">index</code>.
> The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that fail to verify
> the <code class="paramref">predicate</code>), meaning the return value, when summed with <code class="paramref">index</code> is the value of
> <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>, which is also the EOF index.

### Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### Equals\(Object\)

Determines whether the specified object is equal to the current object.

```csharp
public override Boolean Equals(Object obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals\(Char\[\]?\)

Checks if an array of characters is equal to the current instance.

```csharp
public Boolean Equals(Char[]? other)
```

#### Parameters

`other` [Char](https://learn.microsoft.com/dotnet/api/system.char)\[\]?

The array.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### Equals\(IReadOnlyBuffer?\)

Checks if another read-only buffer is equal to the current instance.

```csharp
public Boolean Equals(IReadOnlyBuffer? other)
```

#### Parameters

`other` [IReadOnlyBuffer](OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer.md)?

The other read-only buffer.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### Equals\(ReadOnlyMemory<Char\>\)

Checks if a read-only contiguous region of memory is equal to the current instance.

```csharp
public Boolean Equals(ReadOnlyMemory<Char> other)
```

#### Parameters

`other` [ReadOnlyMemory](https://learn.microsoft.com/dotnet/api/system.readonlymemory\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The region of memory.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### Equals\(ReadOnlySpan<Char\>\)

Checks if a read-only contiguous region of memory is equal to the current instance.

```csharp
public Boolean Equals(ReadOnlySpan<Char> other)
```

#### Parameters

`other` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The region of memory.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### Equals\(String?\)

Checks if a string is equal to the current instance.

```csharp
public Boolean Equals(String? other)
```

#### Parameters

`other` [String](https://learn.microsoft.com/dotnet/api/system.string)?

The string.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override Int32 GetHashCode()
```

#### Returns

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### GetLengthOfLine\(Int32\)

Returns the length of a line given its 0-based line number.
Line separators do not count towards the length.

```csharp
public Result<Int32> GetLengthOfLine(Int32 lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The length of the line.

#### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

### GetLengthOfLineFromIndex\(Int32\)

Returns the length of a line given a 0-based index of one
of its items.
Line separators do not count towards the length.

```csharp
public Result<Int32> GetLengthOfLineFromIndex(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based index whose line is considered.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The length of the line.

#### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

### GetLine\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
public Result<String> GetLine(Int32 lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

The line as an array of items.

#### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

### GetLineAsSpan\(Int32\)

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
public ReadOnlySpan<Char> GetLineAsSpan(Int32 lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

#### Returns

 [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The line as a span.

#### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

### GetLineAsSpanFromIndex\(Int32\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
public ReadOnlySpan<Char> GetLineAsSpanFromIndex(Int32 index)
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
public Result<String> GetLineFromIndex(Int32 index)
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
public Result<Int32> GetLineNumberFromIndex(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index whose parent line's number is to be returned.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)\>

The 0-based number of the line that contains item located at <code class="paramref">index</code>.

#### Remarks

> [!NOTE]
> This method follows EOF conventions.

### GetSourceLocation\(Int32\)

Converts an index into a location.

```csharp
public Result<SourceLocation> GetSourceLocation(Int32 index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)\>

The location.

#### Remarks

> [!IMPORTANT]
> Unlike with other <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref> methods, this one
> does not follow EOF conventions and, because of that, does not accept the 
> EOF index (index at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), because it is not
> considered a location.

### GetSourceSpan\(Int32, Int32\)

Converts the buffer region into a span.

```csharp
public Result<SourceSpan> GetSourceSpan(Int32 startIndex, Int32 endIndex)
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
public Result<String> Slice(Int32 start, Int32 length)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the first item in the slice.

`length` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The amount of items to slice starting at <code class="paramref">start</code>.

#### Returns

 [Result](OceanApocalypseStudios.RSML.Diagnostics.Result\-1.md)<[String](https://learn.microsoft.com/dotnet/api/system.string)\>

A slice, as an array of items.

#### Remarks

> [!IMPORTANT]
> Unlike with other <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref> methods, this one
> does not follow EOF conventions and, because of that, does not accept the 
> EOF index (index at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), because it is not
> considered part of any slice.

### ToString\(\)

Returns the buffer's content as a <xref href="System.String" data-throw-if-not-resolved="false"></xref>.

```csharp
public override String ToString()
```

#### Returns

 [String](https://learn.microsoft.com/dotnet/api/system.string)

The buffer's content.

### TryGetChar\(Int32, out Char\)

Tries to return the item at <code class="paramref">index</code>.

```csharp
public Boolean TryGetChar(Int32 index, out Char item)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the character.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

#### Remarks

> [!NOTE]
> This method follows the EOF convention where the EOF character
> is 0 (<code>'\0'</code>) and the return value is <code>false</code>, due to EOF
> not being an actual buffer location.

### TryGetChar\(SourceLocation, out Char\)

Tries to return the item at the specified <code class="paramref">location</code>.

```csharp
public Boolean TryGetChar(SourceLocation location, out Char item)
```

#### Parameters

`location` [SourceLocation](OceanApocalypseStudios.RSML.Sources.SourceLocation.md)

The item's location.

`item` [Char](https://learn.microsoft.com/dotnet/api/system.char)

The item.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

False if the buffer is out of bounds or an exception occured.

#### Remarks

> [!NOTE]
> This method follows the EOF convention where the EOF character
> is 0 (<code>'\0'</code>) and the return value is <code>false</code>, due to EOF
> not being an actual buffer location.

### TryGetLine\(Int32, Span<Char\>\)

Given a 0-based line number, assigns the exact line to a result buffer (<code class="paramref">destination</code>).
No end of line characters are added.

```csharp
public Boolean TryGetLine(Int32 lineNumber, Span<Char> destination)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The 0-based line number.

`destination` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The destination buffer for the line.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if successful.

#### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1).

### TryGetLineFromIndex\(Int32, Span<Char\>\)

Tries to read the line that contains the item at <code class="paramref">index</code>.
No end of line characters are added.

```csharp
public Boolean TryGetLineFromIndex(Int32 index, Span<Char> destination)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index at which to determine what the current line is.

`destination` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The destination span that will contain the line.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if successful.

#### Remarks

> [!NOTE]
> This method follows EOF conventions.
> EOF is considered a 0-character sequence in line N, where N is <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.LineCount" data-throw-if-not-resolved="false"></xref>.
> Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
> (meaning the actual last line is located at N - 1). If <code class="paramref">index</code> is EOF, the
> line will also be EOF.

### TrySlice\(Int32, Span<Char\>\)

Slices a region of the buffer into a performant span.

```csharp
public Boolean TrySlice(Int32 start, Span<Char> slice)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

The index of the first item in the slice.

`slice` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span serving as the destination for the slice.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

> [!IMPORTANT]
> Unlike with other <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref> methods, this one
> does not follow EOF conventions and, because of that, does not accept the 
> EOF index (index at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), because it is not
> considered part of any slice.

### TrySlice\(SourceSpan, Span<Char\>\)

Slices a region of the buffer into a performant span.

```csharp
public Boolean TrySlice(SourceSpan sourceSpan, Span<Char> slice)
```

#### Parameters

`sourceSpan` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

The span indicating what the slice is.

`slice` [Span](https://learn.microsoft.com/dotnet/api/system.span\-1)<[Char](https://learn.microsoft.com/dotnet/api/system.char)\>

The span serving as the destination for the slice.

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

> [!IMPORTANT]
> Unlike with other <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer" data-throw-if-not-resolved="false"></xref> methods, this one
> does not follow EOF conventions and, because of that, does not accept the 
> EOF index (index at <xref href="OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.Length" data-throw-if-not-resolved="false"></xref>), because it is not
> considered part of any slice.

## Operators

### operator ==\(ReadOnlyStringBuffer, ReadOnlyStringBuffer\)

Checks if two read-only string buffers are equals.

```csharp
public static Boolean operator ==(ReadOnlyStringBuffer left, ReadOnlyStringBuffer right)
```

#### Parameters

`left` [ReadOnlyStringBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.md)

`right` [ReadOnlyStringBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if equals.

### operator \!=\(ReadOnlyStringBuffer, ReadOnlyStringBuffer\)

Checks if two read-only string buffers are different.

```csharp
public static Boolean operator !=(ReadOnlyStringBuffer left, ReadOnlyStringBuffer right)
```

#### Parameters

`left` [ReadOnlyStringBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.md)

`right` [ReadOnlyStringBuffer](OceanApocalypseStudios.RSML.Sources.ReadOnlyStringBuffer.md)

#### Returns

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

True if different.

