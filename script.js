// ==========================
// WELLXAI v1
// ==========================

const textarea = document.getElementById("prompt");

const placeholders = [
    "Message WellXAI...",
    "Ask anything...",
    "Research with WellXAI...",
    "Generate ideas...",
    "Write code...",
    "Analyze documents..."
];

let current = 0;

function changePlaceholder() {
    current++;

    if (current >= placeholders.length) {
        current = 0;
    }

    textarea.placeholder = placeholders[current];
}

setInterval(changePlaceholder, 2500);

// Auto grow textarea
textarea.addEventListener("input", () => {

    textarea.style.height = "auto";

    textarea.style.height = textarea.scrollHeight + "px";

});

// Enter to send (Shift+Enter = new line)
textarea.addEventListener("keydown", function(e){

    if(e.key === "Enter" && !e.shiftKey){

        e.preventDefault();

        if(textarea.value.trim() !== ""){

            alert("WellXAI Chat coming soon 🚀");

            textarea.value = "";

            textarea.style.height = "120px";

        }

    



