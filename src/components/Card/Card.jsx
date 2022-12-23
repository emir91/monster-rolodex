import './card.styles.css'

// class Card extends Component {
//     render() {
//         const {monsterId, monsterName, monsterEmail} = this.props
//         return (
//             <div className='card-container'>
//                 <img alt={`monster ${monsterName}`} src={`https://robohash.org/${monsterId}?set=1&size=180x180`}/>
//                 <h2>{monsterName}</h2>
//                 <p>{monsterEmail}</p>
//             </div>
//         );
//     }
// }

const Card = ({ monsterName, monsterId, monsterEmail }) => (
    <div className='card-container'>
        <img alt={`monster ${monsterName}`} src={`https://robohash.org/${monsterId}?set=1&size=180x180`}/>
        <h2>{monsterName}</h2>
        <p>{monsterEmail}</p>
    </div>
    
)
export default Card;