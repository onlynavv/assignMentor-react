import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./MentorList.css"
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const MentorList = ({_id,name,course}) => {

    const history = useHistory()

    return (
        <Card className="mentor-container">
                <CardContent className="mentor-content">
                    <p><b>Mentor Name:</b> {name}</p>
                    <p><b>Course:</b> {course}</p>
                    <Button onClick={()=>{history.push(`/mentor/${_id}`)}}>View All the assigned users</Button>
                </CardContent>
        </Card>
    )
}

export default MentorList
