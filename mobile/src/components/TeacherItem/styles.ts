import { StyleSheet } from "react-native";
import colors from "../../global/styles/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textWhite,
    borderWidth: 1,
    borderColor: colors.listBorder,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: colors.inactiveTab
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    color: colors.activeTabText,
    fontSize: 20,
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: colors.listSubject,
    marginTop: 4
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: colors.listSubject
  },
  footer: {
    backgroundColor: colors.inactiveTab,
    alignItems: 'center',
    padding: 24,
    marginTop: 24
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: colors.listSubject
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: colors.primary,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoriteButton: {
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 8
  },
  favorited: {
    backgroundColor: colors.favorited
  },
  contactButton: {
    backgroundColor: colors.secondary,
    flex: 1,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 8
  },
  contactButtonText: {
    color: colors.textWhite,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16
  }


})

export default styles