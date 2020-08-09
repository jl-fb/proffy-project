import { StyleSheet } from 'react-native';
import colors from '../../global/styles/styles';


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhiteDark,
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: colors.textPurpleLight,
    fontFamily: 'Poppins_400Regular'
  },
  input: {
    height: 54,
    backgroundColor: colors.textWhite,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%'
  },
  submitButton: {
    backgroundColor: colors.secondary,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: colors.textWhite,
    fontSize: 16
  }
})

export default style