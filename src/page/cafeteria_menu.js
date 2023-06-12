import axios from "axios";

export const getMenuData = async () => {
  try {
    const response = await axios.get("/menu");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMenuByCafeteria = async (cafeteriaName, selectedDate) => {
  const menuData = await getMenuData();
  const selectedDay = selectedDate.getDay(); // 선택한 날짜
  console.log(selectedDay);

  const Menu = menuData.filter((menu) => {
    const menuDate = new Date(menu.date);
    const date = menuDate.getDay(); // 메뉴 목록에 적힌 date

    return (
      menu.cafeteria === cafeteriaName &&
      (menu.date === -1 || date === selectedDay)
    );
  });
  return Menu;
};

export const getMenuByStore = async (storeName) => {
  const menuData = await getMenuData();
  const Menu = menuData.filter((menu) => menu.store === storeName);
  return Menu;
};

export const getMenuBySearchTerm = async (searchTerm) => {
  const menuData = await getMenuData();

  const Menu = menuData.filter((menu) => {
    return (
      menu.menu.toLowerCase().includes(searchTerm.toLowerCase()) ||
      menu.hashtag.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return Menu;
};
