const defaultState = { value: 0 };
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'UP':
            return { value: state.value + 1 };
        case 'DOWN':
            return { value: state.value - 1 };
        default:
            return state;
    }
}
