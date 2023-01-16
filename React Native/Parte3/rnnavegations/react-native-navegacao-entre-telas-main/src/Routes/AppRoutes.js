import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProdutorRoute from './ProdutorRoute';
import MelhoresProdutoresRoute from './MelhoresProdutoresRoute';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRoute} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRoute}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
