(this.webpackJsonpdeipnom=this.webpackJsonpdeipnom||[]).push([[0],{20:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(13),a=n.n(r),s=(n(28),n(5)),o=n(2),u=n(21),d=n.n(u),l=n(3),j=n.n(l),p=n(8),b=n(6),O=n(22),f=n.n(O),h=Object(c.createContext)(),v=Object(c.createContext)(),m=h,x=n(0);var g=function(e){var t=e.placeholder,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],a=i[1];return[r,Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"add-recipe-input small-input",type:"text",value:r,onChange:function(e){a(e.target.value)},placeholder:t})})]};var N=function(e){var t=e.placeholder,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],a=i[1];return[r,Object(x.jsx)("div",{children:Object(x.jsx)("textarea",{className:"add-recipe-input big-input",type:"text",value:r,onChange:function(e){a(e.target.value)},placeholder:t})})]},R=n(23),S=n.n(R),C=n(4);var y=function(e){var t=e.handleAddThumbnail,n=(e.image,i.a.createRef()),c=i.a.createRef(),r=function(e){new S.a(e,{quality:.5,maxWidth:400,maxHeight:400,success:function(e){t(e)}})};return Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"file",className:"thumbnail-input",onChange:function(e){var t=e.target.files[0];if(t){r(t);var n=URL.createObjectURL(t);c.style.backgroundImage="url("+n+")"}},style:{display:"none"},ref:function(e){return n=e}}),Object(x.jsx)("div",{className:"add-recipe-thumbnail",onClick:function(){n.click()},ref:function(e){return c=e},children:Object(x.jsx)(C.c,{})})]})},w=n(7),E=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useContext)(m).dispatchRecipeEvent,a=function(e){return e&&0!==e.trim().length?e.split(/[\n,]+/).map((function(e){return e.trim()})).map((function(e){return Object(w.parse)(e,"eng")})):[{}]},s=g({placeholder:"title"}),u=Object(o.a)(s,2),d=u[0],l=u[1],j=g({placeholder:"description"}),p=Object(o.a)(j,2),b=p[0],O=p[1],h=g({placeholder:"source"}),v=Object(o.a)(h,2),R=v[0],S=v[1],C=N({placeholder:"ingredients (comma or newline separated)"}),E=Object(o.a)(C,2),k=E[0],I=E[1],P=N({placeholder:"instructions"}),J=Object(o.a)(P,2),_=J[0],D=J[1];return Object(x.jsxs)("div",{id:"add-recipe",children:[Object(x.jsx)("h3",{className:"add-recipe-header",children:"Add New Recipe"}),Object(x.jsxs)("div",{className:"add-recipe-top-container",children:[Object(x.jsx)(y,{handleAddThumbnail:function(e){i(e)},image:n}),Object(x.jsxs)("div",{className:"small-inputs",children:[l,O,S]})]}),Object(x.jsxs)("div",{className:"add-recipe-btm-container",children:[I,D,Object(x.jsx)("button",{onClick:function(){var e=JSON.stringify(a(k)),t={title:d,description:b,source:R,ingredients:e,instructions:_,_id:f()()};r("ADD",{newRecipe:t,thumbnail:n})},children:"Add Recipe"})]})]})},k=function(e){var t=e.recipe,n=Object(c.useContext)(m).dispatchRecipeEvent,i=Object(c.useContext)(v).handleSelectedRecipe;return Object(x.jsxs)("div",{className:"recipe-item",style:{backgroundImage:"url("+t.image+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("div",{className:"title",children:t.title}),Object(x.jsx)("button",{className:"select icon-button-small",onClick:function(){i(t)},children:Object(x.jsx)(C.b,{})})]}),Object(x.jsx)("div",{className:"middle",children:Object(x.jsx)("small",{children:t.description})}),Object(x.jsxs)("div",{className:"footer",children:[Object(x.jsx)("button",{onClick:function(){n("REMOVE",{id:t._id})},className:"icon-button-small",children:Object(x.jsx)(C.d,{})}),Object(x.jsx)("button",{onClick:function(){n("OPEN_EDIT",{id:t._id})},className:"icon-button-small",children:Object(x.jsx)(C.a,{})})]})]})},I=function(){var e=Object(c.useContext)(m).recipes;return Object(x.jsxs)("div",{id:"recipe-list",children:[Object(x.jsx)("div",{className:"recipe-list-header",children:Object(x.jsx)("h3",{children:"Recipes"})}),Object(x.jsx)("div",{className:"list",children:e.map((function(e){return Object(x.jsx)(k,{recipe:e},e._id)}))})]})},P=n(14),J=n.n(P),_=(n(20),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"450px"}});J.a.setAppElement("#root");var D=function(e){var t,n=e.isOpen,i=void 0!==n&&n,r=e.handleSetIsOpen,a=e.recipeToEdit,s=Object(c.useContext)(m).dispatchRecipeEvent,u=Object(c.useState)(i),d=Object(o.a)(u,2),l=d[0],j=d[1];function b(){r(!1)}Object(c.useEffect)((function(){j(i)}),[i]);var O=function(e){return e&&0!==e.trim().length?e.split(/[\n,]+/).map((function(e){return e.trim()})).map((function(e){return Object(w.parse)(e,"eng")})):[{}]},f=g({placeholder:a.title||"title"}),h=Object(o.a)(f,2),v=h[0],R=h[1],S=g({placeholder:a.description||"description"}),y=Object(o.a)(S,2),E=y[0],k=y[1],I=g({placeholder:a.source||"source"}),P=Object(o.a)(I,2),D=P[0],A=P[1],T=N({placeholder:"ingredients"}),L=Object(o.a)(T,2),F=L[0],M=L[1],Q=N({placeholder:a.instructions||"instructions"}),q=Object(o.a)(Q,2),B=q[0],U=q[1];return Object(x.jsx)("div",{children:Object(x.jsx)(J.a,{isOpen:l,onAfterOpen:function(){console.log(a),t.style.color="#cb9eff"},onRequestClose:b,style:_,contentLabel:"Edit Recipe",children:Object(x.jsxs)("div",{id:"add-recipe",children:[Object(x.jsxs)("h3",{className:"add-recipe-header",children:["Editing ",a.title]}),Object(x.jsxs)("div",{className:"add-recipe-top-container",children:[Object(x.jsx)("div",{className:"add-recipe-thumbnail",ref:function(e){return t=e},onClick:function(e){console.log("TODO")},children:Object(x.jsx)(C.c,{})}),Object(x.jsxs)("div",{className:"small-inputs",children:[R,k,A]})]}),Object(x.jsxs)("div",{className:"add-recipe-btm-container",children:[M,U,Object(x.jsx)("button",{onClick:function(){var e=0!==F.length?JSON.stringify(O(F)):JSON.stringify(a.ingredients),t=Object(p.a)(Object(p.a)({},a),{},{title:v||a.title,description:E||a.description,source:D||a.source,ingredients:e,instructions:B||a.instructions});s("EDIT",{updatedRecipe:t}),b()},children:"Edit Recipe"}),Object(x.jsx)("button",{className:"cancel-button",onClick:b,children:"Cancel"})]})]})})})},A=localStorage,T=function(){return JSON.parse(localStorage.getItem("recipes"))||[]},L={getAllRecipes:function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(T())})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=T();c=[].concat(Object(s.a)(c),[t.recipe]),A.setItem("recipes",JSON.stringify(c)),e(t.recipe)})).then((function(e){n&&n(e)})).catch((function(e){c&&c(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=T(),i=c.findIndex((function(e){return e._id===t}));-1===i&&n(new Error("ID not found"));var r=c.splice(i,1);A.setItem("recipes",JSON.stringify(c)),e(r[0])})).then((function(e){n&&n(e)})).catch((function(e){c&&c(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),edit:function(){var e=Object(b.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=T(),i=c.findIndex((function(e){return e._id===t.recipe._id}));-1===i&&n(new Error("ID not found")),c[i]=t.recipe,A.setItem("recipes",JSON.stringify(c)),e(t.recipe)})).then((function(e){n&&n(e)})).catch((function(e){c&&c(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()};var F=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),a=Object(o.a)(r,2),u=a[0],d=a[1],l=Object(c.useState)({}),O=Object(o.a)(l,2),f=O[0],h=O[1],v=function(){return d(!u)};Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAllRecipes();case 2:t=e.sent,n=(t||[]).map((function(e){return Object(p.a)(Object(p.a)({},e),{},{ingredients:JSON.parse(e.ingredients||"{}")})})),i(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g=function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=t.newRecipe).title&&c.title.trim()){e.next=3;break}return e.abrupt("return",null);case 3:L.submit({recipe:c},(function(e){var t=e;t.ingredients=JSON.parse(t.ingredients),i([].concat(Object(s.a)(n),[t])),console.log(e)}),(function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){L.remove(e.id,(function(e){var t=e;i(n.filter((function(e){return e._id!==t._id})))}),(function(e){console.log(e)}))},R=function(e){var t=n.find((function(t){return t._id===e.id}));h(t),v()},S=function(e){var t=e.updatedRecipe;L.edit({recipe:t},(function(e){var t=e;t.ingredients=JSON.parse(t.ingredients);var n=C(t);i(n),console.log(e)}),(function(e){console.log(e)}))},C=function(e){var t=n.findIndex((function(t){return t._id===e._id})),c=Object(s.a)(n);return c[t]=e,c};return Object(x.jsx)("div",{id:"recipe-page",children:Object(x.jsxs)(m.Provider,{value:{recipes:n,dispatchRecipeEvent:function(e,t){switch(e){case"ADD":return void g(t);case"REMOVE":return void N(t);case"OPEN_EDIT":return void R(t);case"EDIT":return void S(t);default:return}}},children:[Object(x.jsx)(D,{isOpen:u,handleSetIsOpen:v,recipeToEdit:f}),Object(x.jsx)(E,{}),Object(x.jsx)(I,{})]})})},M=function(){var e=Object(c.useContext)(v).selectedRecipes,t=Object(c.useState)([]),n=Object(o.a)(t,2),i=n[0],r=n[1];Object(c.useEffect)((function(){var t=[];if(0!==e.length){var n=e.map((function(e){return e.ingredients})).reduce((function(e,t){return e.concat(t)})).map((function(e){return e}));t=Object(w.combine)(n).map((function(e){return a(e)}))}r(t)}),[e]);var a=function(e){return e.unit?1===e.maxQty?e.maxQty+" "+e.unit+" of "+e.ingredient:e.maxQty+" "+e.unitPlural+" of "+e.ingredient:e.maxQty+" "+e.ingredient};return Object(x.jsxs)("div",{id:"shopping-list",children:[Object(x.jsx)("h3",{className:"header",children:"Shopping List"}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{className:"list",children:Object(x.jsx)("ul",{children:i.map((function(e,t){return Object(x.jsx)("li",{children:e},t)}))})})]})},Q=function(e){var t=e.recipe,n=e.toRemove,i=Object(c.useContext)(v).handleRemoveSelectedRecipe;return Object(x.jsx)("div",{className:"selected-recipe-item",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(){i(n)},className:"text-button-small",children:"remove"}),t.title]})})},q=function(){var e=Object(c.useContext)(v).selectedRecipes;return Object(x.jsxs)("div",{id:"selected-recipe-list",children:[Object(x.jsx)("h3",{className:"header",children:"Selected Recipes"}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{className:"list",children:e.map((function(e,t){return Object(x.jsx)(Q,{recipe:e,toRemove:t},t)}))})]})},B=(n(47),function(){return Object(x.jsxs)("div",{id:"shopping-page",children:[Object(x.jsx)(M,{}),Object(x.jsx)(q,{})]})});var U=function(e){var t=Object(c.useContext)(v).handlePageChange;return Object(x.jsx)("div",{id:e.id,className:"tab-container ".concat(e.active?"active":""),onClick:function(e){var n=e.target;if(n.classList.contains("tab-container")&&!n.classList.contains("active")){var c=n.parentNode,i=Array.prototype.indexOf.call(c.children,n);t(i)}},children:e.name})},V=function(){var e=Object(c.useContext)(v).selectedPage;return Object(x.jsxs)("div",{id:"page-tab",children:[Object(x.jsx)(U,{id:"recipe-tab",name:"Recipes",index:"0",active:0===e}),Object(x.jsx)(U,{id:"shopping-tab",name:"Shopping List",index:"1",active:1===e})]})};n(48);var z=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(JSON.parse(localStorage.getItem("selectedRecipes"))||[]),a=Object(o.a)(r,2),u=a[0],l=a[1];return Object(c.useEffect)((function(){var e=JSON.stringify(u);localStorage.setItem("selectedRecipes",e)}),[u]),Object(x.jsxs)("div",{className:"main-container",children:[Object(x.jsxs)(d.a,{transitionDuration:1e3,children:[Object(x.jsx)("div",{id:"main-heading",children:"deipNOM"}),1===n&&Object(x.jsx)(v.Provider,{value:{selectedRecipes:u,handleRemoveSelectedRecipe:function(e){var t=Object(s.a)(u);t.splice(e,1),l(t)}},children:Object(x.jsx)(B,{})}),0===n&&Object(x.jsx)(v.Provider,{value:{handleSelectedRecipe:function(e){l([].concat(Object(s.a)(u),[e]))}},children:Object(x.jsx)(F,{})})]}),Object(x.jsx)("div",{id:"main-footer",children:Object(x.jsx)(v.Provider,{value:{selectedPage:n,handlePageChange:function(e){i(e)}},children:Object(x.jsx)(V,{})})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),H()}},[[49,1,2]]]);
//# sourceMappingURL=main.12673915.chunk.js.map