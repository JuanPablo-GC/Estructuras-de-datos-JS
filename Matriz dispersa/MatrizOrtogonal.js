
class Nodo{
    constructor(dato){
        this.dato = dato
        //Coordenadas
        this.posVertical = null
        this.posHorizontal =null
        //Apuntadores
        this.derecha = null
        this.izquierda = null
        this.arriba = null
        this.abajo = null
    }
        
}
    

class MatrizOrtogonal{
    constructor(){
        //Creamos el nodo raiz en 0,0
        this.raiz = new Nodo()
        this.raiz.posVertical = 0
        this.raiz.posHorizontal = 0
    }
        

    crearIndiceVertical(pos){
        // recorrer todos los nodos de manera vertical
        // creamos un temporal
        let tmp = this.raiz
        while (tmp != null){
            // no existe el indice; solo hay índices menores
            if (tmp.abajo == null && tmp.posVertical < pos){
                // ya no hay más nodos en vertical
                // se inserta al final
                let nuevo = new Nodo()
                nuevo.posHorizontal = 0
                nuevo.posVertical = pos
                nuevo.arriba = tmp
                tmp.abajo = nuevo
                return tmp.abajo
            }
                
            
            // indice actual es igual a el nuevo índice
            if (tmp.posVertical == pos){
                // no hacer nada
                return tmp
            }
                

            // indice actual es menor, pero el siguiente es mayor
            if (tmp.posVertical < pos && tmp.abajo.posVertical > pos){
                // insertar un nodo en medio del nodo actual y del nodo siguiente
                let nuevo = new Nodo()
                nuevo.posHorizontal = 0
                nuevo.posVertical = pos

                // asignar abajo y arriba para el nodo nuevo
                nuevo.abajo = tmp.abajo
                nuevo.arriba = tmp
                
                tmp.abajo.arriba = nuevo // reasignar arriba para el nodo de abajo
                tmp.abajo = nuevo // reasignar abajo para el nodo actual
                return tmp.abajo
            }
                

            // pasar al siguiente nodo abajo si no hubo un return
            tmp = tmp.abajo
        }
            
    }

    crearIndiceHorizontal(pos){
        // recorrer todos los nodos de manera horizontal
        let tmp = this.raiz
        while (tmp != null){
            // no existe el indice; solo hay índices menores
            if (tmp.derecha == null && tmp.posHorizontal < pos){
                // ya no hay más nodos en horizontal
                // se inserta al final
                let nuevo = new Nodo()
                nuevo.posHorizontal = pos
                nuevo.posVertical = 0
                nuevo.izquierda = tmp
                tmp.derecha = nuevo
                return tmp.derecha
            }
                
            
            // indice actual es igual a el nuevo índice
            if (tmp.posHorizontal == pos){
                // no hacer nada
                return tmp
            }
                

            // indice actual es menor, pero el siguiente es mayor
            if (tmp.posHorizontal < pos && tmp.derecha.posHorizontal > pos){
                 // insertar un nodo en medio del nodo actual y del nodo siguiente
                 let nuevo = new Nodo()
                nuevo.posHorizontal = pos
                nuevo.posVertical = 0

                // asignar derecha y arriba para el nodo nuevo
                nuevo.derecha = tmp.derecha
                nuevo.izquierda = tmp
                
                tmp.derecha.izquierda = nuevo // reasignar arriba para el nodo de derecha
                tmp.derecha = nuevo // reasignar derecha para el nodo actual
                return tmp.derecha
                
            }
               
            // pasar al siguiente nodo derecha si es que no hubo return 
            tmp = tmp.derecha
        }
            

    }

    insertarVertical(nodo, indiceHorizontal){
        // recorrer todos los nodos de manera horizontal para insertar los verticales
        let tmp = indiceHorizontal
        while (tmp != null){
            // no existe el indice; solo hay índices menores
            if (tmp.abajo == null && tmp.posVertical < nodo.posVertical){
                // ya no hay más nodos en vertical
                // se inserta al final
                nodo.arriba = tmp
                tmp.abajo = nodo
                return tmp.abajo
            }
                
            
            // indice actual es igual a el nuevo índice
            if (tmp.posVertical == nodo.posVertical){
                // no hacer nada, el dato se sobre escribe
                tmp.dato = nodo.dato
                return tmp

            }
                
            // indice actual es menor, pero el siguiente es mayor
            if (tmp.posVertical < nodo.posVertical && tmp.abajo.posVertical > nodo.posVertical){
                // insertar un nodo en medio del nodo actual y del nodo siguiente

                // asignar abajo y arriba para el nodo nuevo
                nodo.abajo = tmp.abajo
                nodo.arriba = tmp
                
                tmp.abajo.arriba = nodo // reasignar arriba para el nodo de abajo
                tmp.abajo = nodo // reasignar abajo para el nodo actual
                return tmp.abajo
            }
                

            // pasar al siguiente nodo abajo si no hubo return
            tmp = tmp.abajo
        }
            
    }
       
    insertarHorizontal(nodo, indiceVertical){
        // recorrer todos los nodos en horizontal
        let tmp = indiceVertical
        while (tmp != null){
            // no existe el indice; solo hay índices menores
            if (tmp.derecha == null && tmp.posHorizontal < nodo.posHorizontal){
                // ya no hay más nodos en horizontal
                // se inserta al final
                nodo.izquierda  = tmp
                tmp.derecha = nodo
                return tmp.derecha
            }
                
            
            // indice actual es igual a el nuevo índice
            if (tmp.posHorizontal == nodo.posHorizontal){
                // no hacer nada se sobre escribe
                tmp.dato = nodo.dato
                return tmp

            }
                
            // indice actual es menor, pero el siguiente es mayor
            if (tmp.posHorizontal < nodo.posHorizontal && tmp.derecha.posHorizontal > nodo.posHorizontal){

                // insertar un nodo en medio del nodo actual y del nodo siguiente
                // asignar derecha y arriba para el nodo nuevo
                nodo.derecho = tmp.derecha
                nodo.izquierda = tmp
                
                tmp.derecha.izquierda = nodo // reasignar arriba para el nodo de derecha
                tmp.derecha = nodo // reasignar derecha para el nodo actual
                return tmp.derecha
            }
                
                
            // pasar al siguiente nodo derecha si esque no hubo return
            tmp = tmp.derecha
        }
            
    }

    insertarDato(dato,  posVertical, posHorizontal){
        // validar que los índices existan en horizontal y vertical
        let indiceVertical = this.crearIndiceVertical(posVertical)
        let indiceHorizontal = this.crearIndiceHorizontal(posHorizontal)

        // crear el nodo informacion
        let nuevo =new Nodo()
        nuevo.posHorizontal = posHorizontal
        nuevo.posVertical = posVertical
        nuevo.dato = dato

        // indexar/apuntar nodo nuevo en indice vertical
        nuevo = this.insertarVertical(nuevo, indiceHorizontal) 
        nuevo = this.insertarHorizontal(nuevo, indiceVertical)
        console.log("Nodo insertado...")
        //pass

    }
    recorrerMatriz(){
        var codigodot = "digraph G{\nlabel=\" Matriz ortogonal \";\nnode [shape=box];\n";
        
        var asd=this.raiz.derecha
        var temporal = this.raiz
        var conexiones ="";
        var conexiones2="";
        var nodos ="";
       

        
        while (temporal != null ) {
            
            console.log("while 1")
            nodos+=  '"' + temporal.dato +'"' + "[label=\"" + temporal.dato +  "\" ];\n"
            //nodos+=  '"' + abajo.dato +'"' + "[label=\"" + abajo.dato +  "\" ];\n"

            var conexionesTemporales="{rank=same;"
            let temporal2=temporal
            while(temporal2!=null){
                
                console.log("while 2")
                nodos+=  '"' + temporal2.dato +'"' + "[label=\"" + temporal2.dato +  "\" ];\n"

                
                if(temporal2.derecha!=null){
                    conexionesTemporales += '"' + temporal2.dato +'"' + " -> " +'"' + temporal2.derecha.dato +'"' + ";\n"
                    conexionesTemporales += '"' + temporal2.derecha.dato  +'"' + " -> " +'"' + temporal2.dato +'"' + ";\n"
                  }
                if(temporal2.abajo!=null){
                    conexiones += '"' + temporal2.dato +'"' + " -> " +'"' + temporal2.abajo.dato +'"' + ";\n"
                    conexiones += '"' + temporal2.abajo.dato +'"' + " -> " +'"' + temporal2.dato +'"' + ";\n"
                  }

                
                temporal2 = temporal2.derecha
            }
            conexiones+=conexionesTemporales+"}\n"
                
            conexionesTemporales="{rank=same;"
            
            
            //if(temporal.abajo!=null){
              //conexiones2 += '"' + temporal.dato +'"' + " -> " +'"' + temporal.abajo.dato +'"' + ";\n"  
            //}
            temporal = temporal.abajo
                       
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += conexiones2+"\n"+conexiones+"\n\n}"
        console.log(codigodot)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }


    recorrerMatriz2(){
        var codigodot = "digraph  G{  \nlabel=\" Librera \";\nnode [shape=Msquare style=filled fillcolor=red  color=blue];\n";
        
        var asd=this.raiz.derecha
        var temporal = this.raiz
        var conexiones ="";
        var conexiones2="";
        var nodos ="";
       

        
        while (temporal != null ) {
            
            console.log("while 1")
            nodos+=  '"' + temporal.dato +'"' + "[label=\"" + temporal.dato +  "\" ];\n"
            //nodos+=  '"' + abajo.dato +'"' + "[label=\"" + abajo.dato +  "\" ];\n"

            var conexionesTemporales="{rank=same;"
            let temporal2=temporal
            while(temporal2!=null){
                
                console.log("while 2")
                nodos+=  '"' + temporal2.dato +'"' + "[label=\"" + temporal2.dato +  "\" ];\n"

                
                if(temporal2.derecha!=null){
                    conexionesTemporales += '"' + temporal2.dato +'"' + " -> " +'"' + temporal2.derecha.dato +'"' + "[arrowhead =none ];\n"
                    //conexionesTemporales += '"' + temporal2.derecha.dato  +'"' + " -> " +'"' + temporal2.dato +'"' + ";\n"
                  }
                if(temporal2.abajo!=null){
                    conexiones += '"' + temporal2.dato +'"' + " -> " +'"' + temporal2.abajo.dato +'"' + "[arrowhead =none ];\n"
                    //conexiones += '"' + temporal2.abajo.dato +'"' + " -> " +'"' + temporal2.dato +'"' + ";\n"
                  }

                
                temporal2 = temporal2.derecha
            }
            conexiones+=conexionesTemporales+"}\n"
                
            conexionesTemporales="{rank=same;"
            
            
            //if(temporal.abajo!=null){
              //conexiones2 += '"' + temporal.dato +'"' + " -> " +'"' + temporal.abajo.dato +'"' + ";\n"  
            //}
            temporal = temporal.abajo
                       
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += conexiones2+"\n"+conexiones+"\n\n}"
        console.log(codigodot)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzolibrera1").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }
   
}

var matrizOrtogonal =new MatrizOrtogonal()
//  ciclo for para llenar la matriz dispersa para que sea ortogonal de mxn
var i=0
var j=0

for(i;i<7;i++){
    
    for(j;j<7;j++){

        matrizOrtogonal.insertarDato(""+i+"-"+j,i,j)
    }
    j=0
    
} 





    //indices para la matriz dispersa
    matrizOrtogonal.insertarDato("G",1,1)
    matrizOrtogonal.insertarDato("A",2,2) 
    matrizOrtogonal.insertarDato("R",3,3)
    matrizOrtogonal.insertarDato("C",4,4)
    matrizOrtogonal.insertarDato("I",5,5)
    matrizOrtogonal.insertarDato("A.",6,6)
    

    

    matrizOrtogonal.recorrerMatriz()
