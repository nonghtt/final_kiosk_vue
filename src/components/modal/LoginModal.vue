<template>
    <div class="login-page" ng-app="" style="z-index: 999;">
        <div class="login-content login-content-signin" ng-hide="showSignIn">
            <div>
                <h2>Log in</h2>
                <form class="wrapper-box" role="form" ng-submit="login()">
                    <input type="text" v-model="id" class="form-control form-control-email" placeholder="Id" required>
                    <input type="password" v-model="pwd" class="form-control form-control-password" placeholder="Password"
                        required>
                    <!-- <div class="checkbox pull-left">
        <label>
          <input type="checkbox"> Remember me.
        </label>
      </div> -->
                    <button type="button" class="btn btn-submit btn-default pull-right" @click="login">Log in</button>
                    <a id="custom-login-btn" @click="kakaoLogin()">
                        <img class="kakaologin" src="../../assets/kakao_login_small.png" alt="카카오 로그인 버튼" />
                    </a>
                </form>
            </div>
        </div>

        <div class="login-content login-content-signup ng-hide" ng-show="showSignIn">
            <div>
                <h2>Sign Up</h2>
                <form class="wrapper-box" role="form" ng-submit="register()">
                    <input type="text" v-model="id" class="form-control form-control-username" placeholder="Id" required>
                    <input type="text" v-model="name" class="form-control form-control-username" placeholder="Username"
                        required>
                    <input type="password" v-model="pwd" class="form-control form-control-password" placeholder="Password"
                        required>
                    <input type="email" v-model="email" class="form-control form-control-email" placeholder="Email address"
                        required>
                    <input type="date" v-model="birthday" class="form-control form-control-date" required>
                    <input type="text" v-model="phonenum" class="form-control form-control-email" placeholder="PhoneNum"
                        required>
                    <!-- <div class="checkbox pull-left">
        <label>
          <input type="checkbox"> Remember me.
        </label>
      </div> -->
                    <button type="button" class="btn btn-submit btn-default pull-right" @click="join">Sign up</button>
                </form>
            </div>
        </div>



        <div class="login-switcher">
            <div class="login-switcher-signin" ng-show="showSignIn">
                <h3>Have an account?</h3>
                <button ng-click="showSignIn=false">Login</button>
            </div>
            <div class="login-switcher-signup" ng-hide="showSignIn">
                <h3>Don't have an account?</h3>
                <button ng-click="showSignIn=true">Sign Up</button>
            </div>
        </div>


    </div>
</template>
  
<script>
export default {
    data() {
        return {
            num: 0,
            showSignUp: false,
            email: '',
            name: '',
            id: null,
            pwd: '',
            birthday: '',
            phonenum: '',
        };
    },
    methods: {
        login() {
            const self = this
            self.$axios.get("http://localhost:8084/members/" + self.id).then(function (res) {

                console.log(self.id)
                console.log(res.data.dto)
                if (res.data.dto != null && res.data.dto.pwd == self.pwd) {
                    sessionStorage.setItem("loginId", res.data.dto.id)
                    if (self.num == 0) {
                        location.href = "/"
                    }
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
                self.clicklogin()
            })
        },
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
                                if (self.num == 0) {
                                    sessionStorage.setItem("data", self.data)
                                    location.href = "/"
                                }
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
        
    },

};
</script>
  
<style scoped>
.overlay {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: black;
}

.login-page {
    position: absolute;
    width: 680px;
    height: 500px;
    top: 150px;
    left: 400px;
    background: #fff;
}

.login-page .login-content {
    width: 420px;
    padding: 40px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    position: absolute;
    background: #FFF;
    box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
    border-top: 5px solid #7ac142;
    float: left;
    transition: all 0.2s ease-out;
    transition-delay: 0.2s;
}

.login-page .login-content.login-content-signin.ng-hide:not(.ng-hide-animate) {
    transition-delay: 0s;
    display: block !important;
    opacity: 0;
    z-index: -1;
    transform: translate(-45%, -50%);
}

.login-page .login-content.login-content-signup.ng-hide:not(.ng-hide-animate) {
    transition-delay: 0s;
    display: block !important;
    opacity: 0;
    z-index: -1;
    transform: translate(-55%, -50%);
}

.login-page .login-content h2 {
    text-align: left;
    color: #7ac142;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
}

.login-page .login-content form.wrapper-box {
    margin-top: 40px;
}

.login-page .login-content form.wrapper-box input {
    margin-top: 20px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0;
    padding-left: 0;
    box-shadow: none;
    transition: all 0.1s ease-out;
}

.login-page .login-content form.wrapper-box input:valid {
    border-bottom: 1px solid #7ac142;
}

.login-page .login-content form.wrapper-box input:focus:invalid {
    border-bottom: 1px solid #EF6161;
}

.login-page .login-content form.wrapper-box ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
}

.login-page .login-content form.wrapper-box :-moz-placeholder {
    color: rgba(0, 0, 0, 0.5);
}

.login-page .login-content form.wrapper-box ::-moz-placeholder {
    color: rgba(0, 0, 0, 0.5);
}

.login-page .login-content form.wrapper-box :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
}

.form-control-date {
    color: rgba(0, 0, 0, 0.5);
}

.login-page .login-content form.wrapper-box button {
    display: inline-block;
    margin-top: 50px;
    border: 2px solid #7ac142;
    background: #7ac142;
    border-radius: 25px;
    padding: 3px 12px 5px 12px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0px;
    transition: all 0.1s ease-out;
}

.login-page .login-content form.wrapper-box button:hover {
    color: #7ac142;
    background: #fff;
    border: 2px solid #7ac142;
}

.login-page .login-content form.wrapper-box button:active {
    box-shadow: none;
}

.login-page .login-content .outer-link {
    display: inline-block;
    margin-top: 50px;
    padding: 5px 0;
    display: block;
    color: rgba(0, 0, 0, 0.4);
    transition: all 0.1s ease-out;
}

.login-page .login-content .outer-link:hover {
    transition: all 0s ease-out;
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
}

.login-page .login-content.login-content-signin>div,
.login-page .login-content.login-content-signup>div {
    overflow: hidden;
    top: 50%;
    position: relative;
    transform: translateY(-50%);
}

.login-page .login-content.login-content-signin {
    margin-left: -130px;
}

.login-page .login-content.login-content-signup {
    margin-left: 130px;
}

.login-page .login-switcher {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 660px;
    height: 400px;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.03);
}

.login-page .login-switcher>div {
    width: 40%;
    margin-top: 125px;
}

.login-page .login-switcher>div.login-switcher-signin {
    float: left;
}

.login-page .login-switcher>div.login-switcher-signup {
    float: right;
}

.login-page .login-switcher>div h3 {
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    font-size: 14px;
}

.login-page .login-switcher>div button {
    display: block;
    margin: 20px auto 0 auto;
    outline: 0;
    background: none;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.3);
    font-weight: bold;
    font-size: 14px;
    padding: 4px 12px 5px 12px;
    transition: all 0.1s ease-out;
}

.login-page .login-switcher>div button:hover {
    border: 2px solid #7ac142 !important;
    color: rgba(0, 0, 0, 0.8);
}

.login-page .login-switcher .login-switcher-signin,
.login-page .login-switcher .login-switcher-signup {
    transition: all 0.1s ease-out;
}

.login-page .login-switcher .login-switcher-signin.ng-hide:not(.ng-hide-animate),
.login-page .login-switcher .login-switcher-signup.ng-hide:not(.ng-hide-animate) {
    display: block !important;
    opacity: 0;
    transform: translateY(10px);
}

.kakaologin {
    height: 34px;
    vertical-align: bottom;
    margin-left: 10px;
}
</style>
  