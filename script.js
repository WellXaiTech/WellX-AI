const prompt = document.getElementById("prompt");

if (prompt) {

    const placeholders = [
        "Message WellXAI...",
        "Ask anything...",
        "How can I help you today?",
        "Research any topic...",
        "Write code...",
        "Generate ideas...",
        "Translate languages...",
        "Summarize documents...",
        "Analyze data...",
        "Create an image...",
        "Explain anything...",
        "Solve math problems...",
        "Plan your project...",
        "Write an email...",
        "Learn something new...",
        "Andika ujumbe...",
        "Uliza chochote...",
        "Écrivez un message...",
        "Escribe un mensaje...",
        "Schreibe eine Nachricht...",
        "اكتب رسالة...",
        "输入消息...",
        "メッセージを入力...",
        "메시지를 입력하세요..."
    ];

    let last = -1;

    function changePlaceholder() {
        let next;

        do {
            next = Math.floor(Math.random() * placeholders.length);
        } while (next === last);

        last = next;
        prompt.placeholder = placeholders[next];
    }

    changePlaceholder();
    setInterval(changePlaceholder, 2500);

}
