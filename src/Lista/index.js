import React, { Component } from 'react';
import 
{View, Text, StyleSheet, Image, TouchableOpacity} 
from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };
  }

  render(){
    return(
      <View style= { styles.viewFeed }>
        <View style={ styles.viewPerfil }>
          <Image
          style= { styles.imagePerfil } 
          source={{ uri: this.state.feed.imgperfil }}
          />

          <Text style= { styles.userName }>
            { this.state.feed.nome }
          </Text>

        </View>

        <Image
        resizeMode="cover"
        style= { styles.imagePublication }
        source={{ uri: this.state.feed.imgPublicacao }}
        />

        {/* botoes */}
        <View style={ styles.viewBtn }>
          <TouchableOpacity>
            <Image 
            style={ styles.iconLike } 
            source={require('../img/like.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={ styles.btnSend }>
            <Image 
            style={ styles.iconLike } 
            source={require('../img/send.png')}
            />
          </TouchableOpacity>
        </View> 

        {/* rodape */}
        <View style={ styles.viewFooter }>
          <Text style={ styles.nomeFooter }>
            { this.state.feed.nome }
          </Text>

          <Text style={ styles.descFooter }>
            { this.state.feed.descricao }
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewFeed: { 
    flex: 1,
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  userName: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
  },
  imagePerfil : {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.1,
    borderColor: 'gray',
    padding: 8,
  },
  imagePublication: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  viewBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconLike: {
    width: 33,
    height: 33,
  },
  btnSend: {
    paddingLeft: 8,
  },
  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomeFooter: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 8,
    color: '#000',
  },
  descFooter: {
    paddingLeft: 8,
    fontSize: 15,
    color: '#000',
  },
});

export default Lista;