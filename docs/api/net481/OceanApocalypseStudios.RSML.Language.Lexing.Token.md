---
id: "OceanApocalypseStudios.RSML.Language.Lexing.Token.md"
managed-by: python-postprocessor
---

# Struct Token

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

Represents a RSML token.

```csharp
public record struct Token : IEquatable<Token>
```

#### Implements

[IEquatable<Token\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### Token\(Int32, Object?, SourceSpan\)

Represents a RSML token.

```csharp
public Token(Int32 TokenKind, Object? Value, SourceSpan Span)
```

#### Parameters

`TokenKind` [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

An integer that identifies the type of token.

`Value` [Object](https://learn.microsoft.com/dotnet/api/system.object)?

The token's value.

`Span` [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

The span where the token occurs.

## Fields

### Empty

Empty token. Used when something goes wrong.

```csharp
public static readonly Token Empty
```

#### Field Value

 [Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)

## Properties

### Span

The span where the token occurs.

```csharp
public SourceSpan Span { readonly get; set; }
```

#### Property Value

 [SourceSpan](OceanApocalypseStudios.RSML.Sources.SourceSpan.md)

### TokenKind

An integer that identifies the type of token.

```csharp
public Int32 TokenKind { readonly get; set; }
```

#### Property Value

 [Int32](https://learn.microsoft.com/dotnet/api/system.int32)

### Value

The token's value.

```csharp
public Object? Value { readonly get; set; }
```

#### Property Value

 [Object](https://learn.microsoft.com/dotnet/api/system.object)?

