import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const hotdogEndpoint = "http://localhost:4000/hotdog";

function App() {
  const [image, setImage] = useState("");
  const [mensaje, setMensaje] = useState(3);

  const uploadHotDog = async () => {
    setMensaje(2);
    let response = await axios({
      method: "POST",
      url: hotdogEndpoint,
      data: { imageURL: image },
    });
    response.data ? setMensaje(1) : setMensaje(0);
  };

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <input
        value={image}
        type="text"
        onChange={(value) => setImage(value.target.value)}
      />
      <button onClick={() => uploadHotDog()}>Submit</button>
      {image && <img src={image} alt="Imagen" />}
      <hr />
      <div
        style={{
          backgroundColor:
            mensaje == 1 ? "#1dc23e" : mensaje == 0 ? "#de1212" : "",
        }}
      >
        {mensaje == 2
          ? "Cargando..."
          : mensaje == 1
          ? "Is a hot dog! 🎊 "
          : mensaje == 0
          ? "Is not a hot dog 😓 "
          : ""}
      </div>
    </div>
  );
}

export default App;
