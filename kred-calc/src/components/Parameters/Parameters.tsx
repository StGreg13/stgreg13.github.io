import {useState} from "react";
import {StateType} from "../../types";

const Parameters = ({ onDataUpdate }) => {
    const [data, setData] = useState<StateType>({cost: null, percent: null, months: null});

    const setCost = (value: number | null) => {
        setData({ ...data, cost: value });
    };

    const setPercent = (value: number | null) => {
        setData({ ...data, percent: value });
    };

    const setMonths = (value: number | null) => {
        setData({ ...data, months: value });
    };

    const handleButtonClick = () => {
        // Вызываем функцию onDataUpdate из родительского компонента и передаем ей данные из дочернего компонента
        onDataUpdate(data);
    };

    return (
        <div className="generalData">
            <label>cost</label>
            <input
                type="number"
                value={data.cost !== null ? data.cost : ''}
                onChange={(e) => setCost(parseFloat(e.target.value))}
                placeholder="Cost"
            />
            <label>percent</label>
            <input
                type="number"
                value={data.percent !== null ? data.percent : ''}
                onChange={(e) => setPercent(parseFloat(e.target.value))}
                placeholder="Percent"
            />
            <label>months</label>
            <input
                type="number"
                value={data.months !== null ? data.months : ''}
                onChange={(e) => setMonths(parseFloat(e.target.value))}
                placeholder="Months"
            />
            <button
                onClick={handleButtonClick}
            >Calculate</button>
        </div>
    )
}
export default Parameters