---
id: "OceanApocalypseStudios.RSML.Language.Parsing.Parser.md"
managed-by: python-postprocessor
---

# Class Parser

Namespace: [OceanApocalypseStudios.RSML.Language.Parsing](OceanApocalypseStudios.RSML.Language.Parsing.md)  
Assembly: RSML.dll  

The base type that deals with parsing tokens and turning them into an organized tree.

```csharp
public abstract class Parser : IParser, IToolchainComponent, IDisposable
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Parser](OceanApocalypseStudios.RSML.Language.Parsing.Parser.md)

#### Implements

[IParser](OceanApocalypseStudios.RSML.Language.Parsing.IParser.md), 
[IToolchainComponent](OceanApocalypseStudios.RSML.IToolchainComponent.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[Object.Equals\(Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.ReferenceEquals\(Object, Object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

### Configuration

Configurations for the toolchain component.

```csharp
public ToolchainConfiguration Configuration { get; protected set; }
```

#### Property Value

 [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

## Methods

### Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public abstract void Dispose()
```

### Inject\(ToolchainConfiguration\)

Injects a configuration into the toolchain component, modifying it.

```csharp
public virtual void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

The configuration to inject.

