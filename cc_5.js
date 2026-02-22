let employees = [
    {eName: "John", hourlyRate: 15.50, hoursWorked: 54},
    {eName: "Janice", hourlyRate: 17.50, hoursWorked: 33},
    {eName: "Jonathan", hourlyRate: 16, hoursWorked: 40},
    {eName: "Julian", hourlyRate: 20, hoursWorked: 62},
    {eName: "Jason", hourlyRate: 15.50, hoursWorked: 25}
];

function calculateBasePay(rate, hours) {
    const basePay = Math.min(hours,40);
    return basePay * rate;
};
console.log(`${calculateBasePay(15.50,54)}`)

function calculateOverTimePay(rate, hours) {
    const overTime = Math.max(hours - 40, 0);
    return overTime * rate * 1.5;
};
console.log(`${calculateOverTimePay(20, 62)}`)


