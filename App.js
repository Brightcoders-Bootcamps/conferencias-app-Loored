import 'react-native-gesture-handler';
import * as React from 'react';
import * as eva from '@eva-design/eva';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, Tab, TabView, Text, Icon, Layout, Button, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './app/styles/custom-theme.json';
import {useState} from 'react';

const PlusOutline = (props) => (
  <Icon name='plus-outline' {...props} />
);

const GradientCard = () => (
  <Layout>
    <Text>GradientCard</Text>
  </Layout>
);

export const TabLazyLoading = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <TabView
      tabBarStyle='red'
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={index => {
        return setSelectedIndex(index);
      }}>
      <Tab title='Upcoming'>
        <Layout style={styles.tabContainer}>
          <Text category='h5'>Upcoming</Text>
          <GradientCard />
          {/* <AppNavigator /> */}

        </Layout>
      </Tab>
      <Tab title='Completed'>
        <Layout style={styles.tabContainer}>
          <Text category='h5'>Completed</Text>
        </Layout>
      </Tab>
      <Tab icon={PlusOutline}>
        <Layout style={styles.tabContainer}>
          <Text category='h5'>Add a new conference</Text>
        </Layout>
      </Tab>
    </TabView>
  );
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <TabLazyLoading />
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  tabContainer: {
    height: 400,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '300'
  },
});
