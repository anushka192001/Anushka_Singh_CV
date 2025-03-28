import React from 'react';
import '../../App.css';

export default function Education() {
  return (
    <>
      <video src='/videos/kgp_photos.mp4' autoPlay loop muted />
      
      <div id="education" className="container mt-5 text-center">
        <h3 className="mb-4">EDUCATION</h3>

        {/* High School */}
        <div className="card shadow-lg bg-white rounded education-card">
          <div className="card-body row p-0">
            <div className="col-sm-3 p-4 education_text_style">
              <span>2017 - 2019</span>
              <h5>High School</h5>
            </div>
            <div className="col-sm-9 p-4">
              <h5>Physics, Chemistry, Mathematics</h5>
              <p>CENTRAL BOARD OF SECONDARY EDUCATION</p>
            </div>
          </div>
        </div>

        {/* Bachelor's Degree */}
        <div className="card shadow-lg bg-white rounded education-card">
          <div className="card-body row p-0">
            <div className="col-sm-3 p-4 education_text_style">
              <span>2019 - 2023</span>
              <h5>Bachelor's Degree</h5>
            </div>
            <div className="col-sm-9 p-4">
              <h5>Bachelor of Technology</h5>
              <p>Indian Institute Of Technology (IIT) Kharagpur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
