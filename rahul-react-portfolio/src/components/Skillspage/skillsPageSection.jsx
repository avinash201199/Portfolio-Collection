import React,{useState} from 'react';
import './skillsPageSection.css'
import { Skillset } from '../../data/data';
import SkillsSectionCard from './SkillsSectionCard';
import SkillsInfoCard from './skillsSectionCardInfo';

const SkillPageSection = () => {
    
    const [selectedSkill, setSkill] = useState(Skillset[0]);
    const handleSelectSkill= (data)=> {
        setSkill(data);
    }

    


    return (
        <>
           <div id='skills'>
           <section className="skills-container">
                <h5>Technical Proficiency</h5>
            
                <div className="skills-content">
                    <div className="skillss">

                    {Skillset.map((item) => (
                        <SkillsSectionCard
                            key={item.key}
                            count={item.count}
                            title={item.title}
                            isActive={selectedSkill.title===item.title}
                            onClick={()=>{
                            handleSelectSkill(item);
                         }}
                        />  
                    ))}
                    </div>
                    
                    <div className="skills-info">

                        <SkillsInfoCard
                            heading={selectedSkill.title} 
                            skills={selectedSkill.skills}
                        /> 
                    </div>
                </div>
            </section>

                   
           </div>
        </>
    );
};

export default SkillPageSection;