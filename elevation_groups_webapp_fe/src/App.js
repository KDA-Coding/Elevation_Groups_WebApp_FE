import './App.css';
import { Groups } from "./groups"

function App() {

  //const [query, setQuery] = useState("");

  return (
    <div className="App">
      <input type="text" placeholder="Search for a group!" className="search" />
      <div className="container">
        <ul className="group-list">
          {Groups.map((group) => (
            
              <li className="group-list-item" key={group.id.toString()}>
                <div className="card">
                  <div className="card-header">
                    <h3>{group.demographic} - {group.group_type}</h3>
                  </div>
                  <div className="card-body">
                      <p>{group.campus} - {group.zip_code}</p>
                      <p>{group.meeting_date} - {group.description}</p>
                      <button className="btn">Get Involved</button>
                  </div>
                </div>
              </li>
            
          ))}
        </ul>
      </div>   
    </div>
  );
}

export default App;
