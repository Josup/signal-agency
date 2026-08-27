// Signal audit modal — shared component (extracted from index.html, 26 Aug 2026).
// Injects the multi-step audit intake and defines window.openAuditModal on every
// page. Buttons keep href="/audit.html" so no-JS visitors and crawlers get the
// full crawlable page; JS visitors get the modal.
(function(){
  var MARKUP = "<div id=\"auditModal\" class=\"audit-modal\" role=\"dialog\" aria-modal=\"true\" aria-hidden=\"true\">\n  <div class=\"audit-box\">\n    <button class=\"audit-close-btn\" aria-label=\"Close\">&times;</button>\n    <div class=\"audit-hdr\">\n      <span class=\"audit-step-lbl\">Step 1 of 3</span>\n      <div class=\"audit-dots-row\">\n        <span class=\"audit-dot active\"></span>\n        <span class=\"audit-dot\"></span>\n        <span class=\"audit-dot\"></span>\n        <span class=\"audit-dot audit-dot-4\" style=\"display:none\"></span>\n      </div>\n    </div>\n    <!-- Step 1 -->\n    <div class=\"audit-step active\" data-step=\"1\">\n      <h3 class=\"audit-q\">What kind of business do you run?</h3>\n      <input id=\"auditQ1\" class=\"audit-input\" type=\"text\" placeholder=\"e.g. optometrist, gym, hair salon\" autocomplete=\"off\">\n      <div class=\"audit-nav\">\n        <button class=\"btn solid audit-next-btn\">Next <span>\u2192</span></button>\n      </div>\n    </div>\n    <!-- Step 2 -->\n    <div class=\"audit-step\" data-step=\"2\">\n      <h3 class=\"audit-q\">Where are you located?</h3>\n      <input id=\"auditQ2\" class=\"audit-input\" type=\"text\" placeholder=\"e.g. Park Slope, Brooklyn\" autocomplete=\"off\">\n      <div class=\"audit-nav\">\n        <button class=\"audit-back-btn\">\u2190 Back</button>\n        <button class=\"btn solid audit-next-btn\">Next <span>\u2192</span></button>\n      </div>\n    </div>\n    <!-- Step 3 -->\n    <div class=\"audit-step\" data-step=\"3\">\n      <h3 class=\"audit-q\">What's your current situation?</h3>\n      <div class=\"audit-options\">\n        <label class=\"audit-option\" data-value=\"no-website\"><span class=\"audit-opt-dot\"></span><span>No website yet</span></label>\n        <label class=\"audit-option\" data-value=\"not-showing\"><span class=\"audit-opt-dot\"></span><span>Have a website, not showing up in AI search</span></label>\n        <label class=\"audit-option\" data-value=\"want-higher\"><span class=\"audit-opt-dot\"></span><span>Showing up but want to rank higher</span></label>\n      </div>\n      <div class=\"audit-nav\">\n        <button class=\"audit-back-btn\">\u2190 Back</button>\n        <button class=\"btn solid audit-next-btn audit-q3-next\" disabled>Next <span>\u2192</span></button>\n      </div>\n    </div>\n    <!-- Step 4 (conditional: only if has existing website) -->\n    <div class=\"audit-step\" data-step=\"4\">\n      <h3 class=\"audit-q\">What's your website URL?</h3>\n      <input id=\"auditQ4\" class=\"audit-input\" type=\"text\" placeholder=\"e.g. yoursite.com\" autocomplete=\"off\">\n      <p class=\"audit-err-msg\">Please enter a valid URL (must contain a dot, no spaces)</p>\n      <div class=\"audit-nav\">\n        <button class=\"audit-back-btn\">\u2190 Back</button>\n        <button class=\"btn solid audit-next-btn\">Next <span>\u2192</span></button>\n      </div>\n    </div>\n    <!-- Final -->\n    <div class=\"audit-step\" data-step=\"final\">\n      <p class=\"audit-confirm-msg\">Perfect. Book a 20-minute slot and I'll run your audit live on the call.</p>\n      <a href=\"https://calendar.app.google/jPp55zP1iiFTU7VW9\" target=\"_blank\" rel=\"noopener\" class=\"btn solid audit-book-btn\">Book your slot <span>\u2192</span></a>\n    </div>\n  </div>\n</div>";
  function init(){
    if (document.getElementById('auditModal')) return;
    document.body.insertAdjacentHTML('beforeend', MARKUP);
    (function(){
      var modal=document.getElementById('auditModal');
      if(!modal)return;
      var stepLbl=modal.querySelector('.audit-step-lbl');
      var dotsRow=modal.querySelector('.audit-dots-row');
      var dot4=modal.querySelector('.audit-dot-4');
      var allSteps=modal.querySelectorAll('.audit-step');
      var q1El=document.getElementById('auditQ1');
      var q2El=document.getElementById('auditQ2');
      var q4El=document.getElementById('auditQ4');
      var q3Next=modal.querySelector('.audit-q3-next');
      var optEls=modal.querySelectorAll('.audit-option');
      var errEl=modal.querySelector('.audit-err-msg');
      var situation=null;
    
      function needsQ4(){return situation==='not-showing'||situation==='want-higher';}
    
      function updateProgress(sid){
        var n=parseInt(sid,10)||0;
        var isFinal=(sid==='final');
        var total=(sid==='4'||(isFinal&&needsQ4()))?4:3;
        stepLbl.textContent=isFinal?'Complete':'Step '+n+' of '+total;
        if(dot4)dot4.style.display=(needsQ4()&&situation)?'inline-block':'none';
        var dots=dotsRow.querySelectorAll('.audit-dot');
        dots.forEach(function(d,i){
          d.classList.remove('active','done');
          if(isFinal){d.classList.add('done');}
          else if(i+1<n){d.classList.add('done');}
          else if(i+1===n){d.classList.add('active');}
        });
      }
    
      function showStep(sid){
        allSteps.forEach(function(s){s.classList.remove('active');});
        var t=modal.querySelector('[data-step="'+sid+'"]');
        if(t)t.classList.add('active');
        updateProgress(sid);
      }
    
      // --- GA4 funnel events -----------------------------------------------------
      // qualify_lead      = visitor opened the audit intake
      // close_convert_lead= visitor completed intake and was handed to the booking page
      // Both are already marked as key events in GA4 property 534610334.
      function signalTrack(name, params){
        try { if (typeof gtag === 'function') gtag('event', name, params || {}); } catch(e){}
      }
    
      window.openAuditModal=function(){
        situation=null;
        if(q1El)q1El.value='';
        if(q2El)q2El.value='';
        if(q4El){q4El.value='';q4El.classList.remove('error');}
        if(errEl)errEl.classList.remove('show');
        if(q3Next)q3Next.disabled=true;
        optEls.forEach(function(o){o.classList.remove('selected');});
        if(dot4)dot4.style.display='none';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden','false');
        signalTrack('qualify_lead', {method:'audit_modal'});
        document.body.style.overflow='hidden';
        showStep('1');
        setTimeout(function(){if(q1El)q1El.focus();},120);
      };
    
      function closeModal(){
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden','true');
        document.body.style.overflow='';
      }
    
      modal.addEventListener('click',function(e){if(e.target===modal)closeModal();});
      document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});
      var closeBtn=modal.querySelector('.audit-close-btn');
      if(closeBtn)closeBtn.addEventListener('click',closeModal);
    
      modal.querySelectorAll('.audit-next-btn').forEach(function(btn){
        btn.addEventListener('click',function(){
          var step=btn.closest('[data-step]');
          var sid=step?step.dataset.step:null;
          if(sid==='1'){
            if(!q1El||!q1El.value.trim()){if(q1El)q1El.focus();return;}
            showStep('2');setTimeout(function(){if(q2El)q2El.focus();},120);
          } else if(sid==='2'){
            if(!q2El||!q2El.value.trim()){if(q2El)q2El.focus();return;}
            showStep('3');
          } else if(sid==='3'){
            if(!situation)return;
            if(needsQ4()){if(dot4)dot4.style.display='inline-block';showStep('4');setTimeout(function(){if(q4El)q4El.focus();},120);}
            else showStep('final');
          } else if(sid==='4'){
            var url=q4El?q4El.value.trim():'';
            if(!url||url.indexOf('.')<0||url.indexOf(' ')>-1){
              if(q4El)q4El.classList.add('error');
              if(errEl)errEl.classList.add('show');
              if(q4El)q4El.focus();return;
            }
            if(q4El)q4El.classList.remove('error');
            if(errEl)errEl.classList.remove('show');
            showStep('final');
          }
        });
      });
    
      modal.querySelectorAll('.audit-back-btn').forEach(function(btn){
        btn.addEventListener('click',function(){
          var step=btn.closest('[data-step]');
          var sid=step?step.dataset.step:null;
          if(sid==='2')showStep('1');
          else if(sid==='3')showStep('2');
          else if(sid==='4')showStep('3');
        });
      });
    
      optEls.forEach(function(opt){
        opt.addEventListener('click',function(){
          optEls.forEach(function(o){o.classList.remove('selected');});
          opt.classList.add('selected');
          situation=opt.dataset.value;
          if(q3Next)q3Next.disabled=false;
          updateProgress('3');
        });
      });
    
      if(q4El)q4El.addEventListener('input',function(){
        q4El.classList.remove('error');
        if(errEl)errEl.classList.remove('show');
      });
    
      // Formspree submit + calendar open on book button
      var bookBtn=modal.querySelector('.audit-book-btn');
      if(bookBtn){
        bookBtn.addEventListener('click',function(e){
          e.preventDefault();
          var payload={
            'Business Type':q1El?q1El.value.trim():'',
            'Location':q2El?q2El.value.trim():'',
            'Situation':situation||''
          };
          var siteUrl=q4El?q4El.value.trim():'';
          if(siteUrl) payload['Website URL']=siteUrl;
          fetch('https://formspree.io/f/xdayvaee',{
            method:'POST',
            headers:{'Content-Type':'application/json','Accept':'application/json'},
            body:JSON.stringify(payload)
          });
          signalTrack('close_convert_lead', {method:'audit_form_submit'});
          window.open('https://calendar.app.google/jPp55zP1iiFTU7VW9','_blank');
        });
      }
    })();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
