# <a id="OceanApocalypseStudios_RSML_Diagnostics_ErrorCategory"></a> Enum ErrorCategory

Namespace: [OceanApocalypseStudios.RSML.Diagnostics](OceanApocalypseStudios.RSML.Diagnostics.md)  
Assembly: RSML.dll  

The category of an error, which changes its error code.

```csharp
public enum ErrorCategory
```

## Fields

`General = 0` 

Any general error code that is not restricted to any specific category.



`Internal = 1` 

An internal error code.

These are usually never thrown unless you implement custom lexers, parsers and whatnot.

`Lexer = 2` 

A lexer error code.



`Parser = 3` 

A parser error code.



`Style = 4` 

A style error code.



