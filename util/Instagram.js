// Define the API key required for accessing the external API
const ApiKey = 'IGQWRQQnFFTkFIcm9GblJucGJQazlyRVU3RW5IQU9HbHJhTUQ0VTRoRzRudEdTVHRTUXZAqbFB4dEhyWDF3cm1oV3p0TEVxSDFMSkdDakI5bGcyempHVWZArNHlmQjVEMEFGQmtFZAGViaDRfQQZDZD'
// Define the base URL for the external API
const BaseURL = 'https://graph.instagram.com/me/media?fields=media_url,caption,timestamp,media_type,permalink&access_token='

// Async function to fetch news data from an external API using a base URL and API key
async function FetchNews() {
    try {
        // Construct the complete URL by combining the base URL and API key
        var rawdata = await fetch(BaseURL + ApiKey);
        // Convert the fetched data to JSON format
        var jsondata = await rawdata.json();
        // Return the 'data' property from the JSON response
        return await jsondata.data;
    } catch {
        // If an error occurs during the fetch operation, return an empty array
        return [];
    }
}

// Export the FetchNews function as the default export for use in other modules
export default FetchNews;
