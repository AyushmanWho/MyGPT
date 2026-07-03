import streamlit as st
import ollama

st.set_page_config(page_title="MyGPT")

st.title("🤖 MyGPT")

if "messages" not in st.session_state:
    st.session_state.messages = []

for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        st.markdown(msg["content"])

prompt = st.chat_input("Ask me anything...")

if prompt:
    st.session_state.messages.append({"role": "user", "content": prompt})

    with st.chat_message("user"):
        st.markdown(prompt)

    response = ollama.chat(
        model="llama3.2:3b",
        messages=st.session_state.messages
    )

    reply = response["message"]["content"]

    st.session_state.messages.append({"role": "assistant", "content": reply})

    with st.chat_message("assistant"):
        st.markdown(reply)