import {CREATE_EVENT, GET_EVENTS, DELETE_EVENT} from "../actions/types";

const initialState={
    events: [],
    }

export default function(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_EVENTS: 
            return {
                ...state,
                events: payload,
     
        
            };
        case CREATE_EVENT:
            return {
                ...state,
                events: [payload, ...state.events],
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event=>event.id !==payload),
            };
        default:
            return state;
    }
}