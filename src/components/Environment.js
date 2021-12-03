import { items } from '../App.css'

export const Environment = ({ env, update }) => {
    let background = env === 'STE' ? 'blue' : 'red';
    return (
        <div onChange={(event) => update(event.target.value)}>
            <input className="items" type="radio" value="STE" name="environment" defaultChecked /> STE
            <input className="items" type="radio" value="SIT" name="environment" /> SIT
        </div>
    )
}