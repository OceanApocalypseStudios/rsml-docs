# <a id="OceanApocalypseStudios_RSML_Language_Lexing_Token"></a> Struct Token

Namespace: [OceanApocalypseStudios.RSML.Language.Lexing](OceanApocalypseStudios.RSML.Language.Lexing.md)  
Assembly: RSML.dll  

Represents a RSML token.

```csharp
public record struct Token : IEquatable<Token>
```

#### Implements

[IEquatable<Token\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[Object.Equals\(Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[Object.Equals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[Object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[Object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[Object.ReferenceEquals\(Object?, Object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[Object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

 [Token\(Int32, Object?, SourceSpan\)](OceanApocalypseStudios.RSML.Language.Lexing.Token.\-ctor.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Token\_\_ctor\_System\_Int32\_System\_Object\_OceanApocalypseStudios\_RSML\_Sources\_SourceSpan\_)

Represents a RSML token.

## Fields

 [Empty](OceanApocalypseStudios.RSML.Language.Lexing.Token.Empty.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Token\_Empty)

Empty token. Used when something goes wrong.

## Properties

 [Span](OceanApocalypseStudios.RSML.Language.Lexing.Token.Span.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Token\_Span)

The span where the token occurs.

 [TokenKind](OceanApocalypseStudios.RSML.Language.Lexing.Token.TokenKind.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Token\_TokenKind)

An integer that identifies the type of token.

 [Value](OceanApocalypseStudios.RSML.Language.Lexing.Token.Value.md\#OceanApocalypseStudios\_RSML\_Language\_Lexing\_Token\_Value)

The token's value.

