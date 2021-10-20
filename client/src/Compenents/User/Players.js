import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../features/player/action";
import Player from "./Player";
import Top from "../../icons/TOP.png";
import Mid from "../../icons/MIDDLE.png";
import Jng from "../../icons/JUNGLE.png";
import Adc from "../../icons/ADC.png";
import supp from "../../icons/SUPPORT.png";

const Players = (ping, setPing) => {
  const players = useSelector((state) => state.players.Players);
  const [role, setrole] = useState("");
  const [team, setteam] = useState("");
  const handleRole = (role) => {
    setrole(role);
  };
  const handleTeam = (team) => {
    setteam(team);
  };
  const handleClearRole = () => {
    setrole("");
  };
  const handleClearTeam = () => {
    setteam("");
  };

  return (
    <div className="players-screen">
      <section className="player-headers">
        <div className="players-roles">
          <button
            className={role === "MID" && "line"}
            onClick={() =>
              role === "" ? handleRole("MID") : handleClearRole()
            }
          >
            <img src={Mid} />
          </button>
          <button
            className={role === "TOP" && "line"}
            onClick={() =>
              role === "" ? handleRole("TOP") : handleClearRole()
            }
          >
            {" "}
            <img src={Top} />
          </button>
          <button
            className={role === "JUNGLE" && "line"}
            onClick={() =>
              role === "" ? handleRole("JUNGLE") : handleClearRole()
            }
          >
            {" "}
            <img src={Jng} />
          </button>
          <button
            className={role === "ADC" && "line"}
            onClick={() =>
              role === "" ? handleRole("ADC") : handleClearRole()
            }
          >
            {" "}
            <img src={Adc} />
          </button>
          <button
            className={role === "SUPPORT" && "line"}
            onClick={() =>
              role === "" ? handleRole("SUPPORT") : handleClearRole()
            }
          >
            {" "}
            <img src={supp} />
          </button>
        </div>
        <div className="players-teams">
          <button
            className={team === "TGS" && "line"}
            onClick={() =>
              team === "" ? handleTeam("TGS") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />
          </button>
          <button
            className={team === "T1" && "line"}
            onClick={() => (team === "" ? handleTeam("T1") : handleClearTeam())}
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />{" "}
          </button>
          <button
            className={team === "S7AB L HADDA" && "line"}
            onClick={() =>
              team === "" ? handleTeam("S7AB L HADDA") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />{" "}
          </button>
          <button
            className={team === "Pushi top" && "line"}
            onClick={() =>
              team === "" ? handleTeam("Pushi top") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />{" "}
          </button>
          <button
            className={team === "Pushi top" && "line"}
            onClick={() =>
              team === "" ? handleTeam("Pushi top") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />{" "}
          </button>{" "}
          <button
            className={team === "Pushi top" && "line"}
            onClick={() =>
              team === "" ? handleTeam("Pushi top") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/Gen.Glogo_profile.png"
              alt=""
            />{" "}
          </button>{" "}
          <button
            className={team === "Pushi top" && "line"}
            onClick={() =>
              team === "" ? handleTeam("Pushi top") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />{" "}
          </button>
          <button
            className={team === "Pushi top" && "line"}
            onClick={() =>
              team === "" ? handleTeam("Pushi top") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />{" "}
          </button>{" "}
          <button
            className={team === "Pushi top" && "line"}
            onClick={() =>
              team === "" ? handleTeam("Pushi top") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png"
              alt=""
            />{" "}
          </button>
          <button
            className={team === "Pushi top" && "line"}
            onClick={() =>
              team === "" ? handleTeam("Pushi top") : handleClearTeam()
            }
          >
            {" "}
            <img
              src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5c/KT_Rolsterlogo_profile.png"
              alt=""
            />{" "}
          </button>
        </div>
      </section>
      <div className="player-list">
        {" "}
        {role === "" && team === ""
          ? players.map((el) => <Player player={el} />)
          : role === role && team === ""
          ? players
              .filter((el) => el.role === role)
              .map((el) => <Player player={el} />)
          : role === "" && team === team
          ? players
              .filter((el) => el.team === team)
              .map((el) => <Player player={el} />)
          : players
              .filter((el) => el.role === role && el.team === team)
              .map((el) => <Player player={el} />)}
      </div>
    </div>
  );
};

export default Players;
