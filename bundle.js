"use strict";const __TWEAKS_STYLE=`
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;height:22px;
    border-radius:6px;cursor:default;padding:0}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;function useTweaks(e){const[n,t]=React.useState(e),r=React.useCallback((o,i)=>{t(l=>({...l,[o]:i})),window.parent.postMessage({type:"__edit_mode_set_keys",edits:{[o]:i}},"*")},[]);return[n,r]}function TweaksPanel({title:e="Tweaks",children:n}){const[t,r]=React.useState(!1),o=React.useRef(null),i=React.useRef({x:16,y:16}),l=16,c=React.useCallback(()=>{const a=o.current;if(!a)return;const d=a.offsetWidth,u=a.offsetHeight,s=Math.max(l,window.innerWidth-d-l),p=Math.max(l,window.innerHeight-u-l);i.current={x:Math.min(s,Math.max(l,i.current.x)),y:Math.min(p,Math.max(l,i.current.y))},a.style.right=i.current.x+"px",a.style.bottom=i.current.y+"px"},[]);React.useEffect(()=>{if(!t)return;if(c(),typeof ResizeObserver>"u")return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c);const a=new ResizeObserver(c);return a.observe(document.documentElement),()=>a.disconnect()},[t,c]),React.useEffect(()=>{const a=d=>{const u=d?.data?.type;u==="__activate_edit_mode"?r(!0):u==="__deactivate_edit_mode"&&r(!1)};return window.addEventListener("message",a),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",a)},[]);const g=()=>{r(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},h=a=>{const d=o.current;if(!d)return;const u=d.getBoundingClientRect(),s=a.clientX,p=a.clientY,b=window.innerWidth-u.right,w=window.innerHeight-u.bottom,k=m=>{i.current={x:b-(m.clientX-s),y:w-(m.clientY-p)},c()},f=()=>{window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",f)};window.addEventListener("mousemove",k),window.addEventListener("mouseup",f)};return t?React.createElement(React.Fragment,null,React.createElement("style",null,__TWEAKS_STYLE),React.createElement("div",{ref:o,className:"twk-panel",style:{right:i.current.x,bottom:i.current.y}},React.createElement("div",{className:"twk-hd",onMouseDown:h},React.createElement("b",null,e),React.createElement("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:a=>a.stopPropagation(),onClick:g},"\u2715")),React.createElement("div",{className:"twk-body"},n))):null}function TweakSection({label:e,children:n}){return React.createElement(React.Fragment,null,React.createElement("div",{className:"twk-sect"},e),n)}function TweakRow({label:e,value:n,children:t,inline:r=!1}){return React.createElement("div",{className:r?"twk-row twk-row-h":"twk-row"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,e),n!=null&&React.createElement("span",{className:"twk-val"},n)),t)}function TweakSlider({label:e,value:n,min:t=0,max:r=100,step:o=1,unit:i="",onChange:l}){return React.createElement(TweakRow,{label:e,value:`${n}${i}`},React.createElement("input",{type:"range",className:"twk-slider",min:t,max:r,step:o,value:n,onChange:c=>l(Number(c.target.value))}))}function TweakToggle({label:e,value:n,onChange:t}){return React.createElement("div",{className:"twk-row twk-row-h"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,e)),React.createElement("button",{type:"button",className:"twk-toggle","data-on":n?"1":"0",role:"switch","aria-checked":!!n,onClick:()=>t(!n)},React.createElement("i",null)))}function TweakRadio({label:e,value:n,options:t,onChange:r}){const o=React.useRef(null),[i,l]=React.useState(!1),c=t.map(s=>typeof s=="object"?s:{value:s,label:s}),g=Math.max(0,c.findIndex(s=>s.value===n)),h=c.length,a=React.useRef(n);a.current=n;const d=s=>{const p=o.current.getBoundingClientRect(),b=p.width-4,w=Math.floor((s-p.left-2)/b*h);return c[Math.max(0,Math.min(h-1,w))].value};return React.createElement(TweakRow,{label:e},React.createElement("div",{ref:o,role:"radiogroup",onPointerDown:s=>{l(!0);const p=d(s.clientX);p!==a.current&&r(p);const b=k=>{if(!o.current)return;const f=d(k.clientX);f!==a.current&&r(f)},w=()=>{l(!1),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",w)};window.addEventListener("pointermove",b),window.addEventListener("pointerup",w)},className:i?"twk-seg dragging":"twk-seg"},React.createElement("div",{className:"twk-seg-thumb",style:{left:`calc(2px + ${g} * (100% - 4px) / ${h})`,width:`calc((100% - 4px) / ${h})`}}),c.map(s=>React.createElement("button",{key:s.value,type:"button",role:"radio","aria-checked":s.value===n},s.label))))}function TweakSelect({label:e,value:n,options:t,onChange:r}){return React.createElement(TweakRow,{label:e},React.createElement("select",{className:"twk-field",value:n,onChange:o=>r(o.target.value)},t.map(o=>{const i=typeof o=="object"?o.value:o,l=typeof o=="object"?o.label:o;return React.createElement("option",{key:i,value:i},l)})))}function TweakText({label:e,value:n,placeholder:t,onChange:r}){return React.createElement(TweakRow,{label:e},React.createElement("input",{className:"twk-field",type:"text",value:n,placeholder:t,onChange:o=>r(o.target.value)}))}function TweakNumber({label:e,value:n,min:t,max:r,step:o=1,unit:i="",onChange:l}){const c=a=>t!=null&&a<t?t:r!=null&&a>r?r:a,g=React.useRef({x:0,val:0});return React.createElement("div",{className:"twk-num"},React.createElement("span",{className:"twk-num-lbl",onPointerDown:a=>{a.preventDefault(),g.current={x:a.clientX,val:n};const d=(String(o).split(".")[1]||"").length,u=p=>{const b=p.clientX-g.current.x,w=g.current.val+b*o,k=Math.round(w/o)*o;l(c(Number(k.toFixed(d))))},s=()=>{window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",s)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",s)}},e),React.createElement("input",{type:"number",value:n,min:t,max:r,step:o,onChange:a=>l(c(Number(a.target.value)))}),i&&React.createElement("span",{className:"twk-num-unit"},i))}function TweakColor({label:e,value:n,onChange:t}){return React.createElement("div",{className:"twk-row twk-row-h"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,e)),React.createElement("input",{type:"color",className:"twk-swatch",value:n,onChange:r=>t(r.target.value)}))}function TweakButton({label:e,onClick:n,secondary:t=!1}){return React.createElement("button",{type:"button",className:t?"twk-btn secondary":"twk-btn",onClick:n},e)}Object.assign(window,{useTweaks,TweaksPanel,TweakSection,TweakRow,TweakSlider,TweakToggle,TweakRadio,TweakSelect,TweakText,TweakNumber,TweakColor,TweakButton});const TWEAK_DEFAULTS={accentColor:"#C41E3A",paperColor:"#F5F2ED",inkColor:"#15110D",showGrain:!0,showDots:!0,tiltChat:!0,headlineSize:100,bodyAccentStyle:"italic",ctaStyle:"offset-block",tickerSpeed:50};function applyTweaks(e){const n=document.documentElement;n.style.setProperty("--red",e.accentColor),n.style.setProperty("--paper",e.paperColor),n.style.setProperty("--ink",e.inkColor);const t=document.querySelector(".hero h1");t&&(t.style.fontSize=`clamp(${48*(e.headlineSize/100)}px, ${8.4*(e.headlineSize/100)}vw, ${152*(e.headlineSize/100)}px)`),document.body.style.setProperty("--grain-on",e.showGrain?".07":"0"),document.body.classList.toggle("no-grain",!e.showGrain),document.body.classList.toggle("no-dots",!e.showDots);const r=document.querySelector(".chat");r&&(r.style.transform=e.tiltChat?"rotate(-.6deg)":"rotate(0deg)");const o=document.querySelector(".ticker .track");o&&(o.style.animationDuration=`${e.tickerSpeed}s`);const i=document.querySelector(".btn.solid");i&&(i.classList.remove("cta-style-underline","cta-style-outline","cta-style-offset"),i.classList.add("cta-style-"+({"offset-block":"offset",underline:"underline",outline:"outline"}[e.ctaStyle]||"offset"))),document.body.classList.remove("accent-italic","accent-underline","accent-both"),document.body.classList.add("accent-"+e.bodyAccentStyle)}function App(){const[e,n]=useTweaks(TWEAK_DEFAULTS);return React.useEffect(()=>{applyTweaks(e)},[e]),React.createElement(TweaksPanel,{title:"Signal \u2014 Tweaks"},React.createElement(TweakSection,{label:"Palette"}),React.createElement(TweakColor,{label:"Accent",value:e.accentColor,onChange:t=>n("accentColor",t)}),React.createElement(TweakColor,{label:"Paper",value:e.paperColor,onChange:t=>n("paperColor",t)}),React.createElement(TweakColor,{label:"Ink",value:e.inkColor,onChange:t=>n("inkColor",t)}),React.createElement(TweakSection,{label:"Texture"}),React.createElement(TweakToggle,{label:"Paper grain",value:e.showGrain,onChange:t=>n("showGrain",t)}),React.createElement(TweakToggle,{label:"Dot pattern",value:e.showDots,onChange:t=>n("showDots",t)}),React.createElement(TweakToggle,{label:"Tilt ChatGPT mockup",value:e.tiltChat,onChange:t=>n("tiltChat",t)}),React.createElement(TweakSection,{label:"Type"}),React.createElement(TweakSlider,{label:"Headline scale",value:e.headlineSize,min:70,max:130,unit:"%",onChange:t=>n("headlineSize",t)}),React.createElement(TweakRadio,{label:"Accent style",value:e.bodyAccentStyle,options:["italic","underline","both"],onChange:t=>n("bodyAccentStyle",t)}),React.createElement(TweakSection,{label:"Interactions"}),React.createElement(TweakRadio,{label:"Primary CTA",value:e.ctaStyle,options:[{value:"offset-block",label:"block"},{value:"underline",label:"underline"},{value:"outline",label:"outline"}],onChange:t=>n("ctaStyle",t)}),React.createElement(TweakSlider,{label:"Ticker speed",value:e.tickerSpeed,min:15,max:120,unit:"s",onChange:t=>n("tickerSpeed",t)}))}const root=document.createElement("div");root.id="tweaks-root",document.body.appendChild(root),ReactDOM.createRoot(root).render(React.createElement(App,null));
