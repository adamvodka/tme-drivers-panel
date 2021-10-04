import "./Table.scss";

import { useEffect, useState } from "react";

import { TableRow } from "../TableRow/TableRow";
import closeico from "../../img/close-circle.svg";
import { data } from "../../database/data";

export const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    if (window.localStorage.length === 0) {
      const json = JSON.stringify(data);
      localStorage.setItem("drivers", json);
    }
  }, [drivers]);

  useEffect(() => {
    const json = localStorage.getItem("drivers");
    const savedDrivers = JSON.parse(json);
    if (savedDrivers) {
      setDrivers(savedDrivers);
    }
  }, []);

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
            className={searchTerm === "" ? "" : "active"}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className={searchTerm === "" ? "" : "focus"}>
            Znajdź kierowce
          </span>
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
          {filteredDrivers()
            .sort((driver) => (driver.isFavourite ? -1 : 1))
            .map((driver) => {
              return <TableRow {...driver} key={driver._id} />;
            })}
        </ul>
      </main>
    </div>
  );
};
