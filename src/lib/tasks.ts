import api from "./axios";

// Create Post
export async function createTask() {
    const res = await api.post("/tasks");
    return res.data;
};

// Get Tasks
export async function getTasks() {
    const res = await api.get("/tasks");
    return res.data;
};
