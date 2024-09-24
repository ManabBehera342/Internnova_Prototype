import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div className='container' id='about'>
        {/* Gradient Background Elements */}
        <div className="yellow-gradient1" />
        

        {/* About Section */}
        <div className='about'>
          <h1 className='about-head'>ABOUT</h1>
          <p>
          Welcome to Internova, where we revolutionize the job-seeking experience through cutting-edge technology and a commitment to connecting talent with opportunity. Our platform harnesses advanced algorithms and AI-driven matchmaking to recommend candidates with relevant job opportunities tailored to their skills and aspirations.
          We believe in centralizing the job search process. Our portal aggregates listings from the private sector, government opportunities, and international employment avenues, ensuring that users have access to the latest openings all in one place. We continuously update job listings, providing our users with real-time access to fresh opportunities.
          </p>
          <p>
          Our platform is more than just a job board; we offer a comprehensive suite of tools designed to support job seekers at every stage of their journey. From resume building and interview preparation to career guidance, we equip candidates with the resources they need to succeed. Our dedicated sections for internships and industrial training opportunities ensure that students can gain valuable experience and kick-start their careers.
          </p>
          <p>
          Mentorship is a cornerstone of our mission. Internova connects students with industry professionals through mentorship programs, offering invaluable guidance and support. Our personalized one-on-one chat sessions with mentors enhance these opportunities, fostering growth and career development.
          </p>
          <p>To boost communication and conversion rates, we instantly notify users of new job postings through preference-based email and SMS alerts, keeping them informed and engaged. Our platform enhances connectivity, effectively linking job seekers with employers and improving interactions in the job market.</p>
          <p>Internova is your all-in-one solution for job searching and career advancement. We provide candidates with personalized job recommendations by analyzing their CVs and resumes, while our ATS (Applicant Tracking System) ecosystem scores resumes to help candidates enhance their interview prospects. Join us at Internova, where your career journey begins.</p>
        </div>
        <div className="violet-gradient1" />
      </div>
    </>
  );
};

export default About;
