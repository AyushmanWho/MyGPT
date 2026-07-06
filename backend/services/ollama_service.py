from ai.ollama_provider import OllamaProvider

provider = OllamaProvider()


def ask_ollama(prompt: str):
    return provider.generate(prompt)