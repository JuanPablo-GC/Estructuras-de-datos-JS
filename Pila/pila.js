class Nodo5{
    constructor(inf){
        this.inf=inf
        this.siguiente=null
    }
}



class pila{
    constructor(){
        this.primero=null
        this.ultimo=null
        var length=0
        
    }



    //metodos de la cola

    insertar(inf){
        
        let temporal=new Nodo5(inf)

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


    //eliminarPrimero(){
    //    if(this.primero==null){
    //        alert("Cola no creada")
    //    }
    //    else{
            

    //        this.primero = this.primero.siguiente
    //        length--;
    //    }
    //}


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
            alert("pila no creada")
        }
        else{
            
            let firstPointer = this.getTheIndex();
            let pointerToRemove = this.ultimo.siguiente;
            firstPointer.siguiente = null;
            length--;
        }
    }



    //graficar con graphviz 
    graficarpila(){
        var codigodot = 'digraph G { label=" PILA 1";node [shape=box]; \n '+' a0 [label=< <TABLE border="5"  cellpadding="10" bgcolor="black">';
        var temporal = this.primero
       
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  ' <TR><TD border="3" style="radial" bgcolor="white"  gradientangle="60"> ' + temporal.inf + '</TD></TR>  \n'
            
            temporal = temporal.siguiente
            numnodo++;            
        }
        codigodot += "//agregando FILAS PARA LA TABLA\n"
        codigodot += nodos+'</TABLE>>];}'
        
        console.log(codigodot)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }


}



var PilaPersonas=new pila()


class pila2{
    constructor(){
        this.primero=null
        this.ultimo=null
        var length=0
        
    }



    //metodos de la cola

    insertar(inf){
        
        let temporal=new Nodo5(inf)

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


    //eliminarPrimero(){
    //    if(this.primero==null){
    //        alert("Cola no creada")
    //    }
    //    else{
            

    //        this.primero = this.primero.siguiente
    //        length--;
    //    }
    //}


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
            alert("pila no creada")
        }
        else{
            
            let firstPointer = this.getTheIndex();
            let pointerToRemove = this.ultimo.siguiente;
            firstPointer.siguiente = null;
            length--;
        }
    }



    //graficar con graphviz 
    graficarpila(){
        var codigodot2 = 'digraph G { label=" PILA 2";node [shape=box]; \n '+' a0 [label=< <TABLE border="5"  cellpadding="10" bgcolor="black">';
        var temporal2 = this.primero
       
        var nodos2 ="";
        var numnodo2= 0;
        while (temporal2 != null) {
            nodos2+=  ' <TR><TD border="3" style="radial" bgcolor="white"  gradientangle="60"> ' + temporal2.inf + '</TD></TR>  \n'
            
            temporal2 = temporal2.siguiente
            numnodo2++;            
        }
        codigodot2 += "//agregando FILAS PARA LA TABLA\n"
        codigodot2 += nodos2+'</TABLE>>];}'
        
        console.log(codigodot2)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzo2").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot2)
    }


}



var PilaPersonas2=new pila2()





PilaPersonas2.insertar("2")
PilaPersonas2.insertar("0")
PilaPersonas2.insertar("1")
PilaPersonas2.insertar("9")
PilaPersonas2.insertar("0")
PilaPersonas2.insertar("1")
PilaPersonas2.insertar("5")
PilaPersonas2.insertar("9")
PilaPersonas2.insertar("8")


//PilaPersonas.mostrar()


//PilaPersonas.eliminarPrimero()
//ColaPersonas.eliminarUltimo()
//document.write(ColaPersonas.getTheIndex())
//ColaPersonas.mostrar()



//ColaPersonas.mostrar()
//PilaPersonas.graficarpila()
//PilaPersonas.eliminarUltimo()
//PilaPersonas.graficarpila()
PilaPersonas2.graficarpila()