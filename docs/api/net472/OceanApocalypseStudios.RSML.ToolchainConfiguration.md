---
id: "OceanApocalypseStudios.RSML.ToolchainConfiguration.md"
managed-by: python-postprocessor
---

# Enum ToolchainConfiguration

Namespace: [OceanApocalypseStudios.RSML](OceanApocalypseStudios.RSML.md)  
Assembly: RSML.dll  

Configuration options for a <xref href="OceanApocalypseStudios.RSML.IToolchainComponent" data-throw-if-not-resolved="false"></xref>.

```csharp
[Flags]
public enum ToolchainConfiguration
```

## Fields

`DisableExtensionProcessing = 1` 

Optimizes the toolchain pipeline by disabling extension processing.

> [!WARNING]
> This completely disables extensions, but does not warn you if there are active extensions,
> meaning sometimes you might be wondering why your extension is not working when, in reality,
you've enabled this configuration.
> [!TIP]
> This configuration is automatically enabled when no extensions are enabled.

`AllowOnlyOASExtensions = 2` 

Only allows OceanApocalypseStudios extensions, leading to an error if any non-OAS extension is active.

> [!NOTE]
> When used alongside <xref href="OceanApocalypseStudios.RSML.ToolchainConfiguration.IgnoreAllExtensibilityErrors" data-throw-if-not-resolved="false"></xref>, the non-OAS extensions will be disabled, but
> no errors will be thrown.

`IgnoreBrokenExtensions = 4` 

Ignores all errors caused by broken or faulty extensions.



`IgnoreDuplicatedExtensions = 8` 

Ignores all errors caused by injecting already injected extensions.



`IgnoreAllExtensibilityErrors = 12` 

Ignores all errors thrown during pipeline creation and pipeline execution.

> [!CAUTION]
> This option is only needed in beyond extremely rare occasions.
> It emulates RSML v1.x.x behavior.

