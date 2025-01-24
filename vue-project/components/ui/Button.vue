<template>
    <div :class="isOutline ? 'button_outline' : 'button' ">
        <div class="title" v-if="title">
            {{ title }}
        </div>
        <img :src="src" v-else />
    </div>
</template>

<style>
.button{
    width: v-bind(width) ; 
    height: v-bind(height) ;
    background: v-bind(color) ; 
    font-weight: 600 ; 
    color: white ; 
    display: flex ; 
    align-items: center ; 
    justify-content: center;
    border-radius: v-bind(radius) ; 
    font-size: v-bind(font) ; 
}
.button_outline{
    width: v-bind(width) ; 
    height: v-bind(height) ;
    color: black ; 
    font-weight: 600 ; 
    background: white ; 
    border: 1px solid gray ; 
    display: flex ; 
    align-items: center ; 
    justify-content: center;
    border-radius: v-bind(radius) ; 
    font-size: v-bind(font) ; 
}
img{
    width: v-bind(imgW) ; 
    height: v-bind(imgH) ; 
}
</style>

<script>

export default{
    data(){
        return{
            width: '50px' ,
            height: '50px' , 
            imgH: '' , 
            imgW: '' , 
            color: '#C67C4E' , 
            radius: '15px' , 
            font: "20px" 
        }
    } , 
    props: ['src' , 'title' , 'size' , 'background' , 'isOutline'] , 
    mounted(){
        switch (this.size){
            case 'S': 
                break ; 
            case 'M': 
                this.width = "200px" ; 
                this.height = "80px" ; 
                this.radius = "20px" ; 
                this.font = "25px" ; 
                break ; 
            case 'L': 
                this.width = "450px" ; 
                this.height = "100px"; 
                this.radius = "30px" ; 
                this.font = "40px" ; 
                break ; 
        }
        const valueW = parseInt(this.width, 10);
        const valueH = parseInt(this.height, 10);

        this.imgW = (valueW / 2.5) + "px" ; 
        this.imgH = (valueH / 2.5) + "px" ; 

        if (this.background)
            this.color = this.background 
    }
}
</script>

