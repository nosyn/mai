// @ts-ignore

"use client";

import Script from "next/script";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";

export default function GoogleDrivePicker() {
  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = "https://www.googleapis.com/auth/drive";

  // TODO(developer): Set to client ID and API key from the Developer Console
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;

  // TODO(developer): Replace with your own project number from console.developers.google.com.
  const APP_ID = "662417606098";

  let tokenClient: {
    callback: (response: any) => Promise<void>;
    requestAccessToken: (arg0: { prompt: string }) => void;
  };
  let accessToken: null = null;
  let pickerInited = false;
  let gisInited = false;

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function initializePicker() {
    await gapi.client.load(
      "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
    );
    pickerInited = true;
    maybeEnableButtons();
  }

  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded() {
    window.gapi.load("client:picker", initializePicker);
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: "", // defined later
    });
    gisInited = true;
    maybeEnableButtons();
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  function maybeEnableButtons() {
    if (pickerInited && gisInited) {
      const authorizeButton = document.querySelector(
        "#authorize_button",
      ) as HTMLButtonElement;
      if (authorizeButton) {
        authorizeButton.style.visibility = "visible";
      }
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick() {
    tokenClient.callback = async (response) => {
      if (response.error !== undefined) {
        throw response;
      }
      accessToken = response.access_token;
      const authorizeButton = document.querySelector(
        "#authorize_button",
      ) as HTMLButtonElement;
      if (authorizeButton) {
        authorizeButton.innerText = "Refresh";
      }

      const signOutButton = document.querySelector(
        "#signout_button",
      ) as HTMLButtonElement;
      if (signOutButton) {
        signOutButton.style.visibility = "visible";
      }

      await createPicker();
    };

    if (accessToken === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: "" });
    }
  }

  /**
   *  Create and render a Picker object for searching images.
   */
  function createPicker() {
    const view = new google.picker.View(google.picker.ViewId.DOCS);
    view.setMimeTypes("image/png,image/jpeg,image/jpg");
    const picker = new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.NAV_HIDDEN)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .setDeveloperKey(API_KEY)
      .setAppId(APP_ID)
      .setOAuthToken(accessToken)
      .addView(view)
      .addView(new google.picker.DocsUploadView())
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  }

  /**
   * Displays the file details of the user's selection.
   * @param {object} data - Containers the user selection from the picker
   */
  async function pickerCallback(data) {
    if (data.action === google.picker.Action.PICKED) {
      let text = `Picker response: \n${JSON.stringify(data, null, 2)}\n`;
      const document = data[google.picker.Response.DOCUMENTS][0];
      const fileId = document[google.picker.Document.ID];
      console.log(fileId);
      const res = await gapi.client.drive.files.get({
        fileId: fileId,
        fields: "*",
      });
      text += `Drive API response for first document: \n${JSON.stringify(
        res.result,
        null,
        2,
      )}\n`;
      window.document.getElementById("content").innerText = text;
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick() {
    if (accessToken) {
      accessToken = null;
      window.google.accounts.oauth2.revoke(accessToken);
      document.getElementById("content").innerText = "";
      document.getElementById("authorize_button").innerText = "Authorize";
      document.getElementById("signout_button").style.visibility = "hidden";
    }
  }

  return (
    <Fragment>
      <Script
        async
        defer
        src="https://apis.google.com/js/api.js"
        onLoad={() => gapiLoaded()}
      ></Script>
      <Script
        async
        defer
        src="https://accounts.google.com/gsi/client"
        onLoad={() => gisLoaded()}
      ></Script>

      <Button onClick={() => handleAuthClick()}>Authorize</Button>
      <Button onClick={() => handleSignoutClick()}>Sign Out</Button>
    </Fragment>
  );
}
