const textarea = document.getElementById("prompt");

const placeholders = [
    "Message WellXAI...",
    "Ask anything...",
    "Research with WellXAI...",
    "Generate ideas...",
    "Write code...",
    "Analyze documents..."
];

let index = 0;

setInterval(() => {
    index = (index + 1) % placeholders.length;
    textarea.setAttribute("placeholder", placeholders[index]);
}, 2500);
