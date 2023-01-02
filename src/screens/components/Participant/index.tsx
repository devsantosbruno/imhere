import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface participantProps {
  name: string;
  onRemove: () => void;
}

export function Participant(props: participantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>

      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Text style={styles.button.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
