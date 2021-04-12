<template>
  <div class="movie-card">
        <!-- <router-link :to="{name: 'episodes-series', params:{series: 'Breaking Bad'}}"> -->
        <div class="container" @click="trigger">
      
          <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/454262/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE%40._V1_SY1000_CR0%2C0%2C678%2C1000_AL_.jpg" alt="cover" class="cover" /></a>
      
          <div class="back-cover">
            <div class="details">
      
              <div class="title1"> Breaking Bad <span>TV-14</span></div>
      
              <div class="title2"> TV Series (2008–2013) </div>
      
            </div>
      
          </div>
      
          <div class="about-movie">
            <div class="colum-one">  
              <div class="colum-catogary">
                <span class="tag">Crime</span>
                <span class="tag">Drama</span>
                <span class="tag">Thriller</span>
                <div>
                </div>
                <!--end colum-one -->
              </div>
            </div>
            <!--end colum-one -->
            <div class="colum-second">
              <p>
                When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose. 
                He lives with his teenage son, who has cerebral palsy, and his wife, in New Mexico. Determined to ensure that his family will have a secure future, 
                Walt embarks on a career of drugs and crime.
              </p>
            </div>
          </div>
          <!--end -about-movie -->
        </div>
        <!--end container -->
      <!-- </router-link> -->

      <!-- <router-link :to="{name: 'episodes-series', query:{series: 'Better Call Saul'}}"> -->
        <div class="container" @click="trigger2">
      
            <a href="#"><img src="https://production-gameflipusercontent.fingershock.com/us-east-1:a3964cec-0dc4-4fa9-bee2-0c367270d521/1d81df41-2254-4558-aac0-780c3e34c49a/10019a00-aec9-49e3-8066-26033f76b496" alt="cover" class="cover" /></a>
        
            <div class="back-cover-2">
                <div class="details">
        
                <div class="title1">Better Call Saul</div>
        
                <div class="title2">TV Series (2015–2020) </div>
        
        
                </div>
        
            </div>
        
            <div class="about-movie">
              <div class="colum-one">  
                <div class="colum-catogary">
                  <span class="tag">Crime</span>
                  <span class="tag">Drama</span>
                  <span class="tag">EE.UU</span>
                  <div>
                  </div>
                  <!--end colum-one -->
                </div>
              </div>
              <!--end colum-one -->
              <div class="colum-second">
                <p>
                    Better Call Saul follows the transformation of James "Jimmy" McGill, 
                    a former con artist who is trying to become a respectable lawyer, 
                    into the personality of the flamboyant criminal lawyer Saul Goodman, 
                    over the six-year period prior to the events of Breaking Bad.
                </p>
              </div>
            </div>
            <!--end -about-movie -->
          </div>
          <!--end container -->
      <!-- </router-link> -->
      </div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return {
      }
    },
    methods: {
      trigger(){
        this.$router.push('/episodes?series=Breaking+Bad')
      },
      trigger2(){
        this.$router.push('/episodes?series=Better+Call+Saul')
      }
    }
  }
</script>

<style scope>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
@media (max-width: 768px) {
  .container {
    width: 260px;
    height: 950px;
    overflow: hidden;
  }

  .container .about-movie {
    display: inline-block;
  }
  .container .about-movie p {
    width: 49%;
    padding-left: 15px;
    padding-right: 15px;
  }
}
.movie-card {
  font: 14px/22px "Lato", Arial, sans-serif;
  color: #A9A8A3;
  padding: 30px 0px;
  display: flex;
}

.movie-card a{
  margin: auto auto;
}

.movie-card .container {
  margin: auto auto;
  width: 540px;
  height: 530px;
  background: #F0F0ED;
  border-radius: 5px;
  position: relative;
  transition: box-shadow .1s;
}

.movie-card .container a img {
  max-width: 550px;
  max-height: 250px;
}
.movie-card .container .back-cover {
  height: 310px;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.movie-card .container .back-cover-2 {
    height: 310px;
    margin: 0;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

.movie-card .container:hover{
    box-shadow: 60px rgba(255, 255, 255, 0) !important;
  }

.movie-card .container .back-cover:before {
  content: " ";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("http://laughingsquid.com/wp-content/uploads/bbillo2.jpg");
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  transform: skewY(-3.2deg);
  transform-origin: 0 0;
}

.movie-card .container .back-cover-2:before {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("https://pro2-bar-s3-cdn-cf1.myportfolio.com/b7585a1001542f9c73a88f03079334e9/cdeb23ff2e4cef5c0562c5e8_rw_1920.jpg?h=e9e06477e1e566fe59e09611176a92e5");
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    transform: skewY(-3.2deg);
    transform-origin: 0 0;
  }

.movie-card .container .cover {
  position: absolute;
  top: 160px;
  left: 20px;
  z-index: 2;
  width: 32%;
  height: 50%;
  background-size: cover;
}

.movie-card .container .details {
  padding: 210px 0 0 205px;
}
.movie-card .container .details .title1 {
  color: #eee;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 16px;
  position: relative;
}
.movie-card .container .details .title1 span {
  position: absolute;
  top: 3px;
  margin-left: 2px;
  background: #C4AF3D;
  border-radius: 5px;
  color: #544C21;
  font-size: 14px;
  padding: 0px 10px;
}
.movie-card .container .title2 {
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.movie-card .container .about-movie {
  display: inline-flex;
  bottom: 0px;
  height: 200px;
  font-size: 16px;
  line-height: 26px;
  color: #B1B0AC;
}
.movie-card .container .about-movie .colum-one {
  padding-left: 50px;
  padding-top: 120px;
  width: 220px;
  float: left;
  text-align: left;
}
.movie-card .container .about-movie .colum-one .colum-catogary {
  text-align: left;
  margin-left: -48px;
}
.movie-card .container .about-movie .colum-one .colum-catogary span {
  padding: 1px 8px;
  font-size: 14px;
  background: white;
  border-radius: 10px;
  margin-left: 2px;
}
.movie-card .container .about-movie .colum-one .colum-catogary span:hover {
  background: #999;
  color: white;
  cursor: pointer;
}
.movie-card .container .about-movie .colum-second {
  padding-left: 5px;
  margin-top: 0;
  margin-left: -20px;
  width: 430px;
  float: left;
}
.movie-card .container .about-movie .colum-second p {
  width: 70%;
}
.movie-card .container .about-movie .colum-second p a {
  text-decoration: none;
  color: #6e6ed8;
}
fieldset {
  border-color: #fff;
  border-style: none;
}
/* 
 some  animtion   do  when  load window 
 */
@-webkit-keyframes pulse {
  50% {
    color: #5e5e5e;
    text-shadow: 0 0 15px #777777;
  }
}
@keyframes pulse {
  50% {
    color: #5e5e5e;
    text-shadow: 0 0 15px #777777;
  }
}

</style>