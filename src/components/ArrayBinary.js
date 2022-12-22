import React, { useState } from "react";
import axios from "axios";

const ArrayBinary = () => {
    const [arrBinary, setArrBinary] = useState({
        arrayForOrdered: ''
    })
    const [arrBinaryResp, setArrBinaryResp] = useState("")

    const fetchArrBinary = async () => {
        console.log(arrBinary);
        const response = await axios
        .post("http://localhost:6239/api/v1/Array", arrBinary)
        .catch((err) => {
            console.log("Err: ", err);
        });
        setArrBinaryResp(response.data.arrayOrdered);
        
        console.log('resp: ', response);
    }
    
    const sendData = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form  noValidate autoComplete='off' onSubmit={sendData}>

                <input 
                type="text" 
                name="inArrayFormat"
                value={arrBinary.arrayForOrdered}
                onChange={(e) => setArrBinary({ arrayForOrdered: e.target.value })} />
                <h1>{arrBinaryResp}</h1>
                <button onClick={fetchArrBinary} type="submit">Send</button>
            </form>
        </div>
    )
}

export default ArrayBinary;