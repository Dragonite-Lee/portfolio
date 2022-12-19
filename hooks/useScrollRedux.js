import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

//useScrollRedux state,dispatch 반환 훅
export default function useScrollRedux() {
    const state = useSelector((state) => state.scroll);
    const dispatch = useDispatch();

    return [state, dispatch];
}