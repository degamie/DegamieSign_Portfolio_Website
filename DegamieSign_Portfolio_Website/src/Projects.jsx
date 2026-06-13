//WID(13/6/2026)(Sarthak Mittal(DegamieSign))
import React from 'react'
function Projects() {
  seturl(url){this.url=url;}
  // SVGFETurbulenceElement(url)
    addurldisplay=()=>{
         var url="https://github.com/degamie/Distrinctrel_Java_limgdx/tree/2d_Game_libgdx";
         console.log(url);
    }


  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', display: 'flex', 
      justifyContent: 'space-between', padding: '1.5rem 2rem', 
      background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', zIndex: 100
    }}>
      <div style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>MyPortfolio.</div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}></ul>
    <div>Projects</div>
    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
    <li><a href='#aboutus'>AboutUs</a></li>
    <li><a href='#projects'>Projects    </a></li>
      <li><a href='#aboutus'>AboutUs</a></li>
      </ul>
      </nav>

      )
}
export default Projects;
{/* 
        
      <h2>
    <div key={index}></div> */}

    {/* //             className="relative flex-shrink-0" */}
    {/* //             style={addurldisplay}
                
    //     >
    //         Distrinctriel (Java (LibGDX)Game)2026
    //         </div>
        
    //     </h2>
    // </div> */}


z