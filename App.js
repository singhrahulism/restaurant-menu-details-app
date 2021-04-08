import {createStackNavigator} from 'react-navigation-stack' ;
import {createAppContainer} from 'react-navigation' ;
import searchScreen from './src/screens/searchScreen' ;
import ParticularDetails from './src/components/particularDetails' ;
import HomeScreen from './src/vipulrishi/homePage' ;
import ExercisePage from './src/vipulrishi/exercisesPage' ;

const navigator = createStackNavigator(
  {
    Search : searchScreen,
    Particular : ParticularDetails,
    Home: HomeScreen,
    EPage : ExercisePage
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions:
    {
      title : 'Vipul Rishi Application',
      headerStyle:
      {
        backgroundColor: 'black'
      },
      headerTintColor: 'white'
    }
  }
)

export default createAppContainer(navigator) ;