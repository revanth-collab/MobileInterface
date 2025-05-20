
import { FaRegHeart } from "react-icons/fa";
import "./index.css"

const Featured = (props) => {
    const {featuredData, handleLikeStatus} = props;
    const {id,imageUrl,title,description,category,rating,distance,offer,liked} = featuredData;  
    
    const handleLikeClick = () => {
        handleLikeStatus(id);
    }
    return (
        <div className="featured-section-container">
            <div className="featured-section-top-card-container">
                <img src={imageUrl} alt="featured" className="featured-image" />
                <div className="featured-top-middle-container">
                    <h1 className="featured-top-heading">{title}</h1>
                    <p className="featured-card-para"><span><img src="/images/mappin.png" alt="map_pin" className="map-pin" /></span>
                        {description}
                    </p>
                    <p className="featured-card-para">{category}</p>
                    <div className="rating-distance-container">
                        <p className="featured-rating"><span><img src="/images/Star.png" alt="star" className="map-pin para" /></span>{rating}</p>
                        <p className="featured-rating"><span><img src="/images/Location.png" alt="Location" className="map-pin para" /></span>{distance}</p>
                    </div>
                </div>
                <button className="featured-like-button" onClick={handleLikeClick}>
                    {liked ? (<img src="/images/Like.png" alt="Like" className="featured-like" />) : (<FaRegHeart className="featured-like" />)}
                </button>
            </div>
            <div className="offer">
               {offer ? (
                    <div className="offer-container">
                        <img src="/images/Offer.png" alt="offer" className="offer-image" />
                        <h1 className="offer-content">Get {offer} off</h1>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Featured;