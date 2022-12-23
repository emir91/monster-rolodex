import Card from '../Card/Card'
import './card-list.styles.css'

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

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map(monster => {
            const { id, name, email } = monster
            return (
                <Card key={id} monsterId={id} monsterName={name} monsterEmail={email}/>
            )
        })}
    </div>
)
export default CardList