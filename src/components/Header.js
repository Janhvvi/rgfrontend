

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate=useNavigate();
    const logoutHandler=() =>{
        localStorage.clear();
        navigate('/');
    }


    return (
       
        <div className="row bg-warning d-flex align-items-center">
            <div className="col-sm-3">
                <Link to="/" >   <img className=" w-25"  src="/imgs/logo.png" alt="logo here"/> </Link>
            </div>
            <div className="col-sm-5">
                <b>   <i> Creating Happy Home Owners Everyday with a big smile in their face!</i> </b>
            </div>
            <div className="col-sm-3">
            {
                (localStorage.getItem('name'))&&
                <h4>Hello {localStorage.getItem('name')}!</h4>
            }
            {
                (localStorage.getItem('name'))?
                <Link to="/logout"> <button className="btn btn-success mr-3" onClick={logoutHandler}> Logout </button> </Link>
                :<Link to="/login"> <button className="btn btn-primary mr-3"> Login </button> </Link>
            }
       
              
                {/* <Link to="/enqiry"> <button className="btn btn-dark mr-3"> Enquiry</button> </Link> */}

            {!localStorage.getItem('name')&&
            
                <Link to="/signup"> <button className="btn btn-success mr-3"> Sign Up</button> </Link>
            }
            </div>


        </div>
       
     );
}
 
export default Header;


