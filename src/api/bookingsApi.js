import { toast } from "react-hot-toast"

//save a bookings in our databasae 
export const saveBookings = async (bookingData) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/bookings`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const result = await response.json()
        if (result) {
            toast.success("Booking successfull")
        }
        return result;

    }
    catch (err) {
        toast.error(err.message)
    }
}


///get all bookings of an user's   by email 

export const getAllBookingsByEmail = async (email) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/bookings?email=${email}`
        const response = await fetch(url)
        const data = await response.json()
        if(data){
            return data?.data;
        }else{
            return data
        }
    }
    catch (err) {
        toast.error(err.message)
    }
}
// get all bookings for admin 
export const getAllBookings = async() =>{
    try{
        const url  = `${process.env.REACT_APP_API_URL}/bookings`
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(err){
        console.log(err.message)
    }

} 
//cancle a bookings 
