(this["webpackJsonpstarter-pack-app"]=this["webpackJsonpstarter-pack-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/care1.e02337f0.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/care2.3aba1923.jpg"},function(e,t,a){e.exports=a.p+"static/media/care3.ef4cf5d9.jpg"},function(e,t,a){e.exports=a.p+"static/media/care4.1aee980d.jpg"},function(e,t,a){e.exports=a.p+"static/media/care5.a08da6ac.jpg"},,,,,function(e,t,a){e.exports=a.p+"static/media/body1.4482eb06.jpg"},function(e,t,a){e.exports=a.p+"static/media/body2.aeeb5486.jpg"},function(e,t,a){e.exports=a.p+"static/media/body3.8949a731.jpg"},function(e,t,a){e.exports=a.p+"static/media/body4.8d7fbaeb.jpg"},function(e,t,a){e.exports=a.p+"static/media/body5.8f6a502d.jpg"},function(e,t,a){e.exports=a.p+"static/media/ceremony1.7c7e99d4.jpg"},function(e,t,a){e.exports=a.p+"static/media/ceremony2.35692cac.jpg"},function(e,t,a){e.exports=a.p+"static/media/ceremony3.4ccc0811.jpg"},function(e,t,a){e.exports=a.p+"static/media/ceremony4.1e664a66.jpg"},function(e,t,a){e.exports=a.p+"static/media/ceremony5.e3f6a8f6.jpg"},function(e,t,a){e.exports=a.p+"static/media/treasures1.3ed36b18.jpg"},function(e,t,a){e.exports=a.p+"static/media/treasures2.7c4dd319.jpg"},function(e,t,a){e.exports=a.p+"static/media/treasures3.bbfb655f.jpg"},function(e,t,a){e.exports=a.p+"static/media/treasures4.41fc0529.jpg"},function(e,t,a){e.exports=a.p+"static/media/treasures5.2533c285.jpg"},function(e,t,a){e.exports=a.p+"static/media/legacy1.31f27917.jpg"},function(e,t,a){e.exports=a.p+"static/media/legacy2.85439527.jpg"},function(e,t,a){e.exports=a.p+"static/media/legacy3.604a57a9.jpg"},function(e,t,a){e.exports=a.p+"static/media/legacy4.aecde098.jpg"},function(e,t,a){e.exports=a.p+"static/media/legacy5.162c3292.jpg"},,,,,,function(e,t,a){e.exports=a(77)},,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),o=a.n(c),i=(a(53),a(56),a(47)),l=(a(57),a(1));function s(e,t,a){var r=Object(n.useReducer)(a,t,(function(){var a;try{a=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(n){a=t}return a})),c=Object(l.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[o]),[o,i]}var m=a(6),d=a(13),u=a(11),p=a.n(u),f=function(e,t){switch(t.type){case"add":return[].concat(Object(d.a)(e),[{id:p()(),note:t.note,completed:!1}]);case"remove":return e.filter((function(e){return e.id!==t.id}));case"toggle":return e.map((function(e){return e.id===t.id?Object(m.a)({},e,{completed:!e.completed}):e}));case"edit":return e.map((function(e){return e.id===t.id?Object(m.a)({},e,{note:t.editedNote}):e}));default:return e}},b=Object(n.createContext)(),v=Object(n.createContext)();function g(e){var t=s("notes",[],f),a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.createElement(b.Provider,{value:n},r.a.createElement(v.Provider,{value:c},e.children))}var E=a(2),j=a(3),N=a(5),h=a(4),y=a(12),x=a.n(y),O=a(15),w=a.n(O),C=a(16),k=a.n(C),S=a(17),D=a.n(S),A=a(18),I=a.n(A),J=(a(23),a(24),a(25),a(26),a(27),a(28),a(29),a(30),a(31),a(32),a(33),a(34),a(35),a(36),a(37),a(38),a(39),a(40),a(41),a(42),a(66),function(e){Object(N.a)(a,e);var t=Object(h.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},this.props.cards.map((function(e){return r.a.createElement("div",{className:"Card col-lg-1 col-md-1 text-center",key:e.id},r.a.createElement("img",{src:e.src,alt:e.name}))}))))}}]),a}(n.Component));J.defaultProps={cards:[{name:"Care 1",src:x.a,id:1},{name:"Care 2",src:w.a,id:2},{name:"Care 3",src:k.a,id:3},{name:"Care 4",src:D.a,id:4},{name:"Care 5",src:I.a,id:5}]};var P=J,B=(a(67),function(e){Object(N.a)(a,e);var t=Object(h.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"BigCard",src:x.a}))}}]),a}(n.Component));var F=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(l.a)(t,2),r=a[0],c=a[1],o=function(){c(!r)};return[r,o]},T=function(e){var t=Object(n.useState)(e),a=Object(l.a)(t,2),r=a[0],c=a[1];return[r,function(e){c(e.target.value)},function(){c("")}]};a(68);var W=function(e){var t=e.id,a=e.note,c=e.toggleEditForm,o=Object(n.useContext)(v),i=T(a),s=Object(l.a)(i,3),m=s[0],d=s[1],u=s[2];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o({type:"edit",editedNote:m,id:t}),u(),c()},className:"Notecard"},r.a.createElement("textarea",{className:"Notecard-textarea",value:m,onChange:d}),r.a.createElement("button",{className:"btn btn-primary"},"Confirm"))};a(69);var H=Object(n.memo)((function(e){var t=e.id,a=e.note,c=e.completed,o=Object(n.useContext)(v),i=F(!1),s=Object(l.a)(i,2),m=s[0],d=s[1],u={textDecoration:c?"line-through":"none"};return r.a.createElement("div",null,m?r.a.createElement(W,{id:t,note:a,toggleEditForm:d}):r.a.createElement("div",{class:"card rounded-0 Note"},r.a.createElement("div",{class:"card-text m-3 text-left",style:u},a),r.a.createElement("div",{class:"row justify-content-center mb-2"},r.a.createElement("button",{class:"btn-sm btn-outline-success m-1",onClick:function(){return o({type:"toggle",id:t})}},"Toggle"),r.a.createElement("button",{class:"btn-sm btn-outline-info m-1","aria-label":"Edit",onClick:d},"Edit"),r.a.createElement("button",{class:"btn-sm btn-outline-danger m-1","aria-label":"Delete",onClick:function(){return o({type:"remove",id:t})}},"Delete"))))}));a(70);var L=function(){var e=Object(n.useContext)(b);return console.log(e),e.length?r.a.createElement("div",{className:"Panel card p-1 rounded-0 border-0"},r.a.createElement("h1",{className:"text-center mt-3 mb-4"},"notecards"),e.map((function(e,t){return r.a.createElement("div",{key:t,className:"m-1 "},r.a.createElement(H,Object.assign({},e,{key:e.id,className:"card-body "})))}))):null},R=a(10);a(71);var $=function(){var e=T(""),t=Object(l.a)(e,3),a=t[0],c=t[1],o=t[2],i=Object(n.useContext)(v);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i({type:"add",note:a}),o()},className:"Notecard"},r.a.createElement("label",{htmlFor:"newNote"}),r.a.createElement("textarea",Object(R.a)({id:"newNote",placeholder:"New Notecard",className:"form-control",value:a,onChange:c,label:"Add New Todo"},"className","Notecard-new")),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))},q=function(e){Object(N.a)(a,e);var t=Object(h.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Link")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"#",tabIndex:"-1","aria-disabled":"true"},"Disabled"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))))}}]),a}(n.Component);a(72);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null,r.a.createElement("div",{className:"col-9"},r.a.createElement(P,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement(B,null)),r.a.createElement("div",{className:"col-8"},r.a.createElement($,null)))),r.a.createElement("div",{className:"col-3 pr-0"},r.a.createElement(L,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[48,1,2]]]);
//# sourceMappingURL=main.1a5de2fb.chunk.js.map