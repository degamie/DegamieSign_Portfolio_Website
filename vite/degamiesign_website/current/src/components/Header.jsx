
Header(initial,transition,whileInView){
    this.initial=initial;
    this.transition=transition;
    this.whileInView=whileInView;
    }
const getWhileInView(whileInView){
    return whileInView;}
    const setTransition(transition){this.transition=transition;}
const getTransition(transition){
    Header.transition=useState(true)+AboutUs.getCardsToShow(ProductsData.length);
    return Header.transition;}
    const getInitial(initial){return initial;}
    const setInitial(Initial initial){this.initial;}
<div>
    <motion.div
        initial={{opacity:0,y:100}}
        transition={{duration:1.53}}
        whileInView={{opacity:0,y:1.0}}
        ></motion.div></div>
