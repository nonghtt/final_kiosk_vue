<template lang="">
  <hr style="border-color:#CFE2FF border:2px solid;"/>
  <div>
    <div class="boxcontainer">
      <div class="leftsidebar" >
        <div class="upperleftside">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src="../../assets/banner1.jpg" class="d-block w-100 banner" alt="..." @click="banner1" >
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="../../assets/banner3.jpg" class="d-block w-100 banner" alt="..." @click="banner2" >
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="../../assets/banner4.jpg" class="d-block w-100 banner" alt="..." @click="banner3" >
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="../../assets/banner5.png" class="d-block w-100 banner" alt="..." @click="banner4" >
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="../../assets/banner6.png" class="d-block w-100 banner" alt="..." @click="banner5" >
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>
      </div>

      <div class="body">
        <div class="ranking">
          <div class="rank" style="color: #CFE2FF; font-weight: bold" v-for="(rank,index) in toplist" :key="index">
            <div id="text_rank">
              {{index+1}}위
              <div></div>
              <div>


                <img
                  :src="rank"
                  style="height: 175px; width: 175px"
                />
              </div>
            </div>
          </div>
          
          <!-- <div class="upperrightside">우상단 사이드</div> -->
        </div>


        <div>
          

                  <div class="progress_bar">

                    <div class="wrapper">
    <div class="arrow-steps clearfix">
      <div v-for="(step, index) in steps" :key="index" :class="{ 'step': true, 'current': index === currentIndex, 'done': index < currentIndex }">
        <span>{{ step }}</span>
      </div>
    </div>
    <div class="nav clearfix">
      <button class="prev" @click="previousStep" v-show="none" id="prevbtn">Previous</button>
      <button class="next pull-right" @click="nextStep" v-show="none" id="nextbtn">Next</button>
    </div>
  </div>
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
              <h4 style="font-size:15px; font-weight:bold;">{{ product.productname }}</h4>
            </div>
            




            <!-- 지점이름 뿌리는 곳 -->
                    <div class="grid_container_branch">
                              <div @click="selectstore(store)"
                              class="grid_item_branch btn"
                                v-show="progress == 1"
                                v-for="store in storelist"
                                :key="store.storeid" >
                                
                                {{store.storename}}
                              </div>
                    </div>
          
          
          
                  </div>
        </div>



        <!-- 사이즈 선택 뿌리는 곳 -->
        <div v-show="progress == 2">
         

           <div class="selectbar_size" style="height:160px">
          
            
                  <div style="display:flex;">
                      <div style="width:16.67%" id="size">
                        <img src="../../assets/single.png"
                        style="width:150px; height:150px;">
                      </div>
                      <div style="width:16.67%" id="size">
                        <img src="../../assets/double.png"
                        style="width:150px; height:150px;">
                      </div>
                      <div style="width:16.67%" id="size">
                        <img src="../../assets/fint.png"
                        style="width:150px; height:150px;">
                      </div>
                      <div style="width:16.67%" id="size">
                        <img src="../../assets/quarter.png"
                        style="width:150px; height:150px;">
                      </div>
                      <div style="width:16.67%" id="size">
                        <img src="../../assets/family.png"
                        style="width:150px; height:150px;">
                      </div>
                      <div style="width:16.67%" id="size">
                        <img src="../../assets/halfgallon.png"
                        style="width:150px; height:150px;">
                      </div>
                  </div>
          </div>

          <div>
            <div class="grid_container_size" >
              <div
                style="cursor: pointer; font-size:15px;"
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
                  @click="changeprogress(2)" disabled>
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
                  @click="changeprogress(3)" disabled>
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
                  <div class="container_basket" style="margin:0px">
                    
                    <div
                      v-for="(img,index) in selectproductimg"
                      :key="index"
                    >
                     <img
                      :src="img"
                     style="width: 130px; height: 130px"
                      />
                      <span v-if="img !='/img/tempimg.127a5633.png'" style="position: absolute; right:48px ;padding:6px 0 0 0" @click="selectcancle(index)"><i class="fa-solid fa-xmark fa-lg"></i></span>
                    <div style="display:flex ;margin-left:22px" v-if="img !='/img/tempimg.127a5633.png'">
                      <button class="button" id="downbtn" @click="downcnt(index)">-</button>

                      <div style="width:50px; height:20px">{{amount[index]}}</div>
                    <button class="button" @click="upcnt(index)">+</button>
                  </div>
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
                    aria-controls="flush-collapseFour" disabled >
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
                      id="order"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      @click="orderconfirm"
                    >
                      <div style="font-weight:bold">주문하기</div>
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
          id="closebtn"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>



        <div class="modal-body">
          
    
            <div class="profile_contents_container">
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">지점명
                </div>
                <div class="profile_detail">{{ storename }}
                </div>
              </div>
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">사이즈
                </div>
                <div class="profile_detail">{{ size }}
                </div>
              </div>
              <div class="profile_contents" id="taste_id" style="display: flex;">
                <div class="profile_title">맛
                </div>
                <div class="profile_detail"><div class="ordercontainer">
                  <div v-for="(selproduct, index) in selectproduct" :key="selproduct.productnum">
                    <img style="width:100px; height:100px" :src="selectproductimg[index]">
                    <div>
                      {{ selproduct.productname }}
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div class="profile_contents" style="display: flex;">
              </div>
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">가격
                </div><div style="text-align:center; width:600px;">{{ sellprice }}</div>
              </div>
            </div>

        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            취소
          </button>
          <button type="button" class="btn btn-primary" @click="requestPay">
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
      none: false,
      steps: ['Step 1. 지점선택', 'Step 2. 사이즈 선택', 'Step 3. 맛 선택', 'Step 4. 결제'],
      currentIndex: 0,
      amount: [],
      num: 2,
      progress: 1,
      storeid: "",
      storename: null,
      storelist: [],
      productnum: "",
      productname: "",
      productimg: "",
      productinfo: "",
      size: null,
      cost: "",
      scrollTop: 0,
      list: [],
      index: 0,
      select_option: 0,
      counter: 0,
      tempselectproduct: [],
      selectproduct: [],
      selectproductimg: [],
      url: "http://localhost:8085/products/img/",
      tempimg: require("../../assets/tempimg.png"),
      payment_window: false,
      openModal: false,
      sellproduct: [],
      price: "",
      sellprice: 0,
      userid: sessionStorage.getItem("loginId"),
      couponnum: "",
      sellproductnum: "",
      toplist: [],
      tempnum: 0,

    };
  },
  created: function () {
    const storedData = localStorage.getItem('myData');
    if (storedData != null && sessionStorage.getItem("loginId") != null) {
      const parsedData = JSON.parse(storedData);
      this.none = parsedData.none;
      this.currentIndex = parsedData.currentIndex;
      this.amount = parsedData.amount;
      this.num = parsedData.num;
      this.progress = parsedData.progress;
      this.storeid = parsedData.storeid;
      this.storename = parsedData.storename;
      this.storelist = parsedData.storelist;
      this.productnum = parsedData.productnum;
      this.productname = parsedData.productname;
      this.productimg = parsedData.productimg;
      this.productinfo = parsedData.productinfo;
      this.size = parsedData.size;
      this.cost = parsedData.cost;
      this.scrollTop = parsedData.scrollTop;
      this.list = parsedData.list;
      this.index = parsedData.index;
      this.select_option = parsedData.select_option;
      this.counter = parsedData.counter;
      this.tempselectproduct = parsedData.tempselectproduct;
      this.selectproduct = parsedData.selectproduct;
      this.selectproductimg = parsedData.selectproductimg;
      this.url = parsedData.url;
      this.tempimg = parsedData.tempimg;
      this.payment_window = parsedData.payment_window;
      this.openModal = parsedData.openModal;
      this.sellproduct = parsedData.sellproduct;
      this.price = parsedData.price;
      this.sellprice = parsedData.sellprice;
      this.userid = sessionStorage.getItem("loginId")
      this.couponnum = parsedData.couponnum;
      this.sellproductnum = parsedData.sellproductnum;
      this.tempnum = parsedData.tempnum;

    }


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

    self.$axios.get("http://localhost:8085/store/accounttype/2").then(function (res3) {
      self.storelist = res3.data.storelist;
      console.log(self.storelist)
    });

    self.$axios.get("http://localhost:8084/sellingtype/topsales").then(function (res4) {
      let arr = res4.data.toplist;
      console.log(arr)
      for (let i = 0; i < arr.length; i++) {
        self.toplist.push("http://localhost:8085/products/img/" + arr[i].PRODUCTNUM)
        console.log(self.toplist)
      }

    })
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    const storedData = localStorage.getItem('myData');
    if (storedData != null) {
      let accordion2 = document.getElementById("accordion2");
      accordion2.disabled = false;
      let accordion3 = document.getElementById("accordion3");
      accordion3.disabled = false;
      let accordion4 = document.getElementById("accordion4");
      accordion4.disabled = false;
    }
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
      console.log("changeprogress " + num)
      switch (num) {
        case 1:
          this.progress = num;
          this.goToStep(num - 1)
          break;
        case 2:
          if (this.storename != null) {
            let btn = document.getElementById("accordion2")
            btn.disabled = false
            this.progress = num;
            this.goToStep(num - 1)


          }
          break;

        case 3:
          if (this.size != null) {
            let btn = document.getElementById("accordion3")
            btn.disabled = false
            this.progress = num;
            this.goToStep(num - 1)
            if (this.select_option == this.counter)
              this.goToStep(num)
          }
          break;


      }
    },

    // 메뉴를 누르면 select_option의 value가 하나씩 올라가는 곳
    incrementCounter(num) {
      if (this.counter != this.select_option) {
        console.log(num);
        const self = this;
        self.$axios.get("http://localhost:8085/products/" + num).then(function (res) {
          let product = res.data.product;
          const checkorder = confirm(product.productname + " 을(를) 선택하시겠습니까?");
          if (checkorder) {

            self.url = self.url + num;
            self.amount[self.tempnum] = 1
            self.selectproductimg[self.tempnum] = self.url
            self.url = "http://localhost:8085/products/img/";
            console.log(product);
            self.tempselectproduct[self.tempnum] = product;
            console.log(self.tempselectproduct);
            self.counter += 1;
            self.tempnum += 1;
            if (self.counter == self.select_option) {
              alert("상품을 모두 선택하였습니다.")
              let accordion4 = document.getElementById("accordion4");
              accordion4.disabled = false
              accordion4.click();
              self.nextStep()
            }
          }
          let accordion3 = document.getElementById("accordion3");
          accordion3.click();

        })
      } else {
        alert("상품을 모두 선택하였습니다.")
      }

    },
    selectfirsttype() {
      if (this.counter == 0) {
        this.counter > 0;
        alert("사이즈를 먼저 선택해주세요.");
      }
    },
    choicetype(num) {
      console.log(this.tempselectproduct)
      this.tempselectproduct.length = 0
      this.tempnum = 0
      console.log(this.tempselectproduct)
      this.counter = 0;
      this.select_option = num;


      //배열의 길이를 (사이즈에 따른 길이를 강제로) 지정해주는 것
      this.selectproductimg.length = this.select_option;

      for (let i = 0; i < this.select_option; i++) {

        this.selectproductimg.splice(0, 1)
        this.selectproductimg.push(this.tempimg)
      }



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
      this.sellprice = this.size.sellproductprice
      const self = this;
      let accordion2 = document.getElementById("accordion2");
      accordion2.disabled = false
      // let accordion3 = document.getElementById("accordion3");
      accordion2.click();
      self.progress = 3;
      console.log(self.num)
      this.nextStep()
      let accordion3 = document.getElementById("accordion3");
      accordion3.disabled = false
      // accordion3.changeprogressstep3();


    },
    selectstore(store) {
      this.storename = store.storename;
      this.storeid = store.storeid;
      let accordion1 = document.getElementById("accordion1");

      accordion1.click();
      this.progress = 2;
      this.nextStep()
    },

    // 결제하기(장바구니) 버튼 누르면 모달창 띄워지는 메서드 실현구간
    orderconfirm() {
      console.log(this.userid)

      this.selectproduct = this.tempselectproduct
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
          self.sellprice = res.data.sellproduct.sellproductprice;
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
      console.log(self.userid);
      console.log(form);

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
            sellingtypeform.append("amount", self.amount[i]);
            console.log(self.couponnum);
            console.log(sellingtypeform);

            self.$axios
              .post("http://localhost:8084/sellingtype", sellingtypeform)
              .then(function (res3) {
                console.log("res3 :" + res3.data + i);
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
      sellingform.append("sellingprice", self.sellprice);
      console.log(self.sellprice)
      self.$axios
        .post("http://localhost:8085/selling/add", sellingform)
        .then(function (res2) {
          console.log(res2.data);
        });


      alert("쿠폰발급이 완료되었습니다.")
      localStorage.removeItem("myData")

    },
    selectcancle(index) {
      this.counter -= this.amount[index]
      this.selectproductimg.splice(index, 1)
      this.tempselectproduct.splice(index, 1)
      for (let i = 0; i < this.amount[index]; i++) {
        this.selectproductimg.push(this.tempimg)
      }
      this.tempnum -= 1
      console.log(this.tempselectproduct)

    },
    upcnt(index) {

      this.amount[index] += 1
      this.counter += 1
      console.log(this.selectproductimg.length - 1)
      this.selectproductimg.splice(this.selectproductimg.length - 1, 1)
      let btn = document.getElementById("downbtn")
      btn.disabled = false
      if (this.counter == this.select_option) {
        alert("상품을 모두 선택하였습니다.")
        let accordion4 = document.getElementById("accordion4");
        accordion4.disabled = false
        accordion4.click();
        this.nextStep()

      }

    },
    downcnt(index) {
      if (this.amount[index] > 1) {
        this.amount[index] -= 1
        this.counter -= 1
        this.selectproductimg.push(this.tempimg)
      } else {
        let btn = document.getElementById("downbtn")
        btn.disabled = true
      }
    },
    nextStep() {
      if (this.currentIndex < this.steps.length - 1) {
        this.currentIndex++;
      }
    },
    previousStep() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    goToStep(num) {
      this.currentIndex = num;
    },
    requestPay: function () {
      if (sessionStorage.getItem("loginId") == null) {
        alert("로그인을 먼저해주세요.")
        this.$emit('need-login', 1);
        const savedata = {
          currentIndex: this.currentIndex,
          amount: this.amount,
          num: this.num,
          progress: this.progress,
          storeid: this.storeid,
          storename: this.storename,
          storelist: this.storelist,
          productnum: this.productnum,
          productname: this.productname,
          productimg: this.productimg,
          productinfo: this.productinfo,
          size: this.size,
          cost: this.cost,
          scrollTop: this.scrollTop,
          list: this.list,
          index: this.index,
          select_option: this.select_option,
          counter: this.counter,
          tempselectproduct: this.tempselectproduct,
          selectproduct: this.selectproduct,
          selectproductimg: this.selectproductimg,
          url: this.url,
          tempimg: this.tempimg,
          payment_window: this.payment_window,
          openModal: this.openModal,
          sellproduct: this.sellproduct,
          price: this.price,
          sellprice: this.sellprice,
          sellproductnum: this.sellproductnum,
          tempnum: this.tempnum
        }

        localStorage.setItem('myData', JSON.stringify(savedata));
        // let orderbtn = document.getElementById("order");
        // orderbtn.click();
        let closebtn = document.getElementById("closebtn")
        closebtn.click()
      } else {

        const { IMP } = window;
        IMP.init('imp44428270');

        /* 2. 결제 데이터 정의하기 */
        const data = {
          pg: 'kcp',                           // PG사
          pay_method: 'card',                           // 결제수단
          merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
          amount: this.sellprice,                                 // 결제금액
          name: this.size,                  // 주문명
          buyer_email: 'example@example',               // 구매자 이메일
        }

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, this.callback);
      }
    },
    callback(response) {
      /* 3. 콜백 함수 정의하기 */
      const {
        success,
        error_msg,
      } = response;

      if (success) {
        this.payment_final()
      } else {
        alert(`결제 실패: ${error_msg}`);
      }

    },

  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

/* 추천메뉴(?) 보여주는 컨테이너 */
.ranking {
  -webkit-font-smoothing: antialiased;
  display: flex;
  height: 100%;
  background-color: white;
  /* border: 5px solid; */
  /* border-radius: 30px; */
  /* border-color: #CFE2FF; */
  flex-direction: row;
  justify-content: space-around;
}

#text_rank {
  color: #185432;
  vertical-align: middle;
  padding-top: 15px;
  font-size: 30px;
  margin-top: 10px;
}

.grid_container_size {
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;


  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* 4열 그리드 */
  grid-gap: 5px;
  /* 그리드 간격 설정 */
  border: solid;
  border-color: #265cac;
}

.boxcontainer {
  display: flex;
}

.leftsidebar {
  background-color: white;
  width: 15%;
  height: 80%;
  margin-top: 110px;

}

#size {
  height: 30px;

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
  color: #666666;
  text-align: space-between;
  background-color: white;
  /* float:left; */
  /* display: inline-block; */
  display: inline-block;
  /* margin-left: 10px ; 
    margin-bottom: 20px; */
  border-radius: 10%;
  margin: 0 10px;
  white-space: nowrap;
  font-weight: bold;
  /* justify-content: space-around; */
}

.productsite:hover {
  color: #69a4fc;
  font-weight: bold;
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

.row {
  border: solid;
  border-color: #265cac;
  margin: 10px 10px 10px 10px;
}

.body {
  /* background-color:#42b3f5; */
  width: 70%;
  height: 100%;
}

.rightsidebar {
  width: 25%;
  height: 100%;
  margin-top: -9px;
}

.shoppingbasket {
  border: 3px solid;
  border-color: #CFE2FF;
  border-radius: 10px;
  margin: 10px;
  padding-right: 10px;
  background-color: white;
  position: relative;
  height: 500px;
  overflow: auto;
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

.col-3 {
  /* border:none; */
  padding: 15px 15px 15px 15px;
  background-color: white;
}

.container_basket {
  /* border: 5px solid; */
  /* border-color: #265cac; */
  background-color: white;
  width: 153.8px;

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




/* 사이즈 선택시 리스트 뿌려주는 컨테이너 */
.grid_container_size {
  border: none;
}


/* 그리드 컨테이너 사이즈의 자식 */

.grid_item_size {
  border: solid 2px;
  text-align: center;
  background-color: #B0D783;
  border-color: #B0D783;
  color: white;
  font-size: 40px;
  font-weight: bold;
  height: 40px;
  border-radius: 10px;
  line-height: 40px;

}

.grid_item_size:hover {
  background-color: #CFE2FF;
  /* text-decoration: underline; */
  text-decoration-thickness: 2px;
  text-decoration-color: #46A538;
  background-color: #46A538;
  color: white;
  border: 1px solid;
  border-color: #46A538;
  border: solid 2px;
  border-color: #46A538;
}

.btn_cancle_child {
  position: relative
}

.grid_container_branch {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0px;
  border: none;
}

.grid_item_branch {
  margin: 20px 10px 10px 10px;
  white-space: nowrap;
  font-size: 20px;
  background-color: #B0D783;
  border-radius: 10px;
  border-color: #B0D783;
  border: 2px solid;
  line-height: 60px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

/* 선택안됐을때 영역에 대한 스타일 */
.grid_item_branchtext {
  width: 100px;
  height: 60px;
  color: white;
  border: none;
  text-align: space-between;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}

.grid_item_branch:hover {
  /* background-color: aqua; */
  /* text-decoration: underline; */
  text-decoration-thickness: 2px;
  text-decoration-color: #46A538;
  /* color: #CFE2FF; */
  background-color: #46A538;
  font-weight: bold;
  border-color: #46A538;
  color: white;
}

.progress_bar {
  font-family: 'Lato', sans-serif;
  width: 200vh;
  margin: 0 auto;
  font-size: 50px;
}

.ordercontainer {
  display: flex;
  justify-content: center;
}

.banner {
  height: 500px;
  padding: 15px;
}

.button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clearfix:after {
  clear: both;
  content: "";
  display: block;
  height: 0;
}

.wrapper {
  display: table-cell;
  height: 95px;
  vertical-align: middle;
  padding-top: 46px;
}

.nav {
  margin-top: 40px;
}

.pull-right {
  float: right;
}

a,
a:active {
  color: #212121;
  text-decoration: none;
}

a:hover {
  color: #999;
}

.arrow-steps .step {
  font-size: 14px;
  left: 70px;
  text-align: center;
  color: #666;
  cursor: default;
  margin: 0 2px;
  padding: 10px 10px 10px 30px;
  min-width: 260px;
  float: left;
  position: relative;
  background-color: RGB(220, 220, 220);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: background-color 0.2s ease;
}

.arrow-steps .step:after,
.arrow-steps .step:before {
  content: " ";
  position: absolute;
  top: 0px;
  right: -15px;
  width: 7px;
  height: 19px;
  border-top: 16px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 18px solid RGB(220, 220, 220);
  z-index: 2;
  transition: border-color 0.2s ease;
}

.arrow-steps .step:before {
  right: auto;
  left: 0;
  font-weight: bold;
  border-left: 17px solid #fff;
  z-index: 0;
}

.arrow-steps .step:first-child:before {
  border: none;
}

.arrow-steps .step:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.arrow-steps .step span {
  position: relative;
  font-weight: bold;
}

.arrow-steps .step span:before {
  opacity: 0;
  content: "✔";
  font-size: 15px;
  position: absolute;
  top: -2px;
  left: -20px;
  color: #06ac77;
}

.arrow-steps .step.done span:before {
  opacity: 1;
  font-weight: bold;
  -webkit-transition: opacity 0.3s ease 0.5s;
  -moz-transition: opacity 0.3s ease 0.5s;
  -ms-transition: opacity 0.3s ease 0.5s;
  transition: opacity 0.3s ease 0.5s;
}

.arrow-steps .step.current {
  color: #69a4fc;
  font-weight: bold;
  background-color: #CFE2FF;
}

.arrow-steps .step.current:after {
  border-left: 17px solid #CFE2FF;
  font-weight: bold;
}

@media (max-width: 765px) {
  .arrow-steps .step {
    min-width: 50px;
  }
}

.profile_contents_container {
  width: 800px;
}

.profile_title {
  width: 300px;
  height: 50px;
}

.profile_detail {
  width: 500px;
  height: 50px;
  justify-content: end;
}

#taste_id {
  height: 170px;
}</style>
