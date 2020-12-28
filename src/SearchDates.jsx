import React, {useState} from 'react'; 
import {Button} from '@material-ui/core'
import './SearchDates.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People'

const SearchDates = () => {
    const[selected, setSelected] = useState(false)
    const[startDate, setStartDate] = useState(new Date()); 
    const[endDate, setEndDate] = useState(new Date()); 

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        console.log('start',startDate);
        console.log('end', endDate);
    }

    return (
        <div className="searchdates">
            <Button onClick={() => setSelected(!selected)}>{selected ? "Hide" : "Search Dates"}</Button> 
           
                {selected ?  <div className="searchdates__popup"><DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}

        
      /> 
      <div className="guestInput">
      <h1>Number of Guests</h1>
      <PeopleIcon/>
      <input min={0} defaultValue={2} type="number"/>
      </div>
      
      </div>: ""}
     
            </div>
    
    )
                }

export default SearchDates; 