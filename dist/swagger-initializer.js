window.loadSpec = function (url) {
  if (window.ui) {
    window.ui.destroy();
    window.ui = null;
    document.getElementById("swagger-ui").innerHTML = "";
  }

  window.ui = SwaggerUIBundle({
    url: url,
    dom_id: "#swagger-ui",
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "StandaloneLayout",
  });
};

// Load a default spec on page load
window.onload = () => loadSpec("./basic_and_full_request.json");
