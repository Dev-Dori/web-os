import React, {useState, useEffect } from 'react';
import OpenTask from './OpenTask';
import './stylesheet.css';

function Window(directory){
  useEffect(()=>{
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
  },[])
  var [article, setarticle] = useState({});
  var [zindex, SetZindex] = useState(0);
  var ExecuteApp = directory.list.root[0].users[0].devdori[0].Apps[0], i=0, CreateAppIcon = [];
  var DesktopApp = directory.list.root[0].users[0].devdori[0].Desktop[0];
  var Icon = []
  article = [];
  function excute(id,name,page,_zindex, minsize){
    return(<OpenTask key={id} id={id} name={name} page={page} zindex={_zindex} minsize={minsize}
      close={function(_id){
          console.log('close : '+_id)
          ExecuteApp[_id].state = false;
          setarticle(article);
      }}
      _focus={function(num){
          zindex = num;
          SetZindex(zindex);
      }}
    />)
  }
  
  for(var key in ExecuteApp){
    if(ExecuteApp[key].state){
      article.push(excute(i,key,ExecuteApp[key].page,ExecuteApp[key].zindex,ExecuteApp[key].minsize))
    }
    if(ExecuteApp[key].dock && !ExecuteApp[key].IsDir){
      CreateAppIcon.push(
        <li key={"li-"+i} className={"li-"+i+" "+key} id={"li-"+key}>
          <div key={"li-"+i+"-name"} className='name'>{key}</div>
          <img key={key} className={i+" ico "+key} value={key} 
               src={(ExecuteApp[key].icon ? ExecuteApp[key].icon : 'images/icon/Terminal.png')}
               alt={key}
               onClick={function(e){
               if(!ExecuteApp[e.target.alt].state){
                   ExecuteApp[e.target.alt].state=true;
                   ExecuteApp[e.target.alt].zindex=zindex+1;
                   SetZindex(zindex+1);
                 }
              }}>
          </img>
        </li>
      )
    }
    i=i+1;
  }
  
  for(key in DesktopApp){
    if(DesktopApp[key].length){
      Icon.push(
        <a key={'Desktop-icon-'+key} className={'Desktop-icon'+" "+key}>
          <img key={"Desktop-icon-img-"+key} className='Desktop-icon-img' src='images/icon/FileManager.png' 
               alt={key}
               onClick={function(e){
                if(!ExecuteApp[e.target.alt].state){
                    ExecuteApp[e.target.alt].state=true;
                    ExecuteApp[e.target.alt].zindex=zindex+1;
                    SetZindex(zindex+1);
                  }
               }}></img>
          <div key={"Desktop-icon-name-"+key} className={'Desktop-icon-name'}>{key}</div>
        </a>
      )
    }else{
      Icon.push(
        <a key={'Desktop-icon-'+key} className={'Desktop-icon'+" "+key}>
          <img key={"Desktop-icon-img-"+key} className='Desktop-icon-img' src={(ExecuteApp[key].icon ? ExecuteApp[key].icon : 'images/icon/Terminal.png')} 
               alt={key}
               onClick={function(e){
                if(!ExecuteApp[e.target.alt].state){
                    ExecuteApp[e.target.alt].state=true;
                    ExecuteApp[e.target.alt].zindex=zindex+1;
                    SetZindex(zindex+1);
                  }
               }}></img>
          <div key={"Desktop-icon-name-"+key} className={'Desktop-icon-name'}>{key}</div>
        </a>
      )
    }
  }
  
  
  return (
    <div className='screen'>
      <div className="window-container">
        {article}
      </div>
      <div className='app-container'>
        {Icon}
      </div>
      <div className='dock'>
        <div className='dock-container'>
          <div className='main-app'>
            {CreateAppIcon}
          </div>
          <div className='Directory'>
            <li className={"li-0 "+key} id="li-FileManager">
            <div className='name'>FileManager</div>
            <img className={"5 ico FileManager"} value="FileManager" 
                src='images/icon/FileManager.png'
                alt='FileManager'
                onClick={function(e){
                  if(!ExecuteApp[e.target.alt].state){
                      ExecuteApp[e.target.alt].state=true;
                      ExecuteApp[e.target.alt].zindex=zindex+1;
                      SetZindex(zindex+1);
                    }
                }}>
            </img>
          </li>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Window;