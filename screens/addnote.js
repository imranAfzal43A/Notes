import { ActivityIndicator,View } from "react-native";
import { useState } from "react";
import styles from "../components/style";
import Mybutton from "../components/button";
import Input from "../components/input";
import { db } from "../database/firebase";
import { addDoc, collection } from 'firebase/firestore';
const AddNote = (props) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [loading, setLoading] = useState(false)
    const data = {
        title: title,
        desc: desc
    }
    const docRef = collection(db, 'notes')
    const Insert = async () => {
        try {
            if (title != '') {
                setLoading(true)
                await addDoc(docRef, data)
                setLoading(false)
                setDesc('')
                setTitle('')
                props.navigation.goBack()
            } else {
                setLoading(false)
                alert('Title must not be empty')
            }
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }
    return (
        <View style={styles.container}>
            <Input title='Title' style={styles.textinput} onChangeText={(value) => setTitle(value)} value={title} />
            <Input title='Description' style={styles.description} onChangeText={(value) => setDesc(value)} value={desc} multiline={true}  />
            {!loading ? 
            <Mybutton title='Save' style={styles.button} onPress={() => Insert()} />
                : <ActivityIndicator size='large' />
            }
        </View>
    )
}
export default AddNote;