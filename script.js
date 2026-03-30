let materials = [];

function addMaterial() {
    const container = document.getElementById("materials");

    const div = document.createElement("div");

    div.innerHTML = `
        Weight (kg): <input type="number" class="weight" />
        Strength (%): <input type="number" class="strength" />
        <br/><br/>
    `;

    container.appendChild(div);
}

function calculate() {
    const weights = document.querySelectorAll(".weight");
    const strengths = document.querySelectorAll(".strength");

    let totalWeight = 0;
    let weightedSum = 0;

    for (let i = 0; i < weights.length; i++) {
        let w = parseFloat(weights[i].value);
        let s = parseFloat(strengths[i].value);

        if (!isNaN(w) && !isNaN(s)) {
            totalWeight += w;
            weightedSum += w * s;
        }
    }

    let result = weightedSum / totalWeight;

    document.getElementById("result").innerText =
        "Final Strength: " + result.toFixed(2) + "%";
}
