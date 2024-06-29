const redux = require('redux');


// This has to be the reducer not the actions
const counterReducer = (
    // The previous state
    state = { counter: 0 }, 
    action
) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === "decrement") {
        return {
            counter: state.counter - 1
        }
    }
    
    // Return a new state
    return state;
};

const store = redux.createStore(counterReducer);



// Component
const counterSubscriber = () => {
    const latestState = store.getState(); // Give us the latest state snapshot
    console.log(latestState);
}

// Component subscription
store.subscribe(counterSubscriber);

// What the fuck is this
// Oh you're dispatching the type of action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement'}); 

// This is the heart of redux lmao

// You can use redux any programming project