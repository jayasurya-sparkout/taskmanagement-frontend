import api from "./axios";

export async function getUsers() {
    const res = await api.get('/users');
    return res.data;
};

export async function getUserById(id: string) {
    const res = await api.get(`/users/${id}`);
    return res.data;
}

export async function deleteUserById(id: string) {
    const res = await api.get("/users/id", {
        params: {id: id}
    });
    return res.data;
};