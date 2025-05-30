import React from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './components/HomePage';
import SpaPage from './components/SpaPage';
// import SalonPage from "./components/SalonPage";

import SpaServicePage from "./components/SpaServicePage";

import Context from "./contextAPI/Context"; 

import Header from './components/Header';
import MobileHeader from "./components/MobileHeader";
// import { body } from "framer-motion/client";

// import './App.css';

class App extends React.Component {
  state = {location:"Hyderabad",main_category_id:"", vendorsData:[], latitude:"", longitude:"",selectedService:"All",featuredData:[{
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

    getServicesData = async () => {
      const { latitude, longitude,main_category_id } = this.state;

      console.log("Fetching services data with latitude:", latitude, "and longitude:", longitude);
      if (!latitude || !longitude) {
        console.warn("Missing latitude or longitude.");
        return;
      }

      const queryParams = new URLSearchParams({
        auth_code: "t1LDmyuNIbsBYwRSNFOocUOrs8AATOs1"
      });

      const url = `/api/user/near-by-shops?${queryParams.toString()}`;
      const formData = new FormData();
      formData.append("latitude", "17.4266834");
      formData.append("longitude", "78.6050584");  
      formData.append("main_category_id", `${main_category_id}`);

      const options = {
        method: "POST",
        body: formData

      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Services Data:", data);
        this.setState({ vendorsData: data.details || []});
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    componentDidMount() {
      fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        this.setState({latitude:data.latitude, longitude:data.longitude, location:data.city || "Hyderabad" },
          () => {
          this.getServicesData();
        }
        );
      })
      .catch(error => console.error("IP Geolocation failed", error));

    }


    handleSelectedServiceStatus = (service) => {
        this.setState({ selectedService: service });
    }

    setMainCategoryId = (number) => {
      // console.log("Setting main category ID to:", number);
      this.setState({ main_category_id: `${number}` },this.getServicesData);
    }

    handleLocationChange = (location) => {
        this.setState({ location });
    }

    handleLikeStatus = (id) => {
        this.setState((prevState) => ({
            vendorsData: prevState.vendorsData.map((item) =>
                item.id === id ? { ...item, added_favorite: !item.added_favorite } : item
            ),
        }));
    }

  render() {
    const { location, latitude,longitude,main_category_id,vendorsData, selectedService, featuredData, bannerData, UpcomingAppointmentData } = this.state;    
    return (
      <Context.Provider value={{location,vendorsData, latitude,longitude, selectedService,main_category_id, featuredData, bannerData, UpcomingAppointmentData,
        handleSelectedServiceStatus: this.handleSelectedServiceStatus,
        handleLocationChange: this.handleLocationChange,
        handleLikeStatus: this.handleLikeStatus,
        setMainCategoryId: this.setMainCategoryId,
      }}>
        <Router>
          <div className="d-none d-md-block mb-5">
            <Header />
          </div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/spa" element={<SpaPage />} />
            <Route exact path="/salon/:id" element={<SpaServicePage />} />
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
