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
                    <div className='arrow--div'>
                        <i class="fa-sharp fa-solid fa-arrow-down"></i>
                        <h2 className='search--label'> Enter a Word or phrase to search </h2>
                        <i class="fa-sharp fa-solid fa-arrow-down"></i>
                    </div>
                    <input value={tag} onChange = {(e)=> setTag(e.target.value)} className="input"/>
                    <button onClick = {()=> fetchGif(tag)} className="logo">GENERATE NEW GIF</button>
                </div>
        </div>
    )
};

export default Tag;