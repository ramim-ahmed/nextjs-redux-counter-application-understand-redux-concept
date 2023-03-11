import { decrement, increment } from '@/features/counter/actions';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
interface matchProps {
    title: any
}
export default function Counter({ title }: matchProps) {
    const count = useSelector((state: any) => state?.count);
    const dispatch = useDispatch();
    const [incrementInput, setIncrementInput] = useState('');
    const [decrementInut, setDecrementInput] = useState('');

    const incrementHanlder = (e: any) => {
        e.preventDefault();
        dispatch(increment(Number(incrementInput)));
        setDecrementInput('')
    }

    const decrementHandler = (e: any) => {
        e.preventDefault();
        dispatch(decrement(Number(decrementInut)));
        setDecrementInput('');
    }


    return (
        <div className='flex justify-center border p-5 flex-col text-center w-6/12 m-10'>
            <div className=' text-3xl my-6'>{count}</div>
            <div className='border border-cyan-400 p-8 rounded-2xl'>
                <form onSubmit={incrementHanlder} className='flex flex-col'>
                    <label>Increment</label>
                    <input onChange={e => setIncrementInput(e.target.value)} className=' appearance-none border-slate-400 border' type="number" />
                </form>
                <form onSubmit={decrementHandler} className='flex flex-col'>
                    <label>Decrement</label>
                    <input onChange={e => setDecrementInput(e.target.value)} className=' appearance-none border-slate-400 border' type="number" />
                </form>
            </div>
        </div>
    )
}
