import React from "react";


const Context = React.createContext({
    selectedService:"All",
    handleSelectedServiceStatus: ()=>{},

    location:"Hyderabad",
    handleLocationChange: ()=>{},

    UpcomingAppointmentData: [],
    
    featuredData:[],

    bannerData:[],

    handleLikeStatus:() => {}

})

export default Context;