document.addEventListener('DOMContentLoaded', function () {
    // Données du portfolio
    const portfolioData = [
        {
            image: '../images/bureau.jpg',
            title: 'Logo Restaurant',
            description: 'Logo moderne pour un restaurant gastronomique'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Logo Tech Startup',
            description: 'Logo minimaliste pour une startup technologique'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Logo Boutique',
            description: 'Logo élégant pour une boutique de mode'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Logo Café',
            description: 'Logo chaleureux pour un café local'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Logo Fitness',
            description: 'Logo énergique pour une salle de sport'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Logo Consultant',
            description: 'Logo professionnel pour un consultant'
        }
    ];

    // Charger le portfolio
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (portfolioGrid) {
        portfolioGrid.innerHTML = '';
        portfolioData.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    // Gestion des boutons CTA
    const startProjectBtn = document.getElementById('startProjectBtn');
    if (startProjectBtn) {
        startProjectBtn.addEventListener('click', function () {
            window.location.href = '../contact.html';
        });
    }

    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function () {
            window.location.href = '../contact.html';
        });
    }
});