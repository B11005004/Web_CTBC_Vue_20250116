console.log("測試");

// 建立 Vue 應用程式
const app = Vue.createApp({
    // 資料區域
    data(){
        // 資料物件
        return{
            // 第一個文字：值
            firstText:"嗨，這是Vue的資料！",
            textColor:"red",
            fontSize:24,
            canBuy:false,
            web:[
                "HTML","CSS","JAVASCRIPT","jQuery","React","Angular","Git"
            ],
            count: 0,
            pointX:0,pointY:0,
            inputText:"預設文字",
            toDoList:[],addtoDo:"",
        }
    },
    // Methods方法（函式區）
    methods:{
        // 方法名稱(){},
        test(){
            console.log("我是測試方法");
        },
        methodEvent(e) {
            // e 是事件對象的縮寫
            console.log(e);          // 輸出整個事件
            console.log(e.target);   // 輸出觸發事件的目標元素
            console.log(e.x, e.y);   // 輸出事件發生時的鼠標座標
        },
        getPoint(e){
            this.pointX=e.x;
            this.pointY=e.y;
        },
        addtoDoList(){
            this.toDoList.push(this.addtoDo);
        }
    }
});

// 將app變數安裝到 #app 元素
app.mount("#app");