'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

var g=Object.create;var o=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var c=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var b=(u,e)=>()=>(e||u((e={exports:{}}).exports,e),e.exports);var x=(u,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let F of i(e))!B.call(u,F)&&F!==r&&o(u,F,{get:()=>e[F],enumerable:!(n=s(e,F))||n.enumerable});return u};var m=(u,e,r)=>(r=u!=null?g(c(u)):{},x(e||!u||!u.__esModule?o(r,"default",{value:u,enumerable:!0}):r,u));var D=b((A,t)=>{var v=/([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g,y=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;function a(u){if(typeof u!="string")throw new TypeError("Expected a string");u=u.replace(v,function(n,F,l){return a(l)+F}).replace(y,"$2$1");for(var e="",r=u.length-1;r>=0;r--)e+=u[r];return e}typeof t<"u"&&t.exports&&(t.exports=a);});var p=m(D());function f({children:u,type:e}){return jsxRuntime.jsx("button",{className:`${e==="primary"?"bg-blue-500 hover:bg-blue-400":"bg-green-500 hover:bg-green-400"} rounded-md p-2 text-white`,children:(0, p.default)(u)})}function d({children:u}){return jsxRuntime.jsx("span",{className:"bg-gray-300 rounded-md p-1 flex-inline",children:u})}

exports.Button = f;
exports.Tag = d;
