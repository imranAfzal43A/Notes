import { TextInput } from "react-native";
const Input = (props) => {
    return (
         <TextInput placeholder={props.title} secureTextEntry={props.secure} onChangeText={props.onChangeText} style={props.style} value={props.value} multiline={props.multiline}/>
    )
}
export default Input;