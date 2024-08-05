import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID mV0HKnRNzRLMuYbedgb2ui6TPXWu71Yn4eZWluWFcnk'
        },
        params: {
            query: term
        }
    })

    return response.data.results
}

export default searchImages
