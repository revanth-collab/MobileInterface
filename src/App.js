import React from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './components/HomePage';
import SpaPage from './components/SpaPage';
// import SalonPage from "./components/SalonPage";

import Context from "./contextAPI/Context"; 

import Header from './components/Header';
import MobileHeader from "./components/MobileHeader";

// import './App.css';

class App extends React.Component {
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
    },
    {
        "id":4,
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
        "id":5,
        "imageUrl":"images/Featured1.png",
        "title":"Serenity Wellness Center",  
        "description":"Serenity Wellness Center is a holistic wellness center providing spa, yoga, and wellness services.",
        "category":"Wellness",
        "rating":4.8,
        "distance":"3.0 km",
        "offer":"15% off on spa packages",
        "liked":false
    }
    ],
    bannerData:[{
        "id":1,
        "imageUrl":"images/Banner.avif",
        "title":"Relax"
    },
    {
        "id":2,
        "imageUrl":"images/Banner.avif",
        "title":"Rejuvenate"
    },
    {
        "id":3,
        "imageUrl":"images/Banner.avif",
        "title":"Refresh"
    }],
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
    const { location, selectedService, featuredData, bannerData, UpcomingAppointmentData } = this.state;
    return (
      <Context.Provider value={{location, selectedService, featuredData, bannerData, UpcomingAppointmentData,
        handleSelectedServiceStatus: this.handleSelectedServiceStatus,
        handleLocationChange: this.handleLocationChange,
        handleLikeStatus: this.handleLikeStatus
      }}>
        <Router>
          <div className="d-none d-md-block mb-5">
            <Header />
          </div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/spa" element={<SpaPage />} />
            <Route exact path="/salon" element={<SpaPage />} />
            <Route exact path= "/clinic" element={<SpaPage />} />
          </Routes>
          <div className="d-block d-md-none">
            <MobileHeader />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
