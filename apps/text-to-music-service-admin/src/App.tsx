import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { PromptList } from "./prompt/PromptList";
import { PromptCreate } from "./prompt/PromptCreate";
import { PromptEdit } from "./prompt/PromptEdit";
import { PromptShow } from "./prompt/PromptShow";
import { MusicTrackList } from "./musicTrack/MusicTrackList";
import { MusicTrackCreate } from "./musicTrack/MusicTrackCreate";
import { MusicTrackEdit } from "./musicTrack/MusicTrackEdit";
import { MusicTrackShow } from "./musicTrack/MusicTrackShow";
import { TrainingDataList } from "./trainingData/TrainingDataList";
import { TrainingDataCreate } from "./trainingData/TrainingDataCreate";
import { TrainingDataEdit } from "./trainingData/TrainingDataEdit";
import { TrainingDataShow } from "./trainingData/TrainingDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"TextToMusicService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
        <Resource
          name="Prompt"
          list={PromptList}
          edit={PromptEdit}
          create={PromptCreate}
          show={PromptShow}
        />
        <Resource
          name="MusicTrack"
          list={MusicTrackList}
          edit={MusicTrackEdit}
          create={MusicTrackCreate}
          show={MusicTrackShow}
        />
        <Resource
          name="TrainingData"
          list={TrainingDataList}
          edit={TrainingDataEdit}
          create={TrainingDataCreate}
          show={TrainingDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
