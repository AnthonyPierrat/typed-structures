!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Exception=class{constructor(e){this._message=e}toString(){return`Exception: ${this._message}\n`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(3),s=n(8);t.Buffer=class{constructor(e,t,n,s){if(this._cap=0,this._limit=0,this._pos=0,this._mark=-1,e<0)throw new i.IllegalArgumentException("Negative capacity");if(this._cap=e,this.limit(t),this.position(n),s>=0){if(s>this._pos)throw new i.IllegalArgumentException("Mark is greater than current position");this._mark=s}}capacity(){return this._cap}clear(){return this._limit=this._cap,this._pos=0,this._mark=-1,this}flip(){return this._limit=this._pos,this._pos=0,this._mark=-1,this}hasRemaining(){return this.remaining()>0}limit(e){if(!e)return this._limit;if(e<0||e>this._cap)throw new i.IllegalArgumentException("New limit out of bound");return e<this._mark&&(this._mark=-1),this._pos>e&&(this._pos=e),this._limit=e,this}mark(){return this._mark=this._pos,this}position(e){if(void 0===e)return this._pos;if(e<0||e>this._limit)throw new i.IllegalArgumentException("New position out of bound");return e<=this._mark&&(this._mark=-1),this._pos=e,this}remaining(){return this._limit-this._pos}reset(){if(-1===this._mark)throw new s.InvalidMarkException;return this._pos=this._mark,this}rewind(){return this._pos=0,this._mark=-1,this}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Node=class{constructor(e){this._data=e,this._next=void 0,this._previous=void 0}get data(){return this._data}get next(){return this._next}set data(e){this._data=e}set next(e){this._next=e}get previous(){return this._previous}set previous(e){this._previous=e}hasNext(){return void 0!==this._next&&null!==this._next}hasPrevious(){return void 0!==this._previous&&null!==this._previous}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0);t.IllegalArgumentException=class extends i.Exception{constructor(e){super(e)}toString(){return`IllegalArgument${super.toString()}`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0);t.NullReferenceException=class extends i.Exception{constructor(e){super(e)}toString(){return`NullReference${super.toString()}`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(12),s=n(11);t.MapEntry=class{constructor(e,t){this._value=t,this._key=e}equals(e){return(null===this.getKey()?null===e.getKey():this.getKey()===e.getKey())&&(null===this.getValue()?null===e.getValue():this.getValue()===e.getValue())}getKey(){return this._key}getValue(){return this._value}hashCode(){let e="object"==typeof this._key?"function"==typeof this._key.hashCode?this._key.hashCode():s.flattenObject(this._key):this._key,t="object"==typeof this._value?"function"==typeof this._value.hashCode?this._value.hashCode():s.flattenObject(this._value):this._value;return i.hash(e+t)}setValue(e){let t=this.getValue();return this._value=e,t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);class s{constructor(){this._size=0}length(){return this._size}empty(){return 0===this.length()}unshift(e){if(void 0===e)return 0;if(this.empty())this._head=this.create(e),this._tail=this._head;else{const t=this.create(e);t.next=this._head,this._head.previous=t,this._head=t}return++this._size,this._size}shift(){if(!this.empty()){if(1===this.length()){const e=this._head;return this._head=void 0,--this._size,e.data}{let e=this._head;return this._head=this._head.next,this._head.previous=void 0,--this._size,e.data}}}push(e){if(this.empty())this._head=this._tail=this.create(e);else{let t=this.create(e);this._tail.next=t,t.previous=this._tail,this._tail=t}++this._size}pop(){if(!this.empty()){if(1===this.length()){let e=this._head;return this._head=this._tail=void 0,--this._size,e.data}{let e=this._tail;return this._tail=this._tail.previous,this._tail.next=void 0,--this._size,e.data}}}remove(e){if(!this.empty()){if(1===this.length()){let e=this._head;return this._head=this._tail=void 0,--this._size,e.data}{let t,n=this._head;if(this._head.data===e)return this._head=this._head.next,n.data;for(;n.next&&n.data!==e;)t=n,n=n.next;return t.next=n.next,--this._size,n.data}}}forEach(e){let t=this._head,n=0;for(;t;)e.call(t,t,n++,this),t=t.next}filter(e){let t=new s;return this.forEach((n,i)=>{e.call(n.data,n.data,i,this)&&t.push(n.data)}),t}includes(e){return this.filter(t=>t===e).length()>0}indexOf(e){let t=0,n=this._head;for(;n;){if(n.data===e)return t;n=n.next,++t}return-1}create(e){return new i.Node(e)}peek(){return this._head.data}back(){return this._tail.data}clear(){this._head=this._tail=void 0,this._size=0}contains(e){if(!this._head)return!1;let t=this._head;for(;t;){if(t.data===e)return!0;t=t.next}return!1}find(e){let t=this._head;for(;t;){if(t.data===e)return t;t=t.next}}}t.DoublyLinkedList=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);class s{constructor(){this._size=0}clear(){this._head=void 0,this._size=0}contains(e){if(!this._head)return!1;let t=this._head;for(;t;){if(t.data===e)return!0;t=t.next}return!1}empty(){return 0===this._size}filter(e){let t=new s;return this.forEach((n,i)=>{e.call(n.data,n.data,i,this)&&t.push(n.data)}),t}find(e){let t=this._head;for(;t;){if(t.data===e)return t;t=t.next}}forEach(e){let t=this._head,n=0;for(;t;)e.call(t,t,n++,this),t=t.next}includes(e){return this.filter(t=>t===e).length()>0}indexOf(e){let t=0,n=this._head;for(;n;){if(n.data===e)return t;n=n.next,++t}return-1}length(){return this._size}peek(){return this._head.data}back(){let e=this._head;for(;e.hasNext();)e=e.next;return e.data}pop(){if(this.empty())return;let e=this._head;if(1===this.length())this._head=void 0;else{let t;for(;e.hasNext();)t=e,e=e.next;t.next=void 0}return--this._size,e.data}push(e){if(this.empty())this._head=this.create(e);else{let t=this._head;for(;t.hasNext();)t=t.next;t.next=this.create(e)}++this._size}remove(e){if(!this.empty()){if(1===this.length()){let e=this._head;return this._head=void 0,--this._size,e.data}{let t,n=this._head;if(this._head.data===e)return this._head=this._head.next,n.data;for(;n.hasNext()&&n.data!==e;)t=n,n=n.next;return t.next=n.next,--this._size,n.data}}}shift(){if(!this.empty()){let e=this._head;return this._head=this._head.next,--this._size,e.data}}unshift(e){if(void 0===e)return 0;if(void 0===this._head)this._head=this.create(e);else{const t=this.create(e);t.next=this._head,this._head=t}return++this._size,this._size}create(e){return new i.Node(e)}}t.SinglyLinkedList=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0);t.InvalidMarkException=class extends i.Exception{constructor(e){super(e)}toString(){return`InvalidMark${super.toString()}`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1);t.GenericBuffer=class extends i.Buffer{constructor(e,t,n,i,s=!1){super(e,t,n,i),this._buf=new Array(e),this._readonly=s}get(){return this.position(this.position()+1),this._buf[this.position()-1]}put(e){return this.isReadOnly()||(this._buf[this.position()]=e,this.position(this.position()+1)),this}isReadOnly(){return this._readonly}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),s=n(3);t.GenericRingBuffer=class extends i.Buffer{constructor(e,t,n,i,s,r=!1){super(e,t,n,s),this._readPosition=i,this._buf=new Array(e),this._readonly=r}get(){let e=(this.readPosition()+1)%this.capacity();return this.readPosition(e),this._buf[e-1]}put(e){return this._buf[this.position()]=e,this.position((this.position()+1)%this.capacity()),this}isReadOnly(){return this._readonly}readPosition(e){if(void 0===e)return this._readPosition;if(e<0||e>this.limit())throw new s.IllegalArgumentException("New read position out of bound");return this._readPosition=e,this}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flattenObject=function e(t,n=""){return JSON.stringify(Object.keys(t).reduce((i,s)=>{const r=n.length?n+".":"";return"object"==typeof t[s]?Object.assign(i,e(t[s],r+s)):i[r+s]=t[s],i},{}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hash=function(e){return(e+"").split("").reduce((e,t)=>e=t.charCodeAt(0)+(e<<6)+(e<<16)-e,0)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(4);class s{constructor(){this._elements=[]}add(e){if(null===e||void 0===e)throw new i.NullReferenceException("The element cannot be null nor undefined");return!this.contains(e)&&(this._elements.push(e),!0)}addAll(e){let t=this._elements.length;return e.forEach(e=>this.add(e)),this._elements.length!==t}clear(){this._elements.length=0}contains(e){if(null===e||void 0===e)throw new i.NullReferenceException("The element cannot be null nor undefined");return this._elements.filter(t=>t===e).length>0}containsAll(e){if(null===e||void 0===e)throw new i.NullReferenceException("The collection cannot be null nor undefined");return e.every(e=>this.contains(e))}equals(e){return this.size()===e.size()&&e.toArray().every((e,t)=>e.equals?e.equals(this._elements[t]):e===this._elements[t])}hashCode(){let e=1;return this.toArray().reduce((t,n)=>e=n.hashCode?31*e+n.hashCode():17*e+ +n,0)}isEmpty(){return 0===this._elements.length}remove(e){if(null===e||void 0===e)throw new i.NullReferenceException("The element cannot be null nor undefined");return!!this.contains(e)&&(this._elements=this._elements.filter(t=>t!==e),!0)}removeAll(e){if(null===e||void 0===e)throw new i.NullReferenceException("The collection cannot be null nor undefined");let t=this._elements.length;return e.forEach(e=>this.remove(e)),this._elements.length!==t}retainAll(e){if(null===e||void 0===e)throw new i.NullReferenceException("The collection cannot be null nor undefined");let t=this._elements.length,n=new s;return n.addAll(e),this._elements=this._elements.filter(e=>n.contains(e)),this._elements.length!==t}size(){return this._elements.length}toArray(){return this._elements}}t.Set=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(4),s=n(13),r=n(5);t.Map=class{constructor(){this._entries=[]}clear(){this._entries.length=0}compute(e,t){let n=this.get(e),i=t.apply(e,n);return null!==n?null!==i?this.put(e,i):this.remove(e):null!==i?this.put(e,i):null}computeIfAbsent(e,t){if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");if(null===this.get(e)){let n=t.apply(e);if(null!==n)return this.put(e,n)}}computeIfPresent(e,t){if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");if(null!==this.get(e)){let n=this.get(e),i=t.apply(e,n);return null!==i?this.put(e,i):this.remove(e)}}containsKey(e){if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");return void 0!==this._entries.find(t=>t.getKey()===e)}containsValue(e){if(null===e||void 0===e)throw new i.NullReferenceException("The value cannot be null nor undefined");return void 0!==this._entries.find(t=>t.getValue()===e)}entrySet(){let e=new s.Set;return e.addAll(this._entries),e}equals(e){return this.entrySet().equals(e.entrySet())}forEach(e){this._entries=this._entries.map(t=>e.apply(t))}get(e){if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");try{return this._entries.find(t=>t.getKey()===e).getValue()}catch(e){return null}}getOrDefault(e,t){let n=this.get(e);return n||t}hashCode(){return this.entrySet().toArray().reduce((e,t)=>e+t.hashCode(),0)}isEmpty(){return 0===this._entries.length}keySet(){return this._entries.reduce((e,t)=>(e.add(t.getKey()),e),new s.Set)}merge(e,t,n){if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");let s=this.get(e),r=null===s?t:n.apply(s,t);if(null!==r)return this.put(e,r),r;this.remove(e)}put(e,t){let n=null;if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");return this.containsKey(e)?this._entries=this._entries.map(i=>(i.getKey()===e&&(n=i.setValue(t)),i)):this._entries.push(new r.MapEntry(e,t)),n}putAll(e){e.entrySet().toArray().forEach(e=>this.put(e.getKey(),e.getValue()))}putIfAbsent(e,t){if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");let n=this.get(e);return null===n&&(n=this.put(e,t)),n}remove(e,t){if(t)return!(!this.containsKey(e)||this.get(e)!==t||(this.remove(e),0));{if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");let t=this._entries.length;return this._entries=this._entries.filter(t=>t.getKey()!==e),this._entries.length!==t}}replace(e,t,n){if(n)return!(!this.containsKey(e)||this.get(e)!==t||(this.put(e,n),0));if(null===e||void 0===e)throw new i.NullReferenceException("The key cannot be null nor undefined");return this.containsKey(e)?this.put(e,t):null}replaceAll(e){if(null===e||void 0===e)throw new i.NullReferenceException("The function cannot be null nor undefined");this.entrySet().toArray().forEach(t=>{t.setValue(e.apply(t.getKey(),t.getValue()))})}size(){return this._entries.length}values(){return this._entries.map(e=>e.getValue())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(6);t.Queue=class{constructor(){this._items=new i.DoublyLinkedList}length(){return this._items.length()}enqueue(e){this._items.push(e)}dequeue(){return this._items.shift()}peek(){return this._items.peek()}back(){return this._items.back()}empty(){return this._items.empty()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(7);t.Stack=class{constructor(){this._items=new i.SinglyLinkedList}length(){return this._items.length()}stack(e){this._items.unshift(e)}unstack(){return this._items.shift()}peek(){return this._items.peek()}empty(){return this._items.empty()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0);t.ClassCastException=class extends i.Exception{constructor(e){super(e)}toString(){return`ClassCast${super.toString()}`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0);t.IndexOutOfBoundsException=class extends i.Exception{constructor(e){super(e)}toString(){return`IndexOutOfBounds${super.toString()}`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0);t.ReadOnlyBufferException=class extends i.Exception{constructor(e){super(e)}toString(){return`ReadOnlyBuffer${super.toString()}`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0);t.UnsupportedOperationException=class extends i.Exception{constructor(e){super(e)}toString(){return`UnsupportedOperation${super.toString()}`}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(e){this._function=e}getNativeFunction(){return this._function}andThen(e){return new i((t,n)=>e.getNativeFunction()(this.getNativeFunction()(t,n)))}apply(e,t){return this._function(e,t)}}t.BiFunction=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(e){this._function=e}getNativeFunction(){return this._function}andThen(e){return new i(t=>e.getNativeFunction()(this.getNativeFunction()(t)))}apply(e){return this._function(e)}compose(e){return new i(t=>this.getNativeFunction()(e.getNativeFunction()(t)))}identity(){return new i(e=>e)}}t.Function=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(22);t.Function=i.Function;const s=n(21);t.BiFunction=s.BiFunction;const r=n(20);t.UnsupportedOperationException=r.UnsupportedOperationException;const o=n(19);t.ReadOnlyBufferException=o.ReadOnlyBufferException;const u=n(4);t.NullReferenceException=u.NullReferenceException;const h=n(8);t.InvalidMarkException=h.InvalidMarkException;const l=n(18);t.IndexOutOfBoundsException=l.IndexOutOfBoundsException;const a=n(3);t.IllegalArgumentException=a.IllegalArgumentException;const c=n(0);t.Exception=c.Exception;const d=n(17);t.ClassCastException=d.ClassCastException;const f=n(16);t.Stack=f.Stack;const _=n(15);t.Queue=_.Queue;const p=n(14);t.Map=p.Map;const y=n(5);t.MapEntry=y.MapEntry;const g=n(2);t.Node=g.Node;const v=n(7);t.SinglyLinkedList=v.SinglyLinkedList;const x=n(6);t.DoublyLinkedList=x.DoublyLinkedList;const m=n(1);t.Buffer=m.Buffer;const b=n(10);t.GenericRingBuffer=b.GenericRingBuffer;const E=n(9);t.GenericBuffer=E.GenericBuffer}]);
//# sourceMappingURL=index.js.map