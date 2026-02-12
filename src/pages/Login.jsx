import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login(){
    const [username, setUsername] = useState('testuser');
    const [password, setPassword] = useState('password123');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to dashboard on login
        navigate('/dashboard');
    };

    return(
        <div className="login-container">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-div">
                    <span className="input-icon"><i class="bx bx-envelope-alt" /></span>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-div">
                    <span className="input-icon"><i class="bx bx-lock" /></span>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}