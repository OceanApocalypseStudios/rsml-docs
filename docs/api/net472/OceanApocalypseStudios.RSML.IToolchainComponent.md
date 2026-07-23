---
id: "OceanApocalypseStudios.RSML.IToolchainComponent.md"
managed-by: python-postprocessor
---

# Interface IToolchainComponent

Namespace: [OceanApocalypseStudios.RSML](OceanApocalypseStudios.RSML.md)  
Assembly: RSML.dll  

A component of the RSML toolchain.

```csharp
public interface IToolchainComponent : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Configuration

Configurations for the toolchain component.

```csharp
ToolchainConfiguration Configuration { get; }
```

#### Property Value

 [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

## Methods

### Inject\(ToolchainConfiguration\)

Injects a configuration into the toolchain component, modifying it.

```csharp
void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

The configuration to inject.

## See Also

[Lexer](OceanApocalypseStudios.RSML.Language.Lexing.Lexer.md), 
[Parser](OceanApocalypseStudios.RSML.Language.Parsing.Parser.md), 
[Interpreter](OceanApocalypseStudios.RSML.Execution.Interpreter.md)

