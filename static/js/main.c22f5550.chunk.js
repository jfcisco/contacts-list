(this["webpackJsonpcontacts-list"]=this["webpackJsonpcontacts-list"]||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(8),i=n.n(s),d=(n(25),n(3)),o=n(2),l=n(0);!function(e){e[e.CREATE=0]="CREATE",e[e.LIST=1]="LIST",e[e.UPDATE=2]="UPDATE"}(c||(c={}));var m=function(e){var t=e.progress,n=Math.max(0,Math.min(100,t)).toString()+"%";return i.a.createPortal(Object(l.jsx)("div",{className:"progress w-100 mb-4 shadow-sm",style:{height:"3px",position:"fixed",top:0},children:Object(l.jsx)("div",{className:"progress-bar bg-info",style:{width:n,opacity:t/100}})}),document.querySelector("body"))},u=r.a.createContext(null);function j(e){var t=e.initialPage,n=e.children,c=r.a.useState(t),s=Object(o.a)(c,2),i=s[0],d=s[1],j=Object(a.useState)({progress:0,animate:"none"}),b=Object(o.a)(j,2),h=b[0],O=b[1],x=Object(a.useState)(),N=Object(o.a)(x,2),f=N[0],v=N[1];return Object(l.jsxs)(u.Provider,{value:{currentPage:i,setCurrentPage:function(e,t){O({progress:100,animate:""}),t&&v(t),setTimeout((function(){d(e),O({progress:0,animate:"none !important"})}),600)},payload:f},children:[Object(l.jsx)(m,{progress:h.progress}),n]})}function b(e){var t=e.showFor,n=e.children,c=r.a.useContext(u);return Object(l.jsx)(l.Fragment,{children:t===(null===c||void 0===c?void 0:c.currentPage)&&n})}var h=n(19),O=n.n(h),x=function(e){var t=e.contact,n=e.onHide,c=r.a.useRef(null),s=Object(a.useRef)();r.a.useEffect((function(){var e;s.current=new O.a(c.current),null===(e=s.current)||void 0===e||e.show()}),[]),r.a.useEffect((function(){var e=c.current;return null===e||void 0===e||e.addEventListener("hidden.bs.modal",n),function(){null===e||void 0===e||e.removeEventListener("hidden.bs.modal",n)}}),[n]);var i,d=t.firstName,o=t.lastName,m=t.middleName,u=t.birthday,j=t.gender,b=t.address,h=t.emailAddress,x=t.contactNumbers,N=t.companyName;return Object(l.jsx)("div",{ref:c,className:"modal fade",id:"view-contact",children:Object(l.jsx)("div",{className:"modal-dialog modal-fullscreen-md-down",tabIndex:-1,children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsxs)("h2",{className:"modal-title",children:["Contact:\xa0",Object(l.jsx)("small",{className:"text-muted",children:d})]}),Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsxs)("dl",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm-4",children:[Object(l.jsx)("dt",{children:"First Name"}),Object(l.jsx)("dd",{children:d})]}),Object(l.jsxs)("div",{className:"col-sm-4",children:[Object(l.jsx)("dt",{children:"Middle Name"}),Object(l.jsx)("dd",{children:m})]}),Object(l.jsxs)("div",{className:"col-sm-4",children:[Object(l.jsx)("dt",{children:"Last Name"}),Object(l.jsx)("dd",{children:o})]}),Object(l.jsxs)("div",{className:"row row-cols-1 row-cols-md-2",children:[Object(l.jsx)("dt",{className:"col order-0",children:"Birthday"}),Object(l.jsx)("dd",{className:"col order-md-2",children:(i=u,i.toLocaleDateString("en-US",{dateStyle:"medium"}))}),Object(l.jsx)("dt",{className:"col order-md-1",children:"Gender"}),Object(l.jsx)("dd",{className:"col order-md-3",children:j||"Not specified"})]}),Object(l.jsx)("dt",{children:"Address"}),Object(l.jsx)("dd",{children:Object(l.jsxs)("dl",{className:"row row-cols-md-1",children:[Object(l.jsx)("dt",{className:"text-muted small",children:"Address Line"}),Object(l.jsx)("dd",{className:"",children:b.addressLine}),Object(l.jsx)("dt",{className:"text-muted small",children:"City/Province"}),Object(l.jsx)("dd",{className:"",children:b.cityProvince}),Object(l.jsx)("dt",{className:"text-muted small",children:"Country"}),Object(l.jsx)("dd",{className:"",children:b.country})]})}),Object(l.jsx)("dt",{children:"Email Address"}),Object(l.jsx)("dd",{children:h}),Object(l.jsx)("dt",{children:"Contact Numbers:"}),Object(l.jsx)("dd",{children:Object(l.jsx)("ul",{children:x.map((function(e,t){return Object(l.jsx)("li",{className:0===t?"text-primary":"",children:e.toString()+(0===t?" (Primary)":"")},t)}))})}),Object(l.jsx)("dt",{children:"Company Name"}),Object(l.jsx)("dd",{children:N||"Not specified"})]})})]})})})};function N(e){return e[0]}function f(e){var t=Date.now()-e.getTime();return Math.floor(t/31556952e3)}function v(e){var t=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getFullYear().toString().padStart(4,"0");return"".concat(c,"-").concat(n,"-").concat(t)}function p(e){var t=e.split("-");if(3!==t.length)throw new Error("".concat(e," is not a valid ISO date string."));var n=y(t[0]),c=y(t[1]),a=y(t[2]);if(isNaN(n)||isNaN(c)||isNaN(a))throw new Error("".concat(e," is not a valid ISO date string."));var r=new Date(n,c-1,a);return r.setFullYear(n),r}function y(e){return/^[-+]?(\d+|Infinity)$/.test(e)?Number(e):NaN}function g(e){var t=e.contacts,n=e.setContactShown,c=e.handleDelete;return Object(l.jsxs)("div",{className:"table-responsive",children:[Object(l.jsxs)("table",{className:"table table-hover",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Age"}),Object(l.jsx)("th",{scope:"col",children:"City/Province"}),Object(l.jsx)("th",{scope:"col",children:"Email"}),Object(l.jsx)("th",{scope:"col",children:"Contact Number (Primary)"}),Object(l.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(l.jsx)("tbody",{children:t?t.map((function(e){return Object(l.jsx)(C,{contact:e,onView:function(){return n(e)},onEdit:function(){},onDelete:function(){return c(e)}},e.id)})):"Loading..."})]}),0===(null===t||void 0===t?void 0:t.length)&&Object(l.jsxs)("p",{className:"text-center text-secondary",children:["You have no contacts yet. Add a contact by clicking on the ",Object(l.jsx)("span",{className:"text-primary",children:Object(l.jsx)("strong",{children:"Create Contact"})})," button above."]})]})}function C(e){var t=e.contact,n=e.onView,r=e.onDelete,s=t.firstName,i=t.lastName,d=t.middleName,o=t.birthday,m=t.address,j=t.emailAddress,b=t.contactNumbers,h=Object(a.useContext)(u).setCurrentPage,O="".concat(i,", ").concat(s," ").concat(d[0],"."),x=f(o),v=N(b);return Object(l.jsxs)("tr",{role:"button",onClick:n,children:[Object(l.jsx)("td",{children:O}),Object(l.jsx)("td",{children:x}),Object(l.jsx)("td",{children:m.cityProvince}),Object(l.jsx)("td",{children:j}),Object(l.jsx)("td",{children:v}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{className:"btn btn-secondary me-2",onClick:function(e){e.stopPropagation(),h(c.UPDATE,t)},children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.stopPropagation(),r()},children:"Delete"})]})]})}var w=n(20),P=["contacts"];function S(e){var t=e.contacts,n=Object(w.a)(e,P);return Object(l.jsxs)(l.Fragment,{children:[t.map((function(e){return Object(l.jsx)(A,Object(d.a)({contact:e},n),e.id)})),0===t.length&&Object(l.jsxs)("p",{className:"text-center text-secondary",children:["You have no contacts yet. Add a contact by clicking on the ",Object(l.jsx)("span",{className:"text-primary",children:Object(l.jsx)("strong",{children:"Create Contact"})})," button above."]})]})}function A(e){var t=e.contact,n=e.setContactShown,r=e.handleDelete,s=t.firstName,i=t.lastName,d=t.middleName,o=t.birthday,m=t.address,j=t.emailAddress,b=t.contactNumbers,h=Object(a.useContext)(u).setCurrentPage,O="".concat(i,", ").concat(s," ").concat(d[0],"."),x=f(o),v=N(b);return Object(l.jsx)("div",{className:"card mb-2 bg-light",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("h2",{className:"card-title fs-3",children:[Object(l.jsx)("span",{className:"text-secondary",children:"Name: "}),O]}),Object(l.jsxs)("dl",{className:"row row-cols-2",children:[Object(l.jsx)("dt",{children:"Age"}),Object(l.jsxs)("dd",{children:[x," years old"]}),Object(l.jsx)("dt",{children:"City/Province"}),Object(l.jsx)("dd",{children:m.cityProvince}),Object(l.jsx)("dt",{children:"Email"}),Object(l.jsx)("dd",{children:j}),Object(l.jsx)("dt",{children:"Primary Contact Number"}),Object(l.jsx)("dd",{children:v})]}),Object(l.jsxs)("div",{className:"btn-group btn-group-lg w-100",children:[Object(l.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){return n(t)},children:"View"}),Object(l.jsx)("button",{className:"btn btn-secondary",onClick:function(){return h(c.UPDATE,t)},children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return r(t)},children:"Delete"})]})]})})}var E=function(){var e=r.a.createContext(void 0);return[function(){var t=Object(a.useContext)(e);if(void 0===t)throw new Error("useFormContext must be used inside a FormContextProvider with a value");return t},e.Provider]}(),L=Object(o.a)(E,2),k=L[0],F=L[1];function q(e){var t=e.name,n=e.label,c=e.required,a=e.type,r=k(),s=r.values,i=r.errors,d=r.handleChange,o=r.handleBlur,m=r.touched[t]&&i[t];return Object(l.jsxs)("div",{className:"mb-2 row",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("label",{htmlFor:t,className:"form-label text-wrap ".concat(!0===c?"required-input":""),children:n})}),Object(l.jsxs)("div",{className:"col-8",children:[Object(l.jsx)("input",{id:t,name:t,type:a,className:"form-control ".concat(m?"is-invalid":""),value:s[t],onChange:d,onBlur:o}),m&&Object(l.jsx)("span",{className:"text-danger col-12",children:i[t]})]})]})}function D(e){var t=e.name;return Object(l.jsx)(q,{name:t,type:"date",required:!0,label:"Birthday"})}var T=n(4),I={MALE:"Male",FEMALE:"Female",NONBINARY:"Non-Binary"};function M(e){var t=e.name,n=[""].concat(Object(T.a)(Object.values(I))),c=k(),a=c.values,r=c.handleChange,s=c.handleBlur,i=c.touched,d=c.errors,o=i[t]&&d[t];return Object(l.jsxs)("div",{className:"mb-2 row",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("label",{htmlFor:t,className:"form-label",children:"Gender"})}),Object(l.jsxs)("div",{className:"col-8 mb-2",children:[Object(l.jsx)("select",{name:t,className:"form-select ".concat(o?"is-invalid":""),value:a.gender,onChange:r,onBlur:s,children:n.map((function(e){return Object(l.jsx)("option",{children:e},e)}))}),o&&Object(l.jsx)("div",{className:"text-danger mb-2",children:d[t]})]})]})}var B=n(5);function V(e){var t=e.name,n=e.initialValue,c=k(),a=c.setFormValues,s=c.touched,i=c.errors,m=c.handleBlur,u=r.a.useState([]),j=Object(o.a)(u,2),b=j[0],h=j[1],O=s[t]&&i[t];r.a.useEffect((function(){n&&h(n)}),[n,h]),r.a.useEffect((function(){a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(B.a)({},t,b))}))}),[b,t,a]);var x=function(e){h((function(t){return function(e,t){var n=e.slice(),c=n.indexOf(t);if(-1===c)throw new Error("".concat(t," not in contacts"));var a=n[0];return n[0]=n[c],n[c]=a,n}(t,t[e])}))};return Object(l.jsxs)("fieldset",{className:"my-4 row",children:[Object(l.jsx)("legend",{className:"col-md-10 required-input",children:"Contact Numbers"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary col-md-2",onClick:function(){h((function(e){return[].concat(Object(T.a)(e),[""])}))},children:"Add Contact Number"}),Object(l.jsx)("br",{}),b.length>0&&b.map((function(e,n){return Object(l.jsxs)("div",{className:"input-group mt-2 mb-1",children:[0===n&&Object(l.jsx)("span",{className:"input-group-text fw-bold",children:"Primary"}),Object(l.jsx)("input",{className:"form-control ".concat(O?"is-invalid":""),type:"text",pattern:"^[0-9]*$",inputMode:"numeric",name:"".concat(t,"[").concat(n,"]"),value:e,onChange:function(e){return function(e,t){var n=e.target.value;new RegExp(e.target.pattern).test(n)&&h((function(n){return n.map((function(n,c){return c===t?e.target.value:n}))}))}(e,n)},onBlur:m}),0!==n&&Object(l.jsx)("button",{type:"button",className:"btn btn-outline-primary lh-1",onClick:function(){return x(n)},children:"Set Primary"}),Object(l.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return e=n,void h((function(t){return t.filter((function(t,n){return n!==e}))}));var e},children:"Remove"})]},n)})),O&&Object(l.jsx)("div",{className:"text-danger",children:i[t]})]})}n(49);function R(e){var t=e.initialValues,n=e.children,c=e.onSubmit,s=e.validate,i=Object(a.useState)(t),m=Object(o.a)(i,2),u=m[0],j=m[1],b=Object(a.useState)({}),h=Object(o.a)(b,2),O=h[0],x=h[1],N=Object(a.useState)({}),f=Object(o.a)(N,2),v=f[0],p=f[1],y=Object(a.useRef)(null);function g(e){e.preventDefault(),p(Object.keys(u).reduce((function(e,t){return Object(d.a)(Object(d.a)({},e),{},Object(B.a)({},t,!0))}),{})),s&&0!==Object.keys(s(u)).length?x(s(u)):c(u)}return r.a.useEffect((function(){if(s){var e=s(u);x(e)}}),[u,s]),Object(l.jsx)(F,{value:{values:u,handleChange:function(e){var t=e.target,n=t.name,c=t.value;j((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(B.a)({},n,c))}))},errors:O,setFormValues:j,handleBlur:function(e){p((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(B.a)({},e.target.name,!0))}))},touched:v},children:Object(l.jsx)("form",{ref:y,className:"container-fluid",onSubmit:function(e){return g(e)},noValidate:!0,children:n})})}function U(e){var t=e.contacts,n=e.deleteContact,r=Object(a.useContext)(u).setCurrentPage,s=Object(a.useState)(null),i=Object(o.a)(s,2),m=i[0],j=i[1],b=Object(a.useState)({name:"",email:"",cityProvince:""}),h=Object(o.a)(b,2),O=h[0],N=h[1],f={contacts:t.filter((function(e){return function(e,t){var n=[e.firstName,e.middleName,e.lastName];return!(t.name&&!n.some((function(e){return e.toLowerCase().includes(t.name.toLowerCase())})))&&!(t.email&&!e.emailAddress.toLowerCase().includes(t.email.toLowerCase()))&&!(t.cityProvince&&!e.address.cityProvince.toLowerCase().includes(t.cityProvince.toLowerCase()))}(e,O)})),setContactShown:j,handleDelete:function(e){window.confirm("Do you want to delete this contact? Click OK to confirm.")&&n(e)}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"row mb-4 px-4",children:[Object(l.jsx)("p",{className:"col-md-9 d-none d-md-inline",children:"Please click on a row to view the contact."}),Object(l.jsx)("button",{className:"btn btn-primary col-md-3",onClick:function(){return r(c.CREATE)},children:"Create Contact"})]}),m&&Object(l.jsx)(x,{contact:m,onHide:function(){return j(null)}}),Object(l.jsx)(G,{onFilter:function(e){return N(e)}}),Object(l.jsx)("div",{className:"d-none d-md-block",children:Object(l.jsx)(g,Object(d.a)({},f))}),Object(l.jsx)("div",{className:"d-md-none",children:Object(l.jsx)(S,Object(d.a)({},f))})]})}function G(e){var t=e.onFilter;return Object(l.jsxs)(R,{initialValues:{name:"",email:"",cityProvince:""},onSubmit:function(e){t({name:e.name.trim(),email:e.email.trim(),cityProvince:e.cityProvince.trim()})},children:[Object(l.jsx)("p",{className:"form-text",children:"Search Contact"}),Object(l.jsxs)("div",{className:"row mb-4",children:[Object(l.jsx)("div",{className:"col-sm-6 col-lg-3 justify-content-end",children:Object(l.jsx)(q,{name:"name",label:"Name"})}),Object(l.jsx)("div",{className:"col-sm-6 col-lg-3",children:Object(l.jsx)(q,{name:"email",label:"Email"})}),Object(l.jsx)("div",{className:"col-sm-6 col-lg-4",children:Object(l.jsx)(q,{name:"cityProvince",label:"City/Province"})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-outline-dark w-100",children:"Search"})})]})]})}var Y=function(e){return null==e||""===e.trim()};function $(e){var t,n={};return Y(e.firstName)&&(n.firstName="Please enter the contact's first name."),Y(e.middleName)&&(n.middleName="Please enter the contact's middle name."),Y(e.lastName)&&(n.lastName="Please enter the contact's last name."),Y(e.birthday)&&(n.birthday="Please enter a valid date for birthday."),Y(e["address.addressLine"])&&(n["address.addressLine"]="Please enter an address line."),Y(e["address.cityProvince"])&&(n["address.cityProvince"]="Please enter a city/province."),Y(e["address.country"])&&(n["address.country"]="Please enter a country."),Y(e.email)?n.email="Please enter an email address.":(t=e.email,/^([a-z]|[A-Z]|\d|\.(?!\.)|[!#$%&'*+-/=?^_`{|}~]){1,64}@([a-z]|[A-Z]|\d|-|\.){1,63}$/.test(t)||(n.email="Please enter a valid email address in the format (name@example.com).")),e.contactNumbers.length<3?n.contactNumbers="Please enter at least three contact numbers":e.contactNumbers.some((function(e){return Y(e)}))&&(n.contactNumbers="Please fill out or remove any empty rows."),n}function J(e){var t=e.createContact,n=Object(a.useContext)(u).setCurrentPage,r=Object(a.useState)(!1),s=Object(o.a)(r,2),i=s[0],d=s[1];function m(){n(c.LIST)}return Object(l.jsx)("div",{className:"mt-2",children:Object(l.jsxs)(R,{initialValues:{firstName:"",middleName:"",lastName:"",birthday:"","address.addressLine":"","address.cityProvince":"","address.country":"",companyName:"",contactNumbers:[],email:""},validate:$,onSubmit:function(e){d(!0),t({firstName:e.firstName,middleName:e.middleName,lastName:e.lastName,birthday:p(e.birthday),gender:e.gender?e.gender:void 0,address:{addressLine:e["address.addressLine"],cityProvince:e["address.cityProvince"],country:e["address.country"]},companyName:e.companyName,emailAddress:e.email,contactNumbers:e.contactNumbers}).then((function(e){console.log("Contact id=".concat(e.id," added!")),m()}))},children:[Object(l.jsx)("h2",{children:"Create Contact"}),Object(l.jsxs)("p",{className:"form-text",children:[Object(l.jsx)("span",{className:"text-danger",children:"*"})," indicates required fields."]}),Object(l.jsx)(q,{name:"firstName",label:"First Name",required:!0}),Object(l.jsx)(q,{name:"middleName",label:"Middle Name",required:!0}),Object(l.jsx)(q,{name:"lastName",label:"Last Name",required:!0}),Object(l.jsx)(D,{name:"birthday"}),Object(l.jsx)(q,{type:"email",label:"Email Address",name:"email",required:!0}),Object(l.jsx)(q,{name:"companyName",label:"Company Name"}),Object(l.jsx)(M,{name:"gender"}),Object(l.jsxs)("fieldset",{name:"address",className:"my-4",children:[Object(l.jsx)("legend",{children:"Address"}),Object(l.jsx)(q,{label:"Address Line",name:"address.addressLine",required:!0}),Object(l.jsx)(q,{label:"City/Province",name:"address.cityProvince",required:!0}),Object(l.jsx)(q,{label:"Country",name:"address.country",required:!0})]}),Object(l.jsx)(V,{name:"contactNumbers"}),Object(l.jsxs)("div",{className:"d-flex my-4",children:[Object(l.jsx)("input",{disabled:i,type:"submit",className:"btn btn-primary flex-grow-1 me-lg-2"}),Object(l.jsx)("button",{type:"button",className:"btn btn-secondary flex-grow-1 ms-lg-2",onClick:function(){return m()},children:"Go Back"})]})]})})}function z(e){var t=e.updateContact,n=Object(a.useContext)(u),r=n.payload,s=n.setCurrentPage,i=Object(a.useState)(!1),d=Object(o.a)(i,2),m=d[0],j=d[1];if(!r)return Object(l.jsx)(H,{});var b={id:r.id,firstName:r.firstName,middleName:r.middleName,lastName:r.lastName,birthday:v(r.birthday),gender:r.gender,"address.addressLine":r.address.addressLine,"address.cityProvince":r.address.cityProvince,"address.country":r.address.country,companyName:r.companyName,contactNumbers:r.contactNumbers,email:r.emailAddress};return Object(l.jsx)("div",{children:Object(l.jsxs)(R,{initialValues:b,validate:$,onSubmit:function(e){j(!0);var n={id:e.id,firstName:e.firstName,middleName:e.middleName,lastName:e.lastName,birthday:p(e.birthday),address:{addressLine:e["address.addressLine"],cityProvince:e["address.cityProvince"],country:e["address.country"]},companyName:e.companyName,emailAddress:e.email,contactNumbers:e.contactNumbers};t(n).then((function(e){s(c.LIST),console.log("Updated contact with id: ",e.id)})).catch((function(e){console.error("Error occured! ",e),j(!1)}))},children:[Object(l.jsx)("h2",{children:"Update a Contact"}),Object(l.jsxs)("p",{className:"form-text",children:[Object(l.jsx)("span",{className:"text-danger",children:"*"})," indicates required fields."]}),Object(l.jsx)(q,{name:"firstName",label:"First Name",required:!0}),Object(l.jsx)(q,{name:"middleName",label:"Middle Name",required:!0}),Object(l.jsx)(q,{name:"lastName",label:"Last Name",required:!0}),Object(l.jsx)(D,{name:"birthday"}),Object(l.jsx)(q,{type:"email",label:"Email Address",name:"email",required:!0}),Object(l.jsx)(q,{name:"companyName",label:"Company Name"}),Object(l.jsx)(M,{name:"gender"}),Object(l.jsxs)("fieldset",{name:"address",className:"my-4",children:[Object(l.jsx)("legend",{children:"Address"}),Object(l.jsx)(q,{label:"Address Line",name:"address.addressLine",required:!0}),Object(l.jsx)(q,{label:"City/Province",name:"address.cityProvince",required:!0}),Object(l.jsx)(q,{label:"Country",name:"address.country",required:!0})]}),Object(l.jsx)(V,{name:"contactNumbers",initialValue:b.contactNumbers}),Object(l.jsxs)("div",{className:"d-flex my-4",children:[Object(l.jsx)("input",{disabled:m,type:"submit",className:"btn btn-primary flex-grow-1 me-lg-2"}),Object(l.jsx)("button",{type:"button",className:"btn btn-secondary flex-grow-1 ms-lg-2",onClick:function(){return s(c.LIST)},children:"Go Back"})]})]})})}function H(){var e=Object(a.useContext)(u).setCurrentPage;return Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("p",{className:"text-danger",children:"Error while updating contact! No contact was selected for updating."}),Object(l.jsx)("button",{onClick:function(){return e(c.LIST)},children:"Go back"})]})}var Z=n(6),K=n.n(Z),Q=n(10),W=[{id:1,firstName:"John",lastName:"Doe",middleName:"Q.",birthday:new Date(1970,1,1),gender:I.MALE,address:{addressLine:"5 Oak Way",cityProvince:"Sample City",country:"Philippines"},emailAddress:"john.doe@example.com",contactNumbers:["848 6670"],companyName:"Alphabet, Inc."},{id:2,firstName:"Mary",lastName:"Sue",middleName:"A.",birthday:new Date(1986,10,7),address:{addressLine:"10 Gaviria St.",cityProvince:"Sample City",country:"Philippines"},emailAddress:"mary.sue1@example.com",contactNumbers:["987 6543","445 6650"]}],_=function(){return new Promise((function(e){return setTimeout(e,700)}))};function X(){var e=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];function r(e){return void 0!==n.find((function(t){return t.id===e.id}))}function s(){return(s=Object(Q.a)(K.a.mark((function e(t){var a,r,s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(T.a)(n),r=n.reduce((function(e,t){return e>=t.id?e:t.id}),0)+1,s=Object(d.a)(Object(d.a)({},t),{},{id:r}),c((function(e){return[s].concat(Object(T.a)(e))})),e.prev=4,e.next=7,_();case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),console.error("An error occured! ".concat(e.t0)),c(a);case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function i(){return(i=Object(Q.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(T.a)(n),c((function(e){return e.map((function(e){return e.id===t.id?t:e}))})),e.prev=2,e.next=5,_();case 5:if(r(t)){e.next=7;break}throw new Error("".concat(t," is not an existing contact!"));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("An error occured! ".concat(e.t0)),c(a);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function l(){return(l=Object(Q.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(T.a)(n),c((function(e){return e.filter((function(e){return e.id!==t.id}))})),e.prev=2,e.next=5,_();case 5:if(r(t)){e.next=7;break}throw new Error("".concat(t," is not an existing contact!"));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("An error occured! ".concat(e.t0)),c(a);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){c(W)}),[]),{contacts:n,addContact:function(e){return s.apply(this,arguments)},updateContact:function(e){return i.apply(this,arguments)},deleteContact:function(e){return l.apply(this,arguments)}}}(),t=e.contacts,n=e.addContact,r=e.deleteContact,s=e.updateContact;return Object(l.jsxs)("div",{className:"container-lg mt-2 mt-md-5",children:[Object(l.jsx)("h1",{className:"text-muted mb-4",children:"My Contacts"}),Object(l.jsxs)(j,{initialPage:c.LIST,children:[Object(l.jsx)(b,{showFor:c.CREATE,children:Object(l.jsx)(J,{createContact:n})}),Object(l.jsx)(b,{showFor:c.UPDATE,children:Object(l.jsx)(z,{updateContact:s})}),Object(l.jsx)(b,{showFor:c.LIST,children:Object(l.jsx)(U,{contacts:t,deleteContact:r})})]})]})}i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(X,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c22f5550.chunk.js.map