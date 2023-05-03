export const hostRequest = async(hostData) =>{
    console.log(hostData)
    const url = `${process.env.REACT_APP_API_URL}/user/${hostData?.email}`
    console.log(url)
    const response =await  fetch(url , {
        method: "PUT", 
        headers:  {
            'content-type' : "application/json"
        }, 
        body : JSON.stringify(hostData)
    })
    const result = await response.json()
    console.log(result)
    return result;
}



export const getUserRole = async (email) =>{
    const url = `${process.env.REACT_APP_API_URL}/user/${email}`
    const response = await fetch(url)
    const user = await response.json()
    return user?.role ;
}