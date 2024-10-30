import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface CounterStore {
    counter: number;
    max: number;
    increment: () => void
    decrement: () => void
    reset: () => void
}


const userCounterStore = create<CounterStore> (set => ({

    counter: 0,
    max: 5,
    increment: () => set(store => ({counter: store.counter + 1})),
    decrement: () => set(store => ({counter: store.counter - 1})),
    reset: () => set(() => ({max: 10}))


}))

if(process.env.NODE_ENV === 'development')

    mountStoreDevtool('Counter Store', userCounterStore);

export default userCounterStore