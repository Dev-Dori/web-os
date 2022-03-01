import React, {useState, useEffect } from 'react';
import OpenTask from './OpenTask';
import './stylesheet.css';

function Window(App){
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
  // console.log('Window component load')
  var [article, setarticle] = useState([]);
  var [zindex, SetZindex] = useState(0);
  var ExecuteApp = App.list, i=0, CreateAppIcon = [];
  article = [];

  function excute(id,name,page,_zindex, minsize){
    return(<OpenTask key={id} id={id} name={name} page={page} zindex={_zindex} minsize={minsize}
      close={function(_id){
          console.log('close : '+ExecuteApp[_id].name)
          ExecuteApp[_id].state = false;
          setarticle(article);
      }}
      _focus={function(num){
          zindex = num;
          SetZindex(zindex);
      }}
    />)
  }

  while (i<ExecuteApp.length){
    if(ExecuteApp[i].state){
      article.push(excute(i,ExecuteApp[i].name,ExecuteApp[i].page,ExecuteApp[i].zindex,ExecuteApp[i].minsize))
    }
    if(ExecuteApp[i].dock && !ExecuteApp[i].IsDir){
      CreateAppIcon.push(
        <li key={"li-"+i} className={"li-"+i} id={"li-"+ExecuteApp[i].name}>
          <div key={"li-"+i+"-name"} className='name'>{ExecuteApp[i].name}</div>
          <img key={ExecuteApp[i].name} className={i+" ico "+ExecuteApp[i].name} value={ExecuteApp[i].name} 
              src={require(`${(ExecuteApp[i].icon ? ExecuteApp[i].icon : './img/icon/Terminal.png')}`)}
              alt={ExecuteApp[i].name}
              onClick={function(e){
                if(!ExecuteApp[e.target.className[0]].state){
                    ExecuteApp[e.target.className[0]].state=true;
                    ExecuteApp[e.target.className[0]].zindex=zindex+1;
                    SetZindex(zindex+1);
                  }
              }}>
          </img>
        </li>
      )
    }
    i=i+1;
  }
  
  
  return (
    <div className='screen'>
      <div className="window-container">
        {article}
      </div>
      <div className='dock'>
        <div className='dock-container'>
          <div className='main-app'>
            {CreateAppIcon}
          </div>
          <div className='Directory'>
            <li className={"li-0"} id="li-folder">
            <div className='name'>folder</div>
            <img className={"5 ico folder"} value="folder" 
                src={require(`./img/icon/folder.png`)}
                alt='folder'
                onClick={function(e){
                  if(!ExecuteApp[e.target.className[0]].state){
                      ExecuteApp[e.target.className[0]].state=true;
                      ExecuteApp[e.target.className[0]].zindex=zindex+1;
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
