import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [role, setRole] = useState('user');
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getAdmin = async () => {
            let email = user?.email;
            if (email) {
                const { data } = await axios.get(`http://localhost:5000/user/${email}`);
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