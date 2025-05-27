import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css"

const Banner = ({ bannerData }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1200, 
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20px',
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20px',
            },
        },
    ]
    };

    return (
        <Slider {...settings}>
            {bannerData.map((data)=> {
                const {id,imageUrl,title} = data;
                return(
                    <img src={imageUrl} alt={title} className="banner-image" />
                )
            })}
        </Slider>
    )
}

export default Banner;