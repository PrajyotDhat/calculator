import React, { useState } from 'react';

function Calculator() {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult((prev) =>
            prev + (e.target.id === '=' ? '' : e.target.id === 'AC' ? '' : e.target.id)
        );
    };

    const clearAll = () => setResult('');
    const deleteOne = () => setResult((prev) => prev.slice(0, -1));
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('error');
        }
    };

    return (
        <div className='min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-10'>
            <h1 className='text-4xl text-[#F91A52] font-bold'>Calculator</h1>
            <div className='border-4 border-rose-400 p-4 gap-y-1 bg-slate-200 rounded-md'>
                <div className='bg-[#ED28B7] p-4 max-w-96 rounded-md border border-pink-400 shadow-lg'>
                    <input
                        type='text'
                        value={result}
                        disabled
                        className='bg-[#882539] rounded-md p-4 w-full text-2xl font-semibold text-[#FFF]'
                    />
                </div>
                <div className='grid grid-cols-4 gap-2 w-[22rem] pt-4'>
                    <button type='button' className='cal-btn' onClick={clearAll}>
                        AC
                    </button>
                    <button type='button' className='cal-btn' onClick={deleteOne}>
                        DEL
                    </button>
                    <button type='button' className='cal-btn' id='.' onClick={handleClick}>
                        .
                    </button>
                    <button type='button' className='cal-btn' id='/' onClick={handleClick}>
                        /
                    </button>
                    <button type='button' className='cal-num' id='7' onClick={handleClick}>
                        7
                    </button>
                    <button type='button' className='cal-num' id='8' onClick={handleClick}>
                        8
                    </button>
                    <button type='button' className='cal-num' id='9' onClick={handleClick}>
                        9
                    </button>
                    <button type='button' className='cal-btn' id='*' onClick={handleClick}>
                        *
                    </button>
                    <button type='button' className='cal-num' id='4' onClick={handleClick}>
                        4
                    </button>
                    <button type='button' className='cal-num' id='5' onClick={handleClick}>
                        5
                    </button>
                    <button type='button' className='cal-num' id='6' onClick={handleClick}>
                        6
                    </button>
                    <button type='button' className='cal-btn' id='-' onClick={handleClick}>
                        -
                    </button>
                    <button type='button' className='cal-num' id='1' onClick={handleClick}>
                        1
                    </button>
                    <button type='button' className='cal-num' id='2' onClick={handleClick}>
                        2
                    </button>
                    <button type='button' className='cal-num' id='3' onClick={handleClick}>
                        3
                    </button>
                    <button type='button' className='cal-btn' id='+' onClick={handleClick}>
                        +
                    </button>
                    <button type='button' className='cal-num' id='00' onClick={handleClick}>
                        00
                    </button>
                    <button type='button' className='cal-num' id='0' onClick={handleClick}>
                        0
                    </button>
                    <button type='button' className='cal-btn col-span-2' id='=' onClick={calculate}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
