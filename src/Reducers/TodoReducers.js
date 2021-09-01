

const initialState={
    list: []
}

const TodoReducers = (state=initialState, action)=>{
    switch(action.type){

        case "ADD_TODO":

            const {id, data} = action.payload;

            return {
                // ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }

        case "DELETE_TODO":
            
            const newList = state.list.filter((elem)=>elem.id !== action.payload.id)
            return{
                // ...state,
                list: newList
            } 
        
        case 'REMOVE_ALL':
            return{
                list: []
            }
        default: 
            return state;
    }
}

export default TodoReducers;