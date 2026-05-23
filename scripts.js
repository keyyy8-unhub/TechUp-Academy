const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')) {
        themeBtn.innerText = "☀️ Mode Terang";
    } else {
        themeBtn.innerText = "🌙 Mode Gelap";
    }

    console.log("tes")
});

const greeting = document.getElementById('greeting');
const jam = new Date().getHours();

greeting.innerText = jam

if (jam < 4) {
    greeting.innerText = "Selamat Pagi, Semangat Koding";
} else if (jam <18) {
    greeting.innerText = "Selamat Siang, Jangan Lupa Istirahat!";
} else {
    greeting.innerText = "Selamat Malam, Coding Dulu Yuk!";
}