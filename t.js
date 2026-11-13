// Logs visits, plays and downloads to the "Dumper.life Activity" Google Form (owned by Jordan).
// One field, pipe-separated: event | detail | page | visitor | referrer
(() => {
  const URL_ = 'https://docs.google.com/forms/d/e/1FAIpQLScMMzSqGOW3xJLtVnV0O1n_pM0GOCQwvUvszHAa3YnZRaMlsQ/formResponse';
  const FIELD = 'entry.1049822494';
  if (!/dumper\.life$/.test(location.hostname)) return;
  let vid = '';
  try { vid = localStorage.getItem('dp-v') || ''; if (!vid) { vid = Math.random().toString(36).slice(2, 10); localStorage.setItem('dp-v', vid); } } catch {}
  const page = location.pathname.replace(/index\.html$/, '') || '/';
  let ref = '';
  try { ref = document.referrer ? new URL(document.referrer).hostname : ''; if (ref === location.hostname) ref = ''; } catch {}
  const send = (ev, detail = '') => {
    const body = new URLSearchParams({ [FIELD]: [ev, detail, page, vid, ref].join(' | ') });
    try { fetch(URL_, { method: 'POST', mode: 'no-cors', keepalive: true, body }); } catch {}
  };
  send('visit');
  const name = src => { try { return decodeURIComponent(src.split('/').pop()).replace(/\.\w+$/, ''); } catch { return src; } };
  const seen = {};
  document.addEventListener('play', e => {
    const a = e.target; if (!(a instanceof HTMLAudioElement) || a.muted) return;
    const n = name(a.currentSrc || a.src), k = 'p' + n;
    if (!seen[k]) { seen[k] = 1; send('play', n); }
    if (!a.dataset.dpT) { a.dataset.dpT = 1; a.addEventListener('timeupdate', () => {
      if (!a.duration) return;
      const n2 = name(a.currentSrc || a.src), f = a.currentTime / a.duration;
      if (f > 0.5 && !seen['h' + n2]) { seen['h' + n2] = 1; send('half', n2); }
      if (f > 0.95 && !seen['f' + n2]) { seen['f' + n2] = 1; send('finish', n2); }
    }); }
  }, true);
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[download]');
    if (a) send('download', name(a.getAttribute('href') || ''));
  }, true);
})();
