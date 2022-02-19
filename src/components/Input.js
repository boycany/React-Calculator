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
            
            {/* <div className='result'>
                <h1>{result}</h1>
            </div>
            <div className='text'>
                <h3>{text}</h3>
            </div> */}
        </div>
    
    )
}

export default Input
