import React from 'react';
import HiFaceImage from '../images/hi-face.png';

function Header(){
    return(
        <div>
            <div className='container' >
                <img src={HiFaceImage} className="img-fluid" alt="..."></img>
            </div>
            <div className='container-fluid name-container' >
                <p className='name' >my_name = 'Afraz Khan'</p>
            </div>
        </div>
    );
}

export default Header;