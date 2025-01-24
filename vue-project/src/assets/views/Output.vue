<template>
    <div class="output">
      <div class="container">
        <div class="images">
          <div>
            <img src="../../assets/icons/composition.jpg" alt="">
          </div>
          <div>
            <img src="../../assets/icons/code.png" alt="">
          </div>
        </div>
        <div class="main">
          <div class="header">
            <div class="header_content">
              <img class="header_icon" src="../../assets/icons/moon.svg" />
              <div class="title">
                Adal AI
              </div>
            </div>
          </div>
          <div class="list">
            <div class="list_header">
              Quramy
            </div>
            <div class="element" :key="element.id" v-for="element in list">
              <div class="element_name" >
                {{ element.name }}
              </div>
              <div class="element_output" :style="{background: colors[element.output].background , color: colors[element.output].color}">
                {{ element.output }}
              </div>
            </div>
            <div class="answer">
              <div class="answer_title">
                {{ output }}
              </div>
              <div class="count">
                <img v-if="ok" src="../../assets/icons/choose.svg" alt=""/>
                <img v-else style="width:25px;height:25px;" src="../../assets/icons/cross.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
  /* #11A575 */
  *{
    padding: 0 ; 
    margin: 0 ; 
    box-sizing: border-box;
    font-family: "Open Sans", serif;
  }
  .output{
    background: white ; 
    height: 100vh ; 
  }
  .container{
    width: 1200px ; 
    height: 100vh ; 
    background: #FAFAFC ; 
    margin: 0 auto ; 
    display: flex ; 
    align-items: center ; 
    justify-content: space-between ;
  }
  .images{
    width: 400px ; 
    margin: 0 auto ; 
  }
  .images div:first-of-type{
    margin-bottom: 50px ; 
  }
  .images div{
    display: flex ; 
    justify-content: center;
  }
  .images img{
    width: 300px ; 
    height: 300px ; 
  }
  .header{
    padding-top: 5vh ; 
    display: flex ; 
    width: 600px ; 
    margin: 0 auto ; 
    align-items: center ; 
    justify-content: space-between;
    position: relative ; 
    margin-bottom: 5vh ; 
  }
  .header_content{
    position: absolute ; 
    right: 30px ; 
  }
  .title{
    color: #282C34 ;
    font-weight: 600 ; 
  }
  .main{
    width: 750px ; 
    height: 90vh ; 
  }
  .main img {
    width: 40px ; 
    height: 40px ; 
  }
  .count{
    width: 100px ; 
    height: 50px ; 
    display: flex ; 
    align-items: center ; 
    justify-content: center ; 
  }
  .list{
    margin-top: 2vh ; 
  }
  .list_header{
    padding-left: 40px ; 
    font-size: 24px; 
    font-weight: 600 ; 
    padding-bottom: 10px ; 
  }
  .element{
    width: 600px ; 
    margin: 0 auto ;
    margin-top: 10px ; 
    padding: 10px ; 
    background: white ; 
    display: flex; 
    align-items: center ; 
    font-weight: 600 ; 
    justify-content: space-between;
    border-radius: 5px; 
  }
  .element_output{
    width: 90px ; 
    height: 35px ; 
    display: flex ; 
    align-items: center ; 
    justify-content: center ; 
    border-radius: 10px ; 
  }
  .answer{
    display: flex ; 
    font-size: 20px ; 
    align-items: center ; 
    font-weight: 600 ; 
    margin-top: 50px ;
    padding-left: 200px ; 
  }
  
  </style>
  
  <script>
  export default{
    data(){
      return{
        output: "Kuma'ndi zattar bar" , 
        ok: false , 
        list: [
          {id: 1 , name:"Shoshqa eti" , output:"Haram"},
          {id: 2 , name:"Qant" , output:"Halal"},
          {id: 3 , name:"Tuz" , output:"Halal"},
          {id: 4 , name:"Siyr eti" , output:"Halal"},
          {id: 5 , name:"Tauyq eti" , output:"Halal"},
          {id: 6 , name:"Esek eti" , output:"Haram"},
          {id: 7 , name:"Qamyr" , output:"Halal"},
          {id: 8 , name:"Limon" , output:"Halal"},
          {id: 9 , name:"Jarqanat eti" , output:"Kumandi"}
        ] , 
        colors: {
          Halal: {color: '#87C49B' , background: '#DEF9EA'} , 
          Kumandi: {color: '#9A9BA0' , background: '#E5E6EA'} , 
          Haram: {color: '#A85464' , background:  '#FCDFE4'}
        }
      }
    }
  }
  </script>