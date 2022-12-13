function Card()
{
    const cardTitle = 'My Card';
    const cardDescriptions = 'It is my card. One of the best card....';

    return    <div className='card'>
    <h2 className='cardTItle'>{cardTitle}</h2>
    <p className='cardDescriptions'>{cardDescriptions}</p>
    </div>
}

export default Card;