import { useState } from 'react'
import './Header.css'

export default function Header({ pageName }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleLogout = () => {
        console.log('User logging out...')
        setIsDropdownOpen(false)
    }

    const handleProfile = () => {
        console.log('Going to profile...')
        setIsDropdownOpen(false)
    }

    return (
        <header className="header">
            <div className="page-name">
                <h2>{pageName || 'Dashboard'}</h2>
            </div>

            <div className="profile-section">
                <button className="profile-btn" onClick={toggleDropdown}>
                    <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" 
                        alt="User Profile" 
                        className="profile-pic"
                    />
                    <span className="profile-name">John Doe</span>
                    <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                        ▼
                    </span>
                </button>

                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={handleProfile}>
                            <i class="bx bx-user-circle" /> My Profile
                        </button>
                        <button className="dropdown-item" onClick={() => {
                            console.log('Settings...')
                            setIsDropdownOpen(false)
                        }}>
                            <i class="bx bx-slider" /> Settings
                        </button>
                        <hr className="dropdown-divider" />
                        <button className="dropdown-item logout" onClick={handleLogout}>
                            <i class="bx bx-arrow-out-left-square-half" /> Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}
