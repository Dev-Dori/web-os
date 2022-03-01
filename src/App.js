import React from 'react';
import Window from './components/window/window';

function App(){
  console.log('App component load')
  var AppList = [
    {
      name:'Terminal',page:'DevDori@world:~/Desktop$ echo "현재 개발 진행중입니다!!!!"\n현재 개발 진행중입니다!!!!',
      state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/Terminal.png"
    },
    {
      name:'Awards',page:'This page is Awards',
      state:false, IsDir:false, minsize:{width:400,height:400}, dock:false,
    },
    {
      name:'Patch',
      page:"<패치노트>\n"+
      "1. 탭 기능 추가\n"
      +"2. 탭 드래그 기능 추가\n"
      +"3. 탭 사이즈 조절 기능 추가\n"
      +"4. 앱 - 탭(독) 추가\n"
      +"5. 탭 - 닫기, 최소화, 최대화 구현\n"
      ,state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/Settings.png"
    },
    {
      name:'Contact',page:'Contact here Please',
      state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/mail.png"
    },
    {
      name:'Conta151515ct',page:'Contact here Please',
      state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/mail.png"
    },
    {
      name:'folder',page:'This page is folder',
      state:false, IsDir:true, minsize:{width:400,height:400}, dock:true,
      icon:"./img/icon/folder.png"
    },
  ];

  
  return (
    <>
      <Window list={AppList} />
    </>
  );
}

export default App;
