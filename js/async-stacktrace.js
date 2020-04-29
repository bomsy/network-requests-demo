/* See license.txt for terms of usage */

function onErrorStackTrace2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.trace("log message in async callback")
    }, 1000);
  });
}

function onErrorStackTrace1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      throw new Error("this is my error message");
    }, 1000);
  });
}

async function onNetworkStackTrace() {
  console.log("HTTP Request stack (sync)");
  console.trace();
  await waitForTime();
  console.log("HTTP Request stack (async)");
  console.trace();
}

function waitForTime(time = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}


function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("log"); // << breakpoint here
      console.trace();
      //throw Error("asdfasd");
      resolve();
    }, 2000);
  });
}

async function waitForData() {
  await resolveAfter2Seconds();

  console.log("waitForData");
}

async function waitForData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1 of 3");
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("2 of 3");
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log("3 of 3");
              console.trace();
              resolve();
            }, 2000);
          });
        }, 2000);
      });
    }, 2000);
  });
}


waitForData().then(() => {
  console.log("done");
});
