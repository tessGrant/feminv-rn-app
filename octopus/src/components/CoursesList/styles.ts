import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    contentContainer: {
      flexGrow: 1,
      paddingHorizontal: 16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 32,
    },
    emptyText: {
      fontSize: 16,
      color: '#666',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 32,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
      },
      separator: {
        height: 16,
      },
      header: {
        height: 16,
      },
      footer: {
        height: 16,
      },
    });
    