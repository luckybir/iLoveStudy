auto();

launchApp("学习强国");
// sleep(7000);

autoStudy();

function autoStudy() {
  // start articles for 6 times for each 2 minutes
  articleStudy();
}

function articleStudy() {
  // console.info("start article");

  // // click 学习
  // if ((study = desc("学习").findOne().click())) {
  //   console.warn("click study");
  // }

  // sleep(5000);

  // // click 推荐;
  // click("推荐");

  // sleep(2000);

  today = getFormatdate();

  let articles = text(today).find();
  let listView = className("ListView").depth(20).findOnce();

  for (let clickTimes = 0; clickTimes < 6; ) {
    // collect screen clickable selection
    let size = text(today).find().size();
    console.info("size" + size);

    if (size > 0) {
      for (let i = 0; i < size; i++) {
        click(today, i);
        delay(2);
        back();
        delay(2);
        clickTimes++;

        console.info("readding article" + clickTimes);
      }


    }

    let scrollSuccess = listView.scrollForward();
    // page down until bottom
    if (!scrollSuccess) {
      console.warn("down to bottom");
      break;
    }
  }
}

function delay(seconds) {
  var randSeconds = seconds * 1000 + random(0, 500);
  sleep(randSeconds);
}

function getFormatdate() {
  // get current date in format "yyyy-mm-dd"
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1; // first month is 0
  var d = date.getDate();
  var s = y + "-";

  if (m < 10) {
    s = s + "0" + m + "-";
  } else {
    s = s + m + "-";
  }

  if (d < 10) {
    s = s + "0" + d;
  } else {
    s = s + d;
  }

  return s;
}
