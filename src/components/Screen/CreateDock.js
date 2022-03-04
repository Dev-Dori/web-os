import React,{ useEffect } from 'react';

const CreateDock = ({ExecuteApp,execute}) => {
  useEffect(()=>{
    console.log('ICON EFFECT ON');
    let icons = document.querySelectorAll(".main-app li .ico");
    
    icons.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
      });
      item.addEventListener("mouseleave", (e) => {
        icons.forEach((item) => {
          item.style.transform = "scale(1)  translateY(0px)";
        });
      });
    });
    
    const focus = (elem, index) => {
      let previous = index - 1;
      let previous1 = index - 2;
      let next = index + 1;
      let next2 = index + 2;
      if (previous === -1 || next === icons.length) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
      }else{
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        icons[previous].style.transform = "scale(1.2) translateY(-6px)";
        icons[next].style.transform = "scale(1.2) translateY(-6px)";
        if (previous === 0 ){
          icons[next2].style.transform = "scale(1.1)";
        }else if(next === icons.length-1){
          icons[previous1].style.transform = "scale(1.1)";
        }else{
          icons[previous1].style.transform = "scale(1.1)";
          icons[next2].style.transform = "scale(1.1)";
        }
      }
    };
  },[ExecuteApp])
  var i = 0;
  var CreateAppIcon = [];
  for(var key in ExecuteApp){
      if(ExecuteApp[key].dock && !ExecuteApp[key].IsDir){
          CreateAppIcon.push(
          <li key={"li-"+i} className={"li-"+i+" "+key} id={"li-"+key}>
                <div key={"li-"+i+"-name"} className='name'>{key}</div>
              <a href={"#/"+key}>
                <img key={key} className={i+" ico "+key} value={key} 
                    src={(ExecuteApp[key].icon ? ExecuteApp[key].icon : 'images/icon/Terminal.png')}
                    alt={key}
                    onClick={execute}>
                </img>
              </a>
          </li>
          )
      }
      i=i+1;
    }

    return(
        <div className='dock-container'>
        <div className='main-app'>
          {CreateAppIcon}
        </div>
        <div className='Directory'>
          <li className={"li-0 "+key} id="li-FileManager">
              <div className='name'>FileManager</div>
              <a href={"#/FileManager"}>
              <img className={"5 ico FileManager"} value="FileManager" 
                  src='images/icon/FileManager.png'
                  alt='FileManager'
                  onClick={execute}>
              </img>
            </a>
          </li>
        </div>
      </div>
    );
}


export default CreateDock;