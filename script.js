document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("prompt");

    if (!input) return;

    const placeholders = [
        "Message WellXAI",
        "Ask anything...",
        "Research with WellXAI",
        "Build websites",
        "Generate code",
        "Create images",
        "Translate languages",
        "Analyze documents",
        "Write emails",
        "Summarize files",
        "Plan your business"
    ];

    let current = 0;

    function changePlaceholder() {
        if (document.activeElement !== input) {
            input.placeholder = placeholders[current];
            current = (current + 1) % placeholders.length;
        }
    }

    changePlaceholder();

    setInterval(changePlaceholder, 2500);

});
