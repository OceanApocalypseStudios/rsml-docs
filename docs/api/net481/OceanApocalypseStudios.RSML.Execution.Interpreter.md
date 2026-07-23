---
id: "OceanApocalypseStudios.RSML.Execution.Interpreter.md"
managed-by: python-postprocessor
---

# Class Interpreter

Namespace: [OceanApocalypseStudios.RSML.Execution](OceanApocalypseStudios.RSML.Execution.md)  
Assembly: RSML.dll  

The base type that deals with evaluating, interpreting and executing RSML.

```csharp
public abstract class Interpreter : IToolchainComponent, IDisposable
```

#### Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Interpreter](OceanApocalypseStudios.RSML.Execution.Interpreter.md)

#### Implements

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

### IsMutable

```csharp
public Boolean IsMutable { get; protected set; }
```

#### Property Value

 [Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public abstract void Dispose()
```

### Freeze\(\)

```csharp
public void Freeze()
```

### Inject\(ToolchainConfiguration\)

Injects a configuration into the toolchain component, modifying it.

```csharp
public void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](OceanApocalypseStudios.RSML.ToolchainConfiguration.md)

The configuration to inject.

