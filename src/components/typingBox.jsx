import React, { createRef, useEffect, useRef, useState } from 'react'
import UpperMenu from './upperMenu';

function TypingBox({ words }) {
    // console.log(words)


    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [countDown, setCountDown] = useState(15);
    const [testStart, setTestStart] = useState(false)
    const [testOver, setTestOver] = useState(false);


    //this is referencing the all 50 words in the span
    //how to select particular word in that span i.e; wordSpanRef[4] -> wordSpanRef[currWordIndex][currIndex]
    const wordSpanRef = Array(words.length).fill(0).map(i => createRef());


    const textInputRef = useRef(null);

    const startTimer = () => {

        const intervalId = setInterval(timer, 1000);

        function timer() {
            console.log('works')
            setCountDown((prevCountDown) => {

                if (prevCountDown === 1) {
                    clearInterval(intervalId);
                    setCountDown(0);
                    setTestOver(true)
                }
                else {
                    return prevCountDown - 1
                }
            });
        }
    }

    const handleKeyDown = (e) => {
        if (!testStart) {
            startTimer();
            setTestStart(true);
        }
        let key = e.key;
        // console.log('keyPressed', key)

        // querySelectorAll returns gives all the single characters inside the span since we given span
        // console.log('dfa', wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].innerText)


        let allSpans = wordSpanRef[currWordIndex].current.querySelectorAll('span')

        // logic for space
        if (e.keyCode === 32) {

            if (allSpans.length <= currCharIndex) {
                // hide curser border 
                allSpans[currCharIndex - 1].className = allSpans[currCharIndex - 1].className.replace('right', '')
            }
            else {
                allSpans[currCharIndex].className = allSpans[currCharIndex - 1].className.replace('current', '')
            }


            wordSpanRef[currWordIndex + 1].current.querySelectorAll('span')[0].className = 'char current';

            setCurrWordIndex(currWordIndex + 1);
            setCurrCharIndex(0);
            return;
        }

        // logic for backspace
        if (e.keyCode === 8) {
            if (currCharIndex !== 0) {


                if (currCharIndex === allSpans.length) {
                    if (allSpans[currCharIndex - 1].className.includes('extra')) {
                        allSpans[currCharIndex - 1].remove();
                        allSpans[currCharIndex - 2].className += ' right'
                    }
                    else {
                        allSpans[currCharIndex - 1].className = 'char current'
                    }
                    setCurrCharIndex(currCharIndex - 1)
                    return;
                }



                wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className = 'char'
                wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex - 1].className = 'char current'
                setCurrCharIndex(currCharIndex - 1);
            }
            return
        }

        if (e.key.length !== 1) {
            return;
        }

        if (currCharIndex === allSpans.length) {
            let newSpan = document.createElement('span') //  which will return empty span <span></span>
            newSpan.innerText = e.key;
            newSpan.className = 'char incorrect right extra';
            allSpans[currCharIndex - 1].className = allSpans[currCharIndex - 1].className.replace('right', '')

            wordSpanRef[currWordIndex].current.append(newSpan);
            setCurrCharIndex(currCharIndex + 1)
            return
        }



        let currentCharacter = wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].innerText
        if (key === currentCharacter) {
            // console.log('correct key')
            wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className = 'char correct'
        }
        else {
            // console.log('worng key')
            wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className = 'char incorrect'
        }
        if (currCharIndex + 1 === wordSpanRef[currWordIndex].current.querySelectorAll('span').length) {
            wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className += ' right'
        }
        else {
            wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex + 1].className = 'char current'
        }


        setCurrCharIndex(currCharIndex + 1)


    }

    const handleKeyUp = (e) => {
    }

    const focusInput = () => {
        textInputRef.current.focus()
    }



    useEffect(() => {
        focusInput();
        wordSpanRef[0].current.querySelectorAll('span')[0].className = 'char current'
        // button.eventListner;
        // return ()=>{
        //     button.removeEvent
        // }
    }, [])

    const callbackTime = (time) => {
        setCountDown(time)
    }

    // console.log(textInputRef) 

    return (
        <>
            <UpperMenu countDown={countDown} updateTime2={callbackTime} /><br />
            {/* <h3>{countDown} s</h3> */}
            {!testOver ? (
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
                :
                (
                    <>
                        <h1>Time Over</h1>
                    </>
                )
            }
        </>
    )
}

export default TypingBox