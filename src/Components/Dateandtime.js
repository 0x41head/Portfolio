import React ,{ useState , useEffect }from 'react'
import './Dateandtime.css'
import Box from './Box';

export default function Dateandtime() {
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        setInterval(()=>setDate(new Date()), 1000 )
    });

    return (
        
           <Box content={date.toLocaleTimeString("en-US",{hour12:false})+" "+date.toLocaleDateString()} 
           inix={window.innerWidth-370} iniy={(window.innerHeight*0.1)}/> 
        
    )
}
