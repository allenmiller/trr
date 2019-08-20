import {SET_SECOND_TEXT, SecondActionTypes, SecondState} from "./types";
import {setSecondText} from './actions';

const initialState: SecondState= {
    secondText: "",
    setSecondText: setSecondText
};

export const secondReducer = ( state = initialState, action: SecondActionTypes) : SecondState  => {
    switch (action.type) {
        case SET_SECOND_TEXT: return {...state, secondText: action.secondText};
        default: return state;
    }
}
