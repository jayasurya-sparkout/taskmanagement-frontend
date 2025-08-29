'use client';

import { useState, useEffect } from "react";
import { getUsers, getUserById, deleteUserById } from "@/lib/userApi";

export default function UsersPage () {

    const [userId, setUserId] = useState<string>("");

    useEffect(() => {
        const userDetails = localStorage.getItem("userDetails");
        if (userDetails) {
            const parsedDetails = JSON.parse(userDetails);
            setUserId(parsedDetails.userId);
        }
    }, []);

    useEffect (() => {

        const getAllUsers = async () => {
            try {
                const response = await getUsers();
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        const getUserDataById = async () => {
            try {
                const response = await getUserById(userId)
            } catch (error) {
                console.log(error);
            }
        }

        getAllUsers();
        getUserDataById();

    }, [userId]);

    return (
        <div className="">Users Page</div>
    )

}