<template lang="">
  <div>
    <div class="boxcontainer">
      <div class="leftsidebar">
        <!-- 장바구니의 공간 실제 장바구니에 들어가는 아이스크림에 대한 div가 생성되는 곳 -->
      </div>

      <div class="body">
        <div class="ranking">
          <!-- <div class="upperleftside">좌상단 사이드</div> -->
          <div class="rank" style="color: white; font-weight: bold" v-for="(rank,index) in toplist" :key="index">
            <div class="animate__animated animate__bounce animate__delay-2s animate__faster animate__repeat-2" id="text_rank">
              {{index+1}}위
              <div></div>
              <div class="animate__animated animate_bounce">


                <img
                  :src="rank"
                  style="height: 200px; width: 200px"
                />
              </div>
            </div>
          </div>
          
          <!-- <div class="upperrightside">우상단 사이드</div> -->
        </div>

        <!-- <div class="selectbar_size">
          <select v-model="select_option" @change="choicetype">
            <option disabled value="" style="text-align: center">
              --사이즈를 선택해주세요.--
            </option>
            <option
              v-for="(sellprod, index) in sellproduct"
              :key="sellprod.sellproductnum"
              :value="index + 1"
            >
              {{ sellprod.sellproductname }}
            </option>
          </select>
        </div> -->

        <div>
          

                  <div class="progress_bar">
                    <br/>
                    <div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                    진행상태 STEP1 > STEP2 > STEP3 > STEP4 가즈아
                  
                    <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>

                  </div>


          <!-- 메뉴 뿌리는 곳 -->
          <div class="container_list">
            <div
              v-show="progress == 3"
              v-for="product in list"
              :key="product.productnum"
              class="productsite"
              @click="incrementCounter(product.productnum)"
            >
              <img
                :src="
                  'http://localhost:8085/products/img/' + product.productnum
                "
                class="img_product"
                style="width: 75%; height: 75%"
              />
              <h4>{{ product.productname }}</h4>
            </div>
            <!-- 지점이름 뿌리는 곳 -->
            <div class="grid_container_branch">
              <div
              class="grid_item_branch"
                v-show="progress == 1"
                v-for="store in storelist"
                :key="store.storeid"
              >
                <button
                  type="button"
                  class="grid_item_branchtext"
                  @click="selectstore(store)"
                >
                  {{ store.storename }}
                </button>
              </div>
            </div>
          </div>
        </div>



        <!-- 사이즈 선택 뿌리는 곳 -->
        <div v-show="progress == 2">
         

           <div class="selectbar_size">
            <!-- <select v-model="select_option" @change="choicetype">
              <option disabled value="" style="text-align: center">
                --사이즈를 선택해주세요.--
              </option>
              <option
                v-for="(sellprod, index) in sellproduct"
                :key="sellprod.sellproductnum"
                :value="index + 1"
              >
                {{ sellprod.sellproductname }}
              </option>
            </select> -->

            <div class="grid_container_size">
              <div
                style="cursor: pointer"
                class="grid_item_size"
                v-for="(sellprod, index) in sellproduct"
                @click="choicetype(index + 1)"
                :key="sellprod.sellproductnum"
                :value="index + 1"
              >
                {{ sellprod.sellproductname }}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <!-- 오른쪽 사이드 바 -->
      <div class="rightsidebar">
        <br />
        <div
          class="shoppingbasket"
          :style="{ transform: 'translateY(' + scrollTop + 'px)' }"
        >
          주문진행상태바<br />

          <!-- 아코디언의 공간 -->
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  id="accordion1"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  @click="changeprogress(1)"
                >
                  Step 1. 지점선택
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {{ storename }}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  id="accordion2"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  @click="changeprogress(2)"
                >
                  Step 2. 사이즈 선택
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">{{ size }}</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  id="accordion3"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  @click="changeprogress(3)"
                >
                  Step 3. 맛 선택{{ counter }} / {{ select_option }}
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body" id="accordion-body3">
                  <div class="container_basket">
                    <div
                      v-for="index in selectproductimg"
                      :key="index"
                      class="selected_basket"
                      @click="changeprogress(4)"
                    >
                    
                      <img
                        :src="index"
                        alt="../../assets/btn_cancle.PNG"
                        style="width: 100px; height: 100px"
                      />
                      <div class="btn_cancle_parent"><button class="btn_cancle_child"><img src=""/>X</button></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    id="accordion4"
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Step 4. 결제
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      @click="orderconfirm"
                    >
                      주문하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 장바구니끝 div -->
        </div>
      </div>
    </div>
    <!-- 결제 버튼을 누르면 이쪽에서 8084 sell데이터를 보낼거야 -->
  </div>

  <!-- 결제window 모달창 -->
  <div
    class="modal fade modal-xl"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">주문 확인</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          지점명 : {{ storename }}<br />
          선택한 사이즈 : {{ size }}<br />
          선택한 맛의 종류 :
          <div v-for="selproduct in selectproduct" :key="selproduct.productnum">
            {{ selproduct.productname }}<br />

            <!-- {{selproduct.cost}}<br/> --><!-- 이거슨 원가(한통당 가격)이기때문에 지워야함{{price}} -->
          </div>

          <!-- <div v-for="selprice in sellproduct" :key="selprice.sellproductnum"> -->
          <!-- 가격 : {{selprice.sellproductprice}}원  -->
          <!-- </div> -->
          {{ selprice }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            취소
          </button>
          <button type="button" class="btn btn-primary" @click="payment_final">
            쿠폰발급
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "kioskMenu",
  data() {
    return {
      progress: 1,
      storeid: "",
      storename: "",
      storelist: [],
      productnum: "",
      productname: "",
      productimg: "",
      productinfo: "",
      size: "",
      cost: "",
      scrollTop: 0,
      list: [],
      index: 0,
      select_option: 0,
      counter: 0,
      selectproduct: [],
      selectproductimg: [],
      url: "http://localhost:8085/products/img/",
      cancleurl: "../assets/btn_cancle.PNG",
      payment_window: false,
      openModal: false,
      sellproduct: [],
      price: "",
      selprice: "",
      userid: sessionStorage.getItem("loginId"),
      couponnum: "",
      sellproductnum: "",
      toplist:[]
    };
  },
  created: function () {
    const self = this;
    let cat = "icecream";
    self.$axios
      .get("http://localhost:8085/products/category/" + cat)
      .then(function (res) {
        if (res.status == 200) {
          // alert(res.data.list)
          self.list = res.data.categorylist;
        } else {
          alert("에러코드" + res.status);
        }
      });
    self.$axios.get("http://localhost:8085/sellproducts").then(function (res2) {
      self.sellproduct = res2.data.selllist;
    });

    self.$axios.get("http://localhost:8085/store").then(function (res3) {
      self.storelist = res3.data.storelist;
    });

    self.$axios.get("http://localhost:8084/sellingtype/topsales").then(function(res4){
      let arr = res4.data.toplist;
      console.log(arr)
      for(let i = 0 ;i < arr.length ; i++){
        self.toplist.push("http://localhost:8085/products/img/"+arr[i].PRODUCTNUM)
        console.log(self.toplist)
      }

    })
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    getValue() {
      console.log("Selected value:", this.select_option);
      alert(this.select_option);
    },
    changeprogress(num) {
      this.progress = num;
    },
    changeprogressstep3(){
     const self = this;
      if(self.counter === self.select_option){
        alert(self.counter)
        alert(self.select_option)  
        let accordian4 = document.getElementById('accordian4');
          
            accordian4.click();
            
      }
    },

    // 메뉴를 누르면 select_option의 value가 하나씩 올라가는 곳
    incrementCounter(num) {
      alert(1)
      console.log(num);
      this.counter += 1;
      this.selectproductimg.reverse();
      this.selectproductimg.splice(0, 1);
      const self = this;
      self.$axios.get("http://localhost:8085/products/" + num).then(function (res) {
        alert(5)
        let product = res.data.product;
          console.log(product);
          self.selectproduct.push(product);
          console.log(self.selectproduct);

          confirm(product.productname + " 을(를) 선택하시겠습니까?");
        });
      // // 고객입장에서 결제할 금액을 불러오기위한 코드를 짜던중에 ......길을 잃었다.
      // self.$axios.get("http://localhost:8085/sellproduct/"+num).then(function(res2){
      //  let sellproduct = res2.data.sellproduct
      //  console.log(sellproduct)
      // })
      alert(2)
      self.url = self.url + num;
      self.selectproductimg.push(self.url);
      console.log(self.selectproductimg);
      alert(3)
      this.selectproductimg.reverse();
      console.log(this.selectproductimg);
      // alert(this.selectproductimg)
      this.url = "http://localhost:8085/products/img/";

      // if(this.counter === this.select_option){
      //   let accordian4 = document.getElementById('accordian2');
      //   accordian4.click();
      // }else
      alert(4)
      if (this.counter > this.select_option) {
        this.counter = this.select_option;
        alert("선택가능한 종류를 초과하였습니다.");
      }
    },
    selectfirsttype() {
      if (this.counter == 0) {
        this.counter > 0;
        alert("사이즈를 먼저 선택해주세요.");
      }
    },
    choicetype(num) {
      this.counter = 0;
      this.select_option = num;

      //배열의 길이를 (사이즈에 따른 길이를 강제로) 지정해주는 것
      this.selectproductimg.length = this.select_option;

      console.log(this.selectproductimg.length);
      console.log(this.select_option);

      if (this.select_option == 1) {
        this.size = "싱글(SINGLE,1)";
      } else if (this.select_option == 2) {
        this.size = "더블(DOUBLE,2)";
      } else if (this.select_option == 3) {
        this.size = "파인트(FINT,3)";
      } else if (this.select_option == 4) {
        this.size = "쿼터(QUARTER,4)";
      } else if (this.select_option == 5) {
        this.size = "패밀리(FAMILY,5)";
      } else if (this.select_option == 6) {
        this.size = "하프캘런(HALF_GALLON,6)";
      }

      const self = this;
      self.progress = 3;
      let accordion3 = document.getElementById("accordion3");
      accordion3.click();
      // accordion3.changeprogressstep3();
      

    },
    selectstore(store) {
      this.storename = store.storename;
      this.storeid = store.storeid;
      let accordion1 = document.getElementById("accordion1");
      let accordion2 = document.getElementById("accordion2");
      accordion1.click();
      this.progress = 2;
      accordion2.click();
    },

    // 결제하기(장바구니) 버튼 누르면 모달창 띄워지는 메서드 실현구간
    orderconfirm() {
      const self = this;
      // select_option이 선택된 가짓수, (컵)사이즈이기 때문에 해당된 data를 가져와서 사용하자.
      let favor = this.select_option;

      // axios를 사용하고 싶다
      self.$axios
        .get("http://localhost:8085/sellproducts/" + favor)
        .then(function (res) {
          // alert(response.data.sellproduct.sellproductprice)  .확인완료

          //1. 배열로 뽑아와서 for문으로 받는 방법?
          // let sp = res.data.sellproduct

          // 2. 가격만 뽑아서 위에서 보여주는 방법
          self.sellproductnum = res.data.sellproduct.sellproductnum;
          self.selprice = res.data.sellproduct.sellproductprice;
          // let selprice1 = res.data.sellproduct.sellproductprice
          //사이즈에 대한 가격이 찍혀있어야 함.(3400, 4700, 8400)
          // alert(selprice1)
          // alert(selprice)
        });
      // sellproduct에 가서 결제창에서 선택된 value값을 pk로 해당된 배열을 검색하고 그값을 가져오는 오기.(value에 따른 가격을 찾기위함.)
    },
    payment_final() {
      //1.selling 에 데이터(판매내역, 사이즈에 대한 정보)보내기
      const self = this;

      // alert(self.storename)
      // self.$axios.get("http://localhost:8085/store").then(function(res){
      //   self.storeid = res.data.storelist.storeid
      //   console.log(self.storeid)

      // })

      // 2. sellingtype에 어떤 맛들이 선택되었는지 보내기
      // 2-1) coupon 테이블에 가서 쿠폰생성 먼저 해당 계정으로 발급하기

      let form = new FormData();
      form.append("used", 0);
      form.append("userid", self.userid);
      form.append("storeid", self.storeid);
      console.log(self.storeid);
      console.log(form);
      console.log(self.userid);

      self.$axios
        .post("http://localhost:8084/coupons", form)
        .then(function (res1) {
          console.log(res1.data);
          self.couponnum = res1.data.dto.couponnum
          console.log(self.couponnum);

          
          for (let i = 0; i < self.selectproduct.length; i++) {
            let sellingtypeform = new FormData();
            sellingtypeform.append("productnum", self.selectproduct[i].productnum);
            console.log(self.selectproduct[i].productnum);

            sellingtypeform.append("storeid", self.storeid);
            console.log(self.storeid);
            sellingtypeform.append("id", self.userid);
            console.log(self.userid);
            sellingtypeform.append("couponnum", self.couponnum);
            console.log(self.couponnum);
            console.log(sellingtypeform);
            
            self.$axios
            .post("http://localhost:8084/sellingtype", sellingtypeform)
            .then(function (res3) { 
              console.log("res3 :"  + res3.data + i);
              console.log(sellingtypeform);
              });
          }
        });

      let sellingform = new FormData();
      sellingform.append("sellproductnum", self.sellproductnum);
      console.log(self.sellproductnum);
      sellingform.append("storeid", self.storeid);
      console.log(self.storeid);
      sellingform.append("sellingcnt", 1);
      sellingform.append("sellprice", self.selprice);
      self.$axios
        .post("http://localhost:8085/selling/add", sellingform)
        .then(function (res2) {
          console.log(res2.data);
        });


        alert("쿠폰발급이 완료되었습니다.")
   
    },
  },
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 추천메뉴(?) 보여주는 컨테이너 */
.ranking {
  display: flex;
  height: 100%;
  background-color: white;
  border: 5px solid;
  border-radius: 30px;
  border-color: #f5d742;
  flex-direction: row;
  justify-content: space-around;
}

#text_rank {
  color: #f5d742;
  vertical-align: middle;
  padding-top:15px;
  font-size: 20px;
}

.grid_container_size {
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;


  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 4열 그리드 */
  grid-gap: 5px; /* 그리드 간격 설정 */
  border:solid;
  border-color:#265cac;
}

.boxcontainer {
  display: flex;
}
.leftsidebar {
  background-color: white;
  width: 15%;
  height: 80%;
}

/* 리스트 컨테이너 클래스명 */
.container_list {
  /* display:flex; */

  padding-top: 10px;
}
/* 리스트 내 각각의 상품. for문으로 작성된 상품 */
.productsite {
  width: 20%;
  height: 300px;
  /* display: inline-block; */
  line-height: 100px;
  text-align: space-between;
  background-color: white;
  /* float:left; */
  display: inline-block;

  /* margin-left: 10px ; 
    margin-bottom: 20px; */
  border-radius: 10%;
  margin: 0 10px;

  /* justify-content: space-around; */
}

.orderstatus {
  border: 5px solid;
  border-color: aquamarine;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  position: relative;
  height: 80%;
  transition: transform 0.3s ease;
}

.row{
border: solid;
border-color:#265cac;
margin:10px 10px 10px 10px;
}
.body {
  /* background-color:#42b3f5; */
  width: 70%;
  height: 100%;
}

.rightsidebar {
  width: 15%;
  height: 100%;
}
.shoppingbasket {
  border: 5px solid;
  border-color: aquamarine;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  position: relative;
  height: 500px;
  transition: transform 0.3s ease;
  overflow:auto;
}
.selected_basket {
  border: 5px solid;
  border-color: #265cac;
  border-radius: 70%;
  background-color: white;
  width: 100px;
  height: 100px;
  /* position:absolute; */
  /* margin:auto; */
  /* display:inline; */
  margin: 0 auto;
  justify-content: center;
  align-content: space-between;

}
.col-3{
  /* border:none; */
  padding: 15px 15px 15px 15px; 
  background-color:white;
}
.container_basket {
  /* border: 5px solid; */
  /* border-color: #265cac; */
  background-color: white;
  padding: 10px 10px 10px 10px;
  
}
.shopping_basket_footer {
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  left: 25%;

}
.payment_window {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 30px;
}
.payment_modal {
  background-color: white;
}


.grid_item_branchtext:hover {
  /* background-color: aqua; */
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: gray;
  color:gray;
}
/* 사이즈 선택시 리스트 뿌려주는 컨테이너 */
.grid_container_size {
border:none;
}


/* 그리드 컨테이너 사이즈의 자식 */

.grid_item_size{
  border: solid 1px;
  text-align: center;
  border:none;
  font-size:30px;
}
.grid_item_size:hover {
  background-color: white;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: gray;
  color:gray;
}
.btn_cancle_child{
  position:relative
}
.grid_container_branch{
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 4열 그리드 */
  grid-gap: 5px; /* 그리드 간격 설정 */
  border:solid;
  border-color:#265cac;
}
.grid_item_branch{
  margin:20px 10px 10px 10px;
}
.grid_item_branchtext {
  width: 100px;
  height: 60px;
  background-color: white;
  border:none;
  text-align: space-between;
  display: inline-block;
  font-size:25px;
}
.progress_bar{
  font-size:50px;
}

</style>
