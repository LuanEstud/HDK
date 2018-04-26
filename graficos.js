google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartPrincipal);

function drawChartPrincipal() {
  var data = google.visualization.arrayToDataTable([
    ['Mês', 'RH', 'Administração'],
    ['Jan',  3,      4],
    ['Fev',  4,      6],
    ['Mar',  2,      3],
    ['Abr',  1,      4],
    ['Mai',  5,      7],
    ['Jun',  8,      8],
    ['Jul',  6,      4],
    ['Ago',  4,      6],
    ['Set',  3,      9],
    ['Out',  3,      3],
    ['Nov',  5,      6],
    ['dez',  7,      2]
  ]);

  var options = {
    title: 'Estatísticas de chamados por setor',
    hAxis: {titleTextStyle: {color: '#333'}},
    vAxis: {ticks: [1,2,3,4,5,6,7,8,9]}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('ChartPrincipal'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartTipoProblema);

function drawChartTipoProblema() {
  var data = google.visualization.arrayToDataTable([
    ['Mês', 'Erro', 'Solicitação'],
    ['Jan',  3,      4],
    ['Fev',  4,      6],
    ['Mar',  2,      3],
    ['Abr',  1,      4],
    ['Mai',  5,      7],
    ['Jun',  8,      8],  
    ['Jul',  6,      4],
    ['Ago',  4,      6],
    ['Set',  3,      9],
    ['Out',  3,      3],
    ['Nov',  5,      6],
    ['dez',  7,      2]
  ]);

  var options = {
    title: 'Estatísticas de chamados por Tipo de Problema',
    hAxis: {titleTextStyle: {color: '#333'}},
    vAxis: {ticks: [1,2,3,4,5,6,7,8,9]},
    width: 1000,
    height: 250,
  };

  var chart = new google.visualization.AreaChart(document.getElementById('ChartTipoProblema'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartPrioridade);

function drawChartPrioridade() {
  var data = google.visualization.arrayToDataTable([
    ['Mês', 'Alta', 'Média', 'Baixa'],
    ['Jan',  3,      4,       5],
    ['Fev',  4,      6,       7],
    ['Mar',  2,      3,       4],
    ['Abr',  1,      4,       3],
    ['Mai',  5,      7,       9],
    ['Jun',  8,      8,       10],  
    ['Jul',  6,      4,       8],
    ['Ago',  4,      6,       3],
    ['Set',  3,      9,       7],
    ['Out',  3,      3,       6],
    ['Nov',  5,      6,       4],
    ['dez',  7,      2,       8]
  ]);

  var options = {
    title: 'Estatísticas de chamados por Prioridade',
    hAxis: {titleTextStyle: {color: '#333'}},
    vAxis: {ticks: [1,2,3,4,5,6,7,8,9]},
    width: 1000,
    height: 250,
  };

  var chart = new google.visualization.AreaChart(document.getElementById('ChartPrioridade'));
  chart.draw(data, options);
}