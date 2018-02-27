<template>
    <div style="cursor: pointer;">
        <!-- app -->
        <div v-if="idname == 'icon-APP-Download-24x24px'">
            <span class="icon-APP-Download-24x24px" :style="iconStyle" v-if="state.active">
            </span>
        </div>
        <div v-if="idname == 'icon-HelpLink-24x24px'">
            <span class="icon-HelpLink-24x24px" :style="iconStyle" v-if="state.active">
            </span>
        </div>
        <div v-if="idname == 'icon-ios-22x22px'">
            <span class="icon-ios-22x22px" :style="iconStyle">
            </span>
        </div>
        <div v-if="idname == 'icon-android-22x22px'">
            <span class="icon-android-22x22px" :style="iconStyle">
            </span>
        </div>

        <div v-if="idname == 'icon-my-information_32x32px'">
            <span class="icon-my-information_32x32px" :style="iconStyle" v-if="state.active==false">
            </span>
            <span class="icon-my-information_checked_32x32px" :style="iconStyle" v-if="state.active">
            </span>
        </div>
        <div v-if="idname == 'icon-application_32x32px'">
            <span class="icon-application_32x32px" :style="iconStyle" v-if="state.active==false">
            </span>
            <span class="icon-application_checked_32x32px" :style="iconStyle" v-if="state.active">
            </span>
        </div>
        <div v-if="idname == 'icon-file_32x32px'">
            <span class="icon-file_32x32px" :style="iconStyle" v-if="state.active==false">
            </span>
            <span class=" icon-file_checked_32x32px" :style="iconStyle" v-if="state.active">
            </span>
        </div>

        <!-- prop -->
        <div v-if="idname == 'icon-document_add_24x24px'">
            <span class="icon-document_add_24x24px" :style="iconStyle" v-if="state.active">
            </span>
        </div>
        <div v-if="idname == 'icon-document_search_20x20px'">
            <span class="icon-document_search_20x20px" :style="iconStyle" v-if="state.active">
            </span>
        </div>

        <!--image / arvatar -->
        <div v-if="idname == 'icon-head-figure_big_27x27px'">
            <span class="icon-head-figure_big_27x27px" :style="iconStyle" v-if="state.active">
            </span>
        </div>
        <div v-if="idname == 'icon-head_figure_200x200px'">
            <span class="icon-head_figure_200x200px">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
            </span>
        </div>
        <div v-if="idname == 'icon-head-figure_small_16x16px'">
            <span class="icon-head-figure_small_16x16px" :style="iconStyle" v-if="state.active">
            </span>
        </div>

        <!--3 party -->
        <div v-if="idname == 'icon-qr-code-close'">
            <span class="icon-qr-code-close" :style="iconStyle">
            </span>
        </div>
        <div v-if="idname == 'icon-QQ_28x28px'">
            <span class="icon-QQ_B_28x28px" :style="iconStyle" v-if="state.active==false">
            </span>
            <span class="icon-QQ_28x28px" :style="iconStyle" v-if="state.active">
            </span>
        </div>
        <div v-if="idname == 'icon-wechat_28x28px'">
            <span class="icon-wechat_B_28x28px" :style="iconStyle" v-if="state.active==false">
            </span>
            <span class="icon-wechat_28x28px" :style="iconStyle" v-if="state.active">
            </span>
        </div>

        <!-- member status -->
        <div v-if="idname == 'icon-certification_13x13px'">
            <span class="icon-certification_13x13px" :style="iconStyle" v-if="state.active">
            </span>
        </div>

        <!-- confirm / cancel -->
        <div v-if="idname == 'icon-cancel_25x25px'">
            <span class="icon-cancel_25x25px" :style="iconStyle" v-if="state.active">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
            </span>
        </div>
        <div v-if="idname == 'icon-confirm_25x25px'">
            <span class="icon-confirm_25x25px" :style="iconStyle" v-if="state.active">
                <span class="path1"></span>
                <span class="path2"></span>
            </span>
        </div>

        <!-- edit / upload -->
        <div v-if="idname == 'icon-edit_25x25px'">
            <span class="icon-edit_25x25px" :style="iconStyle">
            </span>
        </div>
        <div v-if="idname == 'icon-updated_24x24px'">
            <span class="icon-updated_24x24px">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        state: {
            default: function() {
                return {
                    active: true,
                    custom: null
                }
            },
            type: Object
        },
        idname: {
            default: '',
            type: String
        },
        size: {
            default: '35px',
            type: String
        },
        stycolor: {
            default() {
                return {
                    active: 'red',
                    disable: null
                }
            },
            type: Object
        }
    },
    data() {
        return {}
    },
    computed: {
        isShowActive() {},
        isShowDisable() {},
        iconStyle() {
            return this.styleSize + this.styleColor
        },
        styleSize() {
            return 'font-size:' + this.size + ';'
        },
        styleColor() {
            if (this.state.custom) {
                if (this.stycolor[this.state.custom]) {
                    return this.packStyleColor(this.stycolor[this.state.custom])
                }
            }

            if (this.state.active) {
                if (this.state.active == true && this.stycolor.active) {
                    return this.packStyleColor(this.stycolor.active)
                } else if (this.state.active == false && this.stycolor.disable) {
                    return this.packStyleColor(this.stycolor.disable)
                }
            }

            return ''
        }
    },
    components: {},
    mounted() {},
    methods: {
        packStyleColor: function(color) {
            return 'color:' + color + ';'
        }
    }
}
</script>
<style lang="less" scoped>
* div {
    letter-spacing: 0px !important;
}
</style>
