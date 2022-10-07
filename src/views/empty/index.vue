<template>
  <div class="dashboard-container" />
</template>

<script>
export default {
  name: 'Empty',
  filters: {

  },
  data() {
    return {
      // 表格高度
      tableHeight: '300px',
      // 分页条
      listQuery: {
        pageNum: 1, // 页码
        pageRow: 10 // 每页条数
      },
      // 分页组件--数据总条数
      totalCount: 0,
      // 表格多选项
      multipleSelection: [],
      // 表格数据
      tableData: [{}]

    }
  },
  computed: {},
  mounted() {

  },
  created() {
    // 页面初始化
    //   this.init();
  },
  methods: {
    /**
       * @description 设置el-table内容居中
       */
    cellStyle({
      row,
      column,
      rowIndex,
      columnIndex
    }) {
      return 'text-align:center'
    },
    /**
       * @description 设置el-table表头居中
       */
    rowClass({
      row,
      column,
      rowIndex,
      columnIndex
    }) {
      return 'text-align:center'
    },
    /**
       * @description 分页条size设置
       */
    handleSizeChange(val) {
      this.listQuery.pageRow = val
      // this.init();
    },
    /**
       * @description 分页条num设置
       */
    handleCurrentChange(val) {
      this.listQuery.pageNum = val
      // this.init();
    }

  }
}

</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      padding: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }

  }

  /*设置显示隐藏部分内容，按50%显示*/
  .el-tooltip__popper {
    font-size: 14px;
    max-width: 50%
  }

  .toolbar {
    background: #f2f2f2;
    padding-top: 5px;
    height: 50px;
    width: 70%;
    position: fixed;
    bottom: 0;
  }

  .operationClass {
    color: #409EFF;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
  }

</style>
