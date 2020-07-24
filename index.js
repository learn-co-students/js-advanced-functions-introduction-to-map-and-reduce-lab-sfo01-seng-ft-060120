// Your code here

const mapToNegativize = (sourceArray) => {
    return sourceArray.map(e => (e * -1))
}

const mapToNoChange = (sourceArray) => {
    return sourceArray
}

const mapToDouble = (sourceArray) => {
    return sourceArray.map(e => (e * 2))
}

const mapToSquare = (sourceArray) => {
    return sourceArray.map(e => e **2)
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    return sourceArray.reduce(function(total, e){ return e + total }, startingPoint)
}

const reduceToAllTrue = (sourceArray) => {
    return sourceArray.reduce(function(total, e) {
        return e ? true : false
    }, 0)
}

const reduceToAnyTrue = (sourceArray) => {
    return sourceArray.reduce(function(total, e) {
        return e ? true : false
    }, 0)
}