import React,{useState} from 'react'
import "./CreateUser.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CreateUser = () => {

    const [userInfo,setUserInfo] = useState({name:'',dept:""})
    const [handleError, setHandleError] = useState("")
    const [handleSucess, setHandleSucess] = useState("")

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserInfo({...userInfo, [name]:value})
    }

    const createUser = async() => {
        try{
            const resp = await fetch('https://mentorship-api-app.herokuapp.com/createUser', {
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(userInfo)
                })

        const data = await resp.json()
        

        if(resp.ok){
            setUserInfo({name:'',dept:""})
            setHandleSucess(data.msg)
        }else{
            throw new Error(data.msg)
        }

        }

        catch(error){
            
            setHandleError(error.toString())
        }

        console.log(userInfo)
        
    }

    return (
        <section>
            <article className="container create-wrapper">
              <Card className="form-card">
                <CardContent className="form-cardContent">
                    <h3>Create User</h3>
                    <form className="form-wrapper">
                        <div className="form-control">
                            <label>Enter User Name</label>
                            <TextField className="userInput" label='User Name' placeholder='Enter User Name' id="name" name="name" value={userInfo.name} onChange={handleChange} multiline variant="standard" />
                        </div>
                        <div className="form-control">
                            <label>Enter Department</label>
                            <TextField className="userInput" label='User Department' placeholder='User Department' id="dept" name="dept" value={userInfo.dept} onChange={handleChange} multiline variant="standard" />
                        </div>
                        <div className='form-control status-div'>
                            <p className='error-clr'>{handleError}</p>
                            <p className='success-clr'>{handleSucess}</p>
                        </div>
                        <div className='btn-div'>
                            <Button className="submitBtn" variant="contained" size="medium" onClick={createUser}>Create Mentor</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            </article>
        </section>
    )
}

export default CreateUser
