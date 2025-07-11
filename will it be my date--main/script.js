(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
let size = 1;
let noClickCount = 0;
const noTexts = [
    "No",
    "Are you sure?",
    "I will be very very sad....",
    "Ok, I'll stop insisting"
];

function handleNoClick() {
    // Cambia el texto del botón "No"
    if (noClickCount < noTexts.length) {
        noBtn.textContent = noTexts[noClickCount];
        noClickCount++;
    }

    // Mueve el botón "No" a una posición aleatoria dentro del contenedor
    const container = document.querySelector('.buttons');
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxLeft = container.offsetWidth - btnWidth;
    const maxTop = container.offsetHeight - btnHeight;

    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${left}px`;
    noBtn.style.top = `${top}px`;
    noBtn.style.zIndex = "2"; // <-- Asegura que el botón "No" esté por encima

    // Agranda el botón "Sí" pero limita el tamaño máximo
    size = Math.min(size + 0.3, 3.5); // Ahora puede crecer hasta 3.5 veces su tamaño
    yesBtn.style.transform = `scale(${size})`;
    yesBtn.style.zIndex = "1"; // El botón "Sí" queda debajo
}

function handleYesClick() {
    window.location.href = "respuesta.html";
}