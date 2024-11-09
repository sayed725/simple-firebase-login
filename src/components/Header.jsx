import { NavLink } from "react-router-dom";



const links = (
    <>
    <NavLink className={({isActive})=>
    `btn rounded-2xl ${isActive? "bg-blue-500" : ""}`} to='/'>Home</NavLink>
    <NavLink className={({isActive})=>
    `btn rounded-2xl ${isActive? "bg-blue-500" : ""}`} to='/login'>Login</NavLink>
    </>
)

const Header = () => {
    return (
        <div className="mx-auto text-center justify-center text-2xl flex gap-10">
            {
                links
            }
        </div>
    );
};

export default Header;