import React from 'react';
import ReactJson from 'react-json-view';

const data = {
    desg: 'Sofware Engineer',
    tech_skills: [
        'Software dev', 'software design', 'serverless', 
        'web dev', 'backend', 'apis', 'big data', 'cloud computing'
    ],
    technologies: [
        'JavaScript',
        'Python',
        'nodejs',
        'expressjs',
        'routing-controllers',
        'aws'
    ],
    professional_experience: '1.5 years',
    independent_experience: '1 year',
    current_status: 'employed',
    location: 'Lahore, Punjab Pakistan',
    education: {
        becholers: 'BS Computer Science',
        university: 'Univeristy of Engineering & Technology, Lahore',
        batch: 2019
    },
    interests:[
        'Synthwave & hiphop',
        'truck simulation',
        'space art',
        'personal dev logging'
    ],
    thoughts:[
        "Don't ever take assumptions while coding",
        'Design as late as possible',
        'data is reality',
        'Hybrid office is great post Covid-19',
        'Micheal Jordan is the goat',
        'strive for the purpose of your life'
    ],
    contact: {
        message: 'Thanks for visiting, have anything to discuss? Happy to connect 😀',
        email: 'afrazkhan@pm.me'
    }
};

const jsonTheme = {
    base00: "#2b5239",
    base01: "#9ccc9c",
    base02: "#9ccc9c",
    base03: "#9ccc9c",
    base04: "#9ccc9c",
    base05: "#9ccc9c",
    base06: "#9ccc9c",
    base07: "#9ccc9c",
    base08: "#9ccc9c",
    base09: "#9ccc9c",
    base0A: "#9ccc9c",
    base0B: "#9ccc9c",
    base0C: "#9ccc9c",
    base0D: "#9ccc9c",
    base0E: "#9ccc9c",
    base0F: "#9ccc9c"
}

const customStyle = {
    // fontSize: '20px',
    // fontStyle: 'bolder'
}

function JSONView(){
    return(
        <div className='json-view' >
            <ReactJson src={data} theme={jsonTheme} iconStyle='triangle' indentWidth={10}
            enableClipboard={false} displayDataTypes={false} displayObjectSize={false}
            style={customStyle} />
        </div>
    );
}

export default JSONView;