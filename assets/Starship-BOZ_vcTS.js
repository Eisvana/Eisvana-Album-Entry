import{d as b,u as g,s as x,g as u,h as r,b as A,e as a,i as o,v as C,j as t,k,l as i,m as E,f as v,o as w,_ as y}from"./index-DewYVNlt.js";import{_ as L}from"./EconomySelect.vue_vue_type_script_setup_true_lang-CfNIjAVo.js";import{_ as V,a as I}from"./LocationPlanetInput.vue_vue_type_script_setup_true_lang-Dh_wFpch.js";import{_ as N}from"./ClassSelect.vue_vue_type_script_setup_true_lang-lrwjlRSD.js";const $={class:"input-group"},B={class:"checkbox-wrapper"},D=b({__name:"Starship",setup(e){const l=g(),{shipType:s,isCrashed:p,economy:n,coordinates:c,locationName:d,tier:_}=x(l),h=u((()=>["Interceptor","Living Ship"].includes(s.value.value))),b=u((()=>h.value||p.value.value)),m=u((()=>"Living Ship"===s.value.value));return r((()=>n.value.isActive=!m.value)),r((()=>{c.value.isActive=b.value,d.value.isActive=b.value})),r((()=>_.value.isActive=p.value.value&&!m.value)),(e,l)=>(w(),A("div",$,[a("div",null,[l[3]||(l[3]=a("label",{class:"required"},"Ship Type",-1)),o(a("select",{"onUpdate:modelValue":l[0]||(l[0]=a=>t(s).value=a)},l[2]||(l[2]=[k('<option value="Fighter" data-v-166eb83a>Fighter</option><option value="Explorer" data-v-166eb83a>Explorer</option><option value="Hauler" data-v-166eb83a>Hauler</option><option value="Shuttle" data-v-166eb83a>Shuttle</option><option value="Exotic" data-v-166eb83a>Exotic</option><option value="Solar" data-v-166eb83a>Solar</option><option value="Living Ship" data-v-166eb83a>Living Ship</option><option value="Interceptor" data-v-166eb83a>Interceptor</option>',8)]),512),[[C,t(s).value]])]),o(a("div",B,[l[4]||(l[4]=a("label",{for:"crashed"},"Crashed",-1)),o(a("input",{id:"crashed",type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=a=>t(p).value=a)},null,512),[[E,t(p).value]])],512),[[i,!h.value]]),o(a("div",null,[v(L)],512),[[i,t(n).isActive]]),o(a("div",null,[v(V)],512),[[i,t(d).isActive]]),o(a("div",null,[v(I)],512),[[i,t(c).isActive]]),o(a("div",null,[v(N)],512),[[i,t(_).isActive]])]))}}),q=y(D,[["__scopeId","data-v-166eb83a"]]);export{q as default};
