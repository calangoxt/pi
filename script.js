
  const ctx = document.getElementById('graficoEvolucao').getContext('2d');

  const grafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4', 'Evento 5'],
      datasets: [{
        label: 'Pontuação',
        data: [2, 3, 2.5, 4, 5],
        fill: false,
        borderColor: '#000',
        backgroundColor: '#0077b6',
        pointBackgroundColor: '#0077b6',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 5
        }
      }
    }
  });
