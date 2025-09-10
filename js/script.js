// Mock NFT data with uploaded images
const nfts = [
    { id: 1, name: "Kaiju #001", image: "assets/images/nfts/kaiju001.png", details: "A fiery Kaiju with neon scales, rare in the urban jungle. Rarity: Epic" },
    { id: 2, name: "Kaiju #002", image: "assets/images/nfts/kaiju002.png", details: "A stealthy beast lurking in Tokyo's shadows. Rarity: Rare" },
    { id: 3, name: "Kaiju #003", image: "assets/images/nfts/kaiju003.png", details: "A cybernetic Kaiju with glowing circuits. Rarity: Legendary" },
];

// Load NFTs into gallery
function loadGallery() {
    const gallery = document.getElementById('nft-gallery');
    nfts.forEach(nft => {
        const card = document.createElement('div');
        card.className = 'nft-card fade-in';
        card.innerHTML = `
            <img src="${nft.image}" alt="${nft.name || 'Urban Kaiju'}">
            <h3>${nft.name || 'Unnamed Kaiju'}</h3>
        `;
        card.addEventListener('click', () => openModal(nft));
        gallery.appendChild(card);
    });
}

// Modal functionality
const modal = document.getElementById('nft-modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close');

function openModal(nft) {
    modalImage.src = nft.image;
    modalName.textContent = nft.name || 'Unnamed Kaiju';
    modalDetails.textContent = nft.details || 'No details available';
    modal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Typing effect for hero text
function typeText() {
    const text = "Kaijus Roaming the Neon Streets of Japan";
    const typingElement = document.getElementById('typing-text');
    let i = 0;
    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            setTimeout(() => {
                typingElement.textContent = '';
                i = 0;
                type();
            }, 2000);
        }
    }
    type();
}

// Scroll-triggered animations
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            el.classList.add('visible');
        }
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax background effect
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Initialize
window.onload = () => {
    loadGallery();
    typeText();
    window.addEventListener('scroll', handleScroll);
};