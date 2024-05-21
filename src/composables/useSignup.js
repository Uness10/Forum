import { projectAuth } from "@/Firebase/config"
import { ref } from "vue"
import { projectFirestore } from '../Firebase/config'

const error = ref(null)

async function AddUserName(Name, email) {
    let newDoc = projectFirestore.collection("User").doc();
    let disc = {
      "Dname": Name,
      "email": email,
    };
    newDoc.set(disc)
      .then(() => {
        console.log("Document written with ID to the user Collection: ", newDoc.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Failed to add discussion: " + error.message);
      });
  }

const signup = async (email, password, displayName) => {
    error.value = null
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password)

        if(!response)
            throw new Error('Could not signup')
        

        AddUserName(displayName, email)


    } catch (err) {
        console.log(err)
        error.value = err.message
    }

}

const useSignup = () => {
    return {error, signup}
}

export default useSignup