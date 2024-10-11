import react from "react";

import {TouchableOpacity, TouchableOpacityProps ,Text,StyleSheet,View} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
    tittle: string;
}


export function Button({ tittle, ...rest } : ButtonProps ){
    return(
    
    <TouchableOpacity style={styles.button} activeOpacity={.7} {...rest}>
        
    <Text style={styles.buttonText}>
        { tittle }
    </Text>

    </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#A370F7',
        padding:15,
        borderRadius:7,
        alignItems:'center',   
        marginTop:20,
    },
    buttonText:{
        color: '#FFF',
        fontSize:17,
        fontWeight:'bold',
    },
    
})