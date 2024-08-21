
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


async function AddDiscussion( title,content, userGmail,tags) {
  let newDoc = projectFirestore.collection("Discussions").doc();
  let disc = {
    "title": title,
    "content": content,
    "userEmail": userGmail,
    "date": new Date().toISOString() ,
    "tags":tags
  };
  newDoc.set(disc)

}

export const getUserData = async (userId) => {
  try {
    const querySnapshot = await projectFirestore.collection('users').doc(userId).get();
    return querySnapshot.data();
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
}

async function AddResponse(discId, content, userEmail) {
  const response = {
    userEmail: userEmail,
    content: content,
    discId: discId,
    date: new Date().toISOString()
  };

  try {
    await projectFirestore.collection('Responses').add(response);
    console.log("Response added successfully");
  } catch (error) {
    console.error("Error adding response: ", error);
    throw new Error("Failed to add response: " + error.message);
  }
}
async function Disc_responses(discId) {
  try {
    const r = await projectFirestore.collection('Responses').where("discId", "==", discId).get();
    const responses = r.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(responses);
    return responses;
  } catch (error) {
    console.error('Error fetching responses:', error);
    throw new Error('Failed to fetch responses');
  }
}
async function fetchDis() {

 

    let res = await projectFirestore.collection('Discussions').get()

    return res.docs.map(doc=> {

            return {...doc.data(),id:doc.id }})
}

async function fetchDisId(desiredPostId) {

 

    const disc = ref(null)
    const error = ref(null)
    try {
    let res = await projectFirestore.collection('Discussions').doc(desiredPostId).get()

    if (!res.exists) {
      throw Error('That post does not exist')
    }
        disc.value = res.data()
        console.log(disc.value)
        return disc.value

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

export {AddDiscussion,AddResponse,fetchDis,fetchDisId,Disc_responses,getAllTags}
