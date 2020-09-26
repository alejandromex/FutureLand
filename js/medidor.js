$( document ).ready(function() {
  const btnOn = $("#btnOn");
  const btnOff= $("#btnOff");
  const btnInicio = $("#btnInicio");
  var prendido = false;
  var myVar;

  var validar = localStorage.getItem("on");
  console.log(validar);
    if(validar == 'true')
    {
    prendido = true;
    ajustarMedidor();
    }
    if(validar == 'false')
    {

      prendido = false;
      ajustarMedidor();
    }

  




  btnOn.click(function(){
    prendido = true;
    if(prendido)
    {
      ajustarMedidor();
      localStorage.setItem("on",true);
      swal("Medidor", "Medidor Encendido", "success");


    }
   
  })

  btnOff.click(()=>{
    prendido = false;
    clearInterval(myVar);
    localStorage.setItem("on",false);
    swal("Medidor", "Medidor Apagado", "warning");

  })




    function ajustarMedidor()
    {
     
        google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var humedad = $(".letreroHumedad");
        var txtHumedad =$("#txtHumedad");
        var mediaqueryList = window.matchMedia("(max-width: 500px)");
        var w= 400;
        var h = 400;
        if(mediaqueryList.matches) {
            w = 250;
            h = 250;
          }

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humedad', 0]
         
        ]);

        var options = {
          width: w, height: h,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('Medidores'));

        chart.draw(data, options);
        if(prendido)
        {
        myVar = setInterval(function(){

          var numero = 40+ Math.round(60*Math.random());

          data.setValue(0,1,numero);
          chart.draw(data, options);
          txtHumedad.attr("placeholder", numero);
          if(numero<75)
          {
            humedad.removeClass('alert-danger');
            humedad.removeClass('alert-warning');

            humedad.addClass('alert-success');
            humedad.text("Niveles de humedad correctos");
          }
          if(numero>=75 && numero<90)
          {
            humedad.removeClass('alert-success');
            humedad.removeClass('alert-danger');
            humedad.addClass('alert-warning');
            humedad.text("Humedad baja, regar en cuanto antes");
          }

          if(numero>=90)
          {
            humedad.removeClass('alert-success');
            humedad.removeClass('alert-warning');
            humedad.addClass('alert-danger');
            humedad.text("Humedad baja, regar de inmediato");
          }
          console.log(prendido);
        },1300);
      }
      }
      
      
    }





});