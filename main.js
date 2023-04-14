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

    getData(){
    return this;
    }
}
let obj=undefined;
let color = document.querySelector(`[name="color"]`);
color.addEventListener("change",data)
let range = document.querySelector(`[name="dimension"]`);
range.addEventListener("change",data)
let marca = document.querySelector(`[name="marca"]`);
marca.addEventListener("change",data)
let borrador = document.querySelector(`[name="borrador"]`);
borrador.addEventListener("change",data)
let material = document.querySelector(`[name="material"]`);
material.addEventListener("change",data)
let boton = document.getElementById("#boton");
/* let boton = checked = true; */

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

   let boton=document.addEventListener("submit",(e)=>{
        e.preventDefault();

    document.querySelector("#tabla").insertAdjacentHTML("beforeend",
    `   <tr>
            <th>${lapiz.color}</th>
            <th>${lapiz.dimension}</th>
            <th>${lapiz.marca}</th>
            <th>${lapiz.borrador}</th>
            <th>${lapiz.material}</th>
        </tr>
    `
    )
})
});

function data(e) {
    console.log(e.target.value);
    info[e.target.name] = e.target.value;
    console.log(info);
}


