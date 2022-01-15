import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'
function GalleryList({galleryList, addLikes}){
return (
    <div className='galleryArea'>
    {galleryList.map((item) =>(
        <GalleryItem
        key={item.id}
        item={item}
        addLikes={addLikes}
        />
    ))}
    </div>
)
};

export default GalleryList;