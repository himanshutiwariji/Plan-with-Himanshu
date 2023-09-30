import React ,{useState}  from "react"
import Tours from "./components/Tours";
import data from "./data";
import Refresh from "./components/Refresh"




const App = () => {
  const[tours , setTours]= useState(data);

  function removeTour(id){
    const newTours=tours.filter(tour => tour.id !== id)
    setTours(newTours);
  }


  return( 
   <>
    {
      (tours.length===0)  ?
       <Refresh setTours = {setTours}/> :
         <div>
             <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    
    }
</>

  );
}
    

export default App;
