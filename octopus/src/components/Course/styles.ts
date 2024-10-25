import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 16,
      margin: 8,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      position: 'relative',
    },
    progressBadge: {
      position: 'absolute',
      top: 16,
      left: 16,
      backgroundColor: '#F0FF94',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      zIndex: 1,
    },
    progressText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#333',
    },
    imageContainer: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
      },
      moneyImage: {
        width: '100%',
        height: '100%',
      },
      bookmarkButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
      },
      infoContainer: {
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        paddingTop: 12,
      },
      title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
      },
      statsContainer: {
        flexDirection: 'row',
        gap: 16,
      },
      stat: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
      },
      statText: {
        color: '#666',
        fontSize: 14,
      },
    });