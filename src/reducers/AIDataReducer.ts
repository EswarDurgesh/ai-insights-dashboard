import { FETCH_AI_DATA } from "../actions/ActionTypes";

const initialState = {

};

const aiDataReducer = (state = initialState,action:any) => {
    switch(action.type){
        case FETCH_AI_DATA:
            return state;
            default:
                return state;
    }
};

export default aiDataReducer;