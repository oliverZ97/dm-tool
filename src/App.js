import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Invoices from "./routes/Invoices";
import Expenses from "./routes/Expenses";
import Home from "./routes/Home";

function App() {
  return (
    <div className="bg-forest bg-center bg-cover flex flex-grow overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center p-10">
        <div className="w-90p min-h-20 h-20 rounded-lg relative">
          <div className="w-full h-full bg-neutral backdrop-blur-lg opacity-60 rounded-lg absolute inset-0"></div>
          <nav className="w-full h-full shadow-xl rounded-lg flex flex-row justify-between items-center relative">
            <ul className="flex flex-row justify-start items-center">
              <li className="ml-8 mr-4">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-4">
                <Link to="/invoices">Location Picker</Link>
              </li>
              <li className="mx-4">
                <Link to="/expenses">Item Cards</Link>
              </li>
            </ul>
            <div className="h-full bg-primary opacity-100 flex flex-row">
              <div className="bg-tertiary w-8"></div>
              <div className="bg-secondary w-12"></div>
              <div className="bg-primary w-20"></div>
            </div>
            <div className="absolute right-0">
              <input
                className="p-3 bg-white rounded-full mx-4"
                placeholder="Search..."
              ></input>
            </div>
          </nav>
        </div>
        <div className="w-90p h-50p flex-grow flex justify-center items-start pt-8">
          <div className="bg-neutral shadow-xl w-full h-full rounded-lg p-8 background-blur-lg opacity-90">
            <div className="overflow-scroll h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/expenses" element={<Expenses />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
