import {Link} from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import "./index.css"

const Featured = (props) => {
    const {featuredData, handleLikeStatus} = props;
    // const {id,imageUrl,title,description,category,rating,offer,liked} = featuredData;  
    const {vendor_details_id,logo,business_name,address,gender_type,avg_rating,distance,coupon,discount,added_favorite} = featuredData;
    const {mtkm} = distance;

    // const finalCoupon = Array.isArray(coupon) && coupon.length === 0 ? null : coupon;

    const finalCoupon = Array.isArray(coupon) ? (coupon.length > 0 ? coupon[0] : null) : null;

    console.log("finalCoupon", finalCoupon);

    

    const {selectedService, handleSelectedServiceStatus, setMainCategoryId} = props;

    // const routeService = selectedService.toLowerCase() || "all";
    
    const routeService = selectedService ? selectedService.toLowerCase() : "all";



    
    const handleLikeClick = () => {
        handleLikeStatus(vendor_details_id);
    }
    return (
        <div className="featured-section-container" key={vendor_details_id}>
            <Link to={`/${routeService}/${vendor_details_id}`} className="lines-remover featured-section-top-card-container">
                <div className="featured-image-container">
                    <img src={logo} alt="featured" className="featured-image" />
                    {discount!==null ? (
                        <div className="offer d-none d-md-flex">
                            <div className="offer-container offer-md px-4">
                                <img src="/images/Offer.png" alt="offer" className="offer-image" />
                                <h1 className="offer-content">{finalCoupon.description}</h1>
                            </div>
                        </div>
                        ) : null}

                </div>
                <div className="featured-top-middle-container px-md-2">
                    <h1 className="featured-top-heading">{business_name}</h1>
                    <p className="featured-card-para"><span><img src="/images/mappin.png" alt="map_pin" className="map-pin" /></span>
                        {address}
                    </p>
                    <div className="featured-card-para-rating-container">
                        <p className="featured-card-para category order-1 order-md-2 px-1 pb-2">
                            {gender_type === 1
                                ? "Male"
                                : gender_type === 2
                                ? "Female"
                                : gender_type === 3
                                ? "Unisex"
                                : "Unisex"}
                        </p>
                        <div className="rating-distance-container order-2 order-md-1">
                            <p className="featured-rating"><span><img src="/images/Star.png" alt="star" className="map-pin para" /></span>{avg_rating||"5.0"}</p>
                            <p className="featured-rating"><span><img src="/images/Location.png" alt="Location" className="map-pin para" /></span>{mtkm}</p>
                        </div>
                    </div>
                    <button className="featured-like-button" onClick={handleLikeClick}>
                        {added_favorite ? (<img src="/images/Like.png" alt="Like" className="featured-like" />) : (<FaRegHeart className="featured-like" />)}
                    </button>
                </div>
            </Link>
            {discount!==null ? (
                <div className="offer d-flex d-md-none">
                    <div className="offer-container">
                        <img src="/images/Offer.png" alt="offer" className="offer-image" />
                        <h1 className="offer-content">{finalCoupon.description}</h1>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Featured;