import{d as u,u as r,s as d,n as c,b as v,e as t,i as h,v as m,j as g,k as _,o as f,m as y}from"./index-28dac579.js";const S={class:"input-group"},M=t("label",{for:"depth"},"Max. Depth",-1),b=["aria-invalid"],k=t("label",null,"Stomach Contents",-1),x=y('<option value="Consumed waypoints">Consumed waypoints</option><option value="Entire trade outpost">Entire trade outpost</option><option value="Freighter components">Freighter components</option><option value="Horrific Eggs">Horrific Eggs</option><option value="Layers of teeth">Layers of teeth</option><option value="Lost starships">Lost starships</option><option value="Magma">Magma</option><option value="Many Sentinels">Many Sentinels</option><option value="Minerals">Minerals</option><option value="Mostly sand">Mostly sand</option><option value="Other gargantuans">Other gargantuans</option><option value="Planetary beacon">Planetary beacon</option><option value="Rubble">Rubble</option><option value="Sentinel Walkers">Sentinel Walkers</option><option value="Several Gek">Several Gek</option><option value="Unpleasant liquid">Unpleasant liquid</option>',16),E=[x],F=u({__name:"Sandworm",setup(o){const n=r(),{depth:a,stomach:e}=d(n),i=c(!1);function l(t){if(!(t.target instanceof HTMLInputElement))return;const o=t.target.value,n=parseFloat(o);a.value=n.toFixed(1),i.value=isNaN(n)&&!!o}return(o,n)=>(f(),v("div",S,[t("div",null,[M,t("input",{id:"depth",type:"text","aria-invalid":i.value||void 0,maxlength:"5",onInput:l},null,40,b)]),t("div",null,[k,h(t("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>_(e)?e.value=t:null)},E,512),[[m,g(e)]])])]))}});export{F as default};
