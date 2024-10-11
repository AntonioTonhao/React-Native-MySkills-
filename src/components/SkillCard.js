import react from "react";

import {TouchableOpacity,Text,StyleSheet} from 'react-native';

export function SkillCard({skill}){
    return(
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.skills}>
          {skill}
          </Text>
          </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({ 
        buttonSkill:{
        marginTop:50,
        backgroundColor:'#1F1E25',
        padding:20,
        borderRadius:50,
        alignItems:'center'
    },
    skills:{
        color:'#FFF',
        fontSize:22,
        fontWeight:'bold',
       
    }

});



