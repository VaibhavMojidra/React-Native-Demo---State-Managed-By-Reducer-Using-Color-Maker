import React,{useReducer} from 'react';
import { View,Text } from "react-native";
import ColorAdjustButton from '../components/ColorAdjustButton';

const COLOR_STEP=15;

const reducer = (state,action) =>{ //second parameter is action how to change
    //state===={red: number,green :number,blue:number}
    //howtochange ... action ={colorTochange: 'red'||green,,,,, amount: -15/15}
    switch(action.ColorToChange){
        case 'red':
            return state.red+action.amount>255||state.red+action.amount<0?state:{ ...state , red: state.red + action.amount}; // complusory to return a state if not valid still
        case 'green':
            return state.green+action.amount>255||state.green+action.amount<0?state:{...state , green:state.green + action.amount};
        case 'blue':
            return state.blue+action.amount>255||state.blue+action.amount<0?state:{...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};    

const ColorMakerScreen =()=>{
    
    const [state,runReducer] = useReducer(reducer, {red:0, green:0, blue:0} );
    
    return(<View>
        <ColorAdjustButton onIncrement={()=>runReducer({ColorToChange:'red',amount:COLOR_STEP})} onDecrease={()=>runReducer({ColorToChange:'red',amount: -1*COLOR_STEP})}  colorName="Red"/>
        <ColorAdjustButton onIncrement={()=>runReducer({ColorToChange:'blue',amount:COLOR_STEP})} onDecrease={()=>runReducer({ColorToChange:'blue',amount: -1*COLOR_STEP})}  colorName="Blue"/>
        <ColorAdjustButton onIncrement={()=>runReducer({ColorToChange:'green',amount:COLOR_STEP})} onDecrease={()=>runReducer({ColorToChange:'green',amount: -1*COLOR_STEP})}  colorName="Green"/>
        <View style={{height:200,width:200,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}/>
    </View>);
};

export default ColorMakerScreen;
