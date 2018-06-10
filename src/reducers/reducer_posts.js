import {FETCH_POSTS} from '../actions/';
import _ from 'loadash';

export default function (state = {},action){
    switch(action){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id');
        default:
            return state;
    }
}