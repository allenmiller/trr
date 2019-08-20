import {SET_SECOND_TEXT} from './types';

export const setSecondText = (secondText: string) => {
    return {
        type: SET_SECOND_TEXT,
        secondText
    }
}
