import Card from "./Card"
function Tours({ tours , removeTour }) {
  return (
    <div className = "container">
       <img src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="photo" alt="hello"/>
      <div className = "title">
        <h2>Plan with Himanshu</h2>
      </div>

      <div className = "cards">
        {
            tours.map( (tour) => {
                return (<Card key={tour.id} {...tour} removeTour={removeTour}></Card>)
          })
        }

      </div>
    </div>
  );
}

export default Tours;
