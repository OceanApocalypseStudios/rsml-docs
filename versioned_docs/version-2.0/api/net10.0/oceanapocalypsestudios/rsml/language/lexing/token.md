---
id: net10.0-token
title: Token
sidebar_label: Token
---

# Token

Namespace: OceanApocalypseStudios.RSML.Language.Lexing

Represents a RSML token.

```csharp
public record struct Token
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype) → [Token](./oceanapocalypsestudios/rsml/language/lexing/token.md)<br>
Implements [IEquatable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1)<br>
Attributes [NullableContextAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.nullablecontextattribute), [NullableAttribute](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.nullableattribute)

## Fields

### **Empty**

Empty token. Used when something goes wrong.

```csharp
public static Token Empty;
```

## Properties

### **TokenKind**

An integer that identifies the type of token.

```csharp
public int TokenKind { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **Value**

The token's value.

```csharp
public object? Value { get; set; }
```

#### Property Value

[Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>

### **Span**

The span where the token occurs.

```csharp
public SourceSpan Span { get; set; }
```

#### Property Value

[SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>

## Constructors

### **Token(Int32, Object, SourceSpan)**

Represents a RSML token.

```csharp
public Token(int TokenKind, object? Value, SourceSpan Span)
```

#### Parameters

`TokenKind` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
An integer that identifies the type of token.

`Value` [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)?<br>
The token's value.

`Span` [SourceSpan](./oceanapocalypsestudios/rsml/sources/sourcespan.md)<br>
The span where the token occurs.
