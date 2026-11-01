// Configuración pública de la app de TikTok (el Client Key es público; el Client Secret NUNCA va aquí).
(function () {
  const base = new URL('.', document.currentScript.src).href;   // .../whatif/
  window.WHATIF_CONFIG = {
    clientKey: '',   // se llena cuando TikTok entregue el Client Key
    scopes: 'user.info.basic,video.upload',
    redirectUri: base + 'callback/',
  };
})();
