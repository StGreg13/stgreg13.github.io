import './App.css';
import Header from "./components/Header/Header.tsx";
import Parameters from "./components/Parameters/Parameters.tsx";
import CalculationGraph from "./components/CalculationGraph/CalculationGraph.tsx";
import CalculationTable from "./components/CalculationTable/CalculationTable.tsx";
import {useState} from "react";

function App() {
    const [activeTab, setActiveTab] = useState('diff');
    const [dataFromChild, setDataFromChild] = useState({});

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const handleDataFromChild = (data) => {
        console.log("data", data)
        setDataFromChild(data);
    };
  return (
    <div className="App">
        <Header/>
        <main>
            <section className="welcome">
                <h1>Loan calculator</h1>
                <p>
                    Very convenient and fast calculator that allows you to quickly
                    calculate how profitable you offer a loan.
                </p>
            </section>
            <section className="working">
                <div className="switcher">
                    <span
                        id="diff"
                        className={activeTab === 'diff' ? 'active' : ''}
                        onClick={() => handleTabClick('diff')}
                    >
                      Differentiated
                    </span>
                    <span
                        id="annu"
                        className={activeTab === 'annu' ? 'active' : ''}
                        onClick={() => handleTabClick('annu')}
                    >
                      Annuity
                    </span>
                </div>
            </section>
            <Parameters onDataUpdate={handleDataFromChild}/>
            <CalculationGraph/>
            <CalculationTable data={dataFromChild} type={activeTab}/>
        </main>
    </div>
  );
}

export default App;
