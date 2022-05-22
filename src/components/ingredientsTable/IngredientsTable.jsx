import React from 'react';
import Ingredient from '../ingredient/Ingredient';
import ScrollWrap from '../styles/ScrollWrap';
import IngredientsStyled from './Ingredients.styled';


function ingredientsTable({ ingredients }) {
    return (
        <ScrollWrap>
            <IngredientsStyled>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost per serving</th>
                        <th>Servings</th>
                        <th>Weight per serving</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingredients.map((ingredient, index) => {
                            return <Ingredient
                                key={ingredient.id}
                                ingredient={ingredient}
                            />
                        })

                    }
                </tbody>
            </IngredientsStyled>
        </ScrollWrap>
    )
}

export default ingredientsTable;