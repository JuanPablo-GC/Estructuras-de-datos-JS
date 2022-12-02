class Nodo{
    constructor(inf){
        this.inf=inf
        this.siguiente=null
    }
}



class cola{
    constructor(){
        this.primero=null
        this.ultimo=null
        var length=0
        
    }



    //metodos de la cola

    insertar(inf){
        
        let temporal=new Nodo(inf)

        if(this.primero==null){
            this.primero=temporal
            this.ultimo=temporal
            length++;
        }
        else{
            this.ultimo.siguiente=temporal
            this.ultimo=temporal
            length++;
        }

    }

    mostrar(){
        let temporal=this.primero

        while(temporal!=null){
            document.write(temporal.inf+"<br>")
            temporal=temporal.siguiente
        }
        document.write("<br>")
        document.write(length+"<br>")
    }


    eliminarPrimero(){
        if(this.primero==null){
            alert("Cola no creada")
        }
        else{
            

            this.primero = this.primero.siguiente
            length--;
        }
    }


    // nos va ayudar a buscar los nodos
    getTheIndex() {
        let counter = 0;
        let currentNode = this.primero;
    
        while (counter < length-2) {
          currentNode = currentNode.siguiente;
          counter++;
         
        }
        //document.write(currentNode.inf+"<br>")
        return currentNode;
      }



    eliminarUltimo(){
        if(this.primero==null){
            alert("Cola no creada")
        }
        else{
            
            let firstPointer = this.getTheIndex();
            let pointerToRemove = this.ultimo.siguiente;
            firstPointer.siguiente = null;
            length--;
        }
    }


}



var ColaPersonas=new cola()


ColaPersonas.insertar("CAMILA")
ColaPersonas.insertar("FERNANDA")
ColaPersonas.insertar("JUAN_PABLO")
ColaPersonas.insertar("CAMILA2")

ColaPersonas.mostrar()


//ColaPersonas.eliminarPrimero()
ColaPersonas.eliminarUltimo()
//document.write(ColaPersonas.getTheIndex())
ColaPersonas.mostrar()


ColaPersonas.eliminarUltimo()
ColaPersonas.mostrar()
