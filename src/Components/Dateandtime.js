import React ,{ useState , useEffect }from 'react'
import './Dateandtime.css'
import Box from './Box';

export default function Dateandtime() {
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        setInterval(()=>setDate(new Date()), 1000 )
    });

    return (
        <Box content={date.toLocaleTimeString("en-US",{hour12:false}) + "\n\n" } 
        content2={date.toLocaleDateString()}
           inix={window.innerWidth-390} iniy={(window.innerHeight*0.025)} width={380} height={150}
           font= "Aldrich" fsize="80px" ft="bold" fsize2="40px"/>    
    )
}
