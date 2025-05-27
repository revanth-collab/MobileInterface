import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css"


const UpcomingAppointment = ({ upcomingDataList }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        pauseOnHover: true,
        swipeToSlide: true,
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
            {upcomingDataList.map((data) => {
                const { id, imageUrl, title, duration, date, time, location, service } = data;
                return (
                    <div key={id} className='upcoming-carousel-container'>
                        <div className="upcoming-top-container">
                            <img src={imageUrl} alt="upcoming" className="upcoming-image" />
                            <div className="upcoming-top-middle-container">
                                <h1 className="upcoming-card-heading">{title}</h1>
                                <p className="upcoming-card-para">
                                    <span><img src="/images/mappin.png" alt="map_pin" className="map-pin" /></span>
                                    {location}
                                </p>
                                <h2 className="upcoming-card-subheading">{service}</h2>
                            </div>
                            <img src="images/Line.png" alt="line" className="upcoming-line" />
                            <div className="upcoming-time-container">
                                <img src="/images/Color_clock.png" alt="clock" className="upcoming-clock" />
                                <h1 className="upcoming-time">{time}</h1>
                                <h1 className="upcoming-date">{date}</h1>
                            </div>
                        </div>
                        <div className="upcoming-bottom-container">
                            <img src="images/Clock.png" alt="clock" className="upcoming-clock-image" />
                            <h1 className="upcoming-bottom-heading">Appointment in :</h1>
                            <p className="upcoming-bottom-content">{duration}</p>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
};

export default UpcomingAppointment;
