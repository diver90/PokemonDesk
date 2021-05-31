export const toCapitalizeFirstLetter = (someString: string) => {
    const newString = someString.toLowerCase();
    return newString.charAt(0).toUpperCase() + newString.slice(1);
};

