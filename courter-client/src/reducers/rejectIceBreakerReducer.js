import { SET_ALL_USER_IB_PREFS} from '../actions/types';

export default function(state = null, action){

    switch (action.type){
        case SET_ALL_USER_IB_PREFS:
            return action.payload || false;
        default: 
            return state;
    }
}