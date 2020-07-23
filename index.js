const mapToNegativize = (sourceArray) => {
    return sourceArray.map (value => value - (value * 2))
}

const mapToNoChange = (sourceArray) => {
    return sourceArray.map (value => value)
}

const mapToDouble = (sourceArray) => {
    return sourceArray.map (value => value * 2)
}

const mapToSquare = (sourceArray) => {
    return sourceArray.map (value => value * value)
}

const reduceToTotal = (sourceArray, startingValue = 0) => {
    return sourceArray.reduce(function(total, element) {
        return element + total}, startingValue)
}

const reduceToAllTrue = (sourceArray) => {
    let trueOrFalse = true
    sourceArray.forEach(function(element) {
        if (element === false) {
            return trueOrFalse = false
        }
    })
    return trueOrFalse
}

const reduceToAnyTrue = (sourceArray) => {
    let trueOrFalse = false
    sourceArray.forEach(function(element) {
        if (element === true) {
            return trueOrFalse = true
        }
    })
    return trueOrFalse
}