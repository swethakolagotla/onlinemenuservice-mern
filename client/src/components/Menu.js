import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllmenus } from "../Redux/Api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";
import axios from "axios";
const Menu = () => {
  const Admin=useSelector(state=>state.userSlicer.userAdmin)
  console.log(Admin)
  const [isdeleted, setDeleted] = useState(false);
  const [isAdmin]=useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menus = useSelector((state) => state.menuSlicer.menus);
  console.log(menus);
  useEffect(() => {
    dispatch(getAllmenus());
  }, []);
  const handleDelte = (id) => {
    axios
      .delete(`http://localhost:4000/menus/${id}`)
      .then((res) => {
        //console.log(res.data);
        setDeleted(!isdeleted);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("successfully deleted");
  };
  const EditHandler = (id) => {
    navigate(`/editmenu/${id}`);
  };
  return (
    <>
      <div>
        {Admin && (
          <Link to={`/addmenu`} className="btn-2">
            Add Menu
          </Link>
        )}
      </div>
      <div className="row row-cols-4">
        {menus.map((ele, id) => (
          <div key={id} className="container">
            <div className="menu">
              <div className="menu-img">
                <img src={ele.img} alt="menu poster" />
              </div>
              <div className="text-menu-cont">
                <div className="mr-grid">
                  <div className="col1">
                    <h2>{ele.name}</h2>
                    <ul className="menu-gen">
                      <p>${ele.price},</p>
                      <p>{ele.dsc}</p>
                    </ul>
                  </div>
                </div>
                {Admin && (
                  <i
                    className="bi bi-pen-fill text-primary"
                    onClick={() => EditHandler(ele._id)}
                  ></i>
                )}
                {Admin && (
                  <i
                    className="bi bi-trash text-primary ms-3"
                    onClick={() => handleDelte(ele._id)}
                  ></i>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
