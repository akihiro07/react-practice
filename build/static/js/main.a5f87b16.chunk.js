(this["webpackJsonpreact-tutorial-dog-images"]=this["webpackJsonpreact-tutorial-dog-images"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var s=c(0),n=(c(9),c(4)),r=c(6),i=c(1),a=c(3),o=c.n(a),j=c(5),l=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(t,"/images/random/12"));case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){return Object(s.jsx)("p",{children:"Loading..."})},u=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("form",{onSubmit:function(t){console.log(t),t.preventDefault();var c=t.target.elements.breed;e.onFormSubmit(c.value)},children:Object(s.jsxs)("div",{className:"field has-addons",children:[Object(s.jsx)("div",{className:"control is-expanded",children:Object(s.jsx)("div",{className:"select is-fullwidth",children:Object(s.jsxs)("select",{name:"breed",defaultValue:"shiba",children:[Object(s.jsx)("option",{value:"shiba",children:"Shiba"}),Object(s.jsx)("option",{value:"akita",children:"Akita"})]})})}),Object(s.jsx)("div",{className:"control",children:Object(s.jsx)("button",{type:"submit",className:"button is-dark",children:"Reload"})})]})})})},b=function(){return Object(s.jsx)("header",{className:"hero is-dark is-bold",children:Object(s.jsx)("div",{className:"hero-body",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h1",{className:"title",children:"Cute Dog Images"})})})})},h=function(e){var t=e.src;return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("figure",{className:"image",children:Object(s.jsx)("img",{src:t,alt:"cute dog!"})})})})},m=function(e){var t=e.urls;return null===t?Object(s.jsx)(d,{}):Object(s.jsx)("div",{className:"columns is-vcentered is-multiline",children:t.map((function(e){return Object(s.jsx)("div",{className:"column is-3",children:Object(s.jsx)(h,{src:e})},e)}))})},x=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1];Object(i.useEffect)((function(){l("shiba").then((function(e){n(e)}))}),[]);return Object(s.jsxs)("main",{children:[Object(s.jsx)("section",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(u,{onFormSubmit:function(e){l(e).then((function(e){n(e)}))}})})}),Object(s.jsx)("section",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(m,{urls:c})})})]})},O=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsxs)("div",{className:"content has-text-centered",children:[Object(s.jsx)("p",{children:"Dog images are retrieved from Dog API"}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:"https://dog.ceo/dog-api/about",children:"Donate to Dog API"})})]})})},f=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{}),Object(s.jsx)(x,{}),Object(s.jsx)(O,{})]})};Object(n.render)(Object(s.jsx)(f,{}),document.querySelector("#content"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a5f87b16.chunk.js.map