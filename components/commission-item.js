import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class CommissionItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={itemstyles.icontainer}>
                <Text style={itemstyles.text}>{this.props.title}</Text>
                <View style={itemstyles.input}>
                    {this.props.type !== 'percent' ? <Text style={itemstyles.text}>$</Text> : null}
                    <TextInput
                        style={{ fontSize: 30 }}
                        placeholder="0"
                        onChangeText={val => this.props.value(val)}
                        keyboardType="numeric"
                    />
                    {this.props.type === 'percent' ? <Text style={itemstyles.text}>%</Text> : null}
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
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 25,
        fontFamily: 'sans-serif'
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});