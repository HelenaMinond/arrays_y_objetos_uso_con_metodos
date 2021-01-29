document.write('<p><b>Estadisticas Centro Médico Ñuñoa</b></p>');

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
    
];

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Codigo base incorporado

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);


//Agregar código para el desafio 2 aquí


//1. Incorporacion de horas al arreglo de Traumatología
document.write('<br>'); //Espacio
document.write('<p><b>EJERCICIO 1</b></p>'); //Titulo

let horasIncorporadas = [
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
];

horasIncorporadas.forEach(function(val){
    traumatologia.push(`${val.paciente} <br><br>`); 
});
document.write(traumatologia);


//2. Eliminacion de primer y ultimo elemento de radiologia
document.write('<br>'); //Espacio
document.write('<p><b>EJERCICIO 2</b></p>'); //Titulo

radiologia.shift(); //Primer elemento
radiologia.pop(); //Ultimo elemento
radiologia.forEach(function(val){
    document.write(`${val.paciente} <br><br>`)
});


//3. Impresión de datos de consultas médicas de Dental
document.write('<br>'); //Espacio
document.write('<p><b>EJERCICIO 3</b></p>'); //Titulo

document.write(`
${dental[0].hora} - ${dental[0].especialista} - ${dental[0].paciente} - ${dental[0].rut} - ${dental[0].prevision} <br><br>
${dental[1].hora} - ${dental[1].especialista} - ${dental[1].paciente} - ${dental[1].rut} - ${dental[1].prevision} <br><br>
${dental[2].hora} - ${dental[2].especialista} - ${dental[2].paciente} - ${dental[2].rut} - ${dental[2].prevision} <br><br>
${dental[3].hora} - ${dental[3].especialista} - ${dental[3].paciente} - ${dental[3].rut} - ${dental[3].prevision} <br><br>
${dental[4].hora} - ${dental[4].especialista} - ${dental[4].paciente} - ${dental[4].rut} - ${dental[4].prevision} <br><br>
${dental[5].hora} - ${dental[5].especialista} - ${dental[5].paciente} - ${dental[5].rut} - ${dental[5].prevision}
`);


//4. Impresión listado de pacientes que se atendieron en centro médico
document.write('<br><br>'); //Espacio
document.write('<p><b>EJERCICIO 4</b></p>'); //Titulo

let listado = radiologia.concat(dental, traumatologia);
listado.map(function(val){
    document.write(`${val.paciente}<br><br>`)
});


//5. Modificación de previsión de Salud
document.write('<p><b>EJERCICIO 5</b></p>'); //Titulo

let listadoPrevision = radiologia.concat(dental, traumatologia);
listadoPrevision.map(function(el){
    if(el.prevision === "FONASA") el.prevision = "ISAPRE"
    else if(el.prevision === "ISAPRE") el.prevision = "FONASA"
    document.write(`${el.prevision} ; ${el.paciente} ; ${el.rut}<br><br>`)
});