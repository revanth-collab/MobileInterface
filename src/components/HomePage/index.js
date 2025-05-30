import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Context from "../../contextAPI/Context";

import Banner from "../Banner";

import { FaArrowRight } from "react-icons/fa6";
import Featured from "../Featured";


import "./index.css"
import UpcomingAppointment from "../UpcomingAppointment";

const HomePage = () => (
            <Context.Consumer> 
            {value => {
                const {location,featuredData,UpcomingAppointmentData,main_category_id,vendorsData,bannerData,selectedService,handleSelectedServiceStatus, handleLocationChange, handleLikeStatus, setMainCategoryId} =value;
                return (
                    <Container className="home-page pt-3" fluid>
                        <Row className="row-nowrap px-3 px-md-5 pt-2">
                            <Col xs='auto' className="d-flex d-md-none location-background-container">
                                <img src="/images/location_icon.png"  alt="location-images" className="location-image" />
                                <div className="dropdown">
                                    <button className="dropbtn location-heading">{location}</button>
                                    <div className="dropdown-content">
                                        <p onClick={()=>handleLocationChange("Hyderabad")}>Hyderabad</p>
                                        <p onClick={()=>handleLocationChange("Bangalore")}>Bangalore</p>
                                        <p onClick={()=>handleLocationChange("Chennai")}>Chennai</p>
                                    </div>
                                </div>
                                <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                            </Col>
                            <Col xs="auto" className="d-flex d-md-none notification-container">
                                <img src="/images/Notification.png" alt="notification" className="notification-image" />
                            </Col>
                        </Row>
                        <Row className="px-3 px-md-5 pb-md-4 justify-content-center align-items-center mt-md-5 pt-md-5">
                            <Col md="auto" className="d-none d-md-flex location-background-container location-correction">
                                <img src="/images/location_icon.png"  alt="location-images" className="location-image" />
                                <div className="dropdown">
                                    <button className="dropbtn location-heading">{location}</button>
                                    <div className="dropdown-content">
                                        <p onClick={()=>handleLocationChange("Hyderabad")}>Hyderabad</p>
                                        <p onClick={()=>handleLocationChange("Bangalore")}>Bangalore</p>
                                        <p onClick={()=>handleLocationChange("Chennai")}>Chennai</p>
                                    </div>
                                </div>
                                <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                            </Col>
                            <Col xs={12} md={5} className="search-container">
                                <img src="/images/SearchIcon.png" alt="search" className="search-icon" />
                                <input type="text" className="search-input" placeholder="Search Spa, Services"/>
                            </Col>
                        </Row>
                        <Row className="services-row px-3 px-md-5 pb-md-3">
                            <Col className="servies-container" onClick={()=>{handleSelectedServiceStatus('SALON'); setMainCategoryId(1)}}>
                                <Link to="/salon" className="link">
                                    <img src="/images/Salon.png" alt="Salon" className="service-image" />
                                    <h1 className="service-heading">Salon</h1>
                                </Link>
                            </Col>
                            <Col className="servies-container" onClick={()=> {handleSelectedServiceStatus('SPA'); setMainCategoryId(2)}}>
                                <Link to="/spa" className="link">
                                    <img src="/images/Spa.png" alt="Spa" className="service-image" />
                                    <h1 className="service-heading">Spa</h1>
                                </Link>
                            </Col>
                            <Col className="servies-container" onClick={()=> {handleSelectedServiceStatus('CLINIC'); setMainCategoryId(3)}}>
                                <Link to="/clinic" className="link">
                                    <img src="/images/Clinic.png" alt="Salon" className="service-image" />
                                    <h1 className="service-heading">Clinic</h1>
                                </Link>
                            </Col>
                        </Row>
                        <Row className="banner-container mb-3 mt-2">
                            <Col className="px-3 px-md-5 banner-sub-container">
                                <Banner bannerData={bannerData}/>
                            </Col>
                        </Row>
                        <h1 className="upcoming-heading px-2 px-md-5 d-flex d-md-none">Upcoming Appointment</h1>
                        <Row xs={12} className="upcoming-appointment-row m-0 p-0 d-flex d-md-none">
                            <Col className="upcoming-appointment-container">
                                <UpcomingAppointment upcomingDataList={UpcomingAppointmentData} />
                            </Col>
                        </Row>
                        <Row className="featured-section-row pt-4 px-3 pt-md-4 px-md-5">
                            <Col xs={12} className="featured-section-top-container mb-3">
                                <h1 className="upcoming-heading">Featured</h1>
                                <div className="featured-section-view-all align-items-center">
                                    <h2 className="featured-view-all">View all</h2>
                                    <FaArrowRight className="featured-arrow" />
                                </div>
                            </Col>
                            <Col className="featured-section-card-wrapper pb-4">
                                {vendorsData.map((each) => (
                                    <Featured featuredData={each} key={each.id} handleLikeStatus={handleLikeStatus}/>
                                ))}
                            </Col>
                        </Row>
                        
                    </Container>
                )
            }} 
            </Context.Consumer>
    )

export default HomePage;