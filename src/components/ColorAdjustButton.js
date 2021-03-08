import React from 'react';
import { View,Text, Button } from "react-native";

const ColorAdjustButton =(props)=>{
    return(<View>
        <Text>{props.colorName}</Text>
        <Button title={"Increase "+props.colorName} onPress={()=>props.onIncrement()}/>
        <Button title={"Decrease "+props.colorName} onPress={()=>props.onDecrease()}/>
    </View>);
};


export default ColorAdjustButton;