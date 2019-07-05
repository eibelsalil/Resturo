import React,{useContext} from "react";
import AppContext from "../../../../context/AppContext"


const UploadImg = ({ upload,buttonname }) => {

  const context = useContext(AppContext)
  return (
    <div className="imgUp-cont">
      <p className="imgUp-title">Item image</p>
      <div className="upArea">
      {
        context.AdminPage !== "edit"
        ?
        <label className="label">
        <img src={upload} alt="upload" width="48px" className="img-up-icon" />
        <input type="file" className="imgUp-cont-input" name="img" />
     <p className="uploadImg-text">UPLOAD IMAGE</p>   
      </label>
      :
      <label className="labelEdit">
      <input type="file" className="imgUp-cont-input" name="img" />
    </label>
      }
       
        <div className="upCont">
        <p className="tipOne">maximum size: 18MB</p>
        <p className="tipTwo">use file formats .png or .JPEG</p>
        <button className={context.AdminPage !== "edit" ? "confirmUplodButton" : "confirmeditButton" }>{buttonname}</button>
      </div>
        </div>
    </div>
  );
};

export default UploadImg;
