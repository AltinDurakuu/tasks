import Service from "./Service";
import "./../styles/AllServices.css"
function AllServices() {

    return (
     <div className="default-width">
        <div className="all-services">
            <Service serviceName="Anti wrinkle Treatment" />
            <Service serviceName="Dermal fillers" />
            <Service serviceName="Secret RF" />
            <Service serviceName="HArmonyCA" />
            <Service serviceName="Profhilo" />
            <Service serviceName="Facials" />
        </div>
        <div className="call-support">
            <p>Not sure about consultation type? Please, call <a href="">0203 7959063</a></p>
        </div>
     </div>
    )
  }
  
  export default AllServices
  