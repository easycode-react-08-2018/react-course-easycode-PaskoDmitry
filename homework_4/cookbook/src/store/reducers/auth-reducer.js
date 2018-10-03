const initialState = [
    {
        index: 1,
        name: "Server #1 ",
    },
    {
        index: 2,
        name: "Server #2 "
    }
];
export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_SERVER':
            return [...state, action.peyload.server];
            break;

        case 'EDIT_SERVER':
            state.find(function(server, i) {
                if (server.index == action.peyload.server.index) {
                    state[i].name = action.peyload.server.name

                    return server;
                }
            });

            return [...state];
            break;

        case 'DELETE_SERVER':
            state.find(function(server, i){
                debugger;
                if (server.index == action.peyload.server.index) {
                    state.splice(i, 1);
                    //return server;
                }
            });

            return [...state];
            break;

        default: {
            return state
        }
    }
}