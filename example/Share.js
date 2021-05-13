import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ShareMenuReactView } from 'react-native-share-menu';

const Button = ({ onPress, title, style }) => (
  <Pressable onPress={onPress}>
    <Text style={[{ fontSize: 16, margin: 16 }, style]}>{title}</Text>
  </Pressable>
)

const Share = () => {
  const [sharedData, setSharedData] = useState('');
  const [sharedMimeType, setSharedMimeType] = useState('');

  useEffect(() => {
    ShareMenuReactView.data().then(({ mimeType, data }) => {
      setSharedData(data);
      setSharedMimeType(mimeType);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="Dismiss"
          onPress={() => {
            ShareMenuReactView.dismissExtension();
          }}
          style={styles.destructive}
        />
        <Button
          title="Continue In App"
          onPress={() => {
            ShareMenuReactView.continueInApp();
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Text>Data: {JSON.stringify(sharedData)}{`\n\n`}MimeTypes: {JSON.stringify(sharedMimeType)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  destructive: {
    color: 'red',
  }
});

export default Share;
