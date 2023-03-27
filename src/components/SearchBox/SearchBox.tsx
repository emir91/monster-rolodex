import { ChangeEventHandler, ChangeEvent } from 'react';
import './search-box.styles.css';

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

type SearchBoxProps =  {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void  ;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
    <div>
        <input className={`monster-search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler}/>
    </div> 
)
export default SearchBox;