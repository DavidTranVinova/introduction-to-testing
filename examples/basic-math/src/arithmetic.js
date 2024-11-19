export const add = (a, b) => {
    console.log(typeof b !== NaN)
    if(typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) throw 'Add values must be number'
    return a + b
}

export const substract = (a, b) =>{
    if(typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) throw 'Substract values must be number'
    return a - b
}

export const multiply = (a, b) =>{
    if(typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) throw 'Multiply values must be number'
    return a * b
}

export const divide = (a, b) =>{
    if(typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) throw 'Divide values must be number'
    if(b === 0) throw 'b value must not be 0'
    return a / b
}
