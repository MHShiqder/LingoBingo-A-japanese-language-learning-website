import React from 'react';

const Card = ({ fInfo }) => {
    const { difficulty, part_of_speech, pronunciation, meaning, word, example, when_to_say } = fInfo;
    let color1 = false;
    let color2 = false;
    let color3 = false;
    if (difficulty == "easy") {
        color1 = true;
    }
    else if (difficulty == "medium") {
        color2 = true;
    }
    else {
        color3 = true;
    }
    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP'; // Japanese
        window.speechSynthesis.speak(utterance);
    }
    return (
        <>
            <div onClick={() => pronounceWord(word)} className={`cursor-pointer flex flex-col  border-2 rounded-lg shadow-lg p-5  ${color3 ? "bg-red-300" : ""} ${color1 ? "bg-green-300" : ""}
         ${color2 ? "bg-blue-300" : ""}`}>
                <p className='text-2xl font-bold text-center mb-3'>{word}</p>
                <p><strong>Meaning</strong>: {meaning}</p>
                <p><strong>Pronunciation</strong>: {pronunciation}</p>
                <p className='flex-1 mb-3'><strong>Part Of Speech</strong>: {part_of_speech}</p>
                <button onClick={() => document.getElementById('my_modal_5').showModal()} className='btn bg-white rounded-md'>When to say</button>
            </div>

            {/* modal  */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg border-b-2 text-sky-500">{word}</h3>
                    <p className="pt-3 "><strong>Meaning</strong> : {meaning} </p>
                    <p className="font-semibold "><span className='font-bold'>When to say</span> : {when_to_say} </p>
                    <p className=""><strong>Example</strong> : {example} </p>
                    <div className="modal-action justify-center">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-sky-500 text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </>
    );
};

export default Card;