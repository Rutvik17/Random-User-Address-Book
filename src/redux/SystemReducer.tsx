import RandomPerson from "../models/Person";

export enum SYSTEM_ACTION_TYPE {
    SET_LOADING = 'SET_LOADING',
    SET_RANDOM_USERS = 'SET_RANDOM_USERS',
    SET_LOAD_MORE_USERS = 'SET_LOAD_MORE_USERS'
}

export interface SystemAction { type: SYSTEM_ACTION_TYPE; payload: Array<RandomPerson>|boolean; }

export const setRandomUsers = (randomUsers: Array<RandomPerson>) => {
    return {
        type: SYSTEM_ACTION_TYPE.SET_RANDOM_USERS,
        payload: randomUsers
    };
};

export const setLoading = (loading: boolean) => {
    return {
        type: SYSTEM_ACTION_TYPE.SET_LOADING,
        payload: loading
    }
}

export const setLoadMoreUsers = (load: boolean) => {
    return {
        type: SYSTEM_ACTION_TYPE.SET_LOAD_MORE_USERS,
        payload: load
    }
}

//state
export interface SystemState {
    loading: boolean;
    loadMoreUsers: boolean,
    randomUsers: Array<RandomPerson>;
}

const initSystemState:SystemState = {
    loading: true,
    loadMoreUsers: false,
    randomUsers: [],
};

//reducer
export const systemReducer = (state = initSystemState, action: SystemAction) => {
    switch (action.type) {
        case SYSTEM_ACTION_TYPE.SET_LOADING: {
            return {...state, loading: action.payload as boolean}
        }
        case SYSTEM_ACTION_TYPE.SET_LOAD_MORE_USERS: {
            return {...state, loadMoreUsers: action.payload as boolean}
        }
        case SYSTEM_ACTION_TYPE.SET_RANDOM_USERS: {
            const tempRandomUsers = action.payload as Array<RandomPerson>;
            const result = [...state.randomUsers, ...tempRandomUsers];
            return {...state, randomUsers: result as Array<RandomPerson>};
        }
        default:
            return state;
    }
};
