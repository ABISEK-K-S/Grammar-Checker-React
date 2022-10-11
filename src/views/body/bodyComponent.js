import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Highlighter from "react-highlight-words";
import SuggestionList from "./suggestionList";
import CheckText from "./checkText";

function BodySection(props) {
  const [formData, updateFormData] = useState("");
  const [wrong_words, updateWrongWords] = useState({});
  const [selectedWord, updateSelectedWord] = useState("");
  const [suggestedWords, updateSuggestedWords] = useState({});
  const [suggestionStatus, updateStatus] = useState(false);
  const [recommendationList, ModifyRecommendationList] = useState({});
  const [outputSuccess, ModifySuccess] = useState(false);

  useEffect(() => {
    props.storeData?.noError == true
      ? ModifySuccess(true)
      : ModifySuccess(false);
  }, [props.storeData?.noError]);

  useEffect(() => {
    let errors = props.storeData.errors;
    let text_suggestions = {};
    errors.length > 0 &&
      errors.forEach((data) => {
        text_suggestions[data.bad] = data.better;
      });
    updateSuggestedWords(text_suggestions);
    updateWrongWords(Object.keys(text_suggestions));
  }, [props.storeData?.errors]);

  const inputField = () => {
    return (
      <>
        <div className="mt-3 text-color font-weight-bold  header">
          GRAMMAR AND SPELLING CHECKER
        </div>
        <textarea
          rows="6"
          cols="150"
          placeholder="Please enter your text here"
          className=""
          onChange={(e) => {
            updateFormData(e.target.value);
            updateWrongWords({});
            outputSuccess && ModifySuccess(false);
          }}
          value={formData}
        ></textarea>
        {wrong_words.length > 0 && (
          <div className="mt-4 mb-2">
            <Highlighter
              highlightClassName="btn-danger"
              style={{ cursor: "pointer" }}
              searchWords={wrong_words}
              autoEscape={true}
              textToHighlight={formData}
              onClick={(e) => showSuggestions(e.target.innerHTML)}
            />
          </div>
        )}
        {outputSuccess && (
          <div className="mt-4 mb-2 text-success">Congrats! all good 😀</div>
        )}
      </>
    );
  };

  const buttons = () => {
    const disable = formData.length > 0 ? true : false;
    return (
      <div>
        <CopyToClipboard text={formData}>
          <button
            className={`btn btn-${disable ? "success" : "dark disabled"} m-2`}
            disabled={disable ? false : true}
          >
            COPY TEXT
          </button>
        </CopyToClipboard>
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            updateFormData("");
            updateStatus(false);
          }}
        >
          CLEAR
        </button>
      </div>
    );
  };
  const showSuggestions = (currentWord) => {
    ModifyRecommendationList({});
    let recommendation_list = suggestedWords[currentWord];
    updateSelectedWord(currentWord);
    ModifyRecommendationList(recommendation_list);
    updateStatus(true);
  };

  const accepted_suggestion = (key) => {
    updateStatus(false);
    updateFormData(formData.replace(selectedWord, key));
    props.checkGrammar(formData);
  };

  const verifyContent = () => {
    props.checkGrammar(formData);
  };
  return (
    <div className="container">
      {
        <>
          {inputField()}
          {suggestionStatus && (
            <SuggestionList
              recommendationList={recommendationList}
              accepted_suggestion={accepted_suggestion}
            />
          )}
        </>
      }
      {
        <>
          <CheckText verifyContent={verifyContent} />
          {buttons()}
        </>
      }
    </div>
  );
}

export default BodySection;
