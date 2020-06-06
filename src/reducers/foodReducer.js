import {FETCH_CATEGORY, FETCH_CATE_FOOD, FETCH_FOOD_DETAIL, FETCH_CATE_INFO} from "../actions/types";

const initState = {
    category:[],
    cate_food:[],
    food_detail:{},
    cate_info:{}
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
        case FETCH_CATE_INFO:
            return {
                ...state,
                cate_info:action.payload
            }
        default:
            return state

    }

}