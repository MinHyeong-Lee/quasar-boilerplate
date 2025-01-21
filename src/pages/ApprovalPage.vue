<template>
  <q-page class="bg-grey-2">
    <!-- 상단바 -->
    <div class="header-bar">
      <q-btn flat round dense icon="arrow_back" @click="goBack" />
      <div class="header-title">General Expense Approval</div>
      <q-btn flat round dense icon="close" @click="close" />
    </div>

    <!-- 페이지 내용 -->
    <div class="q-px-md q-pt-xl q-pb-lg">
      <!-- 문서 제목 -->
      <h4 class="document-title text-grey-10 q-mt-none q-mb-sm">테스트입니다</h4>

      <!-- 정보 박스 -->
      <q-card class="q-my-md q-pa-sm text-body2">
        <div class="q-mb-xs">
          <span class="text-grey-8">Draft Employee</span>
          <span class="text-caption text-secondary float-right">70819 MINHYEONG LEE</span>
        </div>
        <div class="q-mb-xs">
          <span class="text-grey-8">Company</span>
          <span class="text-caption text-secondary float-right">FNS,Inc</span>
        </div>
        <div class="q-mb-xs">
          <span class="text-grey-8">Department</span>
          <span class="text-caption text-secondary float-right"
            >UL014 - PI SYSTEM DEVELOP - UL</span
          >
        </div>
        <div>
          <span class="text-grey-8">Post Date</span>
          <span class="text-caption text-secondary float-right">01-21-2024</span>
        </div>
      </q-card>

      <!-- 결재선 -->
      <q-expansion-item
        v-model="isApprovalLineOpen"
        expand-separator
        dense
        label="Approval Line"
        class="toggle-box"
      >
        <q-card class="q-pa-sm">
          <!-- Requested -->
          <div class="row align-items-center q-mb-xs">
            <div class="col text-body2 text-grey-8 text-left single-line">MINHYEONG LEE</div>
            <div class="col-auto text-right">
              <div class="text-caption text-secondary">Requested</div>
              <div class="text-caption text-grey-6">01-21-2025 08:42</div>
            </div>
          </div>

          <q-separator spaced />

          <!-- Approve -->
          <div class="row q-mb-xs">
            <div class="col text-body2 text-grey-8">JUNSUNG PARK</div>
            <div class="col-auto text-caption text-secondary text-right">Approve</div>
          </div>
        </q-card>
      </q-expansion-item>

      <!-- 기안내용 -->
      <q-expansion-item
        v-model="isDraftContentOpen"
        expand-separator
        dense
        label="기안내용"
        class="toggle-box"
      >
        <q-card class="q-pa-sm">
          <div class="text-caption">내용</div>
          <div class="text-body1">LOLOLOLOLOL</div>
        </q-card>
      </q-expansion-item>
    </div>

    <!-- 하단 버튼 -->
    <q-btn
      class="fixed-bottom"
      label="결재하기"
      color="primary"
      unelevated
      @click="submitApproval"
    />
  </q-page>
</template>

<script>
export default {
  setup() {
    console.log('Approval')
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
