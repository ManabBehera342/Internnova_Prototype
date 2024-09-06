import streamlit as st
import pandas as pd

# Sample DataFrame with image URLs
#python -m streamlit run G:/Python_Labs/SIH_2024/app.py

data = {
    'id': [1, 2, 3],
    'job_name': ['Data Analyst', 'Software Engineer', 'Product Manager'],
    'link': ['https://example.com/1', 'https://example.com/2', 'https://example.com/3'],
}

df = pd.DataFrame(data)

# Title of the web page
st.title("Job Listings")

# Loop through the DataFrame to display each job listing with an image
for index, row in df.iterrows():
    #st.image(row['image'], width=150)  # Display job image with a specified width
    st.write(f"**ID:** {row['id']}")
    st.write(f"**Job Name:** {row['job_name']}")
    st.markdown(f"**Link:** [Click here]({row['link']})")
    st.write("---")
