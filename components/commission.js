import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CommissionItem from './commission-item'

export default class Commission extends React.Component {

    constructor(props) {
        super(props);
        this.state = { salePrice: 0, agentFee: 0, total: 0 };
        this.commission = this.commission.bind(this);
    }

    commission() {
        return parseInt(this.state.salePrice) * (parseInt(this.state.agentFee) / 100);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Commissions</Text>
                <View style={styles.itemcontainer}>
                    <CommissionItem value={(salePrice) => this.setState({ salePrice })} type="dollar" title="Sale price" />
                    <CommissionItem value={(agentFee) => this.setState({ agentFee })} type="percent" title="Agent fee" />
                    <CommissionItem value={(advertising) => this.setState({ advertising })} type="dollar" title="Advertising" />
                </View>
                <Text style={styles.total}>Commission: ${this.commission()}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemcontainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        minWidth: 300

    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        marginTop: 60
    },
    total: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 60
    }
});