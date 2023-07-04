<template>
  <div class="container-fluid py-2">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <router-link class="logorouter navbar-brand justify-content-centers" to="/">
          <img class="logo" src="../../assets/uscreamlogo.png">USCREAM
        </router-link>
      </div>
      <div class="col d-flex justify-content-end" style="align-items: center;">
        <!--  <span @click="kakaoLogin" v-if="loginId == null">LOGIN</span> -->
        <span data-bs-toggle="modal" data-bs-target="#loginmodal" v-if="loginId == null">LOGIN</span>
        <span @click="kakaologout" v-else>LOGOUT</span>
        <!--  <router-link class="nav-link" to="/join" style="margin-left: 10px; margin-right: 10px;" v-if="loginId ==null">JOIN</router-link> -->
        <span data-bs-toggle="modal" data-bs-target="#joinmodal" id="joinbtn" v-if="loginId == null">JOIN</span>
        <span data-bs-toggle="modal" data-bs-target="#myinfomodal" v-if="loginId !=null" @click="getmyinfo">MYINFO</span>
      </div>
    </div>
  </div>




  <!--Join Modal -->
  <div class="modal fade" id="joinmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">회원가입</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table>
            <tr>
              <th>
                아이디
              </th>
              <td>
                <input type="text" v-model="id"><button type="button" @click="checkid">중복체크</button>
              </td>
            </tr>
            <tr>
              <th></th>
              <td v-if="check != null">{{ check }}</td>
            </tr>
            <tr>
              <th>
                이름
              </th>
              <td>
                <input type="text" v-model="name">
              </td>
            </tr>
            <tr>
              <th>
                패스워드
              </th>
              <td>
                <input type="password" v-model="pwd">
              </td>
            </tr>
            <tr>
              <th>
                생일
              </th>
              <td>
                <input type="date" v-model="birthday">
              </td>
            </tr>
            <tr>
              <th>
                핸드폰 번호
              </th>
              <td>
                <input type="text" v-model="phonenum">
              </td>
            </tr>
            <tr>
              <th>
                email
              </th>
              <td>
                <input type="text" v-model="email">
              </td>
            </tr>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="join">회원가입</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


  <!--Login Modal -->
  <div class="modal fade" id="loginmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">로그인</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table style="margin: 0px;">
            <tr>
              <th>아이디</th>
              <td><input type="text" v-model="id"></td>
            </tr>
            <tr>
              <th>pwd</th>
              <td><input type="password" v-model="pwd"></td>
            </tr>
            <tr >
            <td style="position: relative; right: 0px;">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
              <button type="button" class="btn btn-primary" @click="login">로그인</button>
            </td>
            </tr>
          </table>
        </div>
        <div class="modal-footer">
          <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
              alt="카카오 로그인 버튼" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <!--Myinfo Modal -->
  <div class="modal fade modal-lg" id="myinfomodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Myinfo</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="profil_container" style="display: flex; justify-content: center; ">
            <div class="profile_img" style="align-items: center;">
              <img style="width:150px; height: 200px;align-items: center;" v-bind:src="profileimg" v-if ="profileimg !=null"> 
              <img style="width:150px; height: 200px;align-items: center;" src="../../assets/defaultimg.jpeg" v-if ="profileimg ==null">
            </div>
            <div class="profile_contents_container">
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">아이디
                </div>
                <div class="profile_detail">{{ id }}
                </div>
              </div>
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">이름
                </div>
                <div class="profile_detail">{{ name }}
                </div>
              </div>
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">생일
                </div>
                <div class="profile_detail">{{ birthday }}
                </div>
              </div>
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">핸드폰번호
                </div>
                <div class="profile_detail">{{ phonenum }}
                </div>
              </div>
              <div class="profile_contents" style="display: flex;">
                <div class="profile_title">비밀번호
                </div>
                <div class="profile_detail"><input type="password" v-model="pwd"><button type="button"
                    @click="editpwd">수정</button>
                </div>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px;display: flex; justify-content: center; border-top: 1px solid gray;">
            <table class="table table-striped">
              <tr style="background-color: rgb(225, 224, 224);">
                <th>쿠폰 번호</th>
                <th>교환처</th>
                <th>발급일</th>
                <th>사용일</th>
                <th>유효기간</th>
                <th>사용</th>
              </tr>
              <span v-if="couponlist == null">쿠폰이 없습니다.</span>
              <tr v-else v-for="coupon in couponlist" :key="coupon.couponnum" style="border-bottom: 1px solid #dee2e6">
                <td class="coupontd" style="width: 220px;">{{ coupon.COUPONNUM }}</td>
                <td class="coupontd">{{ coupon.STOREID }}</td>
                <td class="coupontd">{{ coupon.ISSUEDDATE }}</td>
                <td class="coupontd">{{ coupon.USEDDATE }}</td>
                <td class="coupontd">{{ coupon.EXPIREDATE }}</td>
                <td class="coupontd" v-if="coupon.USED ==0">사용가능</td>
                <td class="coupontd" v-if="coupon.USED ==1">사용완료</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>


export default {
  name: 'NavBar',
  data() {
    return {
      check: '',
      couponlist: '',
      loginId: sessionStorage.getItem('loginId'),
      email: '',
      name: '',
      id: null,
      pwd: '',
      birthday: '',
      phonenum: '',
      nickname: sessionStorage.getItem("kakao_account_nickname"),
      profileimg: sessionStorage.getItem("kakao_account_profileimg")
    }
  },
  methods: {
    kakaoLogin() {

      window.Kakao.Auth.login({
        scope: 'account_email, profile_image, profile_nickname',
        success: (authObj) => {
          const accessToken = authObj.access_token;
          // accessToken을 서버로 전송하거나 필요한 처리를 수행합니다.
          this.getKakaoAccount(accessToken);
        },
        fail: (err) => {
          console.error('카카오톡 로그인 실패', err);
        },
      });
    },
    getKakaoAccount(accessToken) {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (response) => {
          // 사용자 정보를 가져온 후에 처리할 로직을 작성합니다.
          console.log('Kakao account:', accessToken);
          sessionStorage.setItem("kakao_account_profileimg", response.kakao_account.profile.profile_image_url)
          sessionStorage.setItem("kakao_account_nickname", response.kakao_account.profile.nickname)
          this.email = response.kakao_account.email
          this.nickname = sessionStorage.getItem("kakao_account_nickname")
          this.profileimg = sessionStorage.getItem("kakao_account_profileimg")
          console.log(this.email)
          console.log(this.nickname)
          console.log(this.profileimg)
          const self = this
          self.$axios.get('http://localhost:8084/members/email/' + self.email).then(function (res) {
            if (res.data.member != null) {
              sessionStorage.setItem("loginId", res.data.member.id)
              location.href = "/"
            } else if (res.data.member == null) {
              let check = confirm("최초 이용시 회원가입이 필요합니다." + '\n' + " 회원가입페이지로 이동합니다.")
              console.log(check)
              if (check) {
                console.log(self.email)
                self.clickButton()
              } else {
                location.href = "/"
              }
              /*  router.push({ name: 'MemberJoin', query: { 'email': self.email } }) */
            }
          })
          // 필요한 로직을 수행합니다.
        },
        fail: (error) => {
          console.error('카카오톡 사용자 정보 조회 실패', error);
        },
      });
    },
    kakaologout() {
      window.Kakao.Auth.logout((res) => {
        console.log(res);
        sessionStorage.removeItem("loginId")
        sessionStorage.removeItem("kakao_account_nickname")
        sessionStorage.removeItem("kakao_account_profileimg")
        location.href = "https://kauth.kakao.com/oauth/logout?client_id=2c924abf030548cc5370e1d25b38bff8&logout_redirect_uri=http://localhost:8081/"
      });
    },
    clickButton() {
      const button = document.getElementById('joinbtn');
      if (button) {
        button.click();
      }
    },
    login() {
      const self = this
      self.$axios.get("http://localhost:8084/members/" + self.id).then(function (res) {

        console.log(self.id)
        console.log(res.data.dto)
        if (res.data.dto != null && res.data.dto.pwd == self.pwd) {
          sessionStorage.setItem("loginId", res.data.dto.id)
          location.href = "/"
        } else (
          alert("로그인 실패")
        )
      })
    },
    join() {
      const self = this
      let form = new FormData()
      form.append('id', self.id)
      form.append('name', self.name)
      form.append('pwd', self.pwd)
      form.append('birthday', self.birthday)
      form.append('phonenum', self.phonenum)
      form.append('email', self.email)

      self.$axios.post('http://localhost:8084/members', form).then(function (res) {
        console.log(res.data.member)
        sessionStorage.setItem("loginId", self.id)
        location.href = "/"
      })
    },
    checkid() {
      const self = this
      console.log(self.id)
      if (self.id == null) {
        self.check = "아이디를 입력해주세요."
      } else if (self.id != null) {
        self.$axios.get("http://localhost:8084/members/" + self.id).then(function (res) {
          if (res.data.dto != null) {
            self.check = "이미사용중인 아이디"
          } else {
            self.check = "사용가능한 아이디"
          }
        })
      }
    },
    getmyinfo() {
      const self = this
      self.$axios.get("http://localhost:8084/members/" + self.loginId).then(function (res) {
        self.id = res.data.dto.id
        self.name = res.data.dto.name
        console.log(self.name)
        console.log(res.data.dto)
        self.birthday = res.data.dto.birthday
        self.phonenum = res.data.dto.phonenum
        self.email = res.data.dto.email
      })

      self.$axios.get("http://localhost:8084/coupons/mycoupon/" + self.loginId).then(function (res2) {
        console.log(1)
        self.couponlist = res2.data.mycouponlist
      })
    },
    editpwd() {
      const self = this
      let form = new FormData()
      form.append('id', self.id)
      form.append('name', self.name)
      form.append('pwd', self.pwd)
      form.append('birthday', self.birthday)
      form.append('phonenum', self.phonenum)
      form.append('email', self.email)
      self.$axios.patch('http://localhost:8084/members', form).then(function (res) {
        alert("수정이 완료되었습니다.")
        console.log(res.data.member)
      })
    }
  }
};
</script>
<style scoped>
* {
  font-size: 20px;
}

.logo {
  width: 50px;
  height: 60px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}



a {
  color: black
}

.mailicon {
  margin-left: 10px;
  margin-right: 13px;
}

.logorouter {
  text-decoration: none;
}

.fa-house-chimney {
  font-size: 23px;
}

.profile_contents_container {
  width: 500px;
}

.profile_title {
  width: 200px;
  height: 50px;
}

.profile_detail {
  width: 300px;
  height: 50px;
}

.profile_img {
  width: 180px;
  height: 50px;
}
.coupontd{
  height: 45px;
}
span{
  padding: 0 5px 0 5px
}
</style>
  