export const Dropdown = ({ id, value, update, options }) => {

    const generateOptions = (options) => {
        return options.map(
            element => (
                <option key={element} value={element}>{element}</option>
            )
        );
    }

    return (
        <div>
            <select id={id} onChange={(event) => update(event.target.value)} value={value}>
                {generateOptions(options)}
            </select>
        </div>
    )
}