function addMaterial(weight = "", strength = "") {
    const container = document.getElementById("materials");

    const row = document.createElement("div");
    row.className = "material-row";

    row.innerHTML = `
        <input type="number" class="weight" placeholder="Weight (kg)" value="${weight}" />
        <input type="number" class="strength" placeholder="Strength (%)" value="${strength}" />
        <button class="remove-btn" onclick="this.parentElement.remove()">⛔️</button>
    `;

    container.appendChild(row);
}

function clearAll() {
    document.getElementById("materials").innerHTML = "";
    document.getElementById("result").innerText = "";
}

function calculate() {
    const weights = document.querySelectorAll(".weight");
    const strengths = document.querySelectorAll(".strength");

    let totalWeight = 0;
    let weightedSum = 0;

    for (let i = 0; i < weights.length; i++) {
        let w = parseFloat(weights[i].value);
        let s = parseFloat(strengths[i].value);

        if (isNaN(w) || isNaN(s)) {
            alert("Fill all fields correctly.");
            return;
        }

        totalWeight += w;
        weightedSum += w * s;
    }

    if (totalWeight === 0) {
        alert("Total weight cannot be zero.");
        return;
    }

    let result = weightedSum / totalWeight;

    document.getElementById("result").innerText =
        "Final Strength: " + result.toFixed(2) + "%";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Add first row on load
window.onload = () => {
    addMaterial();
};
