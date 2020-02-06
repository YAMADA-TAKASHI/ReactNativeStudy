import React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateName } from "../actions/userAction";

class SettingsScreen extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings</Text>
                <Text>{this.props.user.name}</Text>
                <Button
                    title='名前の変更'
                    onPress={()=>this.props.updateName('suzuki@settings')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => {
    return {
        updateName: (name) => dispatch(updateName(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsScreen);
