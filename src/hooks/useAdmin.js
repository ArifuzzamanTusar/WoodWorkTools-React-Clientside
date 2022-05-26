
import { useEffect, useState } from "react";
import fetchApi from "../interceptor";

const useAdmin = (user) => {
    const [role, setRole] = useState('user');
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getAdmin = async () => {
            let email = user?.email;
            if (email) {
                const { data } = await fetchApi.get(`/user/${email}`);
                if (data.role) {
                    setRole(data.role);
                    setIsLoading(false);
                }
                setIsLoading(false)
            }
        }
        getAdmin();
    }, [user]);
    return [role, isLoading];
};

export default useAdmin;