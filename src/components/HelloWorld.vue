<template>
    <div class="hello">
        <div class="header">
            <img src="../common/images/header.jpg" />
        </div>
        <div class="item-wrapper">
            <ul>
                <li v-for="(item,index) in items" :key="index" class="item">
                    <div class="pic">
                        <a :href="item.itemLink"><img :src="item.imgSrc" /></a>
                    </div>
                    <div class="info">
                        <p class="decs">
                            <a :href="item.itemLink">{{item.poductName}}</a>
                        </p>
                        <p class="text">
                            <span class="hot">双11价</span>
                            <span class="price">￥{{item.price}}</span>
                            <span class="preferential">（{{item.preferential}}）</span>
                        </p>
                        <p class="type">{{item.activityType}}</p>
                    </div>
                    <a :href="item.shopLink" class="btn">{{item.activeName}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { items } from "../api/data";

export default {
    name: "HelloWorld",
    data() {
        return {
            items: items
        };
    },
    created() {
        console.log(this.items);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import "../common/less/main.less";
.hello {
    width: 100%;
    background-color: #f5294c;

    .header {
        width: 100%;
        text-align: center;
        img {
            width: 750px;
            height: 460px;
        }
    }
    .item-wrapper {
        padding: 30px 10px 10px 10px;
        .item {
            position: relative;
            background-color: #fff;
            display: flex;
            height: 206px;
            .border-1px(#f5294c);
            .pic {
                flex: 0 0 175px;
                margin-top: 18px;
                img {
                    width: 175px;
                    height: 175px;
                }
            }
            .info {
                flex: 1;
                padding: 18px 20px;
                .decs {
                    font-size: 24px; /* px */
                    margin-bottom: 10px;
                    a {
                        color: #424242;
                        //文字超出2行隐藏文字并有省略号
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                }
                .text {
                    margin-bottom: 10px;
                    span {
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .hot {
                        padding: 3px 8px;
                        background: #f5294c;
                        color: #fff;
                        font-size: 22px; /* px */
                        border-radius: 2px;
                    }
                    .price {
                        color: #f5294c;
                        font-size: 28px; /* px */
                        font-weight: bold;
                    }
                    .preferential {
                        color: #f5294c;
                        font-size: 22px; /* px */
                        font-weight: bold;
                    }
                }
                .type {
                    font-size: 24px; /* px */
                    color: #ff5a13;
                }
            }
            .btn {
                position: absolute;
                font-size: 26px; /* px */
                bottom: 16px;
                right: 18px;
                display: block;
                padding: 5px 18px;
                background: #f5294c;
                color: #fff;
                font-weight: bold;
                border-radius: 4px;
            }
        }
    }
}
</style>
