document.addEventListener('DOMContentLoaded', function() {
    // Données des témoignages
    const testimonials = [
        {
            avatar: '../images/user+computer.png',
            text: "Visio TECH a créé un site web exceptionnel pour mon entreprise. Le design est moderne et le site convertit beaucoup mieux qu'avant.",
            name: "Maweja jelly",
            role: "CEO, TechSolutions"
        },
        {
            avatar: '../images/user+computer.png',
            text: "Notre boutique en ligne a augmenté ses ventes de 150% depuis le lancement du nouveau site. Je recommande vivement leurs services.",
            name: "Bukasa junior",
            role: "Fondatrice, BelleCouture"
        },
        {
            avatar: '../images/user+computer.png',
            text: "Le processus de développement était transparent et professionnel. Le site est exactement comme nous l'avions imaginé, mais en mieux!",
            name: "M'buy Nathan-xavier",
            role: "Directeur Marketing, AgroPlus"
        },
        {
            avatar: '../images/user+computer.png',
            text: "Le support après-vente est excellent. Ils ont répondu à toutes nos questions et effectué les modifications nécessaires rapidement.",
            name: "Pini kevin",
            role: "Responsable Communication, SantéPlus"
        }
    ];

    // Charger les témoignages si l'élément existe
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    if (testimonialsSlider) {
        testimonialsSlider.innerHTML = '';
        testimonials.forEach((testimonial, index) => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
            testimonialCard.innerHTML = `
                <div class="client-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4 class="client-name">${testimonial.name}</h4>
                <p class="client-role">${testimonial.role}</p>
            `;
            testimonialsSlider.appendChild(testimonialCard);
        });

        // Carrousel Vanilla JS autonome
        let currentIndex = 0;
        const cards = testimonialsSlider.querySelectorAll('.testimonial-card');
        if (cards.length > 1) {
            setInterval(() => {
                cards[currentIndex].classList.remove('active');
                cards[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % cards.length;
                cards[currentIndex].classList.add('active');
                cards[currentIndex].style.display = 'block';
            }, 4000);
        }
    }

    // Gestion des boutons CTA
    const startProjectBtn = document.getElementById('startProjectBtn');
    if (startProjectBtn) {
        startProjectBtn.addEventListener('click', function() {
            window.location.href = '../contact.html';
        });
    }

    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            window.location.href = '../contact.html';
        });
    }
});