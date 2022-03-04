<template>
   <div>
       <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色列表</el-breadcrumb-item> 
       </el-breadcrumb> 
       <!-- 卡片视图 -->
        <el-card>
           <el-row>
                <el-col>
                    <el-button type="primary">添加角色</el-button>
                </el-col>
            </el-row> 
            <!-- 角色列表 -->
            <el-table :data="rolesList" border style="margin-top:15px;">
                 <!-- 展开列 -->
                 <el-table-column type="expand">
                     <template slot-scope="scope">
                       <!-- <pre>{{scope.row}}</pre> -->
                       <el-row :class="['bdbottom',i1===0?'bdtop':'','vcenter']" v-for="(item1,i1) in scope.row.children" :key="item1.id">
                              <!-- 一级权限 -->
                             <el-col :span="6">
                                 <el-tag closable @close="removeRightById(scope.row,item1.id)">{{item1.authName}}</el-tag>
                                 <i class="el-icon-caret-right"></i>
                              </el-col>
                          <!-- 二级 三级权限 -->
                          <el-col :span="18">
                             <el-row :class="[i2===0 ? '':'bdtop','vcenter']" v-for="(item2,i2) in item1.children" :key="item2.id">
                                <el-col :span="6">
                                    <el-tag type="success" closable @close="removeRightById(scope.row,item2.id)">{{item2.authName}}</el-tag>
                                    <i class="el-icon-caret-right"></i>
                                </el-col>
                                <el-col :span="18">
                                    <el-tag type="warning" closable @close="removeRightById(scope.row,item3.id)" v-for="item3 in item2.children" :key="item3.id">{{item3.authName}}</el-tag>
                                </el-col>
                             </el-row>
                          </el-col>
                       </el-row>
                     </template>
                 </el-table-column>
                 <!-- 索引列 -->
                 <el-table-column type="index"></el-table-column>
                 <el-table-column label="角色名称" prop="roleName"></el-table-column>
                 <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
                 <el-table-column label="操作">
                      <template slot-scope="scope">
                         <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                         <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
                         <el-button size="mini" type="warning" icon="el-icon-setting" @click="showSetRightDialog(scope.row)">权限分配</el-button>
                      </template>
                 </el-table-column>
            </el-table>
        </el-card>

          <!-- 分配权限的弹框 -->
          <el-dialog
               title="分配权限"
               :visible.sync="setRightDialogVisible" @close="setRightDialogClosed"
               width="50%">
               <!-- 树形控件 -->
               <el-tree :data="rightsList" ref="treeRef" :props="treeProps" :default-checked-keys="defKeys" default-expand-all show-checkbox node-key="id"></el-tree>
               <span slot="footer" class="dialog-footer">
                  <el-button @click="setRightDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="allotRights">确 定</el-button>
               </span>
         </el-dialog>
   </div>
</template>

<script>
export default {
  name: 'roles',
  data(){
     return{
        rolesList:[], // 角色列表
        setRightDialogVisible:false, // 控制分配权限的显隐
        rightsList:[],  // 分配权限列表
        treeProps:{     // 树形控件
           label:'authName',
           children:'children'
        },
        defKeys:[],   // 默认打开树形结构 勾选中值
        roleId:'',  // 当前分配权限的id
     }
  },
  methods:{
     // 点击分配权限弹框的确认按钮
     async allotRights(){
        const keys = [
           ...this.$refs.treeRef.getCheckedKeys(),
           ...this.$refs.treeRef.getHalfCheckedKeys(),
        ]
        const idStr = keys.join(',')
        const {data:res} = await this.$http.post('/rolestip',{rids:idStr,roleId:this.roleId})
        console.log('res',res)
        if(res.data.meta.status !== 200){ return this.$message.error('分配权限失败')}
        this.$message.success(res.data.meta.msg)
        this.setRightDialogVisible = false;
        this.getRolesList();
     },
     //监听分配权限弹框关闭事件
     setRightDialogClosed(){
        this.defKeys = []
     },
     // 通过递归获取三级权限的id 并保存到defKeys 里面
     getDefKeys(node,arr){
       // 如果当前节点没有children 属性  就是第三级节点
       if(!node.children){
            return arr.push(node.id)
       }
       node.children.forEach(item=>{
            this.getDefKeys(item,arr)
       })
     },
     // 分配权限
    async showSetRightDialog(role){
      this.roleId = role.id;
      const {data:res} = await this.$http.get('/rightstree')
      if(res.data.meta.status !== 200) { return this.$message.error('分配权限列表失败')}
      this.rightsList = res.data.data;
      // 递归获取三级权限的id
      this.getDefKeys(role,this.defKeys)
      this.setRightDialogVisible = true;

    },
    async getRolesList(){
       const {data:res} = await this.$http.get('/roles')
       console.log('333',res)
       if(res.data.meta.status !== 200){ return this.$message.error('获取角色列表失败')}
       this.rolesList = res.data.data;
     },
     //根据id 删除对应的权限
     async removeRightById(role,rightId){
         console.log('role',role)
         const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=> err)
        //点击确定返回 confirm   取消 返回 cancel
        if(confirmResult !== 'confirm'){
            return this.$message.info('已取消删除')
        }else{
            const {data:res} = await this.$http.delete('/rolesrights',{roleId:role.id,rightId:rightId})
            if(res.data.meta.status !== 200){ this.$message.error('删除权限失败')}
            this.$message.success(res.data.meta.msg)
            console.log('88888',res)
            //role.children = res.data.data.children;
            this.rolesList = res.data.data
            //this.getRolesList()
        }
     },
  },
  created(){
    this.getRolesList()
  },
 
}
</script>

<style lang="less" scoped>

.el-tag{margin:7px;}

.bdtop{border-top: 1px solid #eee;}
.bdbottom{border-bottom: 1px solid #eee;margin:0 48px;}

.vcenter{
    display: flex;
    align-items: center;
}

</style>
