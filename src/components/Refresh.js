import data from "../data"

function Refresh({setTours}){

  return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
  );
}

export default Refresh;
