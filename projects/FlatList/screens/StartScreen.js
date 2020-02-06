import React, { Component } from "react";
import { 
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Switch,
  Thumbnail
 } from "native-base";

//リスト用データ（実際にはAPIから取得することになるかと）
const list = [
    { id: 1, text: 'user1', icon: 'user1@test.com', memo: 'memo1' },
    { id: 2, text: 'user2', icon: 'user2@test.com', memo: 'memo2' },
    { id: 3, text: 'user3', icon: 'user3@test.com', memo: 'memo3' },
    { id: 4, text: 'user4', icon: 'user4@test.com', memo: 'memo4' },
    { id: 5, text: 'user5', icon: 'user5@test.com', memo: 'memo5' },
]

type Props = {}
class StartScreen extends Component<Props> {

   render() {
     return (
       <Container>
        {/* <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>ノーマル</Title>
          </Body>
          <Right />
        </Header> */}
        <Content>
          <List>
            <ListItem first
              onPress={() => this.props.navigation.navigate('SectionList')}>
              <Left>
                <Text>セクションリスト</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.props.navigation.navigate('FlatList')}>
              <Left>
                <Text>FlatList</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Accessory:Checkmark</Text>
              </Left>
              <Right>
                <Icon type="Octicons" name="check" style={{fontSize: 20, color:'blue'}} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="wifi" />
                </Button>
              </Left>
              <Body>
                <Text>Icon</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require('../images/sample.png')} />
              </Left>
              <Body>
                <Text>Thumbnail</Text>
                <Text note numberOfLines={1}>サムネイルの説明</Text>
              </Body>
            </ListItem>
            <ListItem
                onPress={() => this.props.navigation.navigate('Detail')}>
              <Left>
                <Text>詳細</Text>
              </Left>
            </ListItem>
          </List>
        </Content>
       </Container>
     )
   }
 }

 export default StartScreen