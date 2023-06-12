import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import CafeteriaList from "../component/CafeteriaList";
import AchelinList from "../component/AchelinList";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
// import axios from "axios";
import { showMenuByCafeteria, showMenuByStore } from "./menu";
import {
  formatDate,
  getDayOfWeek,
  moveToPreviousDate,
  moveToNextDate,
} from "../component/date";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { getMenuBySearchTerm } from "./cafeteria_menu";

function Main() {
  const [expanded, setExpanded] = useState({});
  const [menuExpanded, setMenuExpanded] = useState({});
  const [achelinExpanded, setAchelinExpanded] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await getMenuBySearchTerm(searchTerm);
    setSearchResults(results);
  };

  const handlePreviousDate = () => {
    const previousDate = moveToPreviousDate(selectedDate);
    setSelectedDate(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = moveToNextDate(selectedDate);
    setSelectedDate(nextDate);
  };

  const formattedDate = formatDate(selectedDate);
  const dayOfWeek = getDayOfWeek(selectedDate);

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleMenuExpand = (index) => {
    setMenuExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleAchelinExpand = (storeName) => {
    setAchelinExpanded((prevState) => ({
      ...prevState,
      [storeName]: !prevState[storeName],
    }));
  };

  return (
    <Container fluid className="main">
      <div className="head mgbt">오늘의 학식</div>
      <p>
        <ArrowLeftOutlinedIcon
          onClick={handlePreviousDate}
          style={{ cursor: "pointer", fontSize: "1rem" }}
        />
        {formattedDate}({dayOfWeek})
        <ArrowRightOutlinedIcon
          onClick={handleNextDate}
          style={{ cursor: "pointer", fontSize: "1rem" }}
        />
      </p>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">search</button>
      </form>

      {CafeteriaList.results.map((cafeteria, index) => (
        <div key={index}>
          <h5 className="List">
            {cafeteria.name} &nbsp;
            <InfoOutlinedIcon
              onClick={() => toggleExpand(index)}
              style={{ cursor: "pointer", fontSize: "1rem" }}
            />{" "}
            &nbsp;
            <ArrowDropDownCircleOutlinedIcon
              onClick={() => toggleMenuExpand(index)}
              style={{ cursor: "pointer", fontSize: "1rem" }}
            />
          </h5>
          {expanded[index] && (
            <div className="ListInfo pdtp">
              <p>
                <span className="b">위치 :</span> {cafeteria.loc}
              </p>
              <p>
                <span className="b">전화번호 :</span> {cafeteria.num}
              </p>
              <p>
                <span className="b">운영시간 :</span> {cafeteria.time}
              </p>
              {cafeteria.breaktime && (
                <p>
                  <span className="b">break-time :</span> {cafeteria.breaktime}
                </p>
              )}
              {cafeteria.cf && <p>* {cafeteria.cf}</p>}
            </div>
          )}
          {menuExpanded[index] && (
            <div>
              {cafeteria.name === "아슐랭"
                ? AchelinList.map((item, index) => (
                    <div key={index}>
                      <p>
                        <h5 className="List">
                          {item.store} &nbsp;
                          <ArrowDropDownCircleOutlinedIcon
                            onClick={() => toggleAchelinExpand(item.store)}
                            style={{ cursor: "pointer", fontSize: "1rem" }}
                          />
                        </h5>
                      </p>
                      {achelinExpanded[item.store] && (
                        <div>{showMenuByStore(item.store)}</div>
                      )}
                    </div>
                  ))
                : // showMenuByCafeteria(cafeteria.name)
                searchTerm.length === 0 || searchResults.length === 0
                ? showMenuByCafeteria(cafeteria.name)
                : searchResults
                    .filter((menu) => menu.cafeteria === cafeteria.name)
                    .map((menu, index) => (
                      <div key={index}>
                        {menu.time && <p>{menu.time}</p>}
                        <p>
                          {menu.menu} {menu.price}원
                        </p>
                      </div>
                    ))}
            </div>
          )}
        </div>
      ))}
    </Container>
  );
}

export default Main;
