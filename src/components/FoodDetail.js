import React, {useEffect} from "react";
import {fetchFoodDetail} from "../actions/foodActions";
import {useDispatch, useSelector} from "react-redux";

export default function FoodDetail(props){

    const dispatch = useDispatch();
    const {match}=props
    useEffect(() => {
        dispatch(fetchFoodDetail(match.params.no));
        // function(dispatch) - reducer 연결
    }, []);

    /*
    *   useSelector(function(state)){}
    * */
    const food_data = useSelector((state) => state.foods.food_detail)
    console.log(food_data)
    const image = String(food_data.image);
    const image2 = image.split("^");
    const html = image2.map((m) =>
        <td>
            <img src={m} width="200" height="150" alt=""/>
        </td>
    )
    return (
        <div className="row">
            <table className="table">
                <tr>
                    {html}
                </tr>
                <tr>
                    <td className="text-center" colSpan="4">{food_data.title}</td>
                </tr>
                <tr>
                    <td width="10%">주소</td>
                    <td colSpan="3">{food_data.address}</td>
                </tr>
                <tr>
                    <td width="10%">전화</td>
                    <td colSpan="3">{food_data.tel}</td>
                </tr>
                <tr>
                    <td width="10%">음식종류</td>
                    <td colSpan="3">{food_data.type}</td>
                </tr>
                <tr>
                    <td width="10%">가격대</td>
                    <td colSpan="3">{food_data.price}</td>
                </tr>
            </table>
        </div>
    )
}