import{ad as kt,ae as vt,z as wt,c as rt,l as I,h as q,t as St,af as Et,ag as Tt}from"./mermaid.core-e22a0433.js";import{i as It}from"./is_dark-d3de1058.js";import{a as et}from"./arc-dbc2af16.js";import"./app-ca5b5751.js";import"./framework-6619071e.js";import"./path-53f90ab3.js";var X=function(){var n=function(k,r,a,h){for(a=a||{},h=k.length;h--;a[k[h]]=r);return a},t=[1,2],e=[1,5],s=[6,9,11,17,18,20,22,23,26,27,28],i=[1,15],o=[1,16],l=[1,17],p=[1,18],g=[1,19],d=[1,23],f=[1,24],v=[1,27],_=[4,6,9,11,17,18,20,22,23,26,27,28],b={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(r,a,h,u,y,c,$){var x=c.length-1;switch(y){case 1:return c[x-1];case 3:this.$=[];break;case 4:c[x-1].push(c[x]),this.$=c[x-1];break;case 5:case 6:this.$=c[x];break;case 7:case 8:this.$=[];break;case 11:u.getCommonDb().setDiagramTitle(c[x].substr(6)),this.$=c[x].substr(6);break;case 12:this.$=c[x].trim(),u.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=c[x].trim(),u.getCommonDb().setAccDescription(this.$);break;case 15:u.addSection(c[x].substr(8)),this.$=c[x].substr(8);break;case 19:u.addTask(c[x],0,""),this.$=c[x];break;case 20:u.addEvent(c[x].substr(2)),this.$=c[x];break;case 21:u.parseDirective("%%{","open_directive");break;case 22:u.parseDirective(c[x],"type_directive");break;case 23:c[x]=c[x].trim().replace(/'/g,'"'),u.parseDirective(c[x],"arg_directive");break;case 24:u.parseDirective("}%%","close_directive","timeline");break}},table:[{3:1,4:t,7:3,12:4,28:e},{1:[3]},n(s,[2,3],{5:6}),{3:7,4:t,7:3,12:4,28:e},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:i,18:o,20:l,22:p,23:g,24:20,25:21,26:d,27:f,28:e},{1:[2,2]},{14:25,15:[1,26],31:v},n([15,31],[2,22]),n(s,[2,8],{1:[2,1]}),n(s,[2,4]),{7:22,10:28,12:4,17:i,18:o,20:l,22:p,23:g,24:20,25:21,26:d,27:f,28:e},n(s,[2,6]),n(s,[2,7]),n(s,[2,11]),{19:[1,29]},{21:[1,30]},n(s,[2,14]),n(s,[2,15]),n(s,[2,16]),n(s,[2,17]),n(s,[2,18]),n(s,[2,19]),n(s,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},n(s,[2,5]),n(s,[2,12]),n(s,[2,13]),n(_,[2,9]),{14:34,31:v},{31:[2,23]},{11:[1,35]},n(_,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(r,a){if(a.recoverable)this.trace(r);else{var h=new Error(r);throw h.hash=a,h}},parse:function(r){var a=this,h=[0],u=[],y=[null],c=[],$=this.table,x="",M=0,S=0,L=2,z=1,H=c.slice.call(arguments,1),m=Object.create(this.lexer),C={yy:{}};for(var O in this.yy)Object.prototype.hasOwnProperty.call(this.yy,O)&&(C.yy[O]=this.yy[O]);m.setInput(r,C.yy),C.yy.lexer=m,C.yy.parser=this,typeof m.yylloc>"u"&&(m.yylloc={});var J=m.yylloc;c.push(J);var _t=m.options&&m.options.ranges;typeof C.yy.parseError=="function"?this.parseError=C.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function bt(){var P;return P=u.pop()||m.lex()||z,typeof P!="number"&&(P instanceof Array&&(u=P,P=u.pop()),P=a.symbols_[P]||P),P}for(var T,V,N,K,W={},j,A,tt,G;;){if(V=h[h.length-1],this.defaultActions[V]?N=this.defaultActions[V]:((T===null||typeof T>"u")&&(T=bt()),N=$[V]&&$[V][T]),typeof N>"u"||!N.length||!N[0]){var Q="";G=[];for(j in $[V])this.terminals_[j]&&j>L&&G.push("'"+this.terminals_[j]+"'");m.showPosition?Q="Parse error on line "+(M+1)+`:
`+m.showPosition()+`
Expecting `+G.join(", ")+", got '"+(this.terminals_[T]||T)+"'":Q="Parse error on line "+(M+1)+": Unexpected "+(T==z?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(Q,{text:m.match,token:this.terminals_[T]||T,line:m.yylineno,loc:J,expected:G})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+V+", token: "+T);switch(N[0]){case 1:h.push(T),y.push(m.yytext),c.push(m.yylloc),h.push(N[1]),T=null,S=m.yyleng,x=m.yytext,M=m.yylineno,J=m.yylloc;break;case 2:if(A=this.productions_[N[1]][1],W.$=y[y.length-A],W._$={first_line:c[c.length-(A||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(A||1)].first_column,last_column:c[c.length-1].last_column},_t&&(W._$.range=[c[c.length-(A||1)].range[0],c[c.length-1].range[1]]),K=this.performAction.apply(W,[x,S,M,C.yy,N[1],y,c].concat(H)),typeof K<"u")return K;A&&(h=h.slice(0,-1*A*2),y=y.slice(0,-1*A),c=c.slice(0,-1*A)),h.push(this.productions_[N[1]][0]),y.push(W.$),c.push(W._$),tt=$[h[h.length-2]][h[h.length-1]],h.push(tt);break;case 3:return!0}}return!0}},w=function(){var k={EOF:1,parseError:function(a,h){if(this.yy.parser)this.yy.parser.parseError(a,h);else throw new Error(a)},setInput:function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var a=r.length,h=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===u.length?this.yylloc.first_column:0)+u[u.length-h.length].length-h[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},test_match:function(r,a){var h,u,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),u=r[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],h=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var c in y)this[c]=y[c];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,h,u;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),c=0;c<y.length;c++)if(h=this._input.match(this.rules[y[c]]),h&&(!a||h[0].length>a[0].length)){if(a=h,u=c,this.options.backtrack_lexer){if(r=this.test_match(h,y[c]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,y[u]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,h,u,y){switch(u){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};return k}();b.lexer=w;function E(){this.yy={}}return E.prototype=b,b.Parser=E,new E}();X.parser=X;const Nt=X;let F="",at=0;const Y=[],U=[],B=[],ct=()=>kt,ot=(n,t,e)=>{vt(globalThis,n,t,e)},lt=function(){Y.length=0,U.length=0,F="",B.length=0,wt()},ht=function(n){F=n,Y.push(n)},dt=function(){return Y},ut=function(){let n=nt();const t=100;let e=0;for(;!n&&e<t;)n=nt(),e++;return U.push(...B),U},pt=function(n,t,e){const s={id:at++,section:F,type:F,task:n,score:t||0,events:e?[e]:[]};B.push(s)},yt=function(n){B.find(e=>e.id===at-1).events.push(n)},gt=function(n){const t={section:F,type:F,description:n,task:n,classes:[]};U.push(t)},nt=function(){const n=function(e){return B[e].processed};let t=!0;for(const[e,s]of B.entries())n(e),t=t&&s.processed;return t},Mt={clear:lt,getCommonDb:ct,addSection:ht,getSections:dt,getTasks:ut,addTask:pt,addTaskOrg:gt,addEvent:yt,parseDirective:ot},$t=Object.freeze(Object.defineProperty({__proto__:null,addEvent:yt,addSection:ht,addTask:pt,addTaskOrg:gt,clear:lt,default:Mt,getCommonDb:ct,getSections:dt,getTasks:ut,parseDirective:ot},Symbol.toStringTag,{value:"Module"})),Lt=12,Z=function(n,t){const e=n.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},At=function(n,t){const s=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=n.append("g");i.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function o(g){const d=et().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function l(g){const d=et().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function p(g){g.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?o(i):t.score<3?l(i):p(i),s},Pt=function(n,t){const e=n.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},ft=function(n,t){const e=t.text.replace(/<br\s*\/?>/gi," "),s=n.append("text");s.attr("x",t.x),s.attr("y",t.y),s.attr("class","legend"),s.style("text-anchor",t.anchor),t.class!==void 0&&s.attr("class",t.class);const i=s.append("tspan");return i.attr("x",t.x+t.textMargin*2),i.text(e),s},Ht=function(n,t){function e(i,o,l,p,g){return i+","+o+" "+(i+l)+","+o+" "+(i+l)+","+(o+p-g)+" "+(i+l-g*1.2)+","+(o+p)+" "+i+","+(o+p)}const s=n.append("polygon");s.attr("points",e(t.x,t.y,50,20,7)),s.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,ft(n,t)},Ct=function(n,t,e){const s=n.append("g"),i=D();i.x=t.x,i.y=t.y,i.fill=t.fill,i.width=e.width,i.height=e.height,i.class="journey-section section-type-"+t.num,i.rx=3,i.ry=3,Z(s,i),mt(e)(t.text,s,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+t.num},e,t.colour)};let it=-1;const zt=function(n,t,e){const s=t.x+e.width/2,i=n.append("g");it++;const o=300+5*30;i.append("line").attr("id","task"+it).attr("x1",s).attr("y1",t.y).attr("x2",s).attr("y2",o).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),At(i,{cx:s,cy:300+(5-t.score)*30,score:t.score});const l=D();l.x=t.x,l.y=t.y,l.fill=t.fill,l.width=e.width,l.height=e.height,l.class="task task-type-"+t.num,l.rx=3,l.ry=3,Z(i,l),t.x+14,mt(e)(t.task,i,l.x,l.y,l.width,l.height,{class:"task"},e,t.colour)},Vt=function(n,t){Z(n,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},Rt=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},D=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},mt=function(){function n(i,o,l,p,g,d,f,v){const _=o.append("text").attr("x",l+g/2).attr("y",p+d/2+5).style("font-color",v).style("text-anchor","middle").text(i);s(_,f)}function t(i,o,l,p,g,d,f,v,_){const{taskFontSize:b,taskFontFamily:w}=v,E=i.split(/<br\s*\/?>/gi);for(let k=0;k<E.length;k++){const r=k*b-b*(E.length-1)/2,a=o.append("text").attr("x",l+g/2).attr("y",p).attr("fill",_).style("text-anchor","middle").style("font-size",b).style("font-family",w);a.append("tspan").attr("x",l+g/2).attr("dy",r).text(E[k]),a.attr("y",p+d/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(a,f)}}function e(i,o,l,p,g,d,f,v){const _=o.append("switch"),w=_.append("foreignObject").attr("x",l).attr("y",p).attr("width",g).attr("height",d).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");w.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),t(i,_,l,p,g,d,f,v),s(w,f)}function s(i,o){for(const l in o)l in o&&i.attr(l,o[l])}return function(i){return i.textPlacement==="fo"?e:i.textPlacement==="old"?n:t}}(),Wt=function(n){n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function xt(n,t){n.each(function(){var e=q(this),s=e.text().split(/(\s+|<br>)/).reverse(),i,o=[],l=1.1,p=e.attr("y"),g=parseFloat(e.attr("dy")),d=e.text(null).append("tspan").attr("x",0).attr("y",p).attr("dy",g+"em");for(let f=0;f<s.length;f++)i=s[s.length-1-f],o.push(i),d.text(o.join(" ").trim()),(d.node().getComputedTextLength()>t||i==="<br>")&&(o.pop(),d.text(o.join(" ").trim()),i==="<br>"?o=[""]:o=[i],d=e.append("tspan").attr("x",0).attr("y",p).attr("dy",l+"em").text(i))})}const Ft=function(n,t,e,s){const i=e%Lt-1,o=n.append("g");t.section=i,o.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+i));const l=o.append("g"),p=o.append("g"),d=p.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(xt,t.width).node().getBBox(),f=s.fontSize&&s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;return t.height=d.height+f*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,p.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Ot(l,t,i),t},Bt=function(n,t,e){const s=n.append("g"),o=s.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(xt,t.width).node().getBBox(),l=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return s.remove(),o.height+l*1.1*.5+t.padding},Ot=function(n,t,e){n.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),n.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},R={drawRect:Z,drawCircle:Pt,drawSection:Ct,drawText:ft,drawLabel:Ht,drawTask:zt,drawBackgroundRect:Vt,getTextObj:Rt,getNoteRect:D,initGraphics:Wt,drawNode:Ft,getVirtualNodeHeight:Bt},jt=function(n){Object.keys(n).forEach(function(e){conf[e]=n[e]})},Gt=function(n,t,e,s){const i=rt(),o=i.leftMargin?i.leftMargin:50;s.db.clear(),s.parser.parse(n+`
`),I.debug("timeline",s.db);const l=i.securityLevel;let p;l==="sandbox"&&(p=q("#i"+t));const d=(l==="sandbox"?q(p.nodes()[0].contentDocument.body):q("body")).select("#"+t);d.append("g");const f=s.db.getTasks(),v=s.db.getCommonDb().getDiagramTitle();I.debug("task",f),R.initGraphics(d);const _=s.db.getSections();I.debug("sections",_);let b=0,w=0,E=0,k=0,r=50+o,a=50;k=50;let h=0,u=!0;_.forEach(function(M){const S={number:h,descr:M,section:h,width:150,padding:20,maxHeight:b},L=R.getVirtualNodeHeight(d,S,i);I.debug("sectionHeight before draw",L),b=Math.max(b,L+20)});let y=0,c=0;I.debug("tasks.length",f.length);for(const[M,S]of f.entries()){const L={number:M,descr:S,section:S.section,width:150,padding:20,maxHeight:w},z=R.getVirtualNodeHeight(d,L,i);I.debug("taskHeight before draw",z),w=Math.max(w,z+20),y=Math.max(y,S.events.length);let H=0;for(let m=0;m<S.events.length;m++){const O={descr:S.events[m],section:S.section,number:S.section,width:150,padding:20,maxHeight:50};H+=R.getVirtualNodeHeight(d,O,i)}c=Math.max(c,H)}I.debug("maxSectionHeight before draw",b),I.debug("maxTaskHeight before draw",w),_&&_.length>0?_.forEach(M=>{const S={number:h,descr:M,section:h,width:150,padding:20,maxHeight:b};I.debug("sectionNode",S);const L=d.append("g"),z=R.drawNode(L,S,h,i);I.debug("sectionNode output",z),L.attr("transform",`translate(${r}, ${k})`),a+=b+50;const H=f.filter(m=>m.section===M);H.length>0&&st(d,H,h,r,a,w,i,y,c,b,!1),r+=200*Math.max(H.length,1),a=k,h++}):(u=!1,st(d,f,h,r,a,w,i,y,c,b,!0));const $=d.node().getBBox();I.debug("bounds",$),v&&d.append("text").text(v).attr("x",$.width/2-o).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),E=u?b+w+150:w+100,d.append("g").attr("class","lineWrapper").append("line").attr("x1",o).attr("y1",E).attr("x2",$.width+3*o).attr("y2",E).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),St(void 0,d,i.timeline.padding?i.timeline.padding:50,i.timeline.useMaxWidth?i.timeline.useMaxWidth:!1)},st=function(n,t,e,s,i,o,l,p,g,d,f){for(const v of t){const _={descr:v.task,section:e,number:e,width:150,padding:20,maxHeight:o};I.debug("taskNode",_);const b=n.append("g").attr("class","taskWrapper"),E=R.drawNode(b,_,e,l).height;if(I.debug("taskHeight after draw",E),b.attr("transform",`translate(${s}, ${i})`),o=Math.max(o,E),v.events){const k=n.append("g").attr("class","lineWrapper");let r=o;i+=100,r=r+qt(n,v.events,e,s,i,l),i-=100,k.append("line").attr("x1",s+190/2).attr("y1",i+o).attr("x2",s+190/2).attr("y2",i+o+(f?o:d)+g+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s=s+200,f&&!rt().timeline.disableMulticolor&&e++}i=i-10},qt=function(n,t,e,s,i,o){let l=0;const p=i;i=i+100;for(const g of t){const d={descr:g,section:e,number:e,width:150,padding:20,maxHeight:50};I.debug("eventNode",d);const f=n.append("g").attr("class","eventWrapper"),_=R.drawNode(f,d,e,o).height;l=l+_,f.attr("transform",`translate(${s}, ${i})`),i=i+10+_}return i=p,l},Ut={setConf:jt,draw:Gt},Zt=n=>{let t="";for(let e=0;e<n.THEME_COLOR_LIMIT;e++)n["lineColor"+e]=n["lineColor"+e]||n["cScaleInv"+e],It(n["lineColor"+e])?n["lineColor"+e]=Et(n["lineColor"+e],20):n["lineColor"+e]=Tt(n["lineColor"+e],20);for(let e=0;e<n.THEME_COLOR_LIMIT;e++){const s=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${n["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${n["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${n["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${n["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${s};
    }
    .section-${e-1} line {
      stroke: ${n["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Jt=n=>`
  .edge {
    stroke-width: 3;
  }
  ${Zt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,Kt=Jt,ne={db:$t,renderer:Ut,parser:Nt,styles:Kt};export{ne as diagram};
