import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory()

    return (
        <nav className='navbar'>
                <div className='nav-center'>
                    <h3 onClick={()=>{history.push('/')}} className="logo">Assign Mentor</h3>
                    <div className='nav-container'>
                        <Link to='/'>Home</Link>
                        <Link to="/createMentor">Create Mentor</Link>
                        <Link to="/createUser">Create User</Link>
                        <Link to="/mentors">Mentor List</Link>
                        <Link to="/assignMentor">Assign Mentor</Link>
                        <Link to="/changeMentor">Change Mentor</Link>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
