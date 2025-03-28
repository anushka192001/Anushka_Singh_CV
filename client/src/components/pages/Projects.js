import React from 'react';
import '../../App.css';

export default function Projects() {
  return <>
  <video src='/videos/water_fall.mp4' autoPlay loop muted />
  <div id="projects" class="container mt-5 text-center">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card-header"><h4>Projects</h4></div>
        <div class="card-body">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1" ></li>
              <li data-target="#demo" data-slide-to="2"></li>
              <li data-target="#demo" data-slide-to="3"></li>
              <li data-target="#demo" data-slide-to="4"></li>
              <li data-target="#demo" data-slide-to="5"></li>
             
            </ul>
            <div class="carousel-inner">
            


            <div class="carousel-item active">
                <img src="images/java_code.jpg" alt="to-do-list" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>software for minute vulnerabilities detection in java code files</h3>
                  <p>Succesfully developed the software with a unique approach that utilizes code property graphs to uncover and model
vulnerabilities in java code, surpassing Stanford’s CoreNLP, which relied solely on AST, in terms of accuracy rate.</p>
                  <p><a href="https://github.com/anushka192001/generate_cpg_embeddings_for_java_code_files">link</a></p>
              </div>
              </div>


            <div class="carousel-item">
                <img src="images/project_7_img.jpg" alt="greeting-cards-aplication" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>Fin-num claim</h3>
                  <p>Developed a hybrid model to detect impactful financial claims with 93% accuracy, matching BERT while reducing cost and complexity.</p>
                  <p><a href="https://github.com/gtfintechlab/fin-num-claim">link</a></p>
              </div> 
              </div>
            
              
              <div class="carousel-item">
                <img src="images/nutrition.jpg" alt="blog-website" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>NutriPlan</h3>
                  <p>Nutrition Planner App</p>
                  <p><a href="https://github.com/anushka192001/NutriPlan">link</a></p>
              </div>
              </div>
        

              <div class="carousel-item">
                <img src="images/connect_four.jpg" alt="simon-game" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>Four Connect Game against AI</h3>
                  <p>implemented this game using javascript, implemented 2 AI stratagies using Minimax and alpha-beta pruning algorithms, also implemented AI's thinking depth level by changing its depth parameter in the implemented algorithm.</p>
                  <p><a href="https://github.com/anushka192001/four-connect-game-against-AI">link</a></p>
                </div> 
              </div>


              <div class="carousel-item">
                <img src="images/jigsaw_puzzle.jpg" alt="jigsaw-puzzle-game" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>Jigsaw Puzzle</h3>
                  <p>Built a responsive puzzle game with login, score saving, animations, and interactive features using HTML5, CSS3, and JavaScript, with persistent storage via cookies..</p>
                  <p><a href="https://github.com/anushka192001/jigsaw_puzzle_game">link</a></p>
                </div> 
              </div>


              <div class="carousel-item">
                <img src="images/project_8_img.jpg" alt="bot-design" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>ROBOTICS MECHANICAL BOT DESIGN</h3>
                  <p><a href="https://github.com/anushka192001/swarm_robotics_bots_mechanical_design">link</a></p>
                </div>
              </div>


            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
          
       </div> 
      </div>
    </div>
     
   
</>
}