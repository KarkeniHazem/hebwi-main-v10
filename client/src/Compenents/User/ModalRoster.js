import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teamActions } from "../../features/team/actions";
import { userActions } from "../../features/user/actions";
import axios from "axios";

const ModalRoster = ({ setshow, show, role, ping, setPing }) => {
  const roster = useSelector((state) => state.players.Players);
  const list = roster.filter((el) => el.role === role);
  const user = useSelector((state) => state.Users.users);
  const team = useSelector((state) => state.teams.teams);
  const dispatch = useDispatch();
  const [date, setdate] = useState("");
  useEffect(() => {
    let x = axios
      .get("/date")
      .then((res) => setdate(res.data.response.response));
  }, []);
  const timeCheck = (d) => {
    var realTime = new Date();
    var date = new Date(d);
    if (date > realTime) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="modal-screen">
      <div className="modal-body">
        <div className="modal-headers">
          <h2>{role}</h2>
          <button
            className="btn-closee"
            onClick={() => {
              setshow(!show);
            }}
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div className="list-roster">
          {list.map((el) => (
            <table className>
              <tr>
                <td>
                  {" "}
                  <p>{el.name}</p>
                </td>
                <td>
                  <p>{el.price}</p>
                </td>
                <td>
                  <p>{el.team}</p>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(
                        teamActions.fillTeam({
                          id: team._id,
                          team: { ...team, [`${role}`]: el },
                        })
                      );
                      setPing(!ping);
                      setshow(!show);
                    }}
                  >
                    pick
                  </button>
                </td>
              </tr>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalRoster;
