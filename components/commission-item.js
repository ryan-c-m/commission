import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input'

export default class CommissionItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val) {
        this.props.value(val);
        this.state.value = val;
    }

    render() {
        return (
            <View style={itemstyles.icontainer}>
                <Text style={itemstyles.text}>{this.props.title}</Text>
                <View style={itemstyles.input}>
                    {this.props.type !== 'percent' ? <Text style={this.state.value ? itemstyles.dollar : itemstyles.dollarNoValue}>$</Text> : null}
                    <TextInput
                        style={{
                            fontSize: 20,
                            color: '#000000',
                            margin: 5
                        }}
                        placeholder="0"
                        placeholderTextColor="#bbbbbb"
                        onChangeText={val => this.handleChange(val)}
                        keyboardType="phone-pad"
                        multiline={false}
                        underlineColorAndroid="transparent"
                        selectTextOnFocus
                    />
                    {this.props.type === 'percent' ? <Text style={this.state.value ?
                        itemstyles.dollar : itemstyles.dollarNoValue}>%</Text> : null}
                </View>
            </View>
        );
    }
}
const itemstyles = StyleSheet.create({
    icontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        maxHeight: 100
    },
    text: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        color: '#000000'
    },
    dollar: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        color: '#000000'
    },
    dollarNoValue: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        color: '#bbbbbb'
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
        borderBottomWidth: 1.5,
        borderColor: 'rgb(211,211,211)',
        backgroundColor: 'white',
        maxWidth: 120,
        padding: 5
    }
});