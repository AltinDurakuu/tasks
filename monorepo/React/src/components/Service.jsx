import "./../styles/Service.css";
import { NavLink, useNavigate } from "react-router-dom";

function Service({serviceName}) {
    const navigate  = useNavigate();
    function handleClick(){
        navigate("/service/" + serviceName);
    }
    return (
     <div className="service" onClick={handleClick}>
        <div>
            {/* <img src="" alt="" /> */}
            <h3>{serviceName}</h3>
        </div>
        <p>&#62;</p>
     </div>
    )
  }
  
  export default Service;
  