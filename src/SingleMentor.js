import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./SingleMentor.css"
import SingleMentorList from './SingleMentorList'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const SingleMentor = () => {

    const {id} = useParams()

    const history = useHistory()

    const [assignedUsers, setAssignedUsers] = useState([])

    const getUserAssignList = async() => {
        const resp = await fetch(`https://mentorship-api-app.herokuapp.com/getStudents/${id}`)
        const data = await resp.json()
        console.log(data)
        setAssignedUsers(data)
    }

    useEffect(()=>{
        getUserAssignList()
    },[])

    console.log(assignedUsers)

    return (
        <section className='singleMentor-container'>
            <article className="container mentor-wrapper">
                {assignedUsers.userList && assignedUsers.userList.map((item,index)=>{
                    console.log(item)
                    return <SingleMentorList key={index} item={item} />
                })
            }
            </article>
            <Button onClick={()=>{history.goBack()}}>Go Back</Button>
        </section>
    )
}

export default SingleMentor
