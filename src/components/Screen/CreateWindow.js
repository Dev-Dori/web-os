import React from 'react';
import OpenTask from '../window/OpenWindow';

const CreateWindow = ({ExecuteApp,setarticle,SetZindex}) => {
    var article = [], zindex = [], i=0;
    function CallWindow(id,name,page,_zindex, minsize,content){
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
          content={content}
        />)
      }
    
    
      
    for(var key in ExecuteApp){
        if(ExecuteApp[key].state){
            article.push(CallWindow(i,key,ExecuteApp[key].page,ExecuteApp[key].zindex,ExecuteApp[key].minsize,ExecuteApp[key].content))
        }
        i = i+1;
    }
    return(article);
}

export default CreateWindow;