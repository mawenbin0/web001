new Vue({
    el: "#vue-app",
    data() {
        return {
            a:0,
            b:0,
            age:32,
            sex:'nan',
            name1:'123456',
            name: 'xiaoma',
            wechat: "163 498 5547",
            website:'https://www.baidu.com',
            websiteTab:'https://www.baiduTab.com',
        };
    },
    methods: {
        addToA(){
            console.log('addToA');
          return this.a+this.age;
        },
        addToB(){
            console.log('addToB');
          return this.b+this.age;
        },
        greet(time) {
            return `Good ${time} ${this.name}`;
        },
        haveLunch() {
            return `chiguowufanlema`;
        },
        handleClick(){
            alert("hello");
        },
        logAge(){
            console.log('正在输入年龄...')
        },
        getSex(){
        this.sex=this.$refs.sex.value;
        }
    },
    watch:{
        name1(val,oldVal){
            console.log(val,oldVal);
        },
        sex(val,oldVal){
            console.log(val,oldVal);
        },

    },
    computed:{
        dengjiaxing : function(){
            return this.wechat.split(" ").reverse().join(" ");
        }
       }
})