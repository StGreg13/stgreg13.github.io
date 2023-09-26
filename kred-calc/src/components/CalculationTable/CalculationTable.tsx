import s from "./CalculationTable.module.css"

const CalculationTable = (props) => {
    console.log("props data", props.data)
    let paymentList = []
    const {data, type} = props

    function calculateDifferentiatedPayment(cost, percent, months) {
        const monthlyPercent = percent / 100 / 12;
        let remainingCost = cost;
        const payments = [];
        const data = [];

        for (let i = 1; i <= months; i++) {
            const interest = remainingCost * monthlyPercent;
            const principal = cost / months;
            const payment = interest + principal;
            remainingCost -= principal;

            payments.push({
                month: i,
                cost: payment.toFixed(2),
                interest: interest.toFixed(2),
                remaining: remainingCost.toFixed(2),
            });
            data.push({
                month: i,
                cost: payment.toFixed(2)
            });
        }

        return payments;
    }

    function calculateAnnuityPayment(cost, percent, months) {
        const monthlyPercent = percent / 100 / 12;
        const annuityFactor = (monthlyPercent * (1 + monthlyPercent) ** months) / ((1 + monthlyPercent) ** months - 1);
        const monthlyPayment = cost * annuityFactor;
        let remainingCost = cost;
        const payments = [];
        const data = [];

        for (let i = 1; i <= months; i++) {
            const interest = remainingCost * monthlyPercent;
            const principal = monthlyPayment - interest;
            remainingCost -= principal;

            payments.push({
                month: i,
                cost: monthlyPayment.toFixed(2),
                interest: interest.toFixed(2),
                remaining: remainingCost.toFixed(2),
            });
            data.push({
                month: i,
                cost: monthlyPayment.toFixed(2)
            });
        }

        return payments;
    }
    if (type == 'diff') {
        paymentList = calculateDifferentiatedPayment(data.cost, data.percent, data.months)
        console.log("paymentList", paymentList)
    } else {
        paymentList = calculateAnnuityPayment(data.cost, data.percent, data.months)
    }

    return (
        <div className="paymentTable">
            <p>Monthly payment calculation table</p>
            <table id="paymentTable" className={s.horizontal}>
                <thead>
                    <tr>
                        <td>Month</td>
                        <td>Payment</td>
                        <td>Interest</td>
                        <td>Remaining cost</td>
                    </tr>
                </thead>
                <tbody>
                    {paymentList.map((payment, index:number) =>
                        <tr key={index}>
                            <td>{payment.month}</td>
                            <td>{payment.cost}</td>
                            <td>{payment.interest}</td>
                            <td>{payment.remaining}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default CalculationTable