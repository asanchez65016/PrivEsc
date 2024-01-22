let cursosContratadosJSON = localStorage.getItem("cursosContratados");
let listaCursosContratados = cursosContratadosJSON ? JSON.parse(cursosContratadosJSON) : "";
let intervaloPintaFondo;
onload = () =>{
    pintarDiv();
    intervaloPintaFondo = setInterval(pintaFondoParrafo, 3000);
    document.getElementById("central").getElementsByTagName("button")[1].addEventListener("click", paraPintaFondo);
}

function pintarDiv() {
    let div = document.getElementById("cursos");

    if (listaCursosContratados != "" && listaCursosContratados.length > 0) {
        // let sumaTotal;
        // listaCursosContratados.forEach(curso => {
        //     sumaTotal += curso.curso_precio;
        // });

        let sumaPrecios = listaCursosContratados.reduce((suma, curso) =>{
            return suma + parseFloat(curso.curso_precio);
        }, 0);


        let h1 = document.createElement("h1");
        div.appendChild(h1);
        h1.textContent = `CURSOS CONTRATADOS POR UN PRECIO DE ${sumaPrecios} EUROS`;

        listaCursosContratados = listaCursosContratados.sort((a, b) => a.curso_precio - b.curso_precio);

        listaCursosContratados.forEach(curso => {
            let p = document.createElement("p");
            p.className  = "NoPintado";
            div.appendChild(p);
            let img = document.createElement("img");
            img.style.width = "50px";
            p.appendChild(img);
            img.src = curso.curso_imagen;
            let span = document.createElement("span");
            p.appendChild(span);
            span.textContent = ` ${curso.curso_dia} ${curso.curso_horario}-CURSO: ${curso.curso_descripcion}
             con ${curso.curso_entrenador} por ${curso.curso_precio} euros`;
        });
    }
}

function pintaFondoParrafo() {
    let p = document.querySelectorAll("#cursos .NoPintado")[0];

    if (p) {
        p.style.backgroundColor = "red";
        p.className = "Pintado";
    }else{
        clearInterval(intervaloPintaFondo);
    }
}

function paraPintaFondo(){
    clearInterval(intervaloPintaFondo); 
}