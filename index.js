let listaCursos = [];
let listaCursosContratados = [];

onload = () => {
    solicitaCursos();
    document.getElementsByTagName("select")[0].addEventListener("change", escogeTurno);
    document.getElementById("horario").getElementsByTagName("button")[0].addEventListener("click", cierraFactura);
}

function solicitaCursos() {
    $.getJSON("listaCursos.php", {}, (datos)=>{
        listaCursos = datos;
        pintarCursos(listaCursos);
    });
}

function pintarCursos(lista) {
    console.log(lista);
    let div= document.getElementById("central");
    div.innerHTML = "";

    let table = document.createElement("table");
    div.appendChild(table);
    table.border = "2px";

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    lista.forEach((curso, index) => {
        if (index%4==0) {
            tr = document.createElement("tr");
            tbody.appendChild(tr);    
        }
        let tdImagen = document.createElement("td");
        tr.appendChild(tdImagen);
        let td = document.createElement("td");
        tr.appendChild(td);
        
        for (const atributo in curso) {
            if (atributo == "curso_descripcion" || atributo == "curso_dia" || atributo == "curso_horario"
            || atributo == "curso_precio" || atributo == "curso_imagen") {  
                if (atributo != "curso_imagen") {
                    let p = document.createElement("p");
                    td.appendChild(p);
                    p.className = `p-${atributo}`;
                    p.textContent = curso[atributo];
                }else if(atributo == "curso_imagen"){
                    let img = document.createElement("img");
                    img.src = curso[atributo];
                    img.width = 75;
                    img.height = 75;
                    tdImagen.appendChild(img);
                }
            }
        }

        let botonContratar = document.createElement("button");
        td.append(botonContratar);
        botonContratar.type = "button";
        botonContratar.className = "contratar";
        botonContratar.textContent = "CONTRATAR";
        botonContratar.onclick = (evento) =>{
            botonContratarDescontratar(evento, curso.curso_id);
        } 

        let botonDescontratar = document.createElement("button");
        td.append(botonDescontratar);
        botonDescontratar.type = "button";
        botonDescontratar.className = "descontratar";
        botonDescontratar.textContent = "DESCONTRATAR";
        botonDescontratar.onclick = (evento) =>{
            botonContratarDescontratar(evento, curso.curso_id);
        } 
    });  
}

function botonContratarDescontratar(evento, id) {
    let tdBoton = evento.target.parentNode;
    let tdImagen = tdBoton.previousSibling;
    console.log(tdImagen);
    let turno = tdBoton.getElementsByClassName("p-curso_horario")[0].textContent;
    let dia = tdBoton.getElementsByClassName("p-curso_dia")[0].textContent;
    let divHorario = document.getElementById("horario");
    let thDias = ["lunes", "martes", "miercoles", "jueves", "viernes"];

    let posicionX = thDias.findIndex((diaSemana)=> diaSemana == dia.toLowerCase());

    if (posicionX != -1) {
        let thTurno = [...divHorario.querySelectorAll("th")].filter((th) => th.textContent == turno);
        let trTurno = thTurno[0].parentNode;

        let tdSeleccionado = trTurno.getElementsByTagName("td")[posicionX];

        if (evento.target.className == "contratar") {
            let posicionCursoContratado = listaCursos.findIndex((curso) => curso.curso_id == id);

            if (posicionCursoContratado != -1) {
                tdSeleccionado.textContent = "X";
                tdSeleccionado.style.backgroundColor  = "white";

                listaCursosContratados.push(listaCursos[posicionCursoContratado]);

                evento.target.setAttribute("onclick", "");
                
                localStorage.setItem("cursosContratados", JSON.stringify(listaCursosContratados));

                $(tdImagen).find("img:eq(0)").animate({"width":"+=50", "height":"+=50"});
            }
            
        }else if (evento.target.className == "descontratar"){
            let posicionCursoContratado = listaCursosContratados.findIndex((curso) => curso.curso_id == id);

            if (tdSeleccionado.textContent == "X" && posicionCursoContratado != -1) {
                tdSeleccionado.textContent = "";
                tdSeleccionado.style.backgroundColor  = "";

                listaCursosContratados.splice(posicionCursoContratado, 1);

                let botonContratar = tdBoton.getElementsByClassName("contratar")[0];
                botonContratar.onclick = (evento) =>{
                    botonContratarDescontratar(evento, id);
                }
                localStorage.setItem("cursosContratados", JSON.stringify(listaCursosContratados));
            }else{
                alert("Para descontratar se debe contratar primero.");
            }
        }   
    }
}

function cierraFactura() {
    window.location.href = "http://localhost:8080/escuelaBaile/factura.html";
}

function pintaFiltros (textoEntrenadores, turno){
    let pFiltro = document.getElementById("superior").getElementsByTagName("p")[0];
    if (textoEntrenadores != "") {
        pFiltro.innerHTML = "Filtro: ";
        let arrayEntrenadores = textoEntrenadores.split(";").map(entrenador => entrenador.split("/"));
        arrayEntrenadores = arrayEntrenadores.slice(0, -1);
        
        let spanTodos = document.createElement("span");
        pFiltro.appendChild(spanTodos);
        spanTodos.textContent = "Todos";
        let radioTodos = document.createElement("input");
        spanTodos.appendChild(radioTodos);
        radioTodos.type = "radio";
        radioTodos.onclick = () =>{
            filtraEntrenador("todos", turno);
        }
        radioTodos.name = "entrenador";

        arrayEntrenadores.forEach(entrenador => {
            let span = document.createElement("span");
            pFiltro.appendChild(span);
            span.textContent = entrenador[1];

            let radio = document.createElement("input");
            span.appendChild(radio);
            radio.type = "radio";
            radio.onclick = () =>{
                filtraEntrenador(entrenador[0], turno);
            }
            radio.name = "entrenador";
        });
    }else{
        pFiltro.innerHTML = "Filtro:";   
    }
}

function filtraEntrenador(codEntrenador, turno){
    if(codEntrenador!="todos"){
        $.getJSON("listaCursos.php", { ENTRENADOR: codEntrenador, TURNO: turno }, pintarCursos);
    }else if(codEntrenador=="todos"){
        $.getJSON("listaCursos.php", {TURNO: turno}, pintarCursos);
    }
}

function escogeTurno() {
    let selectValue = document.getElementsByTagName("select")[0].value;
    if (selectValue != "Escoge un valor"){
        $.getJSON("listaCursos.php", {TURNO: selectValue}, pintarCursos);
    }else if (selectValue == "Escoge un valor"){
        $.getJSON("listaCursos.php", {}, pintarCursos);
    }

    $.post("listaEntrenadores.php", {
        "TURNO": selectValue
    }, (data) => {
        pintaFiltros(data, selectValue);
    });
}

// $.ajax({
    //     url: "listaEntrenadores.php", // Reemplaza con la ruta correcta al script PHP
    //     method: "POST",
    //     data: { "TURNO": turno },
    //     dataType: "text",
    //     success: function(response) {
    //         // Maneja la respuesta aquí
    //         console.log(response);
    //     },
    //     error: function(jqxhr, textStatus, error) {
    //         console.log("Error en la solicitud AJAX: " + textStatus + ", " + error);
    //     }
    // });