const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check if user has a preference saved
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.textContent = "☀️Light Mode";
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if(body.classList.contains('dark-theme')) {
        themeBtn.textContent = "☀️Light Mode";
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = "🌙Dark Mode";
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//history toggle
function toggleHistory() {
    const moreText = document.getElementById("moreHistory");
    const btn = document.getElementById("historyBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerText = "Read More";
    }
}

