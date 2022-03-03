import React from 'react';

const CreateIcon = ({DesktopApp,ExecuteApp,execute}) => {
    var Icon=[];

    for(var key in DesktopApp){
        if(DesktopApp[key].length){
            Icon.push(
            <a key={'Desktop-icon-'+key} className={'Desktop-icon'+" "+key}>
                <img key={"Desktop-icon-img-"+key} className='Desktop-icon-img' src='images/icon/FileManager.png' 
                    alt={key}
                    onClick={execute}></img>
                <div key={"Desktop-icon-name-"+key} className={'Desktop-icon-name'}>{key}</div>
            </a>
            )
        }else{
            Icon.push(
            <a key={'Desktop-icon-'+key} className={'Desktop-icon'+" "+key}>
                <img key={"Desktop-icon-img-"+key} className='Desktop-icon-img' src={(ExecuteApp[key].icon ? ExecuteApp[key].icon : 'images/icon/Terminal.png')} 
                    alt={key}
                    onClick={execute}></img>
                <div key={"Desktop-icon-name-"+key} className={'Desktop-icon-name'}>{key}</div>
            </a>
            )
        }
    }

    return(Icon);
}


export default CreateIcon;