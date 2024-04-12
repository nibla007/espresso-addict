Feature: ZignSec UI

    Background: ZignSec Login
        Given that I am logged in
        And I have entered the Online ID Scan product

    Scenario: Press the New Session button and Cancel
        Given that I click the ".col-2 > .v-btn > .v-btn__content" button
        When I click the '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .tw-flex > .v-btn--text > .v-btn__content' button
        Then I should see the "Online ID Scan" text

    Scenario: Fill in all the details
        Given that I click the ".col-2 > .v-btn > .v-btn__content" button
        When I have clicked the "#input-5972" button and typed "https://www.google.se/"
        When I have clicked the "#input-5975" button and typed "https://sv.wikipedia.org/wiki/Portal:Huvudsida'"
        When I have clicked the "#input-5988" button
        When I have selected analysis type "Document"
        When I have selected analysis type "Liveness"
        When I have selected analysis type "FaceMatch"
        When I click the '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .tw-flex > .v-btn--is-elevated > .v-btn__content' button
        When I have clicked the "#input-5999" button and typed "Something"
        When I have clicked the "#input-6002" button and typed "Something"
        When I have clicked the ".v-expansion-panel-header" button
        When I have clicked the "#input-6037" button and typed "Something"
        When I have clicked the "#input-6040" button and typed "Something"
        When I click the '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .tw-flex > .primary' button
        Then I should see the "Success URL:https://www.google.se/" text
        Then I should see the "Label:Something" text
        Then I should see the "Error URL:https://sv.wikipedia.org/wiki/Portal:Huvudsida'" text
        Then I should see the "Theme:Default" text
        Then I should see the "Language:English" text
        Then I should see the "Analysis types:Document, Liveness, FaceMatch" text
        Then I should see the "Credential:52883d24-bd1a-4b2c-a60e-51108c3ae075" text
        Then I should see the "Comment:Something" text
        
