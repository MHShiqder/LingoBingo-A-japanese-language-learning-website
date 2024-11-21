import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import Card from './Card';

const Lesson = () => {
    const { no } = useParams()
    const info = useLoaderData()
    const filteredInfo = info.filter(i => i.lesson_no == no)

    return (
        <div className="text-center w-11/12 mx-auto">
            <h1 className="text-5xl mt-10 font-bold ">Lesson {no}</h1>
            <div className="grid grid-cols-4 gap-5 my-10 ">
                {
                    filteredInfo.map(fInfo => <Card fInfo={fInfo}></Card>)
                }
            </div>

            <Link  className="btn bg-sky-400 mb-10" to="/start-learning">Back to Lesson</Link>
        </div>
    );
};

export default Lesson;