const capitalizeAndFilter = (array) => {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const firstCharacter = array[index].charAt(0);
        console.log(array[index].charAt(0));
        // if (firstCharacter !== 'F' && firstCharacter !== 'f'){
        //     const word = array[index].charAt(0).toUpperCase() + array[index].slice(1);
        //     newArray.push(word);
        if (firstCharacter.toUpperCase() !== 'F'){
            const word = array[index].charAt(0).toUpperCase() + array[index].slice(1);
            newArray.push(word);
        }
    }
    return newArray;
};

module.exports = capitalizeAndFilter;
