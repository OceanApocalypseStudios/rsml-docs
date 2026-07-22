---
id: net481-ilexer
title: ILexer
sidebar_label: ILexer
---

# ILexer

Namespace: OceanApocalypseStudios.RSML.Language.Lexing

Represents a lexer for RSML.

```csharp
public interface ILexer : OceanApocalypseStudios.RSML.IToolchainComponent, System.IDisposable
```

Implements [IToolchainComponent](./oceanapocalypsestudios/rsml/itoolchaincomponent.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

**Remarks:**

&gt; [!TIP]
 &gt; If you want to add content on top of a lexer, without overriding
 &gt; the extra functionality it adds, you might want to take a look at
 &gt; [Lexer](./oceanapocalypsestudios/rsml/language/lexing/lexer.md).

## Methods

### **Lex()**

Tokenizes a source passed to the lexer.

```csharp
IEnumerable<Token> Lex()
```

#### Returns

[IEnumerable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br>
The tokens.
