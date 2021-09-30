import "./Table.scss";

import { TableRow } from "../TableRow/TableRow";
import closeico from "../../img/close-circle.svg";
import { data as drivers } from "../../database/data";
import { useState } from "react";

export const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDrivers = () => {
    return drivers && searchTerm !== ""
      ? drivers.filter(
          (driver) =>
            driver.name
              .toLocaleLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            driver.surname
              .toLocaleLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            driver.plate.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
      : drivers;
  };
  const clearSearchHandler = () => {
    setSearchTerm("");
  };

  return (
    <div className="table">
      <header className="table__header flex j-sb a-c">
        <h2>Drivers</h2>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Szukaj..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={closeico}
            alt=""
            className={searchTerm === "" ? "hidden" : "visible"}
            onClick={clearSearchHandler}
          />
        </div>
      </header>
      <main className="table__container">
        <ul>
          {filteredDrivers().map((driver) => {
            return <TableRow {...driver} key={driver._id} />;
          })}
        </ul>
      </main>
    </div>
  );
};
