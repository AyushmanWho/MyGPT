export async function sendMessage(message) {

    const response = await fetch("https://census-expensive-button-scanned.trycloudflare.com/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message,
        }),
    });

    const data = await response.json();

    return data.response;
}