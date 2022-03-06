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
            QNA:[],
            Awards:[],
            Member:[],
            Terminal:[],
            Contact:[],
            About:[],
            Information:[],
          },{IsDir:true}],
          Apps:[{
            Terminal:{
              page:'DevDori@world:~/Desktop$ echo "아쉽지만 현재 터미널은 개발중입니다 ㅠㅠ"\n아쉽지만 현재 터미널은 개발중입니다 ㅠㅠ',
              state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
              icon:"images/icon/Terminal.png"
            },
            Information:{
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
              +"13. tap menu add\n"
              +"14. close issue patch\n"
              ,state:false, IsDir:false, minsize:{width:600,height:500}, dock:true,
              icon:"images/icon/Settings.png"
            },
            Contact:{
              page:'Contact here Please',
              state:false, IsDir:false, minsize:{width:400,height:400}, dock:true,
              icon:"images/icon/message.png"
            },
            About:{
              page:'This page is FileManager',
              state:false, minsize:{width:400,height:400}, dock:true,
              icon:"images/icon/About.png",
              content:"contents/About/"
            },
            Member:{
              page:'This page is FileManager',
              state:false, minsize:{width:400,height:400}, dock:false,
              icon:"images/icon/member.png",
              content:"contents/Member/"
            },
            Awards:{
              page:'This page is Awards',
              state:false, minsize:{width:400,height:400}, dock:false,
              icon:"images/icon/calendar.png",
              content:"contents/Awards/"
            },
            QNA:{
              page:'This page is QNA',
              state:false, minsize:{width:400,height:400}, dock:false,
              icon:"images/icon/qna.png",
              content:"contents/QNA/"
            },
            FileManager:{
              page:'This page is FileManager',
              state:false, IsDir:true,  minsize:{width:400,height:400}, dock:false,
              icon:"images/icon/member.png"
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
