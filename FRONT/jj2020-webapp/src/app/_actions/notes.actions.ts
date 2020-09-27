import { Action } from '@ngrx/store'

export enum ActionTypes {
    GetAll = 'GEALL',
    Add = 'ADD'
};

export const GetAll = () => {
    return <Action>{ type: ActionTypes.GetAll, payload: null }
}

export const Add = (note: any) => {
    return <Action>{ type: ActionTypes.Add, payload: note}
}