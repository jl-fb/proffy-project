import { StyleSheet } from 'react-native';
import colors from '../../global/styles/styles';


const style = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.primary,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.textWhite,
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

})
export default style