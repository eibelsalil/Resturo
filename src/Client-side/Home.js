import React, { useState } from "react";
import QrReader from "react-qr-reader";

const Home = () => {
  const [url, setUrl] = useState("No result");
  const handelScan = (data) => {
    if (data) {
      setUrl(data);
    }
  };
  const handelEroor = (err) => {
    console.log(err);
  };
  return (
    <div>
      <QrReader
        delay={300}
        onScan={() => handelScan()}
        onError={() => handelEroor()}
      />
      <p>{url}</p>
    </div>
  );
};

export default Home