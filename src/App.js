import "./App.css";
import { Link } from "react-router-dom";
import MainContentCard from "./components/MainContentCard";

function App() {
  return (
    <div className="bg-tertiary flex flex-grow">
      <div className=" flex flex-col flex-grow items-center m-10">
        <nav className="w-90p h-20 bg-neutral shadow-xl rounded-lg flex flex-row justify-start items-center">
          <Link to="/invoices" className="ml-8 mr-4">Location Picker</Link>
          <Link to="/expenses" className="mx-4">Item Cards</Link>
        </nav>
        <div className="w-90p flex-grow flex justify-end items-end">
          <MainContentCard></MainContentCard>
        </div>
      </div>
    </div>
  );
}

export default App;
