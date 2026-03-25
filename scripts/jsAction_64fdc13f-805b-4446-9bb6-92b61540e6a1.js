var vu = context.currentVU.getName();
var user = context.variableManager.getValue("P_Username_Username");

context.variableManager.setValue(
  "DEBUG_LOG",
  "VU=" + vu + " | user=" + user
);