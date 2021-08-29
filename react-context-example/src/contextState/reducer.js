export const reducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "MULTIPLY":
            return state * 2;
        case "DIVIDE":
            return state / 2;
    }
}