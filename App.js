import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import variaveis from './src/variaveis';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.jaClicados = ['', ''];
    this.state = {
      img0: require('./src/BASICO_NADA.png'),
      img1: require('./src/BASICO_NADA.png'),
      img2: require('./src/BASICO_NADA.png'),
      img3: require('./src/BASICO_NADA.png'),
      img4: require('./src/BASICO_NADA.png'),
      img5: require('./src/BASICO_NADA.png'),
      img6: require('./src/BASICO_NADA.png'),
      img7: require('./src/BASICO_NADA.png'),
      img8: require('./src/BASICO_NADA.png'),
      estaX: 1,
    };
    this.jogar = this.jogar.bind(this);
  }

  jogar(id) {
    if (variaveis.jogoAcabou == true) {
      this.reiniciarJogo();
    }
    else {
      if (this.state.estaX == 0) { // Verifica de quem é a vez
        if (this.state['img' + id] == '/static/media/BASICO_NADA.25177f71.png') { // Verifica se algo ja foi desenhado 
          this.desenharSimbolo(id, '1', require('./src/BASICO_X.png'), 0);
        }
      }
      else {
        if (this.state['img' + id] == '/static/media/BASICO_NADA.25177f71.png') { // Verifica se algo ja foi desenhado 
          this.desenharSimbolo(id, '0', require('./src/BASICO_O.png'), 1);
        }
      }
    }
  }

  reiniciarJogo() {
    console.log('reiniciando');
    var i = 0;
    variaveis.jogo.forEach(blocos => {
      this.setState({
        estaX: 1,
        ['img' + i]: require('./src/BASICO_NADA.png'),
      })
      variaveis.jogo[i] = '';
      variaveis.jogoAcabou = false;
      variaveis.resultado = '';
      i++;
    });
  }

  verificarvencedor(simbolo) {
    var j = 0;
    variaveis.jogosGanhos.forEach(i => {
      if (variaveis.jogo[variaveis.jogosGanhos[j][0]] == variaveis.simbolos.opcoes[simbolo] && // Verifica quem ganhou
        variaveis.jogo[variaveis.jogosGanhos[j][1]] == variaveis.simbolos.opcoes[simbolo] &&
        variaveis.jogo[variaveis.jogosGanhos[j][2]] == variaveis.simbolos.opcoes[simbolo]) {
        variaveis.jogoAcabou = true;
        console.log(variaveis.simbolos.opcoes[simbolo] + ' ganhou!'); // Tal simbolo ganhou   

        if (simbolo == 0) {
          variaveis.resultado = "O jogador 'X' venceu o jogo!";
        }
        else if (simbolo == 1) {
          variaveis.resultado = "O jogador 'O' venceu o jogo!";
        }
      }
      j++;
    });

    if (
      variaveis.jogoAcabou == false &&
      variaveis.jogo[0] !== '' &&
      variaveis.jogo[1] !== '' &&
      variaveis.jogo[2] !== '' &&
      variaveis.jogo[3] !== '' &&
      variaveis.jogo[4] !== '' &&
      variaveis.jogo[5] !== '' &&
      variaveis.jogo[6] !== '' &&
      variaveis.jogo[7] !== '' &&
      variaveis.jogo[8] !== '') {
      variaveis.jogoAcabou = true;
      console.log('Deu velha!'); // Deu velha
      variaveis.resultado = "Deu velha!";
      console.log(simbolo);
    }
  }

  desenharSimbolo(id, estaX, xOuBola, simbolo) {
    variaveis.jogo[id] = variaveis.simbolos.opcoes[simbolo];
    variaveis.simbolos.index = [simbolo];
    this.setState({
      estaX: estaX,
      ['img' + id]: xOuBola,
    })
    this.verificarvencedor(simbolo);
  }

  render() {
    return (

      <View className="container" style={styles.container} >
        <Text className='titulo' style={styles.titulo}> JOGO DA VELHA </Text>
        <Text className='ganhador' style={styles.ganhador}> {variaveis.resultado} </Text>

        <View className="play-area" style={styles.playArea} >
          <View className="bloco_1" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '0')}>
              <Image
                id="0"
                source={{ uri: this.state.img0 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_2" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '1')}>
              <Image
                id="1"
                source={{ uri: this.state.img1 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_3" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '2')}>
              <Image
                id="2"
                source={{ uri: this.state.img2 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_4" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '3')}>
              <Image
                id="3"
                source={{ uri: this.state.img3 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_5" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '4')}>
              <Image
                id="4"
                source={{ uri: this.state.img4 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_6" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '5')}>
              <Image
                id="5"
                source={{ uri: this.state.img5 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_7" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '6')}>
              <Image
                id="6"
                source={{ uri: this.state.img6 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_8" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '7')}>
              <Image
                id="7"
                source={{ uri: this.state.img7 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

          <View className="bloco_9" style={styles.bloco} >
            <TouchableOpacity style={styles.botao} onPress={this.jogar.bind(this, '8')}>
              <Image
                id="8"
                source={{ uri: this.state.img8 }}
                style={styles.Imagem}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  "container": {
    "minHeight": "100vh",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#FBEAB0",
  },
  "playArea": {
    "display": "grid",
    "width": "300px",
    "height": "300px",
    "gridTemplateColumns": "auto auto auto"
  },
  "bloco": {
    "display": "flex",
    "width": "100px",
    "height": "100px",
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": "3rem",
    "fontWeight": "bold",
    "borderWidth": "1rem",
    "border": "10px ridge cyan",
    "backgroundColor": "lightcyan",
    "transition": "background 0.2s ease-in-out",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#640E36',
  },
  "botao": {
    "width": "100%",
    "height": "100%"
  },
  "Imagem": {
    "padding": "10",
    "margin": "5",
    "height": "100%",
    "width": "100%",
    "resizeMode": "stretch"
  },
  "titulo": {
    "padding": "30",
    "fontSize": "2rem",
    "fontWeight": "bold",
    "marginBottom": "5px",
    "justifyContent": "center",
    "color": "#FE006C",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
    textShadowColor: '#640E36',
  },
  "ganhador": {
    "padding": "30",
    "fontSize": "20px",
    "fontWeight": "bold",
    "marginBottom": "30px",
    "marginTop": "px",
    "justifyContent": "center",
    "color": "pink",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'black',
  }
});