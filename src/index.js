import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import Result from './components/result'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          result: null,
          operator: null
        }

        this.atribuiValor = this.atribuiValor.bind(this)
        this.calcula = this.calcula.bind(this)
    }
    
    atribuiValor (n) {
        const valorAtual = this.state.result 

        if(n === '+' || n === '-' || n === 'x' || n === '/'){
            this.setState({
                operator: n
            })
        }

        if( valorAtual === null ) {
            this.setState({
                result: n
            })
            return
        }
        this.setState({
            result: valorAtual + n
        })
    }

    clearValue() {
        this.setState({
            result: null
        })

    }

    calcula () {
        const { result, operator } = this.state

        const posicaoInicial = result.indexOf(operator)
        const valorAntesDoOperador = result.substring(0, posicaoInicial)
        const valorDepoisDoOperador = result.substring(posicaoInicial + 1)
        let valor = 0
        
        switch (operator){
            case '+':
                valor = parseInt(valorAntesDoOperador) + parseInt(valorDepoisDoOperador)
                break
            case '-':
                valor = parseInt(valorAntesDoOperador) - parseInt(valorDepoisDoOperador)
                break
            case 'x':
                valor = parseInt(valorAntesDoOperador) * parseInt(valorDepoisDoOperador)
                break
            case '/':
                valor = parseInt(valorAntesDoOperador) / parseInt(valorDepoisDoOperador)
                break
        }

        this.setState({
            result: valor
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <Result
                    result={this.state.result}
                />
                <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('7')}>
                            <Text style={styles.buttonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('8')}>
                            <Text style={styles.buttonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('9')}>
                            <Text style={styles.buttonText}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOperation} onPress={() => this.atribuiValor('/')}>
                            <Text style={styles.buttonText}>÷</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('4')}>
                            <Text style={styles.buttonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('5')}>
                            <Text style={styles.buttonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('6')}>
                            <Text style={styles.buttonText}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOperation} onPress={() => this.atribuiValor('x')}>
                            <Text style={styles.buttonText}>x</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('1')}>
                            <Text style={styles.buttonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('2')}>
                            <Text style={styles.buttonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('3')}>
                            <Text style={styles.buttonText}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOperation} onPress={() => this.atribuiValor('-')}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.atribuiValor('0')}>
                            <Text style={styles.buttonText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOperation} onPress={() => this.clearValue()}>
                            <Text style={styles.buttonText}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOperation} onPress={() => this.calcula()}>
                            <Text style={styles.buttonText}>=</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOperation} onPress={() => this.atribuiValor('+')}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E7E8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1
    },
    bodyContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonOperation: {
        minHeight: 80,
        minWidth: 70,
        backgroundColor: '#58595B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 5
    },
    buttonNumber: {
        minHeight: 80,
        minWidth: 70,
        backgroundColor: '#FF6B00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default App