class Pelicula{
	//1) constructor
	constructor(id, t, e, d, p, tr ){
		this.idPelicula = id
		this.Titulo = t
		this.Estreno = e
		this.Descripcion = d
		this.Poster = p
		this.Trailer = tr

		}
		//2) metodos de instancia
	Mostrar(){
		//1) capturar el elemento y guardarlo - clonarlo
		let elemento = document.querySelector(".pelicula").cloneNode(true)
		//console.log(elemento)

		//2) reemplazar/llenar con los datos de ESTA pelicula
		//buscar dentro del elemento el espacio donde quiero mostrar el titulo,h4, y quiero reemplazarlo. Manipulacion de contenido
		elemento.querySelector("h4").innerText = this.Titulo
		elemento.querySelector("p").innerText = this.Estreno
		elemento.querySelector("img").src= this.Poster

		//3) Generar el comportamiento de "reproductor" mediante un "closure" (capturar al hip y cuando le haga click, accion)
			elemento.querySelector("a").onclick  = (evento) => {
			evento.preventDefault() // se interrumpe el desplazamiento autom.

			//el THIS es la pelicula!
			console.log(this)

			if( window.auth2.currentUser.get().isSignedIn() ) { // del modulo 2, obtener la info del usuario, ver si esta logueado
			let reproductor = document.querySelector("#playMovie")

			reproductor.querySelector("#titulo").innerText = `${this.Titulo} (${this.Estreno})`
			reproductor.querySelector("#descripcion").innerText = this.Descripcion
			reproductor.querySelector("#imagen").src = this.Poster
			reproductor.querySelector("iframe").src = this.Trailer
		
			window.scroll ({			
			behavior : "smooth",
			top : reproductor.offsetTop
			})

			} else { //que se loguee el usuario
			auth2.signIn().then(function(){
				let usuario = auth2.currentUser.get().getBasicProfile()

				document.querySelector("#user-data").classList.remove("hide") //lo muestro
				document.querySelector("#user-data strong").innerText = usuario.getGivenName()
				document.querySelector("#user-data button").onclick = function(){
					auth2.signOut()
					document.querySelector("#user-data").classList.add("hide")
				}
			})

			}
		}
		//elemento.querySelector("a").onclick = Reproductor.bind(this)

		//4) desocultar el elemento clonado (removiendo la clase hide - manipulacion de estructura)
		elemento.classList.remove("hide")

		//5) anexar el elemento en el contenedor (padre)
		document.querySelector("#peliculas").appendChild(elemento)//anexar

			console.log(elemento)
}
	//3) metodos de clase o metodos estaticos
	static parse(data){
		console.log("Ahora debería convertir Object en Pelicula")
		data = JSON.parse(data)
	
		if (data instanceof Array){ // hay muchos objetos?
	/*VIEJA FORMA*/ /*
			let peliculas = new Array()
			data.forEach(item => {
				let pelicula = new Pelicula(
					item.idPelicula,
					item.Titulo,
					item.Estreno
					item.Descripcion
					item.Poster
					item.Trailer
					)
				productos.push( pelicula )
			})
			return peliculas
			*/
			/*NUEVA FORMA*/ //en vez de foreach uso MAP()
			return data.map(item => 
					new Pelicula(
					item.idPelicula,
					item.Titulo,
					item.Estreno,
					item.Descripcion,
					item.Poster,
					item.Trailer
				)
			)

		} else if( data instanceof Object){// hay un solo object?
			let producto = new Pelicula(
					data.idPelicula,
					data.Titulo,
					data.Estreno,
					data.Descripcion,
					data.Poster,
					data.Trailer
				)
			return pelicula
		}else {// no hay ningun object (no sirve)
			return null
		}

	}
}




