// ===== STYLESPHERE LUXURY - MAIN JAVASCRIPT =====

// Luxury Product Database
const luxuryDatabase = {
    perfumes: [
        {
            id: 1,
            name: "Tom Ford Noir Extreme Parfum",
            category: "perfume",
            brand: "Tom Ford",
            price: "$485",
            rating: 4.9,
            description: "Luxurious oriental scent with notes of amber, vanilla, and saffron. The epitome of evening elegance.",
            notes: ["Amber", "Vanilla", "Saffron", "Cardamom"],
            match: 98,
            occasion: ["Evening", "Formal", "Special Events"],
            personality: ["Classic", "Modern"],
            image: "perfume-1"
        },
        {
            id: 2,
            name: "Creed Aventus Cologne",
            category: "perfume",
            brand: "Creed",
            price: "$595",
            rating: 4.9,
            description: "Iconic fragrance with pineapple, blackcurrant, and birch. The ultimate confidence elixir.",
            notes: ["Pineapple", "Blackcurrant", "Birch", "Musk"],
            match: 95,
            occasion: ["Business", "Daytime", "Confidence"],
            personality: ["Modern", "Sporty"],
            image: "perfume-2"
        },
        {
            id: 3,
            name: "Maison Francis Kurkdjian Baccarat Rouge 540",
            category: "perfume",
            brand: "MFK",
            price: "$325",
            rating: 4.8,
            description: "Extraordinary floral-woody scent with jasmine and saffron. A modern masterpiece.",
            notes: ["Jasmine", "Saffron", "Amberwood", "Cedar"],
            match: 92,
            occasion: ["Luxury", "Evening", "Signature"],
            personality: ["Modern", "Avant-Garde"],
            image: "perfume-3"
        }
    ],
    
    clothing: [
        {
            id: 4,
            name: "Brioni Roma Bespoke Suit",
            category: "clothing",
            brand: "Brioni",
            price: "$8,500",
            rating: 5.0,
            description: "Handcrafted bespoke suit using the finest Italian fabrics. Perfection in tailoring.",
            material: "Super 180s Italian Wool",
            match: 99,
            occasion: ["Business", "Formal", "Executive"],
            personality: ["Classic", "Minimalist"],
            image: "suit-1"
        },
        {
            id: 5,
            name: "Loro Piana Cashmere Overcoat",
            category: "clothing",
            brand: "Loro Piana",
            price: "$4,200",
            rating: 4.9,
            description: "Luxurious cashmere overcoat from the finest Mongolian cashmere. Ultimate winter elegance.",
            material: "100% Mongolian Cashmere",
            match: 96,
            occasion: ["Winter", "Formal", "Luxury"],
            personality: ["Classic", "Minimalist"],
            image: "coat-1"
        },
        {
            id: 6,
            name: "Kiton Silk-Cashmere Blazer",
            category: "clothing",
            brand: "Kiton",
            price: "$6,800",
            rating: 4.9,
            description: "Handmade blazer using silk-cashmere blend. Unparalleled comfort and drape.",
            material: "Silk-Cashmere Blend",
            match: 94,
            occasion: ["Business Casual", "Evening", "Luxury"],
            personality: ["Modern", "Classic"],
            image: "blazer-1"
        }
    ],
    
    shoes: [
        {
            id: 7,
            name: "Edward Green Galway Boots",
            category: "shoes",
            brand: "Edward Green",
            price: "$1,850",
            rating: 4.9,
            description: "Handmade country boots in premium cordovan leather. British craftsmanship at its finest.",
            material: "Cordovan Leather",
            match: 97,
            occasion: ["Country", "Winter", "Heritage"],
            personality: ["Classic", "Sporty"],
            image: "boots-1"
        },
        {
            id: 8,
            name: "John Lobb City II Oxford",
            category: "shoes",
            brand: "John Lobb",
            price: "$2,450",
            rating: 5.0,
            description: "Parisian bespoke Oxford shoes. The pinnacle of formal footwear.",
            material: "Box Calf Leather",
            match: 98,
            occasion: ["Formal", "Business", "Black Tie"],
            personality: ["Classic", "Minimalist"],
            image: "oxford-1"
        },
        {
            id: 9,
            name: "Santoni Goodyear Welted Loafers",
            category: "shoes",
            brand: "Santoni",
            price: "$1,250",
            rating: 4.8,
            description: "Italian-made loafers with hand-painted patina. Casual elegance defined.",
            material: "Calfskin Leather",
            match: 93,
            occasion: ["Casual", "Summer", "Smart Casual"],
            personality: ["Modern", "Classic"],
            image: "loafers-1"
        }
    ],
    
    accessories: [
        {
            id: 10,
            name: "Cartier Tank Louis Watch",
            category: "accessories",
            brand: "Cartier",
            price: "$28,500",
            rating: 5.0,
            description: "Iconic rectangular watch with manual movement. A timeless investment piece.",
            material: "18K Yellow Gold",
            match: 99,
            occasion: ["Luxury", "Investment", "Heirloom"],
            personality: ["Classic", "Minimalist"],
            image: "watch-1"
        },
        {
            id: 11,
            name: "Hermès Hapi Briefcase",
            category: "accessories",
            brand: "Hermès",
            price: "$12,500",
            rating: 4.9,
            description: "Hand-stitched briefcase in Clemence leather. The ultimate executive accessory.",
            material: "Clemence Leather",
            match: 96,
            occasion: ["Business", "Executive", "Luxury"],
            personality: ["Classic", "Modern"],
            image: "briefcase-1"
        },
        {
            id: 12,
            name: "Montblanc Meisterstück Solitaire",
            category: "accessories",
            brand: "Montblanc",
            price: "$2,800",
            rating: 4.8,
            description: "Precious resin fountain pen with gold nib. For the discerning writer.",
            material: "Precious Resin & Gold",
            match: 94,
            occasion: ["Writing", "Gift", "Executive"],
            personality: ["Classic", "Minimalist"],
            image: "pen-1"
        }
    ]
};

// User Profile
let userProfile = {
    name: "Alexander Sterling",
    gender: "gentleman",
    personality: ["classic", "minimalist"],
    occasion: "business",
    budget: "2000-10000",
    styleNotes: "Prefer deep navy, charcoal, and burgundy. Love Italian wool, cashmere, and fine leather.",
    styleScore: 92
};

// DOM Elements
const recommendationsContainer = document.getElementById('recommendationsContainer');
const activityList = document.getElementById('activityList');
const profileForm = document.getElementById('styleProfileForm');
const themeToggle = document.getElementById('themeToggle');
const filterBtn = document.getElementById('filterBtn');
const refreshBtn = document.getElementById('refreshBtn');
const profileNameDisplay = document.getElementById('profileNameDisplay');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Load initial data
    loadUserProfile();
    loadRecommendations();
    loadInitialActivities();
    
    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filter button
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            showNotification('Filter feature coming soon!', 'info');
        });
    }
    
    // Refresh button
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
            setTimeout(() => {
                loadRecommendations();
                refreshBtn.querySelector('i').className = 'fas fa-sync';
                showNotification('Recommendations refreshed!', 'success');
            }, 1000);
        });
    }
    
    // Form submission
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            updateUserProfile();
            loadRecommendations();
            showNotification('Profile updated successfully!', 'success');
        });
    }
    
    // Personality chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('active');
        });
    });
    
    // Gender options
    document.querySelectorAll('.gender-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.gender-option').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const icon = themeToggle.querySelector('i');
    
    document.body.classList.remove('dark-theme', 'light-theme');
    
    if (isDark) {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        icon.className = 'fas fa-sun';
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        icon.className = 'fas fa-moon';
    }
}

function loadUserProfile() {
    // Try to load from localStorage
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
        updateProfileDisplay();
    }
}

function updateUserProfile() {
    // Get form values
    const nameInput = document.querySelector('.luxury-input[placeholder="Full Name"]');
    const occasionSelect = document.getElementById('occasionSelect');
    const budgetSelect = document.getElementById('budgetSelect');
    const stylePreferences = document.getElementById('stylePreferences');
    
    // Get selected personality traits
    const selectedPersonality = Array.from(document.querySelectorAll('.chip.active'))
        .map(chip => chip.getAttribute('data-value'));
    
    // Get selected gender
    const selectedGender = document.querySelector('.gender-option.active');
    const gender = selectedGender ? selectedGender.getAttribute('data-value') : 'gentleman';
    
    // Update user profile
    userProfile = {
        name: nameInput ? nameInput.value : userProfile.name,
        gender: gender,
        personality: selectedPersonality.length > 0 ? selectedPersonality : userProfile.personality,
        occasion: occasionSelect ? occasionSelect.value : userProfile.occasion,
        budget: budgetSelect ? budgetSelect.value : userProfile.budget,
        styleNotes: stylePreferences ? stylePreferences.value : userProfile.styleNotes,
        styleScore: calculateStyleScore()
    };
    
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    
    // Update display
    updateProfileDisplay();
    
    // Add activity
    addActivity('Updated style profile', 'profile');
}

function updateProfileDisplay() {
    // Update name display
    if (profileNameDisplay) {
        profileNameDisplay.textContent = userProfile.name;
    }
    
    // Update style score
    const scoreValue = document.querySelector('.score-value');
    const scoreFill = document.querySelector('.score-fill');
    
    if (scoreValue) scoreValue.textContent = `${userProfile.styleScore}%`;
    if (scoreFill) scoreFill.style.width = `${userProfile.styleScore}%`;
}

function calculateStyleScore() {
    let score = 50; // Base score
    
    // Add points for personality traits
    score += userProfile.personality.length * 10;
    
    // Add points for complete profile
    if (userProfile.name && userProfile.name.trim() !== '') score += 10;
    if (userProfile.styleNotes && userProfile.styleNotes.trim() !== '') score += 15;
    if (userProfile.budget) score += 10;
    if (userProfile.occasion) score += 5;
    
    // Cap at 100
    return Math.min(score, 100);
}

function loadRecommendations() {
    // Clear container
    if (recommendationsContainer) {
        recommendationsContainer.innerHTML = '';
        
        // Get all products
        let allProducts = [];
        Object.values(luxuryDatabase).forEach(category => {
            allProducts = allProducts.concat(category);
        });
        
        // Calculate match scores
        allProducts.forEach(product => {
            product.matchScore = calculateProductMatchScore(product);
        });
        
        // Sort by match score (highest first)
        allProducts.sort((a, b) => b.matchScore - a.matchScore);
        
        // Take top 6 products
        const topProducts = allProducts.slice(0, 6);
        
        // Display products
        topProducts.forEach(product => {
            const productCard = createProductCard(product);
            recommendationsContainer.appendChild(productCard);
        });
        
        // Add fade-in animation
        recommendationsContainer.classList.add('fade-in');
        setTimeout(() => {
            recommendationsContainer.classList.remove('fade-in');
        }, 500);
    }
}

function calculateProductMatchScore(product) {
    let score = 50; // Base score
    
    // Match based on personality
    userProfile.personality.forEach(trait => {
        if (product.personality && product.personality.includes(trait)) {
            score += 15;
        }
    });
    
    // Match based on occasion
    if (product.occasion && product.occasion.includes(userProfile.occasion)) {
        score += 20;
    }
    
    // Match based on budget
    const budgetRange = userProfile.budget.split('-');
    const minBudget = parseInt(budgetRange[0]) || 2000;
    const maxBudget = parseInt(budgetRange[1]) || 10000;
    
    const productPrice = parseInt(product.price.replace('$', '').replace(',', ''));
    
    if (productPrice >= minBudget && productPrice <= maxBudget) {
        score += 25;
    } else if (productPrice <= maxBudget * 1.5) {
        score += 10;
    }
    
    // Cap score
    return Math.min(Math.max(score, 0), 100);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    card.dataset.id = product.id;
    card.dataset.category = product.category;
    
    // Determine icon based on category
    let icon = 'fa-gem';
    if (product.category === 'perfume') icon = 'fa-wine-bottle';
    if (product.category === 'clothing') icon = 'fa-user-tie';
    if (product.category === 'shoes') icon = 'fa-shoe-prints';
    
    // Determine match color
    let matchColor = '#D4AF37'; // Gold
    if (product.matchScore >= 90) matchColor = '#50C878'; // Emerald
    if (product.matchScore < 70) matchColor = '#FF6B6B'; // Red
    
    card.innerHTML = `
        <div class="product-header">
            <div class="product-icon" style="color: ${matchColor};">
                <i class="fas ${icon}"></i>
            </div>
            <div class="product-match">
                <span class="match-badge" style="background: ${matchColor};">${product.matchScore}% Match</span>
            </div>
        </div>
        
        <div class="product-content">
            <div class="product-brand">${product.brand}</div>
            <h4 class="product-name">${product.name}</h4>
            <p class="product-description">${product.description}</p>
            
            <div class="product-details">
                <div class="product-price">${product.price}</div>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                </div>
            </div>
            
            <div class="product-tags">
                ${product.occasion ? product.occasion.slice(0, 2).map(occ => 
                    `<span class="product-tag">${occ}</span>`
                ).join('') : ''}
            </div>
        </div>
        
        <div class="product-actions">
            <button class="btn-view" onclick="viewProduct(${product.id})">
                <i class="fas fa-eye"></i> View Details
            </button>
            <button class="btn-save" onclick="saveProduct(${product.id})">
                <i class="far fa-heart"></i> Save
            </button>
        </div>
    `;
    
    return card;
}

function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

function loadInitialActivities() {
    if (activityList) {
        const initialActivities = [
            { action: 'Viewed Tom Ford Noir Extreme', time: '2 hours ago', icon: 'fa-eye' },
            { action: 'Saved Brioni Bespoke Suit', time: 'Yesterday', icon: 'fa-heart' },
            { action: 'Updated style preferences', time: '2 days ago', icon: 'fa-sync-alt' }
        ];
        
        initialActivities.forEach(activity => {
            addActivity(activity.action, activity.icon, activity.time, false);
        });
    }
}

function addActivity(action, iconType, time = 'Just now', animate = true) {
    if (activityList) {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        if (animate) {
            activityItem.classList.add('fade-in');
        }
        
        // Determine icon
        let icon = 'fa-eye';
        if (iconType === 'heart' || action.includes('Saved')) icon = 'fa-heart';
        if (iconType === 'sync' || action.includes('Updated')) icon = 'fa-sync-alt';
        if (iconType === 'profile') icon = 'fa-user-edit';
        
        activityItem.innerHTML = `
            <div class="activity-icon gold-bg">
                <i class="fas ${icon}"></i>
            </div>
            <div class="activity-details">
                <h5>${action}</h5>
                <p>${time}</p>
            </div>
        `;
        
        // Add to top of activity list
        if (activityList.firstChild) {
            activityList.insertBefore(activityItem, activityList.firstChild.nextSibling);
        } else {
            activityList.appendChild(activityItem);
        }
        
        // Limit to 5 activities
        const activities = activityList.querySelectorAll('.activity-item');
        if (activities.length > 5) {
            activityList.removeChild(activities[activities.length - 1]);
        }
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'luxury-notification';
    
    // Set type-specific styles
    let borderColor = '#D4AF37';
    let icon = 'fa-info-circle';
    
    if (type === 'success') {
        borderColor = '#50C878';
        icon = 'fa-check-circle';
    } else if (type === 'error') {
        borderColor = '#FF6B6B';
        icon = 'fa-exclamation-circle';
    }
    
    notification.style.borderLeftColor = borderColor;
    
    notification.innerHTML = `
        <i class="fas ${icon}" style="color: ${borderColor}; font-size: 1.2rem;"></i>
        <div>
            <div style="font-weight: 600; margin-bottom: 0.2rem;">StyleSphere</div>
            <div>${message}</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Global functions for product interactions
function viewProduct(productId) {
    // Find product
    let product = null;
    Object.values(luxuryDatabase).forEach(category => {
        const found = category.find(p => p.id === productId);
        if (found) product = found;
    });
    
    if (product) {
        showNotification(`Viewing ${product.name} by ${product.brand}`, 'info');
        addActivity(`Viewed ${product.name}`, 'eye');
        
        // In a real app, you would show a detailed modal or navigate to product page
        console.log('Product viewed:', product);
    }
}

function saveProduct(productId) {
    // Find product
    let product = null;
    Object.values(luxuryDatabase).forEach(category => {
        const found = category.find(p => p.id === productId);
        if (found) product = found;
    });
    
    if (product) {
        // Get saved products from localStorage
        let savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
        
        // Check if already saved
        if (!savedProducts.includes(productId)) {
            savedProducts.push(productId);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
            
            showNotification(`Saved ${product.name} to your collection`, 'success');
            addActivity(`Saved ${product.name}`, 'heart');
            
            // Update button
            const button = event.target.closest('.btn-save');
            if (button) {
                button.innerHTML = '<i class="fas fa-heart"></i> Saved';
                button.style.color = '#FF6B6B';
            }
        } else {
            showNotification('Already saved to your collection', 'info');
        }
    }
}

// Make functions globally available
window.viewProduct = viewProduct;
window.saveProduct = saveProduct;

// Initialize floating elements animation
function initFloatingElements() {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 2}s`;
    });
}

// Call initialization
initFloatingElements();
