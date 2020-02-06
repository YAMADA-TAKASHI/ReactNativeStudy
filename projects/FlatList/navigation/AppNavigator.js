import { 
    createAppContainer,
    createBottomTabNavigator,
} from "react-navigation";

import { 
    createStackNavigator,
} from "react-navigation-stack";

import StartScreen from "../screens/StartScreen";
import DetailScreen from "../screens/DetailScreen";
import SectionListScreen from "../screens/SectionListScreen";    
import FlatListScreen from "../screens/FlatListScreen";
import FlatListDetailScreen from "../screens/FlatListDetailScreen";

//起動画面
const Start = {
    screen: StartScreen,
    navigationOptions : ({ navigation }) => {
        return {title: '起動画面'}
    },
}

//詳細
const Detail = {
    screen: DetailScreen,
    navigationOptions : ({ navigation }) => {
        return {title: '詳細画面'}
    }
}

//セクションリスト
const SectionList = {
    screen: SectionListScreen,
    navigationOptions : ({ navigation }) => {
        return {title: 'セクションリスト画面'}
    }
}

//FlatList
const FlatList = {
    screen: FlatListScreen,
    navigationOptions: ({ navigation }) => {
        return {title: 'FlatList画面'}
    }
}

//FlatList
const FlatListDetail = {
    screen: FlatListDetailScreen,
    navigationOptions: ({ navigation }) => {
        return {title: 'FlatList詳細画面'}
    }
}

const MainNavigation = createStackNavigator(
    {
        Start,
        Detail,
        SectionList,
        FlatList,
        FlatListDetail,
    },
    {
        mode: 'card',
        //headerMode: 'none,
        initialRouteName: 'Start',
    }
)

export default AppNavigator = createAppContainer(MainNavigation)

