
import {  Outlet, useNavigate } from "react-router-dom";


export default function Layout() {

    const navigate = useNavigate();
    const handleClick =(path)=> () => {
        navigate(path);
    }

    return (
        <div>
            <div>
                <button onClick={handleClick('/home')}>home</button>
                <button onClick={handleClick('/about')}>about</button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}