const rating_cards = document.querySelectorAll(".ratings span");
const botao = document.querySelector(".botao");
const rate_point = document.getElementById("rate");
const rating_selection = document.querySelector(".card_principal");
const card_obrigada = document.querySelector(".thank_selection");
const submit_btn = document.querySelector(".botao");

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", () => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove("checked")
        }
        rating_card.classList.add("checked");
        rate = rating_card.innerText;

    })
})

submit_btn.addEventListener("click", () => {
    if (rate) {
        rate_point.innerText = rate;
        rating_selection.classList.add("hidden");
        card_obrigada.classList.remove("hidden");
    }
})