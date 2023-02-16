import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  
} from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: '',
      isEnabled: false
    }
  }

  mudouMensagem = msg => {
    this.setState({ mensagem: msg });
  }

  render() {
    const { mensagem } = this.state

    return (
      
      <ImageBackground 
      source={{uri: 'https://www.sejabixo.com.br/wp-content/uploads/2017/06/post_fiap.png'}}
      style={styles.container}>
        {Platform.OS === 'android' ? (
          <Text>Android</Text>
        ) : (
          <Text style={styles.text}>FIAP</Text>
        )}
        <Text style={[styles.text, styles.textColor]}>portal do aluno</Text>
        <TextInput
          placeholder='Login'
          style={styles.textInput}
          onChangeText={this.mudouMensagem}
        />
        <TextInput
          placeholder='Password'
          style={styles.textInput}
        />
       
        
        <Button
        
          title="Clique-me"
          onPress={() => alert(mensagem)}
          color="red"
        />
        <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Esqueci minha senha')}>
        <Text> Esqueci minha senha</Text>
        </TouchableOpacity>

        <br/>

        <Switch
          value={this.state.isEnabled}
          onValueChange={() => this.setState({ isEnabled: !this.state.isEnabled})}
          thumbColor='white'
          trackColor = {{false: '#d3d3d3', true: '#000'}}
        />
        <ActivityIndicator 
        color='white'
        size='small'/>
        
      </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'green'
      }
    })
  },
  textColor: {
    color: 'gray'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: 200
  },
  image: {
    width: 200,
    height: 100,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10

  } 
});
