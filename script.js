// Apply theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Toggle Theme
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});

// Animate Box
document.getElementById('animateBoxBtn').addEventListener('click', () => {
  const box = document.getElementById('animatedBox');
  box.classList.remove('animate'); // Restart animation
  void box.offsetWidth; // Reflow
  box.classList.add('animate');
});
