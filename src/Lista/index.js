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

    this.mostraLikes = this.mostraLikes.bind(this);
    this.darLike = this.darLike.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this);

  }

  mostraLikes(likers){
    let feed = this.state.feed;

   /*  se a foto e menor ou igual a zero */
    if(feed.likers <= 0){
      return; /* para nao mostrar nada */
    }

    return(
      <Text style={ styles.txtLikes }>
        { feed.likers } { feed.likers > 1 ? 'curtidas' : 'curtida' }
      </Text>
    );
  }

  darLike() {
    let feed = this.state.feed;

    /* verificando se ja esta likeado */
    if( feed.likeada === true ){
      this.setState({
        feed: {
          /* pegando tudo de feed e so alterando dois */
          ...feed,
          likeada: false,
          likers: feed.likers - 1,
        }
      });
    }
    else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1,
        }
      });
    }

  }

  carregaIcone(likeada) {
   
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  
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
          <TouchableOpacity onPress={ this.darLike }>
            <Image 
            style={ styles.iconLike } 
            source={ this.carregaIcone(this.state.feed.likeada) }

            />
          </TouchableOpacity>

          <TouchableOpacity style={ styles.btnSend }>
            <Image 
            style={ styles.iconLike } 
            source={require('../img/send.png')}
            />
          </TouchableOpacity>
        </View>
        
        {/* like */}
        {this.mostraLikes(this.state.feed.likers)}

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
    paddingLeft: 8,
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
    padding: 8,
    marginTop: 8,
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
    marginBottom: 10,
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
  txtLikes: {
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 5,
  },
});

export default Lista;