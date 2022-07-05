import './App.css';
import { Groups } from "./groups"

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search for a group!" className="search" />
      <ul className="groupList">
        <li className="groupListItem">Group 1</li>
        <li className="groupListItem">Group 2</li>
        <li className="groupListItem">Group 3</li>
        <li className="groupListItem">Group 4</li>
        <li className="groupListItem">Group 5</li>
        <li className="groupListItem">Group 6</li>
        <li className="groupListItem">Group 7</li>
      </ul>
    </div>
  );
}

export default App;
