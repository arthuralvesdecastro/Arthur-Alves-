// Verifica se já existe uma preferência salva
function checkDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    return isDarkMode;
}

// Aplica o modo escuro
function applyDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '☀️ Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '🌙 Modo Escuro';
    }
}

function toggleDarkMode() {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    const newDarkModeState = !isCurrentlyDark;
    

    applyDarkMode(newDarkModeState);
    
    
    localStorage.setItem('darkMode', newDarkModeState);
}


document.addEventListener('DOMContentLoaded', function() {
   
    const prefersDarkMode = checkDarkModePreference();
    applyDarkMode(prefersDarkMode);
    
    
    document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);
});