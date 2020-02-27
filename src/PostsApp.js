import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Posts from './screens/Posts';
import PostDetails from './screens/PostDetails';

const AppNavigator = createStackNavigator({
  Posts,
  PostDetails,
});

export default createAppContainer(AppNavigator);
