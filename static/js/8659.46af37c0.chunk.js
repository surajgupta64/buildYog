"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8659],{52188:function(e,t,n){n.r(t);var l=n(70885),a=n(72791),r=n(78983),o=n(74569),s=n.n(o),i=n(16856),c=n(39126),u=n(72426),m=n.n(u),d=n(80184),p="https://yoga-power-node-api.herokuapp.com";t.default=function(){var e=(0,a.useState)(!1),t=(0,l.Z)(e,2),n=t[0],o=t[1],u=(0,a.useState)(),x=(0,l.Z)(u,2),h=x[0],j=x[1],b=(0,a.useState)(!1),f=(0,l.Z)(b,2),C=f[0],N=f[1],g=(0,a.useState)(""),v=(0,l.Z)(g,2),y=v[0],S=v[1],F=(0,a.useState)(""),I=(0,l.Z)(F,2),O=I[0],w=I[1],D=(0,a.useState)(""),E=(0,l.Z)(D,2),k=E[0],T=E[1],H=(0,a.useState)(""),z=(0,l.Z)(H,2),Z=z[0],_=z[1],A=(0,a.useState)(""),W=(0,l.Z)(A,2),B=W[0],L=W[1],P=(0,a.useState)(""),q=(0,l.Z)(P,2),M=q[0],R=q[1],Y=(0,a.useState)(""),U=(0,l.Z)(Y,2),X=U[0],G=U[1],J=(0,a.useState)(""),V=(0,l.Z)(J,2),Q=V[0],K=V[1],$=(0,a.useState)(""),ee=(0,l.Z)($,2),te=ee[0],ne=ee[1],le=(0,a.useState)(""),ae=(0,l.Z)(le,2),re=ae[0],oe=ae[1],se=(0,a.useState)(),ie=(0,l.Z)(se,2),ce=ie[0],ue=ie[1],me=(0,a.useState)(!1),de=(0,l.Z)(me,2),pe=de[0],xe=de[1],he=(0,a.useState)(""),je=(0,l.Z)(he,2),be=je[0],fe=je[1],Ce=(0,a.useState)(""),Ne=(0,l.Z)(Ce,2),ge=Ne[0],ve=Ne[1],ye=(0,a.useState)(""),Se=(0,l.Z)(ye,2),Fe=Se[0],Ie=Se[1],Oe=(0,a.useState)(""),we=(0,l.Z)(Oe,2),De=we[0],Ee=we[1],ke=(0,a.useState)(""),Te=(0,l.Z)(ke,2),He=Te[0],ze=Te[1],Ze=(0,a.useState)(""),_e=(0,l.Z)(Ze,2),Ae=_e[0],We=_e[1],Be=(0,a.useState)(""),Le=(0,l.Z)(Be,2),Pe=Le[0],qe=Le[1],Me=(0,a.useState)(""),Re=(0,l.Z)(Me,2),Ye=Re[0],Ue=Re[1],Xe=(0,a.useState)(""),Ge=(0,l.Z)(Xe,2),Je=Ge[0],Ve=Ge[1],Qe=(0,a.useState)(),Ke=(0,l.Z)(Qe,2),$e=(Ke[0],Ke[1]),et=JSON.parse(localStorage.getItem("user-info")),tt=et.token,nt=et.user.username,lt=et.user.centerCode,at=(0,a.useState)([]),rt=(0,l.Z)(at,2),ot=rt[0],st=rt[1],it=(0,a.useState)([]),ct=(0,l.Z)(it,2),ut=ct[0],mt=ct[1];(0,a.useEffect)((function(){dt(),s().get("".concat(p,"/subservice/all"),{headers:{Authorization:"Bearer ".concat(tt)}}).then((function(e){console.log(e.data),st(e.data)})).catch((function(e){console.error(e)}))}),[]);function dt(){s().get("".concat(p,"/prospect/all"),{headers:{Authorization:"Bearer ".concat(tt)}}).then((function(e){console.log(e.data),mt(e.data)})).catch((function(e){console.error(e)}))}console.log(ut);var pt=function(e){ue(e),function(e){s().get("".concat(p,"/enquiryForm/").concat(e),{headers:{Authorization:"Bearer ".concat(tt)}}).then((function(e){$e(e.data),fe(e.data.Fullname),ve(e.data.ContactNumber),Ee(e.data.ServiceName),ze(e.data.CallStatus),Ie(e.data.Emailaddress),xe(!0)})).catch((function(e){console.error(e)}))}(e)},xt=function(e){ue(e),function(e){s().get("".concat(p,"/enquiryForm/").concat(e),{headers:{Authorization:"Bearer ".concat(tt)}}).then((function(e){$e(e.data),fe(e.data.Fullname),ve(e.data.ContactNumber),Ee(e.data.ServiceName),ze(e.data.CallStatus),Ie(e.data.Emailaddress),o(!0)})).catch((function(e){console.error(e)}))}(e)};function ht(e){j(e),function(e){s().get("".concat(p,"/prospect/").concat(e),{headers:{Authorization:"Bearer ".concat(tt)}}).then((function(e){$e(e.data),fe(e.data.Name),ve(e.data.Contact),Ee(e.data.ServiceName),ze(e.data.CallStatus),Ie(e.data.Email),We(m()(e.data.FollowupDate).utc().format("YYYY-MM-DD")),Ve(e.data.Counseller),Ue(e.data.Discussion),N(!0)})).catch((function(e){console.error(e)}))}(e)}return(0,d.jsx)(r.rb,{children:(0,d.jsx)(r.b7,{lg:12,sm:12,children:(0,d.jsxs)(r.xH,{className:"mb-3 border-top-success border-top-3",children:[(0,d.jsx)(r.bn,{children:(0,d.jsxs)("strong",{className:"mt-2",children:["Call Report ",(0,d.jsxs)("span",{className:"float-end",children:["Total Call Report : ",ut.filter((function(e){return e.username===nt&&"CallReport"===e.status})).length]})]})}),(0,d.jsxs)(r.sl,{children:[(0,d.jsx)("div",{className:"d-flex justify-content-between mb-2",children:(0,d.jsxs)(r.YR,{style:{width:"500px"},children:[(0,d.jsx)(r.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Form"}),(0,d.jsx)(r.jO,{type:"date",required:!0}),(0,d.jsx)(r.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"To"}),(0,d.jsx)(r.jO,{type:"date",required:!0}),(0,d.jsx)(r.u5,{type:"button",color:"primary",children:"Go"})]})}),(0,d.jsxs)(r.rb,{className:"d-flex justify-content-between mb-2",children:[(0,d.jsx)(r.b7,{lg:5,sm:6,md:6,children:(0,d.jsxs)(r.YR,{className:"mb-2",children:[(0,d.jsx)(r.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Communicate"}),(0,d.jsxs)(r.LX,{id:"inputGroupSelect01",children:[(0,d.jsx)("option",{children:"All Staff"}),(0,d.jsx)("option",{value:"1",children:"One"}),(0,d.jsx)("option",{value:"2",children:"Two"}),(0,d.jsx)("option",{value:"3",children:"Three"})]})]})}),(0,d.jsx)(r.b7,{lg:6,sm:6,md:6,children:(0,d.jsx)("div",{className:"d-flex justify-content-between float-end",children:(0,d.jsxs)(r.Z0,{style:{fontSize:"11px"},role:"group","aria-label":"Basic example",children:[(0,d.jsx)(r.u5,{style:{fontSize:"11px"},color:"dark",variant:"outline",children:"Scheduled: 0"}),(0,d.jsx)(r.u5,{style:{fontSize:"11px"},color:"dark",variant:"outline",children:"Attented: 0"}),(0,d.jsx)(r.u5,{style:{fontSize:"11px"},color:"dark",variant:"outline",children:"Rescheduled:0"}),(0,d.jsx)(r.u5,{style:{fontSize:"11px"},color:"dark",variant:"outline",children:"Prospect: 0"}),(0,d.jsx)(r.u5,{style:{fontSize:"11px"},color:"dark",variant:"outline",children:"Missed: 0"})]})})})]}),(0,d.jsxs)(r.Tk,{size:"lg",style:{border:"2px solid #0B5345"},visible:pe,color:"",onClose:function(){return xe(!1)},children:[(0,d.jsx)(r.p0,{children:(0,d.jsx)(r.fl,{children:"Call Report"})}),(0,d.jsx)(r.sD,{children:(0,d.jsx)(r.lx,{children:(0,d.jsxs)(r.rb,{children:[(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Name",value:be,onChange:function(e){return fe(e.target.value)},placeholder:"Enter Name"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"email",id:"exampleFormControlInput1",label:"Email Address",value:Fe,onChange:function(e){return Ie(e.target.value)},placeholder:"name@example.com","aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"number",value:ge,onChange:function(e){return ve(e.target.value)},id:"exampleFormControlInput1",label:"Contact No",placeholder:"Enter Number"})}),(0,d.jsx)(r.b7,{lg:6,md:6,sm:12,children:(0,d.jsxs)(r.LX,{className:"mb-1","aria-label":"Select Service Name",value:De,onChange:function(e){return Ee(e.target.value)},label:"Service Name",children:[(0,d.jsx)("option",{children:"Select Service"}),ot.map((function(e,t){return e.username===nt&&!0===e.status&&(0,d.jsxs)("option",{value:e.id,children:[e.selected_service," ",e.sub_Service_Name]},t)}))]})}),(0,d.jsx)(r.b7,{lg:6,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",value:Je,onChange:function(e){return Ve(e.target.value)},id:"exampleFormControlInput1",label:"Counseller",placeholder:"Enter Counseller Name"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.LX,{className:"mb-1","aria-label":"Select Call Status",value:He,onChange:function(e){return ze(e.target.value)},label:"Call Status",options:["Select",{label:"Cold",value:"Cold"},{label:"Warm",value:"Warm"},{label:"Hot",value:"Hot"}]})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",label:"FollowUp Date",type:"date",value:Ae,onChange:function(e){return We(e.target.value)},id:"exampleFormControlInput1"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",label:"FollowUp Time",type:"time",id:"exampleFormControlInput1",value:Pe,onChange:function(e){return qe(e.target.value)}})}),(0,d.jsx)(r.b7,{children:(0,d.jsx)(r.PB,{id:"exampleFormControlTextarea1",label:"Discussion",value:Ye,onChange:function(e){return Ue(e.target.value)},rows:"2",text:"Must be 8-20 words long."})})]})})}),(0,d.jsxs)(r.Ym,{children:[(0,d.jsx)(r.u5,{color:"secondary",onClick:function(){return xe(!1)},children:"Close"}),(0,d.jsx)(r.u5,{type:"submit",color:"primary",onClick:function(){return function(){var e=new Date,t=e.getDay()+"-"+e.getMonth()+"-"+e.getFullYear(),n=+e.getHours()+":"+e.getMinutes(),l={username:nt,EnquiryID:ce,CallDate:t,Time:n,Name:be,Contact:ge,Email:Fe,ServiceName:De,CallStatus:He,FollowupDate:Ae,TimeFollowp:Pe,Counseller:Je,Discussion:Ye,status:"CallReport"};fetch("".concat(p,"/prospect/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(tt),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){e.json().then((function(){o(!1)}))}));var a={Counseller:Je};fetch("".concat(p,"/enquiryForm/update/").concat(ce),{method:"POST",headers:{Authorization:"Bearer ".concat(tt),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){e.json().then((function(){alert("successfully submitted"),o(!1)}))}))}()},children:"Save Call Report"})]})]}),(0,d.jsxs)(r.Tk,{size:"lg",style:{border:"2px solid #0B5345"},visible:n,color:"",onClose:function(){return o(!1)},children:[(0,d.jsx)(r.p0,{children:(0,d.jsx)(r.fl,{children:"Prospect Form"})}),(0,d.jsx)(r.sD,{children:(0,d.jsx)(r.lx,{children:(0,d.jsxs)(r.rb,{children:[(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Name",value:be,onChange:function(e){return fe(e.target.value)},placeholder:"Enter Name"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"email",id:"exampleFormControlInput1",label:"Email Address",value:Fe,onChange:function(e){return Ie(e.target.value)},placeholder:"name@example.com","aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"number",value:ge,onChange:function(e){return ve(e.target.value)},id:"exampleFormControlInput1",label:"Contact No",placeholder:"Enter Number"})}),(0,d.jsx)(r.b7,{lg:6,md:6,sm:12,children:(0,d.jsxs)(r.LX,{className:"mb-1","aria-label":"Select Service Name",value:De,onChange:function(e){return Ee(e.target.value)},label:"Service Name",children:[(0,d.jsx)("option",{children:"Select Service"}),ot.map((function(e,t){return e.username===nt&&!0===e.status&&(0,d.jsxs)("option",{value:e.id,children:[e.selected_service," ",e.sub_Service_Name]},t)}))]})}),(0,d.jsx)(r.b7,{lg:6,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",value:Je,onChange:function(e){return Ve(e.target.value)},id:"exampleFormControlInput1",label:"Counseller",placeholder:"Enter Counseller Name"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.LX,{className:"mb-1","aria-label":"Select Call Status",value:He,onChange:function(e){return ze(e.target.value)},label:"Call Status",options:["Select",{label:"Cold",value:"Cold"},{label:"Warm",value:"Warm"},{label:"Hot",value:"Hot"}]})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",label:"FollowUp Date",type:"date",value:Ae,onChange:function(e){return We(e.target.value)},id:"exampleFormControlInput1"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",label:"FollowUp Time",type:"time",id:"exampleFormControlInput1",value:Pe,onChange:function(e){return qe(e.target.value)}})}),(0,d.jsx)(r.b7,{children:(0,d.jsx)(r.PB,{id:"exampleFormControlTextarea1",label:"Discussion",value:Ye,onChange:function(e){return Ue(e.target.value)},rows:"2",text:"Must be 8-20 words long."})})]})})}),(0,d.jsxs)(r.Ym,{children:[(0,d.jsx)(r.u5,{color:"secondary",onClick:function(){return o(!1)},children:"Close"}),(0,d.jsx)(r.u5,{type:"submit",color:"primary",onClick:function(){return function(){var e=new Date,t=e.getDay()+"-"+e.getMonth()+"-"+e.getFullYear(),n=+e.getHours()+":"+e.getMinutes(),l={EnquiryID:ce,CallDate:t,Time:n,Name:be,Contact:ge,Email:Fe,ServiceName:De,CallStatus:He,FollowupDate:Ae,TimeFollowp:Pe,Counseller:Je,Discussion:Ye};fetch("".concat(p,"/prospect/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(tt),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){e.json().then((function(){alert("successfully submitted"),o(!1)}))}))}()},children:"Save Prospect"})]})]}),(0,d.jsxs)(r.Tk,{size:"lg",style:{border:"2px solid #0B5345"},visible:C,color:"",onClose:function(){return N(!1)},children:[(0,d.jsx)(r.p0,{children:(0,d.jsx)(r.fl,{children:"Prospect Form"})}),(0,d.jsx)(r.sD,{children:(0,d.jsx)(r.lx,{children:(0,d.jsxs)(r.rb,{children:[(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Name",value:be,onChange:function(e){return fe(e.target.value)},placeholder:"Enter Name"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"email",id:"exampleFormControlInput1",label:"Email Address",value:Fe,onChange:function(e){return Ie(e.target.value)},placeholder:"name@example.com","aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"number",value:ge,onChange:function(e){return ve(e.target.value)},id:"exampleFormControlInput1",label:"Contact No",placeholder:"Enter Number"})}),(0,d.jsx)(r.b7,{lg:6,md:6,sm:12,children:(0,d.jsxs)(r.LX,{className:"mb-1","aria-label":"Select Service Name",value:De,onChange:function(e){return Ee(e.target.value)},label:"Service Name",children:[(0,d.jsx)("option",{children:"Select Service"}),ot.map((function(e,t){return e.username===nt&&!0===e.status&&(0,d.jsxs)("option",{value:e.id,children:[e.selected_service," ",e.sub_Service_Name]},t)}))]})}),(0,d.jsx)(r.b7,{lg:6,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",value:Je,onChange:function(e){return Ve(e.target.value)},id:"exampleFormControlInput1",label:"Counseller",placeholder:"Enter Counseller Name"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.LX,{className:"mb-1","aria-label":"Select Call Status",value:He,onChange:function(e){return ze(e.target.value)},label:"Call Status",options:["Select",{label:"Cold",value:"Cold"},{label:"Warm",value:"Warm"},{label:"Hot",value:"Hot"}]})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",label:"FollowUp Date",type:"date",value:Ae,onChange:function(e){return We(e.target.value)},id:"exampleFormControlInput1"})}),(0,d.jsx)(r.b7,{lg:4,md:6,sm:12,children:(0,d.jsx)(r.jO,{className:"mb-1",label:"FollowUp Time",type:"time",id:"exampleFormControlInput1",value:Pe,onChange:function(e){return qe(e.target.value)}})}),(0,d.jsx)(r.b7,{children:(0,d.jsx)(r.PB,{id:"exampleFormControlTextarea1",label:"Discussion",value:Ye,onChange:function(e){return Ue(e.target.value)},rows:"2",text:"Must be 8-20 words long."})})]})})}),(0,d.jsxs)(r.Ym,{children:[(0,d.jsx)(r.u5,{color:"secondary",onClick:function(){return N(!1)},children:"Close"}),(0,d.jsx)(r.u5,{type:"submit",color:"primary",onClick:function(){return function(){var e=new Date,t=e.getDay()+"-"+e.getMonth()+"-"+e.getFullYear(),n=+e.getHours()+":"+e.getMinutes(),l={EnquiryID:ce,CallDate:t,Time:n,Name:be,Contact:ge,Email:Fe,ServiceName:De,CallStatus:He,FollowupDate:Ae,TimeFollowp:Pe,Counseller:Je,Discussion:Ye};fetch("".concat(p,"/prospect/update/").concat(h),{method:"POST",headers:{Authorization:"Bearer ".concat(tt),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){e.json().then((function(){alert("successfully submitted"),o(!1)}))}))}()},children:"Update Prospect"})]})]}),(0,d.jsxs)(r.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,d.jsx)(r.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,d.jsxs)(r.T6,{children:[(0,d.jsx)(r.is,{children:"Sr.No"}),(0,d.jsx)(r.is,{children:"Enquiry ID"}),(0,d.jsx)(r.is,{children:"Date"}),(0,d.jsx)(r.is,{children:"Time"}),(0,d.jsx)(r.is,{children:"Name"}),(0,d.jsx)(r.is,{children:"Email"}),(0,d.jsx)(r.is,{children:"Mobile"}),(0,d.jsx)(r.is,{children:"Service"}),(0,d.jsx)(r.is,{children:"Call Status"}),(0,d.jsx)(r.is,{children:"NextFollowup Date"}),(0,d.jsx)(r.is,{children:"Time"}),(0,d.jsx)(r.is,{children:"Discussion"}),(0,d.jsx)(r.is,{children:"Counseller"}),(0,d.jsx)(r.is,{children:"Action"}),(0,d.jsx)(r.is,{children:"Edit"})]})}),(0,d.jsxs)(r.NR,{children:[(0,d.jsxs)(r.T6,{children:[(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",style:{minWidth:"60px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",style:{minWidth:"120px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"120px"},disabled:!0,value:y,onChange:function(e){return S(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"90px"},disabled:!0,value:O,onChange:function(e){return w(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"120px"},value:k,onChange:function(e){return T(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"120px"},value:Z,disabled:!0,onChange:function(e){return _(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",value:B,onChange:function(e){return L(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"80px"},value:M,onChange:function(e){return R(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"100px"},value:X,onChange:function(e){return G(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"100px"},value:Q,onChange:function(e){return K(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",style:{minWidth:"100px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",style:{minWidth:"100px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",style:{minWidth:"100px"},value:te,onChange:function(e){return ne(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",type:"text",value:re,style:{minWidth:"100px"},onChange:function(e){return oe(e.target.value)},"aria-describedby":"exampleFormControlInputHelpInline"})}),(0,d.jsx)(r.NN,{children:(0,d.jsx)(r.jO,{className:"mb-1",style:{minWidth:"100px"},type:"text",disabled:!0,"aria-describedby":"exampleFormControlInputHelpInline"})})]}),ut.filter((function(e){return e.username===nt&&"CallReport"===e.status})).map((function(e,t){return(0,d.jsxs)(r.T6,{children:[(0,d.jsx)(r.NN,{children:t+1}),(0,d.jsxs)(r.NN,{children:[lt,"ENQ",t+10]}),(0,d.jsx)(r.NN,{className:"text-center",children:m()(e.CallDate).format("LL")}),(0,d.jsx)(r.NN,{children:m()(e.Time,"HH:mm").format("hh:mm A")}),(0,d.jsx)(r.NN,{children:e.Name}),(0,d.jsx)(r.NN,{children:e.Email}),(0,d.jsx)(r.NN,{children:e.Contact}),(0,d.jsx)(r.NN,{children:e.ServiceName}),(0,d.jsx)(r.NN,{children:e.CallStatus}),(0,d.jsx)(r.NN,{children:e.FollowupDate&&m()(e.FollowupDate).format("LL")}),(0,d.jsx)(r.NN,{children:e.TimeFollowp&&m()(e.TimeFollowp,"HH:mm").format("hh:mm A")}),(0,d.jsx)(r.NN,{children:e.Discussion}),(0,d.jsx)(r.NN,{children:e.Counseller}),(0,d.jsxs)(r.NN,{className:"text-center",children:[(0,d.jsx)("a",{href:"tel:+91".concat(e.Contact),target:"_black",children:(0,d.jsx)(i.fFs,{style:{cursor:"pointer",markerStart:"10px"},onClick:function(){xe(!0),pt(e.EnquiryID)},size:"20px"})}),(0,d.jsx)("a",{href:"https://wa.me/".concat(e.Contact),target:"_black",children:(0,d.jsx)(c.RGt,{style:{marginLeft:"4px",cursor:"pointer",markerStart:"10px"},onClick:function(){xe(!0),pt(e.EnquiryID)},size:"20px"})}),(0,d.jsxs)("a",{href:"mailto: ".concat(e.Email),target:"_black",children:[" ",(0,d.jsx)(i.h6V,{style:{cursor:"pointer",markerStart:"10px",marginLeft:"4px"},onClick:function(){xe(!0),pt(e.EnquiryID)},size:"20px"})]})," ",(0,d.jsx)(c.Dwu,{id:e._id,style:{cursor:"pointer",markerStart:"10px",marginLeft:"4px"},onClick:function(){return xt(e.EnquiryID)}})]}),(0,d.jsxs)(r.NN,{className:"text-center",children:[(0,d.jsx)(i.zmo,{id:e._id,style:{fontSize:"35px",cursor:"pointer",markerStart:"10px"},onClick:function(){return ht(e._id)},size:"20px"})," ",(0,d.jsx)(i.ZkW,{style:{cursor:"pointer",markerStart:"10px",marginLeft:"5px"},onClick:function(){return t=e._id,void fetch("".concat(p,"/prospect/delete/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(tt),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),dt()}))}));var t},size:"20px"})]})]},t)}))]})]})]})]})})})}},89983:function(e,t,n){n.d(t,{w_:function(){return c}});var l=n(72791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=l.createContext&&l.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},s=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n};function i(e){return e&&e.map((function(e,t){return l.createElement(e.tag,o({key:t},e.attr),i(e.child))}))}function c(e){return function(t){return l.createElement(u,o({attr:o({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var n,a=e.attr,r=e.size,i=e.title,c=s(e,["attr","size","title"]),u=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return void 0!==r?l.createElement(r.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=8659.46af37c0.chunk.js.map