const API_CONFIG = {
    baseUrl: 'https://qoa.qa/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'language': 'en'
    },
};

async function fetchData(endpoint, body) {
    const url = `${API_CONFIG.baseUrl}${endpoint}`;
    console.log("url===>", url);

    const config = {
        method: 'POST',
        headers: {
            ...API_CONFIG.headers,
        },
        timeout: API_CONFIG.timeout,
        body: JSON.stringify(body),
    };
    try {
        const response = await fetch(url, config);
        return response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

export default fetchData;
