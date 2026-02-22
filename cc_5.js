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
    let i = 1; // counter for employees
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overTime = calculateOverTimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overTime;
    const finalPay = grossPay - calculateTaxes(grossPay);
    console.log(`\n---Employee ${i}---\nName: ${employee.eName} \nTotal Hours: ${employee.hoursWorked} \nBase Pay: ${basePay.toFixed(2)} \nOver Time Pay: ${overTime.toFixed(2)} \nGross Pay: ${grossPay.toFixed(2)} \nNet Pay: ${finalPay.toFixed(2)}`);
     i++;
    return (hardWorker(employee));
};
//processPayroll(employees[3]);

// Loop for all employees payroll
for (const employee of employees) {
    processPayroll(employee);
};

// Addition hard worker employee
function hardWorker(employee) {
    if (employee.hoursWorked > 50) {
    console.log(`${employee.eName}, thank you for your hard work this week!`)
};};
