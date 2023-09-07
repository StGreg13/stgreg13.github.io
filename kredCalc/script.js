$(document).ready(function () {
    const diff = $(".swither #1")
    const annu = $(".swither #2")

    const months = $('#months');
    const cost = $('#cost');
    const percent = $('#percent');
    const button = $('#calculate');

    const paymentCalculation = () => {
        $(".paymentTable").css("display", "block");
        const costValue = Number(cost.val());
        const percentValue = Number(percent.val());
        const monthsValue = Number(months.val());
        if (diff.hasClass("active")) {
            $('#paymentTable tr:not(:first)').remove();
            const payments = calculateDifferentiatedPayment(costValue, percentValue, monthsValue);
            payments.forEach(paymentData => {
                $('#paymentTable').append(`<tr><td>${paymentData.month}</td><td>${paymentData.payment}</td><td>${paymentData.interest}</td><td>${paymentData.remainingCost}</td></tr>`);
            });
        } else {
            $('#paymentTable tr:not(:first)').remove();
            const payments = calculateAnnuityPayment(costValue, percentValue, monthsValue);
            payments.forEach(paymentData => {
                $('#paymentTable').append(`<tr><td>${paymentData.month}</td><td>${paymentData.payment}</td><td>${paymentData.interest}</td><td>${paymentData.remainingCost}</td></tr>`);
            });
        }
    };
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
                payment: payment.toFixed(2),
                interest: interest.toFixed(2),
                remainingCost: remainingCost.toFixed(2),
            });
            data.push({
                month: i,
                payment: payment.toFixed(2)
            });
            drawGraph(data)
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
                payment: monthlyPayment.toFixed(2),
                interest: interest.toFixed(2),
                remainingCost: remainingCost.toFixed(2),
            });
            data.push({
                month: i,
                payment: monthlyPayment.toFixed(2)
            });
            drawGraph(data)
        }

        return payments;
    }
    function drawGraph(data) {
        const canvas = document.getElementById('graph');
        const ctx = canvas.getContext('2d');

        const width = canvas.width;
        const height = canvas.height;

        // Очистить холст перед рисованием
        ctx.clearRect(0, 0, width, height);

        // Настроить линии и шрифты
        ctx.strokeStyle = '#2196f3';
        ctx.lineWidth = 2;
        ctx.font = '12px Arial';

        // Вычислить максимальный ежемесячный платеж
        const maxPayment = Math.max(...data.map(d => d.payment));

        // Нарисовать ось Y
        ctx.beginPath();
        ctx.moveTo(40, 20);
        ctx.lineTo(40, height - 20);
        ctx.stroke();

        // Нарисовать ось X
        ctx.beginPath();
        ctx.moveTo(40, height - 20);
        ctx.lineTo(width - 20, height - 20);
        ctx.stroke();

        // Нанести метки на ось Y
        const stepY = (height - 40) / 10;
        for (let i = 0; i <= 10; i++) {
            const y = height - 20 - stepY * i;
            const value = (maxPayment / 10 * i).toFixed(2);
            ctx.fillText(value, 10, y + 5);
            ctx.beginPath();
            ctx.moveTo(35, y);
            ctx.lineTo(40, y);
            ctx.stroke();
        }

        // Нанести метки на ось X
        const stepX = (width - 60) / data.length;
        for (let i = 0; i < data.length; i++) {
            const x = 40 + stepX * i;
            const month = data[i].month;
            ctx.fillText(month, x, height - 5);
        }

        // Нарисовать график
        ctx.beginPath();
        ctx.moveTo(40, height - 20);
        for (let i = 0; i < data.length; i++) {
            const x = 40 + stepX * i;
            const y = height - 20 - (data[i].payment / maxPayment * (height - 40));
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    const checkOnEmpty = (first, second, third) => {
        if (!$.isNumeric(first.val())) {
            first.addClass("redBorder");
        }
        if (!$.isNumeric(second.val())) {
            second.addClass("redBorder");
        }
        if (!$.isNumeric(third.val())) {
            third.addClass("redBorder");
        }
    }
    months.click(() => {
        months.removeClass("redBorder");
    });
    cost.click(() => {
        cost.removeClass("redBorder");
    })
    percent.click(() => {
        percent.removeClass("redBorder");
    })
    button.click(() => {
        checkOnEmpty(months, cost, percent);
        if ($.isNumeric(months.val()) &&
            $.isNumeric(cost.val()) &&
            $.isNumeric(percent.val())) {
            paymentCalculation()
        }
    });

    diff.click(() => {
        diff.addClass("active");
        annu.removeClass("active");
    })
    annu.click(() => {
        annu.addClass("active");
        diff.removeClass("active");
    })

});