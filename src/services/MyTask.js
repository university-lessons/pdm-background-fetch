import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const MY_TASK = "MY_TASK";

TaskManager.defineTask(MY_TASK, async () => {
  const now = Date.now();

  console.log(
    `Got background fetch call at date: ${new Date(now).toISOString()}`
  );

  console.log("Downloading file....");

  // Be sure to return the successful result type!
  return BackgroundFetch.BackgroundFetchResult.NewData;
});

export const register = () => {
  console.log("register: ", MY_TASK);

  return BackgroundFetch.registerTaskAsync(MY_TASK, {
    minimumInterval: 2, // 5 seconds
    stopOnTerminate: false, // android only,
    startOnBoot: true, // android only
  });
};

export const unregister = () => {
  console.log("unregister: ", MY_TASK);

  return BackgroundFetch.unregisterTaskAsync(MY_TASK);
};

export const checkStatus = async () => {
  const status = await BackgroundFetch.getStatusAsync();
  const isRegistered = await TaskManager.isTaskRegisteredAsync(MY_TASK);
  return { status, isRegistered };
};
