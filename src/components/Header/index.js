import {useState} from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

import { RiHome5Fill } from "react-icons/ri";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoCart } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


import "./index.css"

const Header = () => {
    const [active, setActive] = useState(false);
    const handleActiveOption = () => {
        setActive(!active);
    };
    return (
            // <Row className="header-container">
            //     <Col xs={3}>
            //         <img src="/est_logo25.png" alt="logo" className="header-logo" />
            //     </Col>
            //     <Col xs={8} className="header-links">
            //         <Link to="/" className="header-links-item" onClick={handleActiveOption}>
            //             <RiHome5Fill className={active ? "header-icon header-active" : "header-icon"} />
            //             <span className={active ? "header-text header-active" : "header-text"}>Home</span>
            //         </Link>
            //         <div className="header-links-item" onClick={handleActiveOption}>
            //             <CiSearch className={active ? "header-icon header-active" : "header-icon"} />
            //             <span className={active ? "header-text header-active" : "header-text"}>Search</span>
            //         </div>
            //         <Link to="/reels" className="header-links-item" onClick={handleActiveOption}>
            //             <MdOutlineSlowMotionVideo className={active ? "header-icon header-active" : "header-icon"}/>
            //             <span className={active ? "header-text header-active" : "header-text"}>Reels</span>
            //         </Link>
            //         <Link to="/cart" className="header-links-item" onClick={handleActiveOption}>
            //             <IoCart className={active ? "header-icon header-active" : "header-icon"} />
            //             <span className={active ? "header-text header-active" : "header-text"}>Cart</span>
            //         </Link>
            //         <Link to="/profile" className="header-links-item" onClick={handleActiveOption}>
            //             <CgProfile className={active ? "header-icon header-active" : "header-icon"} />
            //             <span className={active ? "header-text header-active" : "header-text"}>Profile</span>
            //         </Link>
            //     </Col>
            // </Row>

            <div className="header-container">
                <div className="header-left">
                    {/* <img src="/est_logo25.png" alt="logo" className="header-logo" /> */}
                    <h1 className="logo-added"><span className="en-color">e</span>stetica<span className="en-color">n</span>ow</h1>
                </div>
                <div className="header-links">
                    <Link to="/" className="header-links-item" onClick={handleActiveOption}>
                    <RiHome5Fill className={active ? "header-icon header-active" : "header-icon"} />
                    <span className={active ? "header-text header-active" : "header-text"}>Home</span>
                    </Link>
                    <div className="header-links-item" onClick={handleActiveOption}>
                    <CiSearch className={active ? "header-icon header-active" : "header-icon"} />
                    <span className={active ? "header-text header-active" : "header-text"}>Search</span>
                    </div>
                    <Link to="/reels" className="header-links-item" onClick={handleActiveOption}>
                    <MdOutlineSlowMotionVideo className={active ? "header-icon header-active" : "header-icon"} />
                    <span className={active ? "header-text header-active" : "header-text"}>Reels</span>
                    </Link>
                    <Link to="/cart" className="header-links-item" onClick={handleActiveOption}>
                    <IoCart className={active ? "header-icon header-active" : "header-icon"} />
                    <span className={active ? "header-text header-active" : "header-text"}>Cart</span>
                    </Link>
                    <Link to="/profile" className="header-links-item" onClick={handleActiveOption}>
                    <CgProfile className={active ? "header-icon header-active" : "header-icon"} />
                    <span className={active ? "header-text header-active" : "header-text"}>Profile</span>
                    </Link>
                </div>
                </div>

    );
}

export default Header;