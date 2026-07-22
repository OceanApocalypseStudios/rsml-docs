---
id: net8.0-interpreter
title: Interpreter
sidebar_label: Interpreter
---

# Interpreter

Namespace: OceanApocalypseStudios.RSML.Execution

The base type that deals with evaluating, interpreting and executing RSML.

```csharp
public abstract class Interpreter : OceanApocalypseStudios.RSML.IToolchainComponent, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) → [Interpreter](./oceanapocalypsestudios/rsml/execution/interpreter.md)<br>
Implements [IToolchainComponent](./oceanapocalypsestudios/rsml/itoolchaincomponent.md), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **IsMutable**

```csharp
public bool IsMutable { get; protected set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

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

### **Freeze()**

```csharp
public void Freeze()
```

### **Inject(ToolchainConfiguration)**

Injects a configuration into the toolchain component, modifying it.

```csharp
public void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>
The configuration to inject.
