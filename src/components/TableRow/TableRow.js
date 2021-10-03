import "./TableRow.scss";

import { HeartIcon } from "../../img/Heart";
import { useState } from "react";

export const TableRow = ({
  index,
  isFavourite,
  picture,
  name,
  surname,
  email,
  phone,
  latitude,
  longitude,
  plate,
  speed,
  _id,
}) => {
  const [favourite, setFavourite] = useState(isFavourite);
  const [hidden, setHidden] = useState(false);
  const [driver, setDriver] = useState({
    index: index,
    isFavourite: isFavourite,
    picture: picture,
    name: name,
    surname: surname,
    email: email,
    phone: phone,
    latitude: latitude,
    longitude: longitude,
    plate: plate,
    speed: speed,
    _id: _id,
  });

  const favouriteHandler = () => {
    setFavourite(!favourite);
    const drivers = JSON.parse(localStorage.getItem("drivers"));
    const driver = drivers.find((driver) => driver._id === _id);
    driver.isFavourite = !isFavourite;
    localStorage.setItem("drivers", JSON.stringify(drivers));
  };

  const hiddenHandler = () => {
    setHidden(!hidden);
  };

  const onClickOutsideListener = () => {
    setHidden(false);
    document.removeEventListener("click", onClickOutsideListener);
  };

  function driverDetail() {
    window.open(`/driver/${_id}`, "driver detail", "width=626,height=436");
  }

  return (
    <li
      className="tableRow"
      onMouseLeave={() => {
        document.addEventListener("click", onClickOutsideListener);
      }}
    >
      <div className="tableRow__container flex">
        <div className="tableRow__container--image flex a-st">
          <img src={picture} alt="driver avatar" />
        </div>
        <div className="tableRow__container--data flex d-col j-sb">
          <div className="data__plate flex a-c">
            <p>
              <span>Numer rejestracyjny</span>
              <span>{plate}</span>
            </p>

            <button onClick={driverDetail} className="deskop-detail">
              więcej
            </button>
          </div>
          <div className="data__driverData">
            <p className="name">
              <span>Kierowca:</span>
              <span>{name}</span>
              <span>{surname}</span>
            </p>
            <p className="phone">
              <span>Telefon:</span> <span>{phone}</span>
            </p>
            <p className="geo">
              <span>Współrzędne geograficzne:</span>
              <span>
                {latitude} / {longitude}
              </span>
            </p>
            <p className="speed">
              <span>Śr. prędkość:</span> <span>{speed}</span>
            </p>
          </div>
        </div>
        <div
          className={
            favourite
              ? "tableRow__container--favourite flex j-c a-c as-c active"
              : "tableRow__container--favourite flex j-c a-c as-c"
          }
          onClick={favouriteHandler}
        >
          <HeartIcon />
        </div>
      </div>
      <div className="table-row__container flex d-col mobile">
        <div className="data__plate flex a-c">
          <p>
            <span>Numer rejestracyjny</span>
            <span>{plate}</span>
          </p>
        </div>
        <div className="flex j-sb">
          <div className="hidden-drivers">
            <img src={picture} alt="driver avatar" />
            <div className={!hidden ? "data__hidden" : "data__hidden visible"}>
              <div className="flex d-col">
                <p>Najblizsi kierowcy:</p>
                <p>
                  <span>Kierowca</span>
                  <span>Marek</span>
                </p>
                <p>
                  <span>Nr telefonu:</span>
                  <span>321654987</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex d-col j-sa a-c btns">
            <button onClick={hiddenHandler} className="mobile-detail">
              więcej
            </button>
            <div
              className={
                favourite
                  ? "tableRow__container--favourite flex j-c a-c as-c active"
                  : "tableRow__container--favourite flex j-c a-c as-c"
              }
              onClick={favouriteHandler}
            >
              <HeartIcon />
            </div>
          </div>
        </div>
        <div className="data__driverData">
          <p className="name">
            <span>Kierowca:</span>
            <span>{name}</span>
            <span>{surname}</span>
          </p>
          <p className="phone">
            <span>Telefon:</span> <span>{phone}</span>
          </p>
          <p className="geo">
            <span>Współrzędne geograficzne:</span>
            <span>
              {latitude} / {longitude}
            </span>
          </p>
          <p className="speed">
            <span>Śr. prędkość:</span> <span>{speed}</span>
          </p>
        </div>
      </div>
    </li>
  );
};
