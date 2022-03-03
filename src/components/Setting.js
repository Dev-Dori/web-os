import React from 'react';
import Window from './index';

function App(){
  console.log('App component load')

  var directory = {
    root:[{
      users:[{
        devdori:[{
          Desktop:[{
            Projects:[{},{IsDir:true}],
            Experience:[{},{IsDir:true}],
            Awards:[{},{IsDir:true}],
            Education:[{},{IsDir:true}],
            Terminal:[],
            Patch:[],
            Contact:[],
            Conta151515ct:[],
            FileManager:[],
          },{IsDir:true}],
          Apps:[{
            Terminal:{
              page:'DevDori@world:~/Desktop$ echo "현재 개발 진행중입니다!!!!"\n현재 개발 진행중입니다!!!!',
              state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
              icon:"images/icon/Terminal.png"
            },
            Patch:{
              page:"<패치노트>\n"+
              "1. 탭 기능 추가\n"
              +"2. 탭 드래그 기능 추가\n"
              +"3. 탭 사이즈 조절 기능 추가\n"
              +"4. 앱 - 탭(독) 추가\n"
              +"5. 탭 - 닫기, 최소화, 최대화 구현\n"
              +"6. 탭 - 버그 수정\n"
              +"7. 독 - 독에 있는 아이콘 클릭시 실행중인 해당 앱이 최상단에 노출되도록 패치\n"
              +"8. 탭 - OpenTask 파일 함수화\n"
              +"9. 디렉토리 - 변수 구조 딕셔너리로 변경\n"
              +"10. 바탕화면 - 아이콘 추가\n"
              +"11. index.js 코드 정리\n"
              +"12. url로 실행 가능 패치\n"
              ,state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
              icon:"images/icon/Settings.png"
            },
            Contact:{
              page:'Contact here Please',
              state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
              icon:"images/icon/mail.png"
            },
            Conta151515ct:{
              page:'Contact here Please',
              state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
              icon:"images/icon/mail.png"
            },
            FileManager:{
              page:'This page is FileManager',
              state:false, minsize:{width:400,height:400}, dock:false,
              icon:"images/icon/Terminal.png"
            },
          },{IsDir:true}]
        },{IsDir:true}]
      },{IsDir:true}]
    },{IsDir:true}]
  }

  
  return (
    <>
      <Window list={directory} />
    </>
  );
}

export default App;
