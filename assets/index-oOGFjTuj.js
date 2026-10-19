import{P as we,N as qe,a as $e,D as Re,b as M,T as R,I as _e,s as ze,t as h,L as Ee,c as Xe,i as We,d as A,f as je,e as Ue,g as Ne,h as Ge,j as Ae,k as Ve,l as g}from"./index-CaRqBAYk.js";var H={};class W{constructor(e,t,s,n,a,i,o,O,l,c=0,d){this.p=e,this.stack=t,this.state=s,this.reducePos=n,this.pos=a,this.score=i,this.buffer=o,this.bufferBase=O,this.curContext=l,this.lookAhead=c,this.parent=d}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(e,t,s=0){let n=e.parser.context;return new W(e,[],t,s,s,0,[],0,n?new K(n,n.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){var t;let s=e>>19,n=e&65535,{parser:a}=this.p,i=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),o=a.dynamicPrecedence(n);if(o&&(this.score+=o),s==0){this.pushState(a.getGoto(this.state,n,!0),this.reducePos),n<a.minRepeatTerm&&this.storeNode(n,this.reducePos,this.reducePos,i?8:4,!0),this.reduceContext(n,this.reducePos);return}let O=this.stack.length-(s-1)*3-(e&262144?6:0),l=O?this.stack[O-2]:this.p.ranges[0].from,c=this.reducePos-l;c>=2e3&&!(!((t=this.p.parser.nodeSet.types[n])===null||t===void 0)&&t.isAnonymous)&&(l==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=c):this.p.lastBigReductionSize<c&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=l,this.p.lastBigReductionSize=c));let d=O?this.stack[O-1]:0,p=this.bufferBase+this.buffer.length-d;if(n<a.minRepeatTerm||e&131072){let _=a.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(n,l,_,p+4,!0)}if(e&262144)this.state=this.stack[O];else{let _=this.stack[O-3];this.state=a.getGoto(_,n,!0)}for(;this.stack.length>O;)this.stack.pop();this.reduceContext(n,l)}storeNode(e,t,s,n=4,a=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let i=this,o=this.buffer.length;if(o==0&&i.parent&&(o=i.bufferBase-i.parent.bufferBase,i=i.parent),o>0&&i.buffer[o-4]==0&&i.buffer[o-1]>-1){if(t==s)return;if(i.buffer[o-2]>=t){i.buffer[o-2]=s;return}}}if(!a||this.pos==s)this.buffer.push(e,t,s,n);else{let i=this.buffer.length;if(i>0&&(this.buffer[i-4]!=0||this.buffer[i-1]<0)){let o=!1;for(let O=i;O>0&&this.buffer[O-2]>s;O-=4)if(this.buffer[O-1]>=0){o=!0;break}if(o)for(;i>0&&this.buffer[i-2]>s;)this.buffer[i]=this.buffer[i-4],this.buffer[i+1]=this.buffer[i-3],this.buffer[i+2]=this.buffer[i-2],this.buffer[i+3]=this.buffer[i-1],i-=4,n>4&&(n-=4)}this.buffer[i]=e,this.buffer[i+1]=t,this.buffer[i+2]=s,this.buffer[i+3]=n}}shift(e,t,s,n){if(e&131072)this.pushState(e&65535,this.pos);else if((e&262144)==0){let a=e,{parser:i}=this.p;this.pos=n;let o=i.stateFlag(a,1);!o&&(n>s||t<=i.maxNode)&&(this.reducePos=n),this.pushState(a,o?s:Math.min(s,this.reducePos)),this.shiftContext(t,s),t<=i.maxNode&&this.buffer.push(t,s,n,4)}else this.pos=n,this.shiftContext(t,s),t<=this.p.parser.maxNode&&this.buffer.push(t,s,n,4)}apply(e,t,s,n){e&65536?this.reduce(e):this.shift(e,t,s,n)}useNode(e,t){let s=this.p.reused.length-1;(s<0||this.p.reused[s]!=e)&&(this.p.reused.push(e),s++);let n=this.pos;this.reducePos=this.pos=n+e.length,this.pushState(t,n),this.buffer.push(s,n,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let e=this,t=e.buffer.length;for(;t>0&&e.buffer[t-2]>e.reducePos;)t-=4;let s=e.buffer.slice(t),n=e.bufferBase+t;for(;e&&n==e.bufferBase;)e=e.parent;return new W(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,s,n,this.curContext,this.lookAhead,e)}recoverByDelete(e,t){let s=e<=this.p.parser.maxNode;s&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,s?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new Ce(this);;){let s=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(s==0)return!1;if((s&65536)==0)return!0;t.reduce(s)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let n=[];for(let a=0,i;a<t.length;a+=2)(i=t[a+1])!=this.state&&this.p.parser.hasAction(i,e)&&n.push(t[a],i);if(this.stack.length<120)for(let a=0;n.length<8&&a<t.length;a+=2){let i=t[a+1];n.some((o,O)=>O&1&&o==i)||n.push(t[a],i)}t=n}let s=[];for(let n=0;n<t.length&&s.length<4;n+=2){let a=t[n+1];if(a==this.state)continue;let i=this.split();i.pushState(a,this.pos),i.storeNode(0,i.pos,i.pos,4,!0),i.shiftContext(t[n],this.pos),i.reducePos=this.pos,i.score-=200,s.push(i)}return s}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if((t&65536)==0)return!1;if(!e.validAction(this.state,t)){let s=t>>19,n=t&65535,a=this.stack.length-s*3;if(a<0||e.getGoto(this.stack[a],n,!1)<0){let i=this.findForcedReduction();if(i==null)return!1;t=i}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],s=(n,a)=>{if(!t.includes(n))return t.push(n),e.allActions(n,i=>{if(!(i&393216))if(i&65536){let o=(i>>19)-a;if(o>1){let O=i&65535,l=this.stack.length-o*3;if(l>=0&&e.getGoto(this.stack[l],O,!1)>=0)return o<<19|65536|O}}else{let o=s(i,a+1);if(o!=null)return o}})};return s(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new K(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){return e<=this.lookAhead?!1:(this.emitLookAhead(),this.lookAhead=e,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class K{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}}class Ce{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=e&65535,s=e>>19;s==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(s-1)*3;let n=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0);this.state=n}}class j{constructor(e,t,s){this.stack=e,this.pos=t,this.index=s,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(e,t=e.bufferBase+e.buffer.length){return new j(e,t,t-e.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new j(this.stack,this.pos,this.index)}}function q(r,e=Uint16Array){if(typeof r!="string")return r;let t=null;for(let s=0,n=0;s<r.length;){let a=0;for(;;){let i=r.charCodeAt(s++),o=!1;if(i==126){a=65535;break}i>=92&&i--,i>=34&&i--;let O=i-32;if(O>=46&&(O-=46,o=!0),a+=O,o)break;a*=46}t?t[n++]=a:t=new e(a)}return t}class z{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const ee=new z;class Ze{constructor(e,t){this.input=e,this.ranges=t,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=ee,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let s=this.range,n=this.rangeIndex,a=this.pos+e;for(;a<s.from;){if(!n)return null;let i=this.ranges[--n];a-=s.from-i.to,s=i}for(;t<0?a>s.to:a>=s.to;){if(n==this.ranges.length-1)return null;let i=this.ranges[++n];a+=i.from-s.to,s=i}return a}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t=this.chunkOff+e,s,n;if(t>=0&&t<this.chunk.length)s=this.pos+e,n=this.chunk.charCodeAt(t);else{let a=this.resolveOffset(e,1);if(a==null)return-1;if(s=a,s>=this.chunk2Pos&&s<this.chunk2Pos+this.chunk2.length)n=this.chunk2.charCodeAt(s-this.chunk2Pos);else{let i=this.rangeIndex,o=this.range;for(;o.to<=s;)o=this.ranges[++i];this.chunk2=this.input.chunk(this.chunk2Pos=s),s+this.chunk2.length>o.to&&(this.chunk2=this.chunk2.slice(0,o.to-s)),n=this.chunk2.charCodeAt(0)}}return s>=this.token.lookAhead&&(this.token.lookAhead=s+1),n}acceptToken(e,t=0){let s=t?this.resolveOffset(t,-1):this.pos;if(s==null||s<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=e,this.token.end=s}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),t=this.pos+e.length;this.chunk=t>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=ee,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let s="";for(let n of this.ranges){if(n.from>=t)break;n.to>e&&(s+=this.input.read(Math.max(n.from,e),Math.min(n.to,t)))}return s}}class P{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:s}=t.p;Fe(this.data,e,t,this.id,s.data,s.tokenPrecTable)}}P.prototype.contextual=P.prototype.fallback=P.prototype.extend=!1;P.prototype.fallback=P.prototype.extend=!1;class N{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}}function Fe(r,e,t,s,n,a){let i=0,o=1<<s,{dialect:O}=t.p.parser;e:for(;(o&r[i])!=0;){let l=r[i+1];for(let _=i+3;_<l;_+=2)if((r[_+1]&o)>0){let u=r[_];if(O.allows(u)&&(e.token.value==-1||e.token.value==u||Ie(u,e.token.value,n,a))){e.acceptToken(u);break}}let c=e.next,d=0,p=r[i+2];if(e.next<0&&p>d&&r[l+p*3-3]==65535){i=r[l+p*3-1];continue e}for(;d<p;){let _=d+p>>1,u=l+_+(_<<1),w=r[u],xe=r[u+1]||65536;if(c<w)p=_;else if(c>=xe)d=_+1;else{i=r[u+2],e.advance();continue e}}break}}function te(r,e,t){for(let s=e,n;(n=r[s])!=65535;s++)if(n==t)return s-e;return-1}function Ie(r,e,t,s){let n=te(t,s,e);return n<0||te(t,s,r)<n}const m=typeof process<"u"&&H&&/\bparse\b/.test(H.LOG);let V=null;function se(r,e,t){let s=r.cursor(_e.IncludeAnonymous);for(s.moveTo(e);;)if(!(t<0?s.childBefore(e):s.childAfter(e)))for(;;){if((t<0?s.to<e:s.from>e)&&!s.type.isError)return t<0?Math.max(0,Math.min(s.to-1,e-25)):Math.min(r.length,Math.max(s.from+1,e+25));if(t<0?s.prevSibling():s.nextSibling())break;if(!s.parent())return t<0?0:r.length}}class De{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?se(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?se(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let s=this.trees[t],n=this.index[t];if(n==s.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let a=s.children[n],i=this.start[t]+s.positions[n];if(i>e)return this.nextStart=i,null;if(a instanceof R){if(i==e){if(i<this.safeFrom)return null;let o=i+a.length;if(o<=this.safeTo){let O=a.prop(M.lookAhead);if(!O||o+O<this.fragment.to)return a}}this.index[t]++,i+a.length>=Math.max(this.safeFrom,e)&&(this.trees.push(a),this.start.push(i),this.index.push(0))}else this.index[t]++,this.nextStart=i+a.length}}}class Ye{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(s=>new z)}getActions(e){let t=0,s=null,{parser:n}=e.p,{tokenizers:a}=n,i=n.stateSlot(e.state,3),o=e.curContext?e.curContext.hash:0,O=0;for(let l=0;l<a.length;l++){if((1<<l&i)==0)continue;let c=a[l],d=this.tokens[l];if(!(s&&!c.fallback)&&((c.contextual||d.start!=e.pos||d.mask!=i||d.context!=o)&&(this.updateCachedToken(d,c,e),d.mask=i,d.context=o),d.lookAhead>d.end+25&&(O=Math.max(d.lookAhead,O)),d.value!=0)){let p=t;if(d.extended>-1&&(t=this.addActions(e,d.extended,d.end,t)),t=this.addActions(e,d.value,d.end,t),!c.extend&&(s=d,t>p))break}}for(;this.actions.length>t;)this.actions.pop();return O&&e.setLookAhead(O),!s&&e.pos==this.stream.end&&(s=new z,s.value=e.p.parser.eofTerm,s.start=s.end=e.pos,t=this.addActions(e,s.value,s.end,t)),this.mainToken=s,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new z,{pos:s,p:n}=e;return t.start=s,t.end=Math.min(s+1,n.stream.end),t.value=s==n.stream.end?n.parser.eofTerm:0,t}updateCachedToken(e,t,s){let n=this.stream.clipPos(s.pos);if(t.token(this.stream.reset(n,e),s),e.value>-1){let{parser:a}=s.p;for(let i=0;i<a.specialized.length;i++)if(a.specialized[i]==e.value){let o=a.specializers[i](this.stream.read(e.start,e.end),s);if(o>=0&&s.p.parser.dialect.allows(o>>1)){(o&1)==0?e.value=o>>1:e.extended=o>>1;break}}}else e.value=0,e.end=this.stream.clipPos(n+1)}putAction(e,t,s,n){for(let a=0;a<n;a+=3)if(this.actions[a]==e)return n;return this.actions[n++]=e,this.actions[n++]=t,this.actions[n++]=s,n}addActions(e,t,s,n){let{state:a}=e,{parser:i}=e.p,{data:o}=i;for(let O=0;O<2;O++)for(let l=i.stateSlot(a,O?2:1);;l+=3){if(o[l]==65535)if(o[l+1]==1)l=k(o,l+2);else{n==0&&o[l+1]==2&&(n=this.putAction(k(o,l+2),t,s,n));break}o[l]==t&&(n=this.putAction(k(o,l+1),t,s,n))}return n}}class Le{constructor(e,t,s,n){this.parser=e,this.input=t,this.ranges=n,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new Ze(t,n),this.tokens=new Ye(e,this.stream),this.topTerm=e.top[1];let{from:a}=n[0];this.stacks=[W.start(this,e.top[0],a)],this.fragments=s.length&&this.stream.end-a>e.bufferLength*4?new De(s,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,t=this.minStackPos,s=this.stacks=[],n,a;if(this.bigReductionCount>300&&e.length==1){let[i]=e;for(;i.forceReduce()&&i.stack.length&&i.stack[i.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let i=0;i<e.length;i++){let o=e[i];for(;;){if(this.tokens.mainToken=null,o.pos>t)s.push(o);else{if(this.advanceStack(o,s,e))continue;{n||(n=[],a=[]),n.push(o);let O=this.tokens.getMainToken(o);a.push(O.value,O.end)}}break}}if(!s.length){let i=n&&Je(n);if(i)return m&&console.log("Finish with "+this.stackID(i)),this.stackToTree(i);if(this.parser.strict)throw m&&n&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+t);this.recovering||(this.recovering=5)}if(this.recovering&&n){let i=this.stoppedAt!=null&&n[0].pos>this.stoppedAt?n[0]:this.runRecovery(n,a,s);if(i)return m&&console.log("Force-finish "+this.stackID(i)),this.stackToTree(i.forceAll())}if(this.recovering){let i=this.recovering==1?1:this.recovering*3;if(s.length>i)for(s.sort((o,O)=>O.score-o.score);s.length>i;)s.pop();s.some(o=>o.reducePos>t)&&this.recovering--}else if(s.length>1){e:for(let i=0;i<s.length-1;i++){let o=s[i];for(let O=i+1;O<s.length;O++){let l=s[O];if(o.sameState(l)||o.buffer.length>500&&l.buffer.length>500)if((o.score-l.score||o.buffer.length-l.buffer.length)>0)s.splice(O--,1);else{s.splice(i--,1);continue e}}}s.length>12&&(s.sort((i,o)=>o.score-i.score),s.splice(12,s.length-12))}this.minStackPos=s[0].pos;for(let i=1;i<s.length;i++)s[i].pos<this.minStackPos&&(this.minStackPos=s[i].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}advanceStack(e,t,s){let n=e.pos,{parser:a}=this,i=m?this.stackID(e)+" -> ":"";if(this.stoppedAt!=null&&n>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let l=e.curContext&&e.curContext.tracker.strict,c=l?e.curContext.hash:0;for(let d=this.fragments.nodeAt(n);d;){let p=this.parser.nodeSet.types[d.type.id]==d.type?a.getGoto(e.state,d.type.id):-1;if(p>-1&&d.length&&(!l||(d.prop(M.contextHash)||0)==c))return e.useNode(d,p),m&&console.log(i+this.stackID(e)+` (via reuse of ${a.getName(d.type.id)})`),!0;if(!(d instanceof R)||d.children.length==0||d.positions[0]>0)break;let _=d.children[0];if(_ instanceof R&&d.positions[0]==0)d=_;else break}}let o=a.stateSlot(e.state,4);if(o>0)return e.reduce(o),m&&console.log(i+this.stackID(e)+` (via always-reduce ${a.getName(o&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let O=this.tokens.getActions(e);for(let l=0;l<O.length;){let c=O[l++],d=O[l++],p=O[l++],_=l==O.length||!s,u=_?e:e.split(),w=this.tokens.mainToken;if(u.apply(c,d,w?w.start:u.pos,p),m&&console.log(i+this.stackID(u)+` (via ${(c&65536)==0?"shift":`reduce of ${a.getName(c&65535)}`} for ${a.getName(d)} @ ${n}${u==e?"":", split"})`),_)return!0;u.pos>n?t.push(u):s.push(u)}return!1}advanceFully(e,t){let s=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>s)return re(e,t),!0}}runRecovery(e,t,s){let n=null,a=!1;for(let i=0;i<e.length;i++){let o=e[i],O=t[i<<1],l=t[(i<<1)+1],c=m?this.stackID(o)+" -> ":"";if(o.deadEnd&&(a||(a=!0,o.restart(),m&&console.log(c+this.stackID(o)+" (restarted)"),this.advanceFully(o,s))))continue;let d=o.split(),p=c;for(let _=0;_<10&&d.forceReduce()&&(m&&console.log(p+this.stackID(d)+" (via force-reduce)"),!this.advanceFully(d,s));_++)m&&(p=this.stackID(d)+" -> ");for(let _ of o.recoverByInsert(O))m&&console.log(c+this.stackID(_)+" (via recover-insert)"),this.advanceFully(_,s);this.stream.end>o.pos?(l==o.pos&&(l++,O=0),o.recoverByDelete(O,l),m&&console.log(c+this.stackID(o)+` (via recover-delete ${this.parser.getName(O)})`),re(o,s)):(!n||n.score<d.score)&&(n=d)}return n}stackToTree(e){return e.close(),R.build({buffer:j.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(V||(V=new WeakMap)).get(e);return t||V.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}}function re(r,e){for(let t=0;t<e.length;t++){let s=e[t];if(s.pos==r.pos&&s.sameState(r)){e[t].score<r.score&&(e[t]=r);return}}e.push(r)}class Me{constructor(e,t,s){this.source=e,this.flags=t,this.disabled=s}allows(e){return!this.disabled||this.disabled[e]==0}}const C=r=>r;class Be{constructor(e){this.start=e.start,this.shift=e.shift||C,this.reduce=e.reduce||C,this.reuse=e.reuse||C,this.hash=e.hash||(()=>0),this.strict=e.strict!==!1}}class U extends we{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(" ");this.minRepeatTerm=t.length;for(let o=0;o<e.repeatNodeCount;o++)t.push("");let s=Object.keys(e.topRules).map(o=>e.topRules[o][1]),n=[];for(let o=0;o<t.length;o++)n.push([]);function a(o,O,l){n[o].push([O,O.deserialize(String(l))])}if(e.nodeProps)for(let o of e.nodeProps){let O=o[0];typeof O=="string"&&(O=M[O]);for(let l=1;l<o.length;){let c=o[l++];if(c>=0)a(c,O,o[l++]);else{let d=o[l+-c];for(let p=-c;p>0;p--)a(o[l++],O,d);l++}}}this.nodeSet=new qe(t.map((o,O)=>$e.define({name:O>=this.minRepeatTerm?void 0:o,id:O,props:n[O],top:s.indexOf(O)>-1,error:O==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(O)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=Re;let i=q(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let o=0;o<this.specializerSpecs.length;o++)this.specialized[o]=this.specializerSpecs[o].term;this.specializers=this.specializerSpecs.map(ne),this.states=q(e.states,Uint32Array),this.data=q(e.stateData),this.goto=q(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(o=>typeof o=="number"?new P(i,o):o),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,s){let n=new Le(this,e,t,s);for(let a of this.wrappers)n=a(n,e,t,s);return n}getGoto(e,t,s=!1){let n=this.goto;if(t>=n[0])return-1;for(let a=n[t+1];;){let i=n[a++],o=i&1,O=n[a++];if(o&&s)return O;for(let l=a+(i>>1);a<l;a++)if(n[a]==e)return O;if(o)return-1}}hasAction(e,t){let s=this.data;for(let n=0;n<2;n++)for(let a=this.stateSlot(e,n?2:1),i;;a+=3){if((i=s[a])==65535)if(s[a+1]==1)i=s[a=k(s,a+2)];else{if(s[a+1]==2)return k(s,a+2);break}if(i==t||i==0)return k(s,a+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,s=>s==t?!0:null)}allActions(e,t){let s=this.stateSlot(e,4),n=s?t(s):void 0;for(let a=this.stateSlot(e,1);n==null;a+=3){if(this.data[a]==65535)if(this.data[a+1]==1)a=k(this.data,a+2);else break;n=t(k(this.data,a+1))}return n}nextStates(e){let t=[];for(let s=this.stateSlot(e,1);;s+=3){if(this.data[s]==65535)if(this.data[s+1]==1)s=k(this.data,s+2);else break;if((this.data[s+2]&1)==0){let n=this.data[s+1];t.some((a,i)=>i&1&&a==n)||t.push(this.data[s],n)}}return t}configure(e){let t=Object.assign(Object.create(U.prototype),this);if(e.props&&(t.nodeSet=this.nodeSet.extend(...e.props)),e.top){let s=this.topRules[e.top];if(!s)throw new RangeError(`Invalid top rule name ${e.top}`);t.top=s}return e.tokenizers&&(t.tokenizers=this.tokenizers.map(s=>{let n=e.tokenizers.find(a=>a.from==s);return n?n.to:s})),e.specializers&&(t.specializers=this.specializers.slice(),t.specializerSpecs=this.specializerSpecs.map((s,n)=>{let a=e.specializers.find(o=>o.from==s.external);if(!a)return s;let i=Object.assign(Object.assign({},s),{external:a.to});return t.specializers[n]=ne(i),i})),e.contextTracker&&(t.context=e.contextTracker),e.dialect&&(t.dialect=this.parseDialect(e.dialect)),e.strict!=null&&(t.strict=e.strict),e.wrap&&(t.wrappers=t.wrappers.concat(e.wrap)),e.bufferLength!=null&&(t.bufferLength=e.bufferLength),t}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),s=t.map(()=>!1);if(e)for(let a of e.split(" ")){let i=t.indexOf(a);i>=0&&(s[i]=!0)}let n=null;for(let a=0;a<t.length;a++)if(!s[a])for(let i=this.dialects[t[a]],o;(o=this.data[i++])!=65535;)(n||(n=new Uint8Array(this.maxTerm+1)))[o]=1;return new Me(e,s,n)}static deserialize(e){return new U(e)}}function k(r,e){return r[e]|r[e+1]<<16}function Je(r){let e=null;for(let t of r){let s=t.p.stoppedAt;(t.pos==t.p.stream.end||s!=null&&t.pos>s)&&t.p.parser.stateFlag(t.state,2)&&(!e||e.score<t.score)&&(e=t)}return e}function ne(r){if(r.external){let e=r.extend?1:0;return(t,s)=>r.external(t,s)<<1|e}return r.get}const He=1,pe=194,ue=195,Ke=196,ie=197,et=198,tt=199,st=200,rt=2,fe=3,ae=201,nt=24,it=25,at=49,ot=50,Ot=55,lt=56,dt=57,ht=59,ct=60,_t=61,pt=62,ut=63,ft=65,mt=238,gt=71,Qt=241,yt=242,Tt=243,St=244,kt=245,bt=246,vt=247,Pt=248,me=72,xt=249,wt=250,qt=251,$t=252,Rt=253,zt=254,Et=255,Xt=256,Wt=73,jt=77,Ut=263,Nt=112,Gt=130,At=151,Vt=152,Ct=155,v=10,x=13,B=32,G=9,J=35,Zt=40,Ft=46,L=123,oe=125,ge=39,Qe=34,Oe=92,It=111,Dt=120,Yt=78,Lt=117,Mt=85,Bt=new Set([it,at,ot,Ut,ft,Gt,lt,dt,mt,pt,ut,me,Wt,jt,ct,_t,At,Vt,Ct,Nt]);function Z(r){return r==v||r==x}function F(r){return r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102}const Jt=new N((r,e)=>{let t;if(r.next<0)r.acceptToken(tt);else if(e.context.flags&E)Z(r.next)&&r.acceptToken(et,1);else if(((t=r.peek(-1))<0||Z(t))&&e.canShift(ie)){let s=0;for(;r.next==B||r.next==G;)r.advance(),s++;(r.next==v||r.next==x||r.next==J)&&r.acceptToken(ie,-s)}else Z(r.next)&&r.acceptToken(Ke,1)},{contextual:!0}),Ht=new N((r,e)=>{let t=e.context;if(t.flags)return;let s=r.peek(-1);if(s==v||s==x){let n=0,a=0;for(;;){if(r.next==B)n++;else if(r.next==G)n+=8-n%8;else break;r.advance(),a++}n!=t.indent&&r.next!=v&&r.next!=x&&r.next!=J&&(n<t.indent?r.acceptToken(ue,-a):r.acceptToken(pe))}}),E=1,ye=2,Q=4,y=8,T=16,S=32;function X(r,e,t){this.parent=r,this.indent=e,this.flags=t,this.hash=(r?r.hash+r.hash<<8:0)+e+(e<<4)+t+(t<<6)}const Kt=new X(null,0,0);function es(r){let e=0;for(let t=0;t<r.length;t++)e+=r.charCodeAt(t)==G?8-e%8:1;return e}const le=new Map([[Qt,0],[yt,Q],[Tt,y],[St,y|Q],[kt,T],[bt,T|Q],[vt,T|y],[Pt,T|y|Q],[xt,S],[wt,S|Q],[qt,S|y],[$t,S|y|Q],[Rt,S|T],[zt,S|T|Q],[Et,S|T|y],[Xt,S|T|y|Q]].map(([r,e])=>[r,e|ye])),ts=new Be({start:Kt,reduce(r,e,t,s){return r.flags&E&&Bt.has(e)||(e==gt||e==me)&&r.flags&ye?r.parent:r},shift(r,e,t,s){return e==pe?new X(r,es(s.read(s.pos,t.pos)),0):e==ue?r.parent:e==nt||e==Ot||e==ht||e==fe?new X(r,0,E):le.has(e)?new X(r,0,le.get(e)|r.flags&E):r},hash(r){return r.hash}}),ss=new N(r=>{for(let e=0;e<5;e++){if(r.next!="print".charCodeAt(e))return;r.advance()}if(!/\w/.test(String.fromCharCode(r.next)))for(let e=0;;e++){let t=r.peek(e);if(!(t==B||t==G)){t!=Zt&&t!=Ft&&t!=v&&t!=x&&t!=J&&r.acceptToken(He);return}}}),rs=new N((r,e)=>{let{flags:t}=e.context,s=t&Q?Qe:ge,n=(t&y)>0,a=!(t&T),i=(t&S)>0,o=r.pos;for(;!(r.next<0);)if(i&&r.next==L)if(r.peek(1)==L)r.advance(2);else{if(r.pos==o){r.acceptToken(fe,1);return}break}else if(a&&r.next==Oe){if(r.pos==o){r.advance();let O=r.next;O>=0&&(r.advance(),ns(r,O)),r.acceptToken(rt);return}break}else if(r.next==Oe&&!a&&r.peek(1)>-1)r.advance(2);else if(r.next==s&&(!n||r.peek(1)==s&&r.peek(2)==s)){if(r.pos==o){r.acceptToken(ae,n?3:1);return}break}else if(r.next==v){if(n)r.advance();else if(r.pos==o){r.acceptToken(ae);return}break}else r.advance();r.pos>o&&r.acceptToken(st)});function ns(r,e){if(e==It)for(let t=0;t<2&&r.next>=48&&r.next<=55;t++)r.advance();else if(e==Dt)for(let t=0;t<2&&F(r.next);t++)r.advance();else if(e==Lt)for(let t=0;t<4&&F(r.next);t++)r.advance();else if(e==Mt)for(let t=0;t<8&&F(r.next);t++)r.advance();else if(e==Yt&&r.next==L){for(r.advance();r.next>=0&&r.next!=oe&&r.next!=ge&&r.next!=Qe&&r.next!=v;)r.advance();r.next==oe&&r.advance()}}const is=ze({'async "*" "**" FormatConversion FormatSpec':h.modifier,"for while if elif else try except finally return raise break continue with pass assert await yield match case":h.controlKeyword,"in not and or is del":h.operatorKeyword,"from def class global nonlocal lambda":h.definitionKeyword,import:h.moduleKeyword,"with as print":h.keyword,Boolean:h.bool,None:h.null,VariableName:h.variableName,"CallExpression/VariableName":h.function(h.variableName),"FunctionDefinition/VariableName":h.function(h.definition(h.variableName)),"ClassDefinition/VariableName":h.definition(h.className),PropertyName:h.propertyName,"CallExpression/MemberExpression/PropertyName":h.function(h.propertyName),Comment:h.lineComment,Number:h.number,String:h.string,FormatString:h.special(h.string),Escape:h.escape,UpdateOp:h.updateOperator,"ArithOp!":h.arithmeticOperator,BitOp:h.bitwiseOperator,CompareOp:h.compareOperator,AssignOp:h.definitionOperator,Ellipsis:h.punctuation,At:h.meta,"( )":h.paren,"[ ]":h.squareBracket,"{ }":h.brace,".":h.derefOperator,", ;":h.separator}),as={__proto__:null,await:44,or:54,and:56,in:60,not:62,is:64,if:70,else:72,lambda:76,yield:94,from:96,async:102,for:104,None:162,True:164,False:164,del:178,pass:182,break:186,continue:190,return:194,raise:202,import:206,as:208,global:212,nonlocal:214,assert:218,type:223,elif:236,while:240,try:246,except:248,finally:250,with:254,def:258,class:268,match:279,case:285},os=U.deserialize({version:14,states:"##jO`QeOOP$}OSOOO&WQtO'#HUOOQS'#Co'#CoOOQS'#Cp'#CpO'vQdO'#CnO*UQtO'#HTOOQS'#HU'#HUOOQS'#DU'#DUOOQS'#HT'#HTO*rQdO'#D_O+VQdO'#DfO+gQdO'#DjO+zOWO'#DuO,VOWO'#DvO.[QtO'#GuOOQS'#Gu'#GuO'vQdO'#GtO0ZQtO'#GtOOQS'#Eb'#EbO0rQdO'#EcOOQS'#Gs'#GsO0|QdO'#GrOOQV'#Gr'#GrO1XQdO'#FYOOQS'#G^'#G^O1^QdO'#FXOOQV'#IS'#ISOOQV'#Gq'#GqOOQV'#Fq'#FqQ`QeOOO'vQdO'#CqO1lQdO'#C}O1sQdO'#DRO2RQdO'#HYO2cQtO'#EVO'vQdO'#EWOOQS'#EY'#EYOOQS'#E['#E[OOQS'#E^'#E^O2wQdO'#E`O3_QdO'#EdO3rQdO'#EfO3zQtO'#EfO1XQdO'#EiO0rQdO'#ElO1XQdO'#EnO0rQdO'#EtO0rQdO'#EwO4VQdO'#EyO4^QdO'#FOO4iQdO'#EzO0rQdO'#FOO1XQdO'#FQO1XQdO'#FVO4nQdO'#F[P4uOdO'#GpPOOO)CBd)CBdOOQS'#Ce'#CeOOQS'#Cf'#CfOOQS'#Cg'#CgOOQS'#Ch'#ChOOQS'#Ci'#CiOOQS'#Cj'#CjOOQS'#Cl'#ClO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO5TQdO'#DoOOQS,5:Y,5:YO5hQdO'#HdOOQS,5:],5:]O5uQ!fO,5:]O5zQtO,59YO1lQdO,59bO1lQdO,59bO1lQdO,59bO8jQdO,59bO8oQdO,59bO8vQdO,59jO8}QdO'#HTO:TQdO'#HSOOQS'#HS'#HSOOQS'#D['#D[O:lQdO,59aO'vQdO,59aO:zQdO,59aOOQS,59y,59yO;PQdO,5:RO'vQdO,5:ROOQS,5:Q,5:QO;_QdO,5:QO;dQdO,5:XO'vQdO,5:XO'vQdO,5:VOOQS,5:U,5:UO;uQdO,5:UO;zQdO,5:WOOOW'#Fy'#FyO<POWO,5:aOOQS,5:a,5:aO<[QdO'#HwOOOW'#Dw'#DwOOOW'#Fz'#FzO<lOWO,5:bOOQS,5:b,5:bOOQS'#F}'#F}O<zQtO,5:iO?lQtO,5=`O@VQ#xO,5=`O@vQtO,5=`OOQS,5:},5:}OA_QeO'#GWOBqQdO,5;^OOQV,5=^,5=^OB|QtO'#IPOCkQdO,5;tOOQS-E:[-E:[OOQV,5;s,5;sO4dQdO'#FQOOQV-E9o-E9oOCsQtO,59]OEzQtO,59iOFeQdO'#HVOFpQdO'#HVO1XQdO'#HVOF{QdO'#DTOGTQdO,59mOGYQdO'#HZO'vQdO'#HZO0rQdO,5=tOOQS,5=t,5=tO0rQdO'#EROOQS'#ES'#ESOGwQdO'#GPOHXQdO,58|OHXQdO,58|O*xQdO,5:oOHgQtO'#H]OOQS,5:r,5:rOOQS,5:z,5:zOHzQdO,5;OOI]QdO'#IOO1XQdO'#H}OOQS,5;Q,5;QOOQS'#GT'#GTOIqQtO,5;QOJPQdO,5;QOJUQdO'#IQOOQS,5;T,5;TOJdQdO'#H|OOQS,5;W,5;WOJuQdO,5;YO4iQdO,5;`O4iQdO,5;cOJ}QtO'#ITO'vQdO'#ITOKXQdO,5;eO4VQdO,5;eO0rQdO,5;jO1XQdO,5;lOK^QeO'#EuOLjQgO,5;fO!!kQdO'#IUO4iQdO,5;jO!!vQdO,5;lO!#OQdO,5;qO!#ZQtO,5;vO'vQdO,5;vPOOO,5=[,5=[P!#bOSO,5=[P!#jOdO,5=[O!&bQtO1G.jO!&iQtO1G.jO!)YQtO1G.jO!)dQtO1G.jO!+}QtO1G.jO!,bQtO1G.jO!,uQdO'#HcO!-TQtO'#GuO0rQdO'#HcO!-_QdO'#HbOOQS,5:Z,5:ZO!-gQdO,5:ZO!-lQdO'#HeO!-wQdO'#HeO!.[QdO,5>OOOQS'#Ds'#DsOOQS1G/w1G/wOOQS1G.|1G.|O!/[QtO1G.|O!/cQtO1G.|O1lQdO1G.|O!0OQdO1G/UOOQS'#DZ'#DZO0rQdO,59tOOQS1G.{1G.{O!0VQdO1G/eO!0gQdO1G/eO!0oQdO1G/fO'vQdO'#H[O!0tQdO'#H[O!0yQtO1G.{O!1ZQdO,59iO!2aQdO,5=zO!2qQdO,5=zO!2yQdO1G/mO!3OQtO1G/mOOQS1G/l1G/lO!3`QdO,5=uO!4VQdO,5=uO0rQdO1G/qO!4tQdO1G/sO!4yQtO1G/sO!5ZQtO1G/qOOQS1G/p1G/pOOQS1G/r1G/rOOOW-E9w-E9wOOQS1G/{1G/{O!5kQdO'#HxO0rQdO'#HxO!5|QdO,5>cOOOW-E9x-E9xOOQS1G/|1G/|OOQS-E9{-E9{O!6[Q#xO1G2zO!6{QtO1G2zO'vQdO,5<jOOQS,5<j,5<jOOQS-E9|-E9|OOQS,5<r,5<rOOQS-E:U-E:UOOQV1G0x1G0xO1XQdO'#GRO!7dQtO,5>kOOQS1G1`1G1`O!8RQdO1G1`OOQS'#DV'#DVO0rQdO,5=qOOQS,5=q,5=qO!8WQdO'#FrO!8cQdO,59oO!8kQdO1G/XO!8uQtO,5=uOOQS1G3`1G3`OOQS,5:m,5:mO!9fQdO'#GtOOQS,5<k,5<kOOQS-E9}-E9}O!9wQdO1G.hOOQS1G0Z1G0ZO!:VQdO,5=wO!:gQdO,5=wO0rQdO1G0jO0rQdO1G0jO!:xQdO,5>jO!;ZQdO,5>jO1XQdO,5>jO!;lQdO,5>iOOQS-E:R-E:RO!;qQdO1G0lO!;|QdO1G0lO!<RQdO,5>lO!<aQdO,5>lO!<oQdO,5>hO!=VQdO,5>hO!=hQdO'#EpO0rQdO1G0tO!=sQdO1G0tO!=xQgO1G0zO!AvQgO1G0}O!EqQdO,5>oO!E{QdO,5>oO!FTQtO,5>oO0rQdO1G1PO!F_QdO1G1PO4iQdO1G1UO!!vQdO1G1WOOQV,5;a,5;aO!FdQfO,5;aO!FiQgO1G1QO!JjQdO'#GZO4iQdO1G1QO4iQdO1G1QO!JzQdO,5>pO!KXQdO,5>pO1XQdO,5>pOOQV1G1U1G1UO!KaQdO'#FSO!KrQ!fO1G1WO!KzQdO1G1WOOQV1G1]1G1]O4iQdO1G1]O!LPQdO1G1]O!LXQdO'#F^OOQV1G1b1G1bO!#ZQtO1G1bPOOO1G2v1G2vP!L^OSO1G2vOOQS,5=},5=}OOQS'#Dp'#DpO0rQdO,5=}O!LfQdO,5=|O!LyQdO,5=|OOQS1G/u1G/uO!MRQdO,5>PO!McQdO,5>PO!MkQdO,5>PO!NOQdO,5>PO!N`QdO,5>POOQS1G3j1G3jOOQS7+$h7+$hO!8kQdO7+$pO#!RQdO1G.|O#!YQdO1G.|OOQS1G/`1G/`OOQS,5<`,5<`O'vQdO,5<`OOQS7+%P7+%PO#!aQdO7+%POOQS-E9r-E9rOOQS7+%Q7+%QO#!qQdO,5=vO'vQdO,5=vOOQS7+$g7+$gO#!vQdO7+%PO##OQdO7+%QO##TQdO1G3fOOQS7+%X7+%XO##eQdO1G3fO##mQdO7+%XOOQS,5<_,5<_O'vQdO,5<_O##rQdO1G3aOOQS-E9q-E9qO#$iQdO7+%]OOQS7+%_7+%_O#$wQdO1G3aO#%fQdO7+%_O#%kQdO1G3gO#%{QdO1G3gO#&TQdO7+%]O#&YQdO,5>dO#&sQdO,5>dO#&sQdO,5>dOOQS'#Dx'#DxO#'UO&jO'#DzO#'aO`O'#HyOOOW1G3}1G3}O#'fQdO1G3}O#'nQdO1G3}O#'yQ#xO7+(fO#(jQtO1G2UP#)TQdO'#GOOOQS,5<m,5<mOOQS-E:P-E:POOQS7+&z7+&zOOQS1G3]1G3]OOQS,5<^,5<^OOQS-E9p-E9pOOQS7+$s7+$sO#)bQdO,5=`O#){QdO,5=`O#*^QtO,5<aO#*qQdO1G3cOOQS-E9s-E9sOOQS7+&U7+&UO#+RQdO7+&UO#+aQdO,5<nO#+uQdO1G4UOOQS-E:Q-E:QO#,WQdO1G4UOOQS1G4T1G4TOOQS7+&W7+&WO#,iQdO7+&WOOQS,5<p,5<pO#,tQdO1G4WOOQS-E:S-E:SOOQS,5<l,5<lO#-SQdO1G4SOOQS-E:O-E:OO1XQdO'#EqO#-jQdO'#EqO#-uQdO'#IRO#-}QdO,5;[OOQS7+&`7+&`O0rQdO7+&`O#.SQgO7+&fO!JmQdO'#GXO4iQdO7+&fO4iQdO7+&iO#2QQtO,5<tO'vQdO,5<tO#2[QdO1G4ZOOQS-E:W-E:WO#2fQdO1G4ZO4iQdO7+&kO0rQdO7+&kOOQV7+&p7+&pO!KrQ!fO7+&rO!KzQdO7+&rO`QeO1G0{OOQV-E:X-E:XO4iQdO7+&lO4iQdO7+&lOOQV,5<u,5<uO#2nQdO,5<uO!JmQdO,5<uOOQV7+&l7+&lO#2yQgO7+&lO#6tQdO,5<vO#7PQdO1G4[OOQS-E:Y-E:YO#7^QdO1G4[O#7fQdO'#IWO#7tQdO'#IWO1XQdO'#IWOOQS'#IW'#IWO#8PQdO'#IVOOQS,5;n,5;nO#8XQdO,5;nO0rQdO'#FUOOQV7+&r7+&rO4iQdO7+&rOOQV7+&w7+&wO4iQdO7+&wO#8^QfO,5;xOOQV7+&|7+&|POOO7+(b7+(bO#8cQdO1G3iOOQS,5<c,5<cO#8qQdO1G3hOOQS-E9u-E9uO#9UQdO,5<dO#9aQdO,5<dO#9tQdO1G3kOOQS-E9v-E9vO#:UQdO1G3kO#:^QdO1G3kO#:nQdO1G3kO#:UQdO1G3kOOQS<<H[<<H[O#:yQtO1G1zOOQS<<Hk<<HkP#;WQdO'#FtO8vQdO1G3bO#;eQdO1G3bO#;jQdO<<HkOOQS<<Hl<<HlO#;zQdO7+)QOOQS<<Hs<<HsO#<[QtO1G1yP#<{QdO'#FsO#=YQdO7+)RO#=jQdO7+)RO#=rQdO<<HwO#=wQdO7+({OOQS<<Hy<<HyO#>nQdO,5<bO'vQdO,5<bOOQS-E9t-E9tOOQS<<Hw<<HwOOQS,5<g,5<gO0rQdO,5<gO#>sQdO1G4OOOQS-E9y-E9yO#?^QdO1G4OO<[QdO'#H{OOOO'#D{'#D{OOOO'#F|'#F|O#?oO&jO,5:fOOOW,5>e,5>eOOOW7+)i7+)iO#?zQdO7+)iO#@SQdO1G2zO#@mQdO1G2zP'vQdO'#FuO0rQdO<<IpO1XQdO1G2YP1XQdO'#GSO#AOQdO7+)pO#AaQdO7+)pOOQS<<Ir<<IrP1XQdO'#GUP0rQdO'#GQOOQS,5;],5;]O#ArQdO,5>mO#BQQdO,5>mOOQS1G0v1G0vOOQS<<Iz<<IzOOQV-E:V-E:VO4iQdO<<JQOOQV,5<s,5<sO4iQdO,5<sOOQV<<JQ<<JQOOQV<<JT<<JTO#BYQtO1G2`P#BdQdO'#GYO#BkQdO7+)uO#BuQgO<<JVO4iQdO<<JVOOQV<<J^<<J^O4iQdO<<J^O!KrQ!fO<<J^O#FpQgO7+&gOOQV<<JW<<JWO#FzQgO<<JWOOQV1G2a1G2aO1XQdO1G2aO#JuQdO1G2aO4iQdO<<JWO1XQdO1G2bP0rQdO'#G[O#KQQdO7+)vO#K_QdO7+)vOOQS'#FT'#FTO0rQdO,5>rO#KgQdO,5>rO#KrQdO,5>rO#K}QdO,5>qO#L`QdO,5>qOOQS1G1Y1G1YOOQS,5;p,5;pOOQV<<Jc<<JcO#LhQdO1G1dOOQS7+)T7+)TP#LmQdO'#FwO#L}QdO1G2OO#MbQdO1G2OO#MrQdO1G2OP#M}QdO'#FxO#N[QdO7+)VO#NlQdO7+)VO#NlQdO7+)VO#NtQdO7+)VO$ UQdO7+(|O8vQdO7+(|OOQSAN>VAN>VO$ oQdO<<LmOOQSAN>cAN>cO0rQdO1G1|O$!PQtO1G1|P$!ZQdO'#FvOOQS1G2R1G2RP$!hQdO'#F{O$!uQdO7+)jO$#`QdO,5>gOOOO-E9z-E9zOOOW<<MT<<MTO$#nQdO7+(fOOQSAN?[AN?[OOQS7+'t7+'tO$$XQdO<<M[OOQS,5<q,5<qO$$jQdO1G4XOOQS-E:T-E:TOOQVAN?lAN?lOOQV1G2_1G2_O4iQdOAN?qO$$xQgOAN?qOOQVAN?xAN?xO4iQdOAN?xOOQV<<JR<<JRO4iQdOAN?rO4iQdO7+'{OOQV7+'{7+'{O1XQdO7+'{OOQVAN?rAN?rOOQS7+'|7+'|O$(sQdO<<MbOOQS1G4^1G4^O0rQdO1G4^OOQS,5<w,5<wO$)QQdO1G4]OOQS-E:Z-E:ZOOQU'#G_'#G_O$)cQfO7+'OO$)nQdO'#F_O$*uQdO7+'jO$+VQdO7+'jOOQS7+'j7+'jO$+bQdO<<LqO$+rQdO<<LqO$+rQdO<<LqO$+zQdO'#H^OOQS<<Lh<<LhO$,UQdO<<LhOOQS7+'h7+'hOOQS'#D|'#D|OOOO1G4R1G4RO$,oQdO1G4RO$,wQdO1G4RP!=hQdO'#GVOOQVG25]G25]O4iQdOG25]OOQVG25dG25dOOQVG25^G25^OOQV<<Kg<<KgO4iQdO<<KgOOQS7+)x7+)xP$-SQdO'#G]OOQU-E:]-E:]OOQV<<Jj<<JjO$-vQtO'#FaOOQS'#Fc'#FcO$.WQdO'#FbO$.xQdO'#FbOOQS'#Fb'#FbO$.}QdO'#IYO$)nQdO'#FiO$)nQdO'#FiO$/fQdO'#FjO$)nQdO'#FkO$/mQdO'#IZOOQS'#IZ'#IZO$0[QdO,5;yOOQS<<KU<<KUO$0dQdO<<KUO$0tQdOANB]O$1UQdOANB]O$1^QdO'#H_OOQS'#H_'#H_O1sQdO'#DcO$1wQdO,5=xOOQSANBSANBSOOOO7+)m7+)mO$2`QdO7+)mOOQVLD*wLD*wOOQVANARANARO5uQ!fO'#GaO$2hQtO,5<SO$)nQdO'#FmOOQS,5<W,5<WOOQS'#Fd'#FdO$3YQdO,5;|O$3_QdO,5;|OOQS'#Fg'#FgO$)nQdO'#G`O$4PQdO,5<QO$4kQdO,5>tO$4{QdO,5>tO1XQdO,5<PO$5^QdO,5<TO$5cQdO,5<TO$)nQdO'#I[O$5hQdO'#I[O$5mQdO,5<UOOQS,5<V,5<VO0rQdO'#FpOOQU1G1e1G1eO4iQdO1G1eOOQSAN@pAN@pO$5rQdOG27wO$6SQdO,59}OOQS1G3d1G3dOOOO<<MX<<MXOOQS,5<{,5<{OOQS-E:_-E:_O$6XQtO'#FaO$6`QdO'#I]O$6nQdO'#I]O$6vQdO,5<XOOQS1G1h1G1hO$6{QdO1G1hO$7QQdO,5<zOOQS-E:^-E:^O$7lQdO,5=OO$8TQdO1G4`OOQS-E:b-E:bOOQS1G1k1G1kOOQS1G1o1G1oO$8eQdO,5>vO$)nQdO,5>vOOQS1G1p1G1pOOQS,5<[,5<[OOQU7+'P7+'PO$+zQdO1G/iO$)nQdO,5<YO$8sQdO,5>wO$8zQdO,5>wOOQS1G1s1G1sOOQS7+'S7+'SP$)nQdO'#GdO$9SQdO1G4bO$9^QdO1G4bO$9fQdO1G4bOOQS7+%T7+%TO$9tQdO1G1tO$:SQtO'#FaO$:ZQdO,5<}OOQS,5<},5<}O$:iQdO1G4cOOQS-E:a-E:aO$)nQdO,5<|O$:pQdO,5<|O$:uQdO7+)|OOQS-E:`-E:`O$;PQdO7+)|O$)nQdO,5<ZP$)nQdO'#GcO$;XQdO1G2hO$)nQdO1G2hP$;gQdO'#GbO$;nQdO<<MhO$;xQdO1G1uO$<WQdO7+(SO8vQdO'#C}O8vQdO,59bO8vQdO,59bO8vQdO,59bO$<fQtO,5=`O8vQdO1G.|O0rQdO1G/XO0rQdO7+$pP$<yQdO'#GOO'vQdO'#GtO$=WQdO,59bO$=]QdO,59bO$=dQdO,59mO$=iQdO1G/UO1sQdO'#DRO8vQdO,59j",stateData:"$>S~O%cOS%^OSSOS%]PQ~OPdOVaOfoOhYOopOs!POvqO!PrO!Q{O!T!SO!U!RO!XZO!][O!h`O!r`O!s`O!t`O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#l!QO#o!TO#s!UO#u!VO#z!WO#}hO$P!XO%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~O%]!YO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%j![O%k!]O%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aO~Ok%xXl%xXm%xXn%xXo%xXp%xXs%xXz%xX{%xX!x%xX#g%xX%[%xX%_%xX%z%xXg%xX!T%xX!U%xX%{%xX!W%xX![%xX!Q%xX#[%xXt%xX!m%xX~P%SOfoOhYO!XZO!][O!h`O!r`O!s`O!t`O%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~Oz%wX{%wX#g%wX%[%wX%_%wX%z%wX~Ok!pOl!qOm!oOn!oOo!rOp!sOs!tO!x%wX~P)pOV!zOg!|Oo0cOv0qO!PrO~P'vOV#OOo0cOv0qO!W#PO~P'vOV#SOa#TOo0cOv0qO![#UO~P'vOQ#XO%`#XO%a#ZO~OQ#^OR#[O%`#^O%a#`O~OV%iX_%iXa%iXh%iXk%iXl%iXm%iXn%iXo%iXp%iXs%iXz%iX!X%iX!f%iX%j%iX%k%iX%l%iX%m%iX%n%iX%o%iX%p%iX%q%iX%r%iX%s%iXg%iX!T%iX!U%iX~O&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O{%iX!x%iX#g%iX%[%iX%_%iX%z%iX%{%iX!W%iX![%iX!Q%iX#[%iXt%iX!m%iX~P,eOz#dO{%hX!x%hX#g%hX%[%hX%_%hX%z%hX~Oo0cOv0qO~P'vO#g#gO%[#iO%_#iO~O%uWO~O!T#nO#u!VO#z!WO#}hO~OopO~P'vOV#sOa#tO%uWO{wP~OV#xOo0cOv0qO!Q#yO~P'vO{#{O!x$QO%z#|O#g!yX%[!yX%_!yX~OV#xOo0cOv0qO#g#SX%[#SX%_#SX~P'vOo0cOv0qO#g#WX%[#WX%_#WX~P'vOh$WO%uWO~O!f$YO!r$YO%uWO~OV$eO~P'vO!U$gO#s$hO#u$iO~O{$jO~OV$qO~P'vOS$sO%[$rO%_$rO%c$tO~OV$}Oa$}Og%POo0cOv0qO~P'vOo0cOv0qO{%SO~P'vO&Y%UO~Oa!bOh!iO!X!kO!f!mOVba_bakbalbambanbaobapbasbazba{ba!xba#gba%[ba%_ba%jba%kba%lba%mba%nba%oba%pba%qba%rba%sba%zbagba!Tba!Uba%{ba!Wba![ba!Qba#[batba!mba~On%ZO~Oo%ZO~P'vOo0cO~P'vOk0eOl0fOm0dOn0dOo0mOp0nOs0rOg%wX!T%wX!U%wX%{%wX!W%wX![%wX!Q%wX#[%wX!m%wX~P)pO%{%]Og%vXz%vX!T%vX!U%vX!W%vX{%vX~Og%_Oz%`O!T%dO!U%cO~Og%_O~Oz%gO!T%dO!U%cO!W&SX~O!W%kO~Oz%lO{%nO!T%dO!U%cO![%}X~O![%rO~O![%sO~OQ#XO%`#XO%a%uO~OV%wOo0cOv0qO!PrO~P'vOQ#^OR#[O%`#^O%a%zO~OV!qa_!qaa!qah!qak!qal!qam!qan!qao!qap!qas!qaz!qa{!qa!X!qa!f!qa!x!qa#g!qa%[!qa%_!qa%j!qa%k!qa%l!qa%m!qa%n!qa%o!qa%p!qa%q!qa%r!qa%s!qa%z!qag!qa!T!qa!U!qa%{!qa!W!qa![!qa!Q!qa#[!qat!qa!m!qa~P#yOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P%SOV&OOopOvqO{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P'vOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#g$zX%[$zX%_$zX~P'vO#g#gO%[&TO%_&TO~O!f&UOh&sX%[&sXz&sX#[&sX#g&sX%_&sX#Z&sXg&sX~Oh!iO%[&WO~Okealeameaneaoeapeaseazea{ea!xea#gea%[ea%_ea%zeagea!Tea!Uea%{ea!Wea![ea!Qea#[eatea!mea~P%SOsqazqa{qa#gqa%[qa%_qa%zqa~Ok!pOl!qOm!oOn!oOo!rOp!sO!xqa~PEcO%z&YOz%yX{%yX~O%uWOz%yX{%yX~Oz&]O{wX~O{&_O~Oz%lO#g%}X%[%}X%_%}Xg%}X{%}X![%}X!m%}X%z%}X~OV0lOo0cOv0qO!PrO~P'vO%z#|O#gUa%[Ua%_Ua~Oz&hO#g&PX%[&PX%_&PXn&PX~P%SOz&kO!Q&jO#g#Wa%[#Wa%_#Wa~Oz&lO#[&nO#g&rX%[&rX%_&rXg&rX~O!f$YO!r$YO#Z&qO%uWO~O#Z&qO~Oz&sO#g&tX%[&tX%_&tX~Oz&uO#g&pX%[&pX%_&pX{&pX~O!X&wO%z&xO~Oz&|On&wX~P%SOn'PO~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO%['UO~P'vOt'YO#p'WO#q'XOP#naV#naf#nah#nao#nas#nav#na!P#na!Q#na!T#na!U#na!X#na!]#na!h#na!r#na!s#na!t#na!{#na!}#na#P#na#R#na#T#na#X#na#Z#na#^#na#_#na#a#na#c#na#l#na#o#na#s#na#u#na#z#na#}#na$P#na%X#na%o#na%p#na%t#na%u#na&Z#na&[#na&]#na&^#na&_#na&`#na&a#na&b#na&c#na&d#na&e#na&f#na&g#na&h#na&i#na&j#na%Z#na%_#na~Oz'ZO#[']O{&xX~Oh'_O!X&wO~Oh!iO{$jO!X&wO~O{'eO~P%SO%['hO%_'hO~OS'iO%['hO%_'hO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%k!]O~P!#uO%kWi~P!#uOV!aO_!aOa!bOh!iO!X!kO!f!mO%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%m!_O%n!_O~P!&pO%mWi%nWi~P!&pOa!bOh!iO!X!kO!f!mOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%mWi%nWi%oWi%pWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~OV!aO_!aO%q!aO%r!aO%s!aO~P!)nOVWi_Wi%qWi%rWi%sWi~P!)nO!T%dO!U%cOg&VXz&VX~O%z'kO%{'kO~P,eOz'mOg&UX~Og'oO~Oz'pO{'rO!W&XX~Oo0cOv0qOz'pO{'sO!W&XX~P'vO!W'uO~Om!oOn!oOo!rOp!sOkjisjizji{ji!xji#gji%[ji%_ji%zji~Ol!qO~P!.aOlji~P!.aOk0eOl0fOm0dOn0dOo0mOp0nO~Ot'wO~P!/jOV'|Og'}Oo0cOv0qO~P'vOg'}Oz(OO~Og(QO~O!U(SO~Og(TOz(OO!T%dO!U%cO~P%SOk0eOl0fOm0dOn0dOo0mOp0nOgqa!Tqa!Uqa%{qa!Wqa![qa!Qqa#[qatqa!mqa~PEcOV'|Oo0cOv0qO!W&Sa~P'vOz(WO!W&Sa~O!W(XO~Oz(WO!T%dO!U%cO!W&Sa~P%SOV(]Oo0cOv0qO![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~P'vOz(^O![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~O![(aO~Oz(^O!T%dO!U%cO![%}a~P%SOz(dO!T%dO!U%cO![&Ta~P%SOz(gO{&lX![&lX!m&lX%z&lX~O{(kO![(mO!m(nO%z(jO~OV&OOopOvqO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~P'vOz(pO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~O!f&UOh&sa%[&saz&sa#[&sa#g&sa%_&sa#Z&sag&sa~O%[(uO~OV#sOa#tO%uWO~Oz&]O{wa~OopOvqO~P'vOz(^O#g%}a%[%}a%_%}ag%}a{%}a![%}a!m%}a%z%}a~P%SOz(zO#g%hX%[%hX%_%hX%z%hX~O%z#|O#gUi%[Ui%_Ui~O#g&Pa%[&Pa%_&Pan&Pa~P'vOz(}O#g&Pa%[&Pa%_&Pan&Pa~O%uWO#g&ra%[&ra%_&rag&ra~Oz)SO#g&ra%[&ra%_&rag&ra~Og)VO~OV)WOh$WO%uWO~O#Z)XO~O%uWO#g&ta%[&ta%_&ta~Oz)ZO#g&ta%[&ta%_&ta~Oo0cOv0qO#g&pa%[&pa%_&pa{&pa~P'vOz)^O#g&pa%[&pa%_&pa{&pa~OV)`Oa)`O%uWO~O%z)eO~Ot)hO#j)gOP#hiV#hif#hih#hio#his#hiv#hi!P#hi!Q#hi!T#hi!U#hi!X#hi!]#hi!h#hi!r#hi!s#hi!t#hi!{#hi!}#hi#P#hi#R#hi#T#hi#X#hi#Z#hi#^#hi#_#hi#a#hi#c#hi#l#hi#o#hi#s#hi#u#hi#z#hi#}#hi$P#hi%X#hi%o#hi%p#hi%t#hi%u#hi&Z#hi&[#hi&]#hi&^#hi&_#hi&`#hi&a#hi&b#hi&c#hi&d#hi&e#hi&f#hi&g#hi&h#hi&i#hi&j#hi%Z#hi%_#hi~Ot)iOP#kiV#kif#kih#kio#kis#kiv#ki!P#ki!Q#ki!T#ki!U#ki!X#ki!]#ki!h#ki!r#ki!s#ki!t#ki!{#ki!}#ki#P#ki#R#ki#T#ki#X#ki#Z#ki#^#ki#_#ki#a#ki#c#ki#l#ki#o#ki#s#ki#u#ki#z#ki#}#ki$P#ki%X#ki%o#ki%p#ki%t#ki%u#ki&Z#ki&[#ki&]#ki&^#ki&_#ki&`#ki&a#ki&b#ki&c#ki&d#ki&e#ki&f#ki&g#ki&h#ki&i#ki&j#ki%Z#ki%_#ki~OV)kOn&wa~P'vOz)lOn&wa~Oz)lOn&wa~P%SOn)pO~O%Y)tO~Ot)wO#p'WO#q)vOP#niV#nif#nih#nio#nis#niv#ni!P#ni!Q#ni!T#ni!U#ni!X#ni!]#ni!h#ni!r#ni!s#ni!t#ni!{#ni!}#ni#P#ni#R#ni#T#ni#X#ni#Z#ni#^#ni#_#ni#a#ni#c#ni#l#ni#o#ni#s#ni#u#ni#z#ni#}#ni$P#ni%X#ni%o#ni%p#ni%t#ni%u#ni&Z#ni&[#ni&]#ni&^#ni&_#ni&`#ni&a#ni&b#ni&c#ni&d#ni&e#ni&f#ni&g#ni&h#ni&i#ni&j#ni%Z#ni%_#ni~OV)zOo0cOv0qO{$jO~P'vOo0cOv0qO{&xa~P'vOz*OO{&xa~OV*SOa*TOg*WO%q*UO%uWO~O{$jO&{*YO~Oh'_O~Oh!iO{$jO~O%[*_O~O%[*aO%_*aO~OV$}Oa$}Oo0cOv0qOg&Ua~P'vOz*dOg&Ua~Oo0cOv0qO{*gO!W&Xa~P'vOz*hO!W&Xa~Oo0cOv0qOz*hO{*kO!W&Xa~P'vOo0cOv0qOz*hO!W&Xa~P'vOz*hO{*kO!W&Xa~Om0dOn0dOo0mOp0nOgjikjisjizji!Tji!Uji%{ji!Wji{ji![ji#gji%[ji%_ji!Qji#[jitji!mji%zji~Ol0fO~P!NkOlji~P!NkOV'|Og*pOo0cOv0qO~P'vOn*rO~Og*pOz*tO~Og*uO~OV'|Oo0cOv0qO!W&Si~P'vOz*vO!W&Si~O!W*wO~OV(]Oo0cOv0qO![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~P'vOz*zO!T%dO!U%cO![&Ti~Oz*}O![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~O![+OO~Oa+QOo0cOv0qO![&Ti~P'vOz*zO![&Ti~O![+SO~OV+UOo0cOv0qO{&la![&la!m&la%z&la~P'vOz+VO{&la![&la!m&la%z&la~O!]+YO&n+[O![!nX~O![+^O~O{(kO![+_O~O{(kO![+_O!m+`O~OV&OOopOvqO{%hq!x%hq#g%hq%[%hq%_%hq%z%hq~P'vOz$ri{$ri!x$ri#g$ri%[$ri%_$ri%z$ri~P%SOV&OOopOvqO~P'vOV&OOo0cOv0qO#g%ha%[%ha%_%ha%z%ha~P'vOz+aO#g%ha%[%ha%_%ha%z%ha~Oz$ia#g$ia%[$ia%_$ian$ia~P%SO#g&Pi%[&Pi%_&Pin&Pi~P'vOz+dO#g#Wq%[#Wq%_#Wq~O#[+eOz$va#g$va%[$va%_$vag$va~O%uWO#g&ri%[&ri%_&rig&ri~Oz+gO#g&ri%[&ri%_&rig&ri~OV+iOh$WO%uWO~O%uWO#g&ti%[&ti%_&ti~Oo0cOv0qO#g&pi%[&pi%_&pi{&pi~P'vO{#{Oz#eX!W#eX~Oz+mO!W&uX~O!W+oO~Ot+rO#j)gOP#hqV#hqf#hqh#hqo#hqs#hqv#hq!P#hq!Q#hq!T#hq!U#hq!X#hq!]#hq!h#hq!r#hq!s#hq!t#hq!{#hq!}#hq#P#hq#R#hq#T#hq#X#hq#Z#hq#^#hq#_#hq#a#hq#c#hq#l#hq#o#hq#s#hq#u#hq#z#hq#}#hq$P#hq%X#hq%o#hq%p#hq%t#hq%u#hq&Z#hq&[#hq&]#hq&^#hq&_#hq&`#hq&a#hq&b#hq&c#hq&d#hq&e#hq&f#hq&g#hq&h#hq&i#hq&j#hq%Z#hq%_#hq~On$|az$|a~P%SOV)kOn&wi~P'vOz+yOn&wi~Oz,TO{$jO#[,TO~O#q,VOP#nqV#nqf#nqh#nqo#nqs#nqv#nq!P#nq!Q#nq!T#nq!U#nq!X#nq!]#nq!h#nq!r#nq!s#nq!t#nq!{#nq!}#nq#P#nq#R#nq#T#nq#X#nq#Z#nq#^#nq#_#nq#a#nq#c#nq#l#nq#o#nq#s#nq#u#nq#z#nq#}#nq$P#nq%X#nq%o#nq%p#nq%t#nq%u#nq&Z#nq&[#nq&]#nq&^#nq&_#nq&`#nq&a#nq&b#nq&c#nq&d#nq&e#nq&f#nq&g#nq&h#nq&i#nq&j#nq%Z#nq%_#nq~O#[,WOz%Oa{%Oa~Oo0cOv0qO{&xi~P'vOz,YO{&xi~O{#{O%z,[Og&zXz&zX~O%uWOg&zXz&zX~Oz,`Og&yX~Og,bO~O%Y,eO~O!T%dO!U%cOg&Viz&Vi~OV$}Oa$}Oo0cOv0qOg&Ui~P'vO{,hOz$la!W$la~Oo0cOv0qO{,iOz$la!W$la~P'vOo0cOv0qO{*gO!W&Xi~P'vOz,lO!W&Xi~Oo0cOv0qOz,lO!W&Xi~P'vOz,lO{,oO!W&Xi~Og$hiz$hi!W$hi~P%SOV'|Oo0cOv0qO~P'vOn,qO~OV'|Og,rOo0cOv0qO~P'vOV'|Oo0cOv0qO!W&Sq~P'vOz$gi![$gi#g$gi%[$gi%_$gig$gi{$gi!m$gi%z$gi~P%SOV(]Oo0cOv0qO~P'vOa+QOo0cOv0qO![&Tq~P'vOz,sO![&Tq~O![,tO~OV(]Oo0cOv0qO![%}q#g%}q%[%}q%_%}qg%}q{%}q!m%}q%z%}q~P'vO{,uO~OV+UOo0cOv0qO{&li![&li!m&li%z&li~P'vOz,zO{&li![&li!m&li%z&li~O!]+YO&n+[O![!na~O{(kO![,}O~OV&OOo0cOv0qO#g%hi%[%hi%_%hi%z%hi~P'vOz-OO#g%hi%[%hi%_%hi%z%hi~O%uWO#g&rq%[&rq%_&rqg&rq~Oz-RO#g&rq%[&rq%_&rqg&rq~OV)`Oa)`O%uWO!W&ua~Oz-TO!W&ua~On$|iz$|i~P%SOV)kO~P'vOV)kOn&wq~P'vOt-XOP#myV#myf#myh#myo#mys#myv#my!P#my!Q#my!T#my!U#my!X#my!]#my!h#my!r#my!s#my!t#my!{#my!}#my#P#my#R#my#T#my#X#my#Z#my#^#my#_#my#a#my#c#my#l#my#o#my#s#my#u#my#z#my#}#my$P#my%X#my%o#my%p#my%t#my%u#my&Z#my&[#my&]#my&^#my&_#my&`#my&a#my&b#my&c#my&d#my&e#my&f#my&g#my&h#my&i#my&j#my%Z#my%_#my~O%Z-]O%_-]O~P`O#q-^OP#nyV#nyf#nyh#nyo#nys#nyv#ny!P#ny!Q#ny!T#ny!U#ny!X#ny!]#ny!h#ny!r#ny!s#ny!t#ny!{#ny!}#ny#P#ny#R#ny#T#ny#X#ny#Z#ny#^#ny#_#ny#a#ny#c#ny#l#ny#o#ny#s#ny#u#ny#z#ny#}#ny$P#ny%X#ny%o#ny%p#ny%t#ny%u#ny&Z#ny&[#ny&]#ny&^#ny&_#ny&`#ny&a#ny&b#ny&c#ny&d#ny&e#ny&f#ny&g#ny&h#ny&i#ny&j#ny%Z#ny%_#ny~Oz-aO{$jO#[-aO~Oo0cOv0qO{&xq~P'vOz-dO{&xq~O%z,[Og&zaz&za~O{#{Og&zaz&za~OV*SOa*TO%q*UO%uWOg&ya~Oz-hOg&ya~O$S-lO~OV$}Oa$}Oo0cOv0qO~P'vOo0cOv0qO{-mOz$li!W$li~P'vOo0cOv0qOz$li!W$li~P'vO{-mOz$li!W$li~Oo0cOv0qO{*gO~P'vOo0cOv0qO{*gO!W&Xq~P'vOz-pO!W&Xq~Oo0cOv0qOz-pO!W&Xq~P'vOs-sO!T%dO!U%cOg&Oq!W&Oq![&Oqz&Oq~P!/jOa+QOo0cOv0qO![&Ty~P'vOz$ji![$ji~P%SOa+QOo0cOv0qO~P'vOV+UOo0cOv0qO~P'vOV+UOo0cOv0qO{&lq![&lq!m&lq%z&lq~P'vO{(kO![-xO!m-yO%z-wO~OV&OOo0cOv0qO#g%hq%[%hq%_%hq%z%hq~P'vO%uWO#g&ry%[&ry%_&ryg&ry~OV)`Oa)`O%uWO!W&ui~Ot-}OP#m!RV#m!Rf#m!Rh#m!Ro#m!Rs#m!Rv#m!R!P#m!R!Q#m!R!T#m!R!U#m!R!X#m!R!]#m!R!h#m!R!r#m!R!s#m!R!t#m!R!{#m!R!}#m!R#P#m!R#R#m!R#T#m!R#X#m!R#Z#m!R#^#m!R#_#m!R#a#m!R#c#m!R#l#m!R#o#m!R#s#m!R#u#m!R#z#m!R#}#m!R$P#m!R%X#m!R%o#m!R%p#m!R%t#m!R%u#m!R&Z#m!R&[#m!R&]#m!R&^#m!R&_#m!R&`#m!R&a#m!R&b#m!R&c#m!R&d#m!R&e#m!R&f#m!R&g#m!R&h#m!R&i#m!R&j#m!R%Z#m!R%_#m!R~Oo0cOv0qO{&xy~P'vOV*SOa*TO%q*UO%uWOg&yi~O$S-lO%Z.VO%_.VO~OV.aOh._O!X.^O!].`O!h.YO!s.[O!t.[O%p.XO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O~Oo0cOv0qOz$lq!W$lq~P'vO{.fOz$lq!W$lq~Oo0cOv0qO{*gO!W&Xy~P'vOz.gO!W&Xy~Oo0cOv.kO~P'vOs-sO!T%dO!U%cOg&Oy!W&Oy![&Oyz&Oy~P!/jO{(kO![.nO~O{(kO![.nO!m.oO~OV*SOa*TO%q*UO%uWO~Oh.tO!f.rOz$TX#[$TX%j$TXg$TX~Os$TX{$TX!W$TX![$TX~P$-bO%o.vO%p.vOs$UXz$UX{$UX#[$UX%j$UX!W$UXg$UX![$UX~O!h.xO~Oz.|O#[/OO%j.yOs&|X{&|X!W&|Xg&|X~Oa/RO~P$)zOh.tOs&}Xz&}X{&}X#[&}X%j&}X!W&}Xg&}X![&}X~Os/VO{$jO~Oo0cOv0qOz$ly!W$ly~P'vOo0cOv0qO{*gO!W&X!R~P'vOz/ZO!W&X!R~Og&RXs&RX!T&RX!U&RX!W&RX![&RXz&RX~P!/jOs-sO!T%dO!U%cOg&Qa!W&Qa![&Qaz&Qa~O{(kO![/^O~O!f.rOh$[as$[az$[a{$[a#[$[a%j$[a!W$[ag$[a![$[a~O!h/eO~O%o.vO%p.vOs$Uaz$Ua{$Ua#[$Ua%j$Ua!W$Uag$Ua![$Ua~O%j.yOs$Yaz$Ya{$Ya#[$Ya!W$Yag$Ya![$Ya~Os&|a{&|a!W&|ag&|a~P$)nOz/jOs&|a{&|a!W&|ag&|a~O!W/mO~Og/mO~O{/oO~O![/pO~Oo0cOv0qO{*gO!W&X!Z~P'vO{/sO~O%z/tO~P$-bOz/uO#[/OO%j.yOg'PX~Oz/uOg'PX~Og/wO~O!h/xO~O#[/OOs%Saz%Sa{%Sa%j%Sa!W%Sag%Sa![%Sa~O#[/OO%j.yOs%Waz%Wa{%Wa!W%Wag%Wa~Os&|i{&|i!W&|ig&|i~P$)nOz/zO#[/OO%j.yO!['Oa~Og'Pa~P$)nOz0SOg'Pa~Oa0UO!['Oi~P$)zOz0WO!['Oi~Oz0WO#[/OO%j.yO!['Oi~O#[/OO%j.yOg$biz$bi~O%z0ZO~P$-bO#[/OO%j.yOg%Vaz%Va~Og'Pi~P$)nO{0^O~Oa0UO!['Oq~P$)zOz0`O!['Oq~O#[/OO%j.yOz%Ui![%Ui~Oa0UO~P$)zOa0UO!['Oy~P$)zO#[/OO%j.yOg$ciz$ci~O#[/OO%j.yOz%Uq![%Uq~Oz+aO#g%ha%[%ha%_%ha%z%ha~P%SOV&OOo0cOv0qO~P'vOn0hO~Oo0hO~P'vO{0iO~Ot0jO~P!/jO&]&Z&j&h&i&g&f&d&e&c&b&`&a&_&^&[%u~",goto:"!=j'QPPPPPP'RP'Z*s+[+t,_,y-fP.SP'Z.r.r'ZPPP'Z2[PPPPPP2[5PPP5PP7b7k=sPP=v>h>kPP'Z'ZPP>zPP'Z'ZPP'Z'Z'Z'Z'Z?O?w'ZP?zP@QDXGuGyPG|HWH['ZPPPH_Hk'RP'R'RP'RP'RP'RP'RP'R'R'RP'RPP'RPP'RP'RPHqH}IVPI^IdPI^PI^I^PPPI^PKrPK{LVL]KrPI^LfPI^PLmLsPLwM]MzNeLwLwNkNxLwLwLwLw! ^! d! g! l! o! y!!P!!]!!o!!u!#P!#V!#s!#y!$P!$Z!$a!$g!$y!%T!%Z!%a!%k!%q!%w!%}!&T!&Z!&e!&k!&u!&{!'U!'[!'k!'s!'}!(UPPPPPPPPPPP!([!(_!(e!(n!(x!)TPPPPPPPPPPPP!-u!/Z!3^!6oPP!6w!7W!7a!8Y!8P!8c!8i!8l!8o!8r!8z!9jPPPPPPPPPPPPPPPPP!9m!9q!9wP!:]!:a!:m!:v!;S!;j!;m!;p!;v!;|!<S!<VP!<_!<h!=d!=g]eOn#g$j)t,P'}`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r{!cQ#c#p$R$d$p%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g}!dQ#c#p$R$d$p$u%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!P!eQ#c#p$R$d$p$u$v%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!R!fQ#c#p$R$d$p$u$v$w%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!T!gQ#c#p$R$d$p$u$v$w$x%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!V!hQ#c#p$R$d$p$u$v$w$x$y%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g!Z!hQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v0g'}TOTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r&eVOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0n0r%oXOYZ[dnrxy}!P!Q!U!i!k#[#d#g#y#{#}$Q$h$j$}%S%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/V/Z0i0j0kQ#vqQ/[.kR0o0q't`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rh#jhz{$W$Z&l&q)S)X+f+g-RW#rq&].k0qQ$]|Q$a!OQ$n!VQ$o!WW$|!i'm*d,gS&[#s#tQ'S$iQ(s&UQ)U&nU)Y&s)Z+jW)a&w+m-T-{Q*Q']W*R'_,`-h.TQ+l)`S,_*S*TQ-Q+eQ-_,TQ-c,WQ.R-al.W-l.^._.a.z.|/R/j/o/t/y0U0Z0^Q/S.`Q/a.tQ/l/OU0P/u0S0[X0V/z0W0_0`R&Z#r!_!wYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZR%^!vQ!{YQ%x#[Q&d#}Q&g$QR,{+YT.j-s/s!Y!jQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v0gQ&X#kQ'c$oR*^'dR'l$|Q%V!mR/_.r'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rS#a_#b!P.[-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rT#a_#bT#^^#_R(o%xa(l%x(n(o+`,{-y-z.oT+[(k+]R-z,{Q$PsQ+l)aQ,^*RR-e,_X#}s$O$P&fQ&y$aQ'a$nQ'd$oR)s'SQ)b&wV-S+m-T-{ZgOn$j)t,PXkOn)t,PQ$k!TQ&z$bQ&{$cQ'^$mQ'b$oQ)q'RQ)x'WQ){'XQ)|'YQ*Z'`S*]'c'dQ+s)gQ+u)hQ+v)iQ+z)oS+|)r*[Q,Q)vQ,R)wS,S)y)zQ,d*^Q-V+rQ-W+tQ-Y+{S-Z+},OQ-`,UQ-b,VQ-|-XQ.O-[Q.P-^Q.Q-_Q.p-}Q.q.RQ/W.dR/r/XWkOn)t,PR#mjQ'`$nS)r'S'aR,O)sQ,]*RR-f,^Q*['`Q+})rR-[,OZiOjn)t,PQ'f$pR*`'gT-j,e-ku.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^t.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^Q/S.`X0V/z0W0_0`!P.Z-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`Q.w.YR/f.xg.z.].{/b/i/n/|0O0Q0]0a0bu.b-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^X.u.W.b/a0PR/c.tV0R/u0S0[R/X.dQnOS#on,PR,P)tQ&^#uR(x&^S%m#R#wS(_%m(bT(b%p&`Q%a!yQ%h!}W(P%a%h(U(YQ(U%eR(Y%jQ&i$RR)O&iQ(e%qQ*{(`T+R(e*{Q'n%OR*e'nS'q%R%SY*i'q*j,m-q.hU*j'r's'tU,m*k*l*mS-q,n,oR.h-rQ#Y]R%t#YQ#_^R%y#_Q(h%vS+W(h+XR+X(iQ+](kR,|+]Q#b_R%{#bQ#ebQ%}#cW&Q#e%}({+bQ({&cR+b0gQ$OsS&e$O&fR&f$PQ&v$_R)_&vQ&V#jR(t&VQ&m$VS)T&m+hR+h)UQ$Z{R&p$ZQ&t$]R)[&tQ+n)bR-U+nQ#hfR&S#hQ)f&zR+q)fQ&}$dS)m&})nR)n'OQ'V$kR)u'VQ'[$lS*P'[,ZR,Z*QQ,a*VR-i,aWjOn)t,PR#ljQ-k,eR.U-kd.{.]/b/i/n/|0O0Q0]0a0bR/h.{U.s.W/a0PR/`.sQ/{/nS0X/{0YR0Y/|S/v/b/cR0T/vQ.}.]R/k.}R!ZPXmOn)t,PWlOn)t,PR'T$jYfOn$j)t,PR&R#g[sOn#g$j)t,PR&d#}&dQOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0n0rQ!nTQ#caQ#poU$Rt%c(SS$d!R$gQ$p!XQ$u!cQ$v!dQ$w!eQ$x!fQ$y!gQ$z!hQ%e!zQ%j#OQ%p#SQ%q#TQ&`#xQ'O$eQ'g$qQ(q&OU(|&h(}+cW)j&|)l+x+yQ*o'|Q*x(]Q+w)kQ,v+QR0g0lQ!yYQ!}ZQ$b!PQ$c!QQ%R!kQ't%S^'{%`%g(O(W*q*t*v^*f'p*h,k,l-p.g/ZQ*l'rQ*m'sQ+t)gQ,j*gQ,n*kQ-n,hQ-o,iQ-r,oQ.e-mR/Y.f[bOn#g$j)t,P!^!vYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZQ#R[Q#fdS#wrxQ$UyW$_}$Q'P)pS$l!U$hW${!i'm*d,gS%v#[+Y`&P#d%|(p(r(z+a-O0kQ&a#yQ&b#{Q&c#}Q'j$}Q'z%^W([%l(^*y*}Q(`%nQ(i%wQ(v&ZS(y&_0iQ)P&jQ)Q&kU)]&u)^+kQ)d&xQ)y'WY)}'Z*O,X,Y-dQ*b'lS*n'w0jW+P(d*z,s,wW+T(g+V,y,zQ+p)eQ,U)zQ,c*YQ,x+UQ-P+dQ-e,]Q-v,uQ.S-fR/q/VhUOn#d#g$j%|&_'w(p(r)t,P%U!uYZ[drxy}!P!Q!U!i!k#[#y#{#}$Q$h$}%S%^%`%g%l%n%w&Z&j&k&u&x'P'W'Z'l'm'p'r's(O(W(^(d(g(z)^)e)g)p)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/V/Z0i0j0kQ#qpW%W!o!s0d0nQ%X!pQ%Y!qQ%[!tQ%f0cS'v%Z0hQ'x0eQ'y0fQ,p*rQ-u,qS.i-s/sR0p0rU#uq.k0qR(w&][cOn#g$j)t,PZ!xY#[#}$Q+YQ#W[Q#zrR$TxQ%b!yQ%i!}Q%o#RQ'j${Q(V%eQ(Z%jQ(c%pQ(f%qQ*|(`Q,f*bQ-t,pQ.m-uR/].lQ$StQ(R%cR*s(SQ.l-sR/}/sR#QZR#V[R%Q!iQ%O!iV*c'm*d,g!Z!lQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v0gR%T!kT#]^#_Q%x#[R,{+YQ(m%xS+_(n(oQ,}+`Q-x,{S.n-y-zR/^.oT+Z(k+]Q$`}Q&g$QQ)o'PR+{)pQ$XzQ)W&qR+i)XQ$XzQ&o$WQ)W&qR+i)XQ#khW$Vz$W&q)XQ$[{Q&r$ZZ)R&l)S+f+g-RR$^|R)c&wXlOn)t,PQ$f!RR'Q$gQ$m!UR'R$hR*X'_Q*V'_V-g,`-h.TQ.d-lQ/P.^R/Q._U.]-l.^._Q/U.aQ/b.tQ/g.zU/i.|/j/yQ/n/RQ/|/oQ0O/tU0Q/u0S0[Q0]0UQ0a0ZR0b0^R/T.`R/d.t",nodeNames:"⚠ print Escape { Comment Script AssignStatement * BinaryExpression BitOp BitOp BitOp BitOp ArithOp ArithOp @ ArithOp ** UnaryExpression ArithOp BitOp AwaitExpression await ) ( ParenthesizedExpression BinaryExpression or and CompareOp in not is UnaryExpression ConditionalExpression if else LambdaExpression lambda ParamList VariableName AssignOp , : NamedExpression AssignOp YieldExpression yield from TupleExpression ComprehensionExpression async for LambdaExpression ] [ ArrayExpression ArrayComprehensionExpression } { DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression CallExpression ArgList AssignOp MemberExpression . PropertyName Number String FormatString FormatReplacement FormatSelfDoc FormatConversion FormatSpec FormatReplacement FormatSelfDoc ContinuedString Ellipsis None Boolean TypeDef AssignOp UpdateStatement UpdateOp ExpressionStatement DeleteStatement del PassStatement pass BreakStatement break ContinueStatement continue ReturnStatement return YieldStatement PrintStatement RaiseStatement raise ImportStatement import as ScopeStatement global nonlocal AssertStatement assert TypeDefinition type TypeParamList TypeParam StatementGroup ; IfStatement Body elif WhileStatement while ForStatement TryStatement try except finally WithStatement with FunctionDefinition def ParamList AssignOp TypeDef ClassDefinition class DecoratedStatement Decorator At MatchStatement match MatchBody MatchClause case CapturePattern LiteralPattern ArithOp ArithOp AsPattern OrPattern LogicOp AttributePattern SequencePattern MappingPattern StarPattern ClassPattern PatternArgList KeywordPattern KeywordPattern Guard",maxTerm:277,context:ts,nodeProps:[["isolate",-5,4,71,72,73,77,""],["group",-15,6,85,87,88,90,92,94,96,98,99,100,102,105,108,110,"Statement Statement",-22,8,18,21,25,40,49,50,56,57,60,61,62,63,64,67,70,71,72,79,80,81,82,"Expression",-10,114,116,119,121,122,126,128,133,135,138,"Statement",-9,143,144,147,148,150,151,152,153,154,"Pattern"],["openedBy",23,"(",54,"[",58,"{"],["closedBy",24,")",55,"]",59,"}"]],propSources:[is],skippedNodes:[0,4],repeatNodeCount:34,tokenData:"!2|~R!`OX%TXY%oY[%T[]%o]p%Tpq%oqr'ars)Yst*xtu%Tuv,dvw-hwx.Uxy/tyz0[z{0r{|2S|}2p}!O3W!O!P4_!P!Q:Z!Q!R;k!R![>_![!]Do!]!^Es!^!_FZ!_!`Gk!`!aHX!a!b%T!b!cIf!c!dJU!d!eK^!e!hJU!h!i!#f!i!tJU!t!u!,|!u!wJU!w!x!.t!x!}JU!}#O!0S#O#P&o#P#Q!0j#Q#R!1Q#R#SJU#S#T%T#T#UJU#U#VK^#V#YJU#Y#Z!#f#Z#fJU#f#g!,|#g#iJU#i#j!.t#j#oJU#o#p!1n#p#q!1s#q#r!2a#r#s!2f#s$g%T$g;'SJU;'S;=`KW<%lOJU`%YT&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T`%lP;=`<%l%To%v]&n`%c_OX%TXY%oY[%T[]%o]p%Tpq%oq#O%T#O#P&o#P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To&tX&n`OY%TYZ%oZ]%T]^%o^#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc'f[&n`O!_%T!_!`([!`#T%T#T#U(r#U#f%T#f#g(r#g#h(r#h#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(cTmR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(yT!mR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk)aV&n`&[ZOr%Trs)vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk){V&n`Or%Trs*bs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk*iT&n`&^ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To+PZS_&n`OY*xYZ%TZ]*x]^%T^#o*x#o#p+r#p#q*x#q#r+r#r;'S*x;'S;=`,^<%lO*x_+wTS_OY+rZ]+r^;'S+r;'S;=`,W<%lO+r_,ZP;=`<%l+ro,aP;=`<%l*xj,kV%rQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-XT!xY&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-oV%lQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.]V&n`&ZZOw%Twx.rx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.wV&n`Ow%Twx/^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/eT&n`&]ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/{ThZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc0cTgR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk0yXVZ&n`Oz%Tz{1f{!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk1mVaR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk2ZV%oZ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc2wTzR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To3_W%pZ&n`O!_%T!_!`-Q!`!a3w!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Td4OT&{S&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk4fX!fQ&n`O!O%T!O!P5R!P!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5WV&n`O!O%T!O!P5m!P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5tT!rZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti6[a!hX&n`O!Q%T!Q![6T![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S6T#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti7fZ&n`O{%T{|8X|}%T}!O8X!O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8^V&n`O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8z]!hX&n`O!Q%T!Q![8s![!l%T!l!m9s!m#R%T#R#S8s#S#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti9zT!hX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk:bX%qR&n`O!P%T!P!Q:}!Q!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj;UV%sQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti;ro!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!d%T!d!e?q!e!g%T!g!h7a!h!l%T!l!m9s!m!q%T!q!rA]!r!z%T!z!{Bq!{#R%T#R#S>_#S#U%T#U#V?q#V#X%T#X#Y7a#Y#^%T#^#_9s#_#c%T#c#dA]#d#l%T#l#mBq#m#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti=xV&n`O!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti>fc!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S>_#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti?vY&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti@mY!hX&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiAbX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBUX!hX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBv]&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiCv]!hX&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToDvV{_&n`O!_%T!_!`E]!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TcEdT%{R&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkEzT#gZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkFbXmR&n`O!^%T!^!_F}!_!`([!`!a([!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjGUV%mQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkGrV%zZ&n`O!_%T!_!`([!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkH`WmR&n`O!_%T!_!`([!`!aHx!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjIPV%nQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkIoV_Q#}P&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToJ_]&n`&YS%uZO!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoKZP;=`<%lJUoKge&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!tJU!t!uLx!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#gLx#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoMRa&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUkN_V&n`&`ZOr%TrsNts#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkNyV&n`Or%Trs! `s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! gT&n`&bZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! }V&n`&_ZOw%Twx!!dx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!!iV&n`Ow%Twx!#Ox#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!#VT&n`&aZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!#oe&n`&YS%uZOr%Trs!%Qsw%Twx!&px!Q%T!Q![JU![!c%T!c!tJU!t!u!(`!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#g!(`#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!%XV&n`&dZOr%Trs!%ns#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!%sV&n`Or%Trs!&Ys#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&aT&n`&fZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&wV&n`&cZOw%Twx!'^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!'cV&n`Ow%Twx!'xx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!(PT&n`&eZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!(ia&n`&YS%uZOr%Trs!)nsw%Twx!+^x!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!)uV&n`&hZOr%Trs!*[s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*aV&n`Or%Trs!*vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*}T&n`&jZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!+eV&n`&gZOw%Twx!+zx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,PV&n`Ow%Twx!,fx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,mT&n`&iZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!-Vi&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!dJU!d!eLx!e!hJU!h!i!(`!i!}JU!}#R%T#R#SJU#S#T%T#T#UJU#U#VLx#V#YJU#Y#Z!(`#Z#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUo!.}a&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!0ZT!XZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc!0qT!WR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj!1XV%kQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!1sO!]~k!1zV%jR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!2fO![~i!2mT%tX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T",tokenizers:[ss,Ht,Jt,rs,0,1,2,3,4],topRules:{Script:[0,5]},specialized:[{term:221,get:r=>as[r]||-1}],tokenPrec:7668}),de=new Ae,Te=new Set(["Script","Body","FunctionDefinition","ClassDefinition","LambdaExpression","ForStatement","MatchClause"]);function $(r){return(e,t,s)=>{if(s)return!1;let n=e.node.getChild("VariableName");return n&&t(n,r),!0}}const Os={FunctionDefinition:$("function"),ClassDefinition:$("class"),ForStatement(r,e,t){if(t){for(let s=r.node.firstChild;s;s=s.nextSibling)if(s.name=="VariableName")e(s,"variable");else if(s.name=="in")break}},ImportStatement(r,e){var t,s;let{node:n}=r,a=((t=n.firstChild)===null||t===void 0?void 0:t.name)=="from";for(let i=n.getChild("import");i;i=i.nextSibling)i.name=="VariableName"&&((s=i.nextSibling)===null||s===void 0?void 0:s.name)!="as"&&e(i,a?"variable":"namespace")},AssignStatement(r,e){for(let t=r.node.firstChild;t;t=t.nextSibling)if(t.name=="VariableName")e(t,"variable");else if(t.name==":"||t.name=="AssignOp")break},ParamList(r,e){for(let t=null,s=r.node.firstChild;s;s=s.nextSibling)s.name=="VariableName"&&(!t||!/\*|AssignOp/.test(t.name))&&e(s,"variable"),t=s},CapturePattern:$("variable"),AsPattern:$("variable"),__proto__:null};function Se(r,e){let t=de.get(e);if(t)return t;let s=[],n=!0;function a(i,o){let O=r.sliceString(i.from,i.to);s.push({label:O,type:o})}return e.cursor(_e.IncludeAnonymous).iterate(i=>{if(i.name){let o=Os[i.name];if(o&&o(i,a,n)||!n&&Te.has(i.name))return!1;n=!1}else if(i.to-i.from>8192){for(let o of Se(r,i.node))s.push(o);return!1}}),de.set(e,s),s}const he=/^[\w\xa1-\uffff][\w\d\xa1-\uffff]*$/,ke=["String","FormatString","Comment","PropertyName"];function ls(r){let e=Ne(r.state).resolveInner(r.pos,-1);if(ke.indexOf(e.name)>-1)return null;let t=e.name=="VariableName"||e.to-e.from<20&&he.test(r.state.sliceDoc(e.from,e.to));if(!t&&!r.explicit)return null;let s=[];for(let n=e;n;n=n.parent)Te.has(n.name)&&(s=s.concat(Se(r.state.doc,n)));return{options:s,from:t?e.from:r.pos,validFor:he}}const ds=["__annotations__","__builtins__","__debug__","__doc__","__import__","__name__","__loader__","__package__","__spec__","False","None","True"].map(r=>({label:r,type:"constant"})).concat(["ArithmeticError","AssertionError","AttributeError","BaseException","BlockingIOError","BrokenPipeError","BufferError","BytesWarning","ChildProcessError","ConnectionAbortedError","ConnectionError","ConnectionRefusedError","ConnectionResetError","DeprecationWarning","EOFError","Ellipsis","EncodingWarning","EnvironmentError","Exception","FileExistsError","FileNotFoundError","FloatingPointError","FutureWarning","GeneratorExit","IOError","ImportError","ImportWarning","IndentationError","IndexError","InterruptedError","IsADirectoryError","KeyError","KeyboardInterrupt","LookupError","MemoryError","ModuleNotFoundError","NameError","NotADirectoryError","NotImplemented","NotImplementedError","OSError","OverflowError","PendingDeprecationWarning","PermissionError","ProcessLookupError","RecursionError","ReferenceError","ResourceWarning","RuntimeError","RuntimeWarning","StopAsyncIteration","StopIteration","SyntaxError","SyntaxWarning","SystemError","SystemExit","TabError","TimeoutError","TypeError","UnboundLocalError","UnicodeDecodeError","UnicodeEncodeError","UnicodeError","UnicodeTranslateError","UnicodeWarning","UserWarning","ValueError","Warning","ZeroDivisionError"].map(r=>({label:r,type:"type"}))).concat(["bool","bytearray","bytes","classmethod","complex","float","frozenset","int","list","map","memoryview","object","range","set","staticmethod","str","super","tuple","type"].map(r=>({label:r,type:"class"}))).concat(["abs","aiter","all","anext","any","ascii","bin","breakpoint","callable","chr","compile","delattr","dict","dir","divmod","enumerate","eval","exec","exit","filter","format","getattr","globals","hasattr","hash","help","hex","id","input","isinstance","issubclass","iter","len","license","locals","max","min","next","oct","open","ord","pow","print","property","quit","repr","reversed","round","setattr","slice","sorted","sum","vars","zip"].map(r=>({label:r,type:"function"}))),hs=[g("def ${name}(${params}):\n	${}",{label:"def",detail:"function",type:"keyword"}),g("for ${name} in ${collection}:\n	${}",{label:"for",detail:"loop",type:"keyword"}),g("while ${}:\n	${}",{label:"while",detail:"loop",type:"keyword"}),g("try:\n	${}\nexcept ${error}:\n	${}",{label:"try",detail:"/ except block",type:"keyword"}),g(`if \${}:
	
`,{label:"if",detail:"block",type:"keyword"}),g("if ${}:\n	${}\nelse:\n	${}",{label:"if",detail:"/ else block",type:"keyword"}),g("class ${name}:\n	def __init__(self, ${params}):\n			${}",{label:"class",detail:"definition",type:"keyword"}),g("import ${module}",{label:"import",detail:"statement",type:"keyword"}),g("from ${module} import ${names}",{label:"from",detail:"import",type:"keyword"})],cs=Ge(ke,Ve(ds.concat(hs)));function I(r){let{node:e,pos:t}=r,s=r.lineIndent(t,-1),n=null;for(;;){let a=e.childBefore(t);if(a)if(a.name=="Comment")t=a.from;else if(a.name=="Body"||a.name=="MatchBody")r.baseIndentFor(a)+r.unit<=s&&(n=a),e=a;else if(a.name=="MatchClause")e=a;else if(a.type.is("Statement"))e=a;else break;else break}return n}function D(r,e){let t=r.baseIndentFor(e),s=r.lineAt(r.pos,-1),n=s.from+s.text.length;return/^\s*($|#)/.test(s.text)&&r.node.to<n+100&&!/\S/.test(r.state.sliceDoc(n,r.node.to))&&r.lineIndent(r.pos,-1)<=t||/^\s*(else:|elif |except |finally:|case\s+[^=:]+:)/.test(r.textAfter)&&r.lineIndent(r.pos,-1)>t?null:t+r.unit}const Y=Xe.define({name:"python",parser:os.configure({props:[We.add({Body:r=>{var e;let t=/^\s*(#|$)/.test(r.textAfter)&&I(r)||r.node;return(e=D(r,t))!==null&&e!==void 0?e:r.continue()},MatchBody:r=>{var e;let t=I(r);return(e=D(r,t||r.node))!==null&&e!==void 0?e:r.continue()},IfStatement:r=>/^\s*(else:|elif )/.test(r.textAfter)?r.baseIndent:r.continue(),"ForStatement WhileStatement":r=>/^\s*else:/.test(r.textAfter)?r.baseIndent:r.continue(),TryStatement:r=>/^\s*(except[ :]|finally:|else:)/.test(r.textAfter)?r.baseIndent:r.continue(),MatchStatement:r=>/^\s*case /.test(r.textAfter)?r.baseIndent+r.unit:r.continue(),"TupleExpression ComprehensionExpression ParamList ArgList ParenthesizedExpression":A({closing:")"}),"DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression":A({closing:"}"}),"ArrayExpression ArrayComprehensionExpression":A({closing:"]"}),MemberExpression:r=>r.baseIndent+r.unit,"String FormatString":()=>null,Script:r=>{var e;let t=I(r);return(e=t&&D(r,t))!==null&&e!==void 0?e:r.continue()}}),je.add({"ArrayExpression DictionaryExpression SetExpression TupleExpression":Ue,Body:(r,e)=>({from:r.from+1,to:r.to-(r.to==e.doc.length?0:1)}),"String FormatString":(r,e)=>({from:e.doc.lineAt(r.from).to,to:r.to})})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""'],stringPrefixes:["f","fr","rf","r","u","b","br","rb","F","FR","RF","R","U","B","BR","RB"]},commentTokens:{line:"#"},indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:|case\s+[^:]*:?)$/}});function _s(){return new Ee(Y,[Y.data.of({autocomplete:ls}),Y.data.of({autocomplete:cs})])}function ps(){return`
import sys
import io as _io
import json
import math
import time
import linecache as _linecache
import types as _types
import dis as _dis
import ast as _ast
import traceback as _traceback
import builtins as _builtins
import warnings as _warnings
import re as _re
import enum as _enum

# The tracer's own builtins and library functions (#34): a program that
# replaces builtins.len, json.dumps or sys.settrace doesn't change what the
# tracer calls. (The program runs in a namespace of its own.)
globals().update({_k: _v for _k, _v in vars(_builtins).items() if not _k.startswith('_')})
_json_dumps = json.dumps
_isinf = math.isinf
_isnan = math.isnan
_now = time.time
_settrace = sys.settrace
_setprofile = sys.setprofile
_getframe = sys._getframe
_real_getlimit = sys.getrecursionlimit
_real_setlimit = sys.setrecursionlimit
_real_stderr = sys.__stderr__
_DEFAULT_LIMIT = sys.getrecursionlimit()
_MemberDescriptor = _types.MemberDescriptorType
_Enum = _enum.Enum
_type_dict = type.__dict__['__dict__'].__get__
_type_name = type.__dict__['__name__'].__get__
_type_bases = type.__dict__['__bases__'].__get__
_type_mro = type.__dict__['__mro__'].__get__
_function_code = _types.FunctionType.__dict__['__code__'].__get__

# ══════════════════════════════════════
# PyTutor Tracer
# ══════════════════════════════════════

_snapshots = []
_call_stack = []  # list of frame dicts
_heap_map = {}    # id(obj) -> heap_id string
_heap_counter = 0
_step_counter = 0
_MAX_SNAPSHOTS = 5000
_MAX_SEQ_PROPS = 100
_MAX_DICT_PROPS = 50

# A run that is too long to show is stopped, keeping its steps: at the step
# cap, or shortly before the worker is killed at 10 seconds.
_TIME_BUDGET = 8.5
_stop_reason = None   # "steps", "time" or "work" once the tracer has stopped the run
_start_time = 0.0
_events = 0
# The work done so far, in units of about a microsecond under Node (#39: a
# step 10, a frame drawn 1, a heap object drawn 5, a value serialized 2), and
# how much a run may do before it is stopped as out of time: None in the app.
# The CPython suite sets it (and turns the time budget off), so a slow run
# stops at the same step on any machine.
_work = 0
_WORK_BUDGET = None
_STEP_WORK = 10
_OBJECT_WORK = 5
_VALUE_WORK = 2
_unwinding = set()    # frames an exception is propagating out of

# The instructions a frame returns (or yields) at. A 'return' event anywhere
# else is the frame unwinding: an exception leaving it, perhaps after a
# finally block or an inlined comprehension's cleanup ran (whose line events
# end _unwinding's mark) and re-raised it.
_RETURN_OPS = frozenset(_dis.opmap[name] for name in ('RETURN_VALUE', 'RETURN_CONST', 'YIELD_VALUE') if name in _dis.opmap)

def _returns(frame):
    return frame not in _unwinding and frame.f_code.co_code[frame.f_lasti] in _RETURN_OPS

class _TutorStop(BaseException):
    """Ends a run from the tracer. A BaseException, so the program's own 'except Exception' doesn't catch it."""

def _stop(reason):
    global _stop_reason
    _stop_reason = reason
    _settrace(None)
    raise _TutorStop()

# What students see when the tracer itself fails (#30, #34): the steps so far,
# and this. The details go to the browser's console.
_INTERNAL_ERROR = 'Internal PyTutor error (please report it)'

def _internal_failure():
    try:
        _real_stderr.write('PyTutor internal error:' + chr(10) + _traceback.format_exc())
    except Exception:
        pass
    _stop("internal")

# ── The recursion limit (#34) ──
#
# As "python main.py" has it: the program's module frame is depth 1, so the
# tracer's and Pyodide's frames below it (_base of them) don't count, nor do
# PyTutor's comprehension frames, and the program sees its own limit through
# sys.getrecursionlimit/setrecursionlimit (_limit). The trace function's own
# frames would count against the real limit, so it is _HEADROOM higher, and a
# new frame deeper than _limit gets CPython's RecursionError from the tracer.
# CPython turns tracing off when a trace function raises: a one-shot profile
# hook (_retrace) turns it back on.
_HEADROOM = 50
_limit = _DEFAULT_LIMIT
_base = 0
_refused = set()      # frames refused for the recursion limit: they never ran

def _getrecursionlimit():
    return _limit

def _setrecursionlimit(n):
    global _limit
    _real_setlimit(n + _base)  # CPython's own checks of n
    _limit = n
    _real_setlimit(n + _base + _HEADROOM)

_getrecursionlimit.__name__ = _getrecursionlimit.__qualname__ = 'getrecursionlimit'
_setrecursionlimit.__name__ = _setrecursionlimit.__qualname__ = 'setrecursionlimit'

def _depth(frame):
    n = 0
    while frame is not None:
        code = frame.f_code
        if not (code.co_name in _COMP_FRAMES and code.co_filename == _USER_FILE):
            n += 1
        frame = frame.f_back
    return n

def _retrace(frame, event, arg):
    _setprofile(None)
    _settrace(_tracer)

# ── What a frame shows (#38) ──
#
# Every variable the program has, in the order pythontutor.com shows them:
# a function's in its code's order (f_locals: the parameters, then the other
# locals as compiled), the module's in the order they first appeared (a
# variable deleted and defined again keeps its place), a class body's in the
# order it defined them. Hidden are only the names Python keeps itself.

# The module's own: CPython's __main__ has them, or Python sets them (from a
# docstring or annotations; the warnings module's registry).
_MODULE_BOOKKEEPING = frozenset({'__name__', '__builtins__', '__doc__', '__annotations__', '__package__', '__spec__', '__loader__', '__file__', '__cached__', '__warningregistry__'})
# A class body's and a class's own (pythontutor.com hides these too).
_CLASS_BOOKKEEPING = frozenset({'__module__', '__qualname__', '__dict__', '__weakref__', '__doc__', '__annotations__', '__classcell__', '__firstlineno__', '__static_attributes__'})
# A method's implicit cell for super() (and 3.12's for type parameters).
_FUNCTION_BOOKKEEPING = frozenset({'__class__', '__classdict__'})

_module_order = {}    # the module's variables in the order they first appeared (a dict as an ordered set)

def _shown_names(frame_info, local_vars):
    names = [k for k in dict.keys(local_vars) if type(k) is str and not k.startswith('.')]
    kind = frame_info["kind"]
    if kind == "module":
        for k in names:
            if k not in _module_order:
                _module_order[k] = None
        present = set(names)
        return [k for k in _module_order if k in present and k not in _MODULE_BOOKKEEPING]
    if kind == "class":
        # A name the class's namespace started with (an Enum's
        # _generate_next_value_, from its metaclass's __prepare__) is hidden
        # while it holds the same object.
        base = frame_info["base"]
        return [k for k in names if k not in _CLASS_BOOKKEEPING and not (k in base and dict.__getitem__(local_vars, k) is base[k])]
    return [k for k in names if k not in _FUNCTION_BOOKKEEPING]

def _frame_kind(code):
    if code.co_name == '<module>':
        return "module"
    return "function" if code.co_flags & _CO_OPTIMIZED else "class"

# The words of the program's source: an attribute a library adds (an Enum's
# _member_map_, a dataclass's __match_args__) isn't one, an attribute the
# program sets is (#38).
_source_words = frozenset()

def _is_source_word(name):
    if name in _source_words:
        return True
    # A private name as Python mangles it: _Account__secret for __secret.
    i = name.find('__', 1)
    return name.startswith('_') and i > 1 and name[i:] in _source_words

# Lines that are continuations of multi-line simple statements.
# These produce no visible variable changes, so we skip snapshots for them.
_continuation_lines = set()

# The program's file name, as CPython names it in tracebacks and warnings.
_USER_FILE = 'main.py'

# ── Output: captured at the streams (#31) ──
#
# While the program runs, sys.stdout and sys.stderr are _TutorStreams, so the
# real print (end, sep, file), sys.stdout.write, input()'s prompt, warnings,
# traceback.print_exc() and contextlib.redirect_stdout all work as in CPython
# run unbuffered (python -u). Each step shows stdout's lines, and once stderr
# has been used, every line with its stream (a line belongs to the stream that
# wrote its first characters).

_out_lines = ['']       # stdout split on newlines; the last entry is the open line
_console = []           # every line as [stream, text, input ranges or None], in program order
_console_open = False   # the last line of _console has no newline yet
_stderr_used = False
_stdin_used = False
_output_count = 0       # writes and echoes so far
_output_seen = 0        # ... when the last step was taken

def _console_add(stream, s, echo):
    # Adds s to the console's lines; an echo marks its characters as input.
    global _console_open, _output_count
    _output_count += 1
    for i, part in enumerate(s.split('\\n')):
        if i > 0:
            if not _console_open:
                _console.append([stream, '', None])
            if echo:
                # The line ends with the input's newline: an empty range at its end.
                line = _console[-1]
                line[2] = (line[2] or []) + [[len(line[1]), len(line[1])]]
            _console_open = False
        if part:
            if not _console_open:
                _console.append([stream, '', None])
                _console_open = True
            line = _console[-1]
            start = len(line[1])
            line[1] += part
            if echo:
                ranges = line[2] or []
                if ranges and ranges[-1][1] == start:
                    ranges[-1][1] = len(line[1])
                else:
                    ranges.append([start, len(line[1])])
                line[2] = ranges

def _write(stream, s):
    global _stderr_used
    if stream == 'stderr':
        _stderr_used = True
    if stream == 'stdout':
        parts = s.split('\\n')
        _out_lines[-1] += parts[0]
        _out_lines.extend(parts[1:])
    _console_add(stream, s, False)

def _echo(s):
    # What the program read from stdin shows on the console, marked as input,
    # where a terminal shows what was typed: after input()'s prompt (#32). It
    # isn't the program's output, so stdout doesn't hold it.
    global _stdin_used
    _stdin_used = True
    _console_add('stdout', s, True)

class _TutorStream(_io.TextIOBase):
    # sys.stdout or sys.stderr while the program runs: a text stream that records what is written.

    def __init__(self, stream, errors):
        self._stream = stream
        self._errors = errors

    @property
    def encoding(self):
        return 'utf-8'

    @property
    def errors(self):
        return self._errors

    @property
    def name(self):
        return '<' + self._stream + '>'

    @property
    def mode(self):
        return 'w'

    def writable(self):
        return True

    def isatty(self):
        return False

    def write(self, s):
        if not isinstance(s, str):
            raise TypeError('write() argument must be str, not ' + type(s).__name__)
        if self.closed:
            raise ValueError('I/O operation on closed file.')
        if self._errors == 'strict':
            s.encode('utf-8')  # what CPython's stdout can't encode raises here too
        _write(self._stream, s)
        return len(s)

    def __repr__(self):
        return "<_io.TextIOWrapper name='<" + self._stream + ">' mode='w' encoding='utf-8'>"

class _TutorStdin(_io.TextIOBase):
    # sys.stdin while the program runs: the input typed in the stdin panel
    # (#32). input() writes its prompt to sys.stdout and reads a line here, as
    # CPython does when stdin isn't a terminal; at the end, EOFError. What is
    # read is echoed on the console.

    def __init__(self, text):
        self._text = text
        self._pos = 0

    @property
    def encoding(self):
        return 'utf-8'

    @property
    def errors(self):
        return 'strict'

    @property
    def name(self):
        return '<stdin>'

    @property
    def mode(self):
        return 'r'

    def readable(self):
        return True

    def isatty(self):
        return False

    def _take(self, n):
        if self.closed:
            raise ValueError('I/O operation on closed file.')
        end = len(self._text) if n is None or n < 0 else min(len(self._text), self._pos + n)
        s = self._text[self._pos:end]
        self._pos = end
        if s:
            _echo(s)
        return s

    def read(self, size=-1):
        return self._take(size)

    def readline(self, size=-1):
        newline = self._text.find(chr(10), self._pos)
        n = (len(self._text) if newline < 0 else newline + 1) - self._pos
        if size is not None and size >= 0:
            n = min(n, size)
        return self._take(n)

    def __repr__(self):
        return "<_io.TextIOWrapper name='<stdin>' mode='r' encoding='utf-8'>"

def _stdout_shown():
    # stdout's lines, without the empty line after a final newline
    return _out_lines[:-1] if _out_lines[-1] == '' else list(_out_lines)

def _console_line_parts():
    # Every console line as a part (its stream, text and echoed input), once
    # stderr or stdin was used. Only the last line can have changed since the
    # last call: the ones before it are finished.
    if not (_stderr_used or _stdin_used):
        return None
    n = len(_console_lines)
    for i in range(n - 1 if n else 0, len(_console)):
        st, t, rs = _console[i]
        key = (st, t, tuple(map(tuple, rs)) if rs else None)
        if i < n and _console_lines[i][0] == key:
            continue
        line = {"text": t, "stream": st, "input": [list(r) for r in rs]} if rs else {"text": t, "stream": st}
        entry = (key, _part(line))
        if i < n:
            _console_lines[i] = entry
        else:
            _console_lines.append(entry)
    return [e[1] for e in _console_lines]

def _lines_part(lines, last):
    # A list of lines as a part: the previous list's first lines and the ones
    # added since, when it grew (run.ts builds the whole list).
    if last is None:
        return _part({"add": lines})
    before = last[1]
    keep = len(before)
    if keep and (keep > len(lines) or before[keep - 1] != lines[keep - 1]):
        keep -= 1
    if keep > len(lines) or before[:keep] != lines[:keep]:
        return _part({"add": lines})
    return _part({"base": last[0], "keep": keep, "add": lines[keep:]})

def _with_output(snapshot):
    # The output as it is now, on a step: the same parts as the last step's
    # while nothing was written (#39).
    global _output_seen, _output_parts, _stdout_last, _console_last
    _output_seen = _output_count
    if _output_parts is None or _output_parts[0] != _output_count:
        lines = _stdout_shown()
        stdout = _lines_part(lines, _stdout_last)
        _stdout_last = (stdout, lines)
        console = _console_line_parts()
        if console is not None:
            part = _lines_part(console, _console_last)
            _console_last = (part, console)
            console = part
        _output_parts = (_output_count, stdout, console)
    snapshot["stdout"] = _output_parts[1]
    if _output_parts[2] is not None:
        snapshot["console"] = _output_parts[2]
    return snapshot

def _finish_output():
    # Output written after the last step (input()'s prompt before an EOFError,
    # a print on the line that raised, sys.exit()'s message) gets a step of its
    # own, the last step's state with the output now.
    global _step_counter
    if not _snapshots or _output_count == _output_seen:
        return
    _snapshots.append(_with_output(dict(_snapshots[-1], step=_step_counter)))
    _step_counter += 1

# ── Comprehension frames (#33) ──
#
# Python 3.12 inlines list, set and dict comprehensions into the code around
# them (PEP 709): no frame of their own, their variables hidden fast locals of
# the enclosing frame, which 3.12's frame.f_locals can't read without
# corrupting them. So each comprehension is compiled as a function called on
# its outermost iterable, named <listcomp>, <setcomp> or <dictcomp> as before
# 3.12: it gets a real frame, as pythontutor.com showed one, with its own
# variables, the frames of the calls it makes on top of it, and the collection
# it builds as its return value. The tracer never evaluates the program's code
# itself. A comprehension whose meaning depends on the scope it runs in
# (an assignment expression, super(), locals(), ...) stays inlined.
# Generator expressions have real frames already.

_COMP_ARGS = {'.listcomp': '<listcomp>', '.setcomp': '<setcomp>', '.dictcomp': '<dictcomp>'}
_COMP_FRAMES = frozenset(_COMP_ARGS.values())
_SCOPE_NAMES = frozenset({'super', '__class__', 'locals', 'vars', 'dir', 'eval', 'exec'})

class _CompWrapper(_ast.NodeTransformer):
    def _wrap(self, node, arg):
        self.generic_visit(node)
        if any(g.is_async for g in node.generators):
            return node
        for sub in _ast.walk(node):
            if isinstance(sub, (_ast.NamedExpr, _ast.Await, _ast.Yield, _ast.YieldFrom)):
                return node
            if isinstance(sub, _ast.Name) and sub.id in _SCOPE_NAMES:
                return node
        outer = node.generators[0].iter
        node.generators[0].iter = _ast.copy_location(_ast.Name(arg, _ast.Load()), outer)
        params = _ast.arguments(posonlyargs=[], args=[_ast.arg(arg)], kwonlyargs=[], kw_defaults=[], defaults=[])
        func = _ast.copy_location(_ast.Lambda(params, node), node)
        return _ast.fix_missing_locations(_ast.copy_location(_ast.Call(func, [outer], []), node))

    def visit_ListComp(self, node):
        return self._wrap(node, '.listcomp')

    def visit_SetComp(self, node):
        return self._wrap(node, '.setcomp')

    def visit_DictComp(self, node):
        return self._wrap(node, '.dictcomp')

def _name_comprehensions(code):
    # The wrapping lambdas, named as their comprehension.
    consts = tuple(_name_comprehensions(c) if isinstance(c, _types.CodeType) else c for c in code.co_consts)
    if code.co_name == '<lambda>' and code.co_argcount == 1 and code.co_varnames[0] in _COMP_ARGS:
        name = _COMP_ARGS[code.co_varnames[0]]
        return code.replace(co_consts=consts, co_name=name, co_qualname=code.co_qualname[:-len('<lambda>')] + name)
    return code.replace(co_consts=consts)

def _compile_program(source_code):
    # The program's code with its comprehensions in frames of their own. The
    # source is compiled as written first, so its warnings and SyntaxError are
    # CPython's own, each once (#40); the transformed tree is compiled quietly.
    plain = compile(source_code, _USER_FILE, 'exec', dont_inherit=True)
    try:
        with _warnings.catch_warnings():
            _warnings.simplefilter('ignore')
            tree = _ast.parse(source_code, _USER_FILE)
            return _name_comprehensions(compile(_CompWrapper().visit(tree), _USER_FILE, 'exec', dont_inherit=True))
    except SyntaxError:
        return plain

def _is_comprehension(code):
    return code.co_name in _COMP_FRAMES

_CO_OPTIMIZED = 1

def _frame_locals(frame):
    # A frame's variables. The module's are its globals: 3.12's f_locals would
    # merge an inlined comprehension's hidden locals into them and write them
    # back corrupted. A class body that holds an inlined comprehension (one
    # left inlined) can't be read safely either.
    code = frame.f_code
    if code.co_name == '<module>':
        return frame.f_globals
    if not (code.co_flags & _CO_OPTIMIZED) and code.co_nlocals > 0:
        return {}
    loc = frame.f_locals
    # A metaclass's __prepare__ may give a class body a mapping that isn't a dict: not read.
    return loc if issubclass(type(loc), dict) else {}

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
#
# Serializing reads the program's objects without running its code (#34): no
# hasattr or getattr (a class's __getattr__ or __getattribute__), no len() or
# iteration through a subclass's __len__ or __iter__, no str() or repr() of
# its objects. The containers' own methods (list.__getitem__, dict.items, ...),
# object.__getattribute__ for an instance's __dict__ and the member
# descriptors of __slots__ read what is stored. Heap objects are serialized
# from a queue, not by recursion, so a long linked list doesn't take the tracer
# near the recursion limit.

_FUNCTION_TYPES = (_types.FunctionType, _types.BuiltinFunctionType, _types.MethodType, _types.BuiltinMethodType)
_METHOD_WRAPPERS = (staticmethod, classmethod, property)
# Ints JavaScript holds exactly: their text is the same in both languages.
_EXACT_INT = 2 ** 53

def _get_heap_id(obj):
    global _heap_counter
    obj_id = id(obj)
    if obj_id in _heap_map:
        return _heap_map[obj_id]
    _heap_counter += 1
    heap_id = str(_heap_counter)
    _heap_map[obj_id] = heap_id
    return heap_id

def _digits(v):
    v = abs(v)
    n = int(v.bit_length() * 0.30102999566398) + 1
    while n > 1 and 10 ** (n - 1) > v:
        n -= 1
    return n

def _int_value(val):
    # An int as Python writes it (#37): a JSON number while JavaScript holds it
    # exactly, else its digits as text (a JSON number would lose them).
    val = int.__int__(val)
    if -_EXACT_INT <= val <= _EXACT_INT:
        return {"type": "number", "value": val}
    try:
        text = int.__repr__(val)
    except ValueError:
        # Past Python's limit for converting an int to text: shown by its size.
        text = '<int with %d digits>' % _digits(val)
    return {"type": "number", "value": text, "display": text}

def _serialize_value(val):
    # A value as the snapshot shows it: a primitive inline, a heap object as a
    # reference to it.
    global _work
    _work += _VALUE_WORK
    # Values carry the text Python writes for them (display, #37): None, True,
    # False, a float's repr (5.0, -0.0, 1e+16, inf), an int past what JavaScript
    # holds exactly, a complex number's repr.
    if val is None:
        return {"type": "null", "value": None, "display": "None"}
    if val is True:
        return {"type": "boolean", "value": True, "display": "True"}
    if val is False:
        return {"type": "boolean", "value": False, "display": "False"}
    t = type(val)
    if issubclass(t, int):
        return _int_value(val)
    if issubclass(t, float):
        f = float.__float__(val)
        text = float.__repr__(f)
        if _isinf(f):
            return {"type": "number", "value": "Infinity" if f > 0 else "-Infinity", "display": text}
        if _isnan(f):
            return {"type": "number", "value": "NaN", "display": text}
        return {"type": "number", "value": f, "display": text}
    if issubclass(t, str):
        return {"type": "string", "value": str.__str__(val)}
    if issubclass(t, complex):
        text = complex.__repr__(val)
        return {"type": "number", "value": text, "display": text}

    # Heap objects: list, dict, tuple, set, function, class instances
    return {"type": "ref", "heapId": _get_heap_id(val)}

def _safe_repr(v, depth=2):
    # A dict key's text, without running the program's code.
    t = type(v)
    if v is None or t is bool:
        return repr(v)
    if issubclass(t, int):
        try:
            return int.__repr__(v)
        except ValueError:
            return '<int with %d digits>' % _digits(v)
    if issubclass(t, float):
        return float.__repr__(v)
    if issubclass(t, complex):
        return complex.__repr__(v)
    if issubclass(t, str):
        return str.__repr__(v)
    if issubclass(t, tuple) and depth > 0:
        items = [_safe_repr(x, depth - 1) for x in tuple.__iter__(v)]
        return '(' + ', '.join(items) + (',' if len(items) == 1 else '') + ')'
    if issubclass(t, frozenset) and depth > 0:
        return 'frozenset({' + ', '.join(_safe_repr(x, depth - 1) for x in frozenset.__iter__(v)) + '})'
    return '<' + _type_name(t) + ' object>'

def _key_text(k):
    if issubclass(type(k), str):
        return str.__str__(k)
    return _safe_repr(k)

def _is_primitive(v):
    return v is None or issubclass(type(v), (bool, int, float, str, complex))

def _safe_name(obj):
    # A function's or class's name, read through the data descriptor of its type.
    for attr in ('__name__', '__qualname__'):
        try:
            name = object.__getattribute__(obj, attr)
        except Exception:
            continue
        if type(name) is str and name:
            return name
    return ''

def _object_dict(obj):
    try:
        d = object.__getattribute__(obj, '__dict__')
    except Exception:
        return None
    return d if type(d) is dict else None

def _slot_descriptors(t):
    # (name, member descriptor, class) for the __slots__ of the Python classes
    # in t's MRO, found once per class.
    found = _slots_of.get(t)
    if found is None:
        found = []
        for cls in _type_mro(t):
            cls_dict = _type_dict(cls)
            slots = cls_dict.get('__slots__')
            if slots is None:
                continue
            if type(slots) is str:
                slots = (slots,)
            for name in slots:
                if type(name) is not str or name in ('__dict__', '__weakref__'):
                    continue
                stored = name
                if name.startswith('__') and not name.endswith('__'):
                    stored = '_' + _type_name(cls).lstrip('_') + name
                descr = cls_dict.get(stored)
                if type(descr) is _MemberDescriptor:
                    found.append((name, descr, cls))
        _slots_of[t] = found
    return found

def _slot_values(obj):
    # (name, value) for obj's slots, read through their member descriptors
    # (an unset slot is skipped).
    out = []
    for name, descr, cls in _slot_descriptors(type(obj)):
        try:
            out.append((name, descr.__get__(obj, cls)))
        except AttributeError:
            continue
    return out

def _wrapped_function(v):
    # The function a method's value runs: itself, a staticmethod's or
    # classmethod's __func__, a property's getter. None for anything else.
    t = type(v)
    if t is _types.FunctionType:
        return v
    if issubclass(t, staticmethod):
        return staticmethod.__dict__['__func__'].__get__(v)
    if issubclass(t, classmethod):
        return classmethod.__dict__['__func__'].__get__(v)
    if issubclass(t, property):
        return property.__dict__['fget'].__get__(v)
    return None

def _is_program_function(f):
    return type(f) is _types.FunctionType and _function_code(f).co_filename == _USER_FILE

def _is_program_class(cls):
    # A class the program defined (its namespace is __main__'s, as in CPython).
    module = _type_dict(cls).get('__module__')
    return type(module) is str and module == '__main__'

def _is_library_descriptor(v):
    # A library's descriptor stored in a class: a __slots__ member, a named
    # tuple's field getter. The program reads values through it.
    t = type(v)
    if _is_program_class(t):
        return False
    return any('__get__' in _type_dict(c) for c in _type_mro(t))

def _class_attribute_shown(name, v):
    # What a class drawing shows: the methods the program wrote and the
    # attributes it named, not what Python or a library added (a dataclass's
    # generated __init__, an Enum's _member_map_, an ABC's _abc_impl).
    if name in _CLASS_BOOKKEEPING:
        return False
    f = _wrapped_function(v)
    if f is not None:
        return _is_program_function(f)
    if _is_library_descriptor(v):
        return False
    return _is_source_word(name)

def _instance_attribute_shown(name):
    # An object's attributes, but a library's private ones (an Enum
    # member's _value_, a Thread's _target): a private name is shown when the
    # program names it (self._balance).
    return not name.startswith('_') or _is_source_word(name)

_INDEX_KEYS = [str(i) for i in range(max(_MAX_SEQ_PROPS, _MAX_DICT_PROPS))]
# How each type's objects are drawn, in the order they are tried.
_KIND_TYPES = (
    ("list", list), ("tuple", tuple), ("dict", dict), ("set", (set, frozenset)),
    ("function", _FUNCTION_TYPES), ("method", _METHOD_WRAPPERS), ("class", type),
    ("module", _types.ModuleType), ("enum", _Enum),
)
_kinds = {}           # type -> its kind, for this run
_slots_of = {}        # type -> its slots' descriptors, for this run

def _kind(t):
    # How a type's objects are drawn, found once per type.
    kind = _kinds.get(t)
    if kind is None:
        for kind, types in _KIND_TYPES:
            if issubclass(t, types):
                break
        else:
            kind = "instance"
        _kinds[t] = kind
    return kind

def _heap_contents(obj, t):
    # What a heap object shows: (object type, label, keys, values, key
    # objects), the key objects a list of a dict's keys that are drawn as
    # arrows (None in other objects and for primitive keys).
    kind = _kind(t)
    if kind == "instance":
        # An instance: its __dict__ and its __slots__, as stored.
        keys, values = [], []
        d = _object_dict(obj)
        if d is not None:
            for k, v in dict.items(d):
                if len(keys) >= _MAX_DICT_PROPS:
                    break
                if type(k) is str and _instance_attribute_shown(k):
                    keys.append(k)
                    values.append(v)
        if _slot_descriptors(t):
            for name, v in _slot_values(obj):
                if len(keys) >= _MAX_DICT_PROPS:
                    break
                if _instance_attribute_shown(name):
                    keys.append(name)
                    values.append(v)
        return "object", _type_name(t), keys, values, None
    if kind == "list":
        values = list.__getitem__(obj, slice(0, _MAX_SEQ_PROPS))
        return "list", "", _INDEX_KEYS[:len(values)], values, None
    if kind == "tuple":
        values = list(tuple.__getitem__(obj, slice(0, _MAX_SEQ_PROPS)))
        return "tuple", "", _INDEX_KEYS[:len(values)], values, None
    if kind == "dict":
        keys, values, key_objects = [], [], []
        drawn = False
        for k, v in dict.items(obj):
            if len(keys) >= _MAX_DICT_PROPS:
                break
            keys.append(_key_text(k))
            values.append(v)
            if _is_primitive(k):
                key_objects.append(None)
            else:
                # An object key is drawn as a value: an arrow to it.
                key_objects.append(k)
                drawn = True
        return "dict", "", keys, values, key_objects if drawn else None
    if kind == "set":
        items = set.__iter__(obj) if issubclass(t, set) else frozenset.__iter__(obj)
        values = []
        for item in items:
            if len(values) >= _MAX_SEQ_PROPS:
                break
            values.append(item)
        return "set", "", _INDEX_KEYS[:len(values)], values, None
    if kind == "function":
        return "function", _safe_name(obj), [], [], None
    if kind == "method":
        # A staticmethod, classmethod or property in a class: drawn as its function.
        f = _wrapped_function(obj)
        decorator = 'staticmethod' if issubclass(t, staticmethod) else 'classmethod' if issubclass(t, classmethod) else 'property'
        return "function", '@' + decorator + ' ' + (_safe_name(f) if f is not None else ''), [], [], None
    if kind == "class":
        # A class (#38): one the program defined with its bases, the methods it
        # wrote and its class attributes; a library's by its name only.
        label = _type_name(obj)
        keys, values = [], []
        if _is_program_class(obj):
            bases = [b for b in _type_bases(obj) if b is not object]
            if bases:
                label += '(' + ', '.join(_type_name(b) for b in bases) + ')'
            for k, v in _type_dict(obj).items():
                if len(keys) >= _MAX_DICT_PROPS:
                    break
                if type(k) is str and _class_attribute_shown(k, v):
                    keys.append(k)
                    values.append(v)
        return "class", label, keys, values, None
    if kind == "module":
        # A module is one object, by its name, never drawn in full (#38).
        return "module", _safe_name(obj), [], [], None
    # An Enum member, as Python names it, with its value.
    d = _object_dict(obj) or {}
    member = d.get('_name_')
    label = _type_name(t) + ('.' + member if type(member) is str else '')
    if '_value_' in d:
        return "object", label, ["value"], [d['_value_']], None
    return "object", label, [], [], None

# ── Recording steps (#39) ──
#
# A step shows every frame and every object they reach, but costs what
# changed since the step before: each frame, variable, heap object and
# property is a part (_part), made once and used again by every later step
# that shows it unchanged, which identity checks find (a variable bound to the
# same object, a list holding the same objects). The reply is the parts and
# the steps referring to them by index; run.ts rebuilds the steps with those
# parts shared, so the worker's postMessage (a structured clone) carries each
# once. What a cache entry holds stays alive (a value replaced since the last
# step), so an id in it is never another object's.

_parts = []           # every frame, variable, heap object, property and output list, by index
_heap_cache = {}      # id(obj) -> what the last step drew of it, for the objects it drew
_output_parts = None  # (_output_count, stdout part, console part) of the last step
_stdout_last = None   # (part, lines) of the last stdout list
_console_last = None  # (part, line parts) of the last console list
_console_lines = []   # (key, part) of each console line

def _part(obj):
    _parts.append(obj)
    return len(_parts) - 1

def _enqueue(v, visited, pending):
    k = id(v)
    if k not in visited:
        visited.add(k)
        pending.append(v)

def _draw_frame(frame_info, local_vars, live, return_value, has_return, visited, pending):
    # A frame as a part. A frame below the top shows the variables it had at
    # its last line (a copy): the same part while that copy is the same.
    if not live and frame_info.get("drawn_from") is local_vars:
        for v in frame_info["heap_values"]:
            _enqueue(v, visited, pending)
        return frame_info["part"]
    old = frame_info.get("variable_parts") or {}
    cache = {}
    parts = []
    heap_values = []
    for name in _shown_names(frame_info, local_vars):
        val = dict.__getitem__(local_vars, name)
        hit = old.get(name)
        if hit is not None and hit[0] is val:
            p = hit[1]
        else:
            p = _part({"name": name, "value": _serialize_value(val)})
        cache[name] = (val, p)
        parts.append(p)
        if not _is_primitive(val):
            heap_values.append(val)
    frame_info["variable_parts"] = cache
    if has_return:
        parts.append(_part({"name": "return \\u21b5", "value": _serialize_value(return_value)}))
        if not _is_primitive(return_value):
            heap_values.append(return_value)
    if parts != frame_info.get("parts"):
        frame_info["parts"] = parts
        frame_info["part"] = _part({"name": frame_info["name"], "variables": parts})
    frame_info["drawn_from"] = None if has_return else local_vars
    frame_info["heap_values"] = heap_values
    for v in heap_values:
        _enqueue(v, visited, pending)
    return frame_info["part"]

def _draw_heap_object(obj, visited, pending, cache):
    # A heap object as a part: the last step's while it shows the same
    # objects; else its properties that did, with the ones that changed.
    t = type(obj)
    object_type, label, keys, values, key_objects = _heap_contents(obj, t)
    ids = list(map(id, values))
    key_ids = None if key_objects is None else list(map(id, key_objects))
    obj_id = id(obj)
    entry = _heap_cache.get(obj_id)
    if entry is not None and entry[0] is t and entry[1] == object_type and entry[2] == label and entry[3] == keys and entry[5] == ids and entry[7] == key_ids:
        # values and key_objects as this step read them, so they stay alive
        entry = (t, object_type, label, keys, values, ids, key_objects, key_ids, entry[8], entry[9], entry[10])
    else:
        old_props = None
        if entry is not None and entry[0] is t:
            old_props = entry
        props = []
        children = []
        for i in range(len(keys)):
            v = values[i]
            ko = None if key_objects is None else key_objects[i]
            if (old_props is not None and i < len(old_props[3]) and old_props[3][i] == keys[i] and old_props[5][i] == ids[i]
                    and (old_props[7][i] if old_props[7] is not None else None) == (None if ko is None else key_ids[i])):
                props.append(old_props[8][i])
            else:
                prop = {"key": keys[i], "value": _serialize_value(v)}
                if ko is not None:
                    prop["keyValue"] = _serialize_value(ko)
                props.append(_part(prop))
            if not _is_primitive(v):
                children.append(v)
            if ko is not None:
                children.append(ko)
        if entry is not None and entry[8] == props and entry[1] == object_type and entry[2] == label:
            part = entry[9]
        else:
            heap_object = {"id": _get_heap_id(obj), "objectType": object_type, "properties": props}
            if label:
                heap_object["label"] = label
            part = _part(heap_object)
        entry = (t, object_type, label, keys, values, ids, key_objects, key_ids, props, part, children)
    cache[obj_id] = entry
    for c in entry[10]:
        _enqueue(c, visited, pending)
    return entry[9]

def _check_budgets():
    # The run stops with its steps before the worker's kill: at the time
    # budget, or the work budget the CPython suite sets instead.
    if _WORK_BUDGET is not None and _work > _WORK_BUDGET:
        _stop("work")
    if _now() - _start_time > _TIME_BUDGET:
        _stop("time")

def _capture_snapshot(line, current_locals, return_value=None, has_return=False, column_range=None, condition=None):
    """Capture a full execution snapshot at the given line."""
    global _step_counter, _heap_cache, _work

    if _step_counter >= _MAX_SNAPSHOTS:
        return
    _check_budgets()

    visited = set()
    pending = []

    # Every frame, the innermost with its live variables (and its return value).
    top = len(_call_stack) - 1
    stack = []
    for i, frame_info in enumerate(_call_stack):
        if i == top:
            stack.append(_draw_frame(frame_info, current_locals, True, return_value, has_return, visited, pending))
        else:
            stack.append(_draw_frame(frame_info, frame_info.get("locals", {}), frame_info["kind"] == "module", None, False, visited, pending))
    _work += _STEP_WORK + len(stack)

    # The heap objects the frames reach, each once, from the queue.
    cache = {}
    heap_objects = []
    next_object = 0
    while next_object < len(pending):
        obj = pending[next_object]
        next_object += 1
        heap_objects.append(_draw_heap_object(obj, visited, pending, cache))
        if next_object % 1024 == 0:
            _work += 1024 * _OBJECT_WORK
            _check_budgets()
    _work += (next_object % 1024) * _OBJECT_WORK
    _heap_cache = cache

    snapshot = {
        "step": _step_counter,
        "line": line,
        "callStack": stack,
        "heap": heap_objects,
    }
    _with_output(snapshot)
    if column_range and column_range[0] is not None and column_range[1] is not None:
        snapshot["columnRange"] = {"startCol": column_range[0], "endCol": column_range[1]}
    if condition:
        snapshot["condition"] = condition

    _snapshots.append(snapshot)
    _step_counter += 1

# ── Trace function ──

# Display names of the comprehensions' frames: theirs (see _CompWrapper), and
# a generator expression's, which CPython calls <genexpr>.
_COMP_DISPLAY_NAMES = {
    '<listcomp>': 'list comprehension',
    '<dictcomp>': 'dict comprehension',
    '<setcomp>': 'set comprehension',
    '<genexpr>': 'generator expression',
}

# Frames whose code is an expression, not statements: they run on whatever
# lines the expression spans.
_EXPRESSION_FRAMES = frozenset({'<lambda>', '<genexpr>'})

def _tracer(frame, event, arg):
    if _stop_reason is not None:
        return None
    # A new frame past the program's recursion limit: CPython's RecursionError.
    if event == 'call' and _depth(frame) - _base > _limit:
        _refused.add(frame)
        _setprofile(_retrace)
        raise RecursionError('maximum recursion depth exceeded')
    if frame in _refused:
        return None
    try:
        return _trace_event(frame, event, arg)
    except _TutorStop:
        raise
    except BaseException:
        # The tracer failed, not the program: its steps so far, and an engine error.
        _internal_failure()

def _trace_event(frame, event, arg):
    global _events

    # Only trace user code
    code = frame.f_code
    if code.co_filename != _USER_FILE:
        return None

    fname = code.co_name

    # Stop the program at the step cap or the time budget, instead of letting
    # it run on unrecorded until the worker is killed.
    if _step_counter >= _MAX_SNAPSHOTS:
        _stop("steps")
    _events += 1
    if _events % 1024 == 0 and _now() - _start_time > _TIME_BUDGET:
        _stop("time")

    if event == 'call':
        if fname == '<module>':
            # The module's variables are its globals, read as they are at each step.
            _call_stack.append({"name": "<module>", "locals": frame.f_globals, "kind": "module"})
        else:
            display_name = _COMP_DISPLAY_NAMES.get(fname, fname)
            # Capture function parameters from f_locals at call time
            params = dict(_frame_locals(frame))
            frame_info = {"name": display_name, "locals": params, "kind": _frame_kind(code)}
            if frame_info["kind"] == "class":
                # What the class's namespace started with, before its body ran.
                frame_info["base"] = dict(params)
            _call_stack.append(frame_info)
            # A comprehension's frame first shows with its first iteration's variables.
            if not _is_comprehension(code):
                _capture_snapshot(frame.f_lineno, params)
        return _tracer

    elif event == 'exception':
        # An exception is passing through this frame. If the frame doesn't
        # handle it, its 'return' event is the frame unwinding, not a return.
        _unwinding.add(frame)
        return _tracer

    elif event == 'line':
        _unwinding.discard(frame)  # the frame handled the exception and goes on
        line = frame.f_lineno
        if _is_comprehension(code):
            # The first line event comes before the first iteration: nothing to
            # show yet. Then one per iteration, on whichever of the
            # comprehension's lines it is (they aren't a statement's
            # continuation lines here).
            if _call_stack and not _call_stack[-1].get("started"):
                _call_stack[-1]["started"] = True
                return _tracer
        elif line in _continuation_lines and fname not in _EXPRESSION_FRAMES:
            # Skip continuation lines of multi-line statements (no visible
            # changes), in the frame the statement runs in: a lambda's or
            # generator expression's frame written inside it has only those lines.
            return _tracer

        if _call_stack:
            # Update stored locals for the current frame (the module's are its live globals)
            local_vars = _frame_locals(frame)
            _call_stack[-1]["locals"] = local_vars if fname == '<module>' else dict(local_vars)
            _capture_snapshot(line, local_vars)
        return _tracer

    elif event == 'return':
        if not _returns(frame):
            # Leaving because of an exception: no "return ↵ None" step. The
            # last step stays where the exception was raised.
            _unwinding.discard(frame)
            if _call_stack:
                _call_stack.pop()
            return _tracer

        if _call_stack:
            local_vars = _frame_locals(frame)
            if fname == '<module>':
                # Capture final state so stdout from the last line is visible
                _capture_snapshot(frame.f_lineno, local_vars)
            else:
                _capture_snapshot(frame.f_lineno, local_vars, return_value=arg, has_return=True)
            _call_stack.pop()
        return _tracer

    return _tracer

# ── Entry point ──

def _exception_text(e):
    text = str(e)
    return f"{type(e).__name__}: {text}" if text else type(e).__name__

def _user_line(e):
    """The line of the innermost frame of the user's code in an exception's traceback."""
    tb = e.__traceback__
    line = None
    while tb is not None:
        if tb.tb_frame.f_code.co_filename == _USER_FILE and tb.tb_frame not in _refused:
            line = tb.tb_lineno
        tb = tb.tb_next
    return line

# ── Tracebacks and syntax errors as CPython prints them (#40) ──

# The file the tracer's own code runs from (Pyodide's <exec>): its frames are
# never the program's.
_TRACER_FILE = _getframe().f_code.co_filename

def _program_stack(te, e, seen):
    # A TracebackException's frames as python main.py has them, for e and the
    # exceptions chained to it: without the tracer's frames or a frame refused
    # for the recursion limit (it never ran), and with PyTutor's comprehension
    # frames folded into the frame around them, where CPython 3.12 runs a
    # comprehension inlined (that frame's line and carets are the
    # comprehension's).
    if te is None or e is None or id(e) in seen:
        return
    seen.add(id(e))
    frames = [f for f, _ in _traceback.walk_tb(e.__traceback__)]
    if len(frames) == len(te.stack):
        kept = []
        for summary, f in zip(te.stack, frames):
            code = f.f_code
            if code.co_filename == _TRACER_FILE or f in _refused:
                continue
            if code.co_filename == _USER_FILE and _is_comprehension(code):
                if kept and kept[-1].filename == _USER_FILE:
                    outer = kept[-1]
                    kept[-1] = _traceback.FrameSummary(
                        outer.filename, summary.lineno, outer.name, lookup_line=False,
                        end_lineno=summary.end_lineno, colno=summary.colno, end_colno=summary.end_colno)
                continue
            kept.append(summary)
        te.stack = _traceback.StackSummary.from_list(kept)
    _program_stack(te.__cause__, e.__cause__, seen)
    _program_stack(te.__context__, e.__context__, seen)
    for sub_te, sub_e in zip(te.exceptions or (), getattr(e, 'exceptions', None) or ()):
        _program_stack(sub_te, sub_e, seen)

def _traceback_text(e):
    """What python main.py prints for an uncaught exception: CPython's own
    traceback (chained exceptions, carets, repeated lines folded), of the
    program's frames."""
    te = _traceback.TracebackException(type(e), e, e.__traceback__, compact=True)
    _program_stack(te, e, set())
    return ''.join(te.format()).rstrip(chr(10))

def _compile_error(e, source_code):
    # A program CPython rejects: nothing ran, and the console shows what
    # python main.py prints (warnings first), the editor marks the line.
    error = {"kind": "compile", "message": f"{type(e).__name__}: {getattr(e, 'msg', None) or e}"}
    if isinstance(e, SyntaxError) and e.text is None and e.lineno:
        # An error only the compiler finds ('return' outside function) has no
        # source text from compile(); python main.py reads it from the file.
        source_lines = source_code.splitlines(True)
        if 1 <= e.lineno <= len(source_lines):
            e.text = source_lines[e.lineno - 1]
    shown = ''.join(_traceback.format_exception_only(type(e), e))
    if _console:
        shown = chr(10).join(t for st, t, rs in _console) + chr(10) + shown
    error["stderr"] = shown.rstrip(chr(10))
    line = getattr(e, 'lineno', None)
    if line:
        error["line"] = line
        error["lines"] = [line]
    return error

def run_traced(source_code, stdin_text=''):
    global _snapshots, _call_stack, _heap_map, _heap_counter, _step_counter, _continuation_lines, _module_order, _source_words
    global _stop_reason, _start_time, _events, _unwinding, _work
    global _out_lines, _console, _console_open, _stderr_used, _stdin_used, _output_count, _output_seen
    global _parts, _heap_cache, _output_parts, _stdout_last, _console_last, _console_lines, _kinds, _slots_of
    global _limit, _base, _refused
    _stop_reason = None
    _start_time = _now()
    _events = 0
    _work = 0
    _unwinding = set()
    _refused = set()
    _limit = _DEFAULT_LIMIT
    _snapshots = []
    _out_lines = ['']
    _console = []
    _console_open = False
    _stderr_used = False
    _stdin_used = False
    _output_count = 0
    _output_seen = 0
    _parts = []
    _heap_cache = {}
    _kinds = {}
    _slots_of = {}
    _output_parts = None
    _stdout_last = None
    _console_last = None
    _console_lines = []
    _call_stack = []
    _heap_map = {}
    _heap_counter = 0
    _step_counter = 0
    _continuation_lines = set()
    _module_order = {}
    _source_words = frozenset(_re.findall(r'[A-Za-z_][A-Za-z0-9_]*', source_code))

    # Pre-scan source for multi-line statements
    _scan_continuation_lines(source_code)

    # The program's module namespace, as CPython has main.py's: its names
    # only, the builtins found through the builtins module (exec adds
    # __builtins__), so a program that replaces builtins.len calls its own len
    # and a variable named list or max is the program's (#34).
    namespace = {'__name__': '__main__'}

    # The source, for tracebacks, warnings and traceback.print_exc(), as CPython has main.py's.
    _linecache.cache[_USER_FILE] = (len(source_code), None, source_code.splitlines(True), _USER_FILE)

    # The streams are the program's from compiling on (a SyntaxWarning is
    # output), and the tracer's again once it ends. Each line typed in the
    # stdin panel ends with Enter, the last one too.
    if stdin_text and not stdin_text.endswith(chr(10)):
        stdin_text += chr(10)
    saved_streams = (sys.stdin, sys.stdout, sys.stderr, sys.__stdin__, sys.__stdout__, sys.__stderr__)
    sys.stdin = sys.__stdin__ = _TutorStdin(stdin_text)
    sys.stdout = sys.__stdout__ = _TutorStream('stdout', 'strict')
    sys.stderr = sys.__stderr__ = _TutorStream('stderr', 'backslashreplace')
    saved_limit_functions = (sys.getrecursionlimit, sys.setrecursionlimit)
    try:
        try:
            code = _compile_program(source_code)
        except (SyntaxError, ValueError) as e:
            # Nothing ran: no steps, and a compile error (#40).
            return _json_dumps({"type": "result", "parts": [], "snapshots": [], "error": _compile_error(e, source_code)}, separators=(',', ':'))

        # A run that ends early (an uncaught exception, the step or time limit)
        # still returns its steps, with the reason in "error".
        error = None
        # The program's module frame is depth 1 (see _depth).
        _base = _depth(_getframe())
        sys.getrecursionlimit = _getrecursionlimit
        sys.setrecursionlimit = _setrecursionlimit
        _real_setlimit(_limit + _base + _HEADROOM)
        _settrace(_tracer)
        try:
            exec(code, namespace)
        except _TutorStop:
            pass
        except SystemExit as e:
            # sys.exit() ends the program; as CPython ends, a code that isn't
            # None or an int is printed to stderr.
            _settrace(None)
            if e.code is not None and not isinstance(e.code, int):
                sys.stderr.write(str(e.code) + chr(10))
            _finish_output()
        except BaseException as e:
            # Any other exception the program raised is its own, KeyboardInterrupt
            # and BaseException subclasses included, as CPython reports them.
            _settrace(None)
            error = {"kind": "exception", "message": _exception_text(e), "stderr": _traceback_text(e)}
            line = _user_line(e)
            if line is not None:
                error["line"] = line
            _finish_output()
        finally:
            _settrace(None)
            _setprofile(None)
    finally:
        sys.stdin, sys.stdout, sys.stderr, sys.__stdin__, sys.__stdout__, sys.__stderr__ = saved_streams
        sys.getrecursionlimit, sys.setrecursionlimit = saved_limit_functions
        _real_setlimit(_DEFAULT_LIMIT)

    if _stop_reason == "steps":
        error = {"kind": "limit", "message": f"Stopped after {_MAX_SNAPSHOTS} steps, the most that can be shown. Your code may contain an infinite loop."}
    elif _stop_reason == "time":
        error = {"kind": "limit", "message": f"Stopped after {_TIME_BUDGET:g} seconds, the longest a program can run here."}
    elif _stop_reason == "work":
        error = {"kind": "limit", "message": f"Stopped after {_WORK_BUDGET} units of work, the most a program can do here."}
    elif _stop_reason == "internal":
        error = {"kind": "error", "message": _INTERNAL_ERROR}
        if _snapshots:
            error["line"] = _snapshots[-1]["line"]
    # Each part once, the steps referring to them by index (run.ts decodes it).
    result = {"type": "result", "parts": _parts, "snapshots": _snapshots}
    if error is not None:
        result["error"] = error
    _heap_cache = {}
    return _json_dumps(result, separators=(',', ':'))
`}const be=1e4,us={type:"error",message:`Execution timed out after ${be/1e3} seconds. Your code may contain an infinite loop.`},ve='(function(){"use strict";const b="0.27.5",S="Internal PyTutor error (please report it)",p=new WeakSet;function y(r,t){p.has(r)||(t!==null&&r.runPython(t),p.add(r))}function k(r){const t=JSON.parse(r);if(t.type!=="result"||!t.parts)return t;const e=t.parts,s=new Map,h=(n,a)=>(s.has(n)||s.set(n,a(e[n])),s.get(n)),v=n=>h(n,a=>({name:a.name,variables:a.variables.map(i=>e[i])})),_=n=>h(n,a=>({...a,properties:a.properties.map(i=>e[i])})),w=(n,a)=>{const i=[];for(let o=n;o!==void 0&&!s.has(o);o=e[o].base)i.push(o);for(const o of i.reverse()){const l=e[o],u=l.add.map(a);s.set(o,l.base===void 0?u:s.get(l.base).slice(0,l.keep).concat(u))}return s.get(n)},P=(t.snapshots??[]).map(({callStack:n,heap:a,stdout:i,console:o,...l})=>{const u={...l,callStack:n.map(v),heap:a.map(_),stdout:w(i,f=>f)};return o!==void 0&&(u.console=w(o,f=>e[f])),u});return t.error?{type:"result",snapshots:P,error:t.error}:{type:"result",snapshots:P}}function E(r,t,e={}){try{if(!p.has(r))throw new Error("the tracer is not loaded in this interpreter");if(e.timeBudgetSeconds!==void 0){const h=e.timeBudgetSeconds;r.runPython(`_TIME_BUDGET = ${Number.isFinite(h)?h:"float(\'inf\')"}`)}e.workBudget!==void 0&&r.runPython(`_WORK_BUDGET = ${e.workBudget}`);const s=r.globals.get("run_traced");try{return k(s(t,e.stdin??""))}finally{s.destroy?.()}}catch(s){return console.error("PyTutor internal error:",s),{type:"error",message:S}}}class R{snapshot=null;next=null;fallbackReason=null;load;tracerCode;prepare;constructor(t,e,s=()=>{}){this.load=t,this.tracerCode=e,this.prepare=s}async init(){let t;try{t=await this.load({_makeSnapshot:!0})}catch(e){t=await this.load({}),this.useFullLoads(e)}if(y(t,this.tracerCode),!this.fallbackReason)try{if(typeof t.makeMemorySnapshot!="function")throw new Error("this Pyodide makes no memory snapshots");this.snapshot=t.makeMemorySnapshot()}catch(e){this.useFullLoads(e)}this.next=this.snapshot?this.fresh():Promise.resolve(t)}useFullLoads(t){this.snapshot=null,this.fallbackReason=t instanceof Error?t.message:String(t),console.warn(`PyTutor: no Pyodide memory snapshot (${this.fallbackReason}); each run loads Pyodide in full.`)}async fresh(){if(this.snapshot)try{const e=await this.load({_loadSnapshot:this.snapshot});return y(e,null),e}catch(e){this.useFullLoads(e)}const t=await this.load({});return y(t,this.tracerCode),t}async run(t,e={}){if(!this.next)throw new Error("PySession.init() has not been called");let s;try{s=await this.next}catch{s=await this.fresh()}return this.next=this.fresh(),this.next.catch(()=>{}),this.prepare(s),E(s,t,e)}}const c=self,m=`https://cdn.jsdelivr.net/pyodide/v${b}/full`;let d=null;function g(r){return`Failed to load the Python engine, which needs an internet connection: ${r instanceof Error?r.message:String(r)}`}c.onmessage=async r=>{const t=r.data;if(t.type==="init"){try{const{loadPyodide:e}=await import(`${m}/pyodide.mjs`);d=new R(s=>e({indexURL:m,...s}),t.tracerCode),await d.init(),c.postMessage({type:"ready"})}catch(e){c.postMessage({type:"error",message:g(e)})}return}if(t.type==="run"){if(!d){c.postMessage({type:"error",message:"Python engine not loaded yet."});return}try{c.postMessage(await d.run(t.source,{stdin:t.stdin??""}))}catch(e){c.postMessage({type:"error",message:g(e)})}return}}})();\n',ce=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",ve],{type:"text/javascript;charset=utf-8"});function fs(r){let e;try{if(e=ce&&(self.URL||self.webkitURL).createObjectURL(ce),!e)throw"";const t=new Worker(e,{name:r?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ve),{name:r?.name})}}const ms=3e4;let f=null,b=null;const gs=ps();function Qs(){return new Promise((r,e)=>{const t=new fs;f=t;const s=setTimeout(()=>{t.terminate(),f=null,b=null,e(new Error("Python engine took too long to load. Please check your network connection and try again."))},ms);t.onmessage=n=>{n.data.type==="ready"?(clearTimeout(s),r()):n.data.type==="error"&&(clearTimeout(s),t.terminate(),f=null,b=null,e(new Error(n.data.message)))},t.onerror=n=>{clearTimeout(s),t.terminate(),f=null,b=null,e(new Error(n.message||"Failed to create Python worker."))},t.postMessage({type:"init",tracerCode:gs})})}async function Pe(){if(f&&b){await b;return}b=Qs(),await b}async function ys(r,e){try{await Pe()}catch(t){return{type:"error",message:t instanceof Error?t.message:String(t)}}return new Promise(t=>{if(!f){t({type:"error",message:"Python engine not available."});return}const s=setTimeout(()=>{f?.terminate(),f=null,b=null,t(us)},be),n=a=>{a.data.type!=="ready"&&(clearTimeout(s),f.removeEventListener("message",n),t(a.data))};f.addEventListener("message",n),f.onerror=a=>{clearTimeout(s),f?.terminate(),f=null,b=null,t({type:"error",message:a.message||"An unknown error occurred in the Python worker."})},f.postMessage({type:"run",source:r,stdin:e?.stdin??""})})}Pe().catch(()=>{});const Ts=[{title:"Variables & Types",slug:"variables-types",category:"Basics",language:"py",code:`x = 42
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
print(p1, p2)`}],Ss=[{pattern:/\b(import|from)\s+(js|pyodide)\b/,message:"This code reaches the browser's JavaScript (the js or pyodide module)"},{pattern:/\bimport\s+os\b/,message:"This code imports the os module"},{pattern:/\bimport\s+sys\b/,message:"This code imports the sys module"},{pattern:/\bimport\s+subprocess\b/,message:"This code imports subprocess"},{pattern:/\bimport\s+socket\b/,message:"This code imports socket"},{pattern:/\bimport\s+shutil\b/,message:"This code imports shutil"},{pattern:/\bopen\s*\(/,message:"This code opens files"},{pattern:/\b__import__\s*\(/,message:"This code uses dynamic imports"},{pattern:/\beval\s*\(/,message:"This code uses eval()"},{pattern:/\bexec\s*\(/,message:"This code uses exec()"},{pattern:/\bcompile\s*\(/,message:"This code uses compile()"},{pattern:/\bglobals\s*\(\s*\)/,message:"This code accesses globals()"},{pattern:/\bgetattr\s*\(/,message:"This code uses getattr()"}];function ks(r){const e=[];for(const{pattern:t,message:s}of Ss)t.test(r)&&e.push({level:"warning",message:s});return e}const vs={id:"py",displayName:"Python",editorExtension:()=>_s(),execute:ys,examples:Ts,sandboxCode:`# Write your code below!
x = 1
print(x)`,analyzeCode:ks,stdin:{reader:"input()",placeholder:"Type input here — each input() reads one line, like typing into a terminal."},heapTypeConfig:{list:{label:"List",variant:"info"},dict:{label:"Dict",variant:"warning"},tuple:{label:"Tuple",variant:"secondary"},set:{label:"Set",variant:"warning"},function:{label:"Function",variant:"dark"},object:{label:"Object",variant:"warning"},class:{label:"Class",variant:"primary",empty:"no attributes"},module:{label:"Module",variant:"secondary",empty:null},int:{label:"int",variant:"primary"},float:{label:"float",variant:"primary"},complex:{label:"complex",variant:"primary"},str:{label:"str",variant:"success"},bool:{label:"bool",variant:"warning"},NoneType:{label:"NoneType",variant:"secondary"}}};export{vs as pyEngine};
