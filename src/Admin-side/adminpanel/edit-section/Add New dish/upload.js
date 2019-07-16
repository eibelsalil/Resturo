import React, { useContext } from "react";
import AppContext from "../../../../context/AppContext";
import LoadingOverlay from "react-loading-overlay";

const UploadImg = ({ upload, buttonname, update, click, img, spiner }) => {
  const context = useContext(AppContext);
  return (
    <div className="imgUp-cont">
    <LoadingOverlay
    active={spiner ? true : false}
    spinner
    text="update img..."
    >
      <p className="imgUp-title">Item image</p>
      <div className="upArea">
        {context.AdminPage !== "edit" ? (
          <label className="label">
            <img
              src={upload}
              alt="upload"
              className={!img ? "img-up-icon" : "img-preview"}
            />
            <input
              type="file"
              className="imgUp-cont-input"
              name="img"
              onChange={(e) => update(e)}
            />
            {!img ? <p className="uploadImg-text">UPLOAD IMAGE</p> : null}
          </label>
        ) : (
          <label className="labelEdit">
            <input type="file" className="imgUp-cont-input" name="img" />
          </label>
        )}

        <div className="upCont">
          <p className="tipOne">maximum size: 18MB</p>
          <p className="tipTwo">use file formats .png or .JPEG</p>
          <button
            className={
              context.AdminPage !== "edit"
                ? "confirmUplodButton"
                : "confirmeditButton"
            }
            onClick={click}
          >
            {buttonname}
          </button>
        </div>
      </div>
      </LoadingOverlay>
    </div>
  );
};

export default UploadImg;
