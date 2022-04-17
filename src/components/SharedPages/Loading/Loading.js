import React from 'react';

const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <div class="spinner-border text-info" role="status">
            <span class="sr-only"></span>
            </div>
        </div>
    );
};

export default Loading;