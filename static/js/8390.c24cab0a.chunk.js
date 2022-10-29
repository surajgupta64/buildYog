"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8390],{32004:function(e,t,n){n.r(t);var r=n(70885),a=n(78983),o=n(74569),s=n.n(o),c=n(72791),i=n(16856),l=n(80184),u="https://yoga-power-node-api.herokuapp.com";t.default=function(){var e=(0,c.useState)(!1),t=(0,r.Z)(e,2),n=t[0],o=t[1],d=(0,c.useState)(""),h=(0,r.Z)(d,2),m=h[0],p=h[1],f=(0,c.useState)(""),j=(0,r.Z)(f,2),x=j[0],b=j[1],y=(0,c.useState)(""),g=(0,r.Z)(y,2),v=g[0],N=g[1],C=(0,c.useState)(!1),k=(0,r.Z)(C,2),O=k[0],S=k[1],w=JSON.parse(localStorage.getItem("user-info")),_=w.token,E=w.user.username,z=(0,c.useState)([]),A=(0,r.Z)(z,2),D=A[0],V=A[1];function J(){s().get("".concat(u,"/designation/all"),{headers:{Authorization:"Bearer ".concat(_)}}).then((function(e){V(e.data)})).catch((function(e){console.error(e)}))}(0,c.useEffect)((function(){J()}),[]);return(0,l.jsxs)(a.xH,{className:"mb-3 border-success",children:[(0,l.jsx)(a.bn,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,l.jsx)(a.tj,{children:"Designation Master"})}),(0,l.jsxs)(a.sl,{children:[(0,l.jsxs)(a.lx,{className:"mb-2",children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{children:(0,l.jsx)(a.rb,{children:(0,l.jsx)(a.b7,{children:(0,l.jsx)(a.u5,{className:"ms-1 mt-2",onClick:function(){o(!n),S(!1)},children:n?"close":"Add Vacancy"})})})})]}),n&&(0,l.jsx)("div",{children:(0,l.jsxs)(a.rb,{className:"mt-3",children:[(0,l.jsx)(a.b7,{lg:6,md:6,sm:12,children:(0,l.jsx)(a.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Job Designation Name",value:m,onChange:function(e){return p(e.target.value)},placeholder:"Enter Job Designation"})}),(0,l.jsx)(a.b7,{lg:6,md:6,sm:12,children:(0,l.jsx)(a.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Job Department Name",value:x,onChange:function(e){return b(e.target.value)},placeholder:"Enter Job Department"})}),(0,l.jsx)(a.b7,{lg:6,md:6,sm:12,children:(0,l.jsx)(a.jO,{className:"mb-1",type:"number",id:"exampleFormControlInput1",label:"Available Vacancy",value:v,onChange:function(e){return N(e.target.value)},placeholder:"No of Vacancy"})}),(0,l.jsxs)(a.b7,{className:"mt-2",lg:6,md:6,sm:12,children:[(0,l.jsx)(a.kV,{size:"xl",label:"Status",value:O,onChange:function(){return S(!O)},style:{defaultChecked:"false"}}),(0,l.jsx)(a.u5,{className:"mt-2",onClick:function(){var e={username:E,jobDesignation:m,department:x,availableVacancy:v,status:O};fetch("".concat(u,"/designation/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(_),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(){S(!1),p(""),b(""),N(""),alert("successfully submitted")}))}))},children:"Save"})]})]})})]}),(0,l.jsxs)(a.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,l.jsx)(a.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,l.jsxs)(a.T6,{children:[(0,l.jsx)(a.is,{children:"Sr.No"}),(0,l.jsx)(a.is,{children:"Job Designation"}),(0,l.jsx)(a.is,{children:"Department"}),(0,l.jsx)(a.is,{children:"Available Vacancy"}),(0,l.jsx)(a.is,{children:"Status"}),(0,l.jsx)(a.is,{children:"Action"})]})}),(0,l.jsx)(a.NR,{children:D.map((function(e,t){return e.username===E&&(0,l.jsxs)(a.T6,{children:[(0,l.jsx)(a.NN,{children:t+1}),(0,l.jsx)(a.NN,{children:e.jobDesignation}),(0,l.jsx)(a.NN,{children:e.department}),(0,l.jsx)(a.NN,{children:e.availableVacancy}),(0,l.jsx)(a.NN,{children:(0,l.jsx)(a.kV,{size:"xl",style:{cursor:"pointer"},id:e._id,value:e.status,checked:e.status,onChange:function(){return function(e,t){var n={status:t};fetch("".concat(u,"/designation/update/").concat(e),{method:"POST",headers:{Authorization:"Bearer ".concat(_),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.json().then((function(e){J()}))}))}(e._id,!e.status)}})}),(0,l.jsxs)(a.NN,{children:[(0,l.jsx)(i.ZkW,{style:{cursor:"pointer",markerStart:"10px"},onClick:function(){return t=e._id,void fetch("".concat(u,"/designation/delete/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(_),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),J()}))}));var t},size:"20px"})," "]})]},t)}))})]})]})]})}},89983:function(e,t,n){n.d(t,{w_:function(){return l}});var r=n(72791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),i(e.child))}))}function l(e){return function(t){return r.createElement(u,s({attr:s({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,i=e.title,l=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=8390.c24cab0a.chunk.js.map