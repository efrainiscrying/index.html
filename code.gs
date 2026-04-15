function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('iPad Simulator UI')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
