import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';

import CommissionItem from './commission-item'

export default class Commission extends React.Component {

    constructor(props) {
        super(props);
        this.state = { salePrice: 0, agentFee: 0, gst: false };
        this.rawCommission = this.rawCommission.bind(this);
        this.commission = this.commission.bind(this);
        this.gst = this.gst.bind(this);

    }

    rawCommission() {
        return commissionValue = parseFloat(this.state.salePrice) * (parseFloat(this.state.agentFee) / 100);
    }

    commission() {
        const commissionValue = this.rawCommission();
        return this.state.gst ? commissionValue - (commissionValue / 10) : commissionValue;
    }

    gst() {
        const commissionValue = this.rawCommission();
        return commissionValue / 10;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.total}>{this.commission() ? ("$" + this.commission().toFixed(2)) : "$0"}</Text>
                    <Text style={styles.gst}>{this.commission() ? ("GST: $" + this.gst().toFixed(2)) : ""}</Text>
                </View>
                <View style={styles.itemcontainer}>
                    <CommissionItem value={(salePrice) => this.setState({ salePrice })} type="dollar" title="Sale price" />
                    <CommissionItem value={(agentFee) => this.setState({ agentFee })} type="percent" title="Agent fee" />
                    <View style={{
                        marginTop: 50, flex: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"
                    }}>
                        <Text style={{ fontSize: 15 }}>Agent fee includes GST</Text>
                        <Switch value={this.state.gst} onValueChange={(gst) => this.setState({ gst })} />
                    </View>
                </View>
            </View>
        );
    } dsadasdsa
}

const styles = StyleSheet.create({

    top: {
        marginBottom: 20,
        marginTop: 60,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    itemcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        minWidth: 300,
        backgroundColor: 'transparent',
        backgroundColor: 'white',
        padding: 20
    },
    total: {
        fontSize: 35,
        color: '#000000'
    },
    gst: {
        marginTop: 20,
        fontSize: 20,

    }
});