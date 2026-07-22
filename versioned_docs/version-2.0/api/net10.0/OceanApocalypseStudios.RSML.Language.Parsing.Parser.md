# <a id="OceanApocalypseStudios_RSML_Language_Parsing_Parser"></a> Class Parser

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

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

 [Configuration](OceanApocalypseStudios.RSML.Language.Parsing.Parser.Configuration.md\#OceanApocalypseStudios\_RSML\_Language\_Parsing\_Parser\_Configuration)

Configurations for the toolchain component.

## Methods

 [Dispose\(\)](OceanApocalypseStudios.RSML.Language.Parsing.Parser.Dispose.md\#OceanApocalypseStudios\_RSML\_Language\_Parsing\_Parser\_Dispose)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

 [Inject\(ToolchainConfiguration\)](OceanApocalypseStudios.RSML.Language.Parsing.Parser.Inject.md\#OceanApocalypseStudios\_RSML\_Language\_Parsing\_Parser\_Inject\_OceanApocalypseStudios\_RSML\_ToolchainConfiguration\_)

Injects a configuration into the toolchain component, modifying it.

