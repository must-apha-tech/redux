const initialState={nbre:0}
export default function reducer(state=initialState,action){
    switch(action.type){
        case 'Incrementer':
            return {...state,nbre:state.nbre+parseInt(action.payload)}
        case "Decrementer":
            return {...state,nbre:state.nbre-parseInt(action.payload)}
        case "Reinitialiser":
            return {...state,nbre:0}
    }
    return state;
}