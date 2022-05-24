import axios from "axios";
import { useEffect, useState } from "react";


const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            let email = user?.user?.email;
            let name = user?.user?.displayName;
            const loggedUser = { email: email, name: name }
            if (email) {
                const { data } = await axios.put(`http://localhost:5000/user/${email}`, loggedUser);
                setToken(data.token);
                localStorage.setItem('accessToken', data.token);
            }
        }
        getToken();
    }, [user]);
    return [token];
};

export default useToken;