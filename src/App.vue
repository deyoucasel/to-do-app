<template>
  <div id="app">
    <div class="wrapper">
      <div class="sidebar card">
        <h2>System</h2>
        <div>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2 12.4L7.5 10.4C8.4 9.69999 9 8.69999 9 7.49999V6.69999C9 4.79999 7.6 3.09999 5.7 2.99999C3.7 2.89999 2 4.49999 2 6.49999V7.49999C2 8.69999 2.6 9.69999 3.5 10.4L0.8 12.5C0.3 12.9 0 13.5 0 14.1V16C0 16.6 0.4 17 1 17H10C10.6 17 11 16.6 11 16V14C11 13.4 10.7 12.8 10.2 12.4Z" fill="#3B5CE7"/>
            <path d="M15.1 7.4L13.3 6.2C13.7 5.8 14 5.2 14 4.5V3.6C14 2.4 13.1 1.2 11.9 0.999999C10.7 0.799999 9.70001 1.5 9.20001 2.4C10.3 3.4 11 4.8 11 6.4V7.4C11 8.3 10.8 9.2 10.4 9.9C10.4 9.9 11.6 10.8 11.6 10.9H15C15.6 10.9 16 10.5 16 9.9V9.1C16 8.4 15.7 7.8 15.1 7.4Z" fill="#3B5CE7"/>
        </svg>
        Users
        </div>
      </div>
      <div class="content">
        <div class="card">
          Dashboard
          <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </nav>
        </div>
        <div>
          <button class="btn">Add new user</button>
        </div>
        <div class="card">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
}
.wrapper{
  display: flex;
}
.card{
  background: #ffffff;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 18px;
}
.sidebar, .content {
  margin: 0px 10px;
}
.sidebar {
  width: 20%;
}
.content{
  width: 80%;
}

body{
  background: #f5f6fa;
  font-family: roboto;
}
.btn {
  background-color: #0054fe;
  border: none;
  color: white;
  padding: 10px 32px;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
  border-radius: 7px;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 18px;
}
table{
  width: 100%;
}
table thead {
  color: #9B9EAC;
}
/*table css*/
.table{
  overflow-x:auto;
}
</style>
