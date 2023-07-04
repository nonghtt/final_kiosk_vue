<template lang="">
    <div>
        <div class="boxcontainer">
            <div class="leftsidebar">
                <div class="orderstatus" :style="{ transform: 'translateY(' + scrollTop + 'px)' }">
                        왼쪽 사이드바임
                        주문진행상태바<br/>


                    <div>1. 지점 선택</div>
                    <div>2. 사이즈 선택</div>
                    <div>3. 맛 선택 {{counter}}  / {{select_option}}</div>
                    <div>4. 결제 
                        <button class="btn_payment"> 결제하기</button>
                                <br/><br/><br/><br/><br/>
                            </div>





                       <!-- 장바구니의 공간 실제 장바구니에 들어가는 아이스크림에 대한 div가 생성되는 곳 -->
                   <div class="container_basket">
                       <div v-for="(index) in selectproduct" :key="index"
                       class="selected_basket" >
                       <img :src="index" alt="../../assets/btn_cancle.PNG" 
                       style="width:100px; height:100px;">
                           <button><img src="">X</button>
                           <div class="shopping_basket_footer"> 결제하기</div>
                       </div></div></div>


</div>






<div class="body">
    <div class="ranking">    
            <!-- <div class="upperleftside">좌상단 사이드</div> -->
            <div class="rank" style="color:white; font-weight:bold;">
                <div class="text_rank">1위
                    <div>
                        <img src="../../assets/3.png" style="height:150px; width:100px;">
                    </div>
                </div>
            </div>
            <div class="rank" style="color:white; font-weight:bold;">
                <div class="text_rank">2위
                    <div>
                        <img src="../../assets/4.png" style="height:150px; width:100px;">
                    </div>
                </div>
            </div>
            <div class="rank" style="color:white; font-weight:bold;">
                <div class="text_rank">3위
                    <div>
                        <img src="../../assets/8.png" style="height:150px; width:100px;">
                    </div>
                </div>
            </div>
            <div class="rank" style="color:white; font-weight:bold;">
                <div class="text_rank">4위
                    <div>
                        <img src="../../assets/10.png" style="height:150px; width:100px;">
                    </div>
                </div>
            </div>
            <div class="rank" style="color:white; font-weight:bold;">
                <div class="text_rank">5위
                    <div>
                        <img src="../../assets/14.png" style="height:150px; width:100px;">
                    </div>
                </div>
            </div>
            <div class="rank" style="color:white; font-weight:bold;">
                <div class="text_rank">6위
                    <div>
                        <img src="../../assets/1.png" style="height:150px; width:100px;">
                    </div>
                </div>
            </div>
                <!-- <div class="upperrightside">우상단 사이드</div> -->
        </div>
        바디


<div class="selectbar_size" >
        <select v-model="select_option" @change="choicetype">
            <option disabled value="" style="text-align:center;">--사이즈를 선택해주세요.--</option>
            <option id="single" value="1">싱글(SINGLE,1)</option>
            <option id="double" value="2">더블(DOUBLE,2)</option>
            <option id="fint" value="3">파인트(FINT,3)</option>
            <option id="quarter" value="4">쿼터(QUARTER,4)</option>
            <option id="family" value="5">패밀리(FAMILY,5)</option>
            <option id="half_gallon" value="6">하프갤런(HALF-GALLON,6)</option>
        </select>
        <!-- <button @click="getValue">선택</button> -->
    </div>










            <div> 
                <!-- 메뉴 뿌리는 곳 -->
                            <div class="container_list">
                                <div v-for="product in list" :key="product.productnum" class="productsite"
                                        @click="incrementCounter(product.productnum)">
                                        <img :src="'http://localhost:8085/products/img/'+product.productnum" 
                                        class="img_product" style="width:75%; height:75%;">
                                            <!-- <h4>{{product.productnum}}</h4> -->
                                            <h4>{{product.productname}}</h4>
                                            <!-- <h4>{{product.productinfo}}</h4> -->
                                </div>
                            </div>
            </div>




</div>
                <div class="rightsidebar"><br/>
                    <div class="shoppingbasket" :style="{ transform: 'translateY(' + scrollTop + 'px)' }">
                       
                        장바구니<br/>
                        {{counter}} / {{select_option}}
                        <div id="selected">
                            
                        </div>


                        <!-- 장바구니의 공간 실제 장바구니에 들어가는 아이스크림에 대한 div가 생성되는 곳 -->
                    <div class="container_basket">
                        <div v-for="(index) in selectproduct" :key="index"
                        class="selected_basket" >
                        <img :src="index" alt="../../assets/btn_cancle.PNG" 
                        style="width:100px; height:100px;">
                            <button><img src="">X</button>
                            <div class="shopping_basket_footer"> 결제하기</div>
                        </div>
                        
                    </div>
                    
                        
                       
                        

                            
                    
                    <!-- 장바구니끝 div -->
                    </div>
                    
                </div>
        </div>
        <div></div>
<!-- 결제 버튼을 누르면 이쪽에서 8084 sell데이터를 보낼거야 -->
</div>



</template>
<script>
// import paymentModal from '@/components/sellingtype/kioskMenu.vue'

export default {
    name:"kioskMenu",
    data(){
        return{
            productnum:"",
            productname:'',
            productimg:'',
            productinfo:'',
            cost:'',
            scrollTop: 0,
            list:[],
            select_option: 0,
            counter: 0,
            selectproduct:[],
            url:'http://localhost:8085/products/img/',
            cancleurl:'../assets/btn_cancle.PNG',
            payment_window:false,
            openModal:false
                }
       },
        created:function(){
            const self = this;
            self.$axios.get('http://localhost:8085/products').then(function(res){
                if(res.status == 200){
                    // alert(res.data.list)
                     self.list = res.data.list
                  
                
                }else{
                    alert('에러코드'+res.status)
                }
            });
 
        },
        mounted() {
    window.addEventListener('scroll', this.handleScroll);
         },
         beforeUnmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
     methods: {
        handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    getValue() {
      console.log('Selected value:', this.select_option);
      alert(this.select_option);    
    },

    // 메뉴를 누르면 select_option의 value가 하나씩 올라가는 곳
    incrementCounter(num) {
alert(this.cancleurl)
        console.log(num)
      this.counter += 1;
      this.selectproduct.reverse()
      this.selectproduct.splice(0,1)
      this.url = this.url + num
      console.log(this.url)
        this.selectproduct.push(this.url)
        this.selectproduct.reverse()
        console.log(this.selectproduct)
        // document.getElementsByClassname('selected_basket').style.borderColor="white";
        this.url='http://localhost:8085/products/img/'

        // this.


      if(this.counter>this.select_option){
            this.counter = this.select_option
        alert('선택가능한 종류가 초과하였습니다.');
      }
    },
    firtstchoicetype(){
        if(this.counter==0){
            this.counter > 0 ; 
            alert('사이즈를 먼저 선택해주세요.');
        }
    },
    choicetype(){
        this.counter=0;
        // this.select_option   >> 맛의 갯수
 

        
        
        

        //장바구니에 맛의 갯수만큼 div가 생성되게 해야함.((((((일단 보류))))))
        // let dom = document.getElementById('selected');
        // if (this.select_option == 1) {
        //     dom.innerHTML = '<div>...1...</div>';
        // } else if (this.select_option == 2) {
        //     dom.innerHTML = '<div>...1...</div><br/>'
        //                     +'<div>...2...</div>';
        // } else if(this.select_option == 3){
        //     dom.innerHTML = '<div>...1...</div><br/>'
        //                     +'<div>...2...</div><br/>'
        //                     +'<div>...3...</div><br/>';
        // } else if(this.select_option == 4){
        //     dom.innerHTML = '<div>...1...</div>';
        //                     +'<div>...2...</div><br/>'
        //                     +'<div>...3...</div><br/>'
        //                     +'<div>...4...</div><br/>';
        // } else if(this.select_option == 5){
        //     dom.innerHTML = '<div>...1...</div>'
        //                     +'<div>...2...</div><br/>'
        //                     +'<div>...3...</div><br/>'
        //                     +'<div>...4...</div><br/>'
        //                     +'<div>...5...</div><br/>';
        // } else if(this.select_option == 6){
        //     dom.innerHTML = '<div>...1...</div>'
        //                      +'<div>...2...</div><br/>'
        //                     +'<div>...3...</div><br/>'
        //                     +'<div>...4...</div><br/>'
        //                     +'<div>...5...</div><br/>'
        //                     +'<div>...6...</div><br/>';
        // }





        // select_box의 value를 출력해줌
        // alert(this.select_option);

        this.selectproduct.length = this.select_option;
    
        //
        console.log(this.selectproduct.length);
        console.log(this.select_option);
        

    }    
     },
     components:{
    // paymentModal:paymentModal
  },
    }
</script>


<style scoped>

*{
    margin:0; padding:0;
}


/* 추천메뉴(?) 보여주는 컨테이너 */
.ranking{
    display:flex;
    height:100%;
    background-color: white;
    border :5px solid;
    border-radius: 30px;
    border-color:#f5d742;
    flex-direction: row;
    justify-content: space-around;
}   
.text_rank{ 
    color:#f5d742;
}

.selectbar_size{
    text-align: left;
    margin-left:10px;
    margin-top:10px;
    position:fixed;
}

.boxcontainer{
    display: flex;
}
.leftsidebar{
background-color:white;
width:10%;
height:80%;
}


/* 리스트 컨테이너 클래스명 */
.container_list{
    /* display:flex; */
        
    padding-top:10px;

    

}
/* 리스트 내 각각의 상품. for문으로 작성된 상품 */
.productsite{
    width:20%;
    height: 300px;
    /* display: inline-block; */
       line-height: 100px;
       text-align: space-between;
    background-color: white;
    /* float:left; */
display:inline-block;


    /* margin-left: 10px ; 
    margin-bottom: 20px; */
    border-radius: 10%;
    margin: 0 10px;


/* justify-content: space-around; */
}


.orderstatus{
    border:5px solid;
    border-color: aquamarine;
    border-radius: 10px;
    margin:10px;
    background-color: white;
    position: relative;
    height:80%;
  transition: transform 0.3s ease;
}
.body{
    /* background-color:#42b3f5; */
    width:80%;
    height:100%;
}

.rightsidebar{

    width:10%;
    height:100%;
}
.shoppingbasket{
    border:5px solid;
    border-color: aquamarine;
    border-radius: 10px;
    margin:10px;
    background-color: white;
    position: relative;
    height:500px;
  transition: transform 0.3s ease;

}
.selected_basket{
    border:5px solid;
    border-color:#265CAC;
    border-radius: 70%;
    background-color: white;
    width:100px;
    height:100px;
    /* position:absolute; */
    /* margin:auto; */
    /* display:inline; */
    margin:10px;
    justify-content: center;
    align-content:space-between;
}

.container_basket{
    border:5px solid;
    border-color: #265CAC;
    background-color: white;
    padding: 10px 10px 10px 10px;
}
.shopping_basket_footer{
    position:fixed;
    bottom:0;
    margin: 0 auto;
    left:25%;
}
.payment_window{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:500px;
    height:500px;
    border-radius: 30px;
}
.payment_modal{
    background-color:white;
}


</style>