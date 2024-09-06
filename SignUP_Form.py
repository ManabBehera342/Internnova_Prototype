import streamlit as st
import pandas as pd
import os
#python -m streamlit run G:/Python_Labs/SIH_2024/signup.py
# Function to save data to a CSV file
def save_data(name, email, password):
    # Define the file path
    file_path = 'User_data.csv'
    
    # Check if the file exists
    if os.path.exists(file_path):
        # Load existing data
        df = pd.read_csv(file_path)
    else:
        # Create a new DataFrame if the file doesn't exist
        df = pd.DataFrame(columns=['Name', 'Email', 'Password'])

    # Add the new entry
    new_entry = pd.DataFrame({'Name': [name], 'Email': [email], 'Password': [password]})
    df = df.append(new_entry, ignore_index=True)

    # Save the DataFrame back to the CSV file
    df.to_csv(file_path, index=False)

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

# Display existing users (optional)
if os.path.exists('users_data.csv'):
    st.write("### Registered Users")
    st.dataframe(pd.read_csv('users_data.csv'))
