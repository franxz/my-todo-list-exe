(this["webpackJsonpfcc-todo-app"]=this["webpackJsonpfcc-todo-app"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(10),o=n.n(c),i=n(15),a=n(3),s=n(4),d=n(2),l=n(6),u=n(5),h=n(14),m=n(0),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.item,n=t.id,r=t.text,c=t.checked;return Object(m.jsxs)("div",{className:"todoItem",style:this.props.order%2!==1?{backgroundColor:"#b088f9"}:null,onDoubleClick:function(){return e.props.removeItem(n)},children:[Object(m.jsx)("input",{className:"todoItemCheckbox",type:"checkbox",id:n,checked:c,onChange:function(){return e.props.handleChange(n)}}),Object(m.jsx)("label",{htmlFor:n,style:c?{color:"#696969",textDecorationLine:"line-through"}:null,children:r})]})}}]),n}(r.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleKeyPress=e.handleKeyPress.bind(Object(d.a)(e)),e}return Object(s.a)(n,[{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(this.props.createNewItem(e.target.value),e.target.value="")}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"todoItem",style:this.props.order%2!==1?{backgroundColor:"#b088f9"}:null,children:Object(m.jsx)("input",{className:"newItemInput",placeholder:"Add new item...",onKeyPress:this.handleKeyPress})})}}]),n}(r.Component),x={items:[{id:0,text:"Terminar el curso de React.js",checked:!1},{id:1,text:"Leer el texto de ingl\xe9s",checked:!0},{id:2,text:"Dormir",checked:!1},{id:3,text:"Terminar el curso de React.js",checked:!1},{id:4,text:"Leer el texto de ingl\xe9s",checked:!0},{id:5,text:"Dormir",checked:!1},{id:6,text:"Terminar el curso de React.js",checked:!1},{id:7,text:"Leer el texto de ingl\xe9s",checked:!0},{id:8,text:"Dormir",checked:!1}],nextId:9},I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={todoItems:x.items,nextId:x.nextId},e.handleItemChange=e.handleItemChange.bind(Object(d.a)(e)),e.createNewItem=e.createNewItem.bind(Object(d.a)(e)),e.removeItem=e.removeItem.bind(Object(d.a)(e)),e}return Object(s.a)(n,[{key:"handleItemChange",value:function(e){this.setState((function(t){return{todoItems:t.todoItems.map((function(t){return t.id===e&&(t.checked=!t.checked),t}))}}))}},{key:"createNewItem",value:function(e){this.setState((function(t){return{todoItems:[].concat(Object(i.a)(t.todoItems),[{id:t.nextId,text:e,checked:!1}]),nextId:t.nextId+1}}))}},{key:"removeItem",value:function(e){this.setState((function(t){return{todoItems:t.todoItems.filter((function(t){return t.id!==e}))}}))}},{key:"render",value:function(){var e=this,t=0;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"topbar",children:Object(m.jsx)("h1",{children:"\ud83c\udf34 MyTodoList.exe"})}),Object(m.jsx)(h.CSSTransitionGroup,{transitionName:"items",transitionEnterTimeout:500,transitionLeaveTimeout:300,children:this.state.todoItems.map((function(n){return Object(m.jsx)(b,{order:t++,item:n,handleChange:e.handleItemChange,removeItem:e.removeItem},n.id)}))}),Object(m.jsx)(j,{order:t,createNewItem:this.createNewItem})]})}}]),n}(r.Component);n(33);o.a.render(Object(m.jsx)(I,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.044aa29e.chunk.js.map