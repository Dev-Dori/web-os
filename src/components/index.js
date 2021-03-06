/* eslint-disable */
import React, {useState, useEffect} from 'react';
import CreateWindow from './Screen/CreateWindow'
import CreateIcon from './Screen/CreateIcon';
import CreateDock from './Screen/CreateDock';
import CreateTopMenuBar from './Screen/CreateTopMenuBar';
import './stylesheet.css';

function Index(directory){
  var [zindex, SetZindex] = useState(0);
  var [url, SetUrl] = useState(document.URL);
  var [ExecuteApp, SetExecuteApp] = useState(directory.list.root[0].users[0].devdori[0].Apps[0]);
  var DesktopApp = directory.list.root[0].users[0].devdori[0].Desktop[0];
  
  useEffect(()=>{
    window.addEventListener('popstate', function(){SetUrl(document.URL);})
  })

  function execute(){
    url = document.URL.split("#/")[1];
    if(url&&ExecuteApp[url]){
      if(!ExecuteApp[url].state){
        ExecuteApp[url].state=true;
        ExecuteApp[url].zindex=zindex+1;
        SetZindex(zindex+1);
      }
    }
  }

  execute();
  return (
    <div className='screen'>
      <div className='wallpaper'></div>
      <div className='Desktop'>
        <div className='Menubar-container'>
          <CreateTopMenuBar />
        </div>
        <div className="window-container">
          <CreateWindow ExecuteApp={ExecuteApp} SetExecuteApp={SetExecuteApp} SetZindex={SetZindex} zindex={zindex} SetUrl={SetUrl}/>
        </div>
        <div className='app-container'>
          <CreateIcon DesktopApp={DesktopApp} ExecuteApp={ExecuteApp} execute={execute}/>
        </div>
      </div>
      <div className='dock'>
        <CreateDock ExecuteApp={ExecuteApp} execute={execute} />
      </div>
    </div>
  );

}

export default Index;