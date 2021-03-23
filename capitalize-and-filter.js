const upperCaseString = (string) => string.toUpperCase();

const filterF = (array) => {
    const newArray = [];
    array.map(string => {
        if(string[0] != 'F') {
            newArray.push(string);
        }
    });
    return newArray;
}

const capitalizeAndFilter = (array) => {

    const upperCaseArray = array.map(string => upperCaseString(string));
    
    const filteredArray = filterF(upperCaseArray);

    return filteredArray;
};

module.exports = capitalizeAndFilter;
