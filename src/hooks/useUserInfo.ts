import { useAppDispatch, useAppSelector } from "@/hooks";
import { AuthService } from "@/services/auth/auth";
import { saveUserInfo } from "@/slices/user-slice";
import { useEffect, useRef } from "react";

const useUserInfo = () => {
    const dispatch = useAppDispatch();
    const id = useAppSelector((state) => state.user.id);
    const user = useAppSelector((state) => state.user);
    const isLogged = useAppSelector((state) => state.user.id !== 0);
    const isAdmin = useAppSelector((state) => state.user.role === 1);

    const isUserInfoFetched = useRef(false);

    const getUserInfo = async (): Promise<any> => {
        if (id === 0) {
            const response = await AuthService.getUserInfo();
            return response;
        } else {
            return null;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (id === 0 && token && !isUserInfoFetched.current) {
            isUserInfoFetched.current = true;
            getUserInfo().then((response) => {
                if (response) {
                    dispatch(saveUserInfo(response));
                }
            });
        }
    }, [id, dispatch]);

    return {
        user,
        isAdmin,
        isLogged,
    };
};

export default useUserInfo;
