import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';


import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { FaArrowRight } from "react-icons/fa6";
import Featured from "../Featured";

import Banner from "../Banner";

import Context from "../../contextAPI/Context";

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const SpaPage = () => {

    const navigate = useNavigate();

    const {selectedService, handleSelectedServiceStatus,main_category_id,setMainCategoryId, featuredData, bannerData, handleLikeStatus,vendorsData, latitude, longitude,location} = useContext(Context);

    // console.log("Vendor Data:", vendorsData);
    // console.log("main_category_id:", main_category_id);

    const [spaService,setSpaService] = useState([]);
    const [premiumSpa,setPremiumSpa] = useState([]);

    // console.log("Latitude:" + latitude, "Longitude:" + longitude," Location:" + location);

    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {

            const dummyfeaturedData=[{
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
            ];
            const dummyData = [
                  {
                    id: 1,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Dry Spa"
                },
                {
                    id: 2,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 3,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 4,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 5,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 6,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 7,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 8,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 9,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 10,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 11,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
                {
                    id: 12,
                    imageUrl: "/images/Spa_Service1.png",
                    service: "Hot Stone"
                },
            ];
            setSpaService(dummyData);
            setPremiumSpa(dummyData);
            setLoading(false);
        }, 1000);
    },[])


    const handleLocationChanged = (location) => {
        console.log(location);    
    }
    return (
        <Container fluid className="px-md-5 spa-page p-4">

            <Row className="gap-3 pb-3">
                <Col xs="auto" className="d-flex d-md-none">
                    <Link to="/" className="spa-back-container">
                        <img src="/images/Back.png" alt="back" className="back" onClick={() => window.history.back()}/>
                    </Link>
                </Col>
                <Col className="d-flex d-md-none dropdown spa-page-location-container">
                    <div>
                        <img src="/images/location_icon.png"  alt="location-images" className="location-image" />
                        <div className="dropdown">
                            <button className="dropbtn location-heading">Hyderabad</button>
                            <div className="dropdown-content">
                                <p onClick={()=>handleLocationChanged("Hyderabad")}>Hyderabad</p>
                                <p onClick={()=>handleLocationChanged("Bangalore")}>Bangalore</p>
                                <p onClick={()=>handleLocationChanged("Chennai")}>Chennai</p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                </Col>
            </Row>
            <Row className="mt-md-3 service-page-align-container gap-3 pb-3">
                <Col xs="auto" md={5} className="order-1 order-md-2 search-container">
                    <img src="/images/SearchIcon.png" alt="search" className="search-icon" />
                    <input type="text" className="search-input" placeholder="Search Spa, Services"/>
                </Col>

                <Col xs={2} className="popup-main-container order-1 order-md-1 mb-2 ms-3">
                    <Popup
                        modal
                        contentStyle={{ borderRadius: '20px', width: '90%', maxWidth: '600px' }}
                        trigger={
                            <div className="spa-reload-container px-2">
                                <h1 className="spa-reload-content">{selectedService}</h1>
                                <img src="/images/Reload.png" alt="reload" className="spa-reload-image" />
                            </div>
                        }
                    >
                        {close => (
                            <div className="popup-container">
                                <h1 className="popup-heading">Switch Categories</h1>
                                <div className="popup-card-container">
                                    <div>
                                        <div className="link popup-card" onClick={() => {
                                            handleSelectedServiceStatus('SALON'); 
                                            setMainCategoryId(1);
                                            close();
                                            navigate('/salon');
                                        }}>
                                            <img src="/images/Salon_category.webp" alt="Salon" className="popup-card-image" />
                                            <div className="popup-card-content">
                                                <img src="/images/Salon.png" alt="Salon Icon" className="popup-card-content-image " />
                                                <h1 className="popup-card-title">Salon</h1>
                                                <FaArrowRight className="featured-arrow" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="link popup-card" onClick={() => {
                                            handleSelectedServiceStatus('SPA');
                                            setMainCategoryId(2);
                                            close(); 
                                            navigate('/spa'); 
                                        }}>
                                            <img src="/images/Spa_category.webp" alt="Spa" className="popup-card-image" />
                                            <div className="popup-card-content">
                                                <img src="/images/Spa.png" alt="Salon Icon" className="popup-card-content-image " />
                                                <h1 className="popup-card-title">Spa</h1>
                                                <FaArrowRight className="featured-arrow" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="link popup-card" onClick={() => {
                                            handleSelectedServiceStatus('CLINIC');
                                            setMainCategoryId(3);
                                            close(); 
                                            navigate('/clinic'); 
                                        }}>
                                            <img src="/images/Clinic_category.webp" alt="Clinic" className="popup-card-image" />
                                            <div className="popup-card-content">
                                                <img src="/images/Clinic.png" alt="Salon Icon" className="popup-card-content-image " />
                                                <h1 className="popup-card-title">Clinic</h1>
                                                <FaArrowRight className="featured-arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                </Col>

                <Col xs={3} className="order-3 d-none d-md-flex dropdown spa-page-location-container mb-2">
                    <div>
                        <img src="/images/location_icon.png"  alt="location-images" className="location-image" />
                        <div className="dropdown">
                            <button className="dropbtn location-heading">Hyderabad</button>
                            <div className="dropdown-content">
                                <p onClick={()=>handleLocationChanged("Hyderabad")}>Hyderabad</p>
                                <p onClick={()=>handleLocationChanged("Bangalore")}>Bangalore</p>
                                <p onClick={()=>handleLocationChanged("Chennai")}>Chennai</p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                </Col>

            </Row>
            <Row>
                <Col xs={12} className="featured-section-top-container">
                    <h1 className="upcoming-heading">Services</h1>
                    <div className="featured-section-view-all align-items-center">
                        <h2 className="featured-view-all">View all</h2>
                        <FaArrowRight className="featured-arrow" />
                    </div>
                </Col>
            </Row>
            <div className="spa-service-cards-row">
                {loading?(
                    <p>Loading...</p>
                ):spaService.length ===0?(
                    <p>No spa Services available</p>
                ):(spaService.map((each) =>(
                    <div className="spa-card">
                        <img src={each.imageUrl} alt={each.service} className="spa-card-image" />
                        <h5 className="spa-card-title">{each.service}</h5>
                    </div>
                )))}
            </div>
            <Row className="mt-3 mb-3" >
                <Col xs={12}>
                    {/* <img src="/images/Banner.avif" alt="Banner" className="spaservice-banner" /> */}
                    <Banner bannerData={bannerData}/>
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="featured-section-top-container">
                    <h1 className="upcoming-heading">Premium Spa</h1>
                    <div className="featured-section-view-all align-items-center">
                        <h2 className="featured-view-all">View all</h2> 
                        <FaArrowRight className="featured-arrow" />
                    </div>
                </Col>
            </Row>
            
            <Row className="mb-md-4">
                <Col>
                    <div className="premium-spa-row">
                        {premiumSpa.map((each) => (
                        <img
                            key={each.id}
                            src={each.imageUrl}
                            alt={each.service}
                            className="premium-spa-services"
                        />
                        ))}
                    </div>
                </Col>
            </Row>

            <Row className="d-flex d-md-none mt-4 mb-4">
                <Col className="suggest-card me-2">
                        <img src="/images/OfferImage.png" alt="OfferImage" className="suggest-image" />
                        <h1 className="suggest-content">Offer</h1>
                </Col>
                <Col className="suggest-card">
                    <img src="/images/Recommended.png" alt="OfferImage" className="suggest-image" />
                    <h1 className="suggest-content">Recommended</h1>
                </Col>
            </Row>


            <div className="filters-row">
                <h1 className="filters-content">Filters</h1>
                
                <div className="filters-scroll-wrapper">
                    <div className="filters-scroll">
                    
                        <div className="filter-button">
                            <div className="dropdown">
                            <button className="dropbtn location-heading">Sort</button>
                            <div className="dropdown-content">
                                <p onClick={() => handleLocationChanged("Increase")}>Low to High</p>
                                <p onClick={() => handleLocationChanged("Decrease")}>High to Low</p>
                            </div>
                            </div>
                            <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                        </div>

                        <div className="filter-button">
                            <button className="dropbtn location-heading">Discount</button>
                        </div>

                        <div className="filter-button">
                            <div className="dropdown">
                                <button className="dropbtn location-heading">Gender</button>
                                <div className="dropdown-content">
                                    <p onClick={()=>handleLocationChanged("Hyderabad")}>Male</p>
                                    <p onClick={()=>handleLocationChanged("Bangalore")}>Female</p>
                                    <p onClick={()=>handleLocationChanged("Chennai")}>Unisex</p>
                                </div>
                            </div>
                            <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                        </div>

                        {/* <div className="filter-button">
                            <div className="dropdown">
                                <button className="dropbtn location-heading">Gender</button>
                                <div className="dropdown-content">
                                    <p onClick={()=>handleLocationChanged("Hyderabad")}>Male</p>
                                    <p onClick={()=>handleLocationChanged("Bangalore")}>Female</p>
                                    <p onClick={()=>handleLocationChanged("Chennai")}>Unisex</p>
                                </div>
                            </div>
                            <img src="/images/Vector.png" alt="arrow" className="vector-image" />
                        </div> */}

                    </div>
                </div>
            </div>

            <Row className="pt-4">
                <Col className="featured-section-card-wrapper pb-4">
                    {vendorsData.map((each) => (
                        <Featured featuredData={each} key={each.id} />
                    ))}
                </Col>
            </Row>

        </Container>
    )
}

export default SpaPage;