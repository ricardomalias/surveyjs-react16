import React from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { formJson } from "./form";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true,
};

export default function Editor() {
  const creator = new SurveyCreator(creatorOptions);
  creator.JSON = formJson;

  //Automatically save survey definition on changing. Hide "Save" button
  creator.isAutoSave = true;
  //Show state button here
  creator.showState = true;

  return <SurveyCreatorComponent creator={creator} />;
}
