import "./Table.scss";

import { TableRow } from "../TableRow/TableRow";

export const Table = () => {
  return (
    <div className="table">
      <header className="table__header flex j-sb a-c">
        <h2>Drivers</h2>
        <input placeholder="wyszukajka" />
      </header>
      <main className="table__container">
        <ul>
          <li>
            <TableRow />
          </li>
          <li>
            <TableRow />
          </li>
          <li>
            <TableRow />
          </li>
          <li>
            <TableRow />
          </li>
        </ul>
      </main>
    </div>
  );
};
