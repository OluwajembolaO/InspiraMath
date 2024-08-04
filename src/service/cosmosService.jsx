import axios from 'axios';

// Replace with your actual Cosmos DB details
const COSMOS_DB_ENDPOINT = import.meta.env.COSMOS_DB_ENDPOINT
const COSMOS_DB_KEY = import.meta.env.COSMOS_DB_KEY
const DATABASE_ID = import.meta.env.DATABASE_ID
const CONTAINER_ID = import.meta.env.CONTAINER_ID

// Create an Axios instance for Cosmos DB requests
const axiosInstance = axios.create({
    baseURL: `${COSMOS_DB_ENDPOINT}dbs/${DATABASE_ID}/colls/${CONTAINER_ID}/`,
    headers: {
        'Authorization': `Bearer ${COSMOS_DB_KEY}`,
        'x-ms-version': '2018-12-31',
        'Content-Type': 'application/json'
    }
});

// Function to query items in Cosmos DB
export const queryItems = async (email, password) => {
    const query = `SELECT * FROM ${CONTAINER_ID} c WHERE c.Email = "${email}" AND c.AccountPassword = "${password}"`;

    try {
        const response = await axiosInstance.get('docs', {
            params: {
                query: query,
                enableCrossPartitionQuery: true
            }
        });

        return response.data.Documents;
    } catch (error) {
        console.error('Error querying Cosmos DB:', error);
        throw error;
    }
};
