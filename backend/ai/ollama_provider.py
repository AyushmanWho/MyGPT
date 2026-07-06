import ollama
from .provider import AIProvider


class OllamaProvider(AIProvider):
    def __init__(self, model="llama3.2:3b"):
        self.model = model

    def generate(self, prompt: str) -> str:
        response = ollama.chat(
            model=self.model,
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
        )

        return response["message"]["content"]