import "./Driver.scss";

import { data as drivers } from "../../database/data";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Driver = () => {
  let { _id } = useParams();
  const [copied, setCopied] = useState(false);

  const driver = drivers.find((driver) => driver._id === String(_id));

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          alert("Nie udało się skopiować", err);
        });
    }
    console.log(navigator);
  };
  return (
    <div className="driver flex j-sb  d-col">
      <div className="driver-header flex j-sb a-c">
        <h2>{`${driver.name} ${driver.surname}`}</h2>
        <button onClick={copyToClipboard} type="copy" className="">
          {!copied ? "Skopiuj link do kierowcy" : "Skopiowany!"}
        </button>
      </div>
      <div className="driver-data__container flex j-sb">
        <div className="content flex d-col">
          <p>Telefon: {driver.phone}</p>
          <p>Email: {driver.email}</p>
          <p>
            Position: {driver.longitude} / {driver.latitude}
          </p>
          <p>ID: {driver._id}</p>
        </div>
        <div className="avatar">
          <img src={driver.picture} alt="driver avatar" />
        </div>
      </div>
    </div>
  );
};
