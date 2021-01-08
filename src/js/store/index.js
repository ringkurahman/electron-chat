import { createStore } from 'redux'



export default function configureStore() {

    const store = createStore(() => {
        return {
            message: 'Hello World',
            data1: 'Just some testing data',
            data2: 'Just some testing data2'
        }
    })
    return store
}