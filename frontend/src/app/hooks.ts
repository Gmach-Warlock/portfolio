import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { useDispatch, type TypedUseSelectorHook } from "react-redux";

export const UseAppDispatch: () => AppDispatch = useDispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;