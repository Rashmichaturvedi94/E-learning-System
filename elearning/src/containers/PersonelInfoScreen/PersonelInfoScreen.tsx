import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text,TextInput, StyleSheet,Button,Alert,SafeAreaView, TouchableHighlight,TouchableOpacity } from 'react-native';
import { PersonelInfoScreen as PersonelInfoScreenComponent } from './PersonelInfoScreen.styles';
import { PersonelInfoScreenProps } from './PersonelInfoScreen.interface';

export const PersonelInfoScreen: FC<PersonelInfoScreenProps> = () => {
  const navigation = useNavigation();
  return (
   
    <SafeAreaView style={styles.container}>
   <View>
      <Text style={styles.titleText} >
      Personel info
     
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name" 
      />    
      <TextInput
      style={styles.input}
      placeholder="Occocupation" 
    />
     <TextInput
      style={styles.input}
      placeholder="Language" 
    />
        <TouchableHighlight  style={styles.touchHighlight}>
            <Button onPress={() => Alert.alert('Simple Button pressed')}            
            title="SAVE"
            color="#FFFFFF"
            accessibilityLabel="Learn more about this button"
            /> 
          </TouchableHighlight> 
    </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 50,
    borderBottomColor: '#b0adac',
    borderBottomWidth: 0.5,
    borderColor: 'white', 
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }, 
  touchHighlight: {
    height: 50,
    borderRadius:10,
    backgroundColor : '#1b8ffa',
    marginTop :100,
  },
});