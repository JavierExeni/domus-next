import { useAppDispatch, useAppSelector } from "@/hooks";
import { AuthService } from "@/services/auth/auth";
import { saveUserInfo } from "@/slices/user-slice";
import { useCallback, useEffect } from "react";

const useUserInfo = () => {

    const dispatch = useAppDispatch();
    const id = useAppSelector((state) => state.user.id);
    const user = useAppSelector((state) => state.user);
    const isLogged = useAppSelector((state) => state.user.id !== 0);
    const isAdmin = useAppSelector((state) => state.user.role === 1);

    const getUserInfo = useCallback(() => {
        AuthService.getUserInfo().then((response) => {
            dispatch(saveUserInfo(response));
        });
    }, [dispatch]);


    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (id === 0 && token) {
            console.log("Getting user info");
            getUserInfo();
        }
    }, [getUserInfo, id])

    return {
        user,
        isAdmin,
        isLogged,
        // getUserInfo
    }
}
export default useUserInfo;