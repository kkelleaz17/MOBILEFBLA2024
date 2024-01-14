// Importing necessary functions from Firebase Firestore
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Async function to retrieve documents from a Firestore collection named 'userData'
const getDocuments = async () => {
  // Get the Firestore instance
  const db = getFirestore();
  // Create a reference to the 'userData' collection
  const myCollection = collection(db, 'userData');
  
  try {
    // Fetch the documents from the 'userData' collection
    const querySnapshot = await getDocs(myCollection);
    
    // Convert querySnapshot to an array of documents with each document having an 'id' field
    // representing the document ID and other fields representing document data
    const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Return the array of documents
    return documents;
  } catch (error) {
    // Log the error message to the console
    console.error('Error getting documents: ', error);
    // Re-throw the error to handle it in the calling code
    throw error;
  }
};

// Export the getDocuments function as the default export for use in other modules
export default getDocuments;
