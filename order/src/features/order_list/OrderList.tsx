import {useEffect} from 'react';
import { loadAsync } from './orderListSlice';
import { useAppDispatch } from '../../app/hooks';

export function OrderList() {
    const dispatch = useAppDispatch();
    // const user = {
    //     name: 'John Doe'
    // };

    useEffect(() => {
        dispatch(loadAsync());
    }, []);

    return <div>
        <h2>Order List here</h2>
    </div>
}