// When the app starts up we are going to start with the app not being logged in

export const initialState = {
    user: null,
}

// when we sign in we are going to say that go ahead and push this user into the data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch( action.type) {
        case actionTypes.SET_USER:

        // whatever we return is basically how we intend to change our datalayer
            return {
                ...state,
                user: action.user,
            };

        default: 
            return state;
    }
};
export default reducer;