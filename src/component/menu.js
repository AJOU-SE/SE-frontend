import { getMenuByCafeteria,getMenuByStore } from "./cafeteria_menu";

export const showMenuByCafeteria = (cafeteriaName,selectedDate,searchResults) =>{
    const menuList = getMenuByCafeteria(cafeteriaName);

    if (searchResults && searchResults.length>0){
        const filteredResults= searchResults.filter(
            (menu)=>menu.date===-1 || menu.date===selectedDate
        );
        return filteredResults.map((menu,index)=>(
                <div key={index}>
                    {menu.time && <p>{menu.time}</p>}
                    <p>{menu.menu} {menu.price}원</p>
                </div>
            ));
    
    }
    return menuList.map((menu,index)=>{
        if (menu.date===-1 || menu.date===selectedDate){
            return (
                <div key={index}>
                    {menu.time && <p>{menu.time}</p>}
                    <p>{menu.menu} {menu.price}원</p>
                </div>
            )
        }
    })
}

export const showMenuByStore = (storeName) => {
    const menuList = getMenuByStore(storeName)

    return menuList.map((menu,index)=>(
        <div key={index}>
            <p>{menu.menu} {menu.price}원</p>
        </div>
    ))
}

