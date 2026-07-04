from fastapi import APIRouter
from models.chat import ChatRequest
from services.ollama_service import ask_ollama

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    answer = ask_ollama(request.message)

    return {
        "response": answer
    }