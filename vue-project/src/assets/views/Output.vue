<template>
    <div class="output">
      <div class="container">
        <div class="header">
            <div class="header_content">
            <img class="header_icon" src="../../assets/icons/moon.svg" />
            <div class="title">
                Adal AI
            </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="images">
            <div>
                <img src="../../assets/icons/composition.jpg" alt="">
            </div>
            <div>
                <img src="../../assets/icons/code.png" alt="">
            </div>
            </div>
            <div class="main">
                <div class="list">
                    <div class="list_header">
                    Quramy
                    </div>
                    <div class="element_container">
                        <div class="element" :key="element.id" v-for="element in list">
                        <div class="element_name" >
                            {{ element.name }}
                        </div>
                        <div class="element_output" :style="{background: colors[element.output].background , color: colors[element.output].color}">
                            {{ element.output }}
                        </div>
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
  .container{
    width: 1200px ; 
    height: 100vh ; 
    background: #FAFAFC ; 
    margin: 0 auto ; 
  }
  .wrapper{
    width: fit-content;
    margin: 0 auto ; 
    display: flex ; 
    align-items: center ; 
    gap: 50px ; 
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
    display: flex ; 
    margin: 0 auto ; 
    align-items: center ; 
    justify-content: right;
    padding-top: 2vh ; 
    padding-right: 100px ; 
  }
  .title{
    color: #282C34 ;
    font-weight: 600 ; 
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
    display: flex ; 
    /* padding-left: 40px ;  */
    font-size: 24px; 
    font-weight: 600 ; 
    padding-bottom: 10px ; 
  }
  .list_button_wrapper{
    position: relative ; 
    width: 600px ; 
    gap: 10px ; 
    margin: 0 auto ;
    margin-top: 10px ; 
    display: flex ; 
    justify-content: right;
  }
  .list_button{
    width: 90px ; 
    height: 42px ; 
    display: flex ; 
    justify-content: center ; 
    align-items: center ; 
    font-size: 16px ;
    border-radius: 10px ; 
    color: white ; 
    cursor: pointer ; 
  }
  .list_button div{
    width: 90px ; 
    height: 42px ; 
    display: flex ; 
    justify-content: center ; 
    align-items: center ; 
    border-radius: 10px ; 
  }
  .list_alert{
    position: absolute ; 
    top: 60px ; 
    padding: 10px ; 
    background: #FF1910 ;
    color: white ; 
    opacity: .7 ; 
  }
  .element_container{
    max-height: 50vh ; 
    overflow-y: scroll ; 
    margin-bottom: 2vh ; 
    padding-bottom: 20px ; 
  }
  .element_container::-webkit-scrollbar {
    display: none; 
  }
  .element{
    width: 600px ; 
    margin: 0 auto ;
    margin-top: 10px ; 
    padding: 15px ; 
    background: white ; 
    display: flex; 
    align-items: center ; 
    font-weight: 600 ; 
    justify-content: space-between;
    border-radius: 5px; 
  }
  .element_changer{
    display: flex ; 
    position: relative ; 
  }
  .element_output{
    display: flex ; 
    border-radius: 10px ; 
    justify-content: center; 
    align-items: center ; 
    width: 90px ; 
    height: 30px ; 
  }
  .remove_img{
    cursor: pointer ; 
    position: absolute ; 
    right: 10px ; 
    top: 17.5px ; 
  }
  .answer{
    display: flex ; 
    align-items: center ; 
    justify-content: center ;
  }
  .answer_title{
    font-size: 18px ; 
    font-weight: 500 ; 
  }
  .fade-enter-from{
    transform: translateX(30px);
    opacity: 0;
  }
  .fade-enter-active{
    transition: all ease .4s ; 
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.4s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }
  @media screen and (max-width: 1450px){
    .images img{
        width: 250px ; 
        height: 250px ; 
    }
  }
  @media screen and (max-width: 1200px){
    .container{
        width: 1000px ; 
    }
    .images{
        width: fit-content ; 
        margin: 0 ; 
    }
    .images img{
        width: 200px ; 
        height: 200px ; 
    }
    .element_container{
        max-height: 55vh ; 
    }
  }
  @media screen and (max-width: 1000px){
    .container{
        width: 100% ; 
    }
    .wrapper{
        margin: 0 auto ; 
    }
    .header{
        padding-right: 100px ; 
    }
    .element_container{
        max-height: 50vh ; 
    }
    .images img{
        width: 200px ; 
        height: 200px ; 
    }
    .element , 
    .list_button_wrapper{
        width: 450px ;
    }
  }
  @media screen and (max-width: 800px){
    .wrapper{
        display: block ;
    }
    .header{
        justify-content: center;
        padding: 0 ; 
        margin-bottom: 3vh ; 
    }
    .images{
        width: 100% ;   
        display: flex ; 
        justify-content: space-between;
    }
    .images div {
        width: fit-content ; 
    }
    .images img{
        width: 200px ; 
        height: 200px ;
    }
  }
  @media screen and (max-width: 500px){
    .wrapper {
        width: calc(100% - 50px)
    } 
    .images , 
    .element , 
    .list_button_wrapper{
        width: 100% ; 
    }
    .images img{
        width: 150px ; 
    }
    .images {
        
    }
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