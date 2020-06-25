(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=a(8),i=a(3);a(14);function u(){return new Array(25).fill(null).map((function(){return new Array(25).fill(0)}))}function s(e,t,a){for(var n=0,r=t-1;r<=t+1;r++)for(var l=a-1;l<=a+1;l++)r===t&&l===a||r>=0&&r<25&&l>=0&&l<25&&(n+=e[r][l]);return n}var m=a(20);var f=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useState)(u),l=Object(i.a)(a,2),c=l[0],f=l[1],v=Object(n.useState)(0),h=Object(i.a)(v,2),p=h[0],d=h[1],b=Object(n.useState)(1e3),E=Object(i.a)(b,2),g=E[0],w=E[1],y=Object(n.useState)({background:"#808080",color:"#008000"}),k=Object(i.a)(y,2),N=k[0],j=k[1];Object(n.useEffect)((function(){for(var a=0;a<c.length;a++)for(var n=0;n<c[a].length;n++){var r=c[a][n],l=e.current.getContext("2d");l.beginPath(),l.rect(16*a,16*n,16,16),l.fillStyle=r?N.color:N.background,l.fill(),l.stroke()}t.current&&window.setTimeout((function(){d(p+1),requestAnimationFrame(A)}),g)}),[c,N]);var A=function(){var e=c.map((function(e,t){return Object(o.a)(e)}));c.forEach((function(t,a){t.forEach((function(t,n){var r=s(c,a,n);1===t&&r<2||1===t&&r>3?e[a][n]=0:0===t&&3===r&&(e[a][n]=1)}))})),f(e)};s();var O=function(){t.current=!1};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Welcome to Xavier's Game of Life"),r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"canvasSection"},r.a.createElement("h1",{className:"h1"},"Generation : ",p," "),r.a.createElement("div",{className:"gameSection"},r.a.createElement("canvas",{width:"400",height:"400",ref:e,id:"game",className:"canvas",onClick:function(t){var a=Math.floor((t.clientX-e.current.offsetLeft)/16),n=Math.floor((t.clientY-e.current.offsetTop)/16),r=c.map((function(e,t){return e.map((function(e,r){return t===a&&r===n?0===e?1:0:e}))}));f(r)}}),r.a.createElement("div",{className:"buttonSide"},r.a.createElement("button",null,"Preset 1"),r.a.createElement("button",null,"Preset 2"),r.a.createElement("button",null,"Preset 3"),r.a.createElement("button",null,"Preset 4"))),r.a.createElement("div",{className:"buttonBottom"},r.a.createElement("input",{type:"color",value:N.background,onChange:function(e){j({background:e.target.value,color:N.color})},placeholder:"background"}),r.a.createElement("input",{type:"color",value:N.color,onChange:function(e){j({background:N.background,color:e.target.value})}}),r.a.createElement(m.a,{color:"success",onClick:function(){t.current=!0,requestAnimationFrame(A),d(p+1)}},"Play"),r.a.createElement(m.a,{color:"primary",onClick:O},"Pause"),r.a.createElement(m.a,{color:"warning",onClick:function(){O(),window.setTimeout((function(){f(u()),d(0)}),g)}},"Clear"),r.a.createElement(m.a,{onClick:function(){O(),window.setTimeout((function(){f(new Array(25).fill(null).map((function(){return new Array(25).fill(null).map((function(){return Math.floor(2*Math.random())}))}))),d(0)}),g)}},"Random"),r.a.createElement("select",{className:"speeds",value:g,onChange:function(e){w(e.target.value)}},r.a.createElement("option",{value:1e3},"Slow"),r.a.createElement("option",{value:500},"Normal"),r.a.createElement("option",{value:100},"Fast")))),r.a.createElement("div",{className:"rulesSection"},r.a.createElement("h1",{className:"h1"},"Rules :"),r.a.createElement("ul",{className:"ul"},r.a.createElement("li",null,"Any live cell with fewer than two live neighbours dies, as if by underpopulation."),r.a.createElement("li",null,"Any live cell with two or three live neighbours lives on to the next generation."),r.a.createElement("li",null,"Any live cell with more than three live neighbours dies, as if by overpopulation."),r.a.createElement("li",null,"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.")))))};a(17);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.25e21ff2.chunk.js.map