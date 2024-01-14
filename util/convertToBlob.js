// Asynchronous function to convert a resource from the given URI to a Blob object
const convertToBlob = async (uri) => {
    // Fetch data from the specified URI
    const response = await fetch(uri);

    // Return the Blob representation of the fetched data
    return await response.blob();
};

// Export the convertToBlob function as the default export of the module
export default convertToBlob;
