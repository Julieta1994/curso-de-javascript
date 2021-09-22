/*//EJ 1 - SI NOMBRE ES IGUAL A PEDRO, DEVUELVE EL NOMBRE, SI ES != RETORNA 'NO ES PEDRO'

let nombre  = 'pedroaaa';

const promesa = new Promise((resolve,reject) => {
	if(nombre !== "pedro") reject ("lo siento el nombre no es pedro")
		else resolve(nombre)
});

promesa.then((resultado) => {
	console.log(resultado)
}).catch((e)=> {
	console.log(e)
})
*/

/*//EJ 2 - UN ARRAY, LO TRANSFORMAMOS A OBJETO Y OBTENEMOS INFO DE NOMBRE + IG / SI NO TIENE, DEVUELVE ' NO TIENE NOMBRE', 'NO TIENE IG'


class Persona {
	constructor(nombre,instagram){
		this.nombre = nombre;
		this.instagram = instagram;
	}
};



const data = [
	["Lucas","@soydalt"],
	["Juli","@julip"],
	["Beto"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
	personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=> {
	return new Promise((resolve,reject) =>{
		if (personas[id].nombre == undefined) reject("no encontramos a la persona");
			else {resolve (personas[id])}
	})
};

const obtenerInstagram = (id) => {
	return new Promise((resolve,reject) => {
		if (personas[id].instagram == undefined) reject ("no encontramos el ig"); 
			else {resolve(personas[id].instagram)}
	})
};

let id = 2;

obtenerPersona(id).then((persona) => {
	console.log(persona.nombre);
	return obtenerInstagram(id)
}).then((instagram) => {
	console.log(instagram)
}).catch((e) => {
	console.log(e);
})

*/

//ASYNC &AWAIT

const hola = async () =>{
	let hola = await console.log('hola');
	let queTal = await console.log("que tal");
};

hola();