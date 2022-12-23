import './search-box.styles.css'

// class SearchBox extends Component {
//     render() {
//         const { className, placeholder, onChangeHandler} = this.props
//         return (
//             <div>
//                 <input className={`monster-search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler}/>
//             </div>
//         );
//     }
// }

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <div>
        <input className={`monster-search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler}/>
    </div>
)
export default SearchBox;