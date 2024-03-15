
export const analyzeStatus = (window:Window & typeof globalThis)=>{
    const url = window.location.pathname
    const elemList:string[] = url.split("/")
    let returnStatus:string = ""
    if (elemList[1] === "home"){    
        returnStatus = "Homeを閲覧中"
    }else if (elemList[1] === "thread"){
        returnStatus = `${elemList[2]}を閲覧中`
    }else{
        returnStatus = "FBoardを探索中"
    }
    return returnStatus
}