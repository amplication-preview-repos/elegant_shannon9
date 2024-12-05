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
import { GenerationHistoryList } from "./generationHistory/GenerationHistoryList";
import { GenerationHistoryCreate } from "./generationHistory/GenerationHistoryCreate";
import { GenerationHistoryEdit } from "./generationHistory/GenerationHistoryEdit";
import { GenerationHistoryShow } from "./generationHistory/GenerationHistoryShow";
import { ModelTrainingSessionList } from "./modelTrainingSession/ModelTrainingSessionList";
import { ModelTrainingSessionCreate } from "./modelTrainingSession/ModelTrainingSessionCreate";
import { ModelTrainingSessionEdit } from "./modelTrainingSession/ModelTrainingSessionEdit";
import { ModelTrainingSessionShow } from "./modelTrainingSession/ModelTrainingSessionShow";
import { AudioTrackList } from "./audioTrack/AudioTrackList";
import { AudioTrackCreate } from "./audioTrack/AudioTrackCreate";
import { AudioTrackEdit } from "./audioTrack/AudioTrackEdit";
import { AudioTrackShow } from "./audioTrack/AudioTrackShow";
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
        <Resource
          name="GenerationHistory"
          list={GenerationHistoryList}
          edit={GenerationHistoryEdit}
          create={GenerationHistoryCreate}
          show={GenerationHistoryShow}
        />
        <Resource
          name="ModelTrainingSession"
          list={ModelTrainingSessionList}
          edit={ModelTrainingSessionEdit}
          create={ModelTrainingSessionCreate}
          show={ModelTrainingSessionShow}
        />
        <Resource
          name="AudioTrack"
          list={AudioTrackList}
          edit={AudioTrackEdit}
          create={AudioTrackCreate}
          show={AudioTrackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
