export const getImageURL = async (image) =>{
    const formData = new FormData()
        console.log(formData);
        formData.append('image', image)
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API}`
        console.log(url)
    const response = await fetch(url , {
        method: "POST", 
        body: formData

    })
    const data = await response.json()
    return data.data.display_url 
}


