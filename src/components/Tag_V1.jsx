import React, {useState} from 'react';

import useGif from '../useGif';

const Tag = () => {
    const [tag, setTag] = useState('welcome');
    const {gif, fetchGif} = useGif(tag);
   
   
    return (
        <div className="container">
            <h1 className = 'new' >Random [ {tag} ] Gif</h1>
            <img width = '500' height='350' src={gif} alt='random_GIF' className='gif--div'/>
            <div className='details'>
            <h2 className='search--label'>&#129147; Enter a Word or phrase to search &#129147;</h2>
            <input value={tag} onChange = {(e)=> setTag(e.target.value)} className="input"/>
            <button onClick = {()=> fetchGif(tag)} className="logo">GENERATE NEW GIF</button>
            </div>
        </div>
    )
};

export default Tag;