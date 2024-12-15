import { useParams } from "react-router-dom"
import { useResendemailMutation } from "../Redux/apiSlice"

const Verify = async () =>{

const {email} = useParams()
const [resendmail] = useResendemailMutation()
const handleResendmail = async () => {
await resendmail({email})
}
return (
    <div className="container">
<div>
            <h1>check your email {email} </h1>
            <button onClick={ handleResendmail}>send mail</button>
            </div>

    </div>
         
        
    )
}
export default Verify