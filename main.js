class lapiz{
    #marca
    constructor({color="#FFF700",
        dimension="19",
        marca="Mongol",
        borrador="true",
        material="Madera"

    }){
        this.color=color;
        this.dimension=dimension;
        this.marca=marca;
        this.borrador=borrador;
        this.material=material;
    }
  /*   getColor(){
        return this.color;
    }
    getDimension(){
        return this.dimension;
    }
    getMarca(){
        return this.marca;
    } */
}
let obj=undefined;
let color = document.querySelector(`[name="color"]`);
let range = document.querySelector(`[name="dimension"]`);
let marca = document.querySelector(`[name="marca"]`);
let borrador = document.querySelector(`[name="borrador"]`);
let material = document.querySelector(`[name="material"]`);

/* let dato=obj.getData(); */
range.value=true
    marca.checked=true
    borrador.checked=true;
    material.checked=true;

addEventListener("DOMContentLoaded", (e)=>{
    range.min = 0;
    range.max = 30;
    obj = new lapiz({})
    color.value = obj.color;
    marca.value = obj.marca;
    material.value = obj.material;

    document.querySelector("#tabla").innerHTML
   
});


