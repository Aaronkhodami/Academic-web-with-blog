document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Function to set the theme
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  // Check for saved user preference, if any, on load
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  } else {
      // Create a sensible default if no pref
      if (prefersDarkScheme.matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
      }
  }

  // Toggle button click handler
  toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      theme = 'light';
    } else {
      theme = 'dark';
    }
    setTheme(theme);
  });
});
