---
id: net481-lexer
title: Lexer
sidebar_label: Lexer
---

# Lexer

Namespace: OceanApocalypseStudios.RSML.Language.Lexing

The base class for implementations of RSML lexers and tokenizers.

```csharp
public abstract class Lexer : ILexer, OceanApocalypseStudios.RSML.IToolchainComponent, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [Lexer](./oceanapocalypsestudios/rsml/language/lexing/lexer.md)<br>
Implements [ILexer](./oceanapocalypsestudios/rsml/language/lexing/ilexer.md), [IToolchainComponent](./oceanapocalypsestudios/rsml/itoolchaincomponent.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **Configuration**

Configurations for the toolchain component.

```csharp
public virtual ToolchainConfiguration Configuration { get; protected set; }
```

#### Property Value

[ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

## Methods

### **Inject(ToolchainConfiguration)**

Injects a configuration into the toolchain component, modifying it.

```csharp
public virtual void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>
The configuration to inject.

### **Lex()**

Tokenizes a source passed to the lexer.

```csharp
public abstract IEnumerable<Token> Lex()
```

#### Returns

[IEnumerable&lt;Token&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br>
The tokens.

### **Dispose()**

```csharp
public virtual void Dispose()
```
