
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
 
function toggleTheme() {
  const body = document.body;
  const isDark = body.style.background === 'var(--bg-light)';
  
  // Toggle body background and text color
  body.style.background = isDark ? 'var(--bg-dark)' : 'var(--bg-light)';
  body.style.color = isDark ? 'var(--text-light)' : 'var(--text-dark)';
  
  // Toggle card background and border glow for theme switch
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.background = isDark ? 'var(--glass-dark)' : 'var(--glass)';
    card.style.border = isDark ? 'var(--border-glow)' : '1px solid rgba(0, 0, 0, 0.2)';
  });
  
  // Toggle text color for links and other elements
  const links = document.querySelectorAll('.sidebar a');
  links.forEach(link => {
    link.style.color = isDark ? 'var(--text-light)' : 'var(--text-light)';  // Set to white in light mode
  });
  
  // Toggle theme text
  const themeToggleText = document.querySelector('.theme-toggle');
  themeToggleText.textContent = isDark ? '🌗 Toggle Theme' : '🌕 Toggle Theme';
}
