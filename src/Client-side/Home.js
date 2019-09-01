import React, { useState } from "react";
import { Link } from "react-router-dom";
import Adminpic from "../Asset/Admin.jpg";
import ClientPic from "../Asset/client.jpg";
import QRcodePic from "../Asset/qrcode.png";
import Button from '@material-ui/core/Button';

const Home = () => {
  const [info, setInfo] = useState(false);

  return (
    <React.Fragment>
      <div className="homeBg" />
      <div className="Home">
        <div className="HomeCont">
          <h1>Welcome To Resturo</h1>
          {!info ? (
            <div className="Options">
              <div className="AdminLoginBTN">
                <h2>Admin Login</h2>
                <Link to="/adminpanel">
                  <img src={Adminpic} alt="admin login" />
                </Link>
              </div>
              <div className="ClientBTN">
                <h2>Client</h2>
                <img
                  src={ClientPic}
                  alt="client from here"
                  onClick={() => {
                    setInfo(true);
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="ClientGuide">
              <h2>Scan the QRCode On Your Table For You Can See The Menu</h2>
              <img src={QRcodePic} alt="QRcode example" />
              <Button size="large" className="BTN" onClick={()=>{
                setInfo(false)
              }}>Back</Button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
