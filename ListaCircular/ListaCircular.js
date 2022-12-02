


class Nodo{
    constructor(inf){
        this.inf=inf
        this.siguiente=null
    }
}


var length=0
class ListaCircular{
    contructor(){
        this.cabeza=null
        this.ultimo=null
        
    }


    //metodos


    //insertar
    insertar(inf){
        var temporal = new Nodo(inf)

        //si esta vacia la lista circular
        if (this.cabeza == null){
            this.cabeza=temporal
            this.ultimo=this.cabeza
            length++;
            
        }
        else{
            this.ultimo.siguiente=temporal
            //temporal.siguiente=ultimo
            this.ultimo=temporal
            this.ultimo.siguiente=this.cabeza
            length++;
        }
    }
     //mostrar lista circular
    mostrar(){
            var temporal = this.cabeza
            var cont=0;

            while(cont<length){
                document.write(temporal.inf+"<br>")
                //document.write(this.tamano)
                console.log(temporal.inf)
                temporal=temporal.siguiente
                cont++;
            }
            document.write(length+"<br>")
    }


    // para buscar la informacion en la lista
    buscar(indice){
        let aux = this.cabeza 
        while (aux!=null){
            if(aux.inf == indice){
                document.write("Si aparece "+aux.inf)
                
                return aux
                }

            aux = aux.siguiente
            
        }
            
            
            
        return this
    }






    // nos va ayudar a buscar los nodos
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.cabeza;
    
        while (counter !== index) {
          currentNode = currentNode.siguiente;
          counter++;
         
        }

        return currentNode;
      }

    //eliminar 
    eliminar(patron){
        if (this.cabeza.inf == patron){
            document.write("prueba"+"<br>")
            //this.ultimo.siguiente=this.cabeza.siguiente
            this.cabeza = this.cabeza.siguiente
            this.ultimo.siguiente=this.cabeza
            length--;
            return true
        }
            
        else{
            let aux = this.cabeza
            let anterior = aux
            //let indiceTemporal=0
            while (aux != null){
                //indiceTemporal++;

                if(aux.inf == patron){
                    anterior.siguiente = aux.siguiente
                    length--;
                    return true
                }

                anterior = aux
                aux = aux.siguiente    
            }
            
                
                
        }
            
        return false
    }
        


    //graficar con graphviz 
    graficarlista(){
        var codigodot = "digraph G{\nlabel=\" Lista Simple circular \";\nnode [shape=box];\n";
        var temporal = this.cabeza
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.inf + "\" ];\n"
            if(temporal.siguiente != (null||this.cabeza)){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            else if(temporal.siguiente==this.cabeza){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N0" + ";\n"
                break
                
            }
            temporal = temporal.siguiente
            numnodo++;            
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{rank=same;\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }
}


var lista=new ListaCircular();
lista.insertar("juan")
lista.insertar("juan2")
lista.insertar("juan3")
lista.insertar("juan4")
lista.insertar("juan5")


//lista.mostrar()
//lista.eliminar("juan")
lista.eliminar("juan3")

lista.buscar("juan")



lista.mostrar()
lista.graficarlista()