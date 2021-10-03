import "./TME.scss";

import { Table } from "../Table/Table";

function TME() {
  return (
    <div className="tme">
      <div className="wrapper">
        <header className="tme__header">
          <nav>
            <ul className="flex j-sb a-c">
              <li>
                <h1 className="App-logo">TME.eu</h1>
              </li>
              <li>
                <a href="#">
                  <button onClick={() => localStorage.clear()}>
                    wyzeruj ulubione
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Table />
        </main>
      </div>
    </div>
  );
}

export default TME;
