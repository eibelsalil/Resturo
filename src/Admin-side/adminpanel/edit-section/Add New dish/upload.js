import React from "react";

const UploadImg = ({ upload }) => {
  return (
    <div className="imgUp-cont">
      <p className="imgUp-title">Item image</p>
      <div className="upArea">
        <label>
          <img src={upload} alt="upload" width="48px" className="img-up-icon" />
          <input type="file" className="imgUp-cont-input" name="img" />
          <p className="uploadImg-text">UPLOAD IMAGE</p>
        </label>
        <div className="upCont">
        <p className="tipOne">maximum size: 18MB</p>
        <p className="tipTwo">use file formats .png or .JPEG</p>
        <button className="confirmUplodButton">UPLOAD</button>
      </div>
        </div>
    </div>
  );
};

export default UploadImg;
