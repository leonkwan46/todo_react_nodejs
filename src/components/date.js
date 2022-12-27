import React, {useEffect, useState} from 'react'

const CurDate = () => {

    const [dateState, setDateState] = useState(new Date())
    useEffect(() => {
        setInterval(() => setDateState(new Date(), 30000))
    }, []);

    return (
            <h2 className='background'>
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })}
                <br></br>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                })}
            </h2>

    )
}

export default CurDate