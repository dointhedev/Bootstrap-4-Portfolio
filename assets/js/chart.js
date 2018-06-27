$(document).ready(function () {

  new Chart(document.getElementById("bar-chart"), {
    type: 'horizontalBar',
    data: {
      labels: ["Nodejs", "React", "JavaScript", "MySQL", "PHP", "MongoDB", "Firebase", "git", "jQuery", "Bootstrap 4", "HTML5 & CSS3", "WordPress", "Jira", "Illustrator", "Photoshop",  "Balsamiq"],
      datasets: [{
        label: "Experience Level (%)",
        backgroundColor: ["#529d47", "#6bceee", "#eeda4e", "#006189", "#7979b0", "#539749", "#f7c73e", "#ed5033", "#4067b1", "#604788", "#1b81c0", "#346697", "#244970", "#f59f1e", "#7fb2e0", "#fff"],
        data: [60, 60, 85, 65, 25, 65, 75, 100, 85, 100, 100, 100, 50, 60, 75, 75, 85, 75, 0]
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'A chart of my application and coding language knowledge'
      }
    }
  });
});