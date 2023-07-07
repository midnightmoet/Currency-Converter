const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
  // console.log('Fetching...'); // Debugging
  fetch(
    `https://v6.exchangerate-api.com/v6/6d618a2ccbe6275e5b3e8acd/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      //console.log(data); // Debugging
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate); // Debugging
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
worthSecondEl.addEventListener("input", updateRate);

// API Key: 6d618a2ccbe6275e5b3e8acd
