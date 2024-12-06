// Adding dynamic header and footer using JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Global Header
    const header = `
        <header style="background-color: #a6262b;">
            <h1>Welcome to the Atari Store</h1>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="Atari-CX2600-HS.html">"Heavy Sixer" CX2600</a>
                <a href="Atari-2600.html">Atari 2600</a>
                <a href="Atari-2600-jr.html">Atari 2600 Jr</a>
                <a href="shop.html">Shop</a>
                <a href="contact.html">Contact</a>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', header);

    // Global Footer
    const footer = `
        <footer style="background-color: #a6262b;">
            <div class="footer-content">
                <p>&copy; 2024 Atari. All Rights Reserved.</p>
                <div class="footer-links">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact Us</a>
                </div>
                <div class="social-media">
                    <a href="#" class="social-icon">Facebook</a>
                    <a href="#" class="social-icon">Twitter</a>
                    <a href="#" class="social-icon">Instagram</a>
                </div>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
});

function toggleDescription() {
    var description = document.getElementById("atariDescription");
    var button = document.getElementById("toggleDescriptionBtn");
    if (description.style.display === "none") {
        description.style.display = "block";
        button.innerHTML = "Hide Description";
    } else {
        description.style.display = "none";
        button.innerHTML = "Golden Age of Games";
    }
}

