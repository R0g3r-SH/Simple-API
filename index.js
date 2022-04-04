const express = require('express');
const app = express();

app.use(express.json());

// para acceder a los datos http://localhost:3000/data

const sensor = [
    {"sensores": {

        "s1":{
            "sensor id" : "s1",
            "historial":{
                "id historial": "s1h",
                "h1":{
                    "medicion":24,
                    "fecha": "12/03/22",
                    "hora":"12/03/22",
                    "latitud":2,
                    "logitud":-100
                },
                "h2":{
                    "medicion":24,
                    "fecha": "12/03/22",
                    "latitud":2,
                    "logitud":-100
                },
                "h2":{
                    "medicion":24,
                    "fecha": "12/03/22",
                    "latitud":2,
                    "logitud":-100
                }
            }
        },
    
        "s2":{
            "sensor id" : "s2",
            
            "historial":{
                "id historial": "s2h",
                "h1":{
                    "medicion":24,
                    "fecha": "12/03/22",
                    "latitud":2,
                    "logitud":-100
                },
                "h2":{
                    "medicion":24,
                    "fecha": "12/03/22",
                    "latitud":2,
                    "logitud":-100
                }
            }
        }
    }
    }
]


app.get('/',(req, res) => {
    res.send("JS API")
});

app.get('/data',(req, res) => {
    res.send(sensor);
})

const port  = process.env.PORT || 3000;
app.listen(port,() => console.log(`Escuchando desde el puerto ${port}`))
