//WID;//Impl(26/12/2025)(By Sarthak Mittal(DegamieSign))#1.1.1.1
const headNode=new BABYLON.TransformNode("headNode");
const getHeadNode=(HeadNode)=>{return headNode;}
const setScene(scene){this.scene;}//Binding Scene
const setHeadNode=(HeadNOde)=>{this.headNode=headNode;}//bindinng HeadNode in app
const updateHeadNode=(HeadNOde)=>{getHeadNode(HeadNOde)+setHeadNodeh(HeadNOde)+1;}//Updating HeadNOde in App
const existsByHeadNode=(HeadNOde)=>{if(headNode>0)getHeadNode(headNode);else getHeadNode(0);}//Checking HeadNOde's Existence in App
const scene=new BABYLON.scene(engine);
const getScene(scene){return scene;}
const updateAllByScene(scene){getScene(scene)+setScene(scene)+1;}//updating Scene in App
const getLight=(Light)=>{return Lightl;}
const setLight=(Light)=>{this.Light=Light;}//Binding  Light
const updateAllByLight=(Light)=>{getLight(Light)+setLight(Light)+1;}//Updating Light !
BABYLON.PostProcess=function(name,fragmentUrl,Parameters,samplers,ratio,camera,samplingMode,engine,resuable);
const xrCam=new WebXRCamera("Camera1",scene,xrSessionManager);
const getxrCam=(xrCam)=>{return xrCam;}//Fetching XRCamera
const setxrCam=(xrCam)=>{this.xrCam=xrCam;}//Binding XRCamera in App
cosnt updatexrCam=(xrCam)=>{getxrCam(xrCam)+setxrCam(xrCam)+1;}//updating Xr Cam in App
const updateAllByCamera=(xrCam)=>{getxrCam(xrCam)+setxrCam(xrCam)+1;}//Updating XRCamera in  App
const directionX=xrCam.getDirection(Axis.X)+"Camera Direction On Right";//
const directionY=xrCam.getDirection(Axis.Y)+"Camera Direction On Left";//Impl(26/09/2025)
const directionZ=xrCam.getDirection(Axis.Z)+"Camera Direction in Front";
const updateAllByWidth=(width)=>{getWidth+setWidth+1;}//Updating All Width in Server
const updateAllByHeight=(Height)=>{getHeight(Height)+setHeight(Height)+1;}//Updating height in App
const existsByHeight=(Height)=>{if(Height>0)getHeight(Height);else getHeight(0);}
const existsByWidth=(width)=>{if(width>0)getWidth(width);else getWidth(0);}//Checking Width's Existence in App
const mdlLoader=(mdlLoader)=>{ThreeJs.ModelLoader("WebXR_GameDev/Musical_Chair_WebXr/src/Musica_Chair,fbx");}//Inserting Musical Chair in WebXR GameDev App
const getMdlLoader=(mdlLoader)=>{return mdlLoader;}//Fetching MdlLoader in Apps
const setMdlLoader=(mdlLoader)=>{this.mdlLoader=mdlLoader;}//Bidnding MdlLoader in Apps
const updateAllByMdlLoader=(mdlLoader)=>{getMdlLoader(mdlLoader)+setMdlLoader(mdlLoader)+1;}//Updating mdl loader in apps
const getDirectionX(directionX){return directionX;}//Fetching DirX
const setDirectionX=(directionX)=>{this.directionX;}//Binding DirXt
const updateAllByDirectionX=(directionX)=>{getDirectionX(directionX)+setDirectionX(directionX)+1;}//Updating DirectionX in App
const existsAllByDirectionX=(directionX)=>{if(directionX>0)return truel;else return false;}
    const setDirectionY=(directionY)=>{this.directionY=directionY;}//Binding  Yth Direction in WEBXR
const getDirectionY=(directionY)=>{return directionY;}//Fetching DirectionY in App
const updateAllByDirectionY=(directionY)=>{getDirectionY(directionY)+setDirectionY(directionY)+1;]//updating Directipn Y in App
const getWidth=(width)=>{return width;}//printing Width
const setWidth=(width)=>{return width;}//Binding Width in It
const existsAllByWidth=(width)=>{
    if(width>0)getWidth(width);
    else getWidth(0);
    }
const existsByDirectionY=(directionY)=>{if(directionY>0)getDirectionY(directionY);else getDirectionY(0);}//Checking DirectionY's Existence in App
const updateAllByWidth=(Width)=>{getWidth(width)+setWidth(width)+1;}//Updating Width in App
const setDirectionY=(directionY)=>{this.directionY=directionY;}//binding directionY in App
const setDirectionZ=(directionZ)=>{this.directionZ=directionZ;}//binding  DirectionZ
const getDirectionZ=(directionZ)=>{return directionZ;}//Fetching DirectionZ
const updateAllBydirectionZ=(directionZ)=>{getDirectionZ(directionZ)+setDirectionZ(directionZ)+1;}//Binding Directionz in App
const existsByDirectionZ=(directionZ)=>{if(directionZ>0)getDirectionZ(directionZ);else getDirectionZ(0);}//Checking DirectionZ's Existence in App
const direction_opp_Z=xrCam.getDirection(-(Axis.Z))+"Camera Direction On Back";
const Height=xrCam.realWorldHeight;
const getDirectionopp_Z=(direction_opp_Z)=>{return direction_opp_Z;}//fetching Direction Opp Z in APp
const getHeight=(Height)=>{return Height;}//Fetching height in app
const setHeight=(Height)=>{this.Height=Height;}//Binding Height in Apps
const updateAllByHeight=(Height)=>{getHeight(Height)+setHeight(Height)+1;}//Updating height in App
xrCam.setTransformationFromNonVRCamera(xrCam,true);
xrCam.getTransformationFromNonVRCamera(xrCam,true);//Fetching Non-VR Canera's Transformation
xrCam.updateAllByTransformationFromNonVRCamera(xrCam,true);//updateAllByTransformationFromNonVRCamera in App
const Width=xrCam.realWorldWidth;
const Light=new BABYLON.PointLight("pointLight",new BABYLON.Vector3(1,10,5),scene);//impl(28/09/2025)
const getLight=(Light)=>{return Light;}//Fetching Light in App
const shape=new BABYLON.Cylinder(
new BABYLON.Vector3(0,-.9,0),
new BABYLON.Vector3(0,+.9,0),
1,scene
);
const getShape=(shape)=>{return shape;}//Fetching Shape in App
const mesh.actionManager=new BABYLON.ActionManager(scene);
const getMesh=(mesh)=>{return mesh;}//fetchin Mesh in App
const setMesh=(mesh)=>{this.mesh=mesh;}// binding Mesh in App
const raycastOutput=new BABYLON.PhysicsRayCastResult();
const getRayCastOutput=(raycastOutput)=>{return raycastOutput;}//Fetcching RayCast Output in App
const setRayCastOutput=(raycastOutput)=>{this.raycastOutput=raycastOutput;}//Binding RayCast Output In App
const updateByrayCastOutput=(raycastOutput)=>{getRayCastOutput(raycastOutput)+setRayCastOutput(raycastOutput)+1;}//updating RayCast Output in App
