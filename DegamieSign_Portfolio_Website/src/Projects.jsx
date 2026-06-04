import React from 'react'
function Projects() {
    addurldisplay=()=>{
         var url="https://github.com/degamie/Distrinctrel_Java_limgdx/tree/2d_Game_libgdx";
         console.log(url);
    }


  return (
    <div>Projects
        
        <h2>
            <div key={index} 
                className="relative flex-shrink-0"
                style={addurldisplay}
                
        >
            Distrinctriel (Java (LibGDX)Game)2026
            </div>
        
        </h2>
    </div>
  )
}

export default Projects