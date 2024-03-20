# transformPropiety

<h1>Propiedad Transform CSS</h1>

Permite mover, rotar, escalar y sesgar elementos.

Métodos:
    translate() --> HACE MOVER EL OBJETO HACIA ARRIBA O ABAJO (Y), O HACIA LA IZQUIERDA O DERECHA (X).
    rotate() --> HACE ROTAR AL OBJETO --> 90DEG(DEG SIGNIFICA GRADOS).
    scale() --> HACE CRECER O DISMINUIR EL OBJETO 1(EL OBJETO SE QUEDA ==), >1(AUMENTA EL OBJETO), <1(DISMINUYE EL OBJETO).
    skew() --> HACE QUE EL OBJETO SE DISTORSIONE.
    matrix() --> UNE LAS PROPIEDADES ANTERIORES (SCALE,SKEW,TRANSLATE).


    examples:


    ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
    ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
    div {
  transform: rotate(20deg);
} // Rota el objeto 20 grados

div {
  transform: skew(20deg, 10deg);
} // Distorsiona el objeto 20 grados en el ejeX y 10 en el Y

div {
  transform: scale(0.5); // Disminuye el objeto en un 50%
}
    
    ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

    ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´



Mira la app aqui: http://77766352w.com/josetrujillosilva/transform/
