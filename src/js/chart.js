import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export function chart() {
  const chartPolarArea = () => {
    const ctx = document.getElementById('chart-polar-area');

    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Razom for Ukraine', 'Serhiy Prytula Charitable Foundation', 'Come back alive'],
        datasets: [{
          label: 'User Traffic',
          data: [1200, 2100, 2800],
          backgroundColor: [
            'rgba(255,99,132, 1)',
            'rgba(54,162,235, 1)',
            'rgba(255,206,86, 1)',
          ],
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  const chartBar = () => {
    const ctx = document.getElementById('chart-bar');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'Angust', 'September', 'Octaber', 'November', 'December'],
        datasets: [{
          label: 'Contribution',
          data: [600, 3000, 2600, 2800, 1900, 2300, 1600, 900, 2600, 2700, 2100],
          backgroundColor: [
            'rgba(255,99,132, 1)',
            'rgba(54,162,235, 1)',
            'rgba(255,206,86, 1)',
            'rgba(141, 224, 44, 1)',
            'rgba(255, 117, 66, 1)',
            'rgba(38, 169, 230, 1)',
            'rgba(210, 19, 57, 1',
            'rgba(255, 117, 66, 1)',
            'rgba(255,206,86, 1)',
            'rgba(141, 224, 44, 1)',
            'rgba(255,99,132, 1)',
          ],
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  chartPolarArea();
  chartBar();
}