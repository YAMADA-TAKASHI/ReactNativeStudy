import { 
    createAppContainer,
    createBottomTabNavigator,
} from "react-navigation";

import { 
    createStackNavigator,
} from "react-navigation-stack";

import MainScreen from "../screens/MainScreen";

//起動画面
const Main = {
    screen: MainScreen,
    navigationOptions : ({ navigation }) => {
        return {title: 'QR-Barcode'}
    },
}

const MainNavigation = createStackNavigator(
    {
        Main,
    },
    {
        mode: 'card',
        //headerMode: 'none',
        initialRouteName: 'Main',
    }
)

export default AppNavigator = createAppContainer(MainNavigation)

