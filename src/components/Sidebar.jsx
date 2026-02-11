import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar(){
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded)
    }

    const handleLogout = () => {
        // Add logout logic here
        console.log('Logging out...')
    }

    return(
        <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <button className={`toggle-btn ${isExpanded ? 'rotated' : ''}`} onClick={toggleSidebar} title="Toggle sidebar">
                <i class="bx bx-caret-big-right" />
            </button>

            <div className="logo-container">
                <div className="logo"><i class="bx bx-building-house" /></div>
                {isExpanded && <span className="logo-text">Hostel Mgt</span>}
            </div>

            <nav className="nav-links">
                <NavLink to="/" className="nav-link" title="Home">
                    <span className="icon"><i class="bx bx-dashboard" /></span>
                    {isExpanded && <span className="label">Dashboard</span>}
                </NavLink>
                <NavLink to="/bookings" className="nav-link" title="Bookings">
                    <span className="icon"><i class="bx bx-calendar-detail" /></span>
                    {isExpanded && <span className="label">Bookings</span>}
                </NavLink>
                <NavLink to="/rooms" className="nav-link" title="Rooms">
                    <span className="icon"><i class="bx bx-door-open" /></span>
                    {isExpanded && <span className="label">Rooms</span>}
                </NavLink>
                <NavLink to="/profile" className="nav-link" title="Settings">
                    <span className="icon"><i class="bx bx-cog" /></span>
                    {isExpanded && <span className="label">Settings</span>}
                </NavLink>
                <NavLink to="/users" className="nav-link" title="Users">
                    <span className="icon"><i class="bx bx-user" /></span>
                    {isExpanded && <span className="label">Users</span>}
                </NavLink>
            </nav>

            <button className="help-btn" title="Help">?</button>
        </aside>
    );
}