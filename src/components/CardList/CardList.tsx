import Card from '../Card/Card'
import './card-list.styles.css'
import { Monster } from '../../App'

// class CardList extends Component {
    

//     render() {
//         const { monsters } = this.props

//         return (
//             <div className='card-list'>
//                 {monsters.map(monster => {
//                     const { id, name, email } = monster
//                     return (
//                         <Card key={id} monsterId={id} monsterName={name} monsterEmail={email}/>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
    <div className='card-list'>
        {monsters.map(monster => {
            const { id, name, email } = monster
            return (
                <Card key={id} monster={monster}/>
            )
        })}
    </div>
)
export default CardList