<template>
    <div class="confirm">
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
              <div class="list_title">
               Quramy
              </div>
            </div>
            <div class="element_container">
              <div v-if="!isEdit" class="element" :key="element.id" v-for="element in list">
                <div class="element_name" >
                  {{ element.name }}
                </div>
              </div>
              <div v-else>
                <transition-group name="slide">
                    <div v-for="element in list" :key="element.id" class="element_changer">
                        <input  type="text" class="element" style="outline:none ; border:0 ; font-size:16px ; border-bottom: 2px solid #FF7275;"  v-model="element.name"/>
                        <img src="../icons/cross.svg" @click="removeElement(element.id)" style="width:20px" class="remove_img" alt="">
                    </div>
                </transition-group>
                <div class="element" style="display: flex; justify-content: center; color:#11A575; border: 2px solid #11A575 ; cursor:pointer ;" @click="addNewElement">
                    Jan'a element qosu
                </div>
              </div>
            </div>
            <div class="list_header">
              Cody
            </div>
            <div class="element_container">
              <div v-if="!isEdit" class="element">
                {{ code }}
              </div>
              <input v-else type="text" class="element" style="outline:none ; border:0 ; font-size:16px ; border-bottom: 2px solid #FF7275;" v-model="this.code"/>
            </div>
            <div class="list_button_wrapper">
              <div class="list_button" @click="this.isEdit = !this.isEdit" style="background:#FF7275">
                <div v-if="isEdit" style="background:#FF4A43 ;">
                  Durys
                </div>
                <div v-else >
                  O'zgertu
                </div>
              </div>
              <div class="list_button" @click="toConfirm" style="background:#11A575">
                Rastau
              </div>
              <transition name="fade">
                <div class="list_alert" v-if="isAlert">
                    {{ alertText }}
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  *{
    padding: 0 ; 
    margin: 0 ; 
    box-sizing: border-box;
  }
  </style>
  
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
    display: flex ; 
    padding-left: 40px ; 
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
  .remove_img{
    cursor: pointer ; 
    position: absolute ; 
    right: 90px ; 
    top: 17.5px ; 
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
  </style>
  
  <script>
  export default{
    data(){
      return{
        code: "544900054227", 
        isEdit: false , 
        isAlert: false , 
        alertText: "" , 
        list: [
          {id: 1 , name:"Shoshqa eti" , output:"Haram" },
          {id: 2 , name:"Qant" , output:"Halal" },
          {id: 3 , name:"Tuz" , output:"Halal"},
          {id: 4 , name:"Siyr eti" , output:"Halal"},
          {id: 5 , name:"Tauyq eti" , output:"Halal"},
          {id: 6 , name:"Esek eti" , output:"Haram"},
          {id: 7 , name:"Qamyr" , output:"Halal"},
          {id: 8 , name:"Limon" , output:"Halal"},
          {id: 9 , name:"Jarqanat eti" , output:"Kumandi"} , 
          {id: 10 , name:"Tauyq eti" , output:"Halal"},
          {id: 11 , name:"Esek eti" , output:"Haram"},
          {id: 12 , name:"Qamyr" , output:"Halal"},
          {id: 13 , name:"Limon" , output:"Halal"},
          {id: 14 , name:"Jarqanat eti" , output:"Kumandi"}
        ] , 
      }
    } , 
    methods: {
        toConfirm(){
            if (this.isEdit){
               this.showAlert("Aldymen durystan'yz") ; 
               return ; 
            }
            if (this.checkForEmpty()){
                this.showAlert("Bos joldy oshirin'iz") ;
                return ; 
            }
            if (this.list.length == 0){
                this.showAlert("Quramdy toltyryn'yz") ;
                return ; 
            }
            if (this.code.length === 0){
                this.showAlert("Code bos bola almaidy") ;
                return ; 
            }
            if (!(/^\d+$/.test(this.code))){
                this.showAlert("Code tek san bola alady") ; 
                return ; 
            }
            this.$router.push('./output') ; 
        } , 
        showAlert(message){
            this.alertText = message ; 
            this.isAlert = true ;
            setTimeout(() => {
                this.isAlert = false ; 
            }, 1500);
            return ; 
        } , 
        removeElement(idToRemove){
            this.list = this.list.filter(element => element.id !== idToRemove);
        } , 
        addNewElement(){
            if (this.list.length > 0){
                const newId = this.list[this.list.length-1].id + 1 ; 
                this.list.push({id: newId , name: ""}) ; 
                return ;
            }
            const newId = 1 ; 
            this.list.push({id: newId , name: ""}) ; 
        } , 
        checkForEmpty(){
            for (const element of this.list){
                if (element.name.length === 0)
                    return true ;
            }
            return false ; 
        }
    }
  }
  </script>