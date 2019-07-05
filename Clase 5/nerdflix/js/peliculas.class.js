class Pelicula{
	//1) constructor
	constructor(t, e, d, p, tr ){
		//this.idPelicula = id
		this.titulo = t
		this.estreno = e
		this.descripcion = d
		this.poster = p
		this.trailer = tr
		}
		//2) metodos de instancia
	Mostrar(){
		//1) capturar el elemento y guardarlo - clonarlo
		let elemento = document.querySelector(".pelicula").cloneNode(true)
		console.log(elemento)

		//2) reemplazar/llenar con los datos de ESTA pelicula
		//buscar dentro del elemento el espacio donde quiero mostrar el titulo,h4, y quiero reemplazarlo. Manipulacion de contenido
		elemento.querySelector("h4").innerText = this.titulo
		elemento.querySelector("p").innerText = this.estreno
		elemento.querySelector("img").src= this.poster

		//3) desocultar el elemento clonado (removiendo la clase hide - manipulacion de estructura)
		elemento.classList.remove("hide")

		//4) anexar el elemento en el contenedor (padre)
		document.querySelector("#peliculas").appendChild(elemento)//anexar

			console.log(elemento)

	}
}


