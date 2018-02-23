export default function (state =null, action){
  switch(action.type){
    case 'SELECTED_MOVIE':
    return action.payload;
  }

  return state;

}