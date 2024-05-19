
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, number) => {
        return {
            id: number + 1, 
            originalName: name,
            modifiedName: modifiedNames[number]
        };
    });

}



module.exports = { createUserProfiles };


