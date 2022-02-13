import "./App.css";
import { useState } from "react";
import { api } from "./api/api";
import { useDispatch, useSelector } from "react-redux";

function SearchMeal() {
  const [isLoading, setIsLoading] = useState(true);
  const search = useSelector((state) => state.detailsData.meal);
  const [term, setTerm] = useState(true);
  const searchCity = async (keyword) => {
    setTerm(keyword);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
    if (!keyword) {
      dispatch({
        type: "SEARCH_MEAL",
        payload: [],
      });
    }
    setIsLoading(true);
    const response = await api
      .post(url)
      .then((res) => {
        dispatch({
          type: "SEARCH_MEAL",
          payload: res.data,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
  const myFunction = () => {
    document.getElementById("myDropdown3").classList.toggle("show");
  };
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn3")) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  const myFunction2 = () => {
    window.location.reload();
  }
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Meal Finder</h1>
      <form className="search-form " onClick={()=> myFunction()}>
        <input
          type="text"
          placeholder="Search for meal or keywords"
          className="search-input"
          onChange={(event) => searchCity(event.target.value)}
        />
       <div className="img-icon-container">
       <img onClick={()=> myFunction2()} src = "https://cdn-icons-png.flaticon.com/512/56/56957.png " className="icon-image"/>
       </div>
      </form>

      {isLoading ? (
        <div id="myDropdown3" className="">
          <div class="loader2">
            <div class="lds-ring1">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* {search?.[0]?.strTags} */}
          </div>
        </div>
      ) : (
        <>
          <div className="searchname">Search Results for {`'${term}'`} : </div>

          <div className="items">
            {search && search.length > 0
              ? search.map((item) => {
                  return (
                    <div key={item.idMeal} className = "img-container">
                      <div className="img-border">
                        <img src={item.strMealThumb} className="meal-img" />
                      </div>
                      <p className="meal-name">{item.strMeal}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchMeal;
