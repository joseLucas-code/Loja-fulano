import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

type ButtonProps = PressableProps & React.PropsWithChildren;

const Button = React.forwardRef<View, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Pressable {...props} ref={ref} style={styles.btn}>
        <Text style={{ color: 'white', fontSize: 18 }}>{children}</Text>
      </Pressable>
    );
  }
);

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#8b5cf6',
    borderRadius: 8,
  },
});
