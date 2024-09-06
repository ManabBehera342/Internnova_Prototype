import streamlit as st
import pandas as pd
import os

# File path for the CSV file
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

    # Add the new entry
    new_entry = pd.DataFrame({'Name': [name], 'Email': [email], 'Password': [password]})
    df = df.append(new_entry, ignore_index=True)

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

# Display existing users (if the CSV file exists and has data)
if os.path.exists(csv_path) and pd.read_csv(csv_path).shape[0] > 0:
    st.write("### Registered Users")
    st.dataframe(pd.read_csv(csv_path))
else:
    st.write("No users registered yet.")

