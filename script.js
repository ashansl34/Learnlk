document.addEventListener('DOMContentLoaded', () => {
  const teachers = document.querySelectorAll('.teacher h3');
  teachers.forEach(teacher => {
    teacher.addEventListener('click', () => {
      const topics = teacher.nextElementSibling;
      if (topics) {
        topics.style.display = topics.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  const topicSpans = document.querySelectorAll('.topics li span');
  topicSpans.forEach(span => {
    span.addEventListener('click', () => {
      const days = span.nextElementSibling;
      if (days) {
        days.style.display = days.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
