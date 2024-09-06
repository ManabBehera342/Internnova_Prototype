import streamlit as st
import json
import os

# File path for the JSON file (same directory as the script)
json_path = 'users_data.json'

# Function to save data to a JSON file
def save_data(name, email, password):
    if os.path.exists(json_path):
        with open(json_path, 'r') as f:
            users = json.load(f)
    else:
        users = []

    # Add new user data
    users.append({'Name': name, 'Email': email, 'Password': password})

    # Save updated users list back to the JSON file
    with open(json_path, 'w') as f:
        json.dump(users, f, indent=4)

# Streamlit app
st.title("Sign Up Form")

# Input fields for the sign-up form
name = st.text_input("Name")
email = st.text_input("Email")
password = st.text_input("Password", type="password")

# Submit button
if st.button("Sign Up"):
    if name and email and password:
        save_data(name, email, password)
        st.success("Sign up successful!")
    else:
        st.error("Please fill out all fields.")
