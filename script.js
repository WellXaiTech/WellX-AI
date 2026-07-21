// =========================
// WELLXAI - SCRIPT.JS
// =========================

const input = document.getElementById("prompt");

const placeholders = [
    "Message WellXAI...",
    "Ask anything...",
    "Research with WellXAI...",
    "Generate code...",
    "Build websites...",
    "Translate languages...",
    "Analyze documents...",
    "Create images...",
    "Write emails...",
    "Solve problems..."
];

let index = 0;

function changePlaceholder() {

    input.placeholder = placeholders[index];

    index++;

    if (index >= placeholders.length) {
        index = 0;
    }

}

changePlaceholder();

setInterval(changePlaceholder, 2500);

console.log("✅ WellXAI Loaded Successfully");
