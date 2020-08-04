import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';
import Main from './pages/main';

const Routes = createStackNavigator({
SignIn,
// SignUp,
Main
});

const RoutesCtn = createAppContainer(Routes);

export default RoutesCtn;