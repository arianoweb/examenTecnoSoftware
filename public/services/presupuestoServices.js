angular.module('app')
    .factory('presupuestoServices', presupuestoServices)
function presupuestoServices() {
    var presParametros = setParametros();
    const molde16 =
    {
        volumen16: 3600,
        relleno16: 250,
        cubierta16: 500,
        decoracion16: 500
    }
    var dataMateriales = {
        dataRellenos: [
            {
                material: 'Dulce de Leche',
                precio: 50,
                seleccionado: true
            },
            {
                material: 'Frutos Rojos',
                precio: 100,
                seleccionado: true
            },
            {
                material: 'ButterCream',
                precio: 80,
                seleccionado: true
            }

        ],
        dataCubierta: [
            {
                material: 'Merengue',
                precio: 50,
                seleccionado: true
            },
            {
                material: 'Pasta Americana',
                precio: 100,
                seleccionado: true
            },
            {
                material: 'ButterCream',
                precio: 80,
                seleccionado: true
            }

        ],
        dataDecoracion: [
            {
                material: 'Dulce de Leche',
                precio: 50,
                seleccionado: true
            },
            {
                material: 'Frutos Rojos',
                precio: 100,
                seleccionado: true
            },
            {
                material: 'ButterCream',
                precio: 80,
                seleccionado: true
            }

        ],

    };
    function setParametros() {
        debugger
        return {
            altura: 0,
            diametro: 0,
            sabor: null,
            cubierta: null,
            relleno: null,
            porciones: 0,
            dificultad: 1,
            presupuesto: 0
        }
    }

    function sumaMaterial(dataMaterial) {
        let totalMaterial = 0;

        for (let material of dataMaterial) {
            if (material.seleccionado) {
                totalMaterial = totalMaterial + material.precio;
            }
        }

        return totalMaterial;
    }

    function calcularPresupuesto(altura,diametro) {
debugger
        let presupuesto = 0;
        presParametros.altura = altura;
        presParametros.diametro = diametro;
        if (presParametros.altura && presParametros.diametro) {
            let Precio3600 = 900; // Calcular luego con ingredientes
            let valorRelleno = 0;
            let valorCubierta = 0;
            let grado = presParametros.dificultad;
            let valorDecoracion = 0;
            let Volumen = 0;
            let diametro = presParametros.diametro;
            let altura = presParametros.altura;


            valorRelleno = sumaMaterial(dataMateriales.dataRellenos) / molde16.relleno16;
            valorCubierta = sumaMaterial(dataMateriales.dataCubierta) / molde16.cubierta16;
            valorDecoracion = sumaMaterial(dataMateriales.dataDecoracion) / molde16.decoracion16;

            Volumen = Math.PI * Math.pow((diametro / 2), 2) * altura;

            let CantidadRelleno = (Volumen * molde16.relleno16) / molde16.volumen16;
            let CantidadCubierta = (Volumen * molde16.cubierta16) / molde16.volumen16;
            let CantidadDecoracion = (Volumen * molde16.decoracion16) / molde16.volumen16;

            let TotalValorRelleno = CantidadRelleno * valorRelleno;
            let TotalValorCubierta = CantidadCubierta * valorCubierta;
            let TotalValorDecoracion = CantidadDecoracion * valorDecoracion;
            let TotalValorBiscocho = (Volumen * Precio3600) / molde16.volumen16;
            let subTotal = TotalValorBiscocho + TotalValorDecoracion + TotalValorCubierta + TotalValorRelleno;

            presupuesto = (subTotal * 2.5) + (subTotal * grado);

        }
        return presupuesto;
    }
    return {
        calcularPresupuesto: calcularPresupuesto,
        setParametros: setParametros,
        presParametros: presParametros
    };
}

