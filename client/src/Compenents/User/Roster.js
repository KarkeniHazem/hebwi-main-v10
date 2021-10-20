import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Top from "../../icons/TOP.png";
import Mid from "../../icons/MIDDLE.png";
import Jng from "../../icons/JUNGLE.png";
import Adc from "../../icons/ADC.png";
import supp from "../../icons/SUPPORT.png";
import ModalRoster from "./ModalRoster";
import PickedPlayer from "../PickedPlayer";
import Swal from "sweetalert2/src/sweetalert2.js";

import { userActions } from "../../features/user/actions";
import { teamActions } from "../../features/team/actions";

const Roster = ({ ping, setPing }) => {
  const dispatch = useDispatch();

  const [role, setrole] = useState("");
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(true);

  const [totalPoint, settotalPoint] = useState(0);
  const user = useSelector((state) => state.Users.users);
  const team = useSelector((state) => state.teams.teams);
  console.log(user);
  const [budget, setbudget] = useState(0);
  const [teamc, setteamc] = useState({ name: "" });
  const handleconfirmc = () => {
    dispatch(teamActions.createTeam(teamc));
    setPing(!ping);
  };

  const bugets = (bud) => {
    setbudget(bud);
  };
  const total = (tot) => {
    settotalPoint(tot);
  };

  let chechp = [];
  let chechps = [
    ...chechp,
    team.TOP?.team,
    team.MID?.team,
    team.JUNGLE?.team,
    team.ADC?.team,
    team.SUPPORT?.team,
  ];
  const counts = {};
  chechps.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  let vals = Object.values(counts);
  console.log(vals);
  const check = vals.some((el) => el > 2);
  console.log(check);

  const handleconfirm = () => {
    if (!check && budget >= 0) {
      dispatch(userActions.putteam({ team: team, id: user._id }));
      Swal.fire("Your team has been created sucessfully!!", "", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Somthing wrong!",
        text: "",
      });
    }
  };
  return (
    <div className="rooster">
      {!team ? (
        <div className="team-modal">
          <button
            className="btn-closee"
            onClick={() => {
              setshow2(!show2);
            }}
          >
            <i class="fas fa-times"></i>
          </button>
          <h1> jawak behi profilak</h1>
          <h3> create your team</h3>
          <label htmlFor=""> team name</label>
          <input
            type="text"
            placeholder="team name"
            onChange={(e) => setteamc({ name: e.target.value })}
          />
          <button onClick={handleconfirmc}>confirm</button>
        </div>
      ) : null}
      {show ? (
        <ModalRoster
          ping={ping}
          setPing={setPing}
          show={show}
          setshow={setshow}
          role={role}
        />
      ) : null}

      <PickedPlayer setshow={setshow} total={total} budget={bugets} />
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <h1 className="ritob">
          {team?.name}
          <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/fr_FR/babea8472b0fcbd38f588c712444393c8b1a9807/assets/fr_FR/assets/divider.png" />
        </h1>

        <div>
          <h4>Total points:</h4>
          {totalPoint}
          <h4>Budget:</h4>
          {budget} M
        </div>
        <div className="league-map">
          <button
            className="btn-top"
            onClick={() => {
              setshow(!show);
              setrole("TOP");
            }}
          >
            <img src={Top} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-mid"
            onClick={() => {
              setshow(!show);
              setrole("MID");
            }}
          >
            <img src={Mid} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-jng"
            onClick={() => {
              setshow(!show);
              setrole("JUNGLE");
            }}
          >
            <img src={Jng} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-adc"
            onClick={() => {
              setshow(!show);
              setrole("ADC");
            }}
          >
            <img src={Adc} style={{ width: "30px" }} />
          </button>
          <button
            className="btn-supp"
            onClick={() => {
              setshow(!show);
              setrole("SUPPORT");
            }}
          >
            <img src={supp} style={{ width: "30px" }} />
          </button>
          <button className="conf-btn" onClick={handleconfirm}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roster;
