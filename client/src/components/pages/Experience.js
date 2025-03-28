import React from 'react';
import '../../App.css';

export default function Experience() {
  return <>
  <video src='/videos/experience.mp4' autoPlay loop muted />
  <div id="education" class="container mt-5 text-center">
      <h3 class="mb-3">Experience</h3>

      <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>JUL 2023-Present</span>
              <h5>Software Engineer</h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>Clodura</h5>
              <p>Leveraged large language transformers like Multilingual RoBERTa and Gemma-7B to precisely extract seniority,
functional levels, and other key attributes from incomplete profile descriptions to construct accurate and insightful
organizational charts for companies. Further optimized and enhanced this functionality, contributing to Clodura.AI successfully raising $2 million in a funding
round led by Bharat Innovation Fund.</p>
            </div>
        </div>
       </div> 


       <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>JAN 2023-MAY 2023</span>
              <h5>BTP-2</h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>IIT kharagpur(under prof Debasis Samanta,department of CSE,IIT kharagpur)</h5>
              <p>Designed a speller interface for individuals with complete disabilities (e.g., inability to move eyes or any other body organs, leveraging brain signal correlations to red, green, and blue colors. The approach uses supervised learning techniques, with the goal of surpassing the accuracy levels of previous works.

The suggested spelling interface demonstrated an average entry rate of 6.23 characters per minute, ensuring 93.07% accuracy. Notably, its minimal standard deviation underscores the universality of the system across all the subjects.
</p>
            </div>
        </div>
       </div> 



       <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>JULY 2022-DEC 2022</span>
              <h5>BTP-1 </h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>IIT kharagpur(under prof Rajib Mall,department of CSE,IIT kharagpur)</h5>
              <p>Succesfully developed the software with a unique approach that utilizes code property graphs to uncover and model vulnerabilities in java code, surpassing Stanford’s CoreNLP, which relied solely on AST, in terms of accuracy rate.

The objective was to incorporate not only the conventional abstract syntax tree but also the comprehensive analysis of three distinct components—- abstract syntax trees, code flow graphs, and program dependency graphs.</p>
            </div>
        </div>
       </div> 


       <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>FEBRUARY 2022-NOVEMBER 2022</span>
              <h5>Research Project </h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>GEORGIA TECH FINANCIAL INNOVATION LAB ,U.S.A </h5>
              <p>worked with Prof. Sudheer Chava at Georgia Tech. The project focused on building a resource-efficient weak supervision model to identify significant textual claims in analyst reports and earnings calls, predicting financial market returns, earnings surprises, and stock price movements.

This model achieves accuracy comparable to complex models like BERT, with a 93% accuracy rate, while significantly reducing computational costs and overall complexity.</p>
            </div>
        </div>
       </div> 


       <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>NOVEMBER 2021-JULY 2022</span>
              <h5>Research Project </h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>Mc GILL UNIVERSITY ,CANADA</h5>
              <p>Under the guidance of Prof. Danilo Bzdok, I developed a system for detecting Alzheimer’s from retinal images where I worked with data from 80,000 subjects.

Performed image preprocessing using techniques like generative adversarial networks (GANs) for image synthesis, adaptive histogram equalization (AHE) for contrast enhancement, and 3D image reconstruction from 2D data for analysis to account for real-life, slightly noisy, non-laboratory-generated image data from doctors. Extracted features such as optic disc information and macular thickness, followed by data augmentation.

Developed model with the unique approach of multimodal fusion of image and demographic features using Attention based GNNs to detect Alzheimer’s disease with 88% accuracy rate.</p>
            </div>
        </div>
       </div> 
       




      <div class="card shadow-lg bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>March 2020 - Present</span>
              <h5>Software Team Member</h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>SWARM ROBOTICS SOCIETY IIT KHARAGPUR</h5>
              <p> As a member of the Swarm Robotics Society at IIT Kharagpur, our team secured First Runner-Up among 1000 teams in DRDO's DRUSE (DRDO Robotics and Unmanned Systems Exposition), winning a cash prize of 1 lakh Rupees to support further research.</p>
            </div>
        </div>
      </div> 
      
  


        </div>
</>
}
