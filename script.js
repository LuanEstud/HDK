google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}