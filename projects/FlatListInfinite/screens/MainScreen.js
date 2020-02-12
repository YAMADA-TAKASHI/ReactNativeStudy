import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

export default class App extends React.Component {

  state = {
    data: [],
    page: 0,
    last_page: 1,
    max_page: 100,
    animating_status: true,
    isRefreshing: false, //for pull to refresh
  }

  componentDidMount() {
    this.getDataFromLaravel();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <FlatList
          data={this.state.data}
          extraData={this.state.data}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          onEndReached={() => this.getDataFromLaravel()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => <ActivityIndicator size='large' animating={this.state.animating_status} />}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={item.id + ' ' + item.name}
              subtitle={item.email}
              hideChevron
              onPress={() => alert(item.id)}
              roundAvatar
              avatar={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
            />
          )}
        />
      </SafeAreaView>
    );
  }

  getDataFromLaravel = () => {

    if (this.state.page < this.state.last_page && this.state.page < this.state.max_page) {

      const newPage = this.state.page + 1;

      axios
        .get(`http://localhost:8000/api/users?page=${newPage}`)
        .then(res => {
          this.setState({
            data: [...this.state.data, ...res.data.data],
            page: newPage,
            last_page: res.data['last_page'],
            isRefreshing: false
          });
        })
        .catch(error => {
          console.log(error);
        })

    } else {
      this.setState({
        animating_status: false,
      });
      alert('これ以上読み込めません。');
    }
  }

  onRefresh() {
    this.state.page = 0;
    this.state.last_page = 1;
    this.state.data = [];
    
    this.getDataFromLaravel(); 
  }
}