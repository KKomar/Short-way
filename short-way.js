const departure = [0.4, 1];
const destination = [0.9, 3];

const perfectCity = (start, finish) => {
    const startX = start[0];
    const startY = start[1];
    const finishX = finish[0];
    const finishY = finish[1];

    let shortWay;

    const isInteger = Number.isInteger(startX) && Number.isInteger(startY)
        && Number.isInteger(finishX) && Number.isInteger(finishY);

    const isFloat = !Number.isInteger(startX) || !Number.isInteger(startY)
        || !Number.isInteger(finishX) || !Number.isInteger(finishY);

    const doubleFloatOnAxisX = !Number.isInteger(startX)
                               && !Number.isInteger(finishX)
                               && (Math.floor(startX) === Math.floor(finishX));

    const doubleFloatOnAxisY = !Number.isInteger(startY)
                               && !Number.isInteger(finishY)
                               && (Math.floor(startY) === Math.floor(finishY));

    if (isInteger || isFloat) {
        shortWay = Math.abs(startX - finishX) + Math.abs(startY - finishY);
    }

    if (doubleFloatOnAxisX) {
        shortWay = sameAxisCalc(startX, finishX, startY, finishY);
    }

    if (doubleFloatOnAxisY) {
        shortWay = sameAxisCalc(startY, finishY, startX, finishX);
    }

    return shortWay;
};

const sameAxisCalc = (start, finish, val1, val2) => {
    const toLowerStart = start - Math.floor(start);
    const toLowerFinish = finish -  Math.floor(finish);
    const toBiggerStart = Math.ceil(start) - start;
    const toBiggerFinish = Math.ceil(finish) - finish;

    return Math.min(
        Math.abs(val1 - val2) + toLowerStart + toLowerFinish,
        Math.abs(val1 - val2) + toBiggerStart + toBiggerFinish
    );
};

const shortWay = perfectCity(departure, destination).toFixed(1);

console.log(`Short way from [${departure[0]}, ${departure[1]}] to [${destination[0]}, ${destination[1]}] is ${shortWay}`);