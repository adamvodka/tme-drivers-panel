import "./TableRow.scss";

import { HeartIcon } from "../../img/Heart";
import { useState } from "react";

export const TableRow = () => {
  const [favourite, setFavourite] = useState(false);
  const favouriteHandler = () => {
    setFavourite(!favourite);
  };

  return (
    <div className="tableRow">
      <div className="tableRow__container flex j-">
        <div className="tableRow__container--image">
          <img src="https://picsum.photos/200" alt="driver avatar" />
        </div>
        <div className="tableRow__container--data flex d-col j-sb">
          <div className="data__plate flex a-c">
            <span>ABC 1234</span>
            <button>więcej</button>
          </div>
          <div className="data__driverData">
            <span>Kierowca: Jonhy Dee</span>
            <span>Telefon: 321654987</span>
            <span>współrzędne geograficzne: 81.713316 / -133.431669</span>
            <span>Śr. prędkość: 90</span>
          </div>
        </div>
        <div
          className={
            favourite
              ? "tableRow__container--favourite flex j-c a-c active"
              : "tableRow__container--favourite flex j-c a-c"
          }
          onClick={favouriteHandler}
        >
          <HeartIcon />
        </div>
      </div>
    </div>
  );
};
