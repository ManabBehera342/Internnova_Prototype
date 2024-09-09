import streamlit as st
import PyPDF2
import spacy
from spacy.matcher import Matcher
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from gensim.models import Word2Vec
import numpy as np
import os
from sklearn.metrics.pairwise import cosine_similarity

# Custom theme settings
st.set_page_config(
    page_title="INTERNOVA",
    layout="wide",
    initial_sidebar_state="expanded",
    menu_items={
        'Get Help': 'https://www.example.com/help',
        'Report a bug': "https://www.example.com/bug",
        'About': "# This is a header. This is an *extremely* cool app!"
    },
)

st.markdown(
    """
    <style>
    /* Apply a static gradient to the body and stApp */
    body, .stApp {
        background: linear-gradient(270deg, #0030e4);
        font-family: "monospace", sans-serif;
        color: #ffffff; /* Default text color */
        font-style: italic;
        background-attachment: fixed; /* Ensure background is fixed */
    }

    /* Customize specific text elements */
    h1, h2, h3, h4, h5, h6 {
        color: #000000; /* Header colors */
    }

    p {
        color: #000000; /* Paragraph and label colors */
    }
    div, span, label {
        color: #ff0000; /* Paragraph and label colors */
    }

    a {
        color: #ff5733; /* Link colors */
    }

    /* Customize text color inside text areas or inputs */
    .stTextInput, .stTextArea, .stSelectbox, .stCheckbox {
        color: #000000; /* Input text color */
    }
    </style>
    """,
    unsafe_allow_html=True
)
if 'initialized' not in st.session_state:
    
    model_path = os.path.join(os.path.dirname(__file__), 'models/en_core_web_sm-3.7.1')
    st.session_state['nlp'] = spacy.load(model_path)
    
    
    skills = [
    'Networking', 'Supervised Learning', 'Network Address Translation', 'TensorFlow', 'Containerization', 'GDPR',
    'General Data Protection Regulation', 'Operating System', 'NLP', 'Minimum Viable Product', 'Data Mining',
    'Collaboration Tools', 'XML', 'Virtual Machine', 'Java', 'Consistency, Availability, Partition tolerance',
    'Load Balancing', 'Regression Analysis', 'Dashboard Creation', 'CSS', 'CRUD', 'PCA', 'Google Sheets',
    'Jenkins', 'Version Control System', 'Nagios', 'XGBoost', 'Kubernetes', 'Function as a Service', 'ACID',
    'Simple Mail Transfer Protocol', 'RESTful APIs', 'Scikit-Learn', 'Storage Area Network',
    'Create, Read, Update, Delete', 'Regression', 'JSON Web Token', 'Model Evaluation', 'SA', 'Statistical Analysis',
    'Model-View-Controller', 'SDLC', 'Random Forest', 'Serverless', 'Virtual Local Area Network', 'Data Cleaning',
    'Basically Available, Soft state, Eventually consistent', 'Azure', 'HTTP', 'NFS', 'DDoS',
    'Long Short Term Memory', 'Infrastructure as Code', 'ORM', 'Distributed Denial of Service',
    'Network Attached Storage', 'Classification', 'Exploratory Data Analysis', 'I/O', 'NAT', 'Google Cloud Platform',
    'Feature Engineering', 'Network File System', 'VCS', 'Machine Learning', 'Extract, Transform, Load', 'Unix',
    'NAS', 'Software Development Life Cycle', 'SVN', 'Docker', 'Spark', 'Health Insurance Portability and Accountability Act',
    'Hypertext Transfer Protocol Secure', 'GUI', 'CLI', 'Microservices', 'Deep Learning', 'Transmission Control Protocol',
    'Generative Adversarial Networks', 'Voice over Internet Protocol', 'Linux', 'SciPy', 'IP', 'SVM', 'AI',
    'Tableau', 'AWS', 'Scripting', 'DataViz', 'ML', 'Python', 'SQL', 'Principal Component Analysis',
    'Agile Methodology', 'IaaS', 'Microsoft Excel', 'Terraform', 'Infrastructure as a Service', 'Data Wrangling',
    'OAuth', 'BASE', 'Seaborn', 'Gradient Boosting', 'UDP', 'IaC', 'PaaS', 'K8s', 'ETL', 'File Transfer Protocol',
    'Automation', 'Hypothesis Testing', 'Security', 'Atomicity, Consistency, Isolation, Durability',
    'Neural Networks', 'Google Analytics', 'Git', 'User Experience/User Interface', 'Excel',
    'Database Management System', 'VLAN', 'Graphical User Interface', 'User Datagram Protocol', 'SSH',
    'Command Line Interface', 'DBMS', 'Unsupervised Learning', 'Prometheus', 'FTP', 'Clustering', 'MVP',
    'Software as a Service', 'JSON', 'IMAP', 'Business Intelligence', 'Matplotlib', 'Puppet',
    'Relational Database Management System', 'Log Management', 'Platform as a Service',
    'Application Programming Interface', 'IDE', 'Data Analysis', 'PyTorch', 'LSTM', 'Database Management',
    'JWT', 'CAP', 'SAN', 'VoIP', 'TCP', 'Ansible', 'Artificial Neural Networks', 'Amazon Web Services',
    'Decision Trees', 'BaaS', 'Natural Language Processing', 'HIPAA', 'NumPy', 'Dimensionality Reduction',
    'Continuous Integration/Continuous Deployment', 'API', 'Monitoring', 'OS', 'Version Control', 'SMTP', 'VM',
    'Reinforcement Learning', 'Subversion', 'Internet Message Access Protocol', 'Descriptive Statistics',
    'Object-Relational Mapping', 'JS', 'CI/CD', 'Keras', 'R', 'ANN', 'Ensemble Learning', 'UX/UI', 'HTML',
    'Virtual Private Network', 'CV', 'GANs', 'JavaScript', 'Support Vector Machines', 'HTTPS', 'Artificial Intelligence',
    'Hypertext Transfer Protocol', 'Continuous Monitoring', 'MVC', 'Power BI', 'Pandas', 'Agile', 'Chef',
    'NoSQL', 'Data Visualization', 'MATLAB', 'Internet Protocol', 'VPN', 'Computer Vision', 'Hadoop', 'RDBMS',
    'Shell Scripting', 'C++', 'Grafana', 'SaaS', 'ELK Stack', 'Integrated Development Environment', 'Input/Output',
    'FaaS', 'BI', 'DL', 'GCP', 'Open Authorization', 'Secure Shell', 'Backend as a Service', 'Orchestration', 'Scrum']
    
    
    matcher = Matcher(st.session_state['nlp'].vocab)
    
    
    for i in skills:
        skill_patterns = [{'LOWER': skill.lower()} for skill in i.split()]
        matcher.add(i, [skill_patterns])
    
    
    st.session_state['matcher'] = matcher
    
    
    df = pd.read_csv('job_dataframe_1.csv')
    df['job_location'] = df['job_location'].apply(lambda x: str(x).split(',')[0])  # Simplify job location
    
    
    encoder = OneHotEncoder(sparse_output=False)
    df['location_vectors'] = list(encoder.fit_transform(df[['job_location']]))
    
    job_skills = df['skills']
    
    
    skills_pd = [item.lower().replace(',', ' ').replace(' ', '_').split() for item in skills]
    word2vec_model = Word2Vec(skills_pd, vector_size=100, window=5, min_count=1)
    
    
    st.session_state['job_skills'] = job_skills
    st.session_state['df'] = df
    st.session_state['word2vec_model'] = word2vec_model
    st.session_state['encoder'] = encoder
    st.session_state['job_locations'] = df['location_vectors'].to_list()

    
    st.session_state['initialized'] = True


def skills_extract(s):
    doc = st.session_state['nlp'](s)
    matches = st.session_state['matcher'](doc)
    fs = set()
    for match_id, start, end in matches:
        skill = doc[start:end].text
        fs.add(skill)
    return list(fs)


def compute_vector(words_list):
    vectors = [st.session_state['word2vec_model'].wv[word] for word in words_list if word in st.session_state['word2vec_model'].wv]
    if len(vectors) == 0:
        return np.zeros(st.session_state['word2vec_model'].vector_size)
    return np.mean(vectors, axis=0)


def calculate_similarity(user_skills, user_location_vector):
    similarity = []
    my_skills_l = [skill.lower().replace(' ', '_') for skill in user_skills]
    my_skills_vector = np.array(compute_vector(my_skills_l)).reshape(1, -1)
    user_location_vector = user_location_vector.reshape(1, -1)
    for idx in range(len(st.session_state['job_skills'])):
        jbs_skill_l = [job_skill.lower().replace(' ', '_') for job_skill in st.session_state['job_skills'][idx]]
        jbs_skills_vector = np.array(compute_vector(jbs_skill_l)).reshape(1, -1)
        skill_similarity = cosine_similarity(my_skills_vector, jbs_skills_vector)[0][0]
        location_similarity = cosine_similarity(user_location_vector, st.session_state['job_locations'][idx].reshape(1, -1))[0][0]
        overall_similarity = 0.8 * skill_similarity + 0.2 * location_similarity
        similarity.append(overall_similarity)
    return similarity


def generate_recommendations(user_data, threshold):
    recommendations = []
    for i in range(len(user_data)):
        sim_scores = calculate_similarity(user_data['skillsofusers'][i], user_data['location_vector'][i])
        df1 = st.session_state['df'].copy()
        df1['similarity'] = sim_scores
        df1 = df1.sort_values('similarity', ascending=False)
        df1 = df1[df1['similarity'] >= threshold]
        recommendations.append(df1[['job_title', 'company', 'job_link', 'job_location', 'job_description', 'employment_type', 'industries', 'seniority_level']])
    return recommendations


st.title("INTERNOVA")
st.write(f'### Where Skills Meets Opportunity')


users_df1 = pd.DataFrame(columns=['userNames', 'skillsofusers', 'userPreferredloc'])
skills_users = []
users_names = []
locs = []


loc = st.text_input("Enter User location preference as city:")


uploaded_file = st.file_uploader("Choose a PDF file", type="pdf")


if uploaded_file is not None:
    
    pdf_reader = PyPDF2.PdfReader(uploaded_file)
    pdf_text = ""
    
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        pdf_text += page.extract_text()
    
    pdf_text = pdf_text.lower()
    extracted_skills = skills_extract(pdf_text)
    st.text_area("Extracted Skills", ', '.join(extracted_skills), height=200)


if loc and uploaded_file is not None:
    loc = loc.strip().lower()
    user_id = len(users_names) + 1
    users_names.append(user_id)
    locs.append(loc)
    skills_users.append(extracted_skills)


if st.button("Submit"):
    
    if len(users_names) > 0:
        users_df1['userNames'] = users_names
        users_df1['skillsofusers'] = skills_users
        users_df1['userPreferedloc'] = locs
        users_df1['location_vector'] = list(users_df1['userPreferedloc'].apply(lambda x: st.session_state['encoder'].transform([[x]])[0]))

        threshold = 0.2

        
        recommend_list = generate_recommendations(users_df1, threshold)

        
        for i in range(len(users_names)):
            st.write(f"### Top 5 job recommendations")
    
            
            top_5_jobs = recommend_list[i].head(5)
    
            for index, row in top_5_jobs.iterrows():
                with st.expander(f"**{row['job_title']} - {row['company']}**", expanded=False):
                    st.write(f"*Company:* {row['company']}")
                    st.write(f"*Industries:* {row['industries']}")
                    st.write(f"*Type:* {row['employment_type']}")
                    st.write(f"*Level:* {row['seniority_level']}")
                    st.markdown(f"*Apply now:* [Click here]({row['job_link']})")
    else:
        st.write("Please enter valid data before submitting.")
