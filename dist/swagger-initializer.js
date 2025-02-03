window.loadSpec = function (url) {
  if (window.ui) {
    // Destroy existing Swagger UI instance
    window.ui.getConfigs().presetApis.forEach((api) => api.api.destroy());
  }

  // Initialize Swagger UI with the selected spec
  window.ui = SwaggerUIBundle({
    url: url,
    dom_id: "#swagger-ui",
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "StandaloneLayout",
  });
};

// Optional: Load a default spec on page load
window.onload = function () {
  loadSpec("./basic_and_full_request.yaml"); // Default to v1
};
