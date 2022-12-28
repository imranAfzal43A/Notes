import { ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity, Text } from "react-native";
import styles from "../components/style";
import { db } from "../database/firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
const ShowNote = (props) => {
    const [noteData, setNotedata] = useState([{ id: 1, title: 'Wellcome❤', desc: 'This note is from developer cannot be deleted😜' }])
    const [loading, setLoading] = useState(false)
    const docRef = collection(db, 'notes')
    const Update = async () => {
        try {
            setLoading(true)
           onSnapshot(docRef, (querySnapshot) => {
                setNotedata([{ id: 1, title: 'Wellcome❤', desc: 'This note is from developer cannot be deleted😜' }])
                querySnapshot.forEach((doc) => {
                    setNotedata((old) => [...old, { id: doc.id, title: doc.data().title, desc: doc.data().desc }])
                })
            })
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }
    useEffect(() => {
        Update()
    }, [])
    const UpdateScreen = (id, title, desc) => { props.navigation.navigate('Update Note', { id: id, title: title, desc: desc }) }
    const NoteCard = (props) => {
        const { id, title, desc } = props.item
        return (
            <TouchableOpacity style={styles.createPost} onPress={() => UpdateScreen(id, title, desc)}>
                <Text style={styles.simpletext}>{props.item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {!loading ? <FlatList
                data={noteData}
                renderItem={NoteCard}
            /> : <ActivityIndicator />
            }
        </SafeAreaView>
    )
}
export default ShowNote;