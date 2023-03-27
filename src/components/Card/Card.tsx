import './card.styles.css'
import { Monster } from '../../App'

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

type CardProps = {
    monster: Monster
}

const Card = ({ monster }: CardProps) => (
    <div className='card-container'>
        <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=1&size=180x180`}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
    
)
export default Card;