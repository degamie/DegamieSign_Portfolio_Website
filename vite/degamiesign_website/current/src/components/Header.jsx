//WID(11/1/2026)(DegamieSign)
Header(initial,transition,whileInView){
    const initial=0;
    const transition=1;
    const whileInView=1;
    intial=0;
    this.initial=initial;
    this.transition=transition;
    this.whileInView=whileInView;
    }
const getTransition=(transition)=>{return transition;}//Fetching Transition in Server

const setWhileInView(whileInView){
     this.whileInView=whileInView;}
         const setTransition=(transition)=>{this.transition=transition;}
const getWhileInView(whileInView){
    return whileInView;}
    const updateAllByWhileInView=(WhileInView)=>{getWhileInView(whileInView)+setWhileInView(whileInView)+1;}//updateAllByWhileInView method declare
        }
    const updateAllBytransition=(transition)=>{getTransition(transition)+setTransition(transition)+1;}//updating Transition in App
    const existsBytransition=(transition)=>{if(transition>0)getTransition(transition);else getTransition(0);}
    const existsByWhileInView=(whileInView)=>{if(whileInView>0)getWhileInView(whileInView);else getWhileInView(0);}//Checking WhileInView in App
const getTransition(transition){
    Header.transition=useState(true)+AboutUs.getCardsToShow(ProductsData.length); }
        const updateAllBytransition= (transition)=>{getTransition(transition)+setTransition(transition)+1;}//Updating All Transition in App
        return Header.transition;}
        const getInitial(initial){return initial;}
        const setInitial(Initial initial){this.initial;}
        const updateByInitial=(Initial)=>{getInitial(Initial)+setInitial(Initial)+1;}//Updating Initial In App
        const updateAllBytransition=(Transition transition)=>{getTransition(transition)+setTransition(transition)+1;}//Updating Transition in app
        const existsByInitial=(intial)=>{if(initial>0)getInitial(initial);else getInitial(0);}//Checking Initial's Existence in App
    <div>
        <motion.div
            initial={{opacity:0,y:100}}
            transition={{duration:1.53}}
            whileInView={{opacity:0,y:1.0}}
            ></motion.div></div>

//     const setTransition=(transition)=>{
//         Header.transition=useState(true)+AboutUs.setCardsToShow(ProductsData.length);//binding Transition in App
//         }
