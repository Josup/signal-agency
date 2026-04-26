// signal-tweaks.jsx — Tweaks app for Signal editorial site

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#C41E3A",
  "paperColor": "#F5F2ED",
  "inkColor": "#15110D",
  "showGrain": true,
  "showDots": true,
  "tiltChat": true,
  "headlineSize": 100,
  "bodyAccentStyle": "italic",
  "ctaStyle": "offset-block",
  "tickerSpeed": 50
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement;
  root.style.setProperty('--red', t.accentColor);
  root.style.setProperty('--paper', t.paperColor);
  root.style.setProperty('--ink', t.inkColor);

  // headline scale (multiplier on hero h1)
  const h1 = document.querySelector('.hero h1');
  if (h1) h1.style.fontSize = `clamp(${48 * (t.headlineSize/100)}px, ${8.4 * (t.headlineSize/100)}vw, ${152 * (t.headlineSize/100)}px)`;

  // grain
  document.body.style.setProperty('--grain-on', t.showGrain ? '.07' : '0');
  // We can't easily restyle body::before opacity from JS without a sheet, so toggle a class.
  document.body.classList.toggle('no-grain', !t.showGrain);
  document.body.classList.toggle('no-dots', !t.showDots);

  // tilt the chat mockup
  const chat = document.querySelector('.chat');
  if (chat) chat.style.transform = t.tiltChat ? 'rotate(-.6deg)' : 'rotate(0deg)';

  // ticker speed
  const track = document.querySelector('.ticker .track');
  if (track) track.style.animationDuration = `${t.tickerSpeed}s`;

  // CTA style: offset-block | underline | outline
  const cta = document.querySelector('.btn.solid');
  if (cta) {
    cta.classList.remove('cta-style-underline','cta-style-outline','cta-style-offset');
    cta.classList.add('cta-style-' + ({'offset-block':'offset','underline':'underline','outline':'outline'}[t.ctaStyle] || 'offset'));
  }

  // body accent style: italic | underline | both
  document.body.classList.remove('accent-italic','accent-underline','accent-both');
  document.body.classList.add('accent-' + t.bodyAccentStyle);
}

function App() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Signal — Tweaks">
      <TweakSection label="Palette" />
      <TweakColor label="Accent" value={t.accentColor} onChange={(v)=>setT('accentColor',v)} />
      <TweakColor label="Paper"  value={t.paperColor}  onChange={(v)=>setT('paperColor',v)} />
      <TweakColor label="Ink"    value={t.inkColor}    onChange={(v)=>setT('inkColor',v)} />

      <TweakSection label="Texture" />
      <TweakToggle label="Paper grain"   value={t.showGrain} onChange={(v)=>setT('showGrain',v)} />
      <TweakToggle label="Dot pattern"   value={t.showDots}  onChange={(v)=>setT('showDots',v)} />
      <TweakToggle label="Tilt ChatGPT mockup" value={t.tiltChat} onChange={(v)=>setT('tiltChat',v)} />

      <TweakSection label="Type" />
      <TweakSlider label="Headline scale" value={t.headlineSize} min={70} max={130} unit="%" onChange={(v)=>setT('headlineSize',v)} />
      <TweakRadio  label="Accent style" value={t.bodyAccentStyle}
                   options={['italic','underline','both']}
                   onChange={(v)=>setT('bodyAccentStyle',v)} />

      <TweakSection label="Interactions" />
      <TweakRadio  label="Primary CTA" value={t.ctaStyle}
                   options={[{value:'offset-block',label:'block'},{value:'underline',label:'underline'},{value:'outline',label:'outline'}]}
                   onChange={(v)=>setT('ctaStyle',v)} />
      <TweakSlider label="Ticker speed" value={t.tickerSpeed} min={15} max={120} unit="s" onChange={(v)=>setT('tickerSpeed',v)} />
    </TweaksPanel>
  );
}

const root = document.createElement('div');
root.id = 'tweaks-root';
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
