const materiasHTML = document.querySelector(".materias");

const materias = [
	{
		nombre: "Fisica 1",
		nota: 7
	},{
		nombre: "Calculo 2",
		nota: 6
	},
	{
		nombre: "Matematica 3",
		nota: 2
	},
	{
		nombre: "Programacion 4",
		nota: 9
	},
	{
		nombre: "Programacion 5",
		nota: 4
	}
];

const obtenerMateria = (id)=> {
	return new Promise((resolve,reject)=>{
		materia = materias[id];
		if (materia == undefined) reject("La materia no existe");
		else setTimeout(()=>{resolve(materia)},Math.random()*500);
	
		})
};


const devolverMaterias = async ()=>{
	let materia = [];
	for (var i = 0 ; i < materias.length; i++) {
		materia[i] = await obtenerMateria(i);
		let newHTMLCode =
			`<div class="materia">
				<div class="nombre">${materia[i].nombre}</div>
				<div class="nota">${materia[i].nota}</div>
			</div>`;
		materiasHTML.innerHTML += newHTMLCode;
	}
}

devolverMaterias();