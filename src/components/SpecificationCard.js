import '../css/SpecificationCard.css'

function SpecificationCard({title,imgUrl,color}){
    return <div className='specificationCard'>
        <img src={imgUrl}/>
        <span style={{
            backgroundColor:color
        }}>{title}</span>
    </div>
}

export default SpecificationCard