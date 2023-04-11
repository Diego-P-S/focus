import React, {   useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Focus } from "../features/focus";
import   Timer  from "../features/timer";
import { FocusHistory } from "../features/focusHistory";
 
const Home = () => {

  const [currentSubject, setCurrentSubject] = useState(); //useState p/ declara as variáveis de estado
  const [history, setHistory] = useState([]); //Array para armazenar todo o historico da pratica

  return (
    <SafeAreaView style={styles.container}> 
      {!currentSubject ? ( // se nao existe variavel, rederiza
        <>
          <Focus addSubject={setCurrentSubject} /> {/* usuario define o tema*/}
          <FocusHistory history={history} /> 
        </>
      ) : (
        <Timer // se existir varial, Timer e rederizado e comeca o 
          focusSubject={currentSubject} // passa o nome da pratica para o Timer
          onTimerEnd={(subject) => { // chamada quando temporizador chega ao fim
            setHistory([...history, subject]); 
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"#98d9b6",
  },
});


export default Home;