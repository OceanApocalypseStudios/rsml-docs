dotnet build "rsml\RedSeaMarkupLanguage.slnx" -c Release

Remove-Item -Path ".\docs\api" -Recurse -Confirm

C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML\bin\Release\net10.0\RSML.dll" -o "docs\api\net10.0" --structure tree --platform docusaurus --member-accessibility-level public
C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML\bin\Release\net8.0\RSML.dll" -o "docs\api\net8.0" --structure tree --platform docusaurus --member-accessibility-level public
C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML\bin\Release\net481\RSML.dll" -o "docs\api\net481" --structure tree --platform docusaurus --member-accessibility-level public
C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML\bin\Release\net472\RSML.dll" -o "docs\api\net472" --structure tree --platform docusaurus --member-accessibility-level public

C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML.Extensibility\bin\Release\net10.0\RSML.Extensibility.dll" -o "docs\api\net10.0" --structure tree --platform docusaurus --member-accessibility-level public
C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML.Extensibility\bin\Release\net8.0\RSML.Extensibility.dll" -o "docs\api\net8.0" --structure tree --platform docusaurus --member-accessibility-level public
C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML.Extensibility\bin\Release\net481\RSML.Extensibility.dll" -o "docs\api\net481" --structure tree --platform docusaurus --member-accessibility-level public
C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML.Extensibility\bin\Release\net472\RSML.Extensibility.dll" -o "docs\api\net472" --structure tree --platform docusaurus --member-accessibility-level public

C:\Users\mateu\code\apps\xmldoc2md-plus\src\XMLDoc2Markdown\bin\Release\net10.0\xmldoc2md.exe ".\rsml\src\RSML.Native\bin\Release\net10.0\RSML.Native.dll" -o "docs\api\net10.0" --structure tree --platform docusaurus  --member-accessibility-level public

Copy-Item ".\api-categories\net10.0.json" ".\docs\api\net10.0\_category_.json"
Copy-Item ".\api-categories\net8.0.json" ".\docs\api\net8.0\_category_.json"
Copy-Item ".\api-categories\net481.json" ".\docs\api\net481\_category_.json"
Copy-Item ".\api-categories\net472.json" ".\docs\api\net472\_category_.json"
