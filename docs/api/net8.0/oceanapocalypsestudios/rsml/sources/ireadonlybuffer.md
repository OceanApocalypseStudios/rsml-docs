---
id: oceanapocalypsestudios-rsml-sources-ireadonlybuffer
title: IReadOnlyBuffer
sidebar_label: IReadOnlyBuffer
---

# IReadOnlyBuffer

Namespace: OceanApocalypseStudios.RSML.Sources

Represents a read-only buffer of characters.

```csharp
public interface IReadOnlyBuffer : ISource, System.IDisposable, System.IEquatable`1[[OceanApocalypseStudios.RSML.Sources.IReadOnlyBuffer, RSML, Version=3.0.0.0, Culture=neutral, PublicKeyToken=null]], System.IEquatable`1[[System.Char[], System.Private.CoreLib, Version=10.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.IEquatable`1[[System.String, System.Private.CoreLib, Version=10.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.IEquatable`1[[System.ReadOnlyMemory`1[[System.Char, System.Private.CoreLib, Version=10.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=10.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
```

Implements [ISource](./oceanapocalypsestudios/rsml/sources/isource.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable), [IEquatable&lt;IReadOnlyBuffer&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IEquatable&lt;Char[]&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IEquatable&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1), [IEquatable&lt;ReadOnlyMemory&lt;Char&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1)<br>
Attributes [DefaultMemberAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.reflection.defaultmemberattribute)

## Properties

### **LineCount**

The total amount of lines in the buffer.

```csharp
int LineCount { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

**Remarks:**

Keep in mind lines might be empty.

## Indexers

### **this[Int32]**

```csharp
char? this[int index] { get; }
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

#### Property Value

[Char?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **this[SourceLocation]**

```csharp
char? this[SourceLocation location] { get; }
```

#### Parameters

`location` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>

#### Property Value

[Char?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **this[SourceSpan]**

```csharp
Result<string> this[SourceSpan span] { get; }
```

#### Parameters

`span` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

#### Property Value

[Result&lt;String&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>

## Methods

### **CountUntilEndOfLine(Int32, out Boolean)**

Counts the amount of items until the next line separator in the buffer, relative to a given `index`.
 Only line separators count - regular whitespace do not. CRLF counts as a single line separator, to avoid double counting.

```csharp
Result<int> CountUntilEndOfLine(int index, out bool isCrLf)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to start counting.

`out` `isCrLf` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
Whether the line separator at which the method stopped is the CR in a CRLF sequence. If true, the next item in the buffer is LF.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The index of the next line separator, relative to an `index`.

### **CountUntilNotWhitespace(Int32)**

Counts the amount of items until the next non-whitespace item in the buffer, relative to a given `index`.
 Line separators are included in the whitespace category.

```csharp
Result<int> CountUntilNotWhitespace(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to start counting.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The index of the next non-whitespace item, relative to a `index`.

### **CountUntilWhitespace(Int32)**

Counts the amount of items until the next whitespace item in the buffer, relative to a given `index`.
 Line separators are included in the whitespace category.

```csharp
Result<int> CountUntilWhitespace(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to start counting.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The index of the next whitespace item, relative to a `index`.

### **CountWhile(Func&lt;Int32, Char, Boolean&gt;, Int32)**

Counts the amount of items, starting from a given `index`,
 while a `predicate` returns `true`.

```csharp
Result<int> CountWhile(Func<int, char, bool> predicate, int index)
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

### **GetLengthOfLine(Int32)**

Returns the length of a line given its 0-based line number.
 Line separators do not count towards the length.

```csharp
Result<int> GetLengthOfLine(int lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The length of the line.

### **GetLengthOfLineFromIndex(Int32)**

Returns the length of a line given a 0-based index of one
 of its items.
 Line separators do not count towards the length.

```csharp
Result<int> GetLengthOfLineFromIndex(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based index whose line is considered.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The length of the line.

### **GetLine(Int32)**

Given a 0-based line number, returns the matching line as an array of buffer items.

```csharp
Result<string> GetLine(int lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

#### Returns

[Result&lt;String&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The line as an array of items.

### **GetLineFromIndex(Int32)**

Tries to read the line that contains the item at `index`.
 No end of line characters are added.

```csharp
Result<string> GetLineFromIndex(int index)
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
ReadOnlySpan<char> GetLineAsSpan(int lineNumber)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

#### Returns

[ReadOnlySpan&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlyspan-1)<br>
The line as a span.

### **GetLineAsSpanFromIndex(Int32)**

Tries to read the line that contains the item at `index`.
 No end of line characters are added.

```csharp
ReadOnlySpan<char> GetLineAsSpanFromIndex(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to determine what the current line is.

#### Returns

[ReadOnlySpan&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlyspan-1)<br>
The line, as a span.

### **GetLineNumberFromIndex(Int32)**

Determines the 0-based line number of the line that contains the item located at `index`.

```csharp
Result<int> GetLineNumberFromIndex(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index whose parent line's number is to be returned.

#### Returns

[Result&lt;Int32&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The 0-based number of the line that contains item located at `index`.

### **GetSourceLocation(Int32)**

Converts an index into a location.

```csharp
Result<SourceLocation> GetSourceLocation(int index)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index.

#### Returns

[Result&lt;SourceLocation&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
The location.

### **GetSourceSpan(Int32, Int32)**

Converts the buffer region into a span.

```csharp
Result<SourceSpan> GetSourceSpan(int startIndex, int endIndex)
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
Result<string> Slice(int start, int length)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index of the first item in the slice.

`length` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The amount of items to slice starting at `start`.

#### Returns

[Result&lt;String&gt;](./oceanapocalypsestudios/rsml/diagnostics/result-1.md)<br>
A slice, as an array of items.

### **TrySlice(Int32, Span&lt;Char&gt;)**

Slices a region of the buffer into a performant span.

```csharp
bool TrySlice(int start, Span<char> slice)
```

#### Parameters

`start` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index of the first item in the slice.

`slice` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The span serving as the destination for the slice.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **TrySlice(SourceSpan, Span&lt;Char&gt;)**

Slices a region of the buffer into a performant span.

```csharp
bool TrySlice(SourceSpan sourceSpan, Span<char> slice)
```

#### Parameters

`sourceSpan` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>
The span indicating what the slice is.

`slice` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The span serving as the destination for the slice.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **TryGetChar(Int32, out Char)**

Tries to return the item at `index`.

```csharp
bool TryGetChar(int index, out char item)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index of the character.

`out` `item` [Char](https://learn.microsoft.com/en-us/dotnet/api/system.char)<br>
The item.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
False if the buffer is out of bounds or an exception occured.

### **TryGetChar(SourceLocation, out Char)**

Tries to return the item at the specified `location`.

```csharp
bool TryGetChar(SourceLocation location, out char item)
```

#### Parameters

`location` [SourceLocation](./oceanapocalypsestudios/rsml/sources/sourcelocation.md)<br>
The item's location.

`out` `item` [Char](https://learn.microsoft.com/en-us/dotnet/api/system.char)<br>
The item.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
False if the buffer is out of bounds or an exception occured.

### **TryGetLine(Int32, Span&lt;Char&gt;)**

Given a 0-based line number, assigns the exact line to a result buffer (`destination`).
 No end of line characters are added.

```csharp
bool TryGetLine(int lineNumber, Span<char> destination)
```

#### Parameters

`lineNumber` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The 0-based line number.

`destination` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The destination buffer for the line.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if successful.

### **TryGetLineFromIndex(Int32, Span&lt;Char&gt;)**

Tries to read the line that contains the item at `index`.
 No end of line characters are added.

```csharp
bool TryGetLineFromIndex(int index, Span<char> destination)
```

#### Parameters

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
The index at which to determine what the current line is.

`destination` [Span&lt;Char&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)<br>
The destination span that will contain the line.

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>
True if successful.
