import React from "react";


const Context = React.createContext({

    vendorsData:[],
    
    latitude:"",
    longitude:"",
    
    selectedService:"All",
    handleSelectedServiceStatus: ()=>{},

    location:"Hyderabad",
    handleLocationChange: ()=>{},

    main_category_id:"",
    setMainCategoryId: () => {},

    UpcomingAppointmentData: [],
    
    featuredData:[],

    bannerData:[],

    handleLikeStatus:() => {}

})

export default Context;