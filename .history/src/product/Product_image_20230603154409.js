import nutrition from '../images/sp1.jpg';
import Oxywhey from '../images/sp2.jpg';
import NutritionBCAA from '../images/sp3.jpg';
import Muscle from '../images/sp4.jpg';


export default function productImage({product}) {
    return(
        <div className='box_image'>
            <ImageSrc
                product = {{
                    link: nutrition,
                    name: '16 Optimum Nutrition Gold Standard Pre Advanced'
                }}
            />
        </div>
    )
}