export const setAuthToken = user =>{
    const currentUser = {
        email : user.email
    } 
    //save user in db and get token 
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method: "PUT", 
        headers:  {
            'content-type' : "application/json"
        }, 
        body : JSON.stringify(currentUser)
    })
    .then(res => res.json()).then(data => {
        console.log(data)
        const userData = {
            "aircnc-token" : data?.token,
            "userEmail" : currentUser?.email
        }

        //save the token in localstoreg
        localStorage.setItem("user-info", JSON.stringify(userData))
    })
}