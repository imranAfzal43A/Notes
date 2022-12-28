import { TouchableOpacity ,Text} from "react-native";
import styles from "./style";

const Mybutton=(props)=>{
 return(
    <TouchableOpacity style={props.style} onPress={props.onPress} >
        <Text style={styles.buttontxt}>{props.title}</Text>
    </TouchableOpacity>
 )
}

export default Mybutton;