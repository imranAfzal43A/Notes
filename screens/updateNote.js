import { ActivityIndicator, View } from "react-native";
import styles from "../components/style";
import Mybutton from "../components/button";
import Input from "../components/input";
import { useState } from "react";
import { db } from "../database/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
const UpdateNote = (props) => {
    const { id, title, desc } = props.route.params;
    const [titl, setTitle] = useState(title)
    const [des, setDesc] = useState(desc)
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const data = {
        title: title,
        desc: desc
    }
    const Delete = async () => {
        try {
            setLoading(true)
            await deleteDoc(doc(db, "notes", id));
            setLoading(false)
            props.navigation.goBack()
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }
    const Update = async () => {
        try {
            setLoading1(true)
            await updateDoc(doc(db, 'notes', id), data)
            setLoading1(false)
            props.navigation.goBack()
        } catch (e) {
            setLoading1(false)
            console.log(e)
        }
    }
    return (
        <View style={styles.container}>
            <Input title='Title' style={styles.textinput} onChangeText={(value) => setTitle(value)} value={titl} />
            <Input title='Description' style={styles.description2} onChangeText={(value) => setDesc(value)} value={des} multiline={true} />
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                {!loading ? <Mybutton title='Delete' style={styles.button2} onPress={() => Delete()} /> : <ActivityIndicator size='large' />}
                {!loading1 ? <Mybutton title='Update' style={styles.button2} onPress={() => Update()} /> : <ActivityIndicator size='large' />}
            </View>
        </View>
    )
}
export default UpdateNote;