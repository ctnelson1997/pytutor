import{P as be,N as qe,a as xe,D as $e,b as J,T as R,I as pe,s as ze,t as c,L as Re,c as Xe,i as We,d as Z,f as we,e as je,g as Ue,h as Ee,j as Ve,k as Ge,l as _}from"./index-hS1L-Sri.js";var H={};class j{constructor(e,t,i,n,r,a,O,o,l,d=0,h){this.p=e,this.stack=t,this.state=i,this.reducePos=n,this.pos=r,this.score=a,this.buffer=O,this.bufferBase=o,this.curContext=l,this.lookAhead=d,this.parent=h}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(e,t,i=0){let n=e.parser.context;return new j(e,[],t,i,i,0,[],0,n?new K(n,n.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){var t;let i=e>>19,n=e&65535,{parser:r}=this.p,a=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),O=r.dynamicPrecedence(n);if(O&&(this.score+=O),i==0){this.pushState(r.getGoto(this.state,n,!0),this.reducePos),n<r.minRepeatTerm&&this.storeNode(n,this.reducePos,this.reducePos,a?8:4,!0),this.reduceContext(n,this.reducePos);return}let o=this.stack.length-(i-1)*3-(e&262144?6:0),l=o?this.stack[o-2]:this.p.ranges[0].from,d=this.reducePos-l;d>=2e3&&!(!((t=this.p.parser.nodeSet.types[n])===null||t===void 0)&&t.isAnonymous)&&(l==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=d):this.p.lastBigReductionSize<d&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=l,this.p.lastBigReductionSize=d));let h=o?this.stack[o-1]:0,f=this.bufferBase+this.buffer.length-h;if(n<r.minRepeatTerm||e&131072){let p=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(n,l,p,f+4,!0)}if(e&262144)this.state=this.stack[o];else{let p=this.stack[o-3];this.state=r.getGoto(p,n,!0)}for(;this.stack.length>o;)this.stack.pop();this.reduceContext(n,l)}storeNode(e,t,i,n=4,r=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let a=this,O=this.buffer.length;if(O==0&&a.parent&&(O=a.bufferBase-a.parent.bufferBase,a=a.parent),O>0&&a.buffer[O-4]==0&&a.buffer[O-1]>-1){if(t==i)return;if(a.buffer[O-2]>=t){a.buffer[O-2]=i;return}}}if(!r||this.pos==i)this.buffer.push(e,t,i,n);else{let a=this.buffer.length;if(a>0&&(this.buffer[a-4]!=0||this.buffer[a-1]<0)){let O=!1;for(let o=a;o>0&&this.buffer[o-2]>i;o-=4)if(this.buffer[o-1]>=0){O=!0;break}if(O)for(;a>0&&this.buffer[a-2]>i;)this.buffer[a]=this.buffer[a-4],this.buffer[a+1]=this.buffer[a-3],this.buffer[a+2]=this.buffer[a-2],this.buffer[a+3]=this.buffer[a-1],a-=4,n>4&&(n-=4)}this.buffer[a]=e,this.buffer[a+1]=t,this.buffer[a+2]=i,this.buffer[a+3]=n}}shift(e,t,i,n){if(e&131072)this.pushState(e&65535,this.pos);else if((e&262144)==0){let r=e,{parser:a}=this.p;this.pos=n;let O=a.stateFlag(r,1);!O&&(n>i||t<=a.maxNode)&&(this.reducePos=n),this.pushState(r,O?i:Math.min(i,this.reducePos)),this.shiftContext(t,i),t<=a.maxNode&&this.buffer.push(t,i,n,4)}else this.pos=n,this.shiftContext(t,i),t<=this.p.parser.maxNode&&this.buffer.push(t,i,n,4)}apply(e,t,i,n){e&65536?this.reduce(e):this.shift(e,t,i,n)}useNode(e,t){let i=this.p.reused.length-1;(i<0||this.p.reused[i]!=e)&&(this.p.reused.push(e),i++);let n=this.pos;this.reducePos=this.pos=n+e.length,this.pushState(t,n),this.buffer.push(i,n,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let e=this,t=e.buffer.length;for(;t>0&&e.buffer[t-2]>e.reducePos;)t-=4;let i=e.buffer.slice(t),n=e.bufferBase+t;for(;e&&n==e.bufferBase;)e=e.parent;return new j(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,i,n,this.curContext,this.lookAhead,e)}recoverByDelete(e,t){let i=e<=this.p.parser.maxNode;i&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,i?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new Ze(this);;){let i=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(i==0)return!1;if((i&65536)==0)return!0;t.reduce(i)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let n=[];for(let r=0,a;r<t.length;r+=2)(a=t[r+1])!=this.state&&this.p.parser.hasAction(a,e)&&n.push(t[r],a);if(this.stack.length<120)for(let r=0;n.length<8&&r<t.length;r+=2){let a=t[r+1];n.some((O,o)=>o&1&&O==a)||n.push(t[r],a)}t=n}let i=[];for(let n=0;n<t.length&&i.length<4;n+=2){let r=t[n+1];if(r==this.state)continue;let a=this.split();a.pushState(r,this.pos),a.storeNode(0,a.pos,a.pos,4,!0),a.shiftContext(t[n],this.pos),a.reducePos=this.pos,a.score-=200,i.push(a)}return i}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if((t&65536)==0)return!1;if(!e.validAction(this.state,t)){let i=t>>19,n=t&65535,r=this.stack.length-i*3;if(r<0||e.getGoto(this.stack[r],n,!1)<0){let a=this.findForcedReduction();if(a==null)return!1;t=a}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],i=(n,r)=>{if(!t.includes(n))return t.push(n),e.allActions(n,a=>{if(!(a&393216))if(a&65536){let O=(a>>19)-r;if(O>1){let o=a&65535,l=this.stack.length-O*3;if(l>=0&&e.getGoto(this.stack[l],o,!1)>=0)return O<<19|65536|o}}else{let O=i(a,r+1);if(O!=null)return O}})};return i(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new K(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){return e<=this.lookAhead?!1:(this.emitLookAhead(),this.lookAhead=e,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class K{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}}class Ze{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=e&65535,i=e>>19;i==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(i-1)*3;let n=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0);this.state=n}}class U{constructor(e,t,i){this.stack=e,this.pos=t,this.index=i,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(e,t=e.bufferBase+e.buffer.length){return new U(e,t,t-e.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new U(this.stack,this.pos,this.index)}}function $(s,e=Uint16Array){if(typeof s!="string")return s;let t=null;for(let i=0,n=0;i<s.length;){let r=0;for(;;){let a=s.charCodeAt(i++),O=!1;if(a==126){r=65535;break}a>=92&&a--,a>=34&&a--;let o=a-32;if(o>=46&&(o-=46,O=!0),r+=o,O)break;r*=46}t?t[n++]=r:t=new e(r)}return t}class X{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const ee=new X;class Ce{constructor(e,t){this.input=e,this.ranges=t,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=ee,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let i=this.range,n=this.rangeIndex,r=this.pos+e;for(;r<i.from;){if(!n)return null;let a=this.ranges[--n];r-=i.from-a.to,i=a}for(;t<0?r>i.to:r>=i.to;){if(n==this.ranges.length-1)return null;let a=this.ranges[++n];r+=a.from-i.to,i=a}return r}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t=this.chunkOff+e,i,n;if(t>=0&&t<this.chunk.length)i=this.pos+e,n=this.chunk.charCodeAt(t);else{let r=this.resolveOffset(e,1);if(r==null)return-1;if(i=r,i>=this.chunk2Pos&&i<this.chunk2Pos+this.chunk2.length)n=this.chunk2.charCodeAt(i-this.chunk2Pos);else{let a=this.rangeIndex,O=this.range;for(;O.to<=i;)O=this.ranges[++a];this.chunk2=this.input.chunk(this.chunk2Pos=i),i+this.chunk2.length>O.to&&(this.chunk2=this.chunk2.slice(0,O.to-i)),n=this.chunk2.charCodeAt(0)}}return i>=this.token.lookAhead&&(this.token.lookAhead=i+1),n}acceptToken(e,t=0){let i=t?this.resolveOffset(t,-1):this.pos;if(i==null||i<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=e,this.token.end=i}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),t=this.pos+e.length;this.chunk=t>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=ee,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let i="";for(let n of this.ranges){if(n.from>=t)break;n.to>e&&(i+=this.input.read(Math.max(n.from,e),Math.min(n.to,t)))}return i}}class b{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:i}=t.p;Ae(this.data,e,t,this.id,i.data,i.tokenPrecTable)}}b.prototype.contextual=b.prototype.fallback=b.prototype.extend=!1;b.prototype.fallback=b.prototype.extend=!1;class V{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}}function Ae(s,e,t,i,n,r){let a=0,O=1<<i,{dialect:o}=t.p.parser;e:for(;(O&s[a])!=0;){let l=s[a+1];for(let p=a+3;p<l;p+=2)if((s[p+1]&O)>0){let u=s[p];if(o.allows(u)&&(e.token.value==-1||e.token.value==u||Ne(u,e.token.value,n,r))){e.acceptToken(u);break}}let d=e.next,h=0,f=s[a+2];if(e.next<0&&f>h&&s[l+f*3-3]==65535){a=s[l+f*3-1];continue e}for(;h<f;){let p=h+f>>1,u=l+p+(p<<1),x=s[u],ye=s[u+1]||65536;if(d<x)f=p;else if(d>=ye)h=p+1;else{a=s[u+2],e.advance();continue e}}break}}function te(s,e,t){for(let i=e,n;(n=s[i])!=65535;i++)if(n==t)return i-e;return-1}function Ne(s,e,t,i){let n=te(t,i,e);return n<0||te(t,i,s)<n}const Q=typeof process<"u"&&H&&/\bparse\b/.test(H.LOG);let C=null;function ie(s,e,t){let i=s.cursor(pe.IncludeAnonymous);for(i.moveTo(e);;)if(!(t<0?i.childBefore(e):i.childAfter(e)))for(;;){if((t<0?i.to<e:i.from>e)&&!i.type.isError)return t<0?Math.max(0,Math.min(i.to-1,e-25)):Math.min(s.length,Math.max(i.from+1,e+25));if(t<0?i.prevSibling():i.nextSibling())break;if(!i.parent())return t<0?0:s.length}}class Fe{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?ie(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?ie(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let i=this.trees[t],n=this.index[t];if(n==i.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let r=i.children[n],a=this.start[t]+i.positions[n];if(a>e)return this.nextStart=a,null;if(r instanceof R){if(a==e){if(a<this.safeFrom)return null;let O=a+r.length;if(O<=this.safeTo){let o=r.prop(J.lookAhead);if(!o||O+o<this.fragment.to)return r}}this.index[t]++,a+r.length>=Math.max(this.safeFrom,e)&&(this.trees.push(r),this.start.push(a),this.index.push(0))}else this.index[t]++,this.nextStart=a+r.length}}}class Ye{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(i=>new X)}getActions(e){let t=0,i=null,{parser:n}=e.p,{tokenizers:r}=n,a=n.stateSlot(e.state,3),O=e.curContext?e.curContext.hash:0,o=0;for(let l=0;l<r.length;l++){if((1<<l&a)==0)continue;let d=r[l],h=this.tokens[l];if(!(i&&!d.fallback)&&((d.contextual||h.start!=e.pos||h.mask!=a||h.context!=O)&&(this.updateCachedToken(h,d,e),h.mask=a,h.context=O),h.lookAhead>h.end+25&&(o=Math.max(h.lookAhead,o)),h.value!=0)){let f=t;if(h.extended>-1&&(t=this.addActions(e,h.extended,h.end,t)),t=this.addActions(e,h.value,h.end,t),!d.extend&&(i=h,t>f))break}}for(;this.actions.length>t;)this.actions.pop();return o&&e.setLookAhead(o),!i&&e.pos==this.stream.end&&(i=new X,i.value=e.p.parser.eofTerm,i.start=i.end=e.pos,t=this.addActions(e,i.value,i.end,t)),this.mainToken=i,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new X,{pos:i,p:n}=e;return t.start=i,t.end=Math.min(i+1,n.stream.end),t.value=i==n.stream.end?n.parser.eofTerm:0,t}updateCachedToken(e,t,i){let n=this.stream.clipPos(i.pos);if(t.token(this.stream.reset(n,e),i),e.value>-1){let{parser:r}=i.p;for(let a=0;a<r.specialized.length;a++)if(r.specialized[a]==e.value){let O=r.specializers[a](this.stream.read(e.start,e.end),i);if(O>=0&&i.p.parser.dialect.allows(O>>1)){(O&1)==0?e.value=O>>1:e.extended=O>>1;break}}}else e.value=0,e.end=this.stream.clipPos(n+1)}putAction(e,t,i,n){for(let r=0;r<n;r+=3)if(this.actions[r]==e)return n;return this.actions[n++]=e,this.actions[n++]=t,this.actions[n++]=i,n}addActions(e,t,i,n){let{state:r}=e,{parser:a}=e.p,{data:O}=a;for(let o=0;o<2;o++)for(let l=a.stateSlot(r,o?2:1);;l+=3){if(O[l]==65535)if(O[l+1]==1)l=P(O,l+2);else{n==0&&O[l+1]==2&&(n=this.putAction(P(O,l+2),t,i,n));break}O[l]==t&&(n=this.putAction(P(O,l+1),t,i,n))}return n}}class Ie{constructor(e,t,i,n){this.parser=e,this.input=t,this.ranges=n,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new Ce(t,n),this.tokens=new Ye(e,this.stream),this.topTerm=e.top[1];let{from:r}=n[0];this.stacks=[j.start(this,e.top[0],r)],this.fragments=i.length&&this.stream.end-r>e.bufferLength*4?new Fe(i,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,t=this.minStackPos,i=this.stacks=[],n,r;if(this.bigReductionCount>300&&e.length==1){let[a]=e;for(;a.forceReduce()&&a.stack.length&&a.stack[a.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let a=0;a<e.length;a++){let O=e[a];for(;;){if(this.tokens.mainToken=null,O.pos>t)i.push(O);else{if(this.advanceStack(O,i,e))continue;{n||(n=[],r=[]),n.push(O);let o=this.tokens.getMainToken(O);r.push(o.value,o.end)}}break}}if(!i.length){let a=n&&Je(n);if(a)return Q&&console.log("Finish with "+this.stackID(a)),this.stackToTree(a);if(this.parser.strict)throw Q&&n&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+t);this.recovering||(this.recovering=5)}if(this.recovering&&n){let a=this.stoppedAt!=null&&n[0].pos>this.stoppedAt?n[0]:this.runRecovery(n,r,i);if(a)return Q&&console.log("Force-finish "+this.stackID(a)),this.stackToTree(a.forceAll())}if(this.recovering){let a=this.recovering==1?1:this.recovering*3;if(i.length>a)for(i.sort((O,o)=>o.score-O.score);i.length>a;)i.pop();i.some(O=>O.reducePos>t)&&this.recovering--}else if(i.length>1){e:for(let a=0;a<i.length-1;a++){let O=i[a];for(let o=a+1;o<i.length;o++){let l=i[o];if(O.sameState(l)||O.buffer.length>500&&l.buffer.length>500)if((O.score-l.score||O.buffer.length-l.buffer.length)>0)i.splice(o--,1);else{i.splice(a--,1);continue e}}}i.length>12&&(i.sort((a,O)=>O.score-a.score),i.splice(12,i.length-12))}this.minStackPos=i[0].pos;for(let a=1;a<i.length;a++)i[a].pos<this.minStackPos&&(this.minStackPos=i[a].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}advanceStack(e,t,i){let n=e.pos,{parser:r}=this,a=Q?this.stackID(e)+" -> ":"";if(this.stoppedAt!=null&&n>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let l=e.curContext&&e.curContext.tracker.strict,d=l?e.curContext.hash:0;for(let h=this.fragments.nodeAt(n);h;){let f=this.parser.nodeSet.types[h.type.id]==h.type?r.getGoto(e.state,h.type.id):-1;if(f>-1&&h.length&&(!l||(h.prop(J.contextHash)||0)==d))return e.useNode(h,f),Q&&console.log(a+this.stackID(e)+` (via reuse of ${r.getName(h.type.id)})`),!0;if(!(h instanceof R)||h.children.length==0||h.positions[0]>0)break;let p=h.children[0];if(p instanceof R&&h.positions[0]==0)h=p;else break}}let O=r.stateSlot(e.state,4);if(O>0)return e.reduce(O),Q&&console.log(a+this.stackID(e)+` (via always-reduce ${r.getName(O&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let o=this.tokens.getActions(e);for(let l=0;l<o.length;){let d=o[l++],h=o[l++],f=o[l++],p=l==o.length||!i,u=p?e:e.split(),x=this.tokens.mainToken;if(u.apply(d,h,x?x.start:u.pos,f),Q&&console.log(a+this.stackID(u)+` (via ${(d&65536)==0?"shift":`reduce of ${r.getName(d&65535)}`} for ${r.getName(h)} @ ${n}${u==e?"":", split"})`),p)return!0;u.pos>n?t.push(u):i.push(u)}return!1}advanceFully(e,t){let i=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>i)return se(e,t),!0}}runRecovery(e,t,i){let n=null,r=!1;for(let a=0;a<e.length;a++){let O=e[a],o=t[a<<1],l=t[(a<<1)+1],d=Q?this.stackID(O)+" -> ":"";if(O.deadEnd&&(r||(r=!0,O.restart(),Q&&console.log(d+this.stackID(O)+" (restarted)"),this.advanceFully(O,i))))continue;let h=O.split(),f=d;for(let p=0;p<10&&h.forceReduce()&&(Q&&console.log(f+this.stackID(h)+" (via force-reduce)"),!this.advanceFully(h,i));p++)Q&&(f=this.stackID(h)+" -> ");for(let p of O.recoverByInsert(o))Q&&console.log(d+this.stackID(p)+" (via recover-insert)"),this.advanceFully(p,i);this.stream.end>O.pos?(l==O.pos&&(l++,o=0),O.recoverByDelete(o,l),Q&&console.log(d+this.stackID(O)+` (via recover-delete ${this.parser.getName(o)})`),se(O,i)):(!n||n.score<h.score)&&(n=h)}return n}stackToTree(e){return e.close(),R.build({buffer:U.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(C||(C=new WeakMap)).get(e);return t||C.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}}function se(s,e){for(let t=0;t<e.length;t++){let i=e[t];if(i.pos==s.pos&&i.sameState(s)){e[t].score<s.score&&(e[t]=s);return}}e.push(s)}class De{constructor(e,t,i){this.source=e,this.flags=t,this.disabled=i}allows(e){return!this.disabled||this.disabled[e]==0}}const A=s=>s;class Le{constructor(e){this.start=e.start,this.shift=e.shift||A,this.reduce=e.reduce||A,this.reuse=e.reuse||A,this.hash=e.hash||(()=>0),this.strict=e.strict!==!1}}class E extends be{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(" ");this.minRepeatTerm=t.length;for(let O=0;O<e.repeatNodeCount;O++)t.push("");let i=Object.keys(e.topRules).map(O=>e.topRules[O][1]),n=[];for(let O=0;O<t.length;O++)n.push([]);function r(O,o,l){n[O].push([o,o.deserialize(String(l))])}if(e.nodeProps)for(let O of e.nodeProps){let o=O[0];typeof o=="string"&&(o=J[o]);for(let l=1;l<O.length;){let d=O[l++];if(d>=0)r(d,o,O[l++]);else{let h=O[l+-d];for(let f=-d;f>0;f--)r(O[l++],o,h);l++}}}this.nodeSet=new qe(t.map((O,o)=>xe.define({name:o>=this.minRepeatTerm?void 0:O,id:o,props:n[o],top:i.indexOf(o)>-1,error:o==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(o)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=$e;let a=$(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let O=0;O<this.specializerSpecs.length;O++)this.specialized[O]=this.specializerSpecs[O].term;this.specializers=this.specializerSpecs.map(ne),this.states=$(e.states,Uint32Array),this.data=$(e.stateData),this.goto=$(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(O=>typeof O=="number"?new b(a,O):O),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,i){let n=new Ie(this,e,t,i);for(let r of this.wrappers)n=r(n,e,t,i);return n}getGoto(e,t,i=!1){let n=this.goto;if(t>=n[0])return-1;for(let r=n[t+1];;){let a=n[r++],O=a&1,o=n[r++];if(O&&i)return o;for(let l=r+(a>>1);r<l;r++)if(n[r]==e)return o;if(O)return-1}}hasAction(e,t){let i=this.data;for(let n=0;n<2;n++)for(let r=this.stateSlot(e,n?2:1),a;;r+=3){if((a=i[r])==65535)if(i[r+1]==1)a=i[r=P(i,r+2)];else{if(i[r+1]==2)return P(i,r+2);break}if(a==t||a==0)return P(i,r+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,i=>i==t?!0:null)}allActions(e,t){let i=this.stateSlot(e,4),n=i?t(i):void 0;for(let r=this.stateSlot(e,1);n==null;r+=3){if(this.data[r]==65535)if(this.data[r+1]==1)r=P(this.data,r+2);else break;n=t(P(this.data,r+1))}return n}nextStates(e){let t=[];for(let i=this.stateSlot(e,1);;i+=3){if(this.data[i]==65535)if(this.data[i+1]==1)i=P(this.data,i+2);else break;if((this.data[i+2]&1)==0){let n=this.data[i+1];t.some((r,a)=>a&1&&r==n)||t.push(this.data[i],n)}}return t}configure(e){let t=Object.assign(Object.create(E.prototype),this);if(e.props&&(t.nodeSet=this.nodeSet.extend(...e.props)),e.top){let i=this.topRules[e.top];if(!i)throw new RangeError(`Invalid top rule name ${e.top}`);t.top=i}return e.tokenizers&&(t.tokenizers=this.tokenizers.map(i=>{let n=e.tokenizers.find(r=>r.from==i);return n?n.to:i})),e.specializers&&(t.specializers=this.specializers.slice(),t.specializerSpecs=this.specializerSpecs.map((i,n)=>{let r=e.specializers.find(O=>O.from==i.external);if(!r)return i;let a=Object.assign(Object.assign({},i),{external:r.to});return t.specializers[n]=ne(a),a})),e.contextTracker&&(t.context=e.contextTracker),e.dialect&&(t.dialect=this.parseDialect(e.dialect)),e.strict!=null&&(t.strict=e.strict),e.wrap&&(t.wrappers=t.wrappers.concat(e.wrap)),e.bufferLength!=null&&(t.bufferLength=e.bufferLength),t}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),i=t.map(()=>!1);if(e)for(let r of e.split(" ")){let a=t.indexOf(r);a>=0&&(i[a]=!0)}let n=null;for(let r=0;r<t.length;r++)if(!i[r])for(let a=this.dialects[t[r]],O;(O=this.data[a++])!=65535;)(n||(n=new Uint8Array(this.maxTerm+1)))[O]=1;return new De(e,i,n)}static deserialize(e){return new E(e)}}function P(s,e){return s[e]|s[e+1]<<16}function Je(s){let e=null;for(let t of s){let i=t.p.stoppedAt;(t.pos==t.p.stream.end||i!=null&&t.pos>i)&&t.p.parser.stateFlag(t.state,2)&&(!e||e.score<t.score)&&(e=t)}return e}function ne(s){if(s.external){let e=s.extend?1:0;return(t,i)=>s.external(t,i)<<1|e}return s.get}const Be=1,fe=194,ue=195,Me=196,ae=197,He=198,Ke=199,et=200,tt=2,me=3,re=201,it=24,st=25,nt=49,at=50,rt=55,Ot=56,ot=57,lt=59,ht=60,ct=61,dt=62,pt=63,ft=65,ut=238,mt=71,Qt=241,_t=242,gt=243,St=244,Tt=245,kt=246,Pt=247,vt=248,Qe=72,yt=249,bt=250,qt=251,xt=252,$t=253,zt=254,Rt=255,Xt=256,Wt=73,wt=77,jt=263,Ut=112,Et=130,Vt=151,Gt=152,Zt=155,y=10,q=13,B=32,G=9,M=35,Ct=40,At=46,L=123,Oe=125,_e=39,ge=34,oe=92,Nt=111,Ft=120,Yt=78,It=117,Dt=85,Lt=new Set([st,nt,at,jt,ft,Et,Ot,ot,ut,dt,pt,Qe,Wt,wt,ht,ct,Vt,Gt,Zt,Ut]);function N(s){return s==y||s==q}function F(s){return s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102}const Jt=new V((s,e)=>{let t;if(s.next<0)s.acceptToken(Ke);else if(e.context.flags&W)N(s.next)&&s.acceptToken(He,1);else if(((t=s.peek(-1))<0||N(t))&&e.canShift(ae)){let i=0;for(;s.next==B||s.next==G;)s.advance(),i++;(s.next==y||s.next==q||s.next==M)&&s.acceptToken(ae,-i)}else N(s.next)&&s.acceptToken(Me,1)},{contextual:!0}),Bt=new V((s,e)=>{let t=e.context;if(t.flags)return;let i=s.peek(-1);if(i==y||i==q){let n=0,r=0;for(;;){if(s.next==B)n++;else if(s.next==G)n+=8-n%8;else break;s.advance(),r++}n!=t.indent&&s.next!=y&&s.next!=q&&s.next!=M&&(n<t.indent?s.acceptToken(ue,-r):s.acceptToken(fe))}}),W=1,Se=2,g=4,S=8,T=16,k=32;function w(s,e,t){this.parent=s,this.indent=e,this.flags=t,this.hash=(s?s.hash+s.hash<<8:0)+e+(e<<4)+t+(t<<6)}const Mt=new w(null,0,0);function Ht(s){let e=0;for(let t=0;t<s.length;t++)e+=s.charCodeAt(t)==G?8-e%8:1;return e}const le=new Map([[Qt,0],[_t,g],[gt,S],[St,S|g],[Tt,T],[kt,T|g],[Pt,T|S],[vt,T|S|g],[yt,k],[bt,k|g],[qt,k|S],[xt,k|S|g],[$t,k|T],[zt,k|T|g],[Rt,k|T|S],[Xt,k|T|S|g]].map(([s,e])=>[s,e|Se])),Kt=new Le({start:Mt,reduce(s,e,t,i){return s.flags&W&&Lt.has(e)||(e==mt||e==Qe)&&s.flags&Se?s.parent:s},shift(s,e,t,i){return e==fe?new w(s,Ht(i.read(i.pos,t.pos)),0):e==ue?s.parent:e==it||e==rt||e==lt||e==me?new w(s,0,W):le.has(e)?new w(s,0,le.get(e)|s.flags&W):s},hash(s){return s.hash}}),ei=new V(s=>{for(let e=0;e<5;e++){if(s.next!="print".charCodeAt(e))return;s.advance()}if(!/\w/.test(String.fromCharCode(s.next)))for(let e=0;;e++){let t=s.peek(e);if(!(t==B||t==G)){t!=Ct&&t!=At&&t!=y&&t!=q&&t!=M&&s.acceptToken(Be);return}}}),ti=new V((s,e)=>{let{flags:t}=e.context,i=t&g?ge:_e,n=(t&S)>0,r=!(t&T),a=(t&k)>0,O=s.pos;for(;!(s.next<0);)if(a&&s.next==L)if(s.peek(1)==L)s.advance(2);else{if(s.pos==O){s.acceptToken(me,1);return}break}else if(r&&s.next==oe){if(s.pos==O){s.advance();let o=s.next;o>=0&&(s.advance(),ii(s,o)),s.acceptToken(tt);return}break}else if(s.next==oe&&!r&&s.peek(1)>-1)s.advance(2);else if(s.next==i&&(!n||s.peek(1)==i&&s.peek(2)==i)){if(s.pos==O){s.acceptToken(re,n?3:1);return}break}else if(s.next==y){if(n)s.advance();else if(s.pos==O){s.acceptToken(re);return}break}else s.advance();s.pos>O&&s.acceptToken(et)});function ii(s,e){if(e==Nt)for(let t=0;t<2&&s.next>=48&&s.next<=55;t++)s.advance();else if(e==Ft)for(let t=0;t<2&&F(s.next);t++)s.advance();else if(e==It)for(let t=0;t<4&&F(s.next);t++)s.advance();else if(e==Dt)for(let t=0;t<8&&F(s.next);t++)s.advance();else if(e==Yt&&s.next==L){for(s.advance();s.next>=0&&s.next!=Oe&&s.next!=_e&&s.next!=ge&&s.next!=y;)s.advance();s.next==Oe&&s.advance()}}const si=ze({'async "*" "**" FormatConversion FormatSpec':c.modifier,"for while if elif else try except finally return raise break continue with pass assert await yield match case":c.controlKeyword,"in not and or is del":c.operatorKeyword,"from def class global nonlocal lambda":c.definitionKeyword,import:c.moduleKeyword,"with as print":c.keyword,Boolean:c.bool,None:c.null,VariableName:c.variableName,"CallExpression/VariableName":c.function(c.variableName),"FunctionDefinition/VariableName":c.function(c.definition(c.variableName)),"ClassDefinition/VariableName":c.definition(c.className),PropertyName:c.propertyName,"CallExpression/MemberExpression/PropertyName":c.function(c.propertyName),Comment:c.lineComment,Number:c.number,String:c.string,FormatString:c.special(c.string),Escape:c.escape,UpdateOp:c.updateOperator,"ArithOp!":c.arithmeticOperator,BitOp:c.bitwiseOperator,CompareOp:c.compareOperator,AssignOp:c.definitionOperator,Ellipsis:c.punctuation,At:c.meta,"( )":c.paren,"[ ]":c.squareBracket,"{ }":c.brace,".":c.derefOperator,", ;":c.separator}),ni={__proto__:null,await:44,or:54,and:56,in:60,not:62,is:64,if:70,else:72,lambda:76,yield:94,from:96,async:102,for:104,None:162,True:164,False:164,del:178,pass:182,break:186,continue:190,return:194,raise:202,import:206,as:208,global:212,nonlocal:214,assert:218,type:223,elif:236,while:240,try:246,except:248,finally:250,with:254,def:258,class:268,match:279,case:285},ai=E.deserialize({version:14,states:"##jO`QeOOP$}OSOOO&WQtO'#HUOOQS'#Co'#CoOOQS'#Cp'#CpO'vQdO'#CnO*UQtO'#HTOOQS'#HU'#HUOOQS'#DU'#DUOOQS'#HT'#HTO*rQdO'#D_O+VQdO'#DfO+gQdO'#DjO+zOWO'#DuO,VOWO'#DvO.[QtO'#GuOOQS'#Gu'#GuO'vQdO'#GtO0ZQtO'#GtOOQS'#Eb'#EbO0rQdO'#EcOOQS'#Gs'#GsO0|QdO'#GrOOQV'#Gr'#GrO1XQdO'#FYOOQS'#G^'#G^O1^QdO'#FXOOQV'#IS'#ISOOQV'#Gq'#GqOOQV'#Fq'#FqQ`QeOOO'vQdO'#CqO1lQdO'#C}O1sQdO'#DRO2RQdO'#HYO2cQtO'#EVO'vQdO'#EWOOQS'#EY'#EYOOQS'#E['#E[OOQS'#E^'#E^O2wQdO'#E`O3_QdO'#EdO3rQdO'#EfO3zQtO'#EfO1XQdO'#EiO0rQdO'#ElO1XQdO'#EnO0rQdO'#EtO0rQdO'#EwO4VQdO'#EyO4^QdO'#FOO4iQdO'#EzO0rQdO'#FOO1XQdO'#FQO1XQdO'#FVO4nQdO'#F[P4uOdO'#GpPOOO)CBd)CBdOOQS'#Ce'#CeOOQS'#Cf'#CfOOQS'#Cg'#CgOOQS'#Ch'#ChOOQS'#Ci'#CiOOQS'#Cj'#CjOOQS'#Cl'#ClO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO5TQdO'#DoOOQS,5:Y,5:YO5hQdO'#HdOOQS,5:],5:]O5uQ!fO,5:]O5zQtO,59YO1lQdO,59bO1lQdO,59bO1lQdO,59bO8jQdO,59bO8oQdO,59bO8vQdO,59jO8}QdO'#HTO:TQdO'#HSOOQS'#HS'#HSOOQS'#D['#D[O:lQdO,59aO'vQdO,59aO:zQdO,59aOOQS,59y,59yO;PQdO,5:RO'vQdO,5:ROOQS,5:Q,5:QO;_QdO,5:QO;dQdO,5:XO'vQdO,5:XO'vQdO,5:VOOQS,5:U,5:UO;uQdO,5:UO;zQdO,5:WOOOW'#Fy'#FyO<POWO,5:aOOQS,5:a,5:aO<[QdO'#HwOOOW'#Dw'#DwOOOW'#Fz'#FzO<lOWO,5:bOOQS,5:b,5:bOOQS'#F}'#F}O<zQtO,5:iO?lQtO,5=`O@VQ#xO,5=`O@vQtO,5=`OOQS,5:},5:}OA_QeO'#GWOBqQdO,5;^OOQV,5=^,5=^OB|QtO'#IPOCkQdO,5;tOOQS-E:[-E:[OOQV,5;s,5;sO4dQdO'#FQOOQV-E9o-E9oOCsQtO,59]OEzQtO,59iOFeQdO'#HVOFpQdO'#HVO1XQdO'#HVOF{QdO'#DTOGTQdO,59mOGYQdO'#HZO'vQdO'#HZO0rQdO,5=tOOQS,5=t,5=tO0rQdO'#EROOQS'#ES'#ESOGwQdO'#GPOHXQdO,58|OHXQdO,58|O*xQdO,5:oOHgQtO'#H]OOQS,5:r,5:rOOQS,5:z,5:zOHzQdO,5;OOI]QdO'#IOO1XQdO'#H}OOQS,5;Q,5;QOOQS'#GT'#GTOIqQtO,5;QOJPQdO,5;QOJUQdO'#IQOOQS,5;T,5;TOJdQdO'#H|OOQS,5;W,5;WOJuQdO,5;YO4iQdO,5;`O4iQdO,5;cOJ}QtO'#ITO'vQdO'#ITOKXQdO,5;eO4VQdO,5;eO0rQdO,5;jO1XQdO,5;lOK^QeO'#EuOLjQgO,5;fO!!kQdO'#IUO4iQdO,5;jO!!vQdO,5;lO!#OQdO,5;qO!#ZQtO,5;vO'vQdO,5;vPOOO,5=[,5=[P!#bOSO,5=[P!#jOdO,5=[O!&bQtO1G.jO!&iQtO1G.jO!)YQtO1G.jO!)dQtO1G.jO!+}QtO1G.jO!,bQtO1G.jO!,uQdO'#HcO!-TQtO'#GuO0rQdO'#HcO!-_QdO'#HbOOQS,5:Z,5:ZO!-gQdO,5:ZO!-lQdO'#HeO!-wQdO'#HeO!.[QdO,5>OOOQS'#Ds'#DsOOQS1G/w1G/wOOQS1G.|1G.|O!/[QtO1G.|O!/cQtO1G.|O1lQdO1G.|O!0OQdO1G/UOOQS'#DZ'#DZO0rQdO,59tOOQS1G.{1G.{O!0VQdO1G/eO!0gQdO1G/eO!0oQdO1G/fO'vQdO'#H[O!0tQdO'#H[O!0yQtO1G.{O!1ZQdO,59iO!2aQdO,5=zO!2qQdO,5=zO!2yQdO1G/mO!3OQtO1G/mOOQS1G/l1G/lO!3`QdO,5=uO!4VQdO,5=uO0rQdO1G/qO!4tQdO1G/sO!4yQtO1G/sO!5ZQtO1G/qOOQS1G/p1G/pOOQS1G/r1G/rOOOW-E9w-E9wOOQS1G/{1G/{O!5kQdO'#HxO0rQdO'#HxO!5|QdO,5>cOOOW-E9x-E9xOOQS1G/|1G/|OOQS-E9{-E9{O!6[Q#xO1G2zO!6{QtO1G2zO'vQdO,5<jOOQS,5<j,5<jOOQS-E9|-E9|OOQS,5<r,5<rOOQS-E:U-E:UOOQV1G0x1G0xO1XQdO'#GRO!7dQtO,5>kOOQS1G1`1G1`O!8RQdO1G1`OOQS'#DV'#DVO0rQdO,5=qOOQS,5=q,5=qO!8WQdO'#FrO!8cQdO,59oO!8kQdO1G/XO!8uQtO,5=uOOQS1G3`1G3`OOQS,5:m,5:mO!9fQdO'#GtOOQS,5<k,5<kOOQS-E9}-E9}O!9wQdO1G.hOOQS1G0Z1G0ZO!:VQdO,5=wO!:gQdO,5=wO0rQdO1G0jO0rQdO1G0jO!:xQdO,5>jO!;ZQdO,5>jO1XQdO,5>jO!;lQdO,5>iOOQS-E:R-E:RO!;qQdO1G0lO!;|QdO1G0lO!<RQdO,5>lO!<aQdO,5>lO!<oQdO,5>hO!=VQdO,5>hO!=hQdO'#EpO0rQdO1G0tO!=sQdO1G0tO!=xQgO1G0zO!AvQgO1G0}O!EqQdO,5>oO!E{QdO,5>oO!FTQtO,5>oO0rQdO1G1PO!F_QdO1G1PO4iQdO1G1UO!!vQdO1G1WOOQV,5;a,5;aO!FdQfO,5;aO!FiQgO1G1QO!JjQdO'#GZO4iQdO1G1QO4iQdO1G1QO!JzQdO,5>pO!KXQdO,5>pO1XQdO,5>pOOQV1G1U1G1UO!KaQdO'#FSO!KrQ!fO1G1WO!KzQdO1G1WOOQV1G1]1G1]O4iQdO1G1]O!LPQdO1G1]O!LXQdO'#F^OOQV1G1b1G1bO!#ZQtO1G1bPOOO1G2v1G2vP!L^OSO1G2vOOQS,5=},5=}OOQS'#Dp'#DpO0rQdO,5=}O!LfQdO,5=|O!LyQdO,5=|OOQS1G/u1G/uO!MRQdO,5>PO!McQdO,5>PO!MkQdO,5>PO!NOQdO,5>PO!N`QdO,5>POOQS1G3j1G3jOOQS7+$h7+$hO!8kQdO7+$pO#!RQdO1G.|O#!YQdO1G.|OOQS1G/`1G/`OOQS,5<`,5<`O'vQdO,5<`OOQS7+%P7+%PO#!aQdO7+%POOQS-E9r-E9rOOQS7+%Q7+%QO#!qQdO,5=vO'vQdO,5=vOOQS7+$g7+$gO#!vQdO7+%PO##OQdO7+%QO##TQdO1G3fOOQS7+%X7+%XO##eQdO1G3fO##mQdO7+%XOOQS,5<_,5<_O'vQdO,5<_O##rQdO1G3aOOQS-E9q-E9qO#$iQdO7+%]OOQS7+%_7+%_O#$wQdO1G3aO#%fQdO7+%_O#%kQdO1G3gO#%{QdO1G3gO#&TQdO7+%]O#&YQdO,5>dO#&sQdO,5>dO#&sQdO,5>dOOQS'#Dx'#DxO#'UO&jO'#DzO#'aO`O'#HyOOOW1G3}1G3}O#'fQdO1G3}O#'nQdO1G3}O#'yQ#xO7+(fO#(jQtO1G2UP#)TQdO'#GOOOQS,5<m,5<mOOQS-E:P-E:POOQS7+&z7+&zOOQS1G3]1G3]OOQS,5<^,5<^OOQS-E9p-E9pOOQS7+$s7+$sO#)bQdO,5=`O#){QdO,5=`O#*^QtO,5<aO#*qQdO1G3cOOQS-E9s-E9sOOQS7+&U7+&UO#+RQdO7+&UO#+aQdO,5<nO#+uQdO1G4UOOQS-E:Q-E:QO#,WQdO1G4UOOQS1G4T1G4TOOQS7+&W7+&WO#,iQdO7+&WOOQS,5<p,5<pO#,tQdO1G4WOOQS-E:S-E:SOOQS,5<l,5<lO#-SQdO1G4SOOQS-E:O-E:OO1XQdO'#EqO#-jQdO'#EqO#-uQdO'#IRO#-}QdO,5;[OOQS7+&`7+&`O0rQdO7+&`O#.SQgO7+&fO!JmQdO'#GXO4iQdO7+&fO4iQdO7+&iO#2QQtO,5<tO'vQdO,5<tO#2[QdO1G4ZOOQS-E:W-E:WO#2fQdO1G4ZO4iQdO7+&kO0rQdO7+&kOOQV7+&p7+&pO!KrQ!fO7+&rO!KzQdO7+&rO`QeO1G0{OOQV-E:X-E:XO4iQdO7+&lO4iQdO7+&lOOQV,5<u,5<uO#2nQdO,5<uO!JmQdO,5<uOOQV7+&l7+&lO#2yQgO7+&lO#6tQdO,5<vO#7PQdO1G4[OOQS-E:Y-E:YO#7^QdO1G4[O#7fQdO'#IWO#7tQdO'#IWO1XQdO'#IWOOQS'#IW'#IWO#8PQdO'#IVOOQS,5;n,5;nO#8XQdO,5;nO0rQdO'#FUOOQV7+&r7+&rO4iQdO7+&rOOQV7+&w7+&wO4iQdO7+&wO#8^QfO,5;xOOQV7+&|7+&|POOO7+(b7+(bO#8cQdO1G3iOOQS,5<c,5<cO#8qQdO1G3hOOQS-E9u-E9uO#9UQdO,5<dO#9aQdO,5<dO#9tQdO1G3kOOQS-E9v-E9vO#:UQdO1G3kO#:^QdO1G3kO#:nQdO1G3kO#:UQdO1G3kOOQS<<H[<<H[O#:yQtO1G1zOOQS<<Hk<<HkP#;WQdO'#FtO8vQdO1G3bO#;eQdO1G3bO#;jQdO<<HkOOQS<<Hl<<HlO#;zQdO7+)QOOQS<<Hs<<HsO#<[QtO1G1yP#<{QdO'#FsO#=YQdO7+)RO#=jQdO7+)RO#=rQdO<<HwO#=wQdO7+({OOQS<<Hy<<HyO#>nQdO,5<bO'vQdO,5<bOOQS-E9t-E9tOOQS<<Hw<<HwOOQS,5<g,5<gO0rQdO,5<gO#>sQdO1G4OOOQS-E9y-E9yO#?^QdO1G4OO<[QdO'#H{OOOO'#D{'#D{OOOO'#F|'#F|O#?oO&jO,5:fOOOW,5>e,5>eOOOW7+)i7+)iO#?zQdO7+)iO#@SQdO1G2zO#@mQdO1G2zP'vQdO'#FuO0rQdO<<IpO1XQdO1G2YP1XQdO'#GSO#AOQdO7+)pO#AaQdO7+)pOOQS<<Ir<<IrP1XQdO'#GUP0rQdO'#GQOOQS,5;],5;]O#ArQdO,5>mO#BQQdO,5>mOOQS1G0v1G0vOOQS<<Iz<<IzOOQV-E:V-E:VO4iQdO<<JQOOQV,5<s,5<sO4iQdO,5<sOOQV<<JQ<<JQOOQV<<JT<<JTO#BYQtO1G2`P#BdQdO'#GYO#BkQdO7+)uO#BuQgO<<JVO4iQdO<<JVOOQV<<J^<<J^O4iQdO<<J^O!KrQ!fO<<J^O#FpQgO7+&gOOQV<<JW<<JWO#FzQgO<<JWOOQV1G2a1G2aO1XQdO1G2aO#JuQdO1G2aO4iQdO<<JWO1XQdO1G2bP0rQdO'#G[O#KQQdO7+)vO#K_QdO7+)vOOQS'#FT'#FTO0rQdO,5>rO#KgQdO,5>rO#KrQdO,5>rO#K}QdO,5>qO#L`QdO,5>qOOQS1G1Y1G1YOOQS,5;p,5;pOOQV<<Jc<<JcO#LhQdO1G1dOOQS7+)T7+)TP#LmQdO'#FwO#L}QdO1G2OO#MbQdO1G2OO#MrQdO1G2OP#M}QdO'#FxO#N[QdO7+)VO#NlQdO7+)VO#NlQdO7+)VO#NtQdO7+)VO$ UQdO7+(|O8vQdO7+(|OOQSAN>VAN>VO$ oQdO<<LmOOQSAN>cAN>cO0rQdO1G1|O$!PQtO1G1|P$!ZQdO'#FvOOQS1G2R1G2RP$!hQdO'#F{O$!uQdO7+)jO$#`QdO,5>gOOOO-E9z-E9zOOOW<<MT<<MTO$#nQdO7+(fOOQSAN?[AN?[OOQS7+'t7+'tO$$XQdO<<M[OOQS,5<q,5<qO$$jQdO1G4XOOQS-E:T-E:TOOQVAN?lAN?lOOQV1G2_1G2_O4iQdOAN?qO$$xQgOAN?qOOQVAN?xAN?xO4iQdOAN?xOOQV<<JR<<JRO4iQdOAN?rO4iQdO7+'{OOQV7+'{7+'{O1XQdO7+'{OOQVAN?rAN?rOOQS7+'|7+'|O$(sQdO<<MbOOQS1G4^1G4^O0rQdO1G4^OOQS,5<w,5<wO$)QQdO1G4]OOQS-E:Z-E:ZOOQU'#G_'#G_O$)cQfO7+'OO$)nQdO'#F_O$*uQdO7+'jO$+VQdO7+'jOOQS7+'j7+'jO$+bQdO<<LqO$+rQdO<<LqO$+rQdO<<LqO$+zQdO'#H^OOQS<<Lh<<LhO$,UQdO<<LhOOQS7+'h7+'hOOQS'#D|'#D|OOOO1G4R1G4RO$,oQdO1G4RO$,wQdO1G4RP!=hQdO'#GVOOQVG25]G25]O4iQdOG25]OOQVG25dG25dOOQVG25^G25^OOQV<<Kg<<KgO4iQdO<<KgOOQS7+)x7+)xP$-SQdO'#G]OOQU-E:]-E:]OOQV<<Jj<<JjO$-vQtO'#FaOOQS'#Fc'#FcO$.WQdO'#FbO$.xQdO'#FbOOQS'#Fb'#FbO$.}QdO'#IYO$)nQdO'#FiO$)nQdO'#FiO$/fQdO'#FjO$)nQdO'#FkO$/mQdO'#IZOOQS'#IZ'#IZO$0[QdO,5;yOOQS<<KU<<KUO$0dQdO<<KUO$0tQdOANB]O$1UQdOANB]O$1^QdO'#H_OOQS'#H_'#H_O1sQdO'#DcO$1wQdO,5=xOOQSANBSANBSOOOO7+)m7+)mO$2`QdO7+)mOOQVLD*wLD*wOOQVANARANARO5uQ!fO'#GaO$2hQtO,5<SO$)nQdO'#FmOOQS,5<W,5<WOOQS'#Fd'#FdO$3YQdO,5;|O$3_QdO,5;|OOQS'#Fg'#FgO$)nQdO'#G`O$4PQdO,5<QO$4kQdO,5>tO$4{QdO,5>tO1XQdO,5<PO$5^QdO,5<TO$5cQdO,5<TO$)nQdO'#I[O$5hQdO'#I[O$5mQdO,5<UOOQS,5<V,5<VO0rQdO'#FpOOQU1G1e1G1eO4iQdO1G1eOOQSAN@pAN@pO$5rQdOG27wO$6SQdO,59}OOQS1G3d1G3dOOOO<<MX<<MXOOQS,5<{,5<{OOQS-E:_-E:_O$6XQtO'#FaO$6`QdO'#I]O$6nQdO'#I]O$6vQdO,5<XOOQS1G1h1G1hO$6{QdO1G1hO$7QQdO,5<zOOQS-E:^-E:^O$7lQdO,5=OO$8TQdO1G4`OOQS-E:b-E:bOOQS1G1k1G1kOOQS1G1o1G1oO$8eQdO,5>vO$)nQdO,5>vOOQS1G1p1G1pOOQS,5<[,5<[OOQU7+'P7+'PO$+zQdO1G/iO$)nQdO,5<YO$8sQdO,5>wO$8zQdO,5>wOOQS1G1s1G1sOOQS7+'S7+'SP$)nQdO'#GdO$9SQdO1G4bO$9^QdO1G4bO$9fQdO1G4bOOQS7+%T7+%TO$9tQdO1G1tO$:SQtO'#FaO$:ZQdO,5<}OOQS,5<},5<}O$:iQdO1G4cOOQS-E:a-E:aO$)nQdO,5<|O$:pQdO,5<|O$:uQdO7+)|OOQS-E:`-E:`O$;PQdO7+)|O$)nQdO,5<ZP$)nQdO'#GcO$;XQdO1G2hO$)nQdO1G2hP$;gQdO'#GbO$;nQdO<<MhO$;xQdO1G1uO$<WQdO7+(SO8vQdO'#C}O8vQdO,59bO8vQdO,59bO8vQdO,59bO$<fQtO,5=`O8vQdO1G.|O0rQdO1G/XO0rQdO7+$pP$<yQdO'#GOO'vQdO'#GtO$=WQdO,59bO$=]QdO,59bO$=dQdO,59mO$=iQdO1G/UO1sQdO'#DRO8vQdO,59j",stateData:"$>S~O%cOS%^OSSOS%]PQ~OPdOVaOfoOhYOopOs!POvqO!PrO!Q{O!T!SO!U!RO!XZO!][O!h`O!r`O!s`O!t`O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#l!QO#o!TO#s!UO#u!VO#z!WO#}hO$P!XO%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~O%]!YO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%j![O%k!]O%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aO~Ok%xXl%xXm%xXn%xXo%xXp%xXs%xXz%xX{%xX!x%xX#g%xX%[%xX%_%xX%z%xXg%xX!T%xX!U%xX%{%xX!W%xX![%xX!Q%xX#[%xXt%xX!m%xX~P%SOfoOhYO!XZO!][O!h`O!r`O!s`O!t`O%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~Oz%wX{%wX#g%wX%[%wX%_%wX%z%wX~Ok!pOl!qOm!oOn!oOo!rOp!sOs!tO!x%wX~P)pOV!zOg!|Oo0cOv0qO!PrO~P'vOV#OOo0cOv0qO!W#PO~P'vOV#SOa#TOo0cOv0qO![#UO~P'vOQ#XO%`#XO%a#ZO~OQ#^OR#[O%`#^O%a#`O~OV%iX_%iXa%iXh%iXk%iXl%iXm%iXn%iXo%iXp%iXs%iXz%iX!X%iX!f%iX%j%iX%k%iX%l%iX%m%iX%n%iX%o%iX%p%iX%q%iX%r%iX%s%iXg%iX!T%iX!U%iX~O&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O{%iX!x%iX#g%iX%[%iX%_%iX%z%iX%{%iX!W%iX![%iX!Q%iX#[%iXt%iX!m%iX~P,eOz#dO{%hX!x%hX#g%hX%[%hX%_%hX%z%hX~Oo0cOv0qO~P'vO#g#gO%[#iO%_#iO~O%uWO~O!T#nO#u!VO#z!WO#}hO~OopO~P'vOV#sOa#tO%uWO{wP~OV#xOo0cOv0qO!Q#yO~P'vO{#{O!x$QO%z#|O#g!yX%[!yX%_!yX~OV#xOo0cOv0qO#g#SX%[#SX%_#SX~P'vOo0cOv0qO#g#WX%[#WX%_#WX~P'vOh$WO%uWO~O!f$YO!r$YO%uWO~OV$eO~P'vO!U$gO#s$hO#u$iO~O{$jO~OV$qO~P'vOS$sO%[$rO%_$rO%c$tO~OV$}Oa$}Og%POo0cOv0qO~P'vOo0cOv0qO{%SO~P'vO&Y%UO~Oa!bOh!iO!X!kO!f!mOVba_bakbalbambanbaobapbasbazba{ba!xba#gba%[ba%_ba%jba%kba%lba%mba%nba%oba%pba%qba%rba%sba%zbagba!Tba!Uba%{ba!Wba![ba!Qba#[batba!mba~On%ZO~Oo%ZO~P'vOo0cO~P'vOk0eOl0fOm0dOn0dOo0mOp0nOs0rOg%wX!T%wX!U%wX%{%wX!W%wX![%wX!Q%wX#[%wX!m%wX~P)pO%{%]Og%vXz%vX!T%vX!U%vX!W%vX{%vX~Og%_Oz%`O!T%dO!U%cO~Og%_O~Oz%gO!T%dO!U%cO!W&SX~O!W%kO~Oz%lO{%nO!T%dO!U%cO![%}X~O![%rO~O![%sO~OQ#XO%`#XO%a%uO~OV%wOo0cOv0qO!PrO~P'vOQ#^OR#[O%`#^O%a%zO~OV!qa_!qaa!qah!qak!qal!qam!qan!qao!qap!qas!qaz!qa{!qa!X!qa!f!qa!x!qa#g!qa%[!qa%_!qa%j!qa%k!qa%l!qa%m!qa%n!qa%o!qa%p!qa%q!qa%r!qa%s!qa%z!qag!qa!T!qa!U!qa%{!qa!W!qa![!qa!Q!qa#[!qat!qa!m!qa~P#yOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P%SOV&OOopOvqO{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P'vOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#g$zX%[$zX%_$zX~P'vO#g#gO%[&TO%_&TO~O!f&UOh&sX%[&sXz&sX#[&sX#g&sX%_&sX#Z&sXg&sX~Oh!iO%[&WO~Okealeameaneaoeapeaseazea{ea!xea#gea%[ea%_ea%zeagea!Tea!Uea%{ea!Wea![ea!Qea#[eatea!mea~P%SOsqazqa{qa#gqa%[qa%_qa%zqa~Ok!pOl!qOm!oOn!oOo!rOp!sO!xqa~PEcO%z&YOz%yX{%yX~O%uWOz%yX{%yX~Oz&]O{wX~O{&_O~Oz%lO#g%}X%[%}X%_%}Xg%}X{%}X![%}X!m%}X%z%}X~OV0lOo0cOv0qO!PrO~P'vO%z#|O#gUa%[Ua%_Ua~Oz&hO#g&PX%[&PX%_&PXn&PX~P%SOz&kO!Q&jO#g#Wa%[#Wa%_#Wa~Oz&lO#[&nO#g&rX%[&rX%_&rXg&rX~O!f$YO!r$YO#Z&qO%uWO~O#Z&qO~Oz&sO#g&tX%[&tX%_&tX~Oz&uO#g&pX%[&pX%_&pX{&pX~O!X&wO%z&xO~Oz&|On&wX~P%SOn'PO~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO%['UO~P'vOt'YO#p'WO#q'XOP#naV#naf#nah#nao#nas#nav#na!P#na!Q#na!T#na!U#na!X#na!]#na!h#na!r#na!s#na!t#na!{#na!}#na#P#na#R#na#T#na#X#na#Z#na#^#na#_#na#a#na#c#na#l#na#o#na#s#na#u#na#z#na#}#na$P#na%X#na%o#na%p#na%t#na%u#na&Z#na&[#na&]#na&^#na&_#na&`#na&a#na&b#na&c#na&d#na&e#na&f#na&g#na&h#na&i#na&j#na%Z#na%_#na~Oz'ZO#[']O{&xX~Oh'_O!X&wO~Oh!iO{$jO!X&wO~O{'eO~P%SO%['hO%_'hO~OS'iO%['hO%_'hO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%k!]O~P!#uO%kWi~P!#uOV!aO_!aOa!bOh!iO!X!kO!f!mO%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%m!_O%n!_O~P!&pO%mWi%nWi~P!&pOa!bOh!iO!X!kO!f!mOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%mWi%nWi%oWi%pWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~OV!aO_!aO%q!aO%r!aO%s!aO~P!)nOVWi_Wi%qWi%rWi%sWi~P!)nO!T%dO!U%cOg&VXz&VX~O%z'kO%{'kO~P,eOz'mOg&UX~Og'oO~Oz'pO{'rO!W&XX~Oo0cOv0qOz'pO{'sO!W&XX~P'vO!W'uO~Om!oOn!oOo!rOp!sOkjisjizji{ji!xji#gji%[ji%_ji%zji~Ol!qO~P!.aOlji~P!.aOk0eOl0fOm0dOn0dOo0mOp0nO~Ot'wO~P!/jOV'|Og'}Oo0cOv0qO~P'vOg'}Oz(OO~Og(QO~O!U(SO~Og(TOz(OO!T%dO!U%cO~P%SOk0eOl0fOm0dOn0dOo0mOp0nOgqa!Tqa!Uqa%{qa!Wqa![qa!Qqa#[qatqa!mqa~PEcOV'|Oo0cOv0qO!W&Sa~P'vOz(WO!W&Sa~O!W(XO~Oz(WO!T%dO!U%cO!W&Sa~P%SOV(]Oo0cOv0qO![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~P'vOz(^O![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~O![(aO~Oz(^O!T%dO!U%cO![%}a~P%SOz(dO!T%dO!U%cO![&Ta~P%SOz(gO{&lX![&lX!m&lX%z&lX~O{(kO![(mO!m(nO%z(jO~OV&OOopOvqO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~P'vOz(pO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~O!f&UOh&sa%[&saz&sa#[&sa#g&sa%_&sa#Z&sag&sa~O%[(uO~OV#sOa#tO%uWO~Oz&]O{wa~OopOvqO~P'vOz(^O#g%}a%[%}a%_%}ag%}a{%}a![%}a!m%}a%z%}a~P%SOz(zO#g%hX%[%hX%_%hX%z%hX~O%z#|O#gUi%[Ui%_Ui~O#g&Pa%[&Pa%_&Pan&Pa~P'vOz(}O#g&Pa%[&Pa%_&Pan&Pa~O%uWO#g&ra%[&ra%_&rag&ra~Oz)SO#g&ra%[&ra%_&rag&ra~Og)VO~OV)WOh$WO%uWO~O#Z)XO~O%uWO#g&ta%[&ta%_&ta~Oz)ZO#g&ta%[&ta%_&ta~Oo0cOv0qO#g&pa%[&pa%_&pa{&pa~P'vOz)^O#g&pa%[&pa%_&pa{&pa~OV)`Oa)`O%uWO~O%z)eO~Ot)hO#j)gOP#hiV#hif#hih#hio#his#hiv#hi!P#hi!Q#hi!T#hi!U#hi!X#hi!]#hi!h#hi!r#hi!s#hi!t#hi!{#hi!}#hi#P#hi#R#hi#T#hi#X#hi#Z#hi#^#hi#_#hi#a#hi#c#hi#l#hi#o#hi#s#hi#u#hi#z#hi#}#hi$P#hi%X#hi%o#hi%p#hi%t#hi%u#hi&Z#hi&[#hi&]#hi&^#hi&_#hi&`#hi&a#hi&b#hi&c#hi&d#hi&e#hi&f#hi&g#hi&h#hi&i#hi&j#hi%Z#hi%_#hi~Ot)iOP#kiV#kif#kih#kio#kis#kiv#ki!P#ki!Q#ki!T#ki!U#ki!X#ki!]#ki!h#ki!r#ki!s#ki!t#ki!{#ki!}#ki#P#ki#R#ki#T#ki#X#ki#Z#ki#^#ki#_#ki#a#ki#c#ki#l#ki#o#ki#s#ki#u#ki#z#ki#}#ki$P#ki%X#ki%o#ki%p#ki%t#ki%u#ki&Z#ki&[#ki&]#ki&^#ki&_#ki&`#ki&a#ki&b#ki&c#ki&d#ki&e#ki&f#ki&g#ki&h#ki&i#ki&j#ki%Z#ki%_#ki~OV)kOn&wa~P'vOz)lOn&wa~Oz)lOn&wa~P%SOn)pO~O%Y)tO~Ot)wO#p'WO#q)vOP#niV#nif#nih#nio#nis#niv#ni!P#ni!Q#ni!T#ni!U#ni!X#ni!]#ni!h#ni!r#ni!s#ni!t#ni!{#ni!}#ni#P#ni#R#ni#T#ni#X#ni#Z#ni#^#ni#_#ni#a#ni#c#ni#l#ni#o#ni#s#ni#u#ni#z#ni#}#ni$P#ni%X#ni%o#ni%p#ni%t#ni%u#ni&Z#ni&[#ni&]#ni&^#ni&_#ni&`#ni&a#ni&b#ni&c#ni&d#ni&e#ni&f#ni&g#ni&h#ni&i#ni&j#ni%Z#ni%_#ni~OV)zOo0cOv0qO{$jO~P'vOo0cOv0qO{&xa~P'vOz*OO{&xa~OV*SOa*TOg*WO%q*UO%uWO~O{$jO&{*YO~Oh'_O~Oh!iO{$jO~O%[*_O~O%[*aO%_*aO~OV$}Oa$}Oo0cOv0qOg&Ua~P'vOz*dOg&Ua~Oo0cOv0qO{*gO!W&Xa~P'vOz*hO!W&Xa~Oo0cOv0qOz*hO{*kO!W&Xa~P'vOo0cOv0qOz*hO!W&Xa~P'vOz*hO{*kO!W&Xa~Om0dOn0dOo0mOp0nOgjikjisjizji!Tji!Uji%{ji!Wji{ji![ji#gji%[ji%_ji!Qji#[jitji!mji%zji~Ol0fO~P!NkOlji~P!NkOV'|Og*pOo0cOv0qO~P'vOn*rO~Og*pOz*tO~Og*uO~OV'|Oo0cOv0qO!W&Si~P'vOz*vO!W&Si~O!W*wO~OV(]Oo0cOv0qO![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~P'vOz*zO!T%dO!U%cO![&Ti~Oz*}O![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~O![+OO~Oa+QOo0cOv0qO![&Ti~P'vOz*zO![&Ti~O![+SO~OV+UOo0cOv0qO{&la![&la!m&la%z&la~P'vOz+VO{&la![&la!m&la%z&la~O!]+YO&n+[O![!nX~O![+^O~O{(kO![+_O~O{(kO![+_O!m+`O~OV&OOopOvqO{%hq!x%hq#g%hq%[%hq%_%hq%z%hq~P'vOz$ri{$ri!x$ri#g$ri%[$ri%_$ri%z$ri~P%SOV&OOopOvqO~P'vOV&OOo0cOv0qO#g%ha%[%ha%_%ha%z%ha~P'vOz+aO#g%ha%[%ha%_%ha%z%ha~Oz$ia#g$ia%[$ia%_$ian$ia~P%SO#g&Pi%[&Pi%_&Pin&Pi~P'vOz+dO#g#Wq%[#Wq%_#Wq~O#[+eOz$va#g$va%[$va%_$vag$va~O%uWO#g&ri%[&ri%_&rig&ri~Oz+gO#g&ri%[&ri%_&rig&ri~OV+iOh$WO%uWO~O%uWO#g&ti%[&ti%_&ti~Oo0cOv0qO#g&pi%[&pi%_&pi{&pi~P'vO{#{Oz#eX!W#eX~Oz+mO!W&uX~O!W+oO~Ot+rO#j)gOP#hqV#hqf#hqh#hqo#hqs#hqv#hq!P#hq!Q#hq!T#hq!U#hq!X#hq!]#hq!h#hq!r#hq!s#hq!t#hq!{#hq!}#hq#P#hq#R#hq#T#hq#X#hq#Z#hq#^#hq#_#hq#a#hq#c#hq#l#hq#o#hq#s#hq#u#hq#z#hq#}#hq$P#hq%X#hq%o#hq%p#hq%t#hq%u#hq&Z#hq&[#hq&]#hq&^#hq&_#hq&`#hq&a#hq&b#hq&c#hq&d#hq&e#hq&f#hq&g#hq&h#hq&i#hq&j#hq%Z#hq%_#hq~On$|az$|a~P%SOV)kOn&wi~P'vOz+yOn&wi~Oz,TO{$jO#[,TO~O#q,VOP#nqV#nqf#nqh#nqo#nqs#nqv#nq!P#nq!Q#nq!T#nq!U#nq!X#nq!]#nq!h#nq!r#nq!s#nq!t#nq!{#nq!}#nq#P#nq#R#nq#T#nq#X#nq#Z#nq#^#nq#_#nq#a#nq#c#nq#l#nq#o#nq#s#nq#u#nq#z#nq#}#nq$P#nq%X#nq%o#nq%p#nq%t#nq%u#nq&Z#nq&[#nq&]#nq&^#nq&_#nq&`#nq&a#nq&b#nq&c#nq&d#nq&e#nq&f#nq&g#nq&h#nq&i#nq&j#nq%Z#nq%_#nq~O#[,WOz%Oa{%Oa~Oo0cOv0qO{&xi~P'vOz,YO{&xi~O{#{O%z,[Og&zXz&zX~O%uWOg&zXz&zX~Oz,`Og&yX~Og,bO~O%Y,eO~O!T%dO!U%cOg&Viz&Vi~OV$}Oa$}Oo0cOv0qOg&Ui~P'vO{,hOz$la!W$la~Oo0cOv0qO{,iOz$la!W$la~P'vOo0cOv0qO{*gO!W&Xi~P'vOz,lO!W&Xi~Oo0cOv0qOz,lO!W&Xi~P'vOz,lO{,oO!W&Xi~Og$hiz$hi!W$hi~P%SOV'|Oo0cOv0qO~P'vOn,qO~OV'|Og,rOo0cOv0qO~P'vOV'|Oo0cOv0qO!W&Sq~P'vOz$gi![$gi#g$gi%[$gi%_$gig$gi{$gi!m$gi%z$gi~P%SOV(]Oo0cOv0qO~P'vOa+QOo0cOv0qO![&Tq~P'vOz,sO![&Tq~O![,tO~OV(]Oo0cOv0qO![%}q#g%}q%[%}q%_%}qg%}q{%}q!m%}q%z%}q~P'vO{,uO~OV+UOo0cOv0qO{&li![&li!m&li%z&li~P'vOz,zO{&li![&li!m&li%z&li~O!]+YO&n+[O![!na~O{(kO![,}O~OV&OOo0cOv0qO#g%hi%[%hi%_%hi%z%hi~P'vOz-OO#g%hi%[%hi%_%hi%z%hi~O%uWO#g&rq%[&rq%_&rqg&rq~Oz-RO#g&rq%[&rq%_&rqg&rq~OV)`Oa)`O%uWO!W&ua~Oz-TO!W&ua~On$|iz$|i~P%SOV)kO~P'vOV)kOn&wq~P'vOt-XOP#myV#myf#myh#myo#mys#myv#my!P#my!Q#my!T#my!U#my!X#my!]#my!h#my!r#my!s#my!t#my!{#my!}#my#P#my#R#my#T#my#X#my#Z#my#^#my#_#my#a#my#c#my#l#my#o#my#s#my#u#my#z#my#}#my$P#my%X#my%o#my%p#my%t#my%u#my&Z#my&[#my&]#my&^#my&_#my&`#my&a#my&b#my&c#my&d#my&e#my&f#my&g#my&h#my&i#my&j#my%Z#my%_#my~O%Z-]O%_-]O~P`O#q-^OP#nyV#nyf#nyh#nyo#nys#nyv#ny!P#ny!Q#ny!T#ny!U#ny!X#ny!]#ny!h#ny!r#ny!s#ny!t#ny!{#ny!}#ny#P#ny#R#ny#T#ny#X#ny#Z#ny#^#ny#_#ny#a#ny#c#ny#l#ny#o#ny#s#ny#u#ny#z#ny#}#ny$P#ny%X#ny%o#ny%p#ny%t#ny%u#ny&Z#ny&[#ny&]#ny&^#ny&_#ny&`#ny&a#ny&b#ny&c#ny&d#ny&e#ny&f#ny&g#ny&h#ny&i#ny&j#ny%Z#ny%_#ny~Oz-aO{$jO#[-aO~Oo0cOv0qO{&xq~P'vOz-dO{&xq~O%z,[Og&zaz&za~O{#{Og&zaz&za~OV*SOa*TO%q*UO%uWOg&ya~Oz-hOg&ya~O$S-lO~OV$}Oa$}Oo0cOv0qO~P'vOo0cOv0qO{-mOz$li!W$li~P'vOo0cOv0qOz$li!W$li~P'vO{-mOz$li!W$li~Oo0cOv0qO{*gO~P'vOo0cOv0qO{*gO!W&Xq~P'vOz-pO!W&Xq~Oo0cOv0qOz-pO!W&Xq~P'vOs-sO!T%dO!U%cOg&Oq!W&Oq![&Oqz&Oq~P!/jOa+QOo0cOv0qO![&Ty~P'vOz$ji![$ji~P%SOa+QOo0cOv0qO~P'vOV+UOo0cOv0qO~P'vOV+UOo0cOv0qO{&lq![&lq!m&lq%z&lq~P'vO{(kO![-xO!m-yO%z-wO~OV&OOo0cOv0qO#g%hq%[%hq%_%hq%z%hq~P'vO%uWO#g&ry%[&ry%_&ryg&ry~OV)`Oa)`O%uWO!W&ui~Ot-}OP#m!RV#m!Rf#m!Rh#m!Ro#m!Rs#m!Rv#m!R!P#m!R!Q#m!R!T#m!R!U#m!R!X#m!R!]#m!R!h#m!R!r#m!R!s#m!R!t#m!R!{#m!R!}#m!R#P#m!R#R#m!R#T#m!R#X#m!R#Z#m!R#^#m!R#_#m!R#a#m!R#c#m!R#l#m!R#o#m!R#s#m!R#u#m!R#z#m!R#}#m!R$P#m!R%X#m!R%o#m!R%p#m!R%t#m!R%u#m!R&Z#m!R&[#m!R&]#m!R&^#m!R&_#m!R&`#m!R&a#m!R&b#m!R&c#m!R&d#m!R&e#m!R&f#m!R&g#m!R&h#m!R&i#m!R&j#m!R%Z#m!R%_#m!R~Oo0cOv0qO{&xy~P'vOV*SOa*TO%q*UO%uWOg&yi~O$S-lO%Z.VO%_.VO~OV.aOh._O!X.^O!].`O!h.YO!s.[O!t.[O%p.XO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O~Oo0cOv0qOz$lq!W$lq~P'vO{.fOz$lq!W$lq~Oo0cOv0qO{*gO!W&Xy~P'vOz.gO!W&Xy~Oo0cOv.kO~P'vOs-sO!T%dO!U%cOg&Oy!W&Oy![&Oyz&Oy~P!/jO{(kO![.nO~O{(kO![.nO!m.oO~OV*SOa*TO%q*UO%uWO~Oh.tO!f.rOz$TX#[$TX%j$TXg$TX~Os$TX{$TX!W$TX![$TX~P$-bO%o.vO%p.vOs$UXz$UX{$UX#[$UX%j$UX!W$UXg$UX![$UX~O!h.xO~Oz.|O#[/OO%j.yOs&|X{&|X!W&|Xg&|X~Oa/RO~P$)zOh.tOs&}Xz&}X{&}X#[&}X%j&}X!W&}Xg&}X![&}X~Os/VO{$jO~Oo0cOv0qOz$ly!W$ly~P'vOo0cOv0qO{*gO!W&X!R~P'vOz/ZO!W&X!R~Og&RXs&RX!T&RX!U&RX!W&RX![&RXz&RX~P!/jOs-sO!T%dO!U%cOg&Qa!W&Qa![&Qaz&Qa~O{(kO![/^O~O!f.rOh$[as$[az$[a{$[a#[$[a%j$[a!W$[ag$[a![$[a~O!h/eO~O%o.vO%p.vOs$Uaz$Ua{$Ua#[$Ua%j$Ua!W$Uag$Ua![$Ua~O%j.yOs$Yaz$Ya{$Ya#[$Ya!W$Yag$Ya![$Ya~Os&|a{&|a!W&|ag&|a~P$)nOz/jOs&|a{&|a!W&|ag&|a~O!W/mO~Og/mO~O{/oO~O![/pO~Oo0cOv0qO{*gO!W&X!Z~P'vO{/sO~O%z/tO~P$-bOz/uO#[/OO%j.yOg'PX~Oz/uOg'PX~Og/wO~O!h/xO~O#[/OOs%Saz%Sa{%Sa%j%Sa!W%Sag%Sa![%Sa~O#[/OO%j.yOs%Waz%Wa{%Wa!W%Wag%Wa~Os&|i{&|i!W&|ig&|i~P$)nOz/zO#[/OO%j.yO!['Oa~Og'Pa~P$)nOz0SOg'Pa~Oa0UO!['Oi~P$)zOz0WO!['Oi~Oz0WO#[/OO%j.yO!['Oi~O#[/OO%j.yOg$biz$bi~O%z0ZO~P$-bO#[/OO%j.yOg%Vaz%Va~Og'Pi~P$)nO{0^O~Oa0UO!['Oq~P$)zOz0`O!['Oq~O#[/OO%j.yOz%Ui![%Ui~Oa0UO~P$)zOa0UO!['Oy~P$)zO#[/OO%j.yOg$ciz$ci~O#[/OO%j.yOz%Uq![%Uq~Oz+aO#g%ha%[%ha%_%ha%z%ha~P%SOV&OOo0cOv0qO~P'vOn0hO~Oo0hO~P'vO{0iO~Ot0jO~P!/jO&]&Z&j&h&i&g&f&d&e&c&b&`&a&_&^&[%u~",goto:"!=j'QPPPPPP'RP'Z*s+[+t,_,y-fP.SP'Z.r.r'ZPPP'Z2[PPPPPP2[5PPP5PP7b7k=sPP=v>h>kPP'Z'ZPP>zPP'Z'ZPP'Z'Z'Z'Z'Z?O?w'ZP?zP@QDXGuGyPG|HWH['ZPPPH_Hk'RP'R'RP'RP'RP'RP'RP'R'R'RP'RPP'RPP'RP'RPHqH}IVPI^IdPI^PI^I^PPPI^PKrPK{LVL]KrPI^LfPI^PLmLsPLwM]MzNeLwLwNkNxLwLwLwLw! ^! d! g! l! o! y!!P!!]!!o!!u!#P!#V!#s!#y!$P!$Z!$a!$g!$y!%T!%Z!%a!%k!%q!%w!%}!&T!&Z!&e!&k!&u!&{!'U!'[!'k!'s!'}!(UPPPPPPPPPPP!([!(_!(e!(n!(x!)TPPPPPPPPPPPP!-u!/Z!3^!6oPP!6w!7W!7a!8Y!8P!8c!8i!8l!8o!8r!8z!9jPPPPPPPPPPPPPPPPP!9m!9q!9wP!:]!:a!:m!:v!;S!;j!;m!;p!;v!;|!<S!<VP!<_!<h!=d!=g]eOn#g$j)t,P'}`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r{!cQ#c#p$R$d$p%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g}!dQ#c#p$R$d$p$u%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!P!eQ#c#p$R$d$p$u$v%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!R!fQ#c#p$R$d$p$u$v$w%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!T!gQ#c#p$R$d$p$u$v$w$x%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!V!hQ#c#p$R$d$p$u$v$w$x$y%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!Z!hQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g'}TOTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r&eVOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0n0r%oXOYZ[dnrxy}!P!Q!U!i!k#[#d#g#y#{#}$Q$h$j$}%S%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/V/Z0i0j0kQ#vqQ/[.kR0o0q't`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rh#jhz{$W$Z&l&q)S)X+f+g-RW#rq&].k0qQ$]|Q$a!OQ$n!VQ$o!WW$|!i'm*d,gS&[#s#tQ'S$iQ(s&UQ)U&nU)Y&s)Z+jW)a&w+m-T-{Q*Q']W*R'_,`-h.TQ+l)`S,_*S*TQ-Q+eQ-_,TQ-c,WQ.R-al.W-l.^._.a.z.|/R/j/o/t/y0U0Z0^Q/S.`Q/a.tQ/l/OU0P/u0S0[X0V/z0W0_0`R&Z#r!_!wYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZR%^!vQ!{YQ%x#[Q&d#}Q&g$QR,{+YT.j-s/s!Y!jQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v0gQ&X#kQ'c$oR*^'dR'l$|Q%V!mR/_.r'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rS#a_#b!P.[-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rT#a_#bT#^^#_R(o%xa(l%x(n(o+`,{-y-z.oT+[(k+]R-z,{Q$PsQ+l)aQ,^*RR-e,_X#}s$O$P&fQ&y$aQ'a$nQ'd$oR)s'SQ)b&wV-S+m-T-{ZgOn$j)t,PXkOn)t,PQ$k!TQ&z$bQ&{$cQ'^$mQ'b$oQ)q'RQ)x'WQ){'XQ)|'YQ*Z'`S*]'c'dQ+s)gQ+u)hQ+v)iQ+z)oS+|)r*[Q,Q)vQ,R)wS,S)y)zQ,d*^Q-V+rQ-W+tQ-Y+{S-Z+},OQ-`,UQ-b,VQ-|-XQ.O-[Q.P-^Q.Q-_Q.p-}Q.q.RQ/W.dR/r/XWkOn)t,PR#mjQ'`$nS)r'S'aR,O)sQ,]*RR-f,^Q*['`Q+})rR-[,OZiOjn)t,PQ'f$pR*`'gT-j,e-ku.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^t.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^Q/S.`X0V/z0W0_0`!P.Z-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`Q.w.YR/f.xg.z.].{/b/i/n/|0O0Q0]0a0bu.b-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^X.u.W.b/a0PR/c.tV0R/u0S0[R/X.dQnOS#on,PR,P)tQ&^#uR(x&^S%m#R#wS(_%m(bT(b%p&`Q%a!yQ%h!}W(P%a%h(U(YQ(U%eR(Y%jQ&i$RR)O&iQ(e%qQ*{(`T+R(e*{Q'n%OR*e'nS'q%R%SY*i'q*j,m-q.hU*j'r's'tU,m*k*l*mS-q,n,oR.h-rQ#Y]R%t#YQ#_^R%y#_Q(h%vS+W(h+XR+X(iQ+](kR,|+]Q#b_R%{#bQ#ebQ%}#cW&Q#e%}({+bQ({&cR+b0gQ$OsS&e$O&fR&f$PQ&v$_R)_&vQ&V#jR(t&VQ&m$VS)T&m+hR+h)UQ$Z{R&p$ZQ&t$]R)[&tQ+n)bR-U+nQ#hfR&S#hQ)f&zR+q)fQ&}$dS)m&})nR)n'OQ'V$kR)u'VQ'[$lS*P'[,ZR,Z*QQ,a*VR-i,aWjOn)t,PR#ljQ-k,eR.U-kd.{.]/b/i/n/|0O0Q0]0a0bR/h.{U.s.W/a0PR/`.sQ/{/nS0X/{0YR0Y/|S/v/b/cR0T/vQ.}.]R/k.}R!ZPXmOn)t,PWlOn)t,PR'T$jYfOn$j)t,PR&R#g[sOn#g$j)t,PR&d#}&dQOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0n0rQ!nTQ#caQ#poU$Rt%c(SS$d!R$gQ$p!XQ$u!cQ$v!dQ$w!eQ$x!fQ$y!gQ$z!hQ%e!zQ%j#OQ%p#SQ%q#TQ&`#xQ'O$eQ'g$qQ(q&OU(|&h(}+cW)j&|)l+x+yQ*o'|Q*x(]Q+w)kQ,v+QR0g0lQ!yYQ!}ZQ$b!PQ$c!QQ%R!kQ't%S^'{%`%g(O(W*q*t*v^*f'p*h,k,l-p.g/ZQ*l'rQ*m'sQ+t)gQ,j*gQ,n*kQ-n,hQ-o,iQ-r,oQ.e-mR/Y.f[bOn#g$j)t,P!^!vYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZQ#R[Q#fdS#wrxQ$UyW$_}$Q'P)pS$l!U$hW${!i'm*d,gS%v#[+Y`&P#d%|(p(r(z+a-O0kQ&a#yQ&b#{Q&c#}Q'j$}Q'z%^W([%l(^*y*}Q(`%nQ(i%wQ(v&ZS(y&_0iQ)P&jQ)Q&kU)]&u)^+kQ)d&xQ)y'WY)}'Z*O,X,Y-dQ*b'lS*n'w0jW+P(d*z,s,wW+T(g+V,y,zQ+p)eQ,U)zQ,c*YQ,x+UQ-P+dQ-e,]Q-v,uQ.S-fR/q/VhUOn#d#g$j%|&_'w(p(r)t,P%U!uYZ[drxy}!P!Q!U!i!k#[#y#{#}$Q$h$}%S%^%`%g%l%n%w&Z&j&k&u&x'P'W'Z'l'm'p'r's(O(W(^(d(g(z)^)e)g)p)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/V/Z0i0j0kQ#qpW%W!o!s0d0nQ%X!pQ%Y!qQ%[!tQ%f0cS'v%Z0hQ'x0eQ'y0fQ,p*rQ-u,qS.i-s/sR0p0rU#uq.k0qR(w&][cOn#g$j)t,PZ!xY#[#}$Q+YQ#W[Q#zrR$TxQ%b!yQ%i!}Q%o#RQ'j${Q(V%eQ(Z%jQ(c%pQ(f%qQ*|(`Q,f*bQ-t,pQ.m-uR/].lQ$StQ(R%cR*s(SQ.l-sR/}/sR#QZR#V[R%Q!iQ%O!iV*c'm*d,g!Z!lQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v0gR%T!kT#]^#_Q%x#[R,{+YQ(m%xS+_(n(oQ,}+`Q-x,{S.n-y-zR/^.oT+Z(k+]Q$`}Q&g$QQ)o'PR+{)pQ$XzQ)W&qR+i)XQ$XzQ&o$WQ)W&qR+i)XQ#khW$Vz$W&q)XQ$[{Q&r$ZZ)R&l)S+f+g-RR$^|R)c&wXlOn)t,PQ$f!RR'Q$gQ$m!UR'R$hR*X'_Q*V'_V-g,`-h.TQ.d-lQ/P.^R/Q._U.]-l.^._Q/U.aQ/b.tQ/g.zU/i.|/j/yQ/n/RQ/|/oQ0O/tU0Q/u0S0[Q0]0UQ0a0ZR0b0^R/T.`R/d.t",nodeNames:"⚠ print Escape { Comment Script AssignStatement * BinaryExpression BitOp BitOp BitOp BitOp ArithOp ArithOp @ ArithOp ** UnaryExpression ArithOp BitOp AwaitExpression await ) ( ParenthesizedExpression BinaryExpression or and CompareOp in not is UnaryExpression ConditionalExpression if else LambdaExpression lambda ParamList VariableName AssignOp , : NamedExpression AssignOp YieldExpression yield from TupleExpression ComprehensionExpression async for LambdaExpression ] [ ArrayExpression ArrayComprehensionExpression } { DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression CallExpression ArgList AssignOp MemberExpression . PropertyName Number String FormatString FormatReplacement FormatSelfDoc FormatConversion FormatSpec FormatReplacement FormatSelfDoc ContinuedString Ellipsis None Boolean TypeDef AssignOp UpdateStatement UpdateOp ExpressionStatement DeleteStatement del PassStatement pass BreakStatement break ContinueStatement continue ReturnStatement return YieldStatement PrintStatement RaiseStatement raise ImportStatement import as ScopeStatement global nonlocal AssertStatement assert TypeDefinition type TypeParamList TypeParam StatementGroup ; IfStatement Body elif WhileStatement while ForStatement TryStatement try except finally WithStatement with FunctionDefinition def ParamList AssignOp TypeDef ClassDefinition class DecoratedStatement Decorator At MatchStatement match MatchBody MatchClause case CapturePattern LiteralPattern ArithOp ArithOp AsPattern OrPattern LogicOp AttributePattern SequencePattern MappingPattern StarPattern ClassPattern PatternArgList KeywordPattern KeywordPattern Guard",maxTerm:277,context:Kt,nodeProps:[["isolate",-5,4,71,72,73,77,""],["group",-15,6,85,87,88,90,92,94,96,98,99,100,102,105,108,110,"Statement Statement",-22,8,18,21,25,40,49,50,56,57,60,61,62,63,64,67,70,71,72,79,80,81,82,"Expression",-10,114,116,119,121,122,126,128,133,135,138,"Statement",-9,143,144,147,148,150,151,152,153,154,"Pattern"],["openedBy",23,"(",54,"[",58,"{"],["closedBy",24,")",55,"]",59,"}"]],propSources:[si],skippedNodes:[0,4],repeatNodeCount:34,tokenData:"!2|~R!`OX%TXY%oY[%T[]%o]p%Tpq%oqr'ars)Yst*xtu%Tuv,dvw-hwx.Uxy/tyz0[z{0r{|2S|}2p}!O3W!O!P4_!P!Q:Z!Q!R;k!R![>_![!]Do!]!^Es!^!_FZ!_!`Gk!`!aHX!a!b%T!b!cIf!c!dJU!d!eK^!e!hJU!h!i!#f!i!tJU!t!u!,|!u!wJU!w!x!.t!x!}JU!}#O!0S#O#P&o#P#Q!0j#Q#R!1Q#R#SJU#S#T%T#T#UJU#U#VK^#V#YJU#Y#Z!#f#Z#fJU#f#g!,|#g#iJU#i#j!.t#j#oJU#o#p!1n#p#q!1s#q#r!2a#r#s!2f#s$g%T$g;'SJU;'S;=`KW<%lOJU`%YT&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T`%lP;=`<%l%To%v]&n`%c_OX%TXY%oY[%T[]%o]p%Tpq%oq#O%T#O#P&o#P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To&tX&n`OY%TYZ%oZ]%T]^%o^#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc'f[&n`O!_%T!_!`([!`#T%T#T#U(r#U#f%T#f#g(r#g#h(r#h#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(cTmR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(yT!mR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk)aV&n`&[ZOr%Trs)vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk){V&n`Or%Trs*bs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk*iT&n`&^ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To+PZS_&n`OY*xYZ%TZ]*x]^%T^#o*x#o#p+r#p#q*x#q#r+r#r;'S*x;'S;=`,^<%lO*x_+wTS_OY+rZ]+r^;'S+r;'S;=`,W<%lO+r_,ZP;=`<%l+ro,aP;=`<%l*xj,kV%rQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-XT!xY&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-oV%lQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.]V&n`&ZZOw%Twx.rx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.wV&n`Ow%Twx/^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/eT&n`&]ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/{ThZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc0cTgR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk0yXVZ&n`Oz%Tz{1f{!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk1mVaR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk2ZV%oZ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc2wTzR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To3_W%pZ&n`O!_%T!_!`-Q!`!a3w!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Td4OT&{S&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk4fX!fQ&n`O!O%T!O!P5R!P!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5WV&n`O!O%T!O!P5m!P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5tT!rZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti6[a!hX&n`O!Q%T!Q![6T![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S6T#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti7fZ&n`O{%T{|8X|}%T}!O8X!O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8^V&n`O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8z]!hX&n`O!Q%T!Q![8s![!l%T!l!m9s!m#R%T#R#S8s#S#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti9zT!hX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk:bX%qR&n`O!P%T!P!Q:}!Q!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj;UV%sQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti;ro!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!d%T!d!e?q!e!g%T!g!h7a!h!l%T!l!m9s!m!q%T!q!rA]!r!z%T!z!{Bq!{#R%T#R#S>_#S#U%T#U#V?q#V#X%T#X#Y7a#Y#^%T#^#_9s#_#c%T#c#dA]#d#l%T#l#mBq#m#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti=xV&n`O!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti>fc!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S>_#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti?vY&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti@mY!hX&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiAbX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBUX!hX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBv]&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiCv]!hX&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToDvV{_&n`O!_%T!_!`E]!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TcEdT%{R&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkEzT#gZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkFbXmR&n`O!^%T!^!_F}!_!`([!`!a([!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjGUV%mQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkGrV%zZ&n`O!_%T!_!`([!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkH`WmR&n`O!_%T!_!`([!`!aHx!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjIPV%nQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkIoV_Q#}P&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToJ_]&n`&YS%uZO!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoKZP;=`<%lJUoKge&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!tJU!t!uLx!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#gLx#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoMRa&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUkN_V&n`&`ZOr%TrsNts#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkNyV&n`Or%Trs! `s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! gT&n`&bZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! }V&n`&_ZOw%Twx!!dx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!!iV&n`Ow%Twx!#Ox#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!#VT&n`&aZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!#oe&n`&YS%uZOr%Trs!%Qsw%Twx!&px!Q%T!Q![JU![!c%T!c!tJU!t!u!(`!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#g!(`#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!%XV&n`&dZOr%Trs!%ns#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!%sV&n`Or%Trs!&Ys#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&aT&n`&fZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&wV&n`&cZOw%Twx!'^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!'cV&n`Ow%Twx!'xx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!(PT&n`&eZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!(ia&n`&YS%uZOr%Trs!)nsw%Twx!+^x!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!)uV&n`&hZOr%Trs!*[s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*aV&n`Or%Trs!*vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*}T&n`&jZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!+eV&n`&gZOw%Twx!+zx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,PV&n`Ow%Twx!,fx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,mT&n`&iZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!-Vi&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!dJU!d!eLx!e!hJU!h!i!(`!i!}JU!}#R%T#R#SJU#S#T%T#T#UJU#U#VLx#V#YJU#Y#Z!(`#Z#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUo!.}a&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!0ZT!XZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc!0qT!WR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj!1XV%kQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!1sO!]~k!1zV%jR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!2fO![~i!2mT%tX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T",tokenizers:[ei,Bt,Jt,ti,0,1,2,3,4],topRules:{Script:[0,5]},specialized:[{term:221,get:s=>ni[s]||-1}],tokenPrec:7668}),he=new Ve,Te=new Set(["Script","Body","FunctionDefinition","ClassDefinition","LambdaExpression","ForStatement","MatchClause"]);function z(s){return(e,t,i)=>{if(i)return!1;let n=e.node.getChild("VariableName");return n&&t(n,s),!0}}const ri={FunctionDefinition:z("function"),ClassDefinition:z("class"),ForStatement(s,e,t){if(t){for(let i=s.node.firstChild;i;i=i.nextSibling)if(i.name=="VariableName")e(i,"variable");else if(i.name=="in")break}},ImportStatement(s,e){var t,i;let{node:n}=s,r=((t=n.firstChild)===null||t===void 0?void 0:t.name)=="from";for(let a=n.getChild("import");a;a=a.nextSibling)a.name=="VariableName"&&((i=a.nextSibling)===null||i===void 0?void 0:i.name)!="as"&&e(a,r?"variable":"namespace")},AssignStatement(s,e){for(let t=s.node.firstChild;t;t=t.nextSibling)if(t.name=="VariableName")e(t,"variable");else if(t.name==":"||t.name=="AssignOp")break},ParamList(s,e){for(let t=null,i=s.node.firstChild;i;i=i.nextSibling)i.name=="VariableName"&&(!t||!/\*|AssignOp/.test(t.name))&&e(i,"variable"),t=i},CapturePattern:z("variable"),AsPattern:z("variable"),__proto__:null};function ke(s,e){let t=he.get(e);if(t)return t;let i=[],n=!0;function r(a,O){let o=s.sliceString(a.from,a.to);i.push({label:o,type:O})}return e.cursor(pe.IncludeAnonymous).iterate(a=>{if(a.name){let O=ri[a.name];if(O&&O(a,r,n)||!n&&Te.has(a.name))return!1;n=!1}else if(a.to-a.from>8192){for(let O of ke(s,a.node))i.push(O);return!1}}),he.set(e,i),i}const ce=/^[\w\xa1-\uffff][\w\d\xa1-\uffff]*$/,Pe=["String","FormatString","Comment","PropertyName"];function Oi(s){let e=Ue(s.state).resolveInner(s.pos,-1);if(Pe.indexOf(e.name)>-1)return null;let t=e.name=="VariableName"||e.to-e.from<20&&ce.test(s.state.sliceDoc(e.from,e.to));if(!t&&!s.explicit)return null;let i=[];for(let n=e;n;n=n.parent)Te.has(n.name)&&(i=i.concat(ke(s.state.doc,n)));return{options:i,from:t?e.from:s.pos,validFor:ce}}const oi=["__annotations__","__builtins__","__debug__","__doc__","__import__","__name__","__loader__","__package__","__spec__","False","None","True"].map(s=>({label:s,type:"constant"})).concat(["ArithmeticError","AssertionError","AttributeError","BaseException","BlockingIOError","BrokenPipeError","BufferError","BytesWarning","ChildProcessError","ConnectionAbortedError","ConnectionError","ConnectionRefusedError","ConnectionResetError","DeprecationWarning","EOFError","Ellipsis","EncodingWarning","EnvironmentError","Exception","FileExistsError","FileNotFoundError","FloatingPointError","FutureWarning","GeneratorExit","IOError","ImportError","ImportWarning","IndentationError","IndexError","InterruptedError","IsADirectoryError","KeyError","KeyboardInterrupt","LookupError","MemoryError","ModuleNotFoundError","NameError","NotADirectoryError","NotImplemented","NotImplementedError","OSError","OverflowError","PendingDeprecationWarning","PermissionError","ProcessLookupError","RecursionError","ReferenceError","ResourceWarning","RuntimeError","RuntimeWarning","StopAsyncIteration","StopIteration","SyntaxError","SyntaxWarning","SystemError","SystemExit","TabError","TimeoutError","TypeError","UnboundLocalError","UnicodeDecodeError","UnicodeEncodeError","UnicodeError","UnicodeTranslateError","UnicodeWarning","UserWarning","ValueError","Warning","ZeroDivisionError"].map(s=>({label:s,type:"type"}))).concat(["bool","bytearray","bytes","classmethod","complex","float","frozenset","int","list","map","memoryview","object","range","set","staticmethod","str","super","tuple","type"].map(s=>({label:s,type:"class"}))).concat(["abs","aiter","all","anext","any","ascii","bin","breakpoint","callable","chr","compile","delattr","dict","dir","divmod","enumerate","eval","exec","exit","filter","format","getattr","globals","hasattr","hash","help","hex","id","input","isinstance","issubclass","iter","len","license","locals","max","min","next","oct","open","ord","pow","print","property","quit","repr","reversed","round","setattr","slice","sorted","sum","vars","zip"].map(s=>({label:s,type:"function"}))),li=[_("def ${name}(${params}):\n	${}",{label:"def",detail:"function",type:"keyword"}),_("for ${name} in ${collection}:\n	${}",{label:"for",detail:"loop",type:"keyword"}),_("while ${}:\n	${}",{label:"while",detail:"loop",type:"keyword"}),_("try:\n	${}\nexcept ${error}:\n	${}",{label:"try",detail:"/ except block",type:"keyword"}),_(`if \${}:
	
`,{label:"if",detail:"block",type:"keyword"}),_("if ${}:\n	${}\nelse:\n	${}",{label:"if",detail:"/ else block",type:"keyword"}),_("class ${name}:\n	def __init__(self, ${params}):\n			${}",{label:"class",detail:"definition",type:"keyword"}),_("import ${module}",{label:"import",detail:"statement",type:"keyword"}),_("from ${module} import ${names}",{label:"from",detail:"import",type:"keyword"})],hi=Ee(Pe,Ge(oi.concat(li)));function Y(s){let{node:e,pos:t}=s,i=s.lineIndent(t,-1),n=null;for(;;){let r=e.childBefore(t);if(r)if(r.name=="Comment")t=r.from;else if(r.name=="Body"||r.name=="MatchBody")s.baseIndentFor(r)+s.unit<=i&&(n=r),e=r;else if(r.name=="MatchClause")e=r;else if(r.type.is("Statement"))e=r;else break;else break}return n}function I(s,e){let t=s.baseIndentFor(e),i=s.lineAt(s.pos,-1),n=i.from+i.text.length;return/^\s*($|#)/.test(i.text)&&s.node.to<n+100&&!/\S/.test(s.state.sliceDoc(n,s.node.to))&&s.lineIndent(s.pos,-1)<=t||/^\s*(else:|elif |except |finally:|case\s+[^=:]+:)/.test(s.textAfter)&&s.lineIndent(s.pos,-1)>t?null:t+s.unit}const D=Xe.define({name:"python",parser:ai.configure({props:[We.add({Body:s=>{var e;let t=/^\s*(#|$)/.test(s.textAfter)&&Y(s)||s.node;return(e=I(s,t))!==null&&e!==void 0?e:s.continue()},MatchBody:s=>{var e;let t=Y(s);return(e=I(s,t||s.node))!==null&&e!==void 0?e:s.continue()},IfStatement:s=>/^\s*(else:|elif )/.test(s.textAfter)?s.baseIndent:s.continue(),"ForStatement WhileStatement":s=>/^\s*else:/.test(s.textAfter)?s.baseIndent:s.continue(),TryStatement:s=>/^\s*(except[ :]|finally:|else:)/.test(s.textAfter)?s.baseIndent:s.continue(),MatchStatement:s=>/^\s*case /.test(s.textAfter)?s.baseIndent+s.unit:s.continue(),"TupleExpression ComprehensionExpression ParamList ArgList ParenthesizedExpression":Z({closing:")"}),"DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression":Z({closing:"}"}),"ArrayExpression ArrayComprehensionExpression":Z({closing:"]"}),MemberExpression:s=>s.baseIndent+s.unit,"String FormatString":()=>null,Script:s=>{var e;let t=Y(s);return(e=t&&I(s,t))!==null&&e!==void 0?e:s.continue()}}),we.add({"ArrayExpression DictionaryExpression SetExpression TupleExpression":je,Body:(s,e)=>({from:s.from+1,to:s.to-(s.to==e.doc.length?0:1)}),"String FormatString":(s,e)=>({from:e.doc.lineAt(s.from).to,to:s.to})})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""'],stringPrefixes:["f","fr","rf","r","u","b","br","rb","F","FR","RF","R","U","B","BR","RB"]},commentTokens:{line:"#"},indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:|case\s+[^:]*:?)$/}});function ci(){return new Re(D,[D.data.of({autocomplete:Oi}),D.data.of({autocomplete:hi})])}function di(){return`
import sys
import json
import math
import ast as _ast

# ══════════════════════════════════════
# PyTutor Tracer
# ══════════════════════════════════════

_snapshots = []
_stdout_lines = []
_call_stack = []  # list of frame dicts
_heap_map = {}    # id(obj) -> heap_id string
_heap_counter = 0
_step_counter = 0
_MAX_SNAPSHOTS = 5000
_MAX_SEQ_PROPS = 100
_MAX_DICT_PROPS = 50

# Set of namespace keys present BEFORE user code runs.
# Populated in run_traced(); used to filter out builtins and tracer internals.
_baseline_keys = set()

# Comprehension info populated by AST scan before execution.
# Maps line number -> dict with target_vars, display_name, elt_code, etc.
_comp_info = {}

# Tracks the currently active synthetic comprehension frame (or None).
_active_comp = None

# Lines that are continuations of multi-line simple statements.
# These produce no visible variable changes, so we skip snapshots for them.
_continuation_lines = set()

# Modules allowed for import
_SAFE_MODULES = frozenset({
    'math', 'random', 'string', 'collections', 'itertools',
    'functools', 'operator', 'typing', 'dataclasses', 'enum',
    'json', 're', 'datetime', 'copy', 'heapq', 'bisect',
    'statistics', 'fractions', 'decimal', 'abc', 'textwrap',
})

# ── Print capture ──

_original_print = print

def _capture_print(*args, **kwargs):
    sep = kwargs.get('sep', ' ')
    text = sep.join(str(a) for a in args)
    _stdout_lines.append(text)

# ── Comprehension detection (Python 3.12+ inlined comprehensions) ──

def _scan_comprehensions(source_code):
    """Pre-scan source with ast to find comprehension lines and their iteration variables."""
    global _comp_info
    _comp_info = {}
    try:
        tree = _ast.parse(source_code)
    except SyntaxError:
        return

    _type_names = {
        'ListComp': 'list comprehension',
        'SetComp': 'set comprehension',
        'DictComp': 'dict comprehension',
        'GeneratorExp': 'generator expression',
    }

    # First pass: collect comprehension info
    for node in _ast.walk(tree):
        type_name = type(node).__name__
        if type_name in _type_names:
            target_vars = set()
            for gen in node.generators:
                for n in _ast.walk(gen.target):
                    if isinstance(n, _ast.Name):
                        target_vars.add(n.id)

            # Compile element expression for eval during tracing
            elt_code = None
            elt_label = None
            try:
                if type_name == 'DictComp':
                    key_src = _ast.unparse(node.key)
                    val_src = _ast.unparse(node.value)
                    elt_label = key_src + ': ' + val_src
                    elt_code = compile('(' + key_src + ', ' + val_src + ')', '<comp>', 'eval')
                elif type_name != 'GeneratorExp':
                    elt_label = _ast.unparse(node.elt)
                    elt_code = compile(elt_label, '<comp>', 'eval')
            except Exception:
                pass

            # Compile filter conditions (if clauses)
            filter_codes = []
            filter_texts = []
            filter_ranges = []
            gen = node.generators[0]
            for if_clause in gen.ifs:
                try:
                    filter_codes.append(compile(_ast.unparse(if_clause), '<comp>', 'eval'))
                    filter_texts.append(_ast.unparse(if_clause))
                    filter_ranges.append((if_clause.col_offset, getattr(if_clause, 'end_col_offset', None)))
                except Exception:
                    pass

            # Column ranges for sub-line highlighting of comprehension phases
            iter_range = (gen.target.col_offset, getattr(gen.iter, 'end_col_offset', None))
            if type_name == 'DictComp':
                elt_range = (node.key.col_offset, getattr(node.value, 'end_col_offset', None))
            elif hasattr(node, 'elt'):
                elt_range = (node.elt.col_offset, getattr(node.elt, 'end_col_offset', None))
            else:
                elt_range = None

            _comp_info[node.lineno] = {
                'target_vars': target_vars,
                'display_name': _type_names[type_name],
                'comp_type': type_name,
                'result_var': None,
                'elt_code': elt_code,
                'elt_label': elt_label,
                'filter_codes': filter_codes,
                'filter_texts': filter_texts,
                'filter_ranges': filter_ranges,
                'iter_range': iter_range,
                'elt_range': elt_range,
            }

    # Second pass: find assignment targets for comprehensions
    # e.g. squares = [x*x for x in nums] -> result_var = 'squares'
    for node in _ast.walk(tree):
        if isinstance(node, _ast.Assign) and len(node.targets) == 1:
            target = node.targets[0]
            value = node.value
            if isinstance(target, _ast.Name) and value.lineno in _comp_info:
                _comp_info[value.lineno]['result_var'] = target.id

# ── Multi-line statement detection ──

def _scan_continuation_lines(source_code):
    """Find continuation lines of multi-line simple statements (no visible effect)."""
    global _continuation_lines
    _continuation_lines = set()
    try:
        tree = _ast.parse(source_code)
    except SyntaxError:
        return

    # Collect all lines that start a statement
    _start_lines = set()
    for node in _ast.walk(tree):
        if isinstance(node, _ast.stmt):
            _start_lines.add(node.lineno)

    # Lines inside a multi-line simple statement that aren't themselves
    # statement starts are continuation lines — skip their snapshots.
    _SIMPLE = (_ast.Assign, _ast.AugAssign, _ast.AnnAssign,
               _ast.Expr, _ast.Return, _ast.Assert,
               _ast.Delete, _ast.Raise)
    for node in _ast.walk(tree):
        if isinstance(node, _SIMPLE):
            end = getattr(node, 'end_lineno', None) or node.lineno
            if end > node.lineno:
                for ln in range(node.lineno + 1, end + 1):
                    if ln not in _start_lines:
                        _continuation_lines.add(ln)

# ── Heap serialization ──

def _get_heap_id(obj):
    global _heap_counter
    obj_id = id(obj)
    if obj_id in _heap_map:
        return _heap_map[obj_id]
    _heap_counter += 1
    heap_id = str(_heap_counter)
    _heap_map[obj_id] = heap_id
    return heap_id

def _serialize_value(val, heap_objects, visited):
    """Serialize a Python value to the snapshot PrimitiveValue or HeapRef format."""
    if val is None:
        return {"type": "null", "value": None}
    if val is True:
        return {"type": "boolean", "value": True}
    if val is False:
        return {"type": "boolean", "value": False}
    if isinstance(val, bool):
        # Should not reach here, but safety check
        return {"type": "boolean", "value": val}
    if isinstance(val, int):
        return {"type": "number", "value": val}
    if isinstance(val, float):
        if math.isinf(val):
            return {"type": "number", "value": "Infinity" if val > 0 else "-Infinity"}
        if math.isnan(val):
            return {"type": "number", "value": "NaN"}
        return {"type": "number", "value": val}
    if isinstance(val, str):
        return {"type": "string", "value": val}
    if isinstance(val, complex):
        return {"type": "string", "value": str(val)}

    # Heap objects: list, dict, tuple, set, function, class instances
    obj_id = id(val)
    heap_id = _get_heap_id(val)
    if obj_id not in visited and heap_id not in visited:
        visited.add(obj_id)
        visited.add(heap_id)
        heap_obj = _serialize_heap_object(val, heap_id, heap_objects, visited)
        heap_objects.append(heap_obj)
    return {"type": "ref", "heapId": heap_id}

def _serialize_heap_object(obj, heap_id, heap_objects, visited):
    """Serialize a Python object to a HeapObject dict."""
    properties = []
    object_type = "object"
    label = ""

    if isinstance(obj, list):
        object_type = "list"
        for i in range(min(len(obj), _MAX_SEQ_PROPS)):
            properties.append({
                "key": str(i),
                "value": _serialize_value(obj[i], heap_objects, visited)
            })
    elif isinstance(obj, tuple):
        object_type = "tuple"
        for i in range(min(len(obj), _MAX_SEQ_PROPS)):
            properties.append({
                "key": str(i),
                "value": _serialize_value(obj[i], heap_objects, visited)
            })
    elif isinstance(obj, dict):
        object_type = "dict"
        count = 0
        for k, v in obj.items():
            if count >= _MAX_DICT_PROPS:
                break
            properties.append({
                "key": str(k),
                "value": _serialize_value(v, heap_objects, visited)
            })
            count += 1
    elif isinstance(obj, (set, frozenset)):
        object_type = "set"
        count = 0
        for item in obj:
            if count >= _MAX_SEQ_PROPS:
                break
            properties.append({
                "key": str(count),
                "value": _serialize_value(item, heap_objects, visited)
            })
            count += 1
    elif callable(obj):
        object_type = "function"
        label = getattr(obj, '__name__', '') or getattr(obj, '__qualname__', '')
    elif hasattr(obj, '__dict__'):
        # Class instance
        object_type = "object"
        label = type(obj).__name__
        count = 0
        for k, v in obj.__dict__.items():
            if count >= _MAX_DICT_PROPS:
                break
            if not k.startswith('_'):
                properties.append({
                    "key": k,
                    "value": _serialize_value(v, heap_objects, visited)
                })
                count += 1

    result = {"id": heap_id, "objectType": object_type, "properties": properties}
    if label:
        result["label"] = label
    return result

# ── Call stack + snapshot building ──

def _capture_snapshot(line, current_locals, return_value=None, has_return=False, column_range=None, condition=None):
    """Capture a full execution snapshot at the given line."""
    global _step_counter

    if _step_counter >= _MAX_SNAPSHOTS:
        return

    heap_objects = []
    visited = set()

    # Build call stack with serialized variables
    stack = []
    for i, frame_info in enumerate(_call_stack):
        variables = []
        local_vars = current_locals if i == len(_call_stack) - 1 else frame_info.get("locals", {})

        for name in sorted(local_vars.keys()):
            # For the module frame, skip everything that was in the
            # namespace before user code started (builtins, tracer
            # internals, etc.). For function frames, f_locals only
            # contains the function's own locals so no filtering needed.
            if frame_info["name"] == "<module>" and name in _baseline_keys:
                continue
            if name.startswith('__') and name.endswith('__'):
                continue
            # Skip CPython internal positional args (e.g. .0 iterator in comprehensions)
            if name.startswith('.'):
                continue
            # When inside a synthetic comprehension frame, split variables:
            # comp frame shows only iteration vars, enclosing frame hides them
            if _active_comp:
                is_comp_frame = frame_info.get("_is_comp", False)
                is_target = name in _active_comp['target_vars']
                if is_comp_frame and not is_target:
                    continue
                if not is_comp_frame and is_target:
                    continue
            val = local_vars[name]
            serialized = _serialize_value(val, heap_objects, visited)
            variables.append({"name": name, "value": serialized})

        # Show the partial result and current element in the comprehension frame
        if _active_comp and frame_info.get("_is_comp") and not has_return:
            # Show the collection being built — uses a marker name so the UI
            # can render it distinctly (not as a regular variable)
            partial = _active_comp.get('partial_result')
            if partial is not None:
                partial_serialized = _serialize_value(partial, heap_objects, visited)
                variables.append({"name": "__comp_result__", "value": partial_serialized})

            elt = _active_comp.get('current_elt')
            if elt is not None:
                elt_label = _active_comp.get('elt_label', 'element')
                elt_serialized = _serialize_value(elt, heap_objects, visited)
                variables.append({"name": "\\u2192 " + elt_label, "value": elt_serialized})

        # Add return value display
        if has_return and i == len(_call_stack) - 1:
            ret_serialized = _serialize_value(return_value, heap_objects, visited)
            variables.append({"name": "return \\u21b5", "value": ret_serialized})

        frame_dict = {"name": frame_info["name"], "variables": variables}
        stack.append(frame_dict)

    snapshot = {
        "step": _step_counter,
        "line": line,
        "callStack": stack,
        "heap": heap_objects,
        "stdout": list(_stdout_lines),
    }
    if column_range and column_range[0] is not None and column_range[1] is not None:
        snapshot["columnRange"] = {"startCol": column_range[0], "endCol": column_range[1]}
    if condition:
        snapshot["condition"] = condition

    _snapshots.append(snapshot)
    _step_counter += 1

# ── Trace function ──

_SKIP_FRAME_NAMES = frozenset({
    '_capture_print', '_safe_import',
})

# Display name mapping for real comprehension frames (Python < 3.12).
# Python 3.12+ inlines comprehensions so these frame names no longer appear;
# synthetic frames are created instead via _comp_info from the AST scan.
_COMP_DISPLAY_NAMES = {
    '<listcomp>': 'list comprehension',
    '<dictcomp>': 'dict comprehension',
    '<setcomp>': 'set comprehension',
    '<genexpr>': 'generator expression',
}

def _pop_comp_frame(frame):
    """Pop the synthetic comprehension frame, capturing a return snapshot first."""
    global _active_comp
    comp_line = _active_comp.get('_line', frame.f_lineno)
    result_var = _active_comp.get('result_var')

    # Use our partial_result as the return value so the comp frame's
    # return snapshot shows the same collection that was building up.
    partial = _active_comp.get('partial_result')

    if partial is not None:
        _active_comp['current_elt'] = None

        # Bridge BEFORE the return snapshot so the real variable and
        # return value share the same heap ID in that snapshot.
        if id(partial) in _heap_map and result_var and result_var in frame.f_locals:
            real_obj = frame.f_locals[result_var]
            if id(real_obj) != id(partial):
                _heap_map[id(real_obj)] = _heap_map[id(partial)]

        # Sync enclosing frame locals so the return snapshot shows all variables
        if len(_call_stack) >= 2:
            _call_stack[-2]["locals"] = dict(frame.f_locals)
        _capture_snapshot(comp_line, frame.f_locals, return_value=partial, has_return=True)

        # Clean up synthetic entry — once partial is GC'd, CPython can
        # reuse its address for an unrelated object.
        if id(partial) in _heap_map:
            del _heap_map[id(partial)]

    _call_stack.pop()
    _active_comp = None

def _tracer(frame, event, arg):
    global _active_comp

    # Only trace user code
    if frame.f_code.co_filename != '<user_code>':
        return None

    fname = frame.f_code.co_name
    if fname in _SKIP_FRAME_NAMES:
        return None

    if _step_counter >= _MAX_SNAPSHOTS:
        return None

    if event == 'call':
        if fname == '<module>':
            _call_stack.append({"name": "<module>", "locals": {}})
        else:
            display_name = _COMP_DISPLAY_NAMES.get(fname, fname)
            # Capture function parameters from f_locals at call time
            params = dict(frame.f_locals)
            _call_stack.append({"name": display_name, "locals": params})
            _capture_snapshot(frame.f_lineno, frame.f_locals)
        return _tracer

    elif event == 'line':
        line = frame.f_lineno
        comp = _comp_info.get(line)

        # Pop the synthetic comprehension frame when we leave its line
        # (whether moving to another comprehension or a regular line).
        if _active_comp and _active_comp.get('_line') != line:
            _pop_comp_frame(frame)

        if comp and _active_comp is None:
            # Entering a comprehension — push synthetic frame
            _active_comp = dict(comp)  # copy so we can add runtime state
            ct = comp.get('comp_type')
            _active_comp['partial_result'] = {} if ct == 'DictComp' else set() if ct == 'SetComp' else []
            _active_comp['current_elt'] = None
            _active_comp['_line'] = line
            _call_stack.append({
                "name": comp['display_name'],
                "locals": {},
                "_is_comp": True,
            })
            # Skip capture for the initial setup event (iteration var not set yet)
            return _tracer

        # If in a comprehension, emit phased snapshots for each iteration
        if _active_comp and _active_comp.get('elt_code'):
            iter_range = _active_comp.get('iter_range')
            elt_range = _active_comp.get('elt_range')
            filter_codes = _active_comp.get('filter_codes', [])
            filter_ranges = _active_comp.get('filter_ranges', [])
            filter_texts = _active_comp.get('filter_texts', [])

            # Clear previous element before showing new iteration
            _active_comp['current_elt'] = None

            # Update locals for both the comp frame and enclosing frame
            # (frame.f_locals is the real Python frame — the module scope —
            # since Python 3.12 inlines comprehensions)
            locals_copy = dict(frame.f_locals)
            if len(_call_stack) >= 2:
                _call_stack[-2]["locals"] = locals_copy
            if _call_stack:
                _call_stack[-1]["locals"] = locals_copy

            # Phase 1: Iteration snapshot — highlight the for clause
            _capture_snapshot(line, frame.f_locals, column_range=iter_range)

            # Phase 2: Filter evaluation (one snapshot per filter condition)
            passes_filter = True
            for i, fc in enumerate(filter_codes):
                try:
                    result = bool(eval(fc, frame.f_globals, frame.f_locals))
                except Exception:
                    result = False
                cond = {
                    "expression": filter_texts[i] if i < len(filter_texts) else "",
                    "result": result,
                    "line": line,
                }
                fr = filter_ranges[i] if i < len(filter_ranges) else None
                _capture_snapshot(line, frame.f_locals, column_range=fr, condition=cond)
                if not result:
                    passes_filter = False
                    break

            # Phase 3: Element evaluation (only if all filters passed)
            if passes_filter:
                try:
                    elt_val = eval(_active_comp['elt_code'], frame.f_globals, frame.f_locals)
                    pr = _active_comp['partial_result']
                    if isinstance(pr, dict):
                        pr[elt_val[0]] = elt_val[1]
                    elif isinstance(pr, set):
                        pr.add(elt_val)
                    else:
                        pr.append(elt_val)
                    _active_comp['current_elt'] = elt_val
                except Exception:
                    _active_comp['current_elt'] = None
                _capture_snapshot(line, frame.f_locals, column_range=elt_range)

            return _tracer

        # Skip continuation lines of multi-line statements (no visible changes)
        if line in _continuation_lines:
            return _tracer

        if _call_stack:
            # Update stored locals for the current frame
            _call_stack[-1]["locals"] = dict(frame.f_locals)
            _capture_snapshot(line, frame.f_locals)
        return _tracer

    elif event == 'return':
        # Clean up any active synthetic comprehension frame
        if _active_comp:
            _pop_comp_frame(frame)

        if _call_stack:
            if fname == '<module>':
                # Capture final state so stdout from the last line is visible
                _capture_snapshot(frame.f_lineno, frame.f_locals)
            else:
                _capture_snapshot(frame.f_lineno, frame.f_locals, return_value=arg, has_return=True)
            _call_stack.pop()
        return _tracer

    return _tracer

# ── Safe import ──

def _safe_import(name, *args, **kwargs):
    top_level = name.split('.')[0]
    if top_level not in _SAFE_MODULES:
        raise ImportError(f"Import of '{name}' is not allowed in PyTutor")
    return __builtins__.__import__(name, *args, **kwargs)

# ── Entry point ──

def run_traced(source_code):
    global _snapshots, _stdout_lines, _call_stack, _heap_map, _heap_counter, _step_counter, _baseline_keys, _active_comp, _continuation_lines
    _snapshots = []
    _stdout_lines = []
    _call_stack = []
    _heap_map = {}
    _heap_counter = 0
    _step_counter = 0
    _active_comp = None
    _continuation_lines = set()

    # Pre-scan source for comprehensions and multi-line statements
    _scan_comprehensions(source_code)
    _scan_continuation_lines(source_code)

    namespace = dict(__builtins__.__dict__) if hasattr(__builtins__, '__dict__') else dict(__builtins__)
    # Remove dangerous builtins
    for name in ('open', 'exec', 'eval', 'compile', 'exit', 'quit',
                 'breakpoint', 'help', 'input', '__import__'):
        namespace.pop(name, None)
    namespace['__import__'] = _safe_import
    namespace['print'] = _capture_print
    namespace['__name__'] = '__main__'

    # Snapshot the namespace keys BEFORE user code runs so we can
    # filter them out of the module-level variable display later.
    _baseline_keys = set(namespace.keys())

    code = compile(source_code, '<user_code>', 'exec')

    sys.settrace(_tracer)
    try:
        exec(code, namespace)
    except Exception as e:
        sys.settrace(None)
        # Extract line number from traceback
        import traceback
        tb = e.__traceback__
        err_line = None
        while tb is not None:
            if tb.tb_frame.f_code.co_filename == '<user_code>':
                err_line = tb.tb_lineno
            tb = tb.tb_next
        result = {"type": "error", "message": f"{type(e).__name__}: {str(e)}"}
        if err_line is not None:
            result["line"] = err_line
        return json.dumps(result)
    finally:
        sys.settrace(None)

    return json.dumps({"type": "result", "snapshots": _snapshots})
`}const de=1e4,pi=3e4;let m=null,v=null;const fi=di();function ui(){return new Promise((s,e)=>{const t=new Worker(new URL("/assets/worker-Cpl9zk_m.js",import.meta.url),{type:"module"});m=t;const i=setTimeout(()=>{t.terminate(),m=null,v=null,e(new Error("Python engine took too long to load. Please check your network connection and try again."))},pi);t.onmessage=n=>{n.data.type==="ready"?(clearTimeout(i),s()):n.data.type==="error"&&(clearTimeout(i),t.terminate(),m=null,v=null,e(new Error(n.data.message)))},t.onerror=n=>{clearTimeout(i),t.terminate(),m=null,v=null,e(new Error(n.message||"Failed to create Python worker."))},t.postMessage({type:"init"})})}async function ve(){if(m&&v){await v;return}v=ui(),await v}async function mi(s){try{await ve()}catch(e){return{type:"error",message:e instanceof Error?e.message:String(e)}}return new Promise(e=>{if(!m){e({type:"error",message:"Python engine not available."});return}const t=setTimeout(()=>{m?.terminate(),m=null,v=null,e({type:"error",message:`Execution timed out after ${de/1e3} seconds. Your code may contain an infinite loop.`})},de),i=n=>{n.data.type!=="ready"&&(clearTimeout(t),m.removeEventListener("message",i),e(n.data))};m.addEventListener("message",i),m.onerror=n=>{clearTimeout(t),m?.terminate(),m=null,v=null,e({type:"error",message:n.message||"An unknown error occurred in the Python worker."})},m.postMessage({type:"run",source:s,tracerCode:fi})})}ve().catch(()=>{});const Qi=[{title:"Variables & Types",slug:"variables-types",category:"Basics",language:"py",code:`x = 42
name = "hello"
is_valid = True
pi = 3.14
print(x)`},{title:"For Loop",slug:"for-loop",category:"Basics",language:"py",code:`total = 0
for i in range(5):
    total += i
print(total)`},{title:"While Loop",slug:"while-loop",category:"Basics",language:"py",code:`count = 0
while count < 3:
    print(count)
    count += 1`},{title:"Lists",slug:"lists",category:"Data Structures",language:"py",code:`nums = [1, 2, 3]
nums.append(4)
first = nums[0]
length = len(nums)
print(nums)`},{title:"Dictionaries",slug:"dictionaries",category:"Data Structures",language:"py",code:`person = {"name": "Alice", "age": 30}
person["city"] = "NYC"
name = person["name"]
print(name)`},{title:"Tuples & Sets",slug:"tuples-sets",category:"Data Structures",language:"py",code:`point = (3, 4)
x, y = point
colors = {"red", "green", "blue"}
colors.add("yellow")
print(x, y)`},{title:"Functions",slug:"functions",category:"Functions",language:"py",code:`def greet(name):
    message = "Hello, " + name
    return message

result = greet("Alice")
print(result)`},{title:"Recursion",slug:"recursion",category:"Functions",language:"py",code:`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

result = factorial(4)
print(result)`},{title:"Classes",slug:"classes",category:"Objects",language:"py",code:`class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return self.name + " says woof!"

rex = Dog("Rex", 5)
msg = rex.bark()
print(msg)`},{title:"Nested Data",slug:"nested-data",category:"Data Structures",language:"py",code:`students = [
    {"name": "Alice", "grades": [90, 85]},
    {"name": "Bob", "grades": [78, 92]},
]
top = students[0]
print(top["name"])`},{title:"List Comprehension",slug:"list-comprehension",category:"Data Structures",language:"py",code:`nums = [1, 2, 3, 4, 5]
squares = [x * x for x in nums]
evens = [x for x in nums if x % 2 == 0]
print(squares)
print(evens)`},{title:"Named Tuples",slug:"named-tuples",category:"Data Structures",language:"py",code:`from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p1 = Point(3, 4)
p2 = Point(1, 2)
dist_x = p1.x - p2.x
dist_y = p1.y - p2.y
print(p1, p2)`}],_i=[{pattern:/\bimport\s+os\b/,message:"This code imports the os module"},{pattern:/\bimport\s+sys\b/,message:"This code imports the sys module"},{pattern:/\bimport\s+subprocess\b/,message:"This code imports subprocess"},{pattern:/\bimport\s+socket\b/,message:"This code imports socket"},{pattern:/\bimport\s+shutil\b/,message:"This code imports shutil"},{pattern:/\bopen\s*\(/,message:"This code opens files"},{pattern:/\b__import__\s*\(/,message:"This code uses dynamic imports"},{pattern:/\beval\s*\(/,message:"This code uses eval()"},{pattern:/\bexec\s*\(/,message:"This code uses exec()"},{pattern:/\bcompile\s*\(/,message:"This code uses compile()"},{pattern:/\bglobals\s*\(\s*\)/,message:"This code accesses globals()"},{pattern:/\bgetattr\s*\(/,message:"This code uses getattr()"}];function gi(s){const e=[];for(const{pattern:t,message:i}of _i)t.test(s)&&e.push({level:"warning",message:i});return e}const Ti={id:"py",displayName:"Python",editorExtension:()=>ci(),execute:mi,examples:Qi,sandboxCode:`# Write your code below!
x = 1
print(x)`,analyzeCode:gi,heapTypeConfig:{list:{label:"List",variant:"info"},dict:{label:"Dict",variant:"warning"},tuple:{label:"Tuple",variant:"secondary"},set:{label:"Set",variant:"warning"},function:{label:"Function",variant:"dark"},object:{label:"Object",variant:"warning"},int:{label:"int",variant:"primary"},float:{label:"float",variant:"primary"},str:{label:"str",variant:"success"},bool:{label:"bool",variant:"warning"},NoneType:{label:"NoneType",variant:"secondary"}}};export{Ti as pyEngine};
