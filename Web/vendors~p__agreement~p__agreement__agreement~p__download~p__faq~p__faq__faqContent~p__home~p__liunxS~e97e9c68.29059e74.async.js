(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+QRC":function(F,D,s){"use strict";var r=s("E9nw"),h={"text/plain":"Text","text/html":"Url",default:"Text"},i="Copy to clipboard: #{key}, Enter";function I(T){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return T.replace(/#{\s*key\s*}/g,m)}function K(T,m){var R,V,G,J,X,O,k=!1;m||(m={}),R=m.debug||!1;try{G=r(),J=document.createRange(),X=document.getSelection(),O=document.createElement("span"),O.textContent=T,O.style.all="unset",O.style.position="fixed",O.style.top=0,O.style.clip="rect(0, 0, 0, 0)",O.style.whiteSpace="pre",O.style.webkitUserSelect="text",O.style.MozUserSelect="text",O.style.msUserSelect="text",O.style.userSelect="text",O.addEventListener("copy",function(H){if(H.stopPropagation(),m.format)if(H.preventDefault(),typeof H.clipboardData=="undefined"){R&&console.warn("unable to use e.clipboardData"),R&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var Z=h[m.format]||h.default;window.clipboardData.setData(Z,T)}else H.clipboardData.clearData(),H.clipboardData.setData(m.format,T);m.onCopy&&(H.preventDefault(),m.onCopy(H.clipboardData))}),document.body.appendChild(O),J.selectNodeContents(O),X.addRange(J);var q=document.execCommand("copy");if(!q)throw new Error("copy command was unsuccessful");k=!0}catch(H){R&&console.error("unable to copy using execCommand: ",H),R&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",T),m.onCopy&&m.onCopy(window.clipboardData),k=!0}catch(Z){R&&console.error("unable to copy using clipboardData: ",Z),R&&console.error("falling back to prompt"),V=I("message"in m?m.message:i),window.prompt(V,T)}}finally{X&&(typeof X.removeRange=="function"?X.removeRange(J):X.removeAllRanges()),O&&document.body.removeChild(O),G()}return k}F.exports=K},"/qDX":function(F,D,s){F.exports={"ant-typography":"ant-typography","ant-typography-secondary":"ant-typography-secondary","ant-typography-success":"ant-typography-success","ant-typography-warning":"ant-typography-warning","ant-typography-danger":"ant-typography-danger","ant-typography-disabled":"ant-typography-disabled","ant-typography-ellipsis":"ant-typography-ellipsis","ant-typography-expand":"ant-typography-expand","ant-typography-edit":"ant-typography-edit","ant-typography-copy":"ant-typography-copy","ant-typography-copy-success":"ant-typography-copy-success","ant-typography-edit-content":"ant-typography-edit-content","ant-typography-edit-content-confirm":"ant-typography-edit-content-confirm","ant-typography-single-line":"ant-typography-single-line","ant-typography-ellipsis-single-line":"ant-typography-ellipsis-single-line","ant-typography-ellipsis-multiple-line":"ant-typography-ellipsis-multiple-line","ant-typography-rtl":"ant-typography-rtl"}},"4IlW":function(F,D,s){"use strict";var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(i){var I=i.keyCode;if(i.altKey&&!i.ctrlKey||i.metaKey||I>=r.F1&&I<=r.F12)return!1;switch(I){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(i){if(i>=r.ZERO&&i<=r.NINE||i>=r.NUM_ZERO&&i<=r.NUM_MULTIPLY||i>=r.A&&i<=r.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&i===0)return!0;switch(i){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};D.a=r},E9nw:function(F,D){F.exports=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var r=document.activeElement,h=[],i=0;i<s.rangeCount;i++)h.push(s.getRangeAt(i));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||h.forEach(function(I){s.addRange(I)}),r&&r.focus()}}},bRQS:function(F,D,s){"use strict";var r=s("VTBJ"),h=s("q1tI"),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},I=i,K=s("6VBw"),T=function(V,G){return h.createElement(K.a,Object(r.a)(Object(r.a)({},V),{},{ref:G,icon:I}))};T.displayName="CheckOutlined";var m=D.a=h.forwardRef(T)},lfch:function(F,D,s){"use strict";var r=s("VTBJ"),h=s("q1tI"),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},I=i,K=s("6VBw"),T=function(V,G){return h.createElement(K.a,Object(r.a)(Object(r.a)({},V),{},{ref:G,icon:I}))};T.displayName="CopyOutlined";var m=D.a=h.forwardRef(T)},tU7J:function(F,D,s){"use strict";var r=s("cIOH"),h=s.n(r),i=s("/qDX"),I=s.n(i),K=s("5Dmo"),T=s("5NDa")},wFql:function(F,D,s){"use strict";var r=s("wx14"),h=s("rePB"),i=s("q1tI"),I=s("TSYQ"),K=s.n(I),T=s("c+Xe"),m=s("H84U"),R=s("uaoM"),V=function(n,a){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(o[e[t]]=n[e[t]]);return o},G=function(a,o){var e=a.prefixCls,t=a.component,l=t===void 0?"article":t,c=a.className,p=a["aria-label"],d=a.setContentRef,f=a.children,y=V(a,["prefixCls","component","className","aria-label","setContentRef","children"]),u=o;return d&&(Object(R.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=Object(T.a)(o,d)),i.createElement(m.a,null,function(v){var C=v.getPrefixCls,L=v.direction,M=l,x=C("typography",e),z=K()(x,Object(h.a)({},"".concat(x,"-rtl"),L==="rtl"),c);return i.createElement(M,Object(r.a)({className:z,"aria-label":p,ref:u},y),f)})},J=i.forwardRef(G);J.displayName="Typography";var X=J,O=X,k=s("U8pU"),q=s("bT9E"),H=s("KQm4"),Z=s("1OyB"),Ce=s("vuIU"),xe=s("Ji7U"),Se=s("LK+K"),re=s("Zm9Q"),Ne=s("+QRC"),Te=s.n(Ne),ee=s("VTBJ"),Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},je=Re,ve=s("6VBw"),he=function(a,o){return i.createElement(ve.a,Object(ee.a)(Object(ee.a)({},a),{},{ref:o,icon:je}))};he.displayName="EditOutlined";var Pe=i.forwardRef(he),Ie=s("bRQS"),Me=s("lfch"),Ae=s("t23M"),Ue=s("wEI+"),Le=s("YMnH"),te=s("4IlW"),we=function(n,a){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(o[e[t]]=n[e[t]]);return o},De={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Ke=i.forwardRef(function(n,a){var o=function(y){var u=y.keyCode;u===te.a.ENTER&&y.preventDefault()},e=function(y){var u=y.keyCode,v=n.onClick;u===te.a.ENTER&&v&&v()},t=n.style,l=n.noStyle,c=n.disabled,p=we(n,["style","noStyle","disabled"]),d={};return l||(d=Object(r.a)({},De)),c&&(d.pointerEvents="none"),d=Object(r.a)(Object(r.a)({},d),t),i.createElement("div",Object(r.a)({role:"button",tabIndex:0,ref:a},p,{onKeyDown:o,onKeyUp:e,style:d}))}),Ee=Ke,ie=s("oHiP"),ge=s("R3zJ"),oe=s("3S7+"),He=s("ODXe"),Be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Fe=Be,me=function(a,o){return i.createElement(ve.a,Object(ee.a)(Object(ee.a)({},a),{},{ref:o,icon:Fe}))};me.displayName="EnterOutlined";var ke=i.forwardRef(me),ze=s("whJP"),We=function(a){var o=a.prefixCls,e=a["aria-label"],t=a.className,l=a.style,c=a.direction,p=a.maxLength,d=a.autoSize,f=d===void 0?!0:d,y=a.value,u=a.onSave,v=a.onCancel,C=a.onEnd,L=i.useRef(),M=i.useRef(!1),x=i.useRef(),z=i.useState(y),W=Object(He.a)(z,2),A=W[0],Y=W[1];i.useEffect(function(){Y(y)},[y]),i.useEffect(function(){if(L.current&&L.current.resizableTextArea){var b=L.current.resizableTextArea.textArea;b.focus();var N=b.value.length;b.setSelectionRange(N,N)}},[]);var E=function(N){var P=N.target;Y(P.value.replace(/[\n\r]/g,""))},g=function(){M.current=!0},U=function(){M.current=!1},j=function(N){var P=N.keyCode;M.current||(x.current=P)},w=function(){u(A.trim())},$=function(N){var P=N.keyCode,pe=N.ctrlKey,ue=N.altKey,fe=N.metaKey,ye=N.shiftKey;x.current===P&&!M.current&&!pe&&!ue&&!fe&&!ye&&(P===te.a.ENTER?(w(),C==null||C()):P===te.a.ESC&&v())},B=function(){w()},Q=K()(o,"".concat(o,"-edit-content"),Object(h.a)({},"".concat(o,"-rtl"),c==="rtl"),t);return i.createElement("div",{className:Q,style:l},i.createElement(ze.a,{ref:L,maxLength:p,value:A,onChange:E,onKeyDown:j,onKeyUp:$,onCompositionStart:g,onCompositionEnd:U,onBlur:B,"aria-label":e,autoSize:f}),i.createElement(ke,{className:"".concat(o,"-edit-content-confirm")}))},$e=We,le=s("i8i4"),Qe=1,Ve=3,Ge=8,S,se={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function ce(n){if(!n)return 0;var a=n.match(/^\d*(\.\d*)?/);return a?Number(a[0]):0}function Xe(n){var a=Array.prototype.slice.apply(n);return a.map(function(o){return"".concat(o,": ").concat(n.getPropertyValue(o),";")}).join("")}function Je(n){var a=[];return n.forEach(function(o){var e=a[a.length-1];typeof o=="string"&&typeof e=="string"?a[a.length-1]+=o:a.push(o)}),a}function Oe(n,a){n.setAttribute("aria-hidden","true");var o=window.getComputedStyle(a),e=Xe(o);n.setAttribute("style",e),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function Ye(n){var a=document.createElement("div");Oe(a,n),a.appendChild(document.createTextNode("text")),document.body.appendChild(a);var o=a.offsetHeight,e=ce(window.getComputedStyle(n).lineHeight);return document.body.removeChild(a),o>e?o:e}var Ze=function(n,a,o,e,t){S||(S=document.createElement("div"),S.setAttribute("aria-hidden","true")),S.parentNode||document.body.appendChild(S);var l=a.rows,c=a.suffix,p=c===void 0?"":c,d=window.getComputedStyle(n),f=Ye(n),y=Math.floor(f)*(l+1)+ce(d.paddingTop)+ce(d.paddingBottom);Oe(S,n);var u=Je(Object(re.a)(o));Object(le.render)(i.createElement("div",{style:se},i.createElement("span",{style:se},u,p),i.createElement("span",{style:se},e)),S);function v(){return Math.ceil(S.getBoundingClientRect().height)<y}if(v())return Object(le.unmountComponentAtNode)(S),{content:o,text:S.innerHTML,ellipsis:!1};var C=Array.prototype.slice.apply(S.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(E){var g=E.nodeType;return g!==Ge}),L=Array.prototype.slice.apply(S.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(le.unmountComponentAtNode)(S);var M=[];S.innerHTML="";var x=document.createElement("span");S.appendChild(x);var z=document.createTextNode(t+p);x.appendChild(z),L.forEach(function(E){S.appendChild(E)});function W(E){x.insertBefore(E,z)}function A(E,g){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:g.length,w=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,$=Math.floor((U+j)/2),B=g.slice(0,$);if(E.textContent=B,U>=j-1)for(var Q=j;Q>=U;Q-=1){var b=g.slice(0,Q);if(E.textContent=b,v()||!b)return Q===g.length?{finished:!1,reactNode:g}:{finished:!0,reactNode:b}}return v()?A(E,g,$,j,$):A(E,g,U,$,w)}function Y(E,g){var U=E.nodeType;if(U===Qe)return W(E),v()?{finished:!1,reactNode:u[g]}:(x.removeChild(E),{finished:!0,reactNode:null});if(U===Ve){var j=E.textContent||"",w=document.createTextNode(j);return W(w),A(w,j)}return{finished:!1,reactNode:null}}return C.some(function(E,g){var U=Y(E,g),j=U.finished,w=U.reactNode;return w&&M.push(w),j}),{content:M,text:S.innerHTML,ellipsis:!0}},_e=function(n,a){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(o[e[t]]=n[e[t]]);return o},qe=Object(ge.c)("webkitLineClamp"),et=Object(ge.c)("textOverflow");function tt(n,a){var o=n.mark,e=n.code,t=n.underline,l=n.delete,c=n.strong,p=n.keyboard,d=n.italic,f=a;function y(u,v){!u||(f=i.createElement(v,{},f))}return y(c,"strong"),y(t,"u"),y(l,"del"),y(e,"code"),y(o,"mark"),y(p,"kbd"),y(d,"i"),f}function ne(n,a,o){return n===!0||n===void 0?a:n||o&&a}var be="...",de=function(n){Object(xe.a)(o,n);var a=Object(Se.a)(o);function o(){var e;return Object(Z.a)(this,o),e=a.apply(this,arguments),e.contentRef=i.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,l=e.context.getPrefixCls;return l("typography",t)},e.onExpandClick=function(t){var l,c=e.getEllipsis(),p=c.onExpand;e.setState({expanded:!0}),(l=p)===null||l===void 0||l(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var l=e.getEditable(),c=l.onChange;c==null||c(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,l;(l=(t=e.getEditable()).onCancel)===null||l===void 0||l.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var l=e.props,c=l.children,p=l.copyable,d=Object(r.a)({},Object(k.a)(p)==="object"?p:null);d.text===void 0&&(d.text=String(c)),Te()(d.text||""),e.setState({copied:!0},function(){d.onCopy&&d.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var l=e.getEditable(),c=l.onStart;t&&c&&c(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ie.a.cancel(e.rafId),e.rafId=Object(ie.a)(function(){e.syncEllipsis()})},e}return Object(Ce.a)(o,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var l=this.props.children,c=this.getEllipsis(),p=this.getEllipsis(t);(l!==t.children||c.rows!==p.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ie.a.cancel(this.rafId)}},{key:"getEditable",value:function(t){var l=this.state.edit,c=t||this.props,p=c.editable;return p?Object(r.a)({editing:l},Object(k.a)(p)==="object"?p:null):{editing:l}}},{key:"getEllipsis",value:function(t){var l=t||this.props,c=l.ellipsis;return c?Object(r.a)({rows:1,expandable:!1},Object(k.a)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,l=this.props,c=l.editable,p=l.copyable,d=this.getEllipsis(),f=d.rows,y=d.expandable,u=d.suffix,v=d.onEllipsis,C=d.tooltip;return u||C||c||p||y||!t||v?!1:f===1?et:qe}},{key:"syncEllipsis",value:function(){var t=this.state,l=t.ellipsisText,c=t.isEllipsis,p=t.expanded,d=this.getEllipsis(),f=d.rows,y=d.suffix,u=d.onEllipsis,v=this.props.children;if(!(!f||f<0||!this.contentRef.current||p)&&!this.canUseCSSEllipsis()){Object(R.a)(Object(re.a)(v).every(function(z){return typeof z=="string"}),"Typography","`ellipsis` should use string as children only.");var C=Ze(this.contentRef.current,{rows:f,suffix:y},v,this.renderOperations(!0),be),L=C.content,M=C.text,x=C.ellipsis;(l!==M||c!==x)&&(this.setState({ellipsisText:M,ellipsisContent:L,isEllipsis:x}),c!==x&&u&&u(x))}}},{key:"renderExpand",value:function(t){var l=this.getEllipsis(),c=l.expandable,p=l.symbol,d=this.state,f=d.expanded,y=d.isEllipsis;if(!c||!t&&(f||!y))return null;var u;return p?u=p:u=this.expandStr,i.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var l=t.icon,c=t.tooltip,p=Object(re.a)(c)[0]||this.editStr,d=typeof p=="string"?p:"";return i.createElement(oe.a,{key:"edit",title:c===!1?"":p},i.createElement(Ee,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":d},l||i.createElement(Pe,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,l=this.props.copyable;if(!!l){var c=this.getPrefixCls(),p=l.tooltips,d=l.icon,f=Array.isArray(p)?p:[p],y=Array.isArray(d)?d:[d],u=t?ne(f[1],this.copiedStr):ne(f[0],this.copyStr),v=t?this.copiedStr:this.copyStr,C=typeof u=="string"?u:v;return i.createElement(oe.a,{key:"copy",title:u},i.createElement(Ee,{className:K()("".concat(c,"-copy"),t&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":C},t?ne(y[1],i.createElement(Ie.a,null),!0):ne(y[0],i.createElement(Me.a,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,l=t.children,c=t.className,p=t.style,d=this.context.direction,f=this.getEditable(),y=f.maxLength,u=f.autoSize,v=f.onEnd;return i.createElement($e,{value:typeof l=="string"?l:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:v,prefixCls:this.getPrefixCls(),className:c,style:p,direction:d,maxLength:y,autoSize:u})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(l){return l})}},{key:"renderContent",value:function(){var t=this,l=this.state,c=l.ellipsisContent,p=l.isEllipsis,d=l.expanded,f=this.props,y=f.component,u=f.children,v=f.className,C=f.type,L=f.disabled,M=f.style,x=_e(f,["component","children","className","type","disabled","style"]),z=this.context.direction,W=this.getEllipsis(),A=W.rows,Y=W.suffix,E=W.tooltip,g=this.getPrefixCls(),U=Object(q.a)(x,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat(Object(H.a)(Ue.a))),j=this.canUseCSSEllipsis(),w=A===1&&j,$=A&&A>1&&j,B=u;if(A&&p&&!d&&!j){var Q=x.title,b=Q||"";!Q&&(typeof u=="string"||typeof u=="number")&&(b=String(u)),b=b.slice(String(c||"").length),B=i.createElement(i.Fragment,null,c,i.createElement("span",{title:b,"aria-hidden":"true"},be),Y),E&&(B=i.createElement(oe.a,{title:E===!0?u:E},i.createElement("span",null,B)))}else B=i.createElement(i.Fragment,null,u,Y);return B=tt(this.props,B),i.createElement(Le.a,{componentName:"Text"},function(N){var P,pe=N.edit,ue=N.copy,fe=N.copied,ye=N.expand;return t.editStr=pe,t.copyStr=ue,t.copiedStr=fe,t.expandStr=ye,i.createElement(Ae.a,{onResize:t.resizeOnNextFrame,disabled:j},i.createElement(O,Object(r.a)({className:K()((P={},Object(h.a)(P,"".concat(g,"-").concat(C),C),Object(h.a)(P,"".concat(g,"-disabled"),L),Object(h.a)(P,"".concat(g,"-ellipsis"),A),Object(h.a)(P,"".concat(g,"-single-line"),A===1),Object(h.a)(P,"".concat(g,"-ellipsis-single-line"),w),Object(h.a)(P,"".concat(g,"-ellipsis-multiple-line"),$),P),v),style:Object(r.a)(Object(r.a)({},M),{WebkitLineClamp:$?A:void 0}),component:y,ref:t.contentRef,direction:z},U),B,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),l=t.editing;return l?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var l=t.children,c=t.editable;return Object(R.a)(!c||typeof l=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),o}(i.Component);de.contextType=m.b,de.defaultProps={children:""};var ae=de,nt=function(n,a){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(o[e[t]]=n[e[t]]);return o},at=function(a){var o=a.ellipsis,e=nt(a,["ellipsis"]),t=i.useMemo(function(){return o&&Object(k.a)(o)==="object"?Object(q.a)(o,["expandable","rows"]):o},[o]);return Object(R.a)(Object(k.a)(o)!=="object"||!o||!("expandable"in o)&&!("rows"in o),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),i.createElement(ae,Object(r.a)({},e,{ellipsis:t,component:"span"}))},rt=at,it=function(n,a){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(o[e[t]]=n[e[t]]);return o},ot=function(a,o){var e=a.ellipsis,t=a.rel,l=it(a,["ellipsis","rel"]);Object(R.a)(Object(k.a)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=i.useRef(null);i.useImperativeHandle(o,function(){var d;return(d=c.current)===null||d===void 0?void 0:d.contentRef.current});var p=Object(r.a)(Object(r.a)({},l),{rel:t===void 0&&l.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,i.createElement(ae,Object(r.a)({},p,{ref:c,ellipsis:!!e,component:"a"}))},lt=i.forwardRef(ot),st=s("CWQg"),ct=function(n,a){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)a.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(o[e[t]]=n[e[t]]);return o},dt=Object(st.b)(1,2,3,4,5),pt=function(a){var o=a.level,e=o===void 0?1:o,t=ct(a,["level"]),l;return dt.indexOf(e)!==-1?l="h".concat(e):(Object(R.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),l="h1"),i.createElement(ae,Object(r.a)({},t,{component:l}))},ut=pt,ft=function(a){return i.createElement(ae,Object(r.a)({},a,{component:"div"}))},yt=ft,_=O;_.Text=rt,_.Link=lt,_.Title=ut,_.Paragraph=yt;var vt=D.a=_}}]);
