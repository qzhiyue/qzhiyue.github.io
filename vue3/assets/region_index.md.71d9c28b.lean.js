import{v as r,B as F,f as m,Q as B,V as v,T as A,E as b}from"./chunks/v-region.f8a9309c.js";import{r as y,o as D,c as q,a,u as l,b as e,t as i,w as C,d as n,q as c}from"./app.fe1ba218.js";const k=n("",17),x=n("",1),T=n("",1),R=n("",1),S=e("p",null,[c("The response data for "),e("a",{href:"#change"},"change"),c(" event")],-1),w={class:"bg-light rounded-3 p-3 my-3"},V=n("",2),P=n("",2),I=n("",3),G={class:"border rounded-3 shadow-sm p-3 my-3"},N=n("",3),j={class:"border rounded-3 shadow-sm p-3 mt-3"},U=n("",4),L=n("",3),M=n("",4),Z={class:"bg-success px-3 py-2 rounded-3 text-white"},O=["textContent"],H=["textContent"],K=n("",6),z=n("",3),J=n("",4),Q={class:"bg-success px-3 py-2 rounded-3 text-white"},W=["textContent"],X=["textContent"],Y=n("",4),$=e("p",null,[c("The response data for "),e("a",{href:"#change"},"change"),c(" event")],-1),ss={class:"bg-light rounded-3 p-3 my-3"},ns=n("",4),as=n("",49),ts=JSON.parse('{"title":"Region","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[{"level":3,"title":"Select menus mode","slug":"select-menus-mode","link":"#select-menus-mode","children":[]},{"level":3,"title":"Plain text mode","slug":"plain-text-mode","link":"#plain-text-mode","children":[]},{"level":3,"title":"Group mode","slug":"group-mode","link":"#group-mode","children":[]},{"level":3,"title":"Columns mode","slug":"columns-mode","link":"#columns-mode","children":[]},{"level":3,"title":"City Picker mode","slug":"city-picker-mode","link":"#city-picker-mode","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[{"level":3,"title":"v-model/modelValue","slug":"v-model-modelvalue","link":"#v-model-modelvalue","children":[]},{"level":3,"title":"city","slug":"city","link":"#city","children":[]},{"level":3,"title":"area","slug":"area","link":"#area","children":[]},{"level":3,"title":"town","slug":"town","link":"#town","children":[]},{"level":3,"title":"blank","slug":"blank","link":"#blank","children":[]},{"level":3,"title":"disabled","slug":"disabled","link":"#disabled","children":[]},{"level":3,"title":"language","slug":"language","link":"#language","children":[]},{"level":3,"title":"separator","slug":"separator-1","link":"#separator-1","children":[]},{"level":3,"title":"overflow","slug":"overflow","link":"#overflow","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[{"level":3,"title":"change","slug":"change","link":"#change","children":[]},{"level":3,"title":"complete","slug":"complete","link":"#complete","children":[]},{"level":3,"title":"visible-change","slug":"visible-change","link":"#visible-change","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"reset","slug":"reset","link":"#reset","children":[]}]}],"relativePath":"region/index.md","lastUpdated":1677920505000}'),ls={name:"region/index.md"},cs=Object.assign(ls,{setup(os){const u=y({}),t=y({province:"350000",city:"350100",area:"350104",town:"350104008"}),E=y(["110000","130200","140100"]),g=y([]);function _(p){g.value=p}function f(p){u.value=p}function h(p){return!p||!Object.values(p).some(s=>s)||!p?"No data":Object.values(p).filter(s=>s).map(s=>s.value).join(",")}return(p,s)=>(D(),q("div",null,[k,a(l(r),{city:!1,language:"en"}),x,a(l(r),{area:!1,language:"en"}),T,a(l(r),{language:"en"}),R,a(l(r),{town:!0,language:"en",onChange:f}),S,e("div",w,i(u.value),1),V,a(l(r),{class:"mb-3",language:"en",town:!0,modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o)},null,8,["modelValue"]),P,a(l(r),{town:!0,disabled:!0,language:"en",modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value=o)},null,8,["modelValue"]),I,e("div",G,[a(l(F),{language:"en",modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=o=>t.value=o)},null,8,["modelValue"])]),N,e("div",j,[a(l(F),{modelValue:t.value,"onUpdate:modelValue":s[3]||(s[3]=o=>t.value=o),separator:"-"},null,8,["modelValue"])]),U,a(l(m),{language:"en"}),L,a(l(B),{language:"en",class:"border rounded-3 shadow-sm"}),M,a(l(m),{language:"en",town:!0},{default:C(({region:o,visible:d})=>[e("div",Z,[c(" region: "),e("span",{textContent:i(h(o))},null,8,O),c(", visible: "),e("span",{textContent:i(d)},null,8,H)])]),_:1}),K,a(l(v),{language:"en"}),z,a(l(A),{language:"en",class:"border rounded-3 shadow-sm"}),J,a(l(v),{language:"en",town:!0},{default:C(({region:o,visible:d})=>[e("div",Q,[c(" region: "),e("span",{textContent:i(h(o))},null,8,W),c(", visible: "),e("span",{textContent:i(d)},null,8,X)])]),_:1}),Y,a(l(b),{language:"en",modelValue:E.value,"onUpdate:modelValue":s[4]||(s[4]=o=>E.value=o),onChange:_},null,8,["modelValue"]),$,e("div",ss,i(g.value),1),ns,a(l(b),{language:"en",modelValue:E.value,"onUpdate:modelValue":s[5]||(s[5]=o=>E.value=o),overflow:!0},null,8,["modelValue"]),as]))}});export{ts as __pageData,cs as default};