class Producto{
	//1) constructor
	constructor(id, n, p, s, c, i, m, pr, d = false ){
		this.idProducto = id
		this.Nombre = n
		this.Precio = p
		this.Stock = s
		this.Categoria = c
		this.Imagen = i
		this.Marca = m
		this.Presentacion = pr 
		this.Disponible = d
	}

	//2) metodos de instancia
	Mostrar(neto = true){
				let ficha = document.createElement("ul")

				let contenido =
								`<li>Nombre: ${this.Nombre}</li>
								<li>Precio: ARS${neto ? this.Precio : this.precioBruto}</li>
								<li>Stock: ${this.Stock} unid.</li>
								<li>Disponible: ${this.Disponible ? "SI" : "NO"} </li>
								`

				ficha.innerHTML = contenido		

				document.body.appendChild( ficha )
	}
	precioBruto(){
		return (this.Precio / 1.21).toFixed(2)

	}
	//3) metodos de clase o metodos estaticos
	static parse(data){
		console.log("Ahora debería convertir Object en Producto")
		data = JSON.parse(data)

		if (data instanceof Array){ // hay muchos objetos?

			let productos = new Array()
			data.forEach(item => {
				let producto = new Producto(

					item.idProducto,
					item.Nombre,
					item.Precio,
					item.Stock,
					item.Categoria,
					item.Imagen,
					item.Marca,
					item.Presentacion
					)

				productos.push( producto )

		})
			return productos

		} else if( data instanceof Object){// hay un solo object?
			let producto = new Producto(
					data.Producto,
					data.Nombre,
					data.Precio,
					data.Stock,
					data.Categoria,
					data.Imagen,
					data.Marca,
					data.Presentacion
				)
			return producto
		}else {// no hay ningun object (no sirve)
			return null
		}

	}
}

//////



