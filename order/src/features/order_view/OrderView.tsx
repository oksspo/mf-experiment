import {useEffect} from 'react';
import { loadAsync } from './orderViewSlice.ts';
import { useAppDispatch } from '../../app/hooks';

export function OrderView() {
    const dispatch = useAppDispatch();
    // const user = {
    //     name: 'John Doe'
    // };

    useEffect(() => {
        dispatch(loadAsync());
    }, []);

    return <div>
        <h2>Order View here</h2>
    </div>
}