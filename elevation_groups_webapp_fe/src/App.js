import './App.css';
import React from 'react';

async function get_groups() {

    let groups = await fetch("http://localhost:4000/groups").then(g=>g.json())

    //Groups API Fetch Check
    //console.log( "This is what's in groups: ", groups )

  return groups
}


export default function App(props) {

  //const [query, setQuery] = useState("");

  const filter_keys = ["campus", "demographic", "group_type", "meeting_date", "zip_code"]

  const [groups, set_groups] = React.useState([]);
  const [filters, set_filters] = React.useState([]);
  const [filter_settings, set_filter_settings] = React.useState( Object.fromEntries( filter_keys.map( fk => [fk, null] ) ) );
  const [loaded, set_loaded] = React.useState(false);

  // Filter Settings Check
  //console.log(filter_settings)

  function groups_received(groups)
  {
    set_loaded(true);
    set_groups(groups);
    set_filters( filter_keys.map( fk => [fk, groups.map(g=>g[fk]).filter( (v, ind, arr) => arr.indexOf(v) === ind )  ] ) )
  }
  if(loaded === false)
    get_groups().then(groups_received)

  function GroupsDisplay()
  {
    return (<div className='list'>
      { groups
        .filter( g => filter_keys
          .every( fk =>  
            filter_settings[fk] == null || String(g[fk]) === filter_settings[fk] 
          ) )
        .map( g => (<div className='group-entry' key={g.id}> 
        <div> What : {g.group_type} - {g.description}</div>
        <div> Where : {g.campus} ({g.zip_code}) </div>
        <div> For : {g.demographic}</div>
        <div> When: {new Date(g.meeting_date).toLocaleDateString()}</div>
      </div> )) }
      </div>)
  }

  function filters_changed(fk, val)
  {
    var newfs = {...filter_settings};
    newfs[fk] = val.length === 0 ? null : val;
    set_filter_settings(newfs); 
  }

  return (
    <div className='App'>
      <div className='controls'>
        {filters.map( ([fk, ops]) => (
          <div className="filterInput" key={fk}>
          <label>{fk.replaceAll("_", " ")} </label>
          <select onChange={ e => filters_changed( fk, e.target.value ) }>
            <option value="">All</option>
            {ops.map( o => (<option key={o} value={o}>{ fk.includes("date") ? new Date(o).toLocaleDateString() : o}</option>) )}
          </select>
          </div>
          ))}
      </div>
      <GroupsDisplay/>
    </div>
  );
}