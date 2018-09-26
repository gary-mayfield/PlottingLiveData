parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"tgxy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=monaco.Promise,t=function(){function e(e,t){var r=this;this._modeId=e,this._defaults=t,this._worker=null,this._idleCheckInterval=setInterval(function(){return r._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return r._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=this._defaults.getWorkerMaxIdleTime(),t=Date.now()-this._lastUsedTime;e>0&&t>e&&this._stopWorker()}},e.prototype._getClient=function(){var e=this;if(this._lastUsedTime=Date.now(),!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then(function(t){return e._worker.withSyncedResources(monaco.editor.getModels().filter(function(t){return t.getModeId()===e._modeId}).map(function(e){return e.uri}))})),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];return r(this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(i)}).then(function(t){return e}))},e}();function r(t){var r,i,n=new e(function(e,t){r=e,i=t},function(){});return t.then(r,i),n}exports.WorkerManager=t;
},{}],"QBj+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),n=monaco.Uri,o=monaco.Promise;function r(e,t){if("string"==typeof e)return e;for(var n=e,o="",r=0;n;){if(r){o+=t;for(var i=0;i<r;i++)o+="  "}o+=n.messageText,r++,n=n.next}return o}function i(e){return e?e.map(function(e){return e.text}).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(e||(e={}));var a=function(){function e(e){this._worker=e}return e.prototype._positionToOffset=function(e,t){return monaco.editor.getModel(e).getOffsetAt(t)},e.prototype._offsetToPosition=function(e,t){return monaco.editor.getModel(e).getPositionAt(t)},e.prototype._textSpanToRange=function(e,t){var n=this._offsetToPosition(e,t.start),o=this._offsetToPosition(e,t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:o.lineNumber,endColumn:o.column}},e}();exports.Adapter=a;var s=function(e){function n(t,n,o){var r=e.call(this,o)||this;r._defaults=t,r._selector=n,r._disposables=[],r._listener=Object.create(null);var i=function(e){if(e.getModeId()===n){var t,o=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri)},500)});r._listener[e.uri.toString()]={dispose:function(){o.dispose(),clearTimeout(t)}},r._doValidate(e.uri)}},a=function(e){monaco.editor.setModelMarkers(e,r._selector,[]);var t=e.uri.toString();r._listener[t]&&(r._listener[t].dispose(),delete r._listener[t])};return r._disposables.push(monaco.editor.onDidCreateModel(i)),r._disposables.push(monaco.editor.onWillDisposeModel(a)),r._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){a(e.model),i(e.model)})),r._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n)}}}),r._disposables.push(r._defaults.onDidChange(function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n),i(n)}})),monaco.editor.getModels().forEach(i),r}return t(n,e),n.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},n.prototype._doValidate=function(e){var t=this;this._worker(e).then(function(n){if(!monaco.editor.getModel(e))return null;var r=[],i=t._defaults.getDiagnosticsOptions(),a=i.noSyntaxValidation,s=i.noSemanticValidation;return a||r.push(n.getSyntacticDiagnostics(e.toString())),s||r.push(n.getSemanticDiagnostics(e.toString())),o.join(r)}).then(function(n){if(!n||!monaco.editor.getModel(e))return null;var o=n.reduce(function(e,t){return t.concat(e)},[]).map(function(n){return t._convertDiagnostics(e,n)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t._selector,o)}).done(void 0,function(e){console.error(e)})},n.prototype._convertDiagnostics=function(e,t){var n=this._offsetToPosition(e,t.start),o=n.lineNumber,i=n.column,a=this._offsetToPosition(e,t.start+t.length),s=a.lineNumber,u=a.column;return{severity:monaco.MarkerSeverity.Error,startLineNumber:o,startColumn:i,endLineNumber:s,endColumn:u,message:r(t.messageText,"\n")}},n}(a);exports.DiagnostcsAdapter=s;var u=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),Object.defineProperty(n.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),n.prototype.provideCompletionItems=function(e,t,o){e.getWordUntilPosition(t);var r=e.uri,i=this._positionToOffset(r,t);return S(o,this._worker(r).then(function(e){return e.getCompletionsAtPosition(r.toString(),i)}).then(function(e){if(e)return e.entries.map(function(e){return{uri:r,position:t,label:e.name,sortText:e.sortText,kind:n.convertKind(e.kind)}})}))},n.prototype.resolveCompletionItem=function(e,t){var o=this,r=e,a=r.uri,s=r.position;return S(t,this._worker(a).then(function(e){return e.getCompletionEntryDetails(a.toString(),o._positionToOffset(a,s),r.label)}).then(function(e){return e?{uri:a,position:s,label:e.name,kind:n.convertKind(e.kind),detail:i(e.displayParts),documentation:i(e.documentation)}:r}))},n.convertKind=function(e){switch(e){case d.primitiveType:case d.keyword:return monaco.languages.CompletionItemKind.Keyword;case d.variable:case d.localVariable:return monaco.languages.CompletionItemKind.Variable;case d.memberVariable:case d.memberGetAccessor:case d.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case d.function:case d.memberFunction:case d.constructSignature:case d.callSignature:case d.indexSignature:return monaco.languages.CompletionItemKind.Function;case d.enum:return monaco.languages.CompletionItemKind.Enum;case d.module:return monaco.languages.CompletionItemKind.Module;case d.class:return monaco.languages.CompletionItemKind.Class;case d.interface:return monaco.languages.CompletionItemKind.Interface;case d.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},n}(a);exports.SuggestAdapter=u;var c=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return t(n,e),n.prototype.provideSignatureHelp=function(e,t,n){var o=this,r=e.uri;return S(n,this._worker(r).then(function(e){return e.getSignatureHelpItems(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e){var t={activeSignature:e.selectedItemIndex,activeParameter:e.argumentIndex,signatures:[]};return e.items.forEach(function(e){var n={label:"",documentation:null,parameters:[]};n.label+=i(e.prefixDisplayParts),e.parameters.forEach(function(t,o,r){var a=i(t.displayParts),s={label:a,documentation:i(t.documentation)};n.label+=a,n.parameters.push(s),o<r.length-1&&(n.label+=i(e.separatorDisplayParts))}),n.label+=i(e.suffixDisplayParts),t.signatures.push(n)}),t}}))},n}(a);exports.SignatureHelpAdapter=c;var l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideHover=function(e,t,n){var o=this,r=e.uri;return S(n,this._worker(r).then(function(e){return e.getQuickInfoAtPosition(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e){var t=i(e.documentation),n=e.tags?e.tags.map(function(e){var t="*@"+e.name+"*";return e.text?t+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):t}).join("  \n\n"):"",a=i(e.displayParts);return{range:o._textSpanToRange(r,e.textSpan),contents:[{value:"```js\n"+a+"\n```\n"},{value:t+(n?"\n\n"+n:"")}]}}}))},n}(a);exports.QuickInfoAdapter=l;var p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideDocumentHighlights=function(e,t,n){var o=this,r=e.uri;return S(n,this._worker(r).then(function(e){return e.getOccurrencesAtPosition(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e)return e.map(function(e){return{range:o._textSpanToRange(r,e.textSpan),kind:e.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}})}))},n}(a);exports.OccurrencesAdapter=p;var m=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t(o,e),o.prototype.provideDefinition=function(e,t,o){var r=this,i=e.uri;return S(o,this._worker(i).then(function(e){return e.getDefinitionAtPosition(i.toString(),r._positionToOffset(i,t))}).then(function(e){if(e){for(var t=[],o=0,i=e;o<i.length;o++){var a=i[o],s=n.parse(a.fileName);monaco.editor.getModel(s)&&t.push({uri:s,range:r._textSpanToRange(s,a.textSpan)})}return t}}))},o}(a);exports.DefinitionAdapter=m;var f=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t(o,e),o.prototype.provideReferences=function(e,t,o,r){var i=this,a=e.uri;return S(r,this._worker(a).then(function(e){return e.getReferencesAtPosition(a.toString(),i._positionToOffset(a,t))}).then(function(e){if(e){for(var t=[],o=0,r=e;o<r.length;o++){var a=r[o],s=n.parse(a.fileName);monaco.editor.getModel(s)&&t.push({uri:s,range:i._textSpanToRange(s,a.textSpan)})}return t}}))},o}(a);exports.ReferenceAdapter=f;var g=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideDocumentSymbols=function(e,t){var n=this,o=e.uri;return S(t,this._worker(o).then(function(e){return e.getNavigationBarItems(o.toString())}).then(function(e){if(e){var t=function(e,r,i){var a={name:r.text,detail:"",kind:h[r.kind]||monaco.languages.SymbolKind.Variable,range:n._textSpanToRange(o,r.spans[0]),selectionRange:n._textSpanToRange(o,r.spans[0]),containerName:i};if(r.childItems&&r.childItems.length>0)for(var s=0,u=r.childItems;s<u.length;s++){var c=u[s];t(e,c,a.name)}e.push(a)},r=[];return e.forEach(function(e){return t(r,e)}),r}}))},n}(a);exports.OutlineAdapter=g;var d=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}();exports.Kind=d;var h=Object.create(null);h[d.module]=monaco.languages.SymbolKind.Module,h[d.class]=monaco.languages.SymbolKind.Class,h[d.enum]=monaco.languages.SymbolKind.Enum,h[d.interface]=monaco.languages.SymbolKind.Interface,h[d.memberFunction]=monaco.languages.SymbolKind.Method,h[d.memberVariable]=monaco.languages.SymbolKind.Property,h[d.memberGetAccessor]=monaco.languages.SymbolKind.Property,h[d.memberSetAccessor]=monaco.languages.SymbolKind.Property,h[d.variable]=monaco.languages.SymbolKind.Variable,h[d.const]=monaco.languages.SymbolKind.Variable,h[d.localVariable]=monaco.languages.SymbolKind.Variable,h[d.variable]=monaco.languages.SymbolKind.Variable,h[d.function]=monaco.languages.SymbolKind.Function,h[d.localFunction]=monaco.languages.SymbolKind.Function;var v=function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return t(o,n),o._convertOptions=function(t){return{ConvertTabsToSpaces:t.insertSpaces,TabSize:t.tabSize,IndentSize:t.tabSize,IndentStyle:e.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},o.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},o}(a);exports.FormatHelper=v;var y=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,o){var r=this,i=e.uri;return S(o,this._worker(i).then(function(e){return e.getFormattingEditsForRange(i.toString(),r._positionToOffset(i,{lineNumber:t.startLineNumber,column:t.startColumn}),r._positionToOffset(i,{lineNumber:t.endLineNumber,column:t.endColumn}),v._convertOptions(n))}).then(function(e){if(e)return e.map(function(e){return r._convertTextChanges(i,e)})}))},n}(v);exports.FormatAdapter=y;var b=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),Object.defineProperty(n.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),n.prototype.provideOnTypeFormattingEdits=function(e,t,n,o,r){var i=this,a=e.uri;return S(r,this._worker(a).then(function(e){return e.getFormattingEditsAfterKeystroke(a.toString(),i._positionToOffset(a,t),n,v._convertOptions(o))}).then(function(e){if(e)return e.map(function(e){return i._convertTextChanges(a,e)})}))},n}(v);function S(e,t){return e.onCancellationRequested(function(){return t.cancel()}),t}exports.FormatOnTypeAdapter=b;
},{}],"qJf2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupTypeScript=i,exports.setupJavaScript=g,exports.getJavaScriptWorker=u,exports.getTypeScriptWorker=c;var e,r,n=require("./workerManager.js"),t=require("./languageFeatures.js"),o=a(t);function a(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}function i(e){r=s(e,"typescript")}function g(r){e=s(r,"javascript")}function u(){return new monaco.Promise(function(r,n){if(!e)return n("JavaScript not registered!");r(e)})}function c(){return new monaco.Promise(function(e,n){if(!r)return n("TypeScript not registered!");e(r)})}function s(e,r){var t=new n.WorkerManager(r,e),a=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return t.getLanguageServiceWorker.apply(t,[e].concat(r))};return monaco.languages.registerCompletionItemProvider(r,new o.SuggestAdapter(a)),monaco.languages.registerSignatureHelpProvider(r,new o.SignatureHelpAdapter(a)),monaco.languages.registerHoverProvider(r,new o.QuickInfoAdapter(a)),monaco.languages.registerDocumentHighlightProvider(r,new o.OccurrencesAdapter(a)),monaco.languages.registerDefinitionProvider(r,new o.DefinitionAdapter(a)),monaco.languages.registerReferenceProvider(r,new o.ReferenceAdapter(a)),monaco.languages.registerDocumentSymbolProvider(r,new o.OutlineAdapter(a)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new o.FormatAdapter(a)),monaco.languages.registerOnTypeFormattingEditProvider(r,new o.FormatOnTypeAdapter(a)),new o.DiagnostcsAdapter(e,r,a),a}
},{"./workerManager.js":"tgxy","./languageFeatures.js":"QBj+"}]},{},["qJf2"], null)
//# sourceMappingURL=tsMode.216747c4.map