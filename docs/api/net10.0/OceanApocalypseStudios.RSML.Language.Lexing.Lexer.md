---
id: "OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md"
managed-by: python-postprocessor
---

# Class Lexer

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

The base class for implementations of RSML lexers and tokenizers.

```csharp
public abstract class Lexer : ILexer, IToolchainComponent, IDisposable
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Lexer](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md)

#### Derived

[BufferLexer](OceanApocalypseStudios.RSML.Language.Lexing.BufferLexer.md), 
[StreamLexer](OceanApocalypseStudios.RSML.Language.Lexing.StreamLexer.md)

#### Implements

[ILexer](OceanApocalypseStudios.RSML.Language.Lexing.ILexer.md), 
[IToolchainComponent](OceanApocalypseStudios.RSML.IToolchainComponent.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### Configuration

Configurations for the toolchain component.

```csharp
public virtual ToolchainConfiguration Configuration { get; protected set; }
```

#### Property Value

 [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

## Methods

### Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public virtual void Dispose()
```

### Inject\(ToolchainConfiguration\)

Injects a configuration into the toolchain component, modifying it.

```csharp
public virtual void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

The configuration to inject.

### Lex\(\)

Tokenizes a source passed to the lexer.

```csharp
public abstract IEnumerable<Token> Lex()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Token](OceanApocalypseStudios.RSML.Language.Lexing.Token.md)\>

The tokens.

