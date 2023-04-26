import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FAV:
        return {
            ...state.myFavorites,
            myFavorites:[...state.allCharacters, action.payload],
            allCharacters:[...state.allCharacters, action.payload]
        }
    
    case REMOVE_FAV: 
        return {
            ...state,
            myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
        }
    case FILTER:
        const allCharactersFiltered = state.allCharacters.filter(character => character.gender===action.payload);
        return{
            ...state,
            myFavorites:
            action.payload === 'allCharacters'
            ?[...state.allCharacters]
            :allCharactersFiltered
        }
    case ORDER:
        const allCharactersFavCopy = [...state.allCharacters]
        return {
            ...state,
            myFavorites:
                action.payload=== 'A'
               ?allCharactersFavCopy.sort((a, b)=>a.id-b.id)
               :allCharactersFavCopy.sort((a, b)=>b.id-a.id)
        };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
