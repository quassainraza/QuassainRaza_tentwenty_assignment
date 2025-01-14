import { StyleSheet, SafeAreaView } from 'react-native';
import { BG_DARK } from '@/constants/Colors';
import { Text } from 'react-native-paper';
import { APP_MAX_WIDTH } from '@/constants/Theme';

const Screen2 = (props: any) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: BG_DARK,
        height: '100%',
      }}>
      <Text>Screen2</Text>
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: APP_MAX_WIDTH,
    flexDirection: 'column',
  },
});
