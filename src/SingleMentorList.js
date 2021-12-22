import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./SingleMentorList.css"



const SingleMentorList = ({item}) => {

    return (
        <Card className="mentor-container">
                <CardContent className="mentor-content">
                    <p><b>User Name:</b> {item}</p>
                </CardContent>
        </Card>
    )
}

export default SingleMentorList
