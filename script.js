// Add a new material row
function addMaterial(weight = "", strength = "") {
    const container = document.getElementById("materials");

    const row = document.createElement("div");
    row.className = "material-row";

    row.innerHTML = `
        <input type="number" class="weight" placeholder="Weight (kg)" value="${weight}" />
        <input type="number" class="strength" placeholder="Strength (%)" value="${strength}" />
        <button class="remove-btn" onclick="removeMaterial(this)">⛔️</button>
    `;

    container.appendChild(row);
}

// Remove a specific row
function removeMaterial(button) {
    button.parentElement.remove();
}

// Clear all materials + result
function clearAll() {
    document.getElementById("materials").innerHTML = "";
    document.getElementById("result").innerText = "";
}

// Calculate weighted average strength
function calculate() {
    const weights = document.querySelectorAll(".weight");
    const strengths = document.querySelectorAll(".strength");

    let totalWeight = 0;
    let weightedSum = 0;

    for (let i = 0; i < weights.length; i++) {
        let w = parseFloat(weights[i].value);
        let s = parseFloat(strengths[i].value);

        // Validation
        if (isNaN(w) || isNaN(s)) {
            alert("Please fill all fields correctly.");
            return;
        }

        if (w <= 0) {
            alert("Weight must be greater than 0.");
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

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // Save preference
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
}

// Initialize app on load
window.onload = () => {
    // Add first material row
    addMaterial();

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }
};
