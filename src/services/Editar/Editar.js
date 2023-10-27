import API from '../Api.js'

class pageEdit
{

    allSites = async (params) => {

        try
        {
            const response = await API.get(`/getData`, { params });

            if (response.status === 200)
            {
                const data = response.data;
                console.log(data)
                return data;
            }

            return [];

        } catch (err) {
            throw err.response;
        }
    };
   
    

    
    
}

export default new pageEdit();