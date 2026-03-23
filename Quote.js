const quotes = [
"The only way to do great work is to love what you do.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"In the end, it's not the years in your life that count. It's the life in your years."
];

let quoteText = document.getElementById("quotes");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote;
});