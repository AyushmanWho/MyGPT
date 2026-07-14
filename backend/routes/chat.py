from fastapi import APIRouter
from models.chat import ChatRequest
from services.ai_service import ask_ai
import traceback

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):
    try:
        answer = ask_ai(request.message)
        return {"response": answer}
    except Exception:
        traceback.print_exc()
        raise