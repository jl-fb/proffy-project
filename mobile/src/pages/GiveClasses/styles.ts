import { StyleSheet } from "react-native";
import colors from '../../global/styles/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 40
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.textWhite,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    color: colors.textPurpleLight,
    marginTop: 24,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: colors.secondary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  okButtonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
  }
})

export default styles