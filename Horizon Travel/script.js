/* script.js */

// 1. DATA: Indian Travel Packages
const packages = [
    { 
        id: 1, 
        title: "Majestic Kerala", 
        price: 28000, 
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800", 
        desc: "5 Days / 4 Nights",
        itinerary: [
            "Day 1: Arrival in Cochin - Transfer to Munnar.",
            "Day 2: Munnar Sightseeing (Tea Gardens, Mattupetty Dam).",
            "Day 3: Transfer to Thekkady - Periyar Wildlife Sanctuary.",
            "Day 4: Alleppey Houseboat Stay & Backwaters.",
            "Day 5: Departure from Cochin."
        ]
    },
    { 
        id: 2, 
        title: "Royal Rajasthan", 
        price: 38000, 
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800", 
        desc: "6 Days / 5 Nights",
        itinerary: [
            "Day 1: Arrival in Jaipur - Pink City Tour.",
            "Day 2: Jaipur Forts (Amber, Nahargarh) & Shopping.",
            "Day 3: Transfer to Jodhpur - Mehrangarh Fort.",
            "Day 4: Transfer to Udaipur via Ranakpur.",
            "Day 5: Udaipur City Palace & Lake Pichola Boat Ride.",
            "Day 6: Departure from Udaipur."
        ]
    },
    { 
        id: 3, 
        title: "Manali & Kasol Vibe", 
        price: 25000, 
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", 
        desc: "5 Days / 4 Nights",
        itinerary: [
            "Day 1: Arrival in Manali - Local Sightseeing.",
            "Day 2: Solang Valley Adventure Sports.",
            "Day 3: Rohtang Pass Excursion (Snow Point).",
            "Day 4: Transfer to Kasol - Manikaran Sahib.",
            "Day 5: Chalal Trek & Departure."
        ]
    },
    { 
        id: 4, 
        title: "Kashmir Paradise", 
        price: 55000, 
        img: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800", 
        desc: "6 Days / 5 Nights",
        itinerary: [
            "Day 1: Arrival Srinagar - Shikara Ride on Dal Lake.",
            "Day 2: Srinagar Local Sightseeing (Mughal Gardens).",
            "Day 3: Excursion to Gulmarg - Gondola Ride.",
            "Day 4: Excursion to Pahalgam - Betaab Valley.",
            "Day 5: Houseboat Stay in Srinagar.",
            "Day 6: Departure."
        ]
    },
    { 
        id: 5, 
        title: "Goa Beach & Party", 
        price: 30000, 
        img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", 
        desc: "5 Days / 4 Nights",
        itinerary: [
            "Day 1: Arrival Goa - Relax at Calangute Beach.",
            "Day 2: North Goa Tour (Fort Aguada, Baga, Anjuna).",
            "Day 3: South Goa Tour (Old Goa Churches, Mangueshi Temple).",
            "Day 4: Dudhsagar Waterfalls Trip / Leisure.",
            "Day 5: Shopping & Departure."
        ]
    },
    { 
        id: 6, 
        title: "Andaman Escape", 
        price: 62000, 
        img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800", 
        desc: "6 Days / 5 Nights",
        itinerary: [
            "Day 1: Arrival Port Blair - Cellular Jail Light & Sound.",
            "Day 2: Ferry to Havelock Island - Radhanagar Beach.",
            "Day 3: Elephant Beach Water Sports.",
            "Day 4: Transfer to Neil Island - Laxmanpur Beach.",
            "Day 5: Return to Port Blair - Shopping.",
            "Day 6: Departure."
        ]
    },
    { 
        id: 7, 
        title: "Golden Triangle", 
        price: 32000, 
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", 
        desc: "5 Days / 4 Nights",
        itinerary: [
            "Day 1: Delhi Sightseeing (Red Fort, Qutub Minar).",
            "Day 2: Transfer to Agra - Taj Mahal & Agra Fort.",
            "Day 3: Transfer to Jaipur via Fatehpur Sikri.",
            "Day 4: Jaipur City Tour (Hawa Mahal, City Palace).",
            "Day 5: Return to Delhi & Departure."
        ]
    }
];

// 2. CART LOGIC
let cart = JSON.parse(localStorage.getItem('travelCart')) || [];

function updateCartUI() {
    const badge = document.getElementById('cart-count');
    if(badge) badge.innerText = cart.length;
}

function addToCart(id) {
    const item = packages.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem('travelCart', JSON.stringify(cart));
    updateCartUI();
    alert("Added to cart!");
}

// 3. ITINERARY POPUP LOGIC
function showItinerary(id) {
    const pkg = packages.find(p => p.id === id);
    const modal = document.getElementById('itinerary-modal');
    const content = document.getElementById('modal-body');
    
    content.innerHTML = `
        <h2 style="color:var(--primary-burgundy); margin-bottom:10px;">${pkg.title}</h2>
        <h3 style="color:var(--secondary-red); margin-bottom:20px;">Price: ₹${pkg.price.toLocaleString()}</h3>
        <ul class="itinerary-list">
            ${pkg.itinerary.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button class="btn" style="width:100%; margin-top:20px;" onclick="addToCart(${pkg.id})">Book This Package</button>
    `;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('itinerary-modal').style.display = "none";
}

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    // -- Slider Logic (Only runs if slider exists) --
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000); // Change slide every 4 seconds
    }

    // -- Render Packages (Home or Destination Page) --
    const pkgContainer = document.getElementById('packages-container');
    if (pkgContainer) {
        pkgContainer.innerHTML = packages.map(pkg => `
            <div class="card">
                <div class="card-img" style="background-image: url('${pkg.img}')"></div>
                <div class="card-body">
                    <h3>${pkg.title}</h3>
                    <p style="color:#666;">${pkg.desc}</p>
                    <div class="price">₹${pkg.price.toLocaleString()}</div>
                    <div style="display:flex; gap:10px; margin-top:10px;">
                        <button class="btn-outline" onclick="showItinerary(${pkg.id})">View Itinerary</button>
                        <button class="btn" onclick="addToCart(${pkg.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
});