<template>
  <div class="">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <!--<h3>导航</h3>-->
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的产品</el-breadcrumb-item>
            <el-breadcrumb-item>我的硬件</el-breadcrumb-item>
            <el-breadcrumb-item>型号适配</el-breadcrumb-item>
          </el-breadcrumb>

          <div class="title">
            <h3 class="h3">型号适配</h3>
            <el-tooltip class="item" effect="dark" content="点击添加按钮，可以对设备型号进行功能配置。" placement="right">
              <el-button>?</el-button>
            </el-tooltip>
          </div>
          <div class="line"></div>
          <div class="search-bar">
            <label class="search-code-label" for="search-code">型号:</label>
            <div class="el-input">
              <el-input v-model="input" placeholder="请输入内容" id="search-code"></el-input>
            </div>

            <el-button type="primary">查询</el-button>
          </div>
          <div class="add-bar">
            <el-button type="primary">添加</el-button>
          </div>

          <div class="device-name">设备名称：{{deviceName}}</div>

          <el-table
            :data="tableData"
            border
            style="width: 1000px">
            <el-table-column
              prop="index"
              label="序号"
              width="79">
            </el-table-column>
            <el-table-column
              prop="modelCode"
              label="型号"
              width="240">
            </el-table-column>
            <el-table-column
              prop="productCode"
              label="成品编码"
              width="240">
            </el-table-column>
            <el-table-column
              prop="configMode"
              label="配置方式"
              width="180">
            </el-table-column>
            <el-table-column
              label="操作"
              width="260">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">复制</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>


          <el-pagination
            class="list-pagination"
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>


  </div>
</template>
<script>
  export default {
    data(){
      return {
        input: '',
        activeIndex: '1',
        activeIndex2: '1',
        deviceName:'device-name',
        tableData: [{
          index: '1',
          modelCode: 'ceshwckxh01',
          productCode: 'wckcesh01',
          configMode: 'SmartAP'
        }, {
          index: '2',
          modelCode: 'ceshwckxh02',
          productCode: 'wckcesh02',
          configMode: 'SmartAP'
        }, {
          index: '3',
          modelCode: 'ceshwckxh03',
          productCode: 'wckcesh03',
          configMode: 'SmartAP'
        }, {index: '4',
          modelCode: 'ceshwckxh04',
          productCode: 'wckcesh04',
          configMode: 'SmartAP'
        }]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(row) {
        console.log(row);
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .el-header{
    background-color: #000;
  }
  .el-container{
    .el-aside{

    }
    .el-main{
      text-align: left;
    }
  }
  .el-footer{
    background-color: #000;
    line-height: 60px;
    color: #fff;
  }
  .title{
    .h3{
      display: inline-block;
    }
    .item{
      border-radius: 50%;
      padding: 0;
      width: 20px;
      height: 20px;
    }
  }
  .search-bar {
    .search-code-label{
      display: inline-block;
      width: 70px;
    }
    .el-input {
      width: 300px;
      margin-right: 20px;
    }
  }
  .line{
    height: 1px;
    background-color: #e0e6ed;
    margin: 20px -20px;
  }
  .add-bar{
    text-align: right;
  }
  .device-name{
    margin: 20px 0;
  }
  .list-pagination{
    text-align: center;
    margin-top: 20px;
  }
</style>
