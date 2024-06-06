
import { projectFirestore } from '../Firebase/config.js'
import {ref} from 'vue'

async function fetchUser(authorId) {
  const ur = ref(null)
  const error = ref(null)
  try {
  let res = await projectFirestore.collection('Users').doc(authorId).get()

  if (!res.exists) {
    throw Error('That post does not exist')
  }
    ur.value = res.data()
      console.log(ur.value)
      return ur.value

  }
  catch(err) {
      error.value = err.message
      console.log(error.value);
      return null;
  }

}
async  function fetchRecipes() {
  const res = await projectFirestore.collection('Recipes').get();
  return res.docs.map(doc=> {
    return {...doc.data(),id:doc.id }})
};

async function AddUser(userID, email,name,photoURL) {
  let disc = {
    
      "email": email,
      "name": name,
      "photoURL": photoURL
  };
    const newDoc = projectFirestore.collection("Users").doc(userID);

    try {
        await newDoc.set(disc);
        console.log("Document successfully written with ID:", userID);
    }  catch (error) {
    console.error("Error adding recipe: ", error);
    throw new Error("Failed to add recipe: " + error.message);
  }
}


async function addRecipe(recipe) {

  
    try {
      await projectFirestore.collection('Recipes').add(recipe);
      console.log("Recipe added successfully");
    } catch (error) {
      console.error("Error adding recipe: ", error);
      throw new Error("Failed to add recipe: " + error.message);
    }
  }


  const updateRecipe = async (recipeId, updatedData) => {
    try {
      console.log(updatedData)
      await projectFirestore.collection('Recipes').doc(recipeId).update(updatedData);
    
      return { success: true };
    } catch (error) {
      console.error("Error updating recipe: ", error);
      return { success: false, error };
    }
  };






async function fetchRecipe(rId) {
  const rec = ref(null)
  const error = ref(null)
  try {
  let res = await projectFirestore.collection('Recipes').doc(rId).get()

  if (!res.exists) {
    throw Error('That post does not exist')
  }
    rec.value = res.data()
      console.log(rec.value)
      return rec.value

  }
  catch(err) {
      error.value = err.message
      console.log(error.value);
      return null;
  }

}



async function getAllTags() {
  let tags = [];
  try {
    const snapshot = await projectFirestore.collection('Discussions').get();
    snapshot.forEach(doc => {
      const discussionTags = doc.data().tags;
      tags = tags.concat(discussionTags);
    });
    // Get unique tags
    tags = Array.from(new Set(tags));
  } catch (error) {
    console.error("Error fetching tags: ", error);
  }
  return tags;
}

export {updateRecipe,fetchUser,fetchRecipe,fetchRecipes,addRecipe,AddUser,getAllTags}
