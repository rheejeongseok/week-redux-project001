import {FETCH_CATEGORY, FETCH_CATE_FOOD, FETCH_FOOD_DETAIL} from "../actions/types";

const initState = {
    category:[],
    cate_food:[],
    food_detail:{}
}

/*
    dispatch({
        type:FETCH_CATEGORY,
        payLoad:data(category)
    })

    var a = [1,2,3]
    var b = [...a] -> b=[1,2,3]

*/
export default function(state=initState, action){

    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                category:action.payload
            }
        case FETCH_CATE_FOOD:
            return {
                ...state,
                cate_food:action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail:action.payload
            }
        default:
            return state

    }

}