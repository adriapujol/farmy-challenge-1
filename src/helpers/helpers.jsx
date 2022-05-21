export const combineById = (ingredientsList, productsList) => {
    const combined = [];
    ingredientsList.forEach(ingredient => {
        const tempProd = productsList.find(prod => prod.id === ingredient.id);
        combined.push({ ...tempProd, ...ingredient });
    });
    return combined;
};

export const getCost = (fullProductsList) => {
    const values = fullProductsList.map(product => product.costPerServing * product.numOfServings)
    const initalValue = 0;
    const cost = values.reduce((previousValue, currentValue) => previousValue + currentValue, initalValue);
    return cost;
};
export const getPrice = (cost, margin) => cost + cost * margin;

export const getHoursFresh = fullIngredientsList => {
    const hours = fullIngredientsList.map(ingredient => {
        return ingredient.hoursFresh
    });
    let hoursFresh = Math.max(...hours);
    hoursFresh = hoursFresh < 0 ? 0 : hoursFresh;
    return hoursFresh;
};

export const isEmptyObj = obj => {
    for (const property in obj) {
        return false;
    }
    return true;
};