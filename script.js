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
            isCheck:false,
            clickPoint:0,

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
        },
        updateClickPoint(e){    //九、更新座標方法
            this.clickPoint=e.x;
        },
        // 新的資料是第一個參數
        newAndOldPoint(newX,oldX){
            console.log("舊座標",oldX);
            console.log("新座標",newX);
        }

    },
    // computed 計算處理
    computed:{
        // 需要監聽資料以及處理的內容
        // 當資料內的 ischeck 被改變時會處理
        checked(){
            if(this.isCheck) return "已經勾選";
            else return "尚未勾選";
        }
    },
    // watch 監聽
    watch:{
        // 記錄新資料
        // clickPoint(newPoint)會傳入新資料給newPoint
        clickPoint(newPoint){
            console.log(newPoint);
        },
        // 記錄新與舊資料(新資料會在第一個參數)
        clickPoint:"newAndOldPoint"
    }

});

// 將app變數安裝到 #app 元素
app.mount("#app");