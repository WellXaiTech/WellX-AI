const prompt = document.getElementById("prompt");

const placeholders = [
    "Message WellXAI...",
    "Ask anything...",
    "Research with WellXAI...",
    "Write code...",
    "Generate ideas..."
];

let index = 0;

setInterval(() => {
    index = (index + 1) % placeholders.length;
    prompt.placeholder = placeholders[index];
}, 2500);
