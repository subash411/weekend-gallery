import React, {useState} from 'react';
import './GalleryItem.css';

function GalleryItem ({item, addLikes}){

const [isClick, setClick] = useState(true);


const onAddClicks = () =>{
    addLikes(item.likes, item.id)
};

return(
    <>
    <div className='pictures'>
        <div onClick={()=>  setClick(!isClick)} >

        {isClick ? <img src={item.path} /> : <h3>{item.description}</h3>}
        </div>

        <div>
         👍🏼: {item.likes}
        <button onClick={onAddClicks}> Give me some likes!</button>
        </div>

    </div>

</>
)
}

export default GalleryItem;