document.addEventListener('DOMContentLoaded', function () {
    // Données du portfolio
    const cardPortfolioItems = [
        {
            image: '../images/bureau.jpg',
            title: 'Carte Minimaliste',
            description: 'Design épuré pour professionnels créatifs',
            category: 'minimaliste'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Carte Moderne',
            description: 'Approche contemporaine pour entreprises tech',
            category: 'modern'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Carte Élégante',
            description: 'Style classique pour consultants haut de gamme',
            category: 'elegant'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Carte Créative',
            description: 'Approche artistique pour designers',
            category: 'creative'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Carte Luxe',
            description: 'Finition dorée pour cadres dirigeants',
            category: 'elegant'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Carte Startup',
            description: 'Design énergique pour jeunes entreprises',
            category: 'modern'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Carte Minimaliste',
            description: 'Approche simple et efficace',
            category: 'minimaliste'
        },
        {
            image: '../images/bureau.jpg',
            title: 'Carte Artistique',
            description: 'Pour professionnels de l\'art',
            category: 'creative'
        }
    ];

    // Données FAQ
    const faqItems = [
        {
            question: "Combien de temps prend la conception et la livraison?",
            answer: "Le temps de conception varie de 3 à 5 jours ouvrables selon la complexité. La production et livraison prennent ensuite 3 à 7 jours selon votre localisation et l'option de livraison choisie."
        },
        {
            question: "Puis-je voir une maquette avant la production?",
            answer: "Absolument! Nous vous fournissons des maquettes numériques pour approbation avant toute impression. Vous pouvez demander jusqu'à 3 révisions incluses dans nos packages."
        },
        {
            question: "Quels formats de fichiers fournissez-vous?",
            answer: "Nous fournissons les fichiers source (AI, EPS) ainsi que des versions prêtes à imprimer (PDF haute résolution) et des versions numériques (PNG, JPG)."
        },
        {
            question: "Puis-je utiliser mon propre design?",
            answer: "Oui, nous acceptons vos propres designs. Nos experts les vérifieront pour s'assurer qu'ils répondent aux standards d'impression avant production."
        },
        {
            question: "Offrez-vous des réductions pour les commandes en volume?",
            answer: "Oui, nous proposons des tarifs dégressifs pour les commandes à partir de 1000 cartes. Contactez-nous pour un devis personnalisé."
        }
    ];

    // Charger le portfolio
    const portfolioGrid = document.getElementById('portfolioGrid');

    function loadPortfolioItems(filter = 'all') {
        portfolioGrid.innerHTML = '';

        const filteredItems = filter === 'all'
            ? cardPortfolioItems
            : cardPortfolioItems.filter(item => item.category === filter);

        filteredItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.dataset.category = item.category;
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

    // Initialiser le portfolio
    loadPortfolioItems();

    // Gestion des filtres
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadPortfolioItems(this.dataset.filter);
        });
    });

    // Charger les FAQ
    const faqContainer = document.getElementById('faqContainer');
    faqItems.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        if (index === 0) faqItem.classList.add('active');
        faqItem.innerHTML = `
            <div class="faq-question">${item.question}</div>
            <div class="faq-answer" style="${index === 0 ? 'max-height: 500px; padding: 0 25px 20px' : ''}">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);

        // Gestion du clic sur les questions FAQ
        faqItem.querySelector('.faq-question').addEventListener('click', function () {
            faqItem.classList.toggle('active');
        });
    });

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

    // Animation au défilement
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.advantage-card, .pricing-card, .portfolio-item, .faq-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Préparation des éléments pour l'animation
    const advantageCards = document.querySelectorAll('.advantage-card');
    const pricingCards = document.querySelectorAll('.pricing-card');
    const portfolioElements = document.querySelectorAll('.portfolio-item');
    const faqElements = document.querySelectorAll('.faq-item');

    [advantageCards, pricingCards, portfolioElements, faqElements].forEach((elements, index) => {
        elements.forEach((element, idx) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `opacity 0.5s ease ${idx * 0.1}s, transform 0.5s ease ${idx * 0.1}s`;
        });
    });

 // Écouteur d'événement pour le défilement
 window.addEventListener('scroll', animateOnScroll);
 // Appel initial au cas où les éléments sont déjà visibles
 animateOnScroll();
});