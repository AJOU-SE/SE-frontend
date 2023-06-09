import axios from "axios";

export const getMenuData = async() => {
    try{
        const response = await axios.get('/menu');
        return response.data;
    }catch(error){
        console.log(error);
        return [];
    }
}

export const getMenuByCafeteria = async (cafeteriaName) =>{
    const menuData = await getMenuData();
    const Menu= menuData.filter((menu)=>menu.cafeteria === cafeteriaName);
    return Menu;
}


export const getMenuByStore = async (storeName) => {
    const menuData = await getMenuData();
    const Menu= menuData.filter((menu)=>menu.store === storeName);
    return Menu;
}