<template>

  <div class="about-page">
    <h2>Meet Our Founders</h2>
    <ul class="founder-list">
      <li v-for="founder in founders" :key="founder.name" class="founder-item">
        <span class="founder-name">{{ founder.name }}</span>
        <span class="founder-school">{{ founder.school }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      founders: [
        { name: 'Youness Anouar', school: 'Mohammed VI Polytechnic University (UM6P)' },
        { name: 'Abdelbassit Essaihi', school: 'International University of Rabat (UIR)' },
        { name: 'Doha Alaoui', school: 'Baccalaureate, Sciences Mathématiques' },
        { name: 'Zineb Aadili', school: 'Higher National School of Chemistery, Kenitra (ENSCK)' },
        { name: 'Olaya Badad', school: 'Higher Institute for Engineering Sciences (ISSI)' },
        { name: 'Alaae Hamidine', school: 'Baccalaureate, Sciences Physiques et Chimiques' },
        { name: 'Rayhana Atmani', school: 'National School of Commerce and Management (ENCG)' },
        { name: 'Heba Amdjar', school: 'National School of Commerce and Management (ENCG)' },
      ]
    };
  }
}
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  text-align: center;
  color: #333;
}

h1, h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #6b3a2a; /* Brand color */
}

.founder-list {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

.founder-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.founder-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  background-color: #eee; /* Subtle background color change on hover */
}

.founder-name, .founder-school {
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
}

.founder-school {
  font-size: 14px;
  font-weight: normal;
  color: #666;
}
</style>
