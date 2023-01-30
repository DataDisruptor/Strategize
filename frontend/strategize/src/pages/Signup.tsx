import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [formData, setFormDate] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {name, email, password, confirmPassword} = formData;

    const navigator = useNavigate();

    
  return (
    <div>
        SIGNUP:
        <form>
            <input/>
            <input/>
            <input/>
            <input/>
            <button type='submit'>Signup</button>
        </form>  
    </div>
  )
}

export default Signup