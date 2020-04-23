'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов за этот месяц', ''),
                b = prompt('Во сколько обойдется?', '');
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
                console.log('done');
                appData.expenses[a] = b;
            } else {
                // вернутся к вопросу обратно вернутся обратно на цикл
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка')
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка')
        } else {
            console.log('Произошла ошибка')
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt('Статья не обязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        let numCallbackRuns = 1;
        while (!toString(items) || items == '' || items == null) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что то еще?'));
        appData.income.sort();
        appData.income.forEach(function (income) {
            console.log(income);
            numCallbackRuns++;
        })
    },
};


function forIn() {
    console.log('Наша программа включает в себя данные:');
    for (let prop in appData) {
        console.log(prop + '' + appData[prop]);
    }
}

forIn();
