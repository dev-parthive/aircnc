export const addHome = async homeDate => {
    const url = `${process.env.REACT_APP_API_URL}/homes`
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(homeDate)
    })
    const data = await response.json()
    return data;
}

//get all homes 
export const getAllHome = async() =>{
    const response = await(fetch(`${process.env.REACT_APP_API_URL}/homes`))
    const data = response.json()
    return data;
}