"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[511],{5318:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return s}});var n=t(7378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=i(t),s=a,f=m["".concat(l,".").concat(s)]||m[s]||p[s]||o;return t?n.createElement(f,c(c({ref:r},u),{},{components:t})):n.createElement(f,c({ref:r},u))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4978:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var n=t(5773),a=t(808),o=(t(7378),t(5318)),c=["components"],d={},l="Commerce",i={unversionedId:"commerce",id:"commerce",title:"Commerce",description:"`randDepartment`",source:"@site/docs/commerce.md",sourceDirName:".",slug:"/commerce",permalink:"/falso/docs/commerce",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/commerce.md",tags:[],version:"current",frontMatter:{},sidebar:"foo",previous:{title:"Colors",permalink:"/falso/docs/colors"},next:{title:"Company",permalink:"/falso/docs/company"}},u=[{value:"<code>randDepartment</code>",id:"randdepartment",children:[],level:3},{value:"<code>randProductAdjective</code>",id:"randproductadjective",children:[],level:3},{value:"<code>randProductCategory</code>",id:"randproductcategory",children:[],level:3},{value:"<code>randProductDescription</code>",id:"randproductdescription",children:[],level:3},{value:"<code>randProductMaterial</code>",id:"randproductmaterial",children:[],level:3},{value:"<code>randProductName</code>",id:"randproductname",children:[],level:3}],p={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commerce"},"Commerce"),(0,o.kt)("h3",{id:"randdepartment"},(0,o.kt)("inlineCode",{parentName:"h3"},"randDepartment")),(0,o.kt)("p",null,"Generate a random department."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDepartment } from '@ngneat/falso';\n\nrandDepartment()\nrandDepartment({ length: 10 })\n")),(0,o.kt)("h3",{id:"randproductadjective"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductAdjective")),(0,o.kt)("p",null,"Generate a random product adjective."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductAdjective } from '@ngneat/falso';\n\nrandProductAdjective()\nrandProductAdjective({ length: 10 })\n")),(0,o.kt)("h3",{id:"randproductcategory"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductCategory")),(0,o.kt)("p",null,"Generate a random product category."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductCategory } from '@ngneat/falso';\n\nrandProductCategory()\nrandProductCategory({ length: 10 })\n")),(0,o.kt)("h3",{id:"randproductdescription"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductDescription")),(0,o.kt)("p",null,"Generate a random product description."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductDescription } from '@ngneat/falso';\n\nrandProductDescription()\nrandProductDescription({ length: 10 })\n")),(0,o.kt)("h3",{id:"randproductmaterial"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductMaterial")),(0,o.kt)("p",null,"Generate a random product material."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductMaterial } from '@ngneat/falso';\n\nrandProductMaterial()\nrandProductMaterial({ length: 10 })\n")),(0,o.kt)("h3",{id:"randproductname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProductName")),(0,o.kt)("p",null,"Generate a random product name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProductName } from '@ngneat/falso';\n\nrandProductName()\nrandProductName({ length: 10 })\n")))}m.isMDXComponent=!0}}]);