(this.webpackJsonpdeipnom=this.webpackJsonpdeipnom||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(13),a=n.n(r),s=(n(27),n(5)),o=n(2),u=n(21),d=n.n(u),l=n(3),j=n.n(l),p=n(7),b=n(4),O=n(22),f=n.n(O),h=Object(c.createContext)(),v=Object(c.createContext)(),x=h,m=n(0);var g=function(e){var t=e.placeholder,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],a=i[1];return[r,Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:"add-recipe-input small-input",type:"text",value:r,onChange:function(e){a(e.target.value)},placeholder:t})})]};var N=function(e){var t=e.placeholder,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],a=i[1];return[r,Object(m.jsx)("div",{children:Object(m.jsx)("textarea",{className:"add-recipe-input big-input",type:"text",value:r,onChange:function(e){a(e.target.value)},placeholder:t})})]},S=n(6),R=function(){var e=Object(c.useContext)(x).dispatchRecipeEvent,t=function(){var t=Object(b.a)(j.a.mark((function t(){var c,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=JSON.stringify(n(E)),i={title:a,description:l,source:v,ingredients:c,instructions:P,_id:f()()},e("ADD",{newRecipe:i});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(e){return e&&0!==e.trim().length?e.split(/[\n,]+/).map((function(e){return e.trim()})).map((function(e){return Object(S.parse)(e,"eng")})):[{}]},i=g({placeholder:"title"}),r=Object(o.a)(i,2),a=r[0],s=r[1],u=g({placeholder:"description"}),d=Object(o.a)(u,2),l=d[0],p=d[1],O=g({placeholder:"source"}),h=Object(o.a)(O,2),v=h[0],R=h[1],C=N({placeholder:"ingredients (comma or newline separated)"}),w=Object(o.a)(C,2),E=w[0],y=w[1],k=N({placeholder:"instructions"}),I=Object(o.a)(k,2),P=I[0],J=I[1];return Object(m.jsxs)("div",{id:"add-recipe",children:[Object(m.jsx)("h3",{className:"add-recipe-header",children:"Add New Recipe"}),Object(m.jsx)("div",{className:"add-recipe-top-container",children:Object(m.jsxs)("div",{className:"small-inputs",children:[s,p,R]})}),Object(m.jsxs)("div",{className:"add-recipe-btm-container",children:[y,J,Object(m.jsx)("button",{onClick:t,children:"Add Recipe"})]})]})},C=n(10),w=function(e){var t=e.recipe,n=Object(c.useContext)(x).dispatchRecipeEvent,i=Object(c.useContext)(v).handleSelectedRecipe;return Object(m.jsxs)("div",{className:"recipe-item",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"title",children:t.title}),Object(m.jsx)("button",{className:"select icon-button-small",onClick:function(){i(t)},children:Object(m.jsx)(C.b,{})})]}),Object(m.jsx)("div",{className:"middle",children:Object(m.jsx)("small",{children:t.description})}),Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("button",{onClick:function(){n("REMOVE",{id:t._id})},className:"icon-button-small",children:Object(m.jsx)(C.c,{})}),Object(m.jsx)("button",{onClick:function(){n("OPEN_EDIT",{id:t._id})},className:"icon-button-small",children:Object(m.jsx)(C.a,{})})]})]})},E=function(){var e=Object(c.useContext)(x).recipes;return Object(m.jsxs)("div",{id:"recipe-list",children:[Object(m.jsx)("div",{className:"recipe-list-header",children:Object(m.jsx)("h3",{children:"Recipes"})}),Object(m.jsx)("div",{className:"list",children:e.map((function(e){return Object(m.jsx)(w,{recipe:e},e._id)}))})]})},y=n(14),k=n.n(y),I=(n(20),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"450px"}});k.a.setAppElement("#root");var P=function(e){var t=e.isOpen,n=void 0!==t&&t,i=e.handleSetIsOpen,r=e.recipeToEdit,a=Object(c.useContext)(x).dispatchRecipeEvent,s=Object(c.useState)(n),u=Object(o.a)(s,2),d=u[0],l=u[1];function j(){i(!1)}Object(c.useEffect)((function(){l(n)}),[n]);var b=function(e){return e&&0!==e.trim().length?e.split(/[\n,]+/).map((function(e){return e.trim()})).map((function(e){return Object(S.parse)(e,"eng")})):[{}]},O=g({placeholder:r.title||"title"}),f=Object(o.a)(O,2),h=f[0],v=f[1],R=g({placeholder:r.description||"description"}),C=Object(o.a)(R,2),w=C[0],E=C[1],y=g({placeholder:r.source||"source"}),P=Object(o.a)(y,2),J=P[0],_=P[1],D=N({placeholder:"ingredients"}),A=Object(o.a)(D,2),T=A[0],L=A[1],F=N({placeholder:r.instructions||"instructions"}),M=Object(o.a)(F,2),Q=M[0],B=M[1];return Object(m.jsx)("div",{children:Object(m.jsx)(k.a,{isOpen:d,onAfterOpen:function(){console.log(r)},onRequestClose:j,style:I,contentLabel:"Edit Recipe",children:Object(m.jsxs)("div",{id:"add-recipe",children:[Object(m.jsxs)("h3",{className:"add-recipe-header",children:["Editing ",r.title]}),Object(m.jsx)("div",{className:"add-recipe-top-container",children:Object(m.jsxs)("div",{className:"small-inputs",children:[v,E,_]})}),Object(m.jsxs)("div",{className:"add-recipe-btm-container",children:[L,B,Object(m.jsx)("button",{onClick:function(){var e=0!==T.length?JSON.stringify(b(T)):JSON.stringify(r.ingredients),t=Object(p.a)(Object(p.a)({},r),{},{title:h||r.title,description:w||r.description,source:J||r.source,ingredients:e,instructions:Q||r.instructions});a("EDIT",{updatedRecipe:t}),j()},children:"Edit Recipe"}),Object(m.jsx)("button",{className:"cancel-button",onClick:j,children:"Cancel"})]})]})})})},J=localStorage,_=function(){return JSON.parse(localStorage.getItem("recipes"))||[]},D={getAllRecipes:function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(_())})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=_();c=[].concat(Object(s.a)(c),[t.recipe]),J.setItem("recipes",JSON.stringify(c)),e(t.recipe)})).then((function(e){n&&n(e)})).catch((function(e){c&&c(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=_(),i=c.findIndex((function(e){return e._id===t}));-1===i&&n(new Error("ID not found"));var r=c.splice(i,1);J.setItem("recipes",JSON.stringify(c)),e(r[0])})).then((function(e){n&&n(e)})).catch((function(e){c&&c(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),edit:function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=_(),i=c.findIndex((function(e){return e._id===t.recipe._id}));-1===i&&n(new Error("ID not found")),c[i]=t.recipe,J.setItem("recipes",JSON.stringify(c)),e(t.recipe)})).then((function(e){n&&n(e)})).catch((function(e){c&&c(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()};var A=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),a=Object(o.a)(r,2),u=a[0],d=a[1],l=Object(c.useState)({}),O=Object(o.a)(l,2),f=O[0],h=O[1],v=function(){return d(!u)};Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getAllRecipes();case 2:t=e.sent,n=(t||[]).map((function(e){return Object(p.a)(Object(p.a)({},e),{},{ingredients:JSON.parse(e.ingredients||"{}")})})),i(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g=function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=t.newRecipe).title&&c.title.trim()){e.next=3;break}return e.abrupt("return",null);case 3:D.submit({recipe:c},(function(e){var t=e;t.ingredients=JSON.parse(t.ingredients),i([].concat(Object(s.a)(n),[t])),console.log(e)}),(function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){D.remove(e.id,(function(e){var t=e;i(n.filter((function(e){return e._id!==t._id})))}),(function(e){console.log(e)}))},S=function(e){var t=n.find((function(t){return t._id===e.id}));h(t),v()},C=function(e){var t=e.updatedRecipe;D.edit({recipe:t},(function(e){var t=e;t.ingredients=JSON.parse(t.ingredients);var n=w(t);i(n),console.log(e)}),(function(e){console.log(e)}))},w=function(e){var t=n.findIndex((function(t){return t._id===e._id})),c=Object(s.a)(n);return c[t]=e,c};return Object(m.jsx)("div",{id:"recipe-page",children:Object(m.jsxs)(x.Provider,{value:{recipes:n,dispatchRecipeEvent:function(e,t){switch(e){case"ADD":return void g(t);case"REMOVE":return void N(t);case"OPEN_EDIT":return void S(t);case"EDIT":return void C(t);default:return}}},children:[Object(m.jsx)(P,{isOpen:u,handleSetIsOpen:v,recipeToEdit:f}),Object(m.jsx)(R,{}),Object(m.jsx)(E,{})]})})},T=function(){var e=Object(c.useContext)(v).selectedRecipes,t=Object(c.useState)([]),n=Object(o.a)(t,2),i=n[0],r=n[1];Object(c.useEffect)((function(){var t=[];if(0!==e.length){var n=e.map((function(e){return e.ingredients})).reduce((function(e,t){return e.concat(t)})).map((function(e){return e}));t=Object(S.combine)(n).map((function(e){return a(e)}))}r(t)}),[e]);var a=function(e){if(0!==Object.keys(e).length&&e.ingredient)return e.unit?1===e.maxQty?e.maxQty+" "+e.unit+" of "+e.ingredient:e.maxQty+" "+e.unitPlural+" of "+e.ingredient:e.maxQty+" "+e.ingredient};return Object(m.jsxs)("div",{id:"shopping-list",children:[Object(m.jsx)("h3",{className:"header",children:"Shopping List"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"list",children:Object(m.jsx)("ul",{children:i.map((function(e,t){return e&&Object(m.jsx)("li",{children:e},t)}))})})]})},L=function(e){var t=e.recipe,n=e.toRemove,i=Object(c.useContext)(v).handleRemoveSelectedRecipe;return Object(m.jsx)("div",{className:"selected-recipe-item",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){i(n)},className:"text-button-small",children:"remove"}),t.title]})})},F=function(){var e=Object(c.useContext)(v).selectedRecipes;return Object(m.jsxs)("div",{id:"selected-recipe-list",children:[Object(m.jsx)("h3",{className:"header",children:"Selected Recipes"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"list",children:e.map((function(e,t){return Object(m.jsx)(L,{recipe:e,toRemove:t},t)}))})]})},M=(n(46),function(){return Object(m.jsxs)("div",{id:"shopping-page",children:[Object(m.jsx)(T,{}),Object(m.jsx)(F,{})]})});var Q=function(e){var t=Object(c.useContext)(v).handlePageChange;return Object(m.jsx)("div",{id:e.id,className:"tab-container ".concat(e.active?"active":""),onClick:function(e){var n=e.target;if(n.classList.contains("tab-container")&&!n.classList.contains("active")){var c=n.parentNode,i=Array.prototype.indexOf.call(c.children,n);t(i)}},children:e.name})},B=function(){var e=Object(c.useContext)(v).selectedPage;return Object(m.jsxs)("div",{id:"page-tab",children:[Object(m.jsx)(Q,{id:"recipe-tab",name:"Recipes",index:"0",active:0===e}),Object(m.jsx)(Q,{id:"shopping-tab",name:"Shopping List",index:"1",active:1===e})]})};n(47);var V=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(JSON.parse(localStorage.getItem("selectedRecipes"))||[]),a=Object(o.a)(r,2),u=a[0],l=a[1];return Object(c.useEffect)((function(){var e=JSON.stringify(u);localStorage.setItem("selectedRecipes",e)}),[u]),Object(m.jsxs)("div",{className:"main-container",children:[Object(m.jsxs)(d.a,{transitionDuration:1e3,children:[Object(m.jsx)("div",{id:"main-heading",children:"deipNOM"}),1===n&&Object(m.jsx)(v.Provider,{value:{selectedRecipes:u,handleRemoveSelectedRecipe:function(e){var t=Object(s.a)(u);t.splice(e,1),l(t)}},children:Object(m.jsx)(M,{})}),0===n&&Object(m.jsx)(v.Provider,{value:{handleSelectedRecipe:function(e){l([].concat(Object(s.a)(u),[e]))}},children:Object(m.jsx)(A,{})})]}),Object(m.jsx)("div",{id:"main-footer",children:Object(m.jsx)(v.Provider,{value:{selectedPage:n,handlePageChange:function(e){i(e)}},children:Object(m.jsx)(B,{})})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),q()}},[[48,1,2]]]);
//# sourceMappingURL=main.04ffe5ee.chunk.js.map