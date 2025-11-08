function solveEquation(a, b, c) {
    // Вычисляем дискриминант
    const discriminant = b ** 2 - 4 * a * c;
    
    // Если дискриминант меньше нуля - корней нет
    if (discriminant < 0) {
        return [];
    }
    
    // Если дискриминант равен нулю - один корень
    if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    }
    
    // Если дискриминант больше нуля - два корня
    const sqrtD = Math.sqrt(discriminant);
    const root1 = (-b + sqrtD) / (2 * a);
    const root2 = (-b - sqrtD) / (2 * a);
    
    return [root1, root2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   
    const monthlyPercent = percent / 100 / 12;
    
        const loanBody = amount - contribution;
    
    
    if (loanBody <= 0) {
        return 0;
    }
    
        const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
    
        const totalAmount = monthlyPayment * countMonths;
    
        return Number(totalAmount.toFixed(2));
}