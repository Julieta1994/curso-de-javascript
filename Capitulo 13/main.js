const getInfo = async() => {
	let aprobados = document.querySelector(".num-aprobados");
	let desaprobados = document.querySelector(".num-desaprobados")
	try{
		let resultado = await axios("info.txt");
		aprobados.innerHTML = resultado.data.aprobados;
		desaprobados.innerHTML = resultado.data.desaprobados;

	} catch(e){
		aprobados.innerHTML = "La API dio error";
		desaprobados.innerHTML = "La API dio error";
	}
}

document.getElementById("getInfo").addEventListener("click",getInfo)
