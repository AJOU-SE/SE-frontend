import { getMenuByCafeteria,getMenuByStore } from "./cafeteria_menu";

export const showMenuByCafeteria = (cafeteriaName) =>{
    const menuList = getMenuByCafeteria(cafeteriaName);


    return menuList.map((menu,index)=>(
        <div key={index}>
            {menu.time && <p>{menu.time}</p>}
            <p>{menu.menu} {menu.price}원</p>
        </div>
    ))
}

export const showMenuByStore = (storeName) => {
    const menuList = getMenuByStore(storeName)

    return menuList.map((menu,index)=>(
        <div key={index}>
            <p>{menu.menu} {menu.price}원</p>
        </div>
    ))
}

