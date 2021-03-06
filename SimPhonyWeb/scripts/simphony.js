﻿///<reference path="~/scripts/NinJa.js" />
///<reference path="~/scripts/NinJaAjax.js" />

WebServiceRequest.GenerateServiceReference("Simphony");
Simphony.AddCall("CheckUserId", "Boolean", "userid");
Simphony.AddCall("SignIn", "Boolean", "userid", "password");
Simphony.AddCall("AllSongs", "Array");
Simphony.AddCall("GetSimData", "Array");
Simphony.AddCall("GetMyEdits", "Array");
Simphony.AddCall("ConvertData", "Boolean", "id");
Simphony.AddCall("SearchEdits", "Array", "user", "rating", "song", "style");
Simphony.AddCall("RateEdit", "Object", "editid", "rating");
Simphony.AddCall("CurrentLibrary", "Array");
Simphony.AddCall("AddEdit", "Array", "id");
Simphony.AddCall("RemoveEdit", "Array", "id");
Simphony.AddCall("GetEdits", "Array", "id");
Simphony.AddCall("AddLibrary", "Array", "id");
Simphony.AddCall("AllLibraries", "Array");
Simphony.AddCall("DeleteEdit", "Boolean", "id");
Simphony.AddCall("DeletePack", "Boolean", "id");
Simphony.AddCall("ToggleLike", "Boolean", "editid");