



class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data) {
        const newNode = new Node(data, this.head, null);

        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        };
        this.size++;
    };

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);

        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        };
        this.size++;
    };

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null
        };

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next =current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        };
        this.size++;
    };

    removeFromHead() {
        if (!this.head) {
            return null
        };

        const valueToReturn = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        };
        this.size--;
        return valueToReturn;
    }

    removeFromTail() {
        if (!this.tail) {
            return null
        };

        const valueToReturn = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        };
        this.size--;
        return valueToReturn;
    };

    removeData(data) {
        let current = this.head;
        let previous = null;

        while(current !== null) {
            if (current.data === data) {
                if (!previous) {
                    this.removeFromHead();
                } else if (!current.next) {
                    this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.prev = previous;
                };
                this.size--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
        return null;
    }

    print() {
        let current = this.head;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.next;
        };

        return result;
    };

    reversePrint() {
        let current = this.tail;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.prev;
        };

        return result;
    };

    getSize() {
        return this.size;
    };

    isEmpty() {
        return this.size === 0;
    };
    graficarlista(){
        var codigodot = "digraph G{\nlabel=\" Lista doblemente enlazada fin a inicio \";\nnode [shape=box];\n";
        var temporal = this.tail
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.data + "\" ];\n"
            if(temporal.prev != (null)){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"


                //para que se vea doble
                //conexiones += "N" +auxnum + " -> N" + numnodo  + ";\n"
            }

            
            temporal = temporal.prev
            numnodo++;            
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{rank=same;\n"+conexiones+"\n}\n}"
        //console.log(codigodot)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzo2").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }

    graficarlista2(){
        var codigodot = "digraph G{\nlabel=\" Lista doblemente enlazada\";\nnode [shape=box];\n";
        var temporal = this.head
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.data + "\" ];\n"
            if(temporal.next != (null)){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"


                //para que se vea doble enlazada
                //conexiones += "N" +auxnum + " -> N" + numnodo  + ";\n"
            }

            
            temporal = temporal.next
            numnodo++;            
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{rank=same;\n"+conexiones+"\n}\n}"
        //console.log(codigodot)
        //var arreglo = [0,2,3,4,5]
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }


    
    ordenar(){
        
        var fin=null


        while(fin!=this.head){

            var r, p
            r=p= this.head
            


            while(p.next!=fin){
                
                var q =p.next


                var w=q.next
                

                console.log(p.data +" Dato 1")
                console.log(q.data+" Dato 2")
                //si se quiere revertir el orden solo se cambia el < o por >
                if(p.data > q.data ){
                    
                   

                    
                    p.next=w
                    //w.prev=p
                   
                    
                
                  
                   
                    
                    q.next=p
                    //p.prev=q
                    
                    
                    

                    
                        
                    
                    //si p es diferente el inicio
                    if(p!=this.head){



                        r.next=q
                        
                    
                    }
                    else{


                        this.head=q
                    }


                    var aux =p

                    p=q

                    q=aux

           
                }

                r=p

                p=p.next


            }
        

            fin=p
        }
    }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addToHead(10);
doubleLinkedList.addToTail(1);
doubleLinkedList.addToTail(2);
doubleLinkedList.addToTail(9);
doubleLinkedList.addToTail(4);
doubleLinkedList.addToTail(6);
doubleLinkedList.addToTail(5);
doubleLinkedList.addToTail(7);
doubleLinkedList.addToTail(8);

//doubleLinkedList.insertAt(4, 2);


//doubleLinkedList.removeData(4);
//console.log(doubleLinkedList.getSize());

doubleLinkedList.ordenar()
doubleLinkedList.graficarlista2()
let y=doubleLinkedList.reversePrint()
console.log(y)
//doubleLinkedList.graficarlista2()



//doubleLinkedList.removeFromHead();
//doubleLinkedList.removeFromTail();
//console.log(doubleLinkedList.reversePrint())



