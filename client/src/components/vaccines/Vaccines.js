import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Vaccines(props) {
  // props.vaccineBackground()
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('nbbbb')
    fetchItems();
  },[]);

  

  const fetchItems = ()=>{
    const url = 'http://localhost:5000/vaccines'
    if (process.env.NODE_ENV === 'production'){
      url = '/vaccines'
    }
    fetch(url)
    .then(res=>res.json())
    .then(vaccines=> {
      setItems(vaccines.vaccines)
    })
  }

  return (
    <div>
      {items.map(item => 
        (<ul key={item.id}>
          <li><Link to = {`/vaccines/${item.id}`}>name : {item.name}</Link></li>
          <li>prevent_disease : {item.prevent_disease}</li>
          <li>alleries : {item.alleries}</li>
          <li>recommend_star : {item.recommend_star}</li>
        </ul>
      ))}
    </div>
      
  );
}

export default Vaccines;