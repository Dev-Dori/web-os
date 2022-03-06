/* eslint-disable */
import React, { useEffect } from 'react';
import '../stylesheet.css';


const OpenWindow = ({id, name, page, zindex, close, minsize, _focus, content}) => {    
  useEffect(()=>{
      let MinWidth = 0, MinHeight = 0;
      if(minsize){
        MinWidth = (minsize.width ? minsize.width : 100);
        MinHeight = (minsize.height ? minsize.height : 100);
      }else{
        MinWidth = 100;
        MinHeight = 100;
      }
    
      var State = {SizeStateMax:0,pre:{height:640,width:448,top:0,left:0}};

      function moving_tap(event){
          let a = document.getElementById(name)
          let shiftX = event.x - a.getBoundingClientRect().left;
          let shiftY = event.y - a.getBoundingClientRect().top;
          function moveAt(pageX, pageY) {
              a.style.left = pageX - shiftX + 'px';
              a.style.top = pageY - shiftY + 'px';
              document.addEventListener('click', a.onmouseup);
          }

          a.style.position = 'absolute';

          moveAt(event.x, event.y);

          function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
          }

          document.addEventListener('mousemove', onMouseMove);
          a.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              a.onmouseup = null;
          };
      }

      function focus(){
          var doc = document.getElementsByClassName('window');
          var max = 0;
          var index = 0;
          for(var i=0;i<doc.length;i++){
            if(Number(doc[i].style.zIndex)>max){
              max = Number(doc[i].style.zIndex);
              index = i;
            }
          }
          if(doc[index]&&doc[index].id&&doc[index].id != name){
            _focus(max+1);
            document.getElementById(name).style.zIndex = max+1;
          }
      }   
      
      const el = document.querySelector("#"+name);
      var resizers = document.querySelectorAll("#"+name+">.resizer-set>.resizer");
      let isResizing = false;
      let currentResizer;
      for(let resizer of resizers){
          resizer.addEventListener('mousedown',mousedown);
          function mousedown(e) {
            if(!State.SizeStateMax){
              currentResizer = e.target;
              isResizing = true;
              document.getElementById(name).style['pointer-events'] = "none";
              window.addEventListener("mousemove", mousemove);
              window.addEventListener("mouseup", mouseup);
            
              function mousemove(e) {
                const rect = el.getBoundingClientRect();
                let width, height, top, left;
                if (currentResizer.classList.contains("se")) {
                  height = e.clientY-rect.top;
                  width = e.clientX-rect.left;
                } else if (currentResizer.classList.contains("sw")) {
                  height = e.clientY-rect.top;
                  width = rect.right - e.clientX-1;
                  left = e.clientX-1;
                } else if (currentResizer.classList.contains("ne")) {
                  width = e.clientX-rect.left;
                  height = rect.bottom-e.clientY-1;
                  top = e.clientY-1;
                } else if (currentResizer.classList.contains("nw")){
                  height = rect.bottom-e.clientY-1;
                  top = e.clientY-1;
                  width = rect.right - e.clientX-1;
                  left = e.clientX-1;
                } else if (currentResizer.classList.contains("n")){
                  height = rect.bottom-e.clientY-1;
                  top = e.clientY-1;
                } else if (currentResizer.classList.contains("s")) {
                  height = e.clientY-rect.top;
                } else if (currentResizer.classList.contains("e")) {
                  width = e.clientX-rect.left;
                } else if (currentResizer.classList.contains("w")) {
                  left = e.clientX-1;
                  width = rect.right-e.clientX-1;
                }
                if((width>MinWidth&&height>MinHeight)||(width==undefined&&height>MinHeight)||((width>MinWidth)&&height==undefined)){
                  el.style.left = left + "px";
                  el.style.top = top + "px";
                  el.style.width = width + "px";
                  el.style.height = height + "px";
                }

              }

              function mouseup(){
                  window.removeEventListener("mousemove", mousemove);
                  window.removeEventListener("mouseup", mouseup);
                  document.getElementById(name).style['pointer-events'] = "auto";
                  isResizing = false;
              }
            }
          }
      }

      function ChangeMaximized(){
        var window = document.querySelector("#"+name);
        if(!State.SizeStateMax){
          State.SizeStateMax = 1;
          State.pre.width = window.style.width;
          State.pre.height = window.style.height;
          State.pre.top = window.style.top;
          State.pre.left = window.style.left;
          window.style.width = '100%'
          window.style.height = '100%'
          window.style.left = '0px';
          window.style.top = '0px';
          CallMovingTab(false);
          document.querySelector("#"+name).removeEventListener('focus',focus);
        }else{
          State.SizeStateMax = 0;
          window.style.width = State.pre.width;
          window.style.height = State.pre.height;
          window.style.left = State.pre.left;
          window.style.top = State.pre.top;
          document.querySelector("#"+name).addEventListener('mousedown',focus);
          CallMovingTab(true);
        }
      }

      function minimize(){
        document.querySelector("#li-"+name)?document.querySelector("#li-"+name).removeEventListener('click',minimize):"";
        document.querySelector("#"+name).className+=' minimize';
        document.querySelector("#li-"+name)?document.querySelector("#li-"+name).className=document.querySelector("#li-"+name).className.replace("execute","mini"):"";
        CallMovingTab(false)
        function unminimize(){
          document.querySelector("#li-"+name)?document.querySelector("#li-"+name).removeEventListener('click',unminimize):"";
          document.querySelectorAll('.'+name)[0].removeEventListener('click',unminimize);
          document.querySelectorAll('.'+name)[1]?document.querySelectorAll('.'+name)[1].removeEventListener('click',unminimize):"";
          document.querySelector("#li-"+name)?document.querySelector("#li-"+name).addEventListener('click',minimize):"";
          document.querySelector("#"+name).className=document.querySelector("#"+name).className.replace(" minimize","")
          document.querySelector("#li-"+name)?document.querySelector("#li-"+name).className=document.querySelector("#li-"+name).className.replace("mini","execute"):"";
          CallMovingTab(true);
        }
        document.querySelector("#li-"+name)?document.querySelector("#li-"+name).addEventListener('click',unminimize):"";
        document.querySelectorAll('.'+name)[0].addEventListener('click',unminimize);
        document.querySelectorAll('.'+name)[1]?document.querySelectorAll('.'+name)[1].addEventListener('click',unminimize):"";
      }

      function CallResizingTabMaxMini(status){
        if(status){
          document.getElementById(name+'_minimize').addEventListener('click',minimize);
          document.getElementById(name+'_maximize').addEventListener('click',ChangeMaximized);
        }else{
          document.getElementById(name+'_minimize').removeEventListener('click',minimize);
          document.getElementById(name+'_maximize').removeEventListener('click',ChangeMaximized);
        }
      }

      function CallMovingTab(status){
        if(status){
          document.querySelector("#"+name+" .tab").addEventListener('mousedown',moving_tap);
          document.querySelector("#"+name+" .tab").addEventListener('dblclick',moving_tap);
        }else{
          document.querySelector("#"+name+" .tab").removeEventListener('mousedown',moving_tap);
          document.querySelector("#"+name+" .tab").removeEventListener('dblclick',moving_tap);
        }
      }
      
      function CallFocus(status){
        if(status){
          document.querySelector("#li-"+name)?document.querySelector("#li-"+name).addEventListener('click',focus):"";
          document.querySelector("#"+name).addEventListener('mousedown',focus);
        }else{
          document.querySelector("#li-"+name)?document.querySelector("#li-"+name).removeEventListener('click',focus):"";
          document.querySelector("#"+name).removeEventListener('mousedown',focus);
        }
      }

      function _close(){
        history.pushState('', '', '#');
        document.querySelector("#li-"+name)?document.querySelector("#li-"+name).removeEventListener('click',minimize):"";
        document.querySelector("#li-"+name)?document.querySelector("#li-"+name).className=document.querySelector("#li-"+name).className.replace(" execute",""):"";
        document.getElementById(name+'_close').removeEventListener('click',_close)
        CallResizingTabMaxMini(false);
        CallMovingTab(false);
        CallFocus(false);
        close(name);
      }


      focus();
      el.style.minWidth = MinWidth+'px';
      el.style.minHeight = MinHeight+'px';
      console.log('OpenTask component load : '+name);
      document.querySelector("#li-"+name)?document.querySelector("#li-"+name).className+=' execute':"";
      document.querySelector("#li-"+name)?document.querySelector("#li-"+name).addEventListener('click',minimize):"";
      CallResizingTabMaxMini(true);
      CallFocus(true);
      CallMovingTab(true);
      document.querySelectorAll("."+name)[0].addEventListener('click',focus);
      document.querySelectorAll("."+name)[1]?document.querySelectorAll("."+name)[1].addEventListener('click',focus):"";
      document.getElementById(name+'_close').addEventListener('click',_close);
  },[])

  var show_content = []
  if(content){
    show_content.push(
      <iframe key={"iframe-"+name} src={content} title={name}></iframe>
    );
  }else{
    show_content.push(page)
  }

  return(
      <div id={name} className='window' style={{zIndex:zindex}}>                    
          <div className="tab">
            <div className="container-action">
              <button id={name+'_close'} className='button close'></button>
              <button id={name+'_minimize'} className='button minimize'></button>
              <button id={name+'_maximize'} className='button maximize'></button>
            </div>
            <div className='container-title'>{name}</div>
          </div>
          <div className="content">{show_content}</div>
          <div className={"resizer-set"}>
              <div className="resizer n"></div>
              <div className="resizer s"></div>
              <div className="resizer w"></div>
              <div className="resizer e"></div>
              <div className="resizer nw"></div>
              <div className="resizer ne"></div>
              <div className="resizer sw"></div>
              <div className="resizer se"></div>
          </div>
      </div>
  );
}

export default OpenWindow;