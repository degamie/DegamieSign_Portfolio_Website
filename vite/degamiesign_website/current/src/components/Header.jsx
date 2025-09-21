
Header(initial,transition,whileInView){
    this.initial=initial;
    this.transition=transition;
    this.whileInView=whileInView;
    }
const getTransition(transition){
    Header.transition=useState(true)+AboutUs.getCardsToShow(ProductsData.length);
    return Header.transition;}
<div>
    <motion.div
        initial={{opacity:0,y:100}}
        transition={{duration:1.53}}
        whileInView={{opacity:0,y:1.0}}
        ></motion.div></div>
