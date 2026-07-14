import os

from ai.ollama_provider import OllamaProvider
from ai.gemini_provider import GeminiProvider


provider_name = os.getenv("AI_PROVIDER", "ollama").lower()

if provider_name == "gemini":
    provider = GeminiProvider()
else:
    provider = OllamaProvider()


def ask_ai(prompt: str):
    return provider.generate(prompt)