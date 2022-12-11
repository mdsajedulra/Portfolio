import React from 'react';
import project1 from '../../../assets/project1.jpg'
import project2 from '../../../assets/project2.jpg'
import project3 from '../../../assets/project3.jpg'

const Projects = () => {
    return (
        <div id='projects' className='container my-5'>
            <h1>My Projects</h1>

            <div className='d-flex gap-4 col-12'>
                <div class="project-box-single-item  col-4">
                    <div class="">
                        <div class="bg-overlay"></div>
                        <div class="bg-image">
                            <img className='img-fluid' src={project1} alt="" />
                        </div>
                        <div class="image">
                            <img className='img-fluid' src={project1} alt="" />
                        </div>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="project-details.html">Photgraphy by Sajedul</a></h4>
                        <h4>(Service Website)</h4>
                        <ul class="catagory-nav-item">
                            <li><a href="https://photograpy-by-sajedul.web.app/">Live Link</a></li>
                            <li><a href="https://github.com/mdsajedulra/Photography-Service-Website">Client Side Repo</a></li>
                            <li><a href="https://github.com/mdsajedulra/Photography-Service-Website-Server-Side-">Server Side</a></li>
                        </ul>
                    </div>
                </div>
                <div class="project-box-single-item  col-4">
                    <div class="">
                        <div class="bg-overlay"></div>
                        <div class="bg-image">
                            <img className='img-fluid' src={project2} alt="" />
                        </div>
                        <div class="image">
                            <img className='img-fluid' src={project2} alt="" />
                        </div>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="project-details.html">Photgraphy by Sajedul</a></h4>
                        <h4>(Service Website)</h4>
                        <ul class="catagory-nav-item">
                            <li><a href="https://photograpy-by-sajedul.web.app/">Live Link</a></li>
                            <li><a href="https://github.com/mdsajedulra/Photography-Service-Website">Client Side Repo</a></li>
                            <li><a href="https://github.com/mdsajedulra/Photography-Service-Website-Server-Side-">Server Side</a></li>
                        </ul>
                    </div>
                </div>
                <div class="project-box-single-item  col-4">
                    <div class="">
                        <div class="bg-overlay"></div>
                        <div class="bg-image">
                            <img className='img-fluid' src={project3} alt="" />
                        </div>
                        <div class="image">
                            <img className='img-fluid' src={project3} alt="" />
                        </div>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="project-details.html">Photgraphy by Sajedul</a></h4>
                        <h4>(Service Website)</h4>
                        <ul class="catagory-nav-item">
                            <li><a href="https://photograpy-by-sajedul.web.app/">Live Link</a></li>
                            <li><a href="https://github.com/mdsajedulra/Photography-Service-Website">Client Side Repo</a></li>
                            <li><a href="https://github.com/mdsajedulra/Photography-Service-Website-Server-Side-">Server Side</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;