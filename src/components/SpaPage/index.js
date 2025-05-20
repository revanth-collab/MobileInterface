import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { FaArrowRight } from "react-icons/fa6";

import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const SpaPage = () => {

    const [spaService,setSpaService] = useState([]);

    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
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
            ];
            setSpaService(dummyData);
            setLoading(false);
        }, 1000);
    },[])


    const handleLocationChanged = (location) => {
        console.log(location);    
    }
    return (
        <Container fluid className="spa-page p-4">
            <Row className="gap-3 pb-3">
                <Col xs="auto" className="spa-back-container">
                    <img src="/images/Back.png" alt="back" className="back" onClick={() => window.history.back()}/>
                </Col>
                <Col className="dropdown spa-page-location-container">
                    <div>
                        <img src="/images/Group 1000006152.png"  alt="location-images" className="location-image" />
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
            <Row className="gap-3 pb-3">
                <Col className="search-container">
                    <img src="/images/SearchIcon.png" alt="search" className="search-icon" />
                    <input type="text" className="search-input" placeholder="Search Spa, Services"/>
                </Col>
                <Col xs='auto' className="spa-reload-container">
                    <h1 className="spa-reload-content">SPA</h1>
                    <img src="/images/Reload.png" alt="reload" className="spa-reload-image" />
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
            <Row className="mt-4">
            {loading ? (
                <p>Loading...</p>
            ) : spaService.length === 0 ? (
                <p>No spa services available.</p>
            ) : (
                spaService.map((service) => (
                <Col key={service.id} className="spa-card">
                        <img src={service.imageUrl} alt={service.service} className="spa-card-image" />
                        <h5 className="spa-card-title">{service.service}</h5>
                </Col>
                ))
            )}
            </Row>

        </Container>
    )
}

export default SpaPage;