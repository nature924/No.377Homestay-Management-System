const base = {
    get() {
        return {
            url : "http://localhost:8080/minsuguanliw/",
            name: "minsuguanliw",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/minsuguanliw/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "民宿管理系统"
        } 
    }
}
export default base
