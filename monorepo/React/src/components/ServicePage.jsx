import { useParams } from "react-router-dom";


function ProductPage() {
  const {serviceName} = useParams();
  const goBack = () => {
    window.history.back();
  };
  return (
   <main>
       <div className="container">
           <h2>{serviceName}</h2>
           <button onClick={goBack}>Go Back</button>
       </div>
   </main>
  );
}

export default ProductPage;