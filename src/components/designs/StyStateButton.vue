/*Vue Button 封裝*/

<template>
    <div>
        <button v-bind:class="{ 'vbutton':true,
                                'vbutton-sty-hollow':(option.style == 'hollow') ,
                                'vbutton-size-small': (option.size == 'small') 
                                 }" v-bind:d="tagid" v-on:click="onButtonClick">
            {{text}}
        </button>
    </div>

</template>

<script>
export default {
    /*
        [props] 
        text:  顯示文字
        tagid:  物件的id
        btclick:  按下動作的回調方法
        [methods]
        onButtonClick: 內部接收按下事件的方法
        setEnable: 提供外部 enable 方法
    */
    name: 'StyStateButton',
    props: ['option', 'tagid', 'btclick', 'text'],
    mounted: function() {},
    methods: {
        //  text: 'hint2',
        //size: 'set',
        //style:'hollow', //Solid hollow
        onButtonClick() {
            this.$emit('btclick')
        },
        setEnable(enable) {
            document.getElementById(this.tagid).disabled = !enable
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../visaul.less';
@import '../../page_styles.less';
@color-button-text :@c4_background;
@color-button-bg-active :@c2_click_on;
@color-button-bg :@c1_main_color;
@color-button-bg-disabled :@c8_can_not_click;

@border-hollow : 1px solid @c1_main_color;
.vbutton {
    &:extend(.t004_Login_button_w);
    display: block;
    max-height: 45px;
    min-height: 25px;
    height: 100%;
    width: 100%;
    border: none;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    outline: none;
    background-color: @color-button-bg;
    cursor: pointer;
    &:disabled {
        background-color: @color-button-bg-disabled;
        outline: none;
    }
    &:active {
        background-color: @color-button-bg-active;
    }
}
.vbutton-size-small {
    &:extend(.tfont-small-tip);
    min-width: 0px;
    min-height: 0px;
}

.vbutton-sty-hollow {
    border: @border-hollow;
    background-color: #00000000;
    background-color: rgba(0, 0, 0, 0);
    color: @color-button-bg;
}
</style>
