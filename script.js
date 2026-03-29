document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-icon-btn');
    const themeIcon = themeBtn.querySelector('.icon');
    const body = document.body;

    // Ícones Unicode
    const sunIcon = "☀️";
    const moonIcon = "🌙";

    // 1. Carregar preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.textContent = sunIcon; // Mostra o Sol no Light Mode
    } else {
        themeIcon.textContent = moonIcon; // Mostra a Lua no Dark Mode (Padrão)
    }

    // 2. Evento de clique no botão do ícone
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Altera o ícone e salva a escolha
        if (body.classList.contains('light-mode')) {
            themeIcon.textContent = sunIcon;
            localStorage.setItem('theme', 'light');
            console.log("Light Mode ativado");
        } else {
            themeIcon.textContent = moonIcon;
            localStorage.setItem('theme', 'dark');
            console.log("Dark Mode ativado");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile-link');

    profileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Captura os elementos dentro do link clicado
            const imgElement = this.querySelector('img');
            const nameElement = this.querySelector('span');

            if (imgElement && nameElement) {
                // Salva no LocalStorage
                localStorage.setItem('activeProfileName', nameElement.innerText);
                localStorage.setItem('activeProfileImg', imgElement.src);
                
                // Opcional: Log para verificar no F12 se está salvando
                console.log("Perfil salvo:", nameElement.innerText);
            }
        });
    });
});