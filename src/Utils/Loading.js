import React from 'react';

// import gif
import loadingGit from "../Assets/Gifs/Ellipsis-2.1s-200px.gif";

const Loading = () => {
    return (
        <div className='
        flex flex-col items-center w-full h-full fixed bg-gray-300
        z-100 left-0 top-0 overflow-auto opacity-50' >
            <div className=' ' >
                <img src={loadingGit} alt='loadingGit' />
                <h1>loading ....</h1>
            </div>
        </div>
    )
}


export default Loading;