// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

// type Task = {
//   id: number;
//   title: string;
//   completed: boolean;
//   isEditing: boolean;
// };

// const ProfileScreen = () => {
//   const [task, setTask] = useState<string>(''); 
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const addTask = () => {
//     if (task.length > 0) {
//       setTasks([...tasks, { id: tasks.length + 1, title: task, completed: false, isEditing: false }]);
//       setTask('');
//     }
//   };

//   const removeTask = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const toggleTaskCompletion = (id: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const enableEditing = (id: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, isEditing: true } : task
//       )
//     );
//   };

//   const editTask = (id: number, newTitle: string) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, title: newTitle, isEditing: false } : task
//       )
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>To-Do List</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Add a new task"
//           value={task}
//           onChangeText={(text) => setTask(text)}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addTask}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.taskContainer}>
//             {item.isEditing ? (
//               <TextInput
//                 style={styles.inputInline}
//                 value={item.title}
//                 onChangeText={(newText) => editTask(item.id, newText)}
//                 onSubmitEditing={() => editTask(item.id, item.title)}
//               />
//             ) : (
//               <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
//                 <Text style={[styles.taskText, item.completed && styles.completedTask]}>
//                   {item.title}
//                 </Text>
//               </TouchableOpacity>
//             )}
//             <View style={styles.actionButtons}>
//               {!item.isEditing && (
//                 <TouchableOpacity onPress={() => enableEditing(item.id)}>
//                   <Text style={styles.editButton}>Edit</Text>
//                 </TouchableOpacity>
//               )}
//               <TouchableOpacity onPress={() => removeTask(item.id)}>
//                 <Text style={styles.removeButton}>Remove</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//   },
//   inputInline: {
//     flex: 1,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     padding: 5,
//     fontSize: 18,
//   },
//   addButton: {
//     backgroundColor: '#5a67d8',
//     padding: 10,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   taskContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//   },
//   taskText: {
//     fontSize: 18,
//   },
//   completedTask: {
//     textDecorationLine: 'line-through',
//     color: 'gray',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   editButton: {
//     color: 'blue',
//     marginRight: 10,
//   },
//   removeButton: {
//     color: 'red',
//   },
// });

// export default ProfileScreen;
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';

interface toDo {
  id: number;
  title: string;
  statue: boolean;
}

const ProfileScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [toDo, setToDo] = useState<toDo[]>([]);
  const [editId, setEditId] = useState<number>(0);
  const [editTitle, setEditTitle] = useState<string>('');

  const handleAdd = () => {
    if (title.trim() === '') {
      return;
    }

    const newToDo = {
      id: Date.now(),
      title: title,
      statue: false,
    };

    setToDo(prev => [...prev, newToDo]);

    setTitle('');
  };

  const handleDelete = (deleteId: number) => {
    if (deleteId !== 0) {
      const updateToDo = toDo.filter(item => item.id !== deleteId);
      setToDo(updateToDo);
    }
    return;
  };

  const handleEdit = () => {
    if (editTitle.trim() === '') {
      return;
    } else {
      setToDo(prev =>
        prev.map(item =>
          item.id === editId ? { ...item, title: editTitle } : item,
        ),
      );

      setEditId(0);
      setEditTitle('');
    }
  };

  const handleStartEdit = (editId: number, currentTitle: string) => {
    setEditId(editId);
    setEditTitle(currentTitle);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' }}>
        To-Do List
      </Text>

      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: '#ccc',
            backgroundColor: 'white',
            color: '#333',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 8,
            fontSize: 16,
          }}
          placeholder="Add a new task"
          value={title}
          onChangeText={setTitle}
        />
        <Pressable
          style={{
            marginLeft: 10,
            backgroundColor: '#28a745',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            justifyContent: 'center',
          }}
          onPress={handleAdd}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={toDo}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 15,
              marginBottom: 10,
              borderRadius: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
              elevation: 2,
            }}>
            {item.id === editId ? (
              <TextInput
                style={{
                  flex: 1,
                  borderColor: '#ccc',
                  color: '#333',
                  backgroundColor: 'white',
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 8,
                  fontSize: 16,
                }}
                value={editTitle}
                onChangeText={setEditTitle}
              />
            ) : (
              <Text style={{ color: '#333', fontSize: 18, flex: 1 }}>{item.title}</Text>
            )}

            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              {item.id === editId ? (
                <Pressable
                  style={{
                    backgroundColor: '#007bff',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 8,
                    marginRight: 8,
                  }}
                  onPress={handleEdit}>
                  <Text style={{ color: 'white', fontSize: 16 }}>Save</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={{
                    backgroundColor: '#ffc107',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 8,
                    marginRight: 8,
                  }}
                  onPress={() => handleStartEdit(item.id, item.title)}>
                  <Text style={{ color: 'white', fontSize: 16 }}>Edit</Text>
                </Pressable>
              )}
              <Pressable
                style={{
                  backgroundColor: '#dc3545',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 8,
                }}
                onPress={() => handleDelete(item.id)}>
                <Text style={{ color: 'white', fontSize: 16 }}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProfileScreen;