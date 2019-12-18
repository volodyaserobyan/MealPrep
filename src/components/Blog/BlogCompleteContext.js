import React from 'react'
import backCoffe from '../../assets/images/Coffee.svg'
import backCoffe1 from '../../assets/images/Rectangle 5.svg'
import cocoNut from '../../assets/images/Rectangle 6.svg'
import cinnamon from '../../assets/images/Rectangle 7.svg'

class BlogCompleteContext extends React.Component {

    render() {
        return(
            <div className="BlogComplete-Cont-Context">
                            <div className="BlogComplete-Cont-Context_img">
                                <img src={backCoffe} />
                            </div>
                            <p>These days, a proper cup of joe includes a pinch or spoonful of health-conscious ingredients that take the place of old-school sweeteners.
                                From cinnamon to cocoa powder, there’s a variety of healthy coffee add-ins that taste great, while also providing you with a
                                     flurry of health benefits.</p>
                            <p>So, ditch your dated brew and use these 9 healthy coffee add-ins to kick-start your day!</p>
                            <h1>1. Unsweetened Cocoa</h1>
                            <p>Chocolate lovers rejoice! Add a few spoonfuls of unsweetened cocoa powder in coffee to create the ultimate antioxidant concoction. Additionally,
                                 this make-it-yourself mocha contains small amounts of flavanols, an active compound that has shown
                                  to reduce blood pressure and fight inflammation.</p>
                            <p>To create the chocolatey masterpiece, add between 1 to 2 tablespoons of unsweetened cocoa powder to your coffee grounds before brewing.</p>
                            <div className="BlogComplete-Cont-Context_img">
                                <img src={backCoffe1} />
                            </div>
                            <h1>2. Coconut oil</h1>
                            <p>For ketogenic dieters, adding coconut oil to your coffee is a great way to sneak in essential “good” fats. Coconut oil contains
                                 high amounts of medium-chain triglycerides (MCTs) – a fat compound that can help keep you in ketosis.</p>
                            <p>Even if you’re not in the keto crowd, drinking coffee with coconut oil has also shown to speed up metabolism and boost energy levels.
                                 Just stir in 1 to 2 teaspoons of coconut
                                     oil with your morning brew. But keep in mind – coconut oil is very high in calories. So, be sure not to overdo it!</p>
                            <div className="BlogComplete-Cont-Context_img">
                                <img src={cocoNut} />
                            </div>
                            <h1>3. Cinnamon</h1>
                            <p>Cinnamon is a flavorful add-in to your morning brew that offers a burst of flavor with several powerful health benefits.
                                 For instance, cinnamon has proven to help lower blood sugar levels while fighting inflammation.</p>
                            <p>Sprinkle in a pinch of cinnamon (no more than a teaspoon) to your morning brew. Try splashing in some
                                 vanilla extract for additional flavor and antioxidants properties.</p>
                            <div className="BlogComplete-Cont-Context_img">
                                <img src={cinnamon} />
                            </div>
                        </div>
        )
    }
}

export default BlogCompleteContext