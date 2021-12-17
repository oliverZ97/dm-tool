import "./App.css";
import { Link } from "react-router-dom";
import MainContentCard from "./components/MainContentCard";

function App() {
  return (
    <div className="bg-forest bg-center bg-cover flex flex-grow">
      <div className=" flex flex-col flex-grow items-center m-10">
        <div className="w-90p h-20 rounded-lg relative">
          <div className="w-full h-full bg-neutral backdrop-blur-lg opacity-60 rounded-lg absolute inset-0"></div>
          <nav className="w-full h-full shadow-xl rounded-lg flex flex-row justify-between items-center relative">
            <div className="flex flex-row justify-start items-center">
              <Link to="/" className="ml-8 mr-4">
                Home
              </Link>
              <Link to="/invoices" className="ml-8 mr-4">
                Location Picker
              </Link>
              <Link to="/expenses" className="mx-4">
                Item Cards
              </Link>
            </div>
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
        <div className="w-90p flex-grow flex justify-end items-end">
          <MainContentCard></MainContentCard>
        </div>
      </div>
    </div>
  );
}

export default App;
