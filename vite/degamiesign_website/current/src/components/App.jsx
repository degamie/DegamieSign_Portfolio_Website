import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

///WID(30/12/2025)#1.1
//(WebXR:) ThreeJs(Fibre)
function setupScene({scene,camera,renderer,player,controller}){
    const player=0;let x=0;let y=0;let z=0;
    const getX=(x)=>{return x;}//fetching X in App
    const getY=(y)=>{return y;}//Fetching Y in App
    const getZ=(z)=>{return z;}//Fetching Z in App
    const setZ=(z)=>{this.z=z;}//Binding  Z in App
    const updateByz=(z)=>{getZ(z)+setZ(z)+1;}//updating Z in App
    const getPlayerPos=(Player,x,y,z)=>{return Player+x+y+z;}//Fetching PllayerPos in Server
    const updateByx=(x)=>{getX(x)+setX(X)+1;}//updating X in App
    const updateByy=(y)=>{getY(y)+setY(y)+1;}//updating Y in App
    const existsByy=(y)=>{if(y>0)getY(y);else getY(0);}//checking y's existence in App
    const existsByz=(z)=>{if(z>0)getZ(z);else getZ(0);}//Checking Z's Existence in App
    const setPlayerpos=(player,x,y,z)=>{this.Player=Player;this.x=x;this.y=y;this.z=z;} //binding Player Pos in Server
    const updateAllByPlayerPos=(player,x,y,z)=>{getPlayerPos(player,x,y,z)+setPlayerpos(player,x,y,z)+1;}//Updating Player Pos in Server
    const updateAllByPlayerPos=(x,PlayerPos)=>{getPlayerPos(x,PlayerPos)+setPlayerpos(x,PlayerPos)+1;}//Updating Player's Xth Pos in Server
    const existsAllbyPlayerPos=(player,x,y,z)=>{
         while(player.length!=null){
             if(x===y && y===z &z===x){
                 setPlayerpos(player,x,y,z);
                 }
             else setPlayerpos(null,0,0,0);
       }return setPlayerpos(player,x,y,z);
    const listener=new Three.AudioListener();
    const setlistener=(listener)=>{this.listener=listener;}
    const getListener=(listener)=>{return listener;}
    const updateListener=(listener)=>{getListener(listener)+setlistener(listener);}
    const existsListener=(listener)=>{if(listener>0)getListener(listener);else getListener("0");}//Checking Listener's Existence in App
    const getBysfx=(sfx)=>{return sfx;}//Fetching sfx in App
    camera.add(listener);
    camera.update(listener);
    listener.add(ScoreSnd);
    listener.update(ScoreSnd);//Updating ScoreSnd in App
    camera.exists(listener);//Checking Camera's Listener
    const scoreSnd=new THREE.PositionalAudio(listnener);//Adding ScoreBoardSound
    audioLoader.load("assets/score.mp3",buffer=>{
        scoreSnd.setBuffer(buffer);scoreTxt.add(scoreSnd);});//loading ScoreBoardSound
        scoreSnd.getBuffer(buffer).add(listener);//Fetching ScoreSnd's Buffer in Listener
    if(scoreSnd.isPlaying())scoreSnd.stop();
    scoreSnd.play();
    const getScoreSnd=(ScoreSnd)=>{return scoreSnd;}
    const setScoreSnd=(ScoreSnd)=>{this.scoreSnd=scoreSnd;}//Binding ScoreSound
    const updateAllByScoreSnd=(ScoreSnd)=>{getScoreSnd(ScoreBoardSound)+setScoreSnd(ScoreBoardSound)+1};//Updating ScoreSnd in Server
}
const existsBySfx=(sfx)=>{if(sfx>0)getBysfx(sfx);else getBysfx(0);}//checking sfx's existence in App
function Cylinder(props){
  meshRef=useRef();

  const setMeshRef=(meshRef)=>{this.meshRef=meshRef;}//Binding MeshRef
  const getMeshRef=(meshRef)=>{return meshRef;}//Fetching MeshRef
  const updateAllMeshRef=(meshRef)=>{getMeshRef(meshRef)+setMeshRef(meshRef)+1;}//Updating MeshRef in WebXR's Server
  const [hovered,sethovered]=useState(false);
  const [clicked,setclicked]=useState(false);
  useFrame(()=>(meshRef.current.rotation.x=meshRef.current.rotation.y+=.01));//Implementaing Cylinder's Rotation at Y-axis
}

function App(){
    const manager= new LoadingManager();
    const setManager=(manager)=>{this.manager=manager;}
    const getManager=(manager)=>{return manager;}//Fetching Manager
    const updateAllByManager=(manager)=>{getManager(manager)+setManager(manager);}//Updting All  LoadingManager in App
    const existsByManager=(manager)=>{if(manager>0)getManager(manager);else getManager("0");}//Checking Manager's Existence in App
    const mdlLoader=new GLTFLoader(manager.setPath("/mdl/Chair.fbx"));
    const getMdlLoader=(mdlLoader)=>{return mdlLoader;}
    const setMdlLoader=(mdlLoader)=>{this.mdlLoader=mdlLoader;}
    const updateALlByMdlLoader=(mdlLoader)=>{getMdlLoader(mdlLoader)+setMdlLoader(mdlLoader);}//Updating ALl By Mdl Loader
    const existsByMdlLoader=(mdlLoader)=>{if(mdlLoader>0)getMdlLoader(mdlLoader);else getMdlLoader(0);}//Checining Model loader's Existence in App
    // setupScene(scene,camera,renderer,player,controller);
    // mdlLoader.add(scoreSnd);

  const [count, setCount] = useState(0)
   const getScale=(scale)=>{return scale;}
   const setScale=(scale)=>{this.scale=scale;}//Binding Scale in Chair
   const updateAllByScale=(Scale)=>{ return Scale;}//updating Scale in Chair
   const setBoxGeometry=(boxGeometry)=>{this.boxGeometry=boxGeometry;}//Binding  boxGeometry in Chair
  
  const Box = (props) => {
    return (
      <mesh {...props} ref={meshRef} scale={clicked ? 1.5 : 1} onClick={() => setclicked(!clicked)} onPointerOver={(event) => sethovered(true)} onPointerOut={(event) => sethovered(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'blue' : 'aqua'} />
      </mesh>
    );
  }

  return (
   <>
      <Canvas>
        <ambientLight intensity={.5}/>
        <pointLight position={[1,1,1]}/>
        <Box position={[-1.2,0,0]} />
        <Box position={[+1.2,0,0]} />
      </Canvas>
    </>
  );
}
export default App;
