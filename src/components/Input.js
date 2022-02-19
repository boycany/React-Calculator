import './Input.css'

const Input = ({text, result}) => {
    return (
        <div className='input-wrapper'>
            <input type='text' 
                placeholder='Result'
                value={result} 
                className='result' 
                readOnly />
            <input type='text' 
                placeholder='0'
                value={text} 
                className='text' 
                readOnly />
        </div>
    
    )
}

export default Input
