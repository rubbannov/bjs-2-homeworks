function compareArrays(arr1, arr2) {
    let diffirence = JSON.stringify(arr1) === JSON.stringify(arr2);
    return diffirence;
};

function getUsersNamesInAgeRange(users, gender) {
    if (!users.length) {
        result = 0;
    } else if (!users.some(user => user.gender === gender)) {
        result = 0;
    } else {
        let amount = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item) => acc + item);
        result = amount / users.filter(user => user.gender === gender).map(user => user.age).length;
    };
    return result;
};