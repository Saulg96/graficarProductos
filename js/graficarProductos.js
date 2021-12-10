var valores = [];

var categorias= [
    {
      "nombre": "Comida",
      "producto": [
          {
              "nombre": "Arroz Chino",
              "marca":[
                  {"nombre": "Hua Wen",
                    "ventas":[{"Enero": 500}, {"Febrero": 200}, {"Marzo": 600}, {"Abril": 400}]
                  },
                  {"nombre": "Zai Jain",
                    "ventas":[{"Enero": 300}, {"Febrero": 600}, {"Marzo": 100}, {"Abril": 500}]
                  }
              ]
          },
          {
                "nombre": "Hamburguesa",
                "marca":[
                    {"nombre": "Burger Kong",
                      "ventas":[{"Enero": 200}, {"Febrero": 500}, {"Marzo": 600}, {"Abril": 200}]
                    },
                    {"nombre": "Swallow",
                      "ventas":[{"Enero": 150}, {"Febrero": 300}, {"Marzo": 200}, {"Abril": 400}]
                    }
                ]
          },
          {
                "nombre": "Plátano Frito",
                "marca":[
                    {"nombre": "Especial",
                      "ventas":[{"Enero": 100}, {"Febrero": 50}, {"Marzo": 600}, {"Abril": 200}]
                    },
                    {"nombre": "Furious",
                      "ventas":[{"Enero": 400}, {"Febrero": 600}, {"Marzo": 100}, {"Abril": 150}]
                    }
                ]
          }
      ]
    },

    {
      "nombre": "Vestuario",
      "producto": [
          {
              "nombre": "Pantalon",
              "marca":[
                  {"nombre": "Van Heusen",
                    "ventas":[{"Enero": 120}, {"Febrero": 400}, {"Marzo": 200}, {"Abril": 500}]
                  },
                  {"nombre": "Tommi",
                    "ventas":[{"Enero": 600}, {"Febrero": 300}, {"Marzo": 200}, {"Abril": 100}]
                }
              ]
          },
          {
                "nombre": "Sueter",
                "marca":[
                    {"nombre": "Tayland",
                      "ventas":[{"Enero": 50}, {"Febrero": 140}, {"Marzo": 600}, {"Abril": 200}]
                     },
                    {"nombre": "Dinamy",
                      "ventas":[{"Enero": 300}, {"Febrero": 500}, {"Marzo": 200}, {"Abril": 400}]
                    }
                ]
          },
          {
                "nombre": "Camisa",
                "marca":[
                    {"nombre": "Nike",
                      "ventas":[{"Enero": 170}, {"Febrero": 500}, {"Marzo": 600}, {"Abril": 200}]
                    },
                    {"nombre": "Fortrend",
                      "ventas":[{"Enero": 100}, {"Febrero": 300}, {"Marzo": 400}, {"Abril": 50}]
                    }
                ]
          }
      ]
    },

    {
      "nombre": "Accesorio",
      "producto": [
          {
              "nombre": "Pulsera",
              "marca":[
                  {"nombre": "Alistone",
                    "ventas":[{"Enero": 300}, {"Febrero": 500}, {"Marzo": 200}, {"Abril": 600}]
                  },
                  {"nombre": "Cascade",
                    "ventas":[{"Enero": 200}, {"Febrero": 400}, {"Marzo": 170}, {"Abril": 20}]
                  }
              ]
          },
          {
                "nombre": "Cartera",
                "marca":[
                    {"nombre": "Comil",
                      "ventas":[{"Enero": 50}, {"Febrero": 600}, {"Marzo": 175}, {"Abril": 200}]
                     },
                    {"nombre": "Dinampre",
                      "ventas":[{"Enero": 600}, {"Febrero": 300}, {"Marzo": 400}, {"Abril": 450}]
                    }
                ]
          },
          {
                "nombre": "Reloj",
                "marca":[
                    {"nombre": "Esquech",
                      "ventas":[{"Enero": 600}, {"Febrero": 400}, {"Marzo": 500}, {"Abril": 400}]
                    },
                    {"nombre": "Fulminant",
                      "ventas":[{"Enero": 200}, {"Febrero": 600}, {"Marzo": 300}, {"Abril": 400}]
                    }
                ]
          }
      ]
    }
  ];


//llenado de combobox de acuerdo a los JSON previamente creados
$(document).ready(
  function(){
    for (var i = 0; i < categorias.length; i++)
      $("#categoría").append(`<option value=${categorias[i].nombre}>${categorias[i].nombre}</option>`)
    generarProducto();
    generarMarca();
  }
)

//Esta función genera la lista de items para el combobox de Producto
function generarProducto(){
  let indice;
      $("#producto").html("");
      for (var i = 0; i < categorias.length; i++) {
         if (categorias[i].nombre == $("#categoría option:selected").text())
           indice = i;
      }
      for (var i = 0; i < categorias[indice].producto.length; i++)
          $("#producto").append(`<option value=${categorias[indice].producto[i].nombre}>${categorias[indice].producto[i].nombre}</option>`)
}

//Esta función genera la lista de items para el combobox de Marca
function generarMarca(){
  let indice;
  let indice2;
      $("#marca").html("");
      for (var i = 0; i < categorias.length; i++) {
         if (categorias[i].nombre == $("#categoría option:selected").text())
           indice = i;
      }

      for (var j = 0; j < categorias[indice].producto.length; j++) {
         if (categorias[indice].producto[j].nombre == $("#producto option:selected").text())
           indice2 = j;
      }
      for (var k = 0; k < categorias[indice].producto[indice2].marca.length; k++)
          $("#marca").append(`<option value=${k}>${categorias[indice].producto[indice2].marca[k].nombre}</option>`)
      valores = categorias[indice].producto[indice2].marca[$("#marca option:selected").val()];
      console.log(valores);
      graficar();
}

//Cuando se cambia el valor del combobox de Categoría, entonces se llama a las funciones respectivas para generar los productos y marcas correspondientes
  $(document).on('change', '#categoría', function(event) {
          //console.log($("#categoría option:selected").text());
          generarProducto();
          generarMarca();
        });

//Cuando se cambia el valor del combobox de Producto, entonces se llama a la función respectiva para generar las marcas correspondientes
    $(document).on('change', '#producto', function(event) {
          generarMarca();
        });

//Cuando se cambia el valor del combobox de Marca, se obtiene el dataset necesario para graficar
    $(document).on('change', '#marca', function(event) {
      let indice;
      let indice2;

      for (var i = 0; i < categorias.length; i++) {
         if (categorias[i].nombre == $("#categoría option:selected").text())
           indice = i;
      }

      for (var j = 0; j < categorias[indice].producto.length; j++) {
         if (categorias[indice].producto[j].nombre == $("#producto option:selected").text())
           indice2 = j;
      }
      for (var k = 0; k < categorias[indice].producto[indice2].marca.length; k++){
          if (categorias[indice].producto[indice2].marca[k].nombre == $("#marca option:selected").text())
           valores = categorias[indice].producto[indice2].marca[k]; //dataset
      }
      graficar();
    });

//Función para la creación de la gráfica de barras
function graficar(){
	let yValues = [];
	let xValues = ["January", "February", "March", "April"];
    yValues.push(valores.ventas[0].Enero);
    yValues.push(valores.ventas[1].Febrero);
    yValues.push(valores.ventas[2].Marzo);
    yValues.push(valores.ventas[3].Abril);

	var data = [{
	  x:xValues,
	  y:yValues,
	  type:"bar"
	}];

	var layout = {
		title:"Sales by Month for:",
		  xaxis: {
		  	title: 'Meses',
		  	tickfont: {
		      size: 14,
		      color: 'rgb(107, 107, 107)'
	    	}},
	  yaxis: {
	    title: 'Ventas',
	    titlefont: {
	      size: 16,
	      color: 'rgb(107, 107, 107)'
	    },
	    tickfont: {
	      size: 14,
	      color: 'rgb(107, 107, 107)'
	    }
	  }
	};
	Plotly.newPlot("myChart", data, layout);
}