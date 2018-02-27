/*回應訊息顯示畫面*/

<template>
    <div class="dlg-com-comfirm" v-show="isShow">
        <div class="mu-icon" v-on:click="onCloseComfirm(false)">
            <div class="icon-default" style="background-image: url('/static/image/icon_temp.png');">
            </div>
        </div>
        <div class="comfirm-msg">{{comfirmMsg}}</div>
        <div class="sta-comfirm">
            <StateButton tagid='idcrmmsg' :text="msgGotoCenter"></StateButton>
        </div>
    </div>
</template>

<script>
import StateButton from '@Components/designs/StateButton.vue'
export default {
  /*
      [method] 
      setDisplay : 設定是否顯示
      stopDisplay : 隱藏顯示
  */
  name: 'DlgComfirm',
  components: {
    StateButton
  },
  data() {
    return {
      isShow: true,
      message_text: this.getDisplayString(''),
      comfirmMsg: '请至各人中心完善资料',
      msgGotoCenter: '前往各心中心'
    }
  },
  methods: {
    setDisplay: function(msg) {
      this.message_text = this.getDisplayString(msg)
      this.isShow = true
    },
    stopDisplay: function() {
      this.isShow = false
    },
    getDisplayString: function(str) {
      var strOrg = str.replace(/\r\n/g, '<br>')
      return strOrg
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../visaul.less';
@import '../../page_styles.less';
@color-bg :gray;
@color-text :@c10_text_button_popup;

.dlg-com-comfirm {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  min-width: 340px;
  min-height: 100px;
  max-width: 560px;
  max-height: 350px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background-color: @color-bg;
}

.message span {
  display: table-cell;
  position: relative;
  height: 100px;
  width: 320px;
  text-align: center;
  vertical-align: middle;
  color: @color-text;
}

.mu-icon {
  position: absolute;
  right: 0px;
  top: 10px;
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: center;
}

.sta-comfirm {
  margin-top: 25px;
  margin-bottom: 20px;
  width: 150px;
  height: 40px;
}
.comfirm-msg {
  margin-top: 35px;
  flex: 1;
}
</style>
