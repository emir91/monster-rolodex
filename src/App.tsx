// import { Component } from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import { getData } from './utils/data.utils';

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchTerm: ''
//     }
//   }

//  async componentDidMount() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await response.json()

//     this.setState(() => {
//       return {monsters: users}
//     }, () => {
//       console.log(this.state);
//     })

//   } catch (error) {
//     console.log('Something went wrong', error);    
//   }
//   }

//   onSearchChange = (event) => {
//     const searchTerm = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return {searchTerm}
//     })
//   }

//   render() {
//     const { monsters, searchTerm } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchTerm)
//    })
   
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters</h1>
//         <SearchBox  onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
  
//   }
// }

export type Monster = {
  id: string;
  name: string;
  email: string
}

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const fetchedMonstes = await response.json()
    
        // setMonsters(fetchedMonstes)
        const fetchedMonsters = await getData <Monster[]>('https://jsonplaceholder.typicode.com/users');
        setMonsters(fetchedMonsters);
        
    
      } catch (error) {
        console.log('Something went wrong', error);    
      }
    }   
    
    fetchMonsters()
  }, [])

  useEffect(() => {
        const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchTerm)
   })

   setFilteredMonsters(newFilteredMonsters)
    
  }, [searchTerm, monsters])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value.toLocaleLowerCase()
    setSearchTerm(newSearchTerm)
  }


  return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox  onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
   )
}

export default App;
