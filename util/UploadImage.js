// Importing necessary functions from Firebase storage and a UUID library
import { getStorage, ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import uuid from 'react-native-uuid';

// Async function to get the URL of an image from a specified directory in Firebase storage
async function getImageURL(directoryPath, imageName, firebase) {
    // Get the storage reference using the provided Firebase configuration
    const storage = getStorage(firebase);
    // Create a reference to the specified directory
    const directoryRef = ref(storage, directoryPath);
  
    try {
        // List all items (files) in the specified directory
        const fileList = await listAll(directoryRef);
        // Find the file with the specified name in the directory
        const matchingFile = fileList.items.find(item => item.name === imageName);
  
        if (matchingFile) {
            // If the file is found, get its download URL and return it as a URI
            const url = await getDownloadURL(matchingFile);
            return { uri: url };
        } else {
            // If the file is not found, return null
            return null;
        }
    } catch (error) {
        // Handle errors and log them
        console.error('Error retrieving image URL:', error);
        return null;
    }
}

// Async function to upload a blob (binary large object) to a specified directory in Firebase storage
const UploadFiles = async (blob, directory, firebase) => {
    // Get the storage reference using the provided Firebase configuration
    const storage = getStorage(firebase);
    // If the blob is null, return early
    if (blob === null) return;
  
    try {
        // Generate a unique name using UUID library
        const name = uuid.v4();
        // Create a reference to the storage location with the generated name in the specified directory
        const storageRef = ref(storage, `${directory}/${name}`);
        // Upload the blob to the specified storage location
        await uploadBytes(storageRef, blob);
        // Return the generated name as an identifier for the uploaded file
        return name;
    } catch (error) {
        // If an error occurs during the upload, return the error message
        return error.message;
    }
};

// Export the two functions for use in other modules
export { UploadFiles, getImageURL };
