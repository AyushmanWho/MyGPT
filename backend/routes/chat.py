from fastapi import APIRouter
from models.chat import ChatRequest

router = APIRouter()

@router.post("/chat")
def chat(request: ChatRequest):
    return {
        "response": f"You said: {request.message}"
    }