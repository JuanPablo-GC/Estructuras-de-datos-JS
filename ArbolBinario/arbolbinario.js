class Nodo{
     constructor(dato){
         //"dato" puede ser de cualquier tipo, incluso un objeto si se sobrescriben los operadores de comparación
        this.dato = dato
        this.izquierda = null
        this.derecha = null
     }
       
}

var nodosBinario=""
var conexionesBinario =""
class Arbol{
    // Funciones privadas
    constructor(){
        this.raiz = null
        
   }
       
    
    agregar_recursivo(nodo, dato){

        if(this.raiz == null) {
            // si la lista está vacía agrega el dato al inicio de la cola
            this.raiz = new Nodo(dato);
            return
        }
    

         if (dato < nodo.dato){
            if (nodo.izquierda == null){
                nodo.izquierda =new Nodo(dato)
            }
                
            else{
                this.agregar_recursivo(nodo.izquierda, dato)
            }
                
         }
            
        else{

            if (nodo.derecha == null){
                nodo.derecha = new Nodo(dato)
            }
                
            else{
                this.agregar_recursivo(nodo.derecha, dato)
            }
                
        }
            
    }
       


    
    inorden_recursivo(nodo){
        

        if (nodo != null){

            this.inorden_recursivo(nodo.izquierda)
            let nodoTempo=nodo.dato
            //nodos
            nodosBinario+=('"' +nodoTempo +'"' + "[label=\""+nodoTempo+"\" ];\n");
            console.log('"' +nodoTempo +'"' + "[label=\""+nodoTempo+"\" ];\n");
            
            let izquierda=nodo.izquierda

            //conecciones a la izquierda
            if (nodo.izquierda!=null){
                conexionesBinario+=('"' +nodoTempo+'"' + " -> " +'"'+izquierda.dato+'"' + "[arrowhead =null ];\n")
                console.log('"' +nodoTempo+'"' + " -> " +'"'+izquierda.dato+'"' + "[arrowhead =null ];\n")
            }
                
            //conecciones derecha    
            let derecha=nodo.derecha    
            if (nodo.derecha!=null){
                conexionesBinario+=('"' +nodoTempo+'"' + " -> " +'"'+derecha.dato +'"' + "[arrowhead =null ];\n")
                console.log('"' +nodoTempo+'"' + " -> " +'"'+derecha.dato +'"' + "[arrowhead =null ];\n")
            }
                
                
            
            this.inorden_recursivo(nodo.derecha)

            
            return
        }
        //console.log(nodos)
        //console.log(conexiones)
        return 
    
    }
    
    preorden_recursivo(nodo){

        if (nodo!= null){
            console.log(nodo.dato+ ", ")

            let nodoTempo=nodo.dato
            //nodos
            nodosBinario+=('"' +nodoTempo +'"' + "[label=\""+nodoTempo+"\" ];\n");
            console.log('"' +nodoTempo +'"' + "[label=\""+nodoTempo+"\" ];\n");
            
            let izquierda=nodo.izquierda

            //conecciones a la izquierda
            if (nodo.izquierda!=null){
                conexionesBinario+=('"' +nodoTempo+'"' + " -> " +'"'+izquierda.dato+'"' + "[arrowhead =null ];\n")
                console.log('"' +nodoTempo+'"' + " -> " +'"'+izquierda.dato+'"' + "[arrowhead =null ];\n")
            }
                
            //conecciones derecha    
            let derecha=nodo.derecha    
            if (nodo.derecha!=null){
                conexionesBinario+=('"' +nodoTempo+'"' + " -> " +'"'+derecha.dato +'"' + "[arrowhead =null ];\n")
                console.log('"' +nodoTempo+'"' + " -> " +'"'+derecha.dato +'"' + "[arrowhead =null ];\n")
            }



            this.preorden_recursivo(nodo.izquierda)
            this.preorden_recursivo(nodo.derecha)

        }
            
    }
        
    postorden_recursivo(nodo){
        if (nodo!= null){

            this.postorden_recursivo(nodo.izquierda)
            this.postorden_recursivo(nodo.derecha)

            let nodoTempo=nodo.dato
            //nodos
            nodosBinario+=('"' +nodoTempo +'"' + "[label=\""+nodoTempo+"\" ];\n");
            console.log('"' +nodoTempo +'"' + "[label=\""+nodoTempo+"\" ];\n");
            
            let izquierda=nodo.izquierda

            //conecciones a la izquierda
            if (nodo.izquierda!=null){
                conexionesBinario+=('"' +nodoTempo+'"' + " -> " +'"'+izquierda.dato+'"' + "[arrowhead =null ];\n")
                console.log('"' +nodoTempo+'"' + " -> " +'"'+izquierda.dato+'"' + "[arrowhead =null ];\n")
            }
                
            //conecciones derecha    
            let derecha=nodo.derecha    
            if (nodo.derecha!=null){
                conexionesBinario+=('"' +nodoTempo+'"' + " -> " +'"'+derecha.dato +'"' + "[arrowhead =null ];\n")
                console.log('"' +nodoTempo+'"' + " -> " +'"'+derecha.dato +'"' + "[arrowhead =null ];\n")
            }
            console.log(nodo.dato+", ")
        }
            
    }
        
    

    buscar(nodo, busqueda){

        if (nodo == null){
            return null
        }
            
        if (nodo.dato == busqueda){
            return nodo
        }
            
        if (busqueda < nodo.dato){
            return this.buscar(nodo.izquierda, busqueda)
        }
            
        else{
            return this.buscar(nodo.derecha, busqueda)
        }
            
    }

    
        

    // Funciones públicas

    agregar(dato){
         this.agregar_recursivo(this.raiz, dato)
    }
       





    graficar(){
        this.inorden_recursivo(this.raiz)
        //this.postorden_recursivo(this.raiz)
        //this.preorden_recursivo(this.raiz)

        //("Imprimiendo árbol en orden: ")
        var codigodot = "digraph G{\nlabel=\" Arbol binario \";\nnode [];\n";

      

        codigodot += "//agregando nodos\n"
        codigodot+=nodosBinario
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += conexionesBinario+"\n\n}"

        
        console.log(codigodot)
        
        d3.select("#lienzoArbol").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)


    }
        

    

    buscar2(busqueda){
        return this.buscar(this.raiz, busqueda)
    }
        

}



var arbol =new Arbol()




arbol.agregar("Alice Keller")
arbol.agregar("John le Carre")
arbol.agregar("Carmelo Ceballos")
arbol.agregar("Carlos Granados")
arbol.agregar("Ana Frank")
arbol.agregar("Stephenie")

arbol.agregar("Juan Pablo")
arbol.agregar("Miguel")

arbol.agregar("Paulo Cohelo")
arbol.agregar("Martha Cerda")

//arbol.agregar("Valeria")

//arbol.agregar("Cuphead")

//arbol.agregar("Maggie")
//arbol.agregar("Leon")

//arbol.agregar("Juan miguel")
//arbol.agregar("Miguel Angel")
//arbol.agregar("Ana")
//arbol.agregar("Sofia")
//arbol.agregar("Valentina")


//arbol.agregar("Jack")


//arbol.agregar("Juan Pablo")
//arbol.agregar("Miguel")
//arbol.agregar("Favian")

//arbol.agregar("Joel")
//arbol.agregar("Javier")
//arbol.agregar("Fernanda")







arbol.graficar()
