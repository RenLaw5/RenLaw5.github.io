/* Global variables */
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const btnDarkMode = document.getElementById('btn-dark-mode');
const iconDarkMode = document.getElementById('icon-dark-mode');

const btnLang = document.getElementById('btn-language');

/* Dark mode methods */
function toggleDarkMode() {
	const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
	document.documentElement.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
	iconDarkMode.textContent = isDark ? 'light_mode' : 'dark_mode';
}

function applyInitialTheme() {
	document.documentElement.setAttribute('data-bs-theme', userPrefersDark ? 'dark' : 'light');
	iconDarkMode.textContent = userPrefersDark ? 'dark_mode' : 'light_mode';
}

applyInitialTheme();
btnDarkMode.addEventListener('click', toggleDarkMode);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	document.documentElement.setAttribute('data-bs-theme', event.matches ? 'dark' : 'light');
	iconDarkMode.textContent = event.matches ? 'dark_mode' : 'light_mode';
});

/* Language methods */
function setLang(lang) {
		document.location.href = `/${lang}/home.html`;
}