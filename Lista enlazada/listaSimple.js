class Nodo{
    constructor(inf){
        this.inf = inf
        this.siguiente = null
    }
}

class ListaSimple{
    constructor(){
        this.cabeza = null
      
        this.length=0
    }

    //metodos de la lista
    //insertar
    agregar(inf){

        var tempo = new Nodo(inf)
        tempo.siguiente = this.cabeza
        this.cabeza = tempo
        this.length++;


    }
    //mostrar 
    mostrarlista(){
        var temporal = this.cabeza
        while(temporal!=null){
            //console.log(temporal.pokemon)
            document.write(temporal.inf+"<br>")
            temporal = temporal.siguiente
        }
        document.write("*********"+"<br>")
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



    // metodo para removerlo en una posicion especifica 
    remove(index) {
        if (index >= this.length) {
            alert("indice fuera de RANGO");
        } 
        else if (index == 0) {
        this.cabeza = this.cabeza.siguiente;
        this.length--;
        } 
        else if (index === this.length - 1) {
        const firstPointer = this.getTheIndex(index - 1);
        firstPointer.siguiente = null;

        this.tail = firstPointer;
        this.length--;
        } 
        else {
        let firstPointer = this.getTheIndex(index - 1);
        let pointerToRemove = firstPointer.siguiente;
        firstPointer.siguiente = pointerToRemove.siguiente;
        this.length--;
        }
    }



    // incertamos un nuevo nodo, en cualcuier lugar
    insertar(index, value) {
        // validamos si ponemos un index que no esiste
        if (index >= this.length) {
          //  lo ponemos el final de la lista
          return this.agregar(value);
        }
    
        let newNode = new Nodo(value);
        let firstPointer = this.getTheIndex(index - 1);
        let holdingPointer = firstPointer.siguiente;
    
        firstPointer.siguiente = newNode;
        newNode.siguiente = holdingPointer;
    
        this.length++;
    
        return this;
    }


     // agregamos un elemetno en la cabeza
    insertarInicio(value) {
        let newNode = new Nodo(value);
    
        // agregamos el node al a cabeza
        newNode.siguiente = this.cabeza;
    
        // lo colocamos en la lista
        this.cabeza = newNode;
    
        this.length++;
    
        return this;
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



    

    //graficar con graphviz 
    graficarlista(){
        var codigodot = "digraph G{\nlabel=\" Lista Simple \";\nnode [shape=box];\n";
        var temporal = this.cabeza
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.inf + "\" ];\n"
            if(temporal.siguiente != null){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
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

    ordenar(){

        var fin=null


        while(fin!=this.cabeza){

            var r, p
            r=this.cabeza
            p=this.cabeza

            while(p.siguiente!=fin){

                var q =p.siguiente
                

                console.log(p.inf +"**")
                console.log(q.inf)
                //si se quiere revertir el orden solo se cambia el < o por >
                if(p.inf > q.inf){

                    p.siguiente=q.siguiente



                    q.siguiente=p 



                    if(p!=this.cabeza){



                        r.siguiente=q
                    }
                    else{


                        this.cabeza=q
                    }


                    var aux =p

                    p=q

                    q=aux


                }

                r=p

                p=p.siguiente


            }
        

            fin=p
        }
    }

    // metodo de ordenamiento con quickSort 
    particion(inicio, fin)
    {
        if (inicio == fin || inicio == null || fin == null){
            return inicio;
        }
            
    
        var pivot_prev = inicio;
        var curr = inicio;
        var pivot = fin.inf;

        while (inicio != fin){
            if (inicio.inf > pivot)
            {
                pivot_prev = curr;
                var temporal = curr.inf;
                curr.inf = inicio.inf;
                inicio.inf = temporal;
                curr = curr.siguiente;
            }
            inicio = inicio.siguiente;
        }
    
        var temporal = curr.inf;
        curr.inf = pivot;
        fin.inf = temporal;

        return pivot_prev;
    }
 
    sort(inicio, fin){
    if (inicio == null || inicio == fin || inicio == fin.siguiente){
        return;
    }
            
 
    var pivot_prev = this.particion(inicio, fin);
    this.sort(inicio, pivot_prev);
 
    if (pivot_prev != null && pivot_prev == inicio){
        this.sort(pivot_prev.siguiente, fin);
    }
        
    else if (pivot_prev != null && pivot_prev.siguiente != null){
        this.sort(pivot_prev.siguiente.siguiente, fin);
    }
        
    }

    ordenar2(){
        var n = this.cabeza;
        while (n.siguiente != null){
            n = n.siguiente;
        }
        this.sort(this.cabeza, n);
        

    }
    
}

var lista = new ListaSimple();
lista.agregar("Alicia")
lista.agregar("Juan")
lista.agregar("Pedo")
lista.agregar("Carlos")
lista.agregar("Zanches")
lista.agregar("Diana")
//lista.mostrarlista()
//lista.getTheIndex(0)



//lista.insertar(1,'miguel')
//lista.insertarInicio("Fernanda")
//lista.mostrarlista()

//lista.buscar("Vulpix")

//lista.graficarlista()

//lista.insertarFinal("Fernanda 2")
//lista.mostrarlista()
//lista.remove(1)

//lista.ordenar()

lista.ordenar2()


lista.graficarlista()

class Nodo7{
    constructor(nombre_comprador,nombre_libro,cantidad){
        this.nombre_comprador = nombre_comprador
        this.nombre_libro=nombre_libro
        this.cantidad=cantidad
        this.siguiente = null
    }
}

class ListaSimple2{
    constructor(){
        this.cabeza = null
        this.length=0
    }

    //metodos de la lista
    //insertar
    agregar(nombre_comprador,nombre_libro,cantidad){
        var tempo = new Nodo7(nombre_comprador,nombre_libro,cantidad)
        tempo.siguiente = this.cabeza
        this.cabeza = tempo
        this.length++;
    }
    //mostrar 
    mostrarlista(){
        var temporal = this.cabeza
        while(temporal!=null){
            //console.log(temporal.pokemon)
            document.write(temporal.nombre_comprador+"<br>")
            temporal = temporal.siguiente
        }
        document.write("*********"+"<br>")
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



    // metodo para removerlo en una posicion especifica 
    remove(index) {
        if (index >= this.length) {
            alert("indice fuera de RANGO");
        } 
        else if (index == 0) {
        this.cabeza = this.cabeza.siguiente;
        this.length--;
        } 
        else if (index === this.length - 1) {
        const firstPointer = this.getTheIndex(index - 1);
        firstPointer.siguiente = null;

        this.tail = firstPointer;
        this.length--;
        } 
        else {
        let firstPointer = this.getTheIndex(index - 1);
        let pointerToRemove = firstPointer.siguiente;
        firstPointer.siguiente = pointerToRemove.siguiente;
        this.length--;
        }
    }



    // incertamos un nuevo nodo, en cualcuier lugar
    insertar(index, nombre_comprador,nombre_libro,cantidad) {
        // validamos si ponemos un index que no esiste
        if (index >= this.length) {
          //  lo ponemos el final de la lista
          return this.agregar(nombre_comprador,nombre_libro,cantidad);
        }
    
        let newNode = new Nodo7(nombre_comprador,nombre_libro,cantidad);
        let firstPointer = this.getTheIndex(index - 1);
        let holdingPointer = firstPointer.siguiente;
    
        firstPointer.siguiente = newNode;
        newNode.siguiente = holdingPointer;
    
        this.length++;
    
        return this;
    }


     // agregamos un elemetno en la cabeza
    insertarInicio(nombre_comprador,nombre_libro,cantidad) {
        let newNode = new Nodo7(nombre_comprador,nombre_libro,cantidad);
    
        // agregamos el node al a cabeza
        newNode.siguiente = this.cabeza;
    
        // lo colocamos en la lista
        this.cabeza = newNode;
    
        this.length++;
    
        return this;
    }

    // para buscar la informacion en la lista
    buscar(indice){
        let aux = this.cabeza 
        while (aux!=null){
            if(aux.nombre_comprador == indice){
                //document.write("Si aparece "+aux.nombre_libro)
                
                return aux
                }

            aux = aux.siguiente
            
        }
            
            
            
        return this
    }



    

    //graficar con graphviz 
    graficarlista(){
        var codigodot = "digraph G{\nlabel=\" Cola de Compradores \";\nnode [shape=box];\n";
        var temporal = this.cabeza
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" +"Cliente: "+ temporal.nombre_comprador+"\n Libro: " +temporal.nombre_libro+"\nCantidad: "+temporal.cantidad+ "\" ];\n"
            if(temporal.siguiente != null){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
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
        d3.select("#lienzoCOlaCompradores").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }

}

//var ColaCompradores=new ListaSimple2();

//ColaCompradores.agregar("Juan Pablo", "Hombre x",2)
//ColaCompradores.agregar("Juan Pablo2", "Hombre x",8)
//ColaCompradores.agregar("Juan Pablo3", "Hombre x",5)
//ColaCompradores.agregar("Juan Pablo4", "Hombre x",4)
//ColaCompradores.graficarlista()


