export const SET_SECOND_TEXT = 'SET_SECOND_TEXT';

export type SecondState = Readonly<{
    secondText: string,
    setSecondText: (newText:string) => void
}>;

interface SetSecondText {
    type: typeof SET_SECOND_TEXT;
    secondText: string;
}

export type SecondActionTypes = SetSecondText;
