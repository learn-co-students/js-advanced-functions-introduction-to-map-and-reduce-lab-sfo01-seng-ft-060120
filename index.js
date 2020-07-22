// Your code here
const mapToNegativize = (array) => {
    let newArray = []
    for (let element of array) {
        element = element * -1;
        newArray.push(element)
    }
    return newArray
}

const mapToNoChange = (array) => {
    let newArray = []
    for (const element of array) {
        newArray.push(element);
    }
    return newArray
}

const mapToDouble = (array) => {
    let newArray = []
    for (let element of array) {
        element = element * 2;
        newArray.push(element)
    }
    return newArray
}

const mapToSquare = (array) => {
    let newArray = []
    for (let element of array) {
        element = element * element;
        newArray.push(element)
    }
    return newArray
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    for (const element of sourceArray) {
        startingPoint = startingPoint + element
    }
    return startingPoint
}

const reduceToAllTrue = (array, startingPoint = true) => {
    for (const element of array) {
        if (element === false) {
            startingPoint = false
        }
    }
    return startingPoint
}

const reduceToAnyTrue = (array, startingPoint = false) => {
    for (const element of array) {
        if (!!element === true) {
            startingPoint = true
        }
    }
    return startingPoint
}