//WID(13/12/2025)
Header(initial,transition,whileInView){
    intial=0;
    this.initial=initial;
    this.transition=transition;
    this.whileInView=whileInView;
    }
const setWhileInView(whileInView){
     this.whileInView=whileInView;}
const getWhileInView(whileInView){
    return whileInView;}
    const updateAllByWhileInView=(WhileInView)=>{getWhileInView(whileInView)+setWhileInView(whileInView)+1;}//updateAllByWhileInView method declare
        }
    const setTransition(transition){this.transition=transition;}
const getTransition(transition){
    Header.transition=useState(true)+AboutUs.getCardsToShow(ProductsData.length); }
    const updateAllBytransition= (transition)=>{getTransition(transition)+setTransition(transition)+1;}//Updating All Transition in App
    return Header.transition;}
    const getInitial(initial){return initial;}
    const setInitial(Initial initial){this.initial;}
    const updateAllBytransition=(Transition transition)=>{getTransition(transition)+setTransition(transition)+1;}//Updating Transition in app
<div>
    <motion.div
        initial={{opacity:0,y:100}}
        transition={{duration:1.53}}
        whileInView={{opacity:0,y:1.0}}
        ></motion.div></div>
