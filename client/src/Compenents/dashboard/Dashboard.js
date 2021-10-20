import React, { useState } from "react";
import "./dashboard.css";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import Swal from "sweetalert2/src/sweetalert2.js";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../features/player/action";
import { userActions } from "../../features/user/actions";

const Dashboard = ({ ping, setPing }) => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.players);

  const handleconfirm = () => {
    dispatch(playerActions.saveall(players));
    setPing(!ping);
    dispatch(userActions.getDate());

    Swal.fire("Your players has been fetched sucessfully!!", "", "success");
  };
  const [date, setdate] = useState({
    date: "",
  });
  const handledate = () => {
    dispatch(userActions.postDate(date));
  };
  return (
    <div className="admin">
      <Tabs
        activeTab="1"
        className="mt-5  taby"
        ulClassName=""
        activityClassName="bg-success"
        onClick={(event, tab) => console.log(event, tab)}
      >
        <Tab title="Dashboard" className="mr-8 tab-title">
          <div className="mt-3">
            Tab 1 content
            <div>
              <h3>Save players</h3>
              <button onClick={handleconfirm}> GET PLAYERS</button>{" "}
              <label htmlFor="text">Transfer time limite </label>
              <input
                type="text"
                placeholder="mm/dd/yy"
                onChange={(e) => setdate({ date: e.target.value })}
              />
              <button onClick={handledate}>confirm</button>
            </div>
          </div>
        </Tab>

        <Tab title="Users" className="mr-3 tab-title">
          <div className="mt-3">Tab 2 content</div>
        </Tab>

        <Tab title="Players" className="mr-3 tab-title">
          <div className="mt-3">Tab 3 content</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
