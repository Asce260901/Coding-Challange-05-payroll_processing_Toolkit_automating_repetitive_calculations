let employees = [
    {eName: "John", hourlyRate: 15.50, hoursWorked: 54},
    {eName: "Janice", hourlyRate: 17.50, hoursWorked: 33},
    {eName: "Jonathan", hourlyRate: 16, hoursWorked: 40},
    {eName: "Julian", hourlyRate: 20, hoursWorked: 62},
    {eName: "Jason", hourlyRate: 15.50, hoursWorked: 25}
];

// Base up to 40 hours
function calculateBasePay(rate, hours) {
    const basePay = Math.min(hours,40);
    return basePay * rate;
};
//console.log(`${calculateBasePay(15.50,54)}`)

// Overtime
function calculateOverTimePay(rate, hours) {
    const overTime = Math.max(hours - 40, 0);
    return overTime * rate * 1.5;
};
//console.log(`${calculateOverTimePay(20, 62)}`)

// Taxes
function calculateTaxes(grosspay) {
    return grosspay * 0.15; //15% 
}
//console.log(`${calculateTaxes(1000)}`)

// Payroll one employee
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overTime = calculateOverTimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overTime;
    let finalPay = grossPay - calculateTaxes(grossPay);
    return {
        name: employee.eName,
        basePay: basePay.toFixed(2),
        overTime: overTime.toFixed(2),
        grossPay: grossPay.toFixed(2),
        finalPay: finalPay.toFixed(2)
    };
};
//console.log(processPayroll(employees[3]))