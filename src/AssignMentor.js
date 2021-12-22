import React,{useState,useEffect} from 'react'
import "./AssignMentor.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const AssignMentor = () => {

    const [mentorInfo,setMentorInfo] = useState({mentorName:''})
    const [mentorList, setMentorList] = useState([])

    const [userList, setUserList] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])

    const [handleError, setHandleError] = useState("")
    const [handleSucess, setHandleSucess] = useState("")

    const getMentors = async() => {
        const resp = await fetch("https://mentorship-api-app.herokuapp.com/mentor")
        const data = await resp.json()
        setMentorList(data)
    }

    useEffect(()=>{
        getMentors()
    },[])

    const getUsers = async() => {
        const resp = await fetch("https://mentorship-api-app.herokuapp.com/availableUsers")
        const data = await resp.json()
        setUserList(data)
    }

    useEffect(()=>{
        getUsers()
    },[handleSucess])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMentorInfo({...mentorInfo, [name]:value})
    }

    const handleUserChange = (e) => {
        const name = e.target.name
        const value = Array.from(e.target.selectedOptions, option => option.value)
        setSelectedUsers({[name]:value})
    }

    console.log(selectedUsers)

    console.log(mentorInfo)

    const createUser = async() => {
        try{
            const resp = await fetch('https://mentorship-api-app.herokuapp.com/assignMentor', {
            method:'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({...mentorInfo, ...selectedUsers})
                })

        const data = await resp.json()
        

        if(resp.ok){
            setHandleSucess(data.msg)
        }else{
            throw new Error(data.msg)
        }

        }

        catch(error){
            
            setHandleError(error.toString())
        }

        console.log({...mentorInfo, ...selectedUsers})
        
    }

    return (
        <section>
            <article className="container assign-wrapper">
              <Card className="form-card">
                <CardContent className="form-cardContent">
                    <h3>Assign Mentor to list of Students</h3>
                    <form className="form-wrapper">
                        <div className="form-control">
                            <label>Select Mentor Name</label>
                            {mentorList && mentorList.length > 0 && (
                                <select name="mentorName" onChange={handleChange}>
                                    {mentorList.map((item,index)=>{
                                        return <option key={index} value={item.name}>{item.name}</option>
                                    })}
                                </select>
                            )}
                        </div>

                        <div className="form-control">
                            <label>Select User Name</label>
                            {userList && userList.length > 0 && (
                                <select name="userName" multiple={true}  onChange={handleUserChange}>
                                    {userList.map((item,index)=>{
                                        return <option key={index} value={item.name}>{item.name}</option>
                                    })}
                                </select>
                            )}
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

export default AssignMentor
