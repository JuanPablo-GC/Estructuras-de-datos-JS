

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
    

class MatrizDispersa{
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
        var codigodot = "digraph G{\nlabel=\" Matriz Dispersa \";\nnode [shape=box];\n";
        
        var asd=this.raiz.derecha
        var temporal = this.raiz
        var conexiones ="";
        var conexiones2="";
        var nodos ="";
        var subgrafo=0

        
        while (temporal != null ) {
            var nodosTemporales="subgraph cluster_"+subgrafo +"{ "
            console.log("while 1")
            nodosTemporales+=  '"' + temporal.dato +'"' + "[label=\"" + temporal.dato +  "\" ];\n"
            //nodos+=  '"' + abajo.dato +'"' + "[label=\"" + abajo.dato +  "\" ];\n"

            var conexionesTemporales="{rank=same;"
            let temporal2=temporal
            while(temporal2!=null){
                
                console.log("while 2")
                nodosTemporales+=  '"' + temporal2.dato +'"' + "[label=\"" + temporal2.dato +  "\"" +",group="+temporal2.posHorizontal +"];\n"

                
                if(temporal2.derecha!=null){
                    conexionesTemporales += '"' + temporal2.dato +'"' + " -> " +'"' + temporal2.derecha.dato +'" [dir=both]' + ";\n"
                    //conexionesTemporales += '"' + temporal2.derecha.dato  +'"' + " -> " +'"' + temporal2.dato +'"' + ";\n"
                  }
                if(temporal2.abajo!=null){
                    conexiones += '"' + temporal2.dato +'"' + " -> " +'"' + temporal2.abajo.dato +'"[dir=both]' + ";\n"
                   // conexiones += '"' + temporal2.abajo.dato +'"' + " -> " +'"' + temporal2.dato +'"' + ";\n"
                  }

                
                temporal2 = temporal2.derecha
            }
            conexiones+=conexionesTemporales+"}\n"
            nodos+=nodosTemporales+"}"
            subgrafo+=1   
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
   



    insertarDatoDispersa(dato,  posVertical, posHorizontal){

        this.insertarDato(posVertical+"-0",posVertical,0)
        this.insertarDato("0-"+posHorizontal,0,posHorizontal)

        this.insertarDato(dato,  posVertical, posHorizontal)

    }



    recorrerMatriz2(){
        var codigodot = "digraph G{\nlabel=\" Librera \";\nnode [shape=box];\n";
        
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
                nodos+=  '"' + temporal2.dato +'"' + "[label=\"" + temporal2.dato +  "\"" +",group="+temporal2.posHorizontal +"];\n"

                
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
        d3.select("#lienzoLibrera1").graphviz()
            .width(900)
            .height(900)
            .renderDot(codigodot)
    }
}

var matrizDispersa =new MatrizDispersa()
matrizDispersa.insertarDatoDispersa("0-0",0,0)





    //indices para la matriz dispersa

    //dato      fila      columna


    
    
    



    //fin

    
    
    //matrizOrtogonal.insertarDato("juan  1-1",1,1)
    //matrizOrtogonal.insertarDato("juan.1-2",1,2)

   
    matrizDispersa.insertarDatoDispersa("J",1,1)
    matrizDispersa.insertarDatoDispersa("U",2,2)
    matrizDispersa.insertarDatoDispersa("A",3,3)
    matrizDispersa.insertarDatoDispersa("N",4,4)

    matrizDispersa.insertarDatoDispersa(" ",5,5)
    matrizDispersa.insertarDatoDispersa("P",6,6)
    matrizDispersa.insertarDatoDispersa("A.",7,7)
    matrizDispersa.insertarDatoDispersa("B",8,8)
    matrizDispersa.insertarDatoDispersa("L",9,9)
    matrizDispersa.insertarDatoDispersa("O",10,10)

    
    matrizDispersa.recorrerMatriz()
    matrizDispersa.recorrerMatriz2()

