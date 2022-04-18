import React from 'react';
import person from '../../../assets/About/sayan cut.png'
import './About.css'

const About = () => {
    return (
        <div className='d-flex  align-items-center mx-auto'>
            <div className='about-para w-50 col-lg-6'>
                <h1 className='font-weight-bold'>THIS IS ME <br />
                    <span className='name mt-2'>SAYAN PAUL</span>
                </h1>

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
    );
};

export default About;