/*Vue Input 封裝*/

<template>
    <div style="height: 100%;">
        <div v-if="isTypePassword" style="height: 100%;">
            <input ref="textInput" autocomplete="off" readonly :id="tagid" type="password" v-on:keyup.13="onEnterPress" class="vueinput" v-model="display" v-bind:placeholder="texthint">
        </div>
        <div v-else-if="isTypePassword !== true" style="height: 100%;">
            <input ref="textInput" autocomplete="off" readonly :id="tagid" type="text" v-on:keyup.13="onEnterPress" class="vueinput" v-model="display" v-bind:placeholder="texthint" v-on:keyup="onInputKeyUp">
        </div>
    </div>
</template>

<script>
export default {
    /*
        [props] 
        value:  文字雙向綁定的位址
        tagid:  物件的id
        hint:  input 物件的提示文字
        vuetype:  input 物件的 type值 
        [methods]
        update: 內部接收輸入事件的方法
        setEnable: 提供外部 enable 方法
        removeAttribute: 內部取消 readonly 方法
        onEnterPress: 內部接收Enter key事件的方法
    */
    name: 'VueStateInput',
    props: ['tagid', 'value', 'hint', 'vuetype', 'ipEnter', 'regLimit'],
    mounted: function() {
        this.isTypePassword = this.attributes.type === 'password'
        setTimeout(this.removeAttribute, 500)
    },
    data() {
        return {
            texthint: this.hint,
            display: this.value,
            isTypePassword: false,
            attributes: {
                type: this.vuetype,
                placeholder: 'Dynamically Input'
            }
        }
    },
    watch: {
        display: function() {
            if (!this.display) return
            if (this.regLimit) {
                if (this.regLimit['lenthMax']) {
                    if (this.display.length > this.regLimit['lenthMax']) {
                        var trimmedString = this.display.substring(0, this.regLimit['lenthMax'])
                        this.display = trimmedString
                    }
                }
                if (this.regLimit['regRule']) {
                    var role = this.regLimit['regRule']
                    if (role == 'digionly') {
                        if (isNaN(this.display)) {
                            var trimmedString = this.display.substring(0, this.display.length - 1)
                            this.display = trimmedString
                        }
                    }
                    if (role == 'textonly') {
                        if (/\d/.test(this.display) == true) {
                            var trimmedString = this.display.substring(0, this.display.length - 1)
                            this.display = trimmedString
                        }
                    }
                }
            }
            this.$emit('update:value', this.display)
        }
    },
    methods: {
        setEnable(enable) {
            document.getElementById(this.tagid).disabled = !enable
        },
        setTextValue(txt) {
            this.display = txt
        },
        onEnterPress: function(e) {
            this.$emit('ipEnter')
        },
        removeAttribute: function() {
            if (this.$refs.textInput != null) this.$refs.textInput.removeAttribute('readonly')
        },
        setEnable(enable) {
            document.getElementById(this.tagid).disabled = !enable
        },
        onInputKeyUp: function(event) {}
    }
}
</script>

<style lang="less" scoped>
@import '../../visaul.less';

@color-button-text :@c4_background;
@color-button-bg-active :@c1_main_color;
@color-button-bg-focus :@c2_click_on;
@color-button-bg-disabled :@c8_can_not_click;

.vueinput {
    &:extend(.t003_Login_enter);
    display: block;
    height: 100%;
    width: 100%;
    color: black;
    margin-bottom: 0px;
    padding-left: 8px;
    padding-right: 20px;
    letter-spacing: 1px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    line-height: 100%;
    border: 1 none;
    border: 1px solid @c8_can_not_click;
    background-color: white;
    &:focus {
        border: 1px solid;
        outline: none;
        border: 1px solid @c1_main_color;
    }
    &::-webkit-input-placeholder {
        &:extend(.t002_Login_enter_empty);
    }
}
</style>
