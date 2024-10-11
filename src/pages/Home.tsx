import React, {useEffect, useState} from "react";
import {View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { SkillCard } from "../components/SkillCard";
import { Button } from "../components/Button";

interface SkillData{ 
  id : string;
  name : string;
  date? : Date;
}

export   function Home(){
    
    const [newSkill,setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [hour, setHour] = useState('');

      function handleAddNewSkill(){
      
      const data = {
        id: String( new Date().getTime() ),
        name :newSkill
      }
      
      
        setMySkills(oldState =>  [...oldState, data]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12){
          setHour ('Bom dia');
        } 
          else if (currentHour > 12 && currentHour < 18){
          setHour ('Boa tarde');
        } 
          else {
          setHour ('Boa noite');
        }
    },[]);
  return(
    <View style={styles.container}>
      <Text style ={styles.tittle}>Olá, Antonio</Text>
      <Text style ={{color:'white'}}>{hour}</Text>

      <TextInput style={styles.input}
      placeholder="New skill"
      placeholderTextColor="#555"
      onChangeText = {setNewSkill}
      />

      <Button  
      onPress={handleAddNewSkill}
      tittle="New"
      />

      <Text style ={[styles.tittle, {marginTop:50}]}>
        My Skills
      </Text>
      
      <FlatList
      data = {mySkills}
      keyExtractor={item => item.id}
      renderItem={({item}) => (<SkillCard skill={item.name}/>)}
      />

            
</View>
  )
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor: '#121015',
        paddingHorizontal:20,
        paddingVertical:70,
        
    },  
    tittle:{
        color: '#fff',
        fontSize:24,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'#1F1e25',
        color: '#FFF',
        fontSize:18,
        padding: Platform.OS ==='ios' ? 15 : 12,
        marginTop:30,
        borderRadius:5,
    },
  
});