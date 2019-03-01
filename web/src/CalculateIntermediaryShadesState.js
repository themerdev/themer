import React from "react";
import { UrlStateConsumer } from "./UrlState";

export default ({ children }) => {
  return (
    <UrlStateConsumer>
      {({ getValueOrFallback, mergeState }) =>
        children({
          getValue: () =>
            getValueOrFallback(
              [
                [
                  "calculateIntermediaryShades",
                  getValueOrFallback([["activeColorSet"]])
                ]
              ],
              v => v === "true"
            ),
          setValue: v =>
            mergeState({
              calculateIntermediaryShades: {
                [getValueOrFallback([["activeColorSet"]])]: v
              }
            })
        })
      }
    </UrlStateConsumer>
  );
};
