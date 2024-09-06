import streamlit as st
import json
from github import Github
import os

# GitHub access token and repo details
GITHUB_TOKEN = st.secrets["GITHUB_TOKEN"]  # Store your token securely
REPO_NAME = "ManabBehera342/Listing_App"
FILE_PATH = "users_data.json"
BRANCH = "main"  # The branch where you want to commit changes

# Authenticate to GitHub
g = Github(GITHUB_TOKEN)
repo = g.get_repo(REPO_NAME)

# Function to get the file's SHA (needed to update the file)
def get_file_sha(repo, file_path):
    try:
        contents = repo.get_contents(file_path, ref=BRANCH)
        return contents.sha
    except Exception as e:
        return None

# Function to save data to a JSON file on GitHub
def save_data_to_github(name, email, password):
    users = []

    try:
        # Fetch existing data from GitHub
        contents = repo.get_contents(FILE_PATH, ref=BRANCH)
        users = json.loads(contents.decoded_content.decode())
    except Exception as e:
        st.error(f"Error fetching data: {e}")

    # Add new user data
    users.append({'Name': name, 'Email': email, 'Password': password})

    # Convert the list back to JSON
    updated_data = json.dumps(users, indent=4)

    # Get the file's SHA for updating
    sha = get_file_sha(repo, FILE_PATH)

    # Commit changes to GitHub
    try:
        repo.update_file(
            FILE_PATH,
            "Update users data",
            updated_data,
            sha,
            branch=BRANCH
        )
    except Exception as e:
        st.error(f"Error updating file on GitHub: {e}")

# Streamlit app
st.title("Sign Up Form")

# Input fields for the sign-up form
name = st.text_input("Name")
email = st.text_input("Email")
password = st.text_input("Password", type="password")

# Submit button
if st.button("Sign Up"):
    if name and email and password:
        save_data_to_github(name, email, password)
        st.success("Sign up successful!")
    else:
        st.error("Please fill out all fields.")
