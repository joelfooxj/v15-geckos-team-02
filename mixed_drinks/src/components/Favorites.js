import React from 'react';
import Card from './Card';
import DrinkDetails from './DrinkDetails';

const Favorites = props => {
    return (
        <div>
            {!props.state.isLoaded ? null : props.state.drinks.map(drink => 
             <Card 
                key={drink.idDrink} 
                id={drink.idDrink}
                drink={drink}
                strDrinkThumb={drink.strDrinkThumb} 
                drinkName={drink.strDrink} 
                handleClick={props.handleClick} 
                drinkGlass={drink.strGlass} 
                isDrillDown={props.state.isDrillDown} 
                drinkIds={props.state.drinkIds}
                favoriteDrinks={props.state.favoriteDrinks}
                addToFavoriteDrinks={props.addToFavoriteDrinks}
                deleteFavoriteDrink={props.deleteFavoriteDrink}
            />
            )}
            {!props.state.isDrillDown ? null : 
            <DrinkDetails key={props.state.drinks[0].idDrink} drink={props.state.drinks[0]} />
            }
        </div>
        )
    }


export default Favorites