window.loadSpec = function (url) {
  // Destroy the existing Swagger UI instance if it exists
  if (window.ui) {
    window.ui.destroy(); // Properly destroy the instance
    window.ui = null;
    document.getElementById("swagger-ui").innerHTML = ""; // Clear the DOM
  }

  // Reinitialize Swagger UI with the new spec
  window.ui = SwaggerUIBundle({
    url: url,
    dom_id: "#swagger-ui",
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset, // Include this preset if needed
    ],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
    deepLinking: true,
  });
};
