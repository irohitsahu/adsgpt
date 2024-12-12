

async function fetchOnScrollFetch(skip, limit, currentContext, id) {
    try {
        const response = await fetch(`https://adsgpt-dev-api.poweradspy.com/adsgpt/adsscroll?skip=${skip}&limit=${limit}&context=${currentContext}&contextId=${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const datas = await response.json();
        return datas;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { adsData: { adsData: [], overallCount: 0 } }; // Return a default value or handle as needed
    }
}

export default fetchOnScrollFetch;

