---
id: "OceanApocalypseStudios.RSML.Diagnostics.Severity.md"
managed-by: python-postprocessor
---

# Enum Severity

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

The severity of an error.

```csharp
public enum Severity : Byte
```

## Fields

`None = 0` 

No severity information.



`Message = 1` 

Messages and hints.



`Warning = 2` 

Non-critical warnings.



`Error = 3` 

Non-critical errors, such as style errors.



`Critical = 4` 

Fatal error that should abort the executing
toolchain component.



