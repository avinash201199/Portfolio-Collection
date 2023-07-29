import React from 'react';
import pinterest from '../images/pinterest.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import mmm from '../images/mmm.png'
import dev from '../images/dev.png'

function Footer(){
    return(
        <footer >
            @2021 afraz-khan.github.io
            <ul >
                <li >
                    <a href='https://www.pinterest.com/afrazkhan_/' >
                        <img className='social-icon' src={pinterest} />
                    </a>
                </li>
                <li >
                    <a href='https://twitter.com/afrazkhan_' >
                        <img className='social-icon' src={twitter} />
                    </a>
                </li>
                <li >
                    <a href='https://www.linkedin.com/in/afraz-khan/' >
                        <img className='social-icon' src={linkedin} />
                    </a>
                </li>
                <li >
                    <a href='https://github.com/afraz-khan' >
                        <img className='social-icon' src={github} />
                    </a>
                </li>
                <li >
                    <a href='https://mmm.page/afrazkhan.main' >
                        <img className='social-icon' src={mmm} />
                    </a>
                </li>
                <li >
                    <a href='https://dev.to/afrazkhan' >
                        <img className='social-icon' src={dev} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;