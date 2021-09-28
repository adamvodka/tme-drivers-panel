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
      <div className="tableRow__container flex">
        <div className="tableRow__container--image flex a-st">
          <img src="https://picsum.photos/200" alt="driver avatar" />
        </div>
        <div className="tableRow__container--data flex d-col j-sb">
          <div className="data__plate flex a-c">
            <p>
              <span>Numer rejestracyjny</span>
              <span>ABC 1234</span>
            </p>
            <button>więcej</button>
          </div>
          <div className="data__driverData flex">
            <p>
              <span>Kierowca:</span> <span>Jonhy Dee</span>
            </p>
            <p>
              <span>Telefon:</span> <span>321654987</span>
            </p>
            <p>
              <span>współrzędne geograficzne:</span>
              <span>81.713316 / -133.431669</span>
            </p>
            <p>
              <span>Śr. prędkość::</span> <span>90</span>
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
    </div>
  );
};
