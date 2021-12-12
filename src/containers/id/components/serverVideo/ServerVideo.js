import React, { useEffect, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from "react-redux";
import {callVideo} from '../../../../core/Movie/actions';
const ServerVideo = ({key}) =>{
const {mediaType, video, seasons, episode, seasonSelected, serverList}= useSelector(state => state.movieReducer);
const  [value, setValue] = React.useState(`https://www.youtube.com/embed/${ video}`);
const trailer = `https://www.youtube.com/embed/${video}`;

var serverSelected;
const dispatch = useDispatch();
console.log(video)

useEffect(
  () => {
   
    if(video === undefined){ setValue(serverList[0].url)}
    if(video){setValue(trailer)}
  
  },[video])



const Servers = (event, newValue) => {
  setValue(newValue);
  console.log(newValue)
  console.log(serverList)
  console.log(value)
  console.log(serverSelected)
  serverSelected=newValue
  
  

};
return(
    <>

 <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
 
      <Tabs value={value} onChange={Servers} centered>
      {video && <Tab key="trailer" label= "Trailer" value={trailer} />}
      {serverList?.map((item, index) =>
        <Tab key={index} label= {item.name} value={item.url}/>
        
        )}
      </Tabs>
       
    </Box>
                      
    {serverList !=undefined &&
                    <div className="frameContent">
                       
                       <iframe 
                            className="frame"
                            src={value}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                          />
                      
                        </div>
}
    </>
)
}
export default ServerVideo;