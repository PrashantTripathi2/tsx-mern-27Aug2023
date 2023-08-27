export default Event = {
    event:[],
    emit:function(evtName,arg){
        this.event.forEach((e)=>{
            if(e[0]==evtName){
                e[2](arg);
            }
        });
    },
    Handle:function(evtName,id,handle){
        this.event = this.event.filter((e)=>{
            if(e[0]==evtName&&e[1]==id)return false;
            else return true;
        });
        this.event.push([evtName,id,handle]);
    }
}