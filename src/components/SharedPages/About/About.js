import React from 'react';
import person from '../../../assets/About/sayan cut.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className='d-flex  align-items-center mx-auto'>
            <div className='about-para w-50 col-lg-6'>
                <div className='focused'>
                <h1 className='font-weight-bold'>THIS IS ME <br />
                    <span className='name'>SAYAN PAUL</span>
                </h1>
                </div>

                <p className='mt-5'>
             I live in India. My hometown is West Bengal. I am a student of <strong>BA</strong> and my subject is <strong>Bengali</strong>. But now I am learning <strong>MERN STACK</strong> Devolopment form <strong className='text-primary'>
                 Programming Hero</strong>.
              I have a passion for learning and sharing my knowlage with others as publicly as possible. I love solve rea-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintain excellent communication. I enjoy working with <strong>ReactJs, Javascript</strong></p>

                <button className='button mt-2'>Explore</button>
            </div>

            <div className='about-para'>
                <img className='' src={person} alt="" />
            </div>
        </div>

    <div class="card mb-3 mx-auto mb-5" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://i.ibb.co/bJ08nqY/pexels-thisisengineering-3861964.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">My Goal</h5>
        <p class="card-text">My goal is to be <strong>Full Stack</strong> web developer,which i believe is going to be a great career choice for the future alongwith i want to be a web developer tutor,work on a system that has X scale or complexity</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;