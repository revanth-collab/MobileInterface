// import { useState,useEffect } from "react"
// import { RiHome5Line } from "react-icons/ri";
// import { MdOutlineSlowMotionVideo } from "react-icons/md";
// import { LuScanQrCode } from "react-icons/lu";
// import { MdHistory } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";

// import "./index.css" 

// const MobileHeader = () => {
//     const [active,setActive] =useState(false)
//     const handleActiveOption = () => {
//         setActive(!active)
//     }

//     return (
//         <div className="mobile-header-container">
//             <div className="mobile-header-item" onClick={handleActiveOption}>
//                 <RiHome5Line className={active? "mobile-header-icon mobile-active" : "mobile-header-icon"} />
//                 <span className={active ? "mobile-header-text mobile-active" : "mobile-header-text"}>Home</span>
//             </div>
//             <div className="mobile-header-item" onClick={handleActiveOption}>
//                 <MdOutlineSlowMotionVideo className={active? "mobile-header-icon mobile-active" : "mobile-header-icon"} />
//                 <span className={active ? "mobile-header-text mobile-active" : "mobile-header-text"}>Reels</span>   
//             </div>
//             <div className="mobile-header-item" onClick={handleActiveOption}>
//                 <LuScanQrCode className={active? "mobile-header-icon mobile-active" : "mobile-header-icon"} />
//                 <span className={active ? "mobile-header-text mobile-active" : "mobile-header-text"}>QR</span>
//             </div>
//             <div className="mobile-header-item" onClick={handleActiveOption}>
//                 <MdHistory className={active? "mobile-header-icon mobile-active" : "mobile-header-icon"} />
//                 <span className={active ? "mobile-header-text mobile-active" : "mobile-header-text"}>History</span> 
//             </div>
//             <div className="mobile-header-item" onClick={handleActiveOption}>
//                 <CgProfile className={active? "mobile-header-icon mobile-active" : "mobile-header-icon"} />
//                 <span className={active ? "mobile-header-text mobile-active" : "mobile-header-text"}>Profile</span>
//             </div>

//         </div>
//     )
// }

// export default MobileHeader

import { useState } from "react";
import { RiHome5Fill } from "react-icons/ri";
import { MdOutlineSlowMotionVideo, MdHistory } from "react-icons/md";
import { LuScanQrCode } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import "./index.css";

const navItems = [
  { icon: RiHome5Fill, label: "Home",className:"mobile-header-icon" },
  { icon: MdOutlineSlowMotionVideo, label: "Reels", className: "mobile-header-icon" },
  { icon: LuScanQrCode, label: "QR", className: "mobile-header-icon qr-icon" },
  { icon: MdHistory, label: "History", className: "mobile-header-icon" },
  { icon: CgProfile, label: "Profile", className: "mobile-header-icon" },
];

const MobileHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default active is first item

  return (
    <div className="mobile-header-container">
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className="mobile-header-item"
            onClick={() => setActiveIndex(index)}
          >
            <IconComponent className={isActive ? `${item.label !== "QR"?"mobile-active":""} ${item.className}` : `${item.className}`} />
            <span className={isActive ? `mobile-header-text mobile-active ${item.label === "QR" ? "qr-text" : ""}` : `mobile-header-text ${item.label === "QR" ? "qr-text" : ""}`}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MobileHeader;
