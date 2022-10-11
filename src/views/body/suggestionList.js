import React from "react";

function SuggestionList(props) {
  return (
    <ul>
      {props.recommendationList?.map((data) => {
        return (
          <li
            key={data}
            className="cursor mt-2"
            onClick={() => props.accepted_suggestion(data)}
          >
            {data}
          </li>
        );
      })}
    </ul>
  );
}

export default SuggestionList;
