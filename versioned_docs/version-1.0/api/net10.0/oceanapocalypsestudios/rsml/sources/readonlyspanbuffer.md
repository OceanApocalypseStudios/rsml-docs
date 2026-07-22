---
id: net10.0-readonlyspanbuffer
title: ReadOnlySpanBuffer
sidebar_label: ReadOnlySpanBuffer
---

# ReadOnlySpanBuffer

Namespace: OceanApocalypseStudios.RSML.Sources

#### Caution

Types with embedded references are not supported in this version of your compiler.

---

A read-only buffer backed by a span of characters. All operations opt for performance
 primarily via the internal use of [ReadOnlySpan&lt;T&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlyspan-1) over string allocations
 and also via caching.

```csharp
public ref struct ReadOnlySpanBuffer
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)<br>
Implements [IReadOnlyBuffer](./oceanapocalypsestudios/rsml/sources/ireadonlybuffer.md), [ISource](./oceanapocalypsestudios/rsml/sources/isource.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable), [IEquatable&lt;IReadOnlyBuffer&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IEquatable&lt;Char[]&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IEquatable&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IEquatable&lt;ReadOnlyMemory&lt;Char&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [ISupportsCache](./oceanapocalypsestudios/rsml/cache/isupportscache.md)<br>
Attributes [IsByRefLikeAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.isbyreflikeattribute), [ObsoleteAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.obsoleteattribute), [CompilerFeatureRequiredAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.compilerfeaturerequiredattribute), [DefaultMemberAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.reflection.defaultmemberattribute)

**Remarks:**

&gt; [!TIP]
 &gt; The main advantage of this type over [ReadOnlyStringBuffer](./oceanapocalypsestudios/rsml/sources/readonlystringbuffer.md)
 &gt; is that you don't need to allocate a class and, on initialization, you don't need to allocate
 &gt; a string.

## Properties

### **CacheExists**

Whether there's cached data.

```csharp
public bool CacheExists { get; private set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **IsEmpty**

Whether the source is completely empty.

```csharp
public bool IsEmpty { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **IsReadOnly**

Whether the source can be mutated.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

**Remarks:**

Always returns `true`, as [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md) only
 supports read-only content (hence the name).

### **Length**

The length of the source.

```csharp
public int Length { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **LineCount**

The total amount of lines in the buffer.

```csharp
public int LineCount { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

**Remarks:**

[ReadOnlySpanBuffer.LineCount](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#linecount) automatically builds cache if
 no cached data exists. No [ReadOnlySpanBuffer.BuildCache()](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#buildcache) calls
 are necessary.

## Indexers

### **this[Int32]**

```csharp
public char? this[int index] { get; }
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

#### Property Value

[Char?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **this[SourceLocation]**

```csharp
public char? this[SourceLocation location] { get; }
```

#### Parameters

`location` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Property Value

[Char?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **this[SourceSpan]**

```csharp
public Result<string> this[SourceSpan span] { get; }
```

#### Parameters

`span` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

#### Property Value

[Result&lt;String&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>

## Constructors

### **ReadOnlySpanBuffer(String)**

Initializes a new [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)
 with a string.

```csharp
public ReadOnlySpanBuffer(string content)
```

#### Parameters

`content` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The string that the buffer will wrap.

### **ReadOnlySpanBuffer(ReadOnlySpan&lt;Char&gt;)**

Initializes a new [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md) with a span.

```csharp
public ReadOnlySpanBuffer(ReadOnlySpan<char> content)
```

#### Parameters

`content` [ReadOnlySpan&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlyspan-1)<br>
The span pointing to the string's data.

### **ReadOnlySpanBuffer(Char[])**

Initializes a new [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)
 with an array of characters.

```csharp
public ReadOnlySpanBuffer(Char[] content)
```

#### Parameters

`content` [Char[]](https://learn.microsoft.com/en-us/dotnet/api/system.char)<br>
The array of characters to use for the buffer.

## Methods

### **BuildCache()**

Builds the cache if it doesn't exist yet.

```csharp
public void BuildCache()
```

### **BuildCache(Boolean)**

Builds the cache. If `forceRebuild` is set to `true`,
 the cache will be built even if it already exists.

```csharp
public void BuildCache(bool forceRebuild)
```

#### Parameters

`forceRebuild` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
Whether to force the cache to be built even if it exists.

### **CountUntilEndOfLine(Int32, out Boolean)**

Counts the amount of items until the next line separator in the buffer, relative to a given `index`.
 Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

```csharp
public Result<int> CountUntilEndOfLine(int index, out bool isCrLf)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to start counting.

`out` `isCrLf` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
Whether the line separator at which the method stopped is the CR in a CRLF sequence. If true, the next item in the buffer is LF.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The index of the next line separator, relative to an `index`.

**Remarks:**

&gt; [!NOTE]
 &gt; This method allows the EOF index as in-range. The convention is as follows:
 &gt; - If the index is EOF ([ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), then the output is always 0 and `isCrLf` is always `false`.
 &gt; - If the index is the last ([ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length) - 1), then the output is always 0.
 &gt; [!NOTE]
 &gt; `isCrLf` is only `true` if all the following conditions are true:
 &gt; - The next line start counting from `index` is preceded by a CRLF sequence.
 &gt; - `index` does not point to the LF in the CRLF sequence.
 &gt; - `index` does not point to EOF.

### **CountUntilNotWhitespace(Int32)**

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given `index`.
 Line separators are included in the whitespace category.

```csharp
public Result<int> CountUntilNotWhitespace(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to start counting.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The index of the next non-whitespace item, relative to a `index`.

**Remarks:**

&gt; [!NOTE]
 &gt; This method allows the EOF index as in-range.
 &gt; If the index is EOF ([ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), then the output is always 0.
 &gt; [!NOTE]
 &gt; The return value, when summed with `index`, becomes the index of the first character that
 &gt; is not whitespace, counting from `index`.
 &gt; The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that are
 &gt; not whitespace), meaning the return value, when summed with `index` is the value of
 &gt; [ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length), which is also the EOF index.

### **CountUntilWhitespace(Int32)**

Counts the amount of items until the next whitespace item in the buffer, relative to a given `index`.
 Line separators are included in the whitespace category.

```csharp
public Result<int> CountUntilWhitespace(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to start counting.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The index of the next whitespace item, relative to a `index`.

**Remarks:**

&gt; [!NOTE]
 &gt; This method allows the EOF index as in-range.
 &gt; If the index is EOF ([ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), then the output is always 0.
 &gt; [!NOTE]
 &gt; The return value, when summed with `index`, becomes the index of the first character that
 &gt; is whitespace, counting from `index`.
 &gt; The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that are
 &gt; whitespace), meaning the return value, when summed with `index` is the value of
 &gt; [ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length), which is also the EOF index.

### **CountWhile(Func&lt;Int32, Char, Boolean&gt;, Int32)**

Counts the amount of items, starting from a given `index`,
 while a `predicate` returns `true`.

```csharp
public Result<int> CountWhile(Func<int, char, bool> predicate, int index)
```

#### Parameters

`predicate` [Func&lt;Int32, Char, Boolean&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-3)<br>
A function that takes the current index (relative to `index`),
 which is incremented every item, and the item associated with it. Execution stops when
 the predicate returns `false` or the index is out of bounds.

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to start counting; all indexes will also be given to the
 `predicate` as an offset that when added to the index of the position
 equal the actual index.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The amount of items counted.

**Remarks:**

&gt; [!NOTE]
 &gt; This method allows the EOF index as in-range.
 &gt; If the index is EOF ([ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), then the output is always 0.
 &gt; [!NOTE]
 &gt; The return value, when summed with `index`, becomes the index of the first character that
 &gt; fails to verify the `predicate`, counting from `index`.
 &gt; The only exception is if the buffer has been consumed (you pass EOF index or there's no more characters that fail to verify
 &gt; the `predicate`), meaning the return value, when summed with `index` is the value of
 &gt; [ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length), which is also the EOF index.

### **GetLengthOfLine(Int32)**

Returns the length of a line given its 0-based line number.
 Line separators do not count towards the length.

```csharp
public Result<int> GetLengthOfLine(int lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The length of the line.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows EOF conventions.
 &gt; EOF is considered a 0-character sequence in line N, where N is [ReadOnlySpanBuffer.LineCount](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#linecount).
 &gt; Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
 &gt; (meaning the actual last line is located at N - 1).

### **GetLengthOfLineFromIndex(Int32)**

Returns the length of a line given a 0-based index of one
 of its items.
 Line separators do not count towards the length.

```csharp
public Result<int> GetLengthOfLineFromIndex(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based index whose line is considered.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The length of the line.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows EOF conventions.
 &gt; EOF is considered a 0-character sequence in line N, where N is [ReadOnlySpanBuffer.LineCount](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#linecount).
 &gt; Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
 &gt; (meaning the actual last line is located at N - 1).

### **GetLineNumberFromIndex(Int32)**

Determines the 0-based line number of the line that contains the item located at `index`.

```csharp
public Result<int> GetLineNumberFromIndex(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index whose parent line's number is to be returned.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The 0-based number of the line that contains item located at `index`.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows EOF conventions.

### **GetLine(Int32)**

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
public Result<string> GetLine(int lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

#### Returns

[Result&lt;String&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The line as an array of items.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows EOF conventions.
 &gt; EOF is considered a 0-character sequence in line N, where N is [ReadOnlySpanBuffer.LineCount](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#linecount).
 &gt; Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
 &gt; (meaning the actual last line is located at N - 1).

### **GetLineFromIndex(Int32)**

Tries to read the line that contains the item at `index`.
 No end of line characters are added.

```csharp
public Result<string> GetLineFromIndex(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to determine what the current line is.

#### Returns

[Result&lt;String&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The line, as an array of items.

### **GetLineAsSpan(Int32)**

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
public ReadOnlySpan<char> GetLineAsSpan(int lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

#### Returns

[ReadOnlySpan&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlyspan-1)<br>
The line as a span.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows EOF conventions.
 &gt; EOF is considered a 0-character sequence in line N, where N is [ReadOnlySpanBuffer.LineCount](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#linecount).
 &gt; Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
 &gt; (meaning the actual last line is located at N - 1).

### **GetLineAsSpanFromIndex(Int32)**

Tries to read the line that contains the item at `index`.
 No end of line characters are added.

```csharp
public ReadOnlySpan<char> GetLineAsSpanFromIndex(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to determine what the current line is.

#### Returns

[ReadOnlySpan&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlyspan-1)<br>
The line, as a span.

### **GetSourceLocation(Int32)**

Converts an index into a location.

```csharp
public Result<SourceLocation> GetSourceLocation(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index.

#### Returns

[Result&lt;SourceLocation&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The location.

**Remarks:**

&gt; [!IMPORTANT]
 &gt; Unlike with other [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md) methods, this one
 &gt; does not follow EOF conventions and, because of that, does not accept the 
 &gt; EOF index (index at [ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), because it is not
 &gt; considered a location.

### **GetSourceSpan(Int32, Int32)**

Converts the buffer region into a span.

```csharp
public Result<SourceSpan> GetSourceSpan(int startIndex, int endIndex)
```

#### Parameters

`startIndex` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The starting index.

`endIndex` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The end index, which is included in the span.

#### Returns

[Result&lt;SourceSpan&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The span.

### **Slice(Int32, Int32)**

Slices a region of the buffer.

```csharp
public Result<string> Slice(int start, int length)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index of the first item in the slice.

`length` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The amount of items to slice starting at `start`.

#### Returns

[Result&lt;String&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
A slice, as an array of items.

**Remarks:**

&gt; [!IMPORTANT]
 &gt; Unlike with other [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md) methods, this one
 &gt; does not follow EOF conventions and, because of that, does not accept the 
 &gt; EOF index (index at [ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), because it is not
 &gt; considered part of any slice.

### **TrySlice(Int32, Span&lt;Char&gt;)**

Slices a region of the buffer into a performant span.

```csharp
public bool TrySlice(int start, Span<char> slice)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index of the first item in the slice.

`slice` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The span serving as the destination for the slice.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

**Remarks:**

&gt; [!IMPORTANT]
 &gt; Unlike with other [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md) methods, this one
 &gt; does not follow EOF conventions and, because of that, does not accept the 
 &gt; EOF index (index at [ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), because it is not
 &gt; considered part of any slice.

### **TrySlice(SourceSpan, Span&lt;Char&gt;)**

Slices a region of the buffer into a performant span.

```csharp
public bool TrySlice(SourceSpan sourceSpan, Span<char> slice)
```

#### Parameters

`sourceSpan` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>
The span indicating what the slice is.

`slice` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The span serving as the destination for the slice.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

**Remarks:**

&gt; [!IMPORTANT]
 &gt; Unlike with other [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md) methods, this one
 &gt; does not follow EOF conventions and, because of that, does not accept the 
 &gt; EOF index (index at [ReadOnlySpanBuffer.Length](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#length)), because it is not
 &gt; considered part of any slice.

### **TryGetChar(Int32, out Char)**

Tries to return the item at `index`.

```csharp
public bool TryGetChar(int index, out char item)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index of the character.

`out` `item` [Char](https://learn.microsoft.com/en-us/dotnet/api/system.char)<br>
The item.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
False if the buffer is out of bounds or an exception occured.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows the EOF convention where the EOF character
 &gt; is 0 (`'\0'`) and the return value is `false`, due to EOF
 &gt; not being an actual buffer location.

### **TryGetChar(SourceLocation, out Char)**

Tries to return the item at the specified `location`.

```csharp
public bool TryGetChar(SourceLocation location, out char item)
```

#### Parameters

`location` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>
The item's location.

`out` `item` [Char](https://learn.microsoft.com/en-us/dotnet/api/system.char)<br>
The item.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
False if the buffer is out of bounds or an exception occured.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows the EOF convention where the EOF character
 &gt; is 0 (`'\0'`) and the return value is `false`, due to EOF
 &gt; not being an actual buffer location.

### **TryGetLine(Int32, Span&lt;Char&gt;)**

Given a 0-based line number, assigns the exact line to a result buffer (`destination`).
 No end of line characters are added.

```csharp
public bool TryGetLine(int lineNumber, Span<char> destination)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

`destination` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The destination buffer for the line.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if successful.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows EOF conventions.
 &gt; EOF is considered a 0-character sequence in line N, where N is [ReadOnlySpanBuffer.LineCount](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#linecount).
 &gt; Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
 &gt; (meaning the actual last line is located at N - 1).

### **TryGetLineFromIndex(Int32, Span&lt;Char&gt;)**

Tries to read the line that contains the item at `index`.
 No end of line characters are added.

```csharp
public bool TryGetLineFromIndex(int index, Span<char> destination)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to determine what the current line is.

`destination` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The destination span that will contain the line.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if successful.

**Remarks:**

&gt; [!NOTE]
 &gt; This method follows EOF conventions.
 &gt; EOF is considered a 0-character sequence in line N, where N is [ReadOnlySpanBuffer.LineCount](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md#linecount).
 &gt; Keep in mind N does not point to an actual line (it's just a convention), as line numbers are 0-based
 &gt; (meaning the actual last line is located at N - 1). If `index` is EOF, the
 &gt; line will also be EOF.

### **Dispose()**

```csharp
public void Dispose()
```

### **Equals(Object)**

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)?<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Equals(Char[])**

Checks if an array of characters is equal to the current instance.

```csharp
public new bool Equals(Char[]? other)
```

#### Parameters

`other` [Char[]](https://learn.microsoft.com/en-us/dotnet/api/system.char)?<br>
The array.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **Equals(IReadOnlyBuffer)**

Checks if another read-only buffer is equal to the current instance.

```csharp
public new bool Equals(IReadOnlyBuffer? other)
```

#### Parameters

`other` [IReadOnlyBuffer](./oceanapocalypsestudios/rsml/sources/ireadonlybuffer.md)?<br>
The other read-only buffer.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **Equals(ReadOnlyMemory&lt;Char&gt;)**

Checks if a read-only contiguous region of memory is equal to the current instance.

```csharp
public new bool Equals(ReadOnlyMemory<char> other)
```

#### Parameters

`other` [ReadOnlyMemory&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlymemory-1)<br>
The region of memory.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **Equals(ReadOnlySpan&lt;Char&gt;)**

Checks if a read-only contiguous region of memory is equal to the current instance.

```csharp
public new bool Equals(ReadOnlySpan<char> other)
```

#### Parameters

`other` [ReadOnlySpan&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlyspan-1)<br>
The region of memory.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **Equals(ReadOnlySpanBuffer)**

Checks if another read-only span buffer is equal to the current instance.

```csharp
public new bool Equals(ReadOnlySpanBuffer other)
```

#### Parameters

`other` [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)<br>
The other read-only span buffer.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **Equals(String)**

Checks if a string is equal to the current instance.

```csharp
public new bool Equals(string? other)
```

#### Parameters

`other` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)?<br>
The string.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **ToString()**

Returns the buffer's content as a [String](https://learn.microsoft.com/en-us/dotnet/api/system.string).

```csharp
public override string ToString()
```

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
The buffer's content.

### **GetHashCode()**

```csharp
public override int GetHashCode()
```

#### Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

## Operators

### **operator ==(ReadOnlySpanBuffer, ReadOnlySpanBuffer)**

Checks if two read-only span buffers are equals.

```csharp
public static bool operator ==(ReadOnlySpanBuffer left, ReadOnlySpanBuffer right)
```

#### Parameters

`left` [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)<br>

`right` [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if equals.

### **operator !=(ReadOnlySpanBuffer, ReadOnlySpanBuffer)**

Checks if two read-only span buffers are different.

```csharp
public static bool operator !=(ReadOnlySpanBuffer left, ReadOnlySpanBuffer right)
```

#### Parameters

`left` [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)<br>

`right` [ReadOnlySpanBuffer](./oceanapocalypsestudios/rsml/sources/readonlyspanbuffer.md)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if different.
