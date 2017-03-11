// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
document.addEventListener('DOMContentLoaded', function() {





  console.count('Extension Loaded, Started!');
  // chrome.tabs.executeScript(null, {file: "content/jquery-3.1.1.min.js"});
  // chrome.tabs.executeScript(null, {file: "content/app.js"});
  chrome.tabs.executeScript({
    code: `
      document.body.style.backgroundColor="red";
      window.testVar = 3;
      console.log(testVar);
      `
  });









});