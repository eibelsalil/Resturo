import React, { useState } from "react";
import { Link } from "react-router-dom";
import Adminpic from "../Asset/Admin.jpg";
import ClientPic from "../Asset/Client.jpg";
import QRcodePic from "../Asset/qrcode.png";
import {Fade,Stagger,FadeTransform} from "react-animation-components"

const Home = () => {
  const [info, setInfo] = useState(false);

  return (
    <React.Fragment>
      <div className="homeBg" />
      <div className="Home">
        <div className="HomeCont">
        <Stagger in>
        <Fade in>
        <h1>Welcome To Resturo</h1>
        </Fade>
        </Stagger>  
          {!info ? (
            <div className="Options">
              <div className="AdminLoginBTN">
              <Stagger in>
              <Fade in>
                <h2>Admin Login</h2>
                </Fade>
                </Stagger>
                <FadeTransform in
                transformProps={{
                  exitTransform: "scale(0.5) translateY(-50%)"
              }}>
                <Link to="/adminpanel">
                <img src={Adminpic} alt="admin login" />
              </Link>
                </FadeTransform>
              </div>
              <div className="ClientBTN">
              <Stagger in>
              <Fade in>
                <h2>Client</h2>
                </Fade>
                </Stagger>
                <FadeTransform in 
                transformProps={{
                  exitTransform: "scale(0.5) translateY(-50%)"
              }}
                >
                <img
                src={ClientPic}
                alt="client from here"
                onClick={() => {
                  setInfo(true);
                }}
              />
                </FadeTransform>
              </div>
            </div>
          ) : (
            <div className="ClientGuide">
              <h2>Scan the QRCode On Your Table For You Can See The Menu</h2>
              <img src={QRcodePic} alt="QRcode example" />
              <button  className="BTN" onClick={()=>{
                setInfo(false)
              }}>
              Back
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
