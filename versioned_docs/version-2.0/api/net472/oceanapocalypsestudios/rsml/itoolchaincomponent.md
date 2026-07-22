---
id: net472-itoolchaincomponent
title: IToolchainComponent
sidebar_label: IToolchainComponent
---

# IToolchainComponent

Namespace: OceanApocalypseStudios.RSML

A component of the RSML toolchain.

```csharp
public interface IToolchainComponent : System.IDisposable
```

Implements [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **Configuration**

Configurations for the toolchain component.

```csharp
ToolchainConfiguration Configuration { get; }
```

#### Property Value

[ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>

## Methods

### **Inject(ToolchainConfiguration)**

Injects a configuration into the toolchain component, modifying it.

```csharp
void Inject(ToolchainConfiguration configuration)
```

#### Parameters

`configuration` [ToolchainConfiguration](./oceanapocalypsestudios/rsml/toolchainconfiguration.md)<br>
The configuration to inject.
