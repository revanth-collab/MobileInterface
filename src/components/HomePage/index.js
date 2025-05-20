import { Component } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaArrowRight } from "react-icons/fa6";
import Featured from "../Featured";


import "./index.css"
import UpcomingAppointment from "../UpcomingAppointment";

class HomePage extends Component {
    state = {location:"Hyderabad",selectedService:"All",featuredData:[{
        "id":1,
        "imageUrl":"images/Featured1.png",
        "title":"Oasis Spa Haven",  
        "description":"Oasis Spa Haven is a luxurious spa retreat offering a range of rejuvenating treatments and therapies.",
        "category":"Spa",
        "rating":4.5,
        "distance":"2.5 km",
        "offer":"20% off on first visit",
        "liked":false
    },
    {
        "id":2,
        "imageUrl":"images/Featured1.png",
        "title":"Serenity Wellness Center",  
        "description":"Serenity Wellness Center is a holistic wellness center providing spa, yoga, and wellness services.",
        "category":"Wellness",
        "rating":4.8,
        "distance":"3.0 km",
        "offer":"15% off on spa packages",
        "liked":false
    },
    {
        "id":3,
        "imageUrl":"images/Featured1.png",
        "title":"Tranquil Spa Retreat",  
        "description":"Tranquil Spa Retreat is a serene spa offering a variety of massages and beauty treatments.",
        "category":"Spa",
        "rating":4.7,
        "distance":"1.5 km",
        "liked":false
    }
    ],
    UpcomingAppointmentData:[{
        "id":1,
        "imageUrl":"images/Upcoming1.png",
        "title":"Oasis Spa Haven",
        "duration":"01 hr 30 mins",
        "date":"12 Oct 23",
        "time":"10:00 AM",
        "location":"Lakeside Retreat, Madhapur, Hyderabad, Telangana",
        "service":"Hydrating Body Wrap",
    },
    {
        "id":2,
        "imageUrl":"images/Upcoming1.png",
        "title":"Serenity Wellness Center",
        "duration":"02 hr 00 mins",
        "date":"13 Oct 23",
        "time":"11:00 AM",
        "location":"Serenity Wellness Center, Banjara Hills, Hyderabad, Telangana",
        "service":"Aromatherapy Massage",
    },
    {
        "id":3,
        "imageUrl":"images/Upcoming1.png",
        "title":"Tranquil Spa Retreat",
        "duration":"01 hr 15 mins",
        "date":"14 Oct 23",
        "time":"09:30 AM",
        "location":"Tranquil Spa Retreat, Jubilee Hills, Hyderabad, Telangana",
        "service":"Deep Tissue Massage",
    },
    {
        "id":4,
        "imageUrl":"images/Upcoming1.png",
        "title":"Oasis Spa Haven",
        "duration":"01 hr 30 mins",
        "date":"12 Oct 23",
        "time":"10:00 AM",
        "location":"Lakeside Retreat, Madhapur, Hyderabad, Telangana",
        "service":"Hydrating Body Wrap",
    },
    {
        "id":5,
        "imageUrl":"images/Upcoming1.png",
        "title":"Serenity Wellness Center",
        "duration":"02 hr 00 mins",
        "date":"13 Oct 23",
        "time":"11:00 AM",
        "location":"Serenity Wellness Center, Banjara Hills, Hyderabad, Telangana",
        "service":"Aromatherapy Massage",
    },
    ]
    }

    handleSelectedServiceStatus = (service) => {
        this.setState({ selectedService: service });
    }

    handleLocationChange = (location) => {
        this.setState({ location });
    }

    handleLikeStatus = (id) => {
        this.setState((prevState) => ({
            featuredData: prevState.featuredData.map((item) =>
                item.id === id ? { ...item, liked: !item.liked } : item
            ),
        }));
    }

    render() {
        const {location,featuredData,UpcomingAppointmentData} =this.state;
        return (
            <Container className="home-page pt-3" fluid>
                <Row className="row-nowrap px-3">
                    <Col xs='auto' className="location-background-container">
                        <img src="/images/Group 1000006152.png"  alt="location-images" className="location-image" />
                        <div className="dropdown">
                            <button className="dropbtn location-heading">{location}</button>
                            <div className="dropdown-content">
                                <p onClick={()=>this.handleLocationChange("Hyderabad")}>Hyderabad</p>
                                <p onClick={()=>this.handleLocationChange("Bangalore")}>Bangalore</p>
                                <p onClick={()=>this.handleLocationChange("Chennai")}>Chennai</p>
                            </div>
                        </div>
                        <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                    </Col>
                    <Col xs="auto" className="notification-container">
                        <img src="/images/Notification.png" alt="notification" className="notification-image" />
                    </Col>
                </Row>
                <Row className="px-3">
                    <Col className="search-container">
                        <img src="/images/SearchIcon.png" alt="search" className="search-icon" />
                        <input type="text" className="search-input" placeholder="Search Spa, Services"/>
                    </Col>
                </Row>
                <Row className="services-row px-3">
                    <Col className="servies-container">
                        <Link to="/spa" className="link" onClick={() => this.handleLocationChange('/spa')}>
                            <img src="/images/Salon.png" alt="Salon" className="service-image" />
                            <h1 className="service-heading">Salon</h1>
                        </Link>
                    </Col>
                    <Col className="servies-container">
                        <img src="/images/Spa.png" alt="Salon" className="service-image" />
                        <h1 className="service-heading">Spa</h1>
                    </Col>
                    <Col className="servies-container">
                        <img src="/images/Clinic.png" alt="Salon" className="service-image" />
                        <h1 className="service-heading">Clinic</h1>
                    </Col>
                </Row>
                <Row className="banner-container mb-3 mt-2">
                    <Col className="px-3">
                        <img src="/images/Banner.avif" alt="Banner" className="banner-image" />
                    </Col>
                </Row>
                <h1 className="upcoming-heading">Upcoming Appointment</h1>
                <Row xs={12} className="upcoming-appointment-row m-0 p-0">
                    <Col className="upcoming-appointment-container">
                        <UpcomingAppointment upcomingDataList={UpcomingAppointmentData} />
                    </Col>
                </Row>
                <Row className="featured-section-row pt-4 px-3">
                    <Col xs={12} className="featured-section-top-container">
                        <h1 className="upcoming-heading">Featured</h1>
                        <div className="featured-section-view-all align-items-center">
                            <h2 className="featured-view-all">View all</h2>
                            <FaArrowRight className="featured-arrow" />
                        </div>
                    </Col>
                    <Col className="featured-section-card-wrapper pb-4">
                        {featuredData.map((each) => (
                            <Featured featuredData={each} key={each.id} handleLikeStatus={this.handleLikeStatus}/>
                        ))}
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default HomePage;