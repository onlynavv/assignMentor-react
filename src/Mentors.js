import React,{useState, useEffect} from 'react'
import MentorList from './MentorList'
import "./Mentors.css"

const Mentors = () => {

    const [mentorList, setMentorList] = useState([])

    const getMentors = async() => {
        const resp = await fetch("https://mentorship-api-app.herokuapp.com/mentor")
        const data = await resp.json()
        setMentorList(data)
    }

    useEffect(()=>{
        getMentors()
    },[])

    console.log(mentorList)

    return (
        <section>
            <article className="container mentor-wrapper">
                {mentorList.map((item)=>{
                    const {_id} = item
                    return <MentorList key={_id} {...item} />
                })}
            </article>
        </section>
    )
}

export default Mentors
