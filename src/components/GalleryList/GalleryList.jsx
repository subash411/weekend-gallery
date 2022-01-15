import GalleryItem from '../GalleryItem/GalleryItem'
function GalleryList({galleryList, addLikes}){
return (
    <div>
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