---
id: net8.0-parser
title: Parser
sidebar_label: Parser
---

# Parser

Namespace: OceanApocalypseStudios.RSML.Language.Parsing

The base type that deals with parsing tokens and turning them into an organized tree.

```csharp
public abstract class Parser : IParser, OceanApocalypseStudios.RSML.IToolchainComponent, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [Parser](./oceanapocalypsestudios/rsml/language/parsing/parser.md)<br>
Implements [IParser](./oceanapocalypsestudios/rsml/language/parsing/iparser.md), [IToolchainComponent](./oceanapocalypsestudios/rsml/itoolchaincomponent.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **Configuration**

Configurations for the toolchain component.

```csharp
public ToolchainConfiguration Configuration { get; protected set; }
```

#### Property Value

[ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

## Methods

### **Dispose()**

```csharp
public abstract void Dispose()
```

### **Inject(ToolchainConfiguration)**

Injects a configuration into the toolchain component, modifying it.

```csharp
public virtual void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>
The configuration to inject.
