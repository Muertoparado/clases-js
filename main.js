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
    getColor(){
        return this.color;
    }
}
let obj=undefined;
let color = document.querySelector(`[name="color"]`);
let range = document.querySelector(`[name="dimension"]`);
let marca = document.querySelector(`[name="marca"]`);
let borrador = document.querySelector(`[name="borrador"]`);
addEventListener("DOMContentLoaded", (e)=>{
    range.min = 0;
    range.max = 100;
    obj = new lapiz({});
    color.value = obj.color;
});

