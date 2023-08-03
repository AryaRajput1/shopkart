import '../css/Specification.css'
import SpecificationCard from './SpecificationCard'

function Specification(){
    const SpecificationList = [{
        title:'Fast Delivery',
        imgUrl:'./img/specification1.jpg',
        color:'rgb(255, 195, 195)',
        color:'rgb(255, 93, 120)'
    },
    {
        title:'Happy Customers',
        imgUrl:'./img/specification2.jpg',
        color:'rgb(116, 255, 165)',
        color:'rgb(255, 93, 120)'
    },
    {
        title:'24/7 Support',
        imgUrl:'./img/specification3.jpg',
        color:'rgb(237, 139, 254)',
        color:'rgb(255, 93, 120)'
    },
    {
        title:'Quality Checks',
        imgUrl:'./img/specification4.jpg',
        color:'rgb(166, 144, 255)',
        color:'rgb(255, 93, 120)'
    },
    {
        title:'Savings',
        imgUrl:'./img/specification5.jpg',
        color:'rgb(251, 246, 148)',
        color:'rgb(255, 93, 120)'
    },
]
    return <div className='specification'>
        {
            SpecificationList.map(item=><SpecificationCard key={item.title} title={item.title} imgUrl={item.imgUrl} color={item.color}/>)
        }

    </div>
}

export default Specification