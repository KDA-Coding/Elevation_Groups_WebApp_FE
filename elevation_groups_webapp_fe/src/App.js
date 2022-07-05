import './App.css';
import { Groups } from "./groups"

function App() {

  //const [query, setQuery] = useState("");

  return (
    <div className="App">
      <input type="text" placeholder="Search for a group!" className="search" />
      <ul className="groupList">
        {Groups.map((group) => (
          
            <li className="groupListItem" key={group.id.toString()}>
              <div className="groupCard">
                <p></p>
              </div>
            </li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
