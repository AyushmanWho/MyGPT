from dotenv import load_dotenv
load_dotenv()

import os

print("Provider:", os.getenv("AI_PROVIDER"))
print("Key exists:", bool(os.getenv("GEMINI_API_KEY")))

from fastapi import FastAPI
...

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.chat import router as chat_router

app = FastAPI(title="MyGPT API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://my-gpt-zeta-cyan.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)

@app.get("/")
def root():
    return {"message": "MyGPT Backend Running 🚀"}