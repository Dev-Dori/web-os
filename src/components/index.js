import React, {useState} from 'react';
import CreateWindow from './Screen/CreateWindow'
import CreateIcon from './Screen/CreateIcon';
import CreateDock from './Screen/CreateDock';

function Index(directory){
  var [article, setarticle] = useState({});
  var [zindex, SetZindex] = useState(0);
  var ExecuteApp = directory.list.root[0].users[0].devdori[0].Apps[0];
  var DesktopApp = directory.list.root[0].users[0].devdori[0].Desktop[0];

  function execute(e){
    if(!ExecuteApp[e.target.alt].state){
      ExecuteApp[e.target.alt].state=true;
      ExecuteApp[e.target.alt].zindex=zindex+1;
      SetZindex(zindex+1);
    }
  }

  return (
    <div className='screen'>
      <div className="window-container">
        <CreateWindow ExecuteApp={ExecuteApp} setarticle={setarticle} SetZindex={SetZindex}/>
      </div>
      <div className='app-container'>
        <CreateIcon DesktopApp={DesktopApp} ExecuteApp={ExecuteApp} execute={execute}/>
      </div>
      <div className='dock'>
        <CreateDock ExecuteApp={ExecuteApp} execute={execute} />
      </div>
    </div>
  );

}

export default Index;