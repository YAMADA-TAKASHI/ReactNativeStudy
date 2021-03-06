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
 } from "native-base";

type Props = {};
class SectionListScreen extends Component {
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
                        <Title>セクション</Title>
                    </Body>
                    <Right />
                </Header> */}
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>A</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Apple</Text>
                            </Left>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>airbnb</Text>
                            </Left>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>G</Text>
                        </ListItem>
                        <ListItem last>
                            <Left>
                                <Text>Google</Text>
                            </Left>
                        </ListItem>
                        <ListItem itemDivider style={{height: 500}} />
                    </List>
                </Content>
            </Container>
        );
    }
}
export default SectionListScreen