import React from 'react';
import Window from './components/window/window';

function App(){
  console.log('App component load')
  var AppList = [
    {
      name:'Terminal',page:'This page is Terminal - 현재 개발 진행중입니다!!!',
      state:false, Isdir:false, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/Terminal.png"
    },
    {
      name:'folder',page:'This page is folder',
      state:false, Isdir:false, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/folder.png"
    },
    {
      name:'Awards',page:'This page is Awards',
      state:false, Isdir:false, minsize:{width:400,height:400}, dock:false,
    },
    {
      name:'Con6134tact',page:'Contact here Please',
      state:false, Isdir:false, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/mail.png"
    },
  ];

  
  return (
    <>
      <Window list={AppList} />
    </>
  );
}

export default App;
