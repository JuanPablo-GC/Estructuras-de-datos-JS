class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
        this.lista = new Tabla();
    }
}

class Tabla{
    constructor() {
        this.primero = null;
    }

    // método para crear la lista normal
    add(dato) {
        let nuevo = new Nodo(dato);
        if(this.primero == null) {
            // si la lista está vacía agrega el dato al inicio de la cola
            this.primero = nuevo;
        }else {
            let aux = this.primero;
            // mientras el nodo aux no sea null, pasará al siguiente nodo
            while(aux.siguiente != null) {
                aux = aux.siguiente;
            }
            //let repetido = this.repetido(dato, this.primero);
            //if(repetido) {
            //    console.log('Dato repetido, no se insertó: ' + dato + ' :(');
            //    return
            //}
            // insertando el nuevo dato y asignando los apuntadores
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    // método para insertar dentro de una lista 
    add2(nombre, dato) {
        let aux = this.primero;
        while(aux != null) {
            // si el nombre es igual al algún dato de la lista se incerta otra lista dentro de ese nodo
            if (aux.dato == nombre) {
                //let repetido = this.repetido(dato, aux.lista.primero);
                //if (repetido) {
                //    aux.lista.add(dato);
                //    console.log('Dato repetido, no se insertó: ' + dato);
                //}else {
                    aux.lista.add(dato);
                //}                
                return
            }
            aux = aux.siguiente;
        }
        // si sale del while quiere decir que no hay tal nombre
        console.log('No existe ese nombre:( intente con otro.');
    }

    // método para verificar si hay algún dato repetido
    repetido(dato, aux) {
        while(aux != null) {
            if(aux.dato == dato) {
                return true;
            }
            aux = aux.siguiente;
        }
        return false;
    }

    // método para mostrar la lista
    mostrar() {
        let aux = this.primero;
        //console.log('=========LISTA=======');
        document.write('=========LISTA======='+"<br>");
        while(aux != null) {
            //console.log('* ' + aux.dato);
            document.write('* ' + aux.dato+"<br>");
            let aux2 = aux.lista.primero;
            while(aux2 != null) {
                //console.log('   -> ' + aux2.dato);
                document.write('   -> ' + aux2.dato+"<br>");
                aux2 = aux2.siguiente;
            }
            aux = aux.siguiente;
        }
    }

    // para buscar la informacion en la lista
    buscar(indice){
        let aux = this.primero 
        while (aux!=null){
            if(aux.dato == indice){
                document.write("Si aparece "+aux.dato)
                
                return aux
                }

            aux = aux.siguiente
            
        }
            
            
            
        return this
    }



    //graficar con graphviz 
    graficartabla(){
        var codigodot = 'digraph G { label=" Tabla Hash";node [shape=box]; \n '+' a0 [label=< <TABLE border="0"  cellpadding="10" bgcolor="white">\n';
        var temporal = this.primero
        var conexiones ="";
        var conexiones2="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            //nodos+=  "N" + numnodo + "[label=\"" + temporal.dato + "\" ];\n"

            var numnodo2= 0;
            nodos+=' <TR><TD border="3" style="radial" bgcolor="white"  gradientangle="60"> ' + temporal.dato + '</TD>     \n'
            
            
            //para la lista 2
            let temporal2=temporal.lista.primero

            //conexiones += "N" + numnodo + " -> NN" + temporal.dato + "0;\n"
            while(temporal2!=null){
                //nodos+=  "NN" + temporal.dato +numnodo2 + "[label=\"" + temporal2.dato + "\" ];\n"
                nodos+='<TD border="3" style="radial" bgcolor="white"  gradientangle="60"> ' + temporal2.dato + '</TD>'

                if(temporal2.siguiente!=null){
                    var auxnum2 = numnodo2+1
                //conexiones+= "NN" + temporal.dato +numnodo2 + " -> NN" +temporal.dato + auxnum2 + ";\n"
                    

                }

                
                temporal2 = temporal2.siguiente
                numnodo2++; 
            }
            






            
            //if(temporal.siguiente != null){
               // var auxnum = numnodo+1
                //conexiones2 += "N" + numnodo + " -> N" + auxnum + ";\n"
            //}


            temporal = temporal.siguiente
            nodos+='</TR>'
            numnodo++;            
        }
        //codigodot += "//agregando nodos\n"
        codigodot += nodos+'</TABLE>>];}'
        //codigodot += "//agregando conexiones o flechas\n"
        //codigodot += conexiones2+"{rank=same;\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(1500)
            .renderDot(codigodot)
    }
    insertar(modulo,dato){
        let indice=modulo%30
        this.add2(indice,dato)

    }
}

// probando
l = new Tabla();
l.add('0');
l.add('1');
l.add('2');
l.add('3');
l.add('4');
l.add('5');
l.add('6');
l.add('7');
l.add('8');
l.add('9');
l.add('10');
l.add('11');
l.add('12');
l.add('13');
l.add('14');
l.add('15');
l.add('16');
l.add('17');
l.add('18');
l.add('19');
l.add('20');
l.add('21');
l.add('22');
l.add('23');
l.add('24');
l.add('25');
l.add('26');
l.add('27');
l.add('28');
l.add('29');
l.add('30');

//l.add2('0', "Camila");
//l.add2('0', "Fernanda");
//l.add2('1',"Carlos");
//l.add2('3', "Miguel");
//l.add2('4',"Carlos");
//l.add2('4', "Miguel");

w=[15,35,68,54,21,85,35,36,32,10,25,35,68,68,9,54,87]
var j=0
for(j;j<17;j++){
    let dato=w[j]
    l.insertar(dato,dato)
}


//l.mostrar();
l.graficartabla();
//l.buscar("Juan_Pablo")