import { FETCH_TOPICS } from '../actions/types';

export default function(state = null, action){

    switch (action.type){
        case FETCH_TOPICS:
            return action.payload || false;
        default: 
            return state;
    }
}