import streamlit as st
import pandas as pd
import os

# File path for the CSV file
csv_path = 'users_data.csv'

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

# Display existing users (if the CSV file exists and has data)
try:
    if os.path.exists(csv_path):
        df = pd.read_csv(csv_path)
        if not df.empty:
            st.write("### Registered Users")
            st.dataframe(df)
        else:
            st.write("No users registered yet.")
    else:
        st.write("No users registered yet.")
except pd.errors.EmptyDataError:
    st.error("The CSV file is empty or cannot be read.")
except pd.errors.ParserError:
    st.error("Error parsing the CSV file. Check the file format.")
except Exception as e:
    st.error(f"Error loading the CSV file: {e}")
