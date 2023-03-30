let initialState =  { user : null } ;

let Reducer=(state=initialState , action)=>
{
    switch(action.type)
    {
        case "add_user" : return { ...state , user : action.payload   };
        case "logout" : return {...state , user : action.payload };
        default : return state;
    }

}


export default Reducer;