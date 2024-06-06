import { projectAuth } from "@/Firebase/config";
import { ref } from "vue";
import { AddUser } from "./useFirestore";

const error = ref(null);



const signup = async (email, password, displayName,photo) => {
    error.value = null;
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!response) {
            throw new Error('Could not complete signup');
        }
        const userId = response.user.uid; // Get the user ID from the response
        await AddUser(userId, email,displayName,photo ? photo.name : null);
    } catch (err) {
        console.error('Signup Error:', err.message);
        error.value = err.message;
    }
}

const useSignup = () => {
    return { error, signup }
}

export default useSignup;