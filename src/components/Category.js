import React, {useEffect} from "react";
import {FETCH_CATEGORY} from "../actions/types";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export default function Category(props){

    const dispatch = useDispatch(); // reduce 함수 호출
    useEffect(() => {
        axios.get('http://localhost:3355/category').then((rs) => {
            dispatch({
                type:FETCH_CATEGORY,
                payload:rs.data
            })
        })
    }, [])
    // state가 갱신 => store에서 변경된 state 호출
    /*
    * 이벤트 발생 - reducer - state 갱신 - store에 저장
    * dispatch({
                type:FETCH_CATEGORY,
                payload:rs.data
            })
    * - 갱신된 state 읽어와서 화면에 출력 - re-render
    * */
    // 갱신된 데이터 읽기
    const category_data = useSelector((state) => state.foods.category)
    const html = category_data.map((m) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <img src={m.poster} alt="Lights" style={{"width": "100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="row">
            {html}
        </div>
    )

}