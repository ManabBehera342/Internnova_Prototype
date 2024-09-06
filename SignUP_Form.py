import streamlit as st
import json
import os

# Directory where you want to store the JSON file
directory = 'ManabBehera342/Listing_App'
os.makedirs(directory, exist_ok=True)  # Ensure the directory exists

# File path for the JSON file
json_path = os.path.join(directory, 'users_data.json')

# Function to save data to a JSON file
def save_data(name, email, password):
    # Initialize users as an empty list
    users = []

    # Check if the JSON file exists and is not empty
    if os.path.exists(json_path):
        try:
            with open(json_path, 'r') as f:
                users = json.load(f)
                # If the file is empty or not a list, reinitialize users
                if not isinstance(users, list):
                    users = []
        except json.JSONDecodeError:
            # Handle case where JSON file is empty or malformed
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
