import React from 'react';
import './SkillsPage.css';
import SkillPageSection from './skillsPageSection.jsx';
import CpSection from './cpSection';
import { useState } from 'react';


const SkillsPage = () => {

    const[show,isShow] = useState(false);


    const handleCP =()=>{
        isShow(!show);
    }
    return (
        <>


            <button className='cpButton' onClick={handleCP}>Click To reveal Stats</button>
            <br /><br /><br />
            {show? <CpSection />:<SkillPageSection />}

            

            <br />
            <br /><br /><br />

        </>
    );
};

export default SkillsPage;
