const fetchMediaDetail = async () => {
    try {
        setLoading(true);
        const data = await fetchData('/news-detail', { id: id });
        if (data && data.status && data.data) {
            const { title, description, image_url, date, nid } = data.data;
            // Update state with fetched news detail
            setNewsDetail({ title, description, image_url, date, nid });
            setBackgroundImage(image_url); // Assuming backgroundImage is the image_url
        }
    } catch (error) {
        console.error('Error fetching media detail:', error);
    } finally {
        setLoading(false);
    }
};
