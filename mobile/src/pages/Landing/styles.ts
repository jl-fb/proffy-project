import { StyleSheet } from "react-native";
import colors from '../../global/styles/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 40
  },
  banner: {
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    color: colors.textWhite,
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },
  button: {
    backgroundColor: '#333',
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.primaryLighter
  },
  buttonSecondary: {
    backgroundColor: colors.secondary
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: colors.textWhite,
    fontSize: 20
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: colors.textPurpleLight,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40
  }
})

export default styles