import api from "./axios";

export async function loginUser(email: string, password: string) {
    const res = await api.post("/auth/login", {
        email: email,
        password: password
    });
    return res.data;
};

export async function registerUser(name: string, email: string, password: string) {
    const res = await api.post("/auth/register", {
        name: name,
        email: email,
        password: password
    });
    return res.data;
};