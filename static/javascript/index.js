document.addEventListener('DOMContentLoaded', (event) => {
// Seleciona todos os botões do menu
const buttons = document.querySelectorAll('.headerButton');

// Mapeamento dos botões com as respectivas divs
const sectionMap = {
    aboutButton: document.getElementById('About'),
    projectsButton: document.getElementById('Projects'),
    contactsButton: document.getElementById('Contacts')
};

// Função para ativar o botão correspondente à seção
const activateButton = (id) => {
    buttons.forEach(button => button.classList.remove('active')); // Remove a classe 'active' de todos os botões
    const activeButton = document.getElementById(id); // Ativa o botão correspondente à seção visível
    if (activeButton) {
        activeButton.classList.add('active');
    }
};

// Configurações do IntersectionObserver
const observerOptions = {
    root: null, // Usa a viewport como referência
    rootMargin: '0px',
    threshold: 0.6 // Define 60% da seção visível como critério para ativar
};

// Cria um IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            switch (sectionId) {
                case 'About':
                    activateButton('aboutButton');
                    break;
                case 'Projects':
                    activateButton('projectsButton');
                    break;
                case 'Contacts':
                    activateButton('contactsButton');
                    break;
            }
        }
    });
}, observerOptions);

// Observa as seções
Object.values(sectionMap).forEach(section => {
    if (section) {
        observer.observe(section);
    }
});

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active')); // Remove a classe 'active' de todos os botões
        this.classList.add('active'); // Adiciona a classe 'active' ao botão clicado

        // Obter o id do botão clicado e rolar suavemente para a seção correspondente
        const section = sectionMap[this.id];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Define o botão "Sobre" como 'ativo' e rola suavemente até a div #About
const aboutButton = document.getElementById('aboutButton');
if (aboutButton) {
    aboutButton.classList.add('active');
}
const aboutSection = document.getElementById('About');
if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}
});


//Carousel


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#projectsCarousel');
    const projects = document.querySelectorAll('.projetos');
    
    let counter = 0;
    const size = projects[0].clientWidth; // Get the width of one project

    // Next button
    document.getElementById('nextProject').addEventListener('click', () => {
        if (counter >= projects.length - 1) {
            counter = -1; // Reset to -1 so it moves to 0 when incremented
        }
        carousel.style.transform = `translateX(${-(size * ++counter)}px)`;
    });

    // Previous button
    document.getElementById('prevProject').addEventListener('click', () => {
        if (counter <= 0) {
            counter = projects.length; // Set to length so it decrements to max - 1
        }
        carousel.style.transform = `translateX(${-(size * --counter)}px)`;
    });
});