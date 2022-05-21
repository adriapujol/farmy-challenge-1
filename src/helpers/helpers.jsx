export const getCost = (ingredientsList, productsList) => {
    const combined = [];
    ingredientsList.forEach(ingredient => {
        const tempProd = productsList.find(prod => prod.id === ingredient.id);
        combined.push(tempProd.costPerServing * ingredient.numOfServings);
    });
    const initalValue = 0;
    const cost = combined.reduce((previousValue, currentValue) => previousValue + currentValue, initalValue);
    return cost;
};

export const getPrice = (cost, margin) => cost + cost * margin;


export const isEmptyObj = obj => {
    for (const property in obj) {
        return false;
    }
    return true;
}