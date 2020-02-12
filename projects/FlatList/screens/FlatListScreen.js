import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { 
    View
 } from "native-base";

import Article from "../ui/flatlist-screen-ui/Article";
import ArticleCell from "../ui/flatlist-screen-ui/ArticleCell";
import FlatListDetailScreen from "./FlatListDetailScreen";

const RssUrl = "https://nakadoribooks.com/feed"

 export default class FlatListScreen extends Component {

    constructor() {
        super();

        this.state = {
            articleList: [],
            reloadCount: 0,
            loading: false
        }
    } 

    componentDidMount() {
        this._fetchData()
    }

    render() {
        return (
            <View style={styles.listView}>
                <FlatList
                    data={this.state.articleList}
                    extraData={this.state.reloadCount}
                    keyExtractor={item => item.link}
                    renderItem={(data) => {
                        return <ArticleCell 
                            data={data}
                            onSelectData={this._onSelectData}
                        ></ArticleCell>
                    }}>
                </FlatList>
                {this.state.loading &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
                }
            </View>
        )
    }


    //選択状態解除
    _deselectView() {
        let articleList = this.state.articleList
        for(let i = 0, to = articleList.length; i <  to; i++) {
            let article = articleList[i]
            article.selected = false
        }
        this._reloadListView()
    }

    //reloadData
    _reloadListView() {
        this.setState({
            reloadCount: this.state.reloadCount + 1
        })
    }

    //記事選択
    _onSelectData = (data) => {
        let article = data.item
        article.selected = true

        this._reloadListView()

        this.props.navigation.push('FlatListDetail', {
            article,
            onBack: () => {
                    this._deselectView()
            },
            // viewWillAppear的な、戻ってきたときに呼ばせる
            // passProps: {
            //     // article: article,
            //     onBack: () => {
            //         this._deselectView()
            //     }    
            // }
        })
    }

    //RSS取ってくる
    _fetchData() {
        this.setState({
            loading: true
        })
        fetch(RssUrl)
        .then((response) => response.text())
        .then((responseData) => {
            var articleList = Article.createFromRssString(responseData)
            this.setState({
                articleList: articleList,
                loading: false
            })
        })
        .done()
    }
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    loading: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        left: 0, right: 0, top: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})