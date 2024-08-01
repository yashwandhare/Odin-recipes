// Function to apply the selected theme
function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
}

// Function to toggle the theme and save the preference
function toggleTheme() {
  // Get the current theme from localStorage
  const currentTheme = localStorage.getItem('theme');
  // Determine the new theme
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  // Save the new theme in localStorage
  localStorage.setItem('theme', newTheme);
  // Apply the new theme
  applyTheme(newTheme);
}

// Apply the saved theme on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});

// Check if the toggle button exists and attach the event listener
const toggleButton = document.getElementById('theme-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', toggleTheme);
}
