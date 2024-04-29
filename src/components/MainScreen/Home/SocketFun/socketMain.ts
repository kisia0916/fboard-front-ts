
export const homeScreenSocketMain = (socketData:{id:string,type:string,data:JSON},threadList:any[],setThreadList:any,userId:string)=>{
    if (socketData.type === "addmess"){
        const newThreadList = threadList.map((i)=>{
            if (i.theradId === socketData.id){
                i.messNum = i.messNum+1
            }
            return i
        })
        setThreadList(newThreadList)
    }else if (socketData.type === "addjoin"){
        const newThreadList = threadList.map((i)=>{
            if (i.theradId === socketData.id && userId !== i.userId){
                i.joinNum = i.messNum+1
            }
            return i
        })
        setThreadList(newThreadList)
    }
}