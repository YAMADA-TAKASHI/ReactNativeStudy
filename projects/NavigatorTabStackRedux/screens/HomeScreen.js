import React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateName } from "../actions/userAction";

class HomeScreen extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                    title='Link to About'
                    onPress={() => this.props.navigation.navigate('About')}
                />
                <Text>{this.props.user.name}</Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
