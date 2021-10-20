import { createSlice } from "@reduxjs/toolkit";
import { playerActions } from "./action";

const initialState = {
  Players: [],

  players: [
    {
      name: "Faker",
      realname: "Lee Sang-hyeok",
      role: "MID",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 8,
      pickRate: "23%",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8c/T1_Faker_2021_Split_2.png",
      assists: 10,
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      deaths: 5,
      kills: 4,
      firstTowerKill: true,
      baronKills: 1,
      firstBloodKill: true,
      win: true,
    },
    {
      name: "ShowMaker",
      realname: "Heo S",
      role: "MID",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 10,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3b/DK_ShowMaker_2021_Split_2.png",
      assists: 5,
      deaths: 0,
      kills: 10,
      firstTowerKill: false,
      baronKills: 2,
      firstBloodKill: true,
      win: true,
    },
    {
      name: "Chovy",
      realname: "	Jeong Ji-hoon",
      role: "MID",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 9,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/02/HLE_Chovy_2021_Split_2.png",
      assists: 1,
      deaths: 1,
      kills: 3,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Bdd",
      realname: "	Gwak Bo-seong",
      role: "MID",
      team: "GEN.G",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/Gen.Glogo_profile.png",
      price: 8,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1c/GEN_Bdd_2021_Split_2.png",
      assists: 6,
      deaths: 3,
      kills: 10,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Gori",
      realname: "Kim Tae-woo",
      role: "MID",
      team: "NS",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b8/Nongshim_RedForcelogo_square.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1c/NS_Gori_2021_Split_2.png",
      assists: 6,
      deaths: 1,
      kills: 5,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "FATE",
      realname: "	Yoo Su-hyeok",
      role: "MID",
      team: "LSB",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/17/Liiv_SANDBOXlogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/0f/LSB_FATE_2021_Split_2.png",
      assists: 3,
      deaths: 1,
      kills: 3,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Fly",
      realname: "Song Yong-jun",
      role: "MID",
      team: "AF",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c7/AF_Fly_2021_Split_2.png",
      assists: 1,
      deaths: 2,
      kills: 10,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: true,
      win: false,
    },
    {
      name: "Dove",
      realname: "	Kim Jae-yeon",
      role: "MID",
      team: "KT",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5c/KT_Rolsterlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/29/KT_Dove_2021_Split_2.png",
      assists: 7,
      deaths: 2,
      kills: 5,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: true,
      win: false,
    },
    {
      name: "Lava",
      realname: "	Kim Tae-hoon",
      role: "MID",
      team: "BRO",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/Fredit_BRIONlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1d/BRO_Lava_2021_Split_2.png",
      assists: 0,
      deaths: 2,
      kills: 10,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
    {
      name: " SOLKA",
      realname: "	Song Su-hyeong",
      role: "MID",
      team: "DRX",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/81/DRXlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9f/DRX_SOLKA_2021_Split_2.png",
      assists: 1,
      deaths: 5,
      kills: 6,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Canna",
      realname: "	Kim Chang-dong",
      role: "TOP",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 7,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d4/T1_Canna_2021_Split_2.png",
      assists: 10,
      deaths: 5,
      kills: 1,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Khan",
      realname: "	Kim Dong-ha ",
      role: "TOP",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 7,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/55/DK_Khan_2021_Split_2.png",
      assists: 5,
      deaths: 3,
      kills: 10,
      firstTowerKill: true,
      baronKills: 2,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Morgan",
      realname: "	Kim Dong-ha ",
      role: "TOP",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6b/HLE_Morgan_2021_Split_2.png",
      assists: 3,
      deaths: 7,
      kills: 1,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Hoya",
      realname: "Yoon Yong-ho",
      role: "TOP",
      team: "BRO",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/Fredit_BRIONlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/18/BRO_Hoya_2021_Split_2.png",
      assists: 3,
      deaths: 3,
      kills: 6,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Summit",
      realname: "Park Woo-tae",
      role: "TOP",
      team: "LSB",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/17/Liiv_SANDBOXlogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d2/LSB_Summit_2021_Split_2.png",
      assists: 2,
      deaths: 5,
      kills: 6,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Rich",
      realname: "Lee Jae-won",
      role: "TOP",
      team: "NS",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b8/Nongshim_RedForcelogo_square.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7d/NS_Rich_2021_Split_2.png",
      assists: 6,
      deaths: 1,
      kills: 6,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Kiin",
      realname: "	Kim Gi-in ",
      role: "TOP",
      team: "AF",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/03/AF_Kiin_2021_Split_2.png",
      assists: 4,
      deaths: 3,
      kills: 13,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: true,
      win: true,
    },
    {
      name: "Doran",
      realname: "Choi Hyeon-joon",
      role: "TOP",
      team: "KT",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5c/KT_Rolsterlogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/13/KT_Doran_2021_Split_2.png",
      assists: 4,
      deaths: 5,
      kills: 8,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: true,
      win: true,
    },
    {
      name: "Kingen",
      realname: "	Hwang Seong-hoon",
      role: "TOP",
      team: "DRX",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/81/DRXlogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c7/DRX_Kingen_2021_Split_2.png",
      assists: 0,
      deaths: 5,
      kills: 8,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: true,
      win: false,
    },
    {
      name: "Rascal",
      realname: "Kim Kwang-hee ",
      role: "TOP",
      team: "GEN.G",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/Gen.Glogo_profile.png",
      price: 7,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9a/GEN_Rascal_2021_Split_2.png",
      assists: 4,
      deaths: 0,
      kills: 8,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: true,
      win: true,
    },
    {
      name: "Rascal",
      realname: "Kim Kwang-hee ",
      role: "TOP",
      team: "GEN.G",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/Gen.Glogo_profile.png",
      price: 7,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9a/GEN_Rascal_2021_Split_2.png",
      assists: 4,
      deaths: 0,
      kills: 8,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: true,
      win: true,
    },

    {
      name: "Oner",
      realname: "	Moon Hyeon-joon ",
      role: "JUNGLE",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b8/T1_Oner_2021_Split_2.png",
      assists: 8,
      deaths: 3,
      kills: 5,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Canyon",
      realname: "		Kim Geon-bu ",
      role: "JUNGLE",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 9,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/DK_Canyon_2021_Split_2.png",
      assists: 12,
      deaths: 3,
      kills: 2,
      firstTowerKill: false,
      baronKills: 2,
      firstBloodKill: false,
      win: true,
    },

    {
      name: "Arthur",
      realname: "	Park Mi-reu",
      role: "JUNGLE",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c8/HLE_Arthur_2021_Split_2.png",
      assists: 1,
      deaths: 3,
      kills: 2,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Peanut",
      realname: "Han Wang-ho ",
      role: "JUNGLE",
      team: "NS",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b8/Nongshim_RedForcelogo_square.png",
      price: 8,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/03/NS_Peanut_2021_Split_2.png",
      assists: 8,
      deaths: 5,
      kills: 10,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Croco",
      realname: "Kim Dong-beom",
      role: "JUNGLE",
      team: "LSB",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/17/Liiv_SANDBOXlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1a/LSB_Croco_2021_Split_2.png",
      assists: 5,
      deaths: 3,
      kills: 2,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Dread",
      realname: "Lee Jin-hyeok ",
      role: "JUNGLE",
      team: "AF",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/de/AF_Dread_2021_Split_2.png",
      assists: 6,
      deaths: 3,
      kills: 2,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "UmTi",
      realname: "Eom Seong-hyeon ",
      role: "JUNGLE",
      team: "BRO",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/Fredit_BRIONlogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b3/BRO_Umti_2021_Split_2.png",
      assists: 2,
      deaths: 6,
      kills: 2,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Clid",
      realname: "Kim Tae-min ",
      role: "JUNGLE",
      team: "GEN.G",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/Gen.Glogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/bd/GEN_Clid_2021_Split_2.png",
      assists: 8,
      deaths: 3,
      kills: 6,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Pyosik",
      realname: "	Hong Chang-hyeon",
      role: "JUNGLE",
      team: "DRX",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/81/DRXlogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e1/DRX_Pyosik_2021_Split_2.png",
      assists: 4,
      deaths: 4,
      kills: 6,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Blank",
      realname: "Kang Sun-gu",
      role: "JUNGLE",
      team: "KT",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5c/KT_Rolsterlogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/61/KT_Blank_2021_Split_2.png",
      assists: 4,
      deaths: 4,
      kills: 10,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },

    {
      name: "Gumayusi",
      realname: "Lee Min-hyeong ",
      role: "ADC",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/45/T1_Gumayusi_2021_Split_2.png",
      assists: 3,
      deaths: 2,
      kills: 9,
      firstTowerKill: true,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Ghost",
      realname: "	Jang Yong-jun ",
      role: "ADC",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e0/DK_Ghost_2021_Split_2.png",
      assists: 6,
      deaths: 1,
      kills: 0,
      firstTowerKill: false,
      baronKills: 2,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Deft",
      realname: "Kim Hyuk-kyu",
      role: "ADC",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/70/HLE_Deft_2021_Split_2.png",
      assists: 5,
      deaths: 1,
      kills: 3,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Hena",
      realname: "Park Jeung-hwan",
      role: "ADC",
      team: "BRO",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/Fredit_BRIONlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/96/BRO_Hena_2021_Split_2.png",
      assists: 5,
      deaths: 2,
      kills: 2,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Prince",
      realname: "Lee Chae-hwan ",
      role: "ADC",
      team: "LSB",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/17/Liiv_SANDBOXlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/af/LSB_Prince_2021_Split_2.png",
      assists: 5,
      deaths: 2,
      kills: 7,
      firstTowerKill: true,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "deokdam",
      realname: "Seo Dae-gil ",
      role: "ADC",
      team: "NS",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b8/Nongshim_RedForcelogo_square.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/85/NS_deokdam_2021_Split_2.png",
      assists: 5,
      deaths: 2,
      kills: 12,
      firstTowerKill: true,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Ruler",
      realname: "	Park Jae-hyuk",
      role: "ADC",
      team: "GEN.G",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/Gen.Glogo_profile.png",
      price: 9,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2c/GEN_Ruler_2021_Split_2.png",
      assists: 5,
      deaths: 2,
      kills: 12,
      firstTowerKill: true,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Leo",
      realname: "	Han Gyeo-re",
      role: "ADC",
      team: "AF",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/00/AF_Leo_2021_Split_2.png",
      assists: 6,
      deaths: 3,
      kills: 7,
      firstTowerKill: true,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Noah",
      realname: "Oh Hyeon-taek",
      role: "ADC",
      team: "KT",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5c/KT_Rolsterlogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9c/KT_Noah_2021_Split_2.png",
      assists: 10,
      deaths: 3,
      kills: 5,
      firstTowerKill: true,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Taeyoon",
      realname: "	Kim Tae-yoon",
      role: "ADC",
      team: "DRX",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/81/DRXlogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a1/DRX.C_Taeyoon_2021_Split_2.png",
      assists: 3,
      deaths: 3,
      kills: 10,
      firstTowerKill: true,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Keria",
      realname: "	Ryu Min-seok",
      role: "SUPPORT",
      team: "T1",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/78/T1logo_profile.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/82/T1_Keria_2021_Split_2.png",
      assists: 13,
      deaths: 4,
      kills: 1,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "BeryL",
      realname: "Cho Geon-hee ",
      role: "SUPPORT",
      team: "DK",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/DWG_KIAlogo_square.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a6/DK_BeryL_2021_Split_2.png",
      assists: 12,
      deaths: 2,
      kills: 0,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Vsta",
      realname: "	Oh Hyo-seong ",
      role: "SUPPORT",
      team: "HLE",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e9/Hanwha_Life_Esportslogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/12/HLE_Vsta_2021_Split_2.png",
      assists: 4,
      deaths: 6,
      kills: 0,
      firstTowerKill: false,
      baronKills: 0,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Delight",
      realname: "Yoo Hwan-joong",
      role: "SUPPORT",
      team: "BRO",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/32/Fredit_BRIONlogo_profile.png",
      price: 3,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8e/BRO_Delight_2021_Split_2.png",
      assists: 10,
      deaths: 4,
      kills: 0,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Effort",
      realname: "Lee Sang-ho ",
      role: "SUPPORT",
      team: "LSB",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/17/Liiv_SANDBOXlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/46/LSB_Effort_2021_Split_2.png",
      assists: 12,
      deaths: 4,
      kills: 1,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Kellin",
      realname: "	Kim Hyeong-gyu ",
      role: "SUPPORT",
      team: "NS",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b8/Nongshim_RedForcelogo_square.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/12/NS_Kellin_2021_Split_2.png",
      assists: 10,
      deaths: 2,
      kills: 3,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Life",
      realname: "	Kim Jeong-min",
      role: "SUPPORT",
      team: "GEN.G",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5b/Gen.Glogo_profile.png",
      price: 6,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9d/GEN_Life_2021_Split_2.png",
      assists: 10,
      deaths: 0,
      kills: 0,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Lehends",
      realname: "Son Si-woo",
      role: "SUPPORT",
      team: "AF",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/Afreeca_Freecslogo_profile.png",
      price: 5,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/7c/AF_Lehends_2021_Split_2.png",
      assists: 9,
      deaths: 0,
      kills: 1,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: true,
    },
    {
      name: "Harp",
      realname: "	Lee Ji-yoong",
      role: "SUPPORT",
      team: "KT",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5c/KT_Rolsterlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fb/KT_Harp_2021_Split_2.png",
      assists: 13,
      deaths: 3,
      kills: 1,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
    {
      name: "Jun",
      realname: "Yoon Se-joon",
      role: "SUPPORT",
      team: "DRX",
      teamUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/81/DRXlogo_profile.png",
      price: 4,
      pickRate: "23%",
      countryUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png",
      imgUrl:
        "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/23/DRX.C_Jun_2021_Split_2.png",
      assists: 10,
      deaths: 3,
      kills: 1,
      firstTowerKill: false,
      baronKills: 1,
      firstBloodKill: false,
      win: false,
    },
  ],

  status: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: {
    [playerActions.updatePlayers.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.updatePlayers.fulfilled]: (state) => {
      state.status = "success";
    },
    [playerActions.updatePlayers.rejected]: (state) => {
      state.status = "failed";
    },
    [playerActions.saveall.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.saveall.fulfilled]: (state) => {
      state.status = "success";
    },
    [playerActions.saveall.rejected]: (state) => {
      state.status = "failed";
    },
    [playerActions.putOne.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.putOne.fulfilled]: (state) => {
      state.status = "success";
    },
    [playerActions.putOne.rejected]: (state) => {
      state.status = "failed";
    },
    [playerActions.post.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.post.fulfilled]: (state) => {
      state.status = "success";
    },
    [playerActions.post.rejected]: (state) => {
      state.status = "failed";
    },
    [playerActions.getAll.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.getAll.fulfilled]: (state, action) => {
      state.status = "success";
      state.Players = action.payload.data.response;
      console.log(action);
    },
    [playerActions.getAll.rejected]: (state) => {
      state.status = "failed";
    },
    [playerActions.getOne.pending]: (state) => {
      state.status = "loading";
    },
    [playerActions.getOne.fulfilled]: (state, action) => {
      state.status = "success";
      state.Players = action.payload.data.response;
    },
    [playerActions.getOne.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const {} = playerSlice.actions;
export default playerSlice.reducer;
