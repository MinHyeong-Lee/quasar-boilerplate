<template>
    <q-layout>
      <q-page-container>
        <q-page class="bg-grey-2">
          <!-- 상단바 -->
          <div class="header-bar">
            <q-btn flat round dense icon="arrow_back" @click="goBack" />
            <div class="header-title">General Expense Approval</div>
            <q-btn flat round dense icon="close" @click="close" />
          </div>
        </q-page>
      </q-page-container>
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  export default {
    setup() {
      console.log('Main')
    },
    data() {
      return {
        isApprovalLineOpen: false,
        isDraftContentOpen: false,
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      close() {
        this.$router.push('/')
      },
      submitApproval() {
        console.log('결재하기 클릭')
      },
    },
  }
  </script>
  
  <style scoped>
  /* 상단바 */
  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .header-title {
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
  
  /* 문서 제목 */
  .document-title {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
  
  /* 토글 박스 크기 조정 */
  .toggle-box .q-expansion-item__content {
    padding: 8px;
  }
  .toggle-box .q-expansion-item__container {
    font-size: 14px;
  }
  
  /* 하단 버튼 */
  .fixed-bottom {
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
    z-index: 1000;
  }
  
  .single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .align-items-center {
    display: flex;
    align-items: center;
  }
  </style>
  