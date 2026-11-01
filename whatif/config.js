// Configuración pública de la app de TikTok (el Client Key es público; el Client Secret NUNCA va aquí).
(function () {
  const base = new URL('.', document.currentScript.src).href;   // .../whatif/
  window.WHATIF_CONFIG = {
    clientKey: 'sbawrjhyo444g3foje',   // Client key del Sandbox (público). Cambiar por el de Production cuando TikTok apruebe la app.
    scopes: 'user.info.basic,video.upload',
    redirectUri: base + 'callback/',
  };
})();
