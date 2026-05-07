const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldest = people.sort((a, b) => {
        let ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        let ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        // descending
        return ageB - ageA;
    })[0];

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
