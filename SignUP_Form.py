import streamlit as st
import pandas as pd

# URL of the CSV file in GitHub (replace with your actual URL)
csv_url = 'https://raw.githubusercontent.com/ManabBehera342/Listing_App/main/User_data.csv'

# Title of the web page
st.title("Registered Users")

# Load the CSV file into a DataFrame
try:
    df = pd.read_csv(csv_url)
    
    # Display the DataFrame in the Streamlit app
    st.write("### Registered Users")
    st.dataframe(df)
except Exception as e:
    st.error(f"Error loading the CSV file: {e}")
