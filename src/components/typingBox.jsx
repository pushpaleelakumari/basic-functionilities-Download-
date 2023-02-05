import React, { createRef, useEffect, useRef, useState } from 'react'

function TypingBox({ words }) {
    console.log(words)


    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [currCharIndex, setCurrCharIndex] = useState(0);

    const wordSpanRef = Array(words.length).fill(0).map(i => createRef());

    const textInputRef = useRef(null)

    const handleKeyDown = (e) => {
    }

    const handleKeyUp = (e) => {
    }

    const focusInput = () => {
        textInputRef.current.focus()
    }

    useEffect(() => {
        textInputRef.current.focus()
    }, [])

    console.log(textInputRef)

    return (
        <>
            <div className="type-box" onClick={focusInput}>
                <div className="words" >
                    {words.map((word, index) => (
                        <span className="word" ref={wordSpanRef[index]}>
                            {word.split('').map((char, ind) => (
                                <span className="char">
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>

            <input type="text"
                className='hidden-input'
                ref={textInputRef}
                onKeyDown={(e) => handleKeyDown(e)}
                onKeyUp={(e) => handleKeyUp(e)}
            />
        </>
    )
}

export default TypingBox