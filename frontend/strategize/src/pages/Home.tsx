import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from 'src/app/hooks'
import { logout, User, reset } from 'src/app/state_management/user/authSlice';
import { RootState } from 'src/app/store';

function Home() {

  //! To be migrated!! ------------------------------------------------------------------------------------------------------------------------
    const [formData, setFormData] = useState({
      data: '',
  })

  const {data} = formData;

  const onFormUpdated = (e : Event | any) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onFormSubmitted = (e: Event | any) => {
    e.preventDefault();
    if(null)
    {
      throw new Error ("Please enter all fields!");
    }
    else{
      console.log("trying to login...");
      console.log(formData);
      
    }
  }

  const onLogoutClicked = () => {
    dispatch(logout());
    dispatch(reset());
    navigator('/');
  }

  //! Immigrants Border ------------------------------------------------------------------------------------------------------------------------
  
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const {user} : any = useAppSelector((state : RootState) => state.auth);

  useEffect(() => {
    if (!user)
    {
      navigator('/login');
    }

  }, [user, navigator])

  

  return (
    <section>
      {user && <div>
        <h1>Welcome</h1>
        <p>
          Name: {user.name}
        </p>
        <p>
          Email : {user.email}
        </p>
        <p>
          <button onClick={onLogoutClicked}>Logout</button>
        </p>
      </div>}
      <div>
        <form onSubmit={(e) => onFormSubmitted(e)}>
            <input className="form-input" type="email" placeholder="Project Name" id="data" 
                name="data" value={data} onChange={(e) => {onFormUpdated(e)}}/>
            <button type='submit'>Login</button>
        </form>  
        <h2><button>Create New Project</button></h2>
        
        
        
      </div>
      <div>
        <h4>Existing Projects</h4>
      </div>
    </section>
  )
}

export default Home