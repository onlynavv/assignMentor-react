import React,{useState} from 'react'
import "./CreateMentor.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CreateMentor = () => {

    const [mentorInfo,setMentorInfo] = useState({name:'',course:""})
    const [handleError, setHandleError] = useState("")
    const [handleSucess, setHandleSucess] = useState("")

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMentorInfo({...mentorInfo, [name]:value})
    }

    const createMentor = async() => {
        try{
            const resp = await fetch('https://mentorship-api-app.herokuapp.com/createMentor', {
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(mentorInfo)
                })

        const data = await resp.json()
        

        if(resp.ok){
            setHandleSucess(data.msg)
            setMentorInfo({name:'',course:""})
        }else{
            throw new Error(data.msg)
        }

        }

        catch(error){
            
            setHandleError(error.toString())
        }

        console.log(mentorInfo)
        
    }

    return (
        <section>
            <article className="container create-wrapper">
              <Card className="form-card">
                <CardContent className="form-cardContent">
                    <h3>Create Mentor</h3>
                    <form className="form-wrapper">
                        <div className="form-control">
                            <label>Enter Mentor Name</label>
                            <TextField className="userInput" label='Mentor Name' placeholder='Enter Mentor Name' id="name" name="name" value={mentorInfo.name} onChange={handleChange} multiline variant="standard" />
                        </div>
                        <div className="form-control">
                            <label>Enter Course</label>
                            <TextField className="userInput" label='Mentor Course' placeholder='Enter Course' id="course" name="course" value={mentorInfo.course} onChange={handleChange} multiline variant="standard" />
                        </div>
                        <div className='form-control status-div'>
                            <p className='error-clr'>{handleError}</p>
                            <p className='success-clr'>{handleSucess}</p>
                        </div>
                        <div className='btn-div'>
                            <Button className="submitBtn" variant="contained" size="medium" onClick={createMentor}>Create Mentor</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            </article>
        </section>
    )
}

export default CreateMentor
