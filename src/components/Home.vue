<template>
  <el-container class="home_container">
    <!-- 头部 -->
    <el-header>
        <div>
           <img src="../assets/logo.png" />
           <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse?'64px':'200px' ">
            <div class="toggle_button" @click="toggleCollapse">|||</div>
            <el-col :span="24">
                    <el-menu unique-opened :collapse="isCollapse" :collapse-transition="false"
                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#409eff" router :default-active="activePath">
                        <!-- 一级菜单 -->
                        <el-submenu :index="item.id + '' " v-for="item in menuList" :key="item.id"> 
                            <template slot="title">
                                <i :class="iconsObj[item.id]"></i>
                                <span>{{item.authName}}</span>
                            </template>
                            <template v-if="item.children.length != 0">
                                <el-menu-item :index="'/' + subItem.path " v-for="subItem in item.children" 
                                :key="subItem.id" @click="saveNavState('/' + subItem.path)">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>{{subItem.authName}}</span>
                                    </template>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </el-menu>
              </el-col>
        </el-aside>
        <!-- 主内容 -->
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data(){
   return{
     menuList:[],
     iconsObj:{
      "125":"iconfont icon-jurassic_user",
      "103":"iconfont icon-tijikongjian",
      "101":"iconfont icon-shangpin",
      "102":"iconfont icon-danju-xianxing",
      "145":"iconfont icon-baobiao",
     },
     isCollapse:false,  // 是否折叠菜单
     activePath:'',     // 被激活的菜单
   }
  },
  methods:{
    logout(){
      sessionStorage.clear();
      this.$router.push('/login')
    },
    async getMenuList(){
       const { data:res} = await this.$http.get('/menus')
       if(res.data.meta.status===200){
           this.menuList = res.data.data
       }
     },
     // 切换菜单折叠
     toggleCollapse(){
        this.isCollapse = !this.isCollapse
     },
     // 保存左侧菜单高亮的部分
     saveNavState(activePath){
        sessionStorage.setItem('activePath',activePath)
        this.activePath = activePath
     }
  },
  created(){
      // 获取左侧菜单列表
      this.getMenuList()
      this.activePath = sessionStorage.getItem('activePath')
  },
}
</script>

<style lang="less" scoped>
.home_container{
    height:100%;
}
.el-header{
    display: flex;
    justify-content: space-between;
    background-color: #373d41;
    align-items: center;
    color:#fff;
    font-size: 16px;
    img{
        width:40px;height:40px;margin-top:10px;
    }
    > div{
        display: flex;align-items: center;
        span{margin-left: 15px;}
    }
}
.el-aside{
    background-color: #333744;
}
.el-menu{
        border-right: none !important;
    }
.el-main{
    background-color: #eaedf1;
}

.iconfont{margin-right:10px;}

.toggle_button{
    background-color: #4a5064;font-size: 10px;line-height: 24px;color:#fff;text-align: center;
    letter-spacing: 0.2em;cursor: pointer;
}



</style>
