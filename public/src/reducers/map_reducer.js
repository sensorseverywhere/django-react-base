export default function StylesheetReducer(styleState = null, action) {
  switch(action.type){
    case 'SET_STYLE': {
      return Immutable.fromJS(action.payload);
    }
    default: return styleState;
  }
}
