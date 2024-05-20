
import {projectFirestore}  from '../Firebase/config.js'

function AddDiscussion(){




let newDoc = projectFirestore.collection("Discussions").doc();

const id = newDoc.id;



let  disc=

      
          {
      
            "id": 1,
      
            "title": "How to integrate Firebase with Vue?",
      
            "content": "I'm having trouble integrating Firebase with my Vue.js project. Can anyone provide some guidance?",
      
      
            "userEmail": "123456@gmail.com",
      
            "responses": [
      
              {
      
                "id": 1,
      
                "userEmail": "123456@gmail.com",
      
                "content": "You can start by installing Firebase via npm and then initialize it in your main.js file.",
      
      
              },
      
              {
      
                "id": 2,
      
                "userEmail": "123456@gmail.com",
      
                "content": "Check out the official Firebase documentation for detailed steps.",
      
      
              }
      
            ]
      
        }



newDoc.set(disc)



      .then(() => {



        console.log("Document written with ID: ", id);






      })



      .catch((error) => {



        console.error("Error adding document: ", error);



        alert("Failed to add disc: " + error.message);



      });

    }

async function fetchDis() {

 

    let res = await projectFirestore.collection('Discussions').get()

    return res.docs.map(doc=> {

            return {...doc.data(),id:doc.id }})
}

async function fetchDisId(desiredPostId) {

 

    try {

        const docRef = projectFirestore.collection('Articles').doc(desiredPostId);
    
        const docSnapshot = await docRef.get();
    
     
    
        if (docSnapshot.exists) {
    
          return docSnapshot.data();
    
          console.warn(`No article found with ID: ${desiredPostId}`);
    
          return null; // Or return a specific value to indicate no document found
    
        }
    
      } catch (error) {
    
        console.error('Error fetching article:', error);
    
        throw error; // Re-throw the error for further handling (optional)
    
      }
    
     
}

export {AddDiscussion , fetchDis , fetchDisId}