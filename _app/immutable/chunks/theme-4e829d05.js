import{B as t}from"./index-b90ed33e.js";import{p as e,a as o,b as r}from"./state-3f00ae0f.js";const l=e(t({isDark:!1}),o(),"themeStore"),i=["dark","synthwave","halloween","aqua","forest","luxury","black","dracula"],p=s=>{s.includes(" ")&&(s=s.split(" ")[1].trim());const a=i.includes(s);console.log("Setting theme",s),l.set({theme:s,isDark:a}),r("themeChange",{theme:s,isDark:a})};export{p as s,l as t};
