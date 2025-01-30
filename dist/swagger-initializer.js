window.loadSpec = function (url) {
  if (!url) return; // Prevent loading if no selection is made

  // Destroy the existing Swagger UI instance if it exists
  if (window.ui) {
    window.ui.destroy();
    window.ui = null;
    document.getElementById("swagger-ui").innerHTML = ""; // Clear Swagger UI container
  }

  // Introduce a small delay to ensure proper reinitialization
  setTimeout(() => {
    window.ui = SwaggerUIBundle({
      url: url,
      dom_id: "#swagger-ui",
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      plugins: [SwaggerUIBundle.plugins.DownloadUrl],
      layout: "StandaloneLayout",
      deepLinking: true,
    });
  }, 100); // Small delay to ensure smooth reloading
};

// Ensure the dropdown is initialized properly
document.addEventListener("DOMContentLoaded", function () {
  const apiVersionDropdown = document.getElementById("apiVersion");
  if (apiVersionDropdown) {
    apiVersionDropdown.addEventListener("change", function () {
      loadSpec(this.value);
    });
  }
});
