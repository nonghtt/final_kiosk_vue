<template>
    <div class="container-fluid py-2" >
        <div class="row" v-if="loginId == null">
            <div class="col"></div>
            <div class="col-6">
                <router-link class="logorouter navbar-brand justify-content-centers" to="/">
                    <img class="logo" src="../../assets/uscreamlogo_FINAL.png" style="height:100%; width:20%;">
                </router-link>
            </div>
            <div class="col d-flex justify-content-end" style="align-items: center;">
                <span data-bs-toggle="modal" data-bs-target="#login">
                    LOGIN
                </span>
                <router-link class="nav-link" to="/about" style="margin-left: 10px; margin-right: 10px;">
                    JOIN
                </router-link>
            </div>
        </div>
    </div>

    <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">LOGIN</h1>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
        <button type="button" class="btn btn-primary">로그인</button>
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
            loginId: sessionStorage.getItem('loginId'),
            modalviewpopup: false
        }
    }
}
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
</style>
  