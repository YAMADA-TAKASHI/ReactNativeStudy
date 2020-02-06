import { 
    createAppContainer,
    createBottomTabNavigator,
} from "react-navigation";

import { 
    createStackNavigator,
    TransitionPresets,
} from "react-navigation-stack";

import MainScreen from "../screens/MainScreen";
import FlexDirectionBasics from "../screens/views/FlexDirectionBasics";
import JustifyContentBasics from '../screens/views/JustifyContentBasics';
import AlignItemsBasics from '../screens/views/AlignItemsBasics';

//起動画面
const Main = {
    screen: MainScreen,
    navigationOptions : ({ navigation }) => {
        return {title: '__Template__'}
    },
}

const MainNavigation = createStackNavigator(
    {
        Main,
        FlexDirectionBasics,
        JustifyContentBasics,
        AlignItemsBasics,
    },
    {
        mode: 'card',
        //headerMode: 'none',
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS,
        }
    }
)

export default AppNavigator = createAppContainer(MainNavigation)

