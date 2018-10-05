// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};

const createNotEnumerableProperty = function(prop) {
    Object.defineProperty(Object.prototype, prop, {
        enumerable:false,
        value:'value'
    });
    return prop;
};

const createProtoMagicObject = () => {
    return Function;
};

let countInc = 0;
const incrementor = () => {
    Object.__proto__.valueOf = function () {
        return countInc;
    };
    countInc++;
    return incrementor;
};

let countAsyns = 0;
const asyncIncrementor = () => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            countAsyns++;
            resolve(countAsyns);
        }, 0);
    });
    return promise;
};

const createIncrementer = () => {
    let count = 0;
    return {
        [Symbol.iterator](){
            return this;
        },
        next() {
            return {
                done: false,
                value: ++count
            };
        }
    }
};

const returnBackInSecond = (arg) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arg);
        }, 1000);
    });
    return promise;
};

const getDeepPropertiesCount = (obj) => {
    let counter = 0;
    for (let key in obj) {
        if (typeof(obj[key] === "object")) {
            counter += getDeepPropertiesCount(obj[key]);
        }
        counter++;
    }
    return counter;
};

const createSerializedObject = () => {
    return null;
};

const toBuffer = () => {};

const sortByProto = (arr) => {
    return arr.sort(function (a, b) {
        return a - b;
    });
};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
