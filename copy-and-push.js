const copyAndPush = (array, newNum) => {
    const copyArray = [...array];
    copyArray.push(newNum);
    return copyArray;
};

module.exports = copyAndPush;