import streamlit as st
import pandas as pd
import os

# File path for the CSV file (local path to where you want to save the file)
csv_path = 'User_data.csv'

# Function to save data to a CSV file
def save_data(name, email, password):
    # Check if the file exists
    if os.path.exists(csv_path):
        # Load existing data
        df = pd.read_csv(csv_path)
    else:
        # Create a new DataFrame if the file doesn't exist
        df = pd.DataFrame(columns=['Name', 'Email', 'Password'])

    # Create a DataFrame with the new entry
    new_entry = pd.DataFrame({'Name': [name], 'Email': [email], 'Password': [password]})
    
    # Concatenate the old DataFrame with the new entry
    df = pd.concat([df, new_entry], ignore_index=True)

    # Save the DataFrame back to the CSV file
    df.to_csv(csv_path, index=False)

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
