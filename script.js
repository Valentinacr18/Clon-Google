document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
  
    function setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
  
      // Change button icon
      toggleBtn.textContent = theme === "dark" ? "light_mode" : "dark_mode";
  
      // Change logo according to theme
      const logo = document.getElementById("google-logo");
      if (logo) {
        logo.src =
          theme === "dark"
            ? "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
            : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
      }
    }
  
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      setTheme(next);
    });
  
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  });