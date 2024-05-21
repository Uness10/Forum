
import { ref } from 'vue'
import { projectFirestore } from '../Firebase/config'


async function AddDiscussion(content, title, userGmail) {
  let newDoc = projectFirestore.collection("Discussions").doc();
  let disc = {
    "title": title,
    "content": content,
    "userEmail": userGmail,
    "date": new Date().toISOString() 
  };
  newDoc.set(disc)
    .then(() => {
      console.log("Document written with ID: ", newDoc.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Failed to add discussion: " + error.message);
    });
}


async function AddResponse(disId, content, userGmail) {
    let newRes = {
      "userEmail": userGmail,
      "content": content,
      "discId": disId,
      "date": new Date().toISOString() 
    };
    let newDoc = projectFirestore.collection("Responses").doc();
    newDoc.set(newRes)
      .then(() => {
        console.log("Response added with ID: ", newDoc.id);
      })
      .catch((error) => {
        console.error("Error adding response: ", error);
        alert("Failed to add response: " + error.message);
      });
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


export {AddDiscussion,AddResponse,fetchDis,fetchDisId,Disc_responses}