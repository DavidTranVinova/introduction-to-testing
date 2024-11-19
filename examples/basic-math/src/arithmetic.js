export const add = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number') return 'Add values must be number'
    return a + b
}

export const substract = (a, b) =>{
    if(typeof a !== 'number' || typeof b !== 'number') throw 'Substract values must be number'
    return a - b
}

export const multiply = (a, b) =>{
    if(typeof a !== 'number' || typeof b !== 'number') throw 'Multiply values must be number'
    return a * b
}

export const divide = (a, b) =>{
    if(typeof a !== 'number' || typeof b !== 'number') return 'Divide values must be number'
    if(b === 0) throw 'b value must not be 0'
    return a / b
}
