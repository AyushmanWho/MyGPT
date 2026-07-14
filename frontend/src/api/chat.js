export async function sendMessage(message) {
    const response = await fetch("https://mygpt-gujv.onrender.com/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        throw new Error("Backend request failed");
    }

    const data = await response.json();
    return data.response;
}