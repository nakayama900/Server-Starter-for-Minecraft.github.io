import{Q as u}from"./QImg.75a1e43f.js";import{j as v,C as m,D as _,c as i,h as s,E as S,G as f,n as w,q as h,s as g,t as l,u as c,d,v as y,H as x,_ as B}from"./index.695bb9ab.js";var q=v({name:"QAvatar",props:{...m,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const o=_(e),r=i(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),a=i(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const n=e.icon!==void 0?[s(S,{name:e.icon})]:void 0;return s("div",{class:r.value,style:o.value},[s("div",{class:"q-avatar__content row flex-center overflow-hidden",style:a.value},f(t.default,n))])}}});const b={class:"row items-center"},p={class:"download"},z=w({__name:"DownloadBtn",props:{osName:{},version:{},disable:{type:Boolean},outline:{type:Boolean}},setup(e){const t=e;function o(){switch(t.osName){case"windows":return`ServerStarter2.${t.version}.msi`;case"mac":return`ServerStarter2-${t.version}.pkg`;case"linux":return""}}function r(){switch(t.osName){case"windows":return"Windows";case"mac":return"Mac OS";case"linux":return"Linux"}}return(a,n)=>(h(),g(x,{disable:a.disable,outline:a.outline,color:"white","text-color":"primary",padding:"md",href:`https://github.com/CivilTT/ServerStarter2/releases/latest/download/${o()}`,style:{width:"10rem"}},{default:l(()=>[c("div",b,[d(q,{size:"2rem",square:"",class:"q-mr-md"},{default:l(()=>[d(u,{src:`assets/OS/${a.osName}.svg`},null,8,["src"])]),_:1}),c("div",p,y(r()),1)])]),_:1},8,["disable","outline","href"]))}});var D=B(z,[["__scopeId","data-v-4bccf816"]]);export{D};
