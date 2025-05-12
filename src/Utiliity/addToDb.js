import { toast } from "react-toastify";

const getStoreReadList = () =>{
 const storedListStg = localStorage.getItem('read-list')
 if(storedListStg){
    const storedList =JSON.parse(storedListStg)
    return storedList;
 }
 else{
    return [];
 }
} 

const addToStoreReadList = (id) =>{
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
    //    console.log(storedList)
    }
    else{
        storedList.push(id);
        const addStoredStg = JSON.stringify(storedList);
        localStorage.setItem('read-list', addStoredStg);
        toast('This Book is added to read list ');
    }

}

const getStoredWhitelist = () =>{
 const whiteListStg = localStorage.getItem('white-list');
 if(whiteListStg){
    const whiteList= JSON.parse(whiteListStg);
    return whiteList;
 }
 else{
    return[];
 }
}

const addStoredToWhiteList = (id) =>{

    const whiteList = getStoredWhitelist();
    if(whiteList.includes(id)){
        console.log(whiteList)
    }
    else{
        whiteList.push(id)
        const finalWhiteList =JSON.stringify(whiteList);
        localStorage.setItem('white-list', finalWhiteList)
        
    }

}
export {addToStoreReadList, addStoredToWhiteList,getStoreReadList}