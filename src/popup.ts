import * as moment from 'moment';
import * as $ from 'jquery';
import {increment} from './increment';

let count = 0;

$(async function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  const tabs = await browser.tabs.query(queryInfo)
  $('#url').text(tabs[0].url);
  $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));

  await browser.browserAction.setBadgeText({text: count.toString()});
  $('#countUp').click(()=>{
    count = increment(count)
    browser.browserAction.setBadgeText({text: count.toString()});
  });

  $('#changeBackground').click(async()=>{
    await browser.tabs.query({active: true, currentWindow: true},async function(tabs) {
      await browser.tabs.sendMessage(tabs[0].id, {
        color: '#555555'
      },
      function(msg) {
        console.log("result message:", msg);
      });
    });
  });
});
