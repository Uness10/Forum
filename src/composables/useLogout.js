
import { ref } from 'vue';
import { projectAuth } from '../Firebase/config';


const logout = async () => {
  try {
    await projectAuth.signOut();
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export default  logout ;
