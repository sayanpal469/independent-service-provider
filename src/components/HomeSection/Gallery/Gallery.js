import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='container mb-5'>
            <h1 className='text-center my-5'>Gallery</h1>
            <div class="row">
            <div class="col-4">
                <div class="row mb-2">
                    <img class="img-fluid" src="https://i.ibb.co/y0K57k7/pexels-pixabay-47726.jpg" alt=""/>
                </div>
                <div class="row mb-2">
                <img class="img-fluid" src='https://i.ibb.co/fvNq03X/pexels-diego-madrigal-3180755.jpg' alt=""/>
                </div>
            </div>
            <div class="col-4">
                <div class="row mb-2">
                <img class="img-fluid" src="https://i.ibb.co/hLkVxz8/pexels-oleg-magni-861321.jpg" alt=""/>
                </div>
                
                <div class="row mb-2">
                    <div class="col-6">
                    <img class="img-fluid" src="https://i.ibb.co/PgHh6YC/pexels-pixabay-247502.jpg" alt=""/>
                    </div>
                    <div class="col-6">
                    <img class="img-fluid" src="https://i.ibb.co/LJC3FYK/pexels-pixabay-76957.jpg" alt=""/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                    <img class="img-fluid" src="https://i.ibb.co/z5d5P0h/pexels-sameera-madusanka-735174.jpg" alt=""/>
                    </div>
                    <div class="col-6">
                    <img class="img-fluid" src="https://i.ibb.co/T4PsG1W/pexels-george-desipris-792381.jpg" alt=""/>
                    </div>
                </div>

                <div class="row mb-2">
                <img class="img-fluid" src="https://i.ibb.co/wWGc4sf/pexels-rasmus-svinding-35435.jpg" alt=""/>
                </div>
                
            </div>
            <div class="col-4">
                <div class="row mb-2">
                <img class="img-fluid" src="https://i.ibb.co/2th99xM/pexels-jimmy-chan-2339342.jpg" alt=""/>
                </div>
                <div class="row mb-2">
                <img class="img-fluid" src="https://i.ibb.co/9v4Qhs5/pexels-jefferson-delogo-6105396.jpg" alt=""/>
                </div>
                <div class="row mb-2">
                <img class="img-fluid" src="https://i.ibb.co/4Z6ffSb/pexels-jeremy-bishop-2765872.jpg" alt=""/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gallery;